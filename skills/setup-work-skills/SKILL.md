---
name: setup-work-skills
description: Configure a project for the shared skills. Use when connecting Linear, configuring intent and brain storage, and selecting OpenSpec planning storage.
---
# Set up the project

Read [workflow](../workflow/SKILL.md). Inspect the existing project instructions, planning configuration, domain glossary and decision records. Reuse them. Honour an explicit choice to work outside the framework or an advice-only request before creating or modifying `.das-work`.

1. Discover the authenticated Linear workspace, relevant team, existing projects, statuses, type labels and templates using [linear](../linear/SKILL.md). Establish only missing ownership choices with the user. Record stable identifiers and useful links in `.das-work` at the project root, following [project context](../workflow/references/setup.md#project-context). Keep credentials in the authenticated connection.
2. Establish the intent folder and exactly one second-brain folder with the user. Inspect each destination for existing instructions and follow them before writing. Record labelled `Intent folder` and `Brain folder` entries in `.das-work`. Relative paths resolve from the defining `.das-work` rather than the working directory. Separate roots and nested folders are both supported.
   Resolve the worktree folder through [project context](../workflow/references/setup.md#project-context). Record the resolved `Worktree folder` entry in `.das-work`, preserving an existing user-selected location.
3. Read [installed setup](../workflow/references/setup.md). Establish repo-local, store-only or store-optional planning through [openspec-store](../openspec-store/SKILL.md). Install the `das-work-schema` schema from the installed workflow skill into the resolved planning root, select it in the existing configuration, and verify native schema validation. Initialize OpenSpec only when authorized and verify `openspec context --json` resolves the intended root.
4. Read the project's existing glossary and ADR organization. For a single domain, use `CONTEXT.md` and `docs/adr/` when needed. For multiple actual domains, a context map links their own glossaries. Create a glossary or decision record when there is settled content to record, following [domain-modeling](../domain-modeling/SKILL.md).
5. Make the installed skill location and `.das-work` discoverable through the host's supported skill discovery and existing project instructions. Preserve unrelated instructions. Configure native Linear templates only when requested through [template setup](../linear/template-setup.md).
6. Verify skill discovery, runtime version, schema resolution, Linear access, configured intent and brain folders, the resolved worktree destination, and the selected planning root. Report actual locations and any missing capability.
