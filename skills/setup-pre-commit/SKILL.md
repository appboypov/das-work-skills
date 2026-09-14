---
name: setup-pre-commit
description: Set up Husky pre-commit hooks with lint-staged (Prettier), type checking, and tests in the current repo. Use when user wants to add pre-commit hooks, set up Husky, configure lint-staged, or add commit-time formatting/typechecking/testing.
---

Read [workflow](../workflow/SKILL.md) before applying this skill.


# Setup Pre-Commit Hooks

## What This Sets Up

- **Husky** pre-commit hook
- **lint-staged** running Prettier on all staged files
- **Prettier** config (if missing)
- **typecheck** and **test** scripts in the pre-commit hook

## Steps

Inspect existing hooks, prepare scripts and lint-staged configuration first. Preserve their behavior and merge the requested checks into their existing files. Initialize missing configuration only.

### 1. Detect package manager

Check for `package-lock.json` (npm), `pnpm-lock.yaml` (pnpm), `yarn.lock` (yarn), `bun.lockb` (bun). Use whichever is present. Default to npm if unclear.

### 2. Install dependencies

Install as devDependencies:

```
husky lint-staged prettier
```

### 3. Initialize Husky

```bash
npx husky init
```

On a new setup this creates `.husky/` and adds Husky to the prepare script. For an existing setup, preserve its prepare commands and existing hook content.

### 4. Create `.husky/pre-commit`

For a new hook, use the following content (no shebang needed for Husky v9+). Merge missing commands into an existing hook:

```
npx lint-staged
npm run typecheck
npm run test
```

**Adapt**: Replace `npm` with detected package manager. If repo has no `typecheck` or `test` script in package.json, omit those lines and tell the user.

### 5. Create `.lintstagedrc`

```json
{
  "*": "prettier --ignore-unknown --write"
}
```

### 6. Create `.prettierrc` (if missing)

Only create if no Prettier config exists. Use these defaults:

```json
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": false,
  "trailingComma": "es5",
  "semi": true,
  "arrowParens": "always"
}
```

### 7. Verify

- [ ] `.husky/pre-commit` exists and is executable
- [ ] Existing or newly created lint-staged configuration includes the requested formatter
- [ ] The prepare script initializes Husky and retains the project's other preparation steps
- [ ] `prettier` config exists
- [ ] Run `npx lint-staged` to verify it works

### 8. Exercise the hook

Run the configured hook in an isolated working copy with representative staged files. Confirm formatting, typechecking and tests execute as configured and a failing check blocks the hook. Report the observed results. Commit only when authorized.

## Notes

- Husky v9+ doesn't need shebangs in hook files
- `prettier --ignore-unknown` skips files Prettier can't parse (images, etc.)
- The pre-commit runs lint-staged first (fast, staged-only), then full typecheck and tests
