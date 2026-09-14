#!/usr/bin/env node
import { createHash } from 'node:crypto';
import { existsSync, lstatSync, mkdirSync, readFileSync, readdirSync, realpathSync, writeFileSync } from 'node:fs';
import { basename, dirname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseDocument } from 'yaml';

const source = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const usage = 'Usage: node scripts/install.mjs --skills-dir <directory> [--planning-root <directory>] [--select-schema]';
const hash = (data) => createHash('sha256').update(data).digest('hex');

function canonical(path) {
  const missing = [];
  let ancestor = resolve(path);
  while (!existsSync(ancestor)) {
    missing.unshift(basename(ancestor));
    ancestor = dirname(ancestor);
  }
  return join(realpathSync(ancestor), ...missing);
}

function files(directory, prefix = '') {
  return readdirSync(directory, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name)).flatMap((entry) => {
    const path = join(directory, entry.name);
    const relative = join(prefix, entry.name);
    if (entry.isSymbolicLink()) throw new Error(`Source symlink is unsupported: ${path}`);
    return entry.isDirectory() ? files(path, relative) : [relative];
  });
}

function assertPlainPath(path) {
  for (let current = path; ; current = dirname(current)) {
    if (existsSync(current) && lstatSync(current).isSymbolicLink()) throw new Error(`Destination symlink requires an explicit real path: ${current}`);
    if (dirname(current) === current) break;
  }
}

function install() {
  if (args.includes('--help')) { console.log(usage); return; }
  const options = {};
  for (let index = 0; index < args.length; index++) {
    const key = args[index];
    if (key === '--select-schema') { options.selectSchema = true; continue; }
    if (!['--skills-dir', '--planning-root'].includes(key) || !args[index + 1] || args[index + 1].startsWith('--')) throw new Error(usage);
    if (options[key]) throw new Error(`Repeated option: ${key}`);
    options[key] = canonical(args[++index]);
  }
  const target = options['--skills-dir'];
  const planningRoot = options['--planning-root'];
  if (!target || (options.selectSchema && !planningRoot)) throw new Error(usage);
  if (target === join(source, 'skills') || target.startsWith(join(source, 'skills') + sep)) throw new Error('Choose a destination separate from the bundle source.');
  assertPlainPath(target);
  if (planningRoot) assertPlainPath(planningRoot);
  const receiptPath = join(target, '.client-skills-install.json');
  const previous = existsSync(receiptPath) ? JSON.parse(readFileSync(receiptPath, 'utf8')) : { files: {} };
  if (!previous.files || typeof previous.files !== 'object') throw new Error('Invalid installation receipt.');
  const planned = new Map();
  for (const relative of files(join(source, 'skills'))) {
    planned.set(join(target, relative), readFileSync(join(source, 'skills', relative)));
  }
  if (planningRoot) {
    const specRoot = join(planningRoot, 'openspec');
    const yamlPath = join(specRoot, 'config.yaml');
    const ymlPath = join(specRoot, 'config.yml');
    const configPath = existsSync(yamlPath) ? yamlPath : existsSync(ymlPath) ? ymlPath : yamlPath;
    const config = parseDocument(existsSync(configPath) ? readFileSync(configPath, 'utf8') : '{}\n');
    if (config.errors.length || !config.toJS() || typeof config.toJS() !== 'object' || Array.isArray(config.toJS())) throw new Error(`Invalid planning config: ${configPath}`);
    if (config.get('store') && !existsSync(join(specRoot, 'specs')) && !existsSync(join(specRoot, 'changes'))) throw new Error('The planning root is a store pointer. Select the actual registered store directory.');
    const schemaSource = join(source, 'skills', 'workflow', 'schemas', 'client-work');
    for (const relative of files(schemaSource)) planned.set(join(specRoot, 'schemas', 'client-work', relative), readFileSync(join(schemaSource, relative)));
    if (options.selectSchema) {
      config.set('schema', 'client-work');
      planned.set(configPath, Buffer.from(config.toString()));
    }
  }
  const conflicts = [];
  for (const [path, content] of planned) {
    assertPlainPath(path);
    if (!existsSync(path)) continue;
    if (!lstatSync(path).isFile()) { conflicts.push(path); continue; }
    const current = hash(readFileSync(path));
    const isSelectedConfig = options.selectSchema && planningRoot && [join(planningRoot, 'openspec/config.yaml'), join(planningRoot, 'openspec/config.yml')].includes(path);
    if (current !== hash(content) && previous.files[path] !== current && !isSelectedConfig) conflicts.push(path);
  }
  if (conflicts.length) throw new Error(`Installation stopped before writing. Review locally owned files:\n${conflicts.join('\n')}`);
  const receipt = { version: 1, files: { ...previous.files } };
  let changed = 0;
  for (const [path, content] of planned) {
    if (!existsSync(path) || hash(readFileSync(path)) !== hash(content)) {
      mkdirSync(dirname(path), { recursive: true });
      writeFileSync(path, content);
      changed++;
    }
    receipt.files[path] = hash(content);
  }
  mkdirSync(target, { recursive: true });
  writeFileSync(receiptPath, `${JSON.stringify(receipt, null, 2)}\n`);
  console.log(JSON.stringify({ skillsDirectory: target, planningRoot: planningRoot ?? null, schema: planningRoot ? 'client-work' : null, files: planned.size, changed }, null, 2));
}

try { install(); } catch (error) { console.error(error.message); process.exitCode = 1; }
