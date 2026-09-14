---
name: to-tickets
description: Break a change into usable slices and Linear issues. Use when an agreed specification needs an implementation breakdown.
---
# Slice the work

Read [workflow](../workflow/SKILL.md), [linear](../linear/SKILL.md), the selected change's specifications and design, and any supplied issue's full description and comments. Inspect relevant code and tests to ground the breakdown.

1. Derive the smallest independently demonstrable slices through the behavior. Each slice reaches the layers needed to make its outcome work. Identify actual dependencies; avoid artificial ordering by file type or layer.
2. For a cross-cutting structural change, choose a coherent change boundary that updates its consumers together and proves behavioral parity. The completed implementation has one intended contract and complete caller coverage.
3. Give each task an observable result, participating repository, prerequisites and verification. Reuse the schema's checkbox format and output path from `openspec instructions tasks --change <name> --json`, carrying the selected store. If called while authoring that artifact, use the supplied instructions without recursive invocation.
4. Present the breakdown for review when not already approved. Questions concern deliverables and dependencies. Incorporate the user's corrections into the same task list.
5. Reuse related Linear issues. When creating approved work, choose its actual type and fill the corresponding template through linear. Keep the issue's relevant journeys and acceptance criteria in its initial description. Publish prerequisite issues before dependents so native relationships can refer to real identifiers.
6. Record each issue URL against its related task in OpenSpec. Multiple implementation steps may contribute to one bounded outcome issue. A task's later refinement stays in OpenSpec; meaningful developments go into short issue comments.
7. Validate the dependency graph and checklist. Report ready work and blockers. Creating or completing a breakdown does not close parent issues or authorize implementation.

For detailed assignments use the shared [task template](../workflow/templates/tasks/a-task.md) with an applicable category body. Keep checklist completion in the OpenSpec task artifact and link supporting scope or evidence.
