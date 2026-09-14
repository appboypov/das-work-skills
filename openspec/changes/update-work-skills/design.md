## Context

[Proposal](proposal.md) owns the scope. The README currently documents `npx skills update --global`. `skills/setup-work-skills/SKILL.md` handles project setup and copied schemas. `scripts/check.mjs` discovers skill directories dynamically and rejects personal workspace dependencies. The new skill follows the existing portable name/description frontmatter.

Planning inspection ran `npx --yes skills --help`. The resolved package was skills 1.5.26. Its installed `dist/cli.mjs` shows `resolveUpdateScope` returning `both` when `--global` and `--project` are supplied without skill names. `runUpdate` runs both scopes and sets a nonzero exit status for reported failures. Unqualified noninteractive update chooses only one scope, so it would not cover the settled request.

## Decisions

- Add one short procedure at `skills/update-work-skills/SKILL.md`.
- Run `npx skills update --global --project` from the user's target project directory, or the current directory when no project is involved. Supply no skill-name filter. Both scope flags avoid the updater's interactive scope selection.
- Let the existing updater resolve installed agents, sources and destinations. Project scope means the command's working directory, not every repository on the machine.
- Read command output and exit status, then report updated, unchanged, skipped or failed results as actually observed.
- Add one routing row to ask-skuddy and make the README update section point to this skill with the same command. Retain the existing local-customization caution and separate setup route for copied OpenSpec schemas.
- No new scripts, path configuration, personal workspace skills or installation machinery.

## Repositories

Only `das-work-skills`. Source edits are limited to the new skill, `skills/ask-skuddy/SKILL.md` and `README.md`.

## Verification

After implementation, run `npm run check` and install the bundle into an isolated destination to confirm the new skill is included. Exercise the real updater with disposable HOME and project directories using controlled installations. Cover both scopes, global-only installations, and honest reporting of skipped or failed updates. Record commands and output in change evidence. Do not update the user's live skills as a test.

## Risks

The external updater can change across npm versions. The inspected behavior is from skills 1.5.26; validate the actual command during implementation. Files copied outside the updater's records cannot be promised an update. Existing local skill customizations remain subject to the updater's behavior.

## Implementation approval

Planning authorized by the user's answer `Prepare the proposal`. The complete change folder was presented through Plannotator with `--gate --json`; its response was `{"decision":"approved"}` with no feedback. The user subsequently answered `Implement it` to starting the approved change, authorizing the three source files and isolated verification described here.
