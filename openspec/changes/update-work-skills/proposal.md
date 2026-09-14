## Intent

[[/Users/codaveto/Work/intents/das/update-work-skills/update-work-skills|Confirmed update-work-skills intent]]

## Why

Users need a named skill to run the existing updater against their installed skills without returning to the source repository or remembering its command.

## What changes

- Add a portable `update-work-skills` skill that runs the existing updater for all bundles in global and current-project scope and reports its actual result.
- Use the updater's installation records and existing destinations.
- Link the skill from the README update instructions and ask-skuddy's routing table.
- Keep project-local OpenSpec schema updates in setup-work-skills.

## Capabilities

### New capabilities

- `work-skills-update`: Invoke the existing updater for installed skills and report its outcome.

### Modified capabilities

None. Intent context and brain ingestion behavior remain unchanged.

## Impact

Only the das-work-skills repository is affected. Planned source files are `skills/update-work-skills/SKILL.md`, `skills/ask-skuddy/SKILL.md` and `README.md`. Existing installation and validation scripts discover skill folders automatically.

The external command is `npx skills update --global --project`, executed from the target project when there is one. This includes all bundles tracked by the updater in those scopes. It does not search unrelated project directories or introduce custom update logic.

## Linear

No existing Linear issue is linked to this outcome. Issue creation and publication are outside this planning request.
