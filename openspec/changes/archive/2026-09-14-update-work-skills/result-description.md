**Origin:** Intent `intents/das/update-work-skills/update-work-skills`.

## Delivered outcome

Added update-work-skills to the portable DAS work skills bundle. It runs `npx skills update --global --project` from the target project and reports the actual result. The existing updater owns global and current-project installation destinations. All installed bundles are in scope, not only DAS.

Added the README update instructions and ask-skuddy entry point. The implementation is pushed to main. A fresh verifier passed both requirements and four scenarios with no blocking findings. The recorded runtime limit is that skips were tested, but a nonzero updater failure was not. User skill installations were untouched during verification.

## Artifacts

- [Delivered code](https://github.com/appboypov/das-work-skills/commit/360bd2fdcd3636fd8bd39c182858db1eba84afca)
- [Independent verification publication](https://github.com/appboypov/das-work-skills/commit/18e26e9)
- [Skill](https://github.com/appboypov/das-work-skills/blob/main/skills/update-work-skills/SKILL.md)
- [Archived change](https://github.com/appboypov/das-work-skills/tree/main/openspec/changes/archive/2026-09-14-update-work-skills)

## Verification evidence

- [x] Bundle validation passed: 52 skills and 129 files.
- [x] Isolated installation included the new skill with exact source contents.
- [x] Real CLI runs covered global-only and combined global/project installations.
- [x] Exact documented command refreshed a project skill and reported a controlled skipped source.
- [x] Fresh verifier checked the approved requirements and source fingerprints without touching live user installations.

## Walkthrough

In a project using the bundle, invoke update-work-skills. The agent runs the documented update command from that project. Global and current-project bundles are checked through the updater's installation records. Read the reported updated, unchanged, skipped or failed outcomes. Copied OpenSpec schemas remain managed by setup-work-skills.
