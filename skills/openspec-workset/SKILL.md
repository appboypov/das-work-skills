---
name: openspec-workset
description: Manage saved groups of working folders. Use when working across a planning store and several repositories.
---
# OpenSpec worksets

Read [workflow](../workflow/SKILL.md). A workset records a machine-local list of folders. Its first member is primary. OpenSpec store selection remains a separate choice.

1. Inspect `openspec workset list --json`, the selected store and participating code folders. Reuse the intended folder group when present.
2. Create an authorized group with `openspec workset create <name> --member <path> --member <name>=<path> --json`, repeating members as needed. Verify every member path. `--tool <id>` optionally records a preferred opener.
3. Inspect the saved list and confirm the member names and paths. Supply these paths to the executing agent's available workspace-access mechanism. Confirm that it can actually read both planning and source files; membership alone does not grant host access.
4. When the user wants an editor window, use `openspec workset open <name>` with a supported configured opener. The runtime generates a `.code-workspace` file. Its built-in editor openers are `code` and `cursor`; other supported editors may be configured through OpenSpec's `openers` setting. Opening an editor is optional for the skill workflow. Report unsupported openers or missing executables accurately.
5. Use `openspec workset remove <name>` to remove an authorized saved group, adding `--yes` for confirmed non-interactive removal and `--json` for structured output. This removes the workset definition and preserves member folders. Verify the resulting list.

Return the actual workset name, folders and observed access or opening result. Branch coordination and artifact write destinations follow their own project and store context.
