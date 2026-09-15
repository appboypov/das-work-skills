# DAS work skills

Skuddy coordinates 52 skills combining AI Hero's engineering, research and writing methods with the OpenSpec lifecycle and Linear work management.

## Install

Install the complete bundle globally with the skills CLI. Select the desired agents when prompted. `--skill '*'` selects every skill so sibling references resolve:

```sh
npx skills add appboypov/das-work-skills --global --skill '*'
```

The skills CLI manages the global installation and links it into the selected agents. Run this command from any directory.

Then ask the agent to run **setup-work-skills**. It records project context in `.das-work`, configures where intents are saved and where the user's single second brain lives, and selects `das-work-schema` in OpenSpec. Setup instructions, schema templates, acceptance journeys, provenance and licenses are all inside the installed skills. OpenSpec installs independently of this repository. Clients do not need to return here.

Start everyday work with **ask-skuddy**. It recommends exact skill names with links, explains why they fit and lays out the relevant skill sequence. Linear holds the initial templated briefs and meaningful comments. OpenSpec holds evolving specs, design, tasks and evidence.

Framework work discovers relevant active intents and confirms reuse or creation with the user before saving. Users can request work without the framework or an intent. The archive skills preserve curated knowledge and its sources in the configured brain, following that folder's instructions, and report the saved records. See [intent context](skills/workflow/SKILL.md#intent-context) and [brain ingestion](skills/workflow/references/brain-ingestion.md). This ingestion runs through the skills' archive workflow.

## Update

Ask the agent to run [update-work-skills](skills/update-work-skills/SKILL.md). It refreshes this bundle globally when installed globally, locally when installed in the current project, or both when both installations exist.

Review local skill customizations before updating. Project-local OpenSpec schema copies are updated separately through **setup-work-skills**.

## Maintainers

```sh
npm ci --ignore-scripts
npm run check
```

The optional `scripts/install.mjs` provides an explicit destination installer with collision checks and schema selection. Client setup uses the installed skills instead.

Maintain the owned sources under `skills/`. [Workflow](skills/workflow/SKILL.md) is the common contract; [installed setup](skills/workflow/references/setup.md), [acceptance journeys](skills/workflow/references/acceptance.md) and [verification](skills/workflow/references/verification.md) travel with it. [Provenance](skills/workflow/upstream.json) records source revisions and the 45 supplied templates; [licenses](skills/workflow/licenses/) retain the upstream notices.
