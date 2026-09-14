# DAS work skills

Skuddy coordinates 51 skills combining AI Hero's engineering, research and writing methods with the OpenSpec lifecycle and Linear work management.

## Install

Install the complete bundle globally with the skills CLI. Select the desired agents when prompted. `--skill '*'` selects every skill so sibling references resolve:

```sh
npx skills add appboypov/das-work-skills --global --skill '*'
```

The skills CLI manages the global installation and links it into the selected agents. Run this command from any directory.

Then ask the agent to run **setup-work-skills**. It records project context in `.das-work` and selects `das-work-schema` in OpenSpec. Setup instructions, schema templates, acceptance journeys, provenance and licenses are all inside the installed skills. OpenSpec installs independently of this repository. Clients do not need to return here.

Start everyday work with **ask-skuddy**. It recommends exact skill names with links, explains why they fit and lays out the relevant skill sequence. Linear holds the initial templated briefs and meaningful comments. OpenSpec holds evolving specs, design, tasks and evidence.

## Update

```sh
npx skills update --global
```

This updates all globally installed skills, including this bundle. Review local skill customizations before updating. Project-local OpenSpec schema copies are updated separately through **setup-work-skills**.

## Maintainers

```sh
npm ci --ignore-scripts
npm run check
```

The optional `scripts/install.mjs` provides an explicit destination installer with collision checks and schema selection. Client setup uses the installed skills instead.

Maintain the owned sources under `skills/`. [Workflow](skills/workflow/SKILL.md) is the common contract; [installed setup](skills/workflow/references/setup.md), [acceptance journeys](skills/workflow/references/acceptance.md) and [verification](skills/workflow/references/verification.md) travel with it. [Provenance](skills/workflow/upstream.json) records source revisions and the 45 supplied templates; [licenses](skills/workflow/licenses/) retain the upstream notices.
