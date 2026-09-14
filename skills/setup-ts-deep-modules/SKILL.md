---
name: setup-ts-deep-modules
description: Wire dependency-cruiser into a TypeScript repo so each package is a deep module, with implementation hidden in subfolders and reachable only through its entry-point files. User-invoked.
---

Read [workflow](../workflow/SKILL.md) before applying this skill.


# Setup TS Deep Modules

Make every package in this repo a **deep module**: a lot of behaviour behind a small interface. A package's public surface is its **entry points** (the files at the package root), and everything in its subfolders is hidden. This skill installs [dependency-cruiser](https://github.com/sverweij/dependency-cruiser) and the rules that make the entry points the only way in, then proves the rules bite.

For the vocabulary (deep module, interface, seam, depth), read [codebase-design](../codebase-design/SKILL.md) and use its language throughout.

## The shape this enforces

```
src/packages/
  <name>/
    index.ts        ← an entry point (public). Import this from outside.
    client.ts       ← another entry point. Packages may expose SEVERAL.
    lib/            ← implementation: hidden from outside, free to import each other.
    tests/          ← co-located tests + fixtures (a subfolder, so private).
```

The public surface is the package's **root files**, not one designated `index.ts`. By convention implementation lives in `lib/` and tests in `tests/`, giving every package the same two-folder shape. The rule itself is general, though: *anything* in *any* subfolder is private, so you never extend the config to add a folder.

Four rules, all `error`:

1. **Entry-point boundary**: code outside a package (app code or another package) may import only that package's entry points (its root files), never anything in its subfolders.
2. **Intra-package freedom**: a package's own files import each other freely.
3. **Tests through the entry points**: files under `<pkg>/tests/` may import any package's entry points and their own `tests/` fixtures, but never any package's subfolder internals (not even their own). Integration tests across packages are fine; deep imports are not.
4. **No cycles**: no dependency cycles.

**Entry points, not a barrel.** Because the public surface is *every* root file, a package can expose several small entry points (`index.ts`, `client.ts`, `server.ts`) instead of funnelling everything through one giant `index.ts`. Barrel files that re-export a whole subtree are discouraged; keep entry points small and hide implementation in subfolders.

Layering decisions follow the project's actual dependency contracts.

## Steps

### 1. Detect the environment

- **Package manager**: `pnpm-lock.yaml` → pnpm, `yarn.lock` → yarn, `bun.lockb` → bun, else npm. Use it for every command below (`pnpm`/`yarn`/`npm run`/`bunx`).
- **Packages root**: reuse the existing package layout. If none exists, use `src/packages` when `src/` exists, otherwise `packages`.
- **Existing config**: check for a `.dependency-cruiser.*` file. If one exists, do **not** overwrite it: merge the four rules and the options in, and tell the user what you added.

**Done when:** package manager, packages root, and existing-config status are all known.

### 2. Install dependency-cruiser

Install `dependency-cruiser` as a devDependency with the detected package manager.

**Done when:** `dependency-cruiser` is in `devDependencies`.

### 3. Write the config

Copy [`dependency-cruiser.config.cjs`](./dependency-cruiser.config.cjs) to the repo root as `.dependency-cruiser.cjs`. Set `PACKAGES_ROOT` to the root detected in step 1. The rules are path-depth based and extension-agnostic, so nothing else needs adapting.

**Done when:** `.dependency-cruiser.cjs` exists with the correct `PACKAGES_ROOT`, and the four forbidden rules are present.

### 4. Wire it into the checks

- Add a `lint:boundaries` script: `depcruise <packages-root>` (or `depcruise src`).
- Fold it into the repo's umbrella check command, the one that already runs typecheck (e.g. a `check` / `ci` / `validate` script). Do **not** touch `tsconfig` or add path aliases.
- If there is no umbrella script, add `lint:boundaries` and tell the user to include it in CI.

**Done when:** `lint:boundaries` exists and runs as part of the same command as typecheck.

### 5. Scaffold the example package

Create a temporary example package outside production source to exercise the configured boundaries. Give it an entry point, an internal implementation and a test that reaches behavior through the entry point. Remove the fixture after the rules have been exercised.

**Done when:** the example demonstrates a valid public import and provides a controlled invalid deep import for the next step.

### 6. Prove the rules bite

This is the completion criterion for the whole skill: a config that doesn't fail on a violation is worthless.

1. Run `lint:boundaries`. It must **pass** on the clean example.
2. Temporarily add a deep import to `tests/example.test.ts` (e.g. `import { thing } from "../lib/impl"`). Run `lint:boundaries` again; it must **fail** with `tests-through-entrypoints`.
3. Revert the deep import. Run once more, and it must **pass**.

**Done when:** you have observed a pass, then a fail on the deep import, then a pass again. If step 2 does not fail, the rules are not wired correctly, so fix before finishing.

### 7. Document the convention

Write a `README.md` **in the packages folder** (`<packages-root>/README.md`, next to the packages it governs) covering: the `src/packages/<name>/` layout (entry points at the root, `lib/` for implementation, `tests/` for tests), "import only through a package's entry points (its root files)", and how to run `lint:boundaries`. **Discourage barrel files** explicitly: expose several small entry points instead of re-exporting a whole subtree through one index. Keep it to the copy-me snippet plus the four rules in one paragraph each.

Then link that document from the project's existing instruction entry point using its actual relative path. State when package authors should read it.

**Done when:** `<packages-root>/README.md` exists and discourages barrels, and the project's existing instruction entry point links to it.

## Notes

- The config's `$1` back-references (dependency-cruiser's group matching) are what let a package reach its own internals while outsiders can't. Don't flatten them into separate per-package rules.
- Public vs private is decided by **depth**: a package's root files are entry points; anything in a subfolder is private. The conventional subfolders are `lib/` (implementation) and `tests/`, but the rule doesn't hardcode them: any subfolder is private, so a new folder never needs a config change. Adding an entry point is just adding a root file (no barrel).
- Packages are **flat**: one tier of immediate children under the root. A package's internals may nest as deep as you like; a package may not contain another package.
- Use `.cjs` (not `.js`) so the config's `module.exports` works even in `"type": "module"` repos.
