---
name: update-work-skills
description: Update installed skill bundles through the skills CLI. Use when the user wants to update their installed skills.
---
# Update work skills

1. Use the user's target project as the working directory, or the current directory when no project is involved.
2. Run `npx skills update --global --project`. This updates all bundles tracked by the updater in global and current-project scope using their existing installation records and destinations.
3. Read the output and exit status. Report the actual updates or up-to-date result, including any skipped skills or failures.
