# DAS work skills

Skuddy coordinates 51 skills combining AI Hero's engineering, research and writing methods with the OpenSpec lifecycle and Linear work management.

## Install

From the client project, install this bundle with the skills CLI. Select the desired agent when prompted; keep all skills selected so sibling references resolve:

```sh
npx skills add appboypov/das-work-skills --skill '*' --copy
```

Use `--global` for user-level installation. `--copy` makes the installation independent of a source checkout.

Then ask the agent to run **setup-work-skills**. Setup instructions, the custom schema, templates, acceptance journeys, provenance and licenses are all inside the installed skills. OpenSpec installs independently of this repository. Clients do not need to return here.

Start everyday work with **ask-skuddy**. Linear holds the initial templated briefs and meaningful comments. OpenSpec holds evolving specs, design, tasks and evidence.

## Maintainers

```sh
npm ci --ignore-scripts
npm run check
```

The optional `scripts/install.mjs` provides an explicit destination installer with collision checks and schema selection. Client setup uses the installed skills instead.

Maintain the owned sources under `skills/`. [Workflow](skills/workflow/SKILL.md) is the common contract; [installed setup](skills/workflow/references/setup.md), [acceptance journeys](skills/workflow/references/acceptance.md) and [verification](skills/workflow/references/verification.md) travel with it. [Provenance](skills/workflow/upstream.json) records source revisions and the 45 supplied templates; [licenses](skills/workflow/licenses/) retain the upstream notices.
