---
name: openspec-apply-change
description: Implement tasks from the selected OpenSpec change. Use when starting or resuming approved implementation.
---
# Apply a change

Read [workflow](../workflow/SKILL.md). Resolve the change from the request or existing context. If several changes match, use `openspec list --json` and ask which outcome is intended. Preserve the selected store on every supported command.

1. Run `openspec status --change <name> --json` and `openspec instructions apply --change <name> --json`. Read `schemaName`, `planningHome`, `changeRoot`, `actionContext`, every `contextFiles` path, the returned task list and progress. Use returned paths rather than assuming the current directory is the planning root.
2. Apply relevant project `context`. Read every `operationGuidance` entry as advisory instructions compatible with the user and the workflow. These fields do not replace CLI state or prove completion. Resolve conflicting requirements before editing.
3. Handle `blocked` by reporting missing prerequisites and using [continue](../openspec-continue-change/SKILL.md) when planning is authorized. For `all_done`, examine existing evidence and the current requirements before recommending [verify](../openspec-verify-change/SKILL.md). Checked tasks alone establish checklist state. If changed requirements invalidate completion, use [update](../openspec-update-change/SKILL.md) to reconsider the affected tasks.
4. Confirm the explicit implementation approval covers the pending work. Read project conventions and establish or reuse the appropriate [issue worktree](../workflow/SKILL.md#issue-worktrees) in each participating repository before its first edit. Read and change current code there. If this invocation targets one issue or slice, restrict execution to its corresponding tasks and actual prerequisites.
5. Implement ready tasks in dependency order. Use [tdd](../tdd/SKILL.md) at useful behavioral seams. Keep the change within its agreed scope, update affected callers and preserve unrelated work. If implementation reveals a material design issue, resolve it in planning before proceeding.
6. Exercise each task's specified behavior and applicable checks. Record the commands, observations and limitations in the change's evidence file. Mark `- [x]` only when the behavior and required checks succeed. Keep failed, blocked or partially delivered tasks unchecked. Recompute readiness after each completed prerequisite.
7. Use [code-review](../code-review/SKILL.md) on the complete relevant implementation, including uncommitted work. Resolve authorized findings and repeat affected checks. Read current status and report completed tasks, remaining blockers and exact evidence.
8. Add concise comments to linked Linear issues for relevant developments through [linear](../linear/SKILL.md). Keep their template descriptions as historical briefs. Recommend verification before synchronization and archive. Publishing source follows the separate project authorization.

A missing artifact, unresolved behavioral choice or failed check is a concrete blocker. Continue independent work that remains within scope; never narrow a requirement to make a task appear complete.
