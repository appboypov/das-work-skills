---
name: workflow
description: Coordinate Linear work and OpenSpec changes. Use when planning or delivering work with this skill bundle.
---
# Shared workflow

All bundle guidance, templates and schema files travel with the installed skills. Read [setup](references/setup.md) when connecting a project, [acceptance journeys](references/acceptance.md) when exercising the workflow, and [verification](references/verification.md) for recorded evidence and its limits.

## Establish context

Read the requested scope, project instructions, relevant source, and existing work before choosing a skill. Use the project's language and conventions. For software changes, identify the selected OpenSpec change, its planning root, participating code repositories and related Linear URLs. Reuse that context across skills.

Linear is the default work manager. Read [linear](../linear/SKILL.md) when organizing work or reporting relevant progress. OpenSpec holds evolving specifications, design and implementation tasks. Linear issue descriptions use their type's template at creation and remain the initial brief. Subsequent relevant decisions, blockers and completed local results belong in short issue comments. Record issue URLs alongside the corresponding OpenSpec tasks. Comments communicate meaningful changes rather than every local action.

Standalone writing, learning and research use their own useful artifacts. Associate them with a change or Linear work when they contribute to that work.

## Resolve OpenSpec context

Use OpenSpec 1.13.0. Read command help for the operation, then read `openspec status --change <name> --json` and `openspec instructions <artifact> --change <name> --json` as needed. Use the `client-work` schema for this bundle's software changes.

When a store is selected, carry `--store <id>` through every operation accepting it and every handoff. Read the CLI's resolved root, output paths and context files. Artifact paths belong to the planning root; source edits belong to the participating code repositories. Read [stores](../openspec-store/SKILL.md) for shared planning and [worksets](../openspec-workset/SKILL.md) for folder groups.

## Approval and execution

Planning produces a proposed outcome for the user to judge. Record explicit approval of the implementation scope in the change's `design.md` before executing it. An already approved request supplies that approval; reuse it. File existence and CLI readiness establish artifact availability.

Read project conventions before editing. Implement only the agreed behavior. Write finished code and current specifications as a coherent current state, with meaningful names and complete caller updates. Keep historical problems and decisions in issues, change artifacts and archive records.

Use [tdd](../tdd/SKILL.md) at useful behavioral seams. Exercise the actual changed behavior and record the commands, results and limitations under the change's `evidence.md`. Mark a task complete only after its implementation and applicable checks succeed. On requirement revision, inspect completed tasks against the revised behavior and uncheck affected work whose completion evidence no longer applies.

Review the complete relevant implementation with [code-review](../code-review/SKILL.md). Verification reports conformance and remaining findings. Synchronization updates current specs; archive files the change. These operations have distinct outcomes. Publication, commits, PR creation and merging follow the user's authorization and project's policy. Multi-repository changes retain evidence and publication state for each repository.

## Portable interaction

Use the host's available file, search, command and question capabilities. Read another skill through its linked `SKILL.md`; host-specific invocation syntax is optional. Present questions about behaviors and outcomes through question tools when available, otherwise in concise conversation. Ask only decisions not settled by sources or earlier answers, one subject per question, in waves whose prerequisites are known.

Perform work directly. Where the user permits delegation and the host supports it, independent assignments may run concurrently with explicit inputs, output ownership and acceptance criteria. The same dependency order works sequentially. A missing capability blocks only the action that requires it; state the missing prerequisite accurately. Use credentials through the available authenticated connection and keep secrets out of artifacts and handoffs.

## Handoff

Carry the scope, approval, selected store, change path, repository paths, issue URLs, remaining tasks and evidence references. Read existing comments and handoffs before adding a relevant update. Preserve facts in their owning artifact and link them from recipients.
