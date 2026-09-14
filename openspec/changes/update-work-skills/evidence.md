# Update work skills evidence

## Delivered scope

Added `skills/update-work-skills/SKILL.md` with a three-step procedure: choose the target working directory, run `npx skills update --global --project`, and report observed output and exit status. Added the ask-skuddy routing row and updated README instructions and the skill count to 52. No updater, installer or schema logic changed.

## Checks run

- `npm run check`: passed with 52 skills, 45 templates and 129 files; local references, portable metadata and schema templates valid.
- `openspec validate update-work-skills --type change --strict --json`: passed during planning.
- `node scripts/install.mjs --skills-dir <temporary>/bundle`: copied 129 files. Installed update-work-skills content exactly matched source.
- Real skills CLI 1.5.26 installed setup-work-skills from appboypov/das-work-skills into disposable global and project scopes, targeting an isolated agent installation.
- With only the global remote installation, `update --global --project` exited 0 and reported all global skills up to date and no project skills to update.
- With both remote installations, the same invocation exited 0, checked global skills and refreshed setup-work-skills in the project.
- The exact documented `npx skills update --global --project` command exited 0 and reported the project skill updated.
- With a controlled global lock entry for a locally installed fixture, the exact command reported update-work-skills could not be checked automatically because it used a local path, while successfully refreshing the project skill. It did not report that skipped skill as updated.

[Raw commands and output](smoke-results.json) preserve every invocation, including fixture preparation. HOME and XDG_CONFIG_HOME pointed to temporary directories; the actual user's installed skills were not updated. The existing npm cache supplied the CLI. Temporary installations were removed after their evidence was saved.

## Review

### Standards

Reviewed the new skill and both changed entry points against the existing skill frontmatter, portability checker and approved three-file scope. The procedure uses the existing CLI and carries no personal workspace dependencies. Existing schema-update guidance stays with setup-work-skills. No blocking findings.

### Requirements

The skill and both entry points agree on global plus current-project scope and leave destination selection with the updater. Real invocations exercised global-only and combined installations. The procedure explicitly reads output and exit status and includes reported skips or failures. No blocking findings.

## Limits and observations

This is a Markdown skill wrapper, not a new updater implementation. The real command and installation behavior were exercised directly; no independent agent execution of the written skill or failing-update runtime scenario was performed.

Local-source installs are not automatically entered into the updater's global lock. The skip-output fixture therefore used an explicit controlled lock entry. The upstream CLI also omits skipped entries when checkable global skills are unchanged; the wrapper reports observed output and does not claim a stronger inventory audit. These upstream behaviors were not changed.

No live user installation, commit, publication, current-spec synchronization or archive was performed.
