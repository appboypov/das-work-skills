#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const skills = join(root, 'skills');
const errors = [];
const names = new Set();
function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() ? walk(join(directory, entry.name)) : [join(directory, entry.name)]);
}
const files = walk(skills);
for (const directory of readdirSync(skills)) {
  const file = join(skills, directory, 'SKILL.md');
  if (!existsSync(file)) { errors.push(`Missing SKILL.md: ${directory}`); continue; }
  const content = readFileSync(file, 'utf8');
  const frontmatter = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!frontmatter) { errors.push(`Missing frontmatter: ${file}`); continue; }
  try {
    const data = parse(frontmatter[1]);
    if (data.name !== directory || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.name)) errors.push(`Invalid skill identity: ${file}`);
    if (names.has(data.name)) errors.push(`Duplicate skill: ${data.name}`);
    names.add(data.name);
    if (typeof data.description !== 'string' || !data.description.trim()) errors.push(`Missing description: ${file}`);
    if (Object.keys(data).some((key) => !['name', 'description'].includes(key))) errors.push(`Nonportable skill metadata: ${file}`);
  } catch (error) { errors.push(`${file}: ${error.message}`); }
}
for (const file of files.filter((file) => file.endsWith('.md'))) {
  const content = readFileSync(file, 'utf8');
  const prose = content.replace(/^```[^\n]*\n[\s\S]*?^```\s*$/gm, '').replace(/<!--[\s\S]*?-->/g, '');
  for (const match of prose.matchAll(/\[[^\]\n]*\]\(([^)\n]+)\)/g)) {
    const link = match[1].split('#')[0];
    if (!link || /^(?:[a-z]+:|\/)/i.test(link) || /[<>*{}]/.test(link)) continue;
    if (!existsSync(resolve(dirname(file), decodeURIComponent(link)))) errors.push(`Broken local link: ${file} -> ${link}`);
  }
  if (/claude|codex|disable-model-invocation|allowed-tools|Skill tool|~\/Work\b|skills\/our-work-conventions/i.test(content)) errors.push(`Host or personal dependency: ${file}`);
  for (const marker of ['OPTIONAL', 'JOURNEY', 'SCREEN', 'SKILL', 'STEP', 'WAY_IN']) {
    const start = content.split(`<!-- ${marker}:START`).length;
    const end = content.split(`<!-- ${marker}:END`).length;
    if (start !== end) errors.push(`Unbalanced ${marker} template markers: ${file}`);
  }
}
const templateFiles = files.filter((file) => file.includes(`${sep}workflow${sep}templates${sep}`) && file.endsWith('.md'));
if (templateFiles.length !== 45) errors.push(`Expected 45 supplied templates, found ${templateFiles.length}`);
const schema = parse(readFileSync(join(skills, 'workflow/schemas/das-work-schema/schema.yaml'), 'utf8'));
for (const artifact of schema.artifacts) if (!existsSync(join(skills, 'workflow/schemas/das-work-schema/templates', artifact.template))) errors.push(`Missing artifact template: ${artifact.template}`);
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log(JSON.stringify({ skills: names.size, templates: templateFiles.length, files: files.length, localReferences: 'valid', portableMetadata: 'valid', schemaTemplates: 'present' }, null, 2));
