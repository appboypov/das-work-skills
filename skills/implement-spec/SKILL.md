---
name: implement-spec
description: Deliver an approved change across its task dependency graph. Use when implementing a complete specification.
---
# Implement a specification

Read [workflow](../workflow/SKILL.md). Resolve the change, its current specifications, approval, task checklist, issue links and participating repositories.

1. Build the task dependency graph from the actual task records and Linear relationships. Identify the ready frontier. Flag cycles or missing prerequisites before assigning work.
2. Work directly through ready tasks with [implement](../implement/SKILL.md). Where delegation is permitted and available, independent tasks with disjoint output ownership may execute concurrently. Give each the same selected change and store plus its bounded scope. Sequential execution follows the same graph.
3. Integrate each completed result into the appropriate repository and run checks that cross task boundaries. A failed dependency keeps its dependents pending. Recompute the frontier after integration, not merely after a worker reports completion.
4. Review the complete relevant diff in each repository and verify the integrated outcome. Resolve findings within approved scope and record evidence. Revisit task completion when requirements change.
5. When publication is authorized, use the project's branch and PR policy for each repository. Link every PR to its relevant issues and the shared change. Report per-repository readiness; completion of one PR does not finish the whole change.
6. Report completed work, remaining blockers and verification evidence. Synchronization and archive use their OpenSpec skills when the change is eligible. Preserve working copies containing unintegrated work.
