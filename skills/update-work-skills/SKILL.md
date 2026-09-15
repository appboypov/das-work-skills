---
name: update-work-skills
description: Update installed DAS work skills globally or in the current project. Use when the user wants to update this bundle.
---
# Update work skills

1. Consider the current project's configuration and the global configuration to determine where DAS work skills are installed.
2. Run the command for each existing installation:
   - Global: `npx skills add appboypov/das-work-skills --global --skill '*'`
   - Current project: `npx skills add appboypov/das-work-skills --skill '*'`, run from the current project directory.
   - If both installations exist, run both commands. If neither exists, report that there is no installation to update.
3. Read each command's output and exit status. Report the actual result, including any skipped skills or failures.
