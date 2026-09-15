---
name: workflow
description: Coordinate Linear work and OpenSpec changes. Use when planning or delivering work with this skill bundle.
---
# Shared workflow

All bundle guidance, templates and schema files travel with the installed skills. Read [setup](references/setup.md) when connecting a project, [acceptance journeys](references/acceptance.md) when exercising the workflow, and [verification](references/verification.md) for recorded evidence and its limits.

## Establish context

Read the requested scope, project instructions, the project root's `.das-work`, relevant source, and existing work before choosing a skill. `.das-work` holds the project context described in [setup](references/setup.md#project-context), including the configured intent folder and single brain folder. Follow [intent context](#intent-context) to discover, confirm or resume the owning intent before framework work. Honour an explicit framework opt-out or read-only request. For software changes, identify the selected OpenSpec change, its planning root, participating code repositories and related Linear URLs. Reuse that context across skills.

Linear is the default work manager. Read [linear](../linear/SKILL.md) when organizing work or reporting relevant progress. OpenSpec holds evolving specifications, design and implementation tasks. Linear issue descriptions use their type's template at creation and remain the initial brief. Subsequent relevant decisions, blockers and completed local results belong in short issue comments. Record issue URLs alongside the corresponding OpenSpec tasks. Comments communicate meaningful changes rather than every local action.

Standalone writing, learning and research use their own useful artifacts. Associate them with a change or Linear work when they contribute to that work.

## Intent context

Use the configured folders and path rules in [project context](references/setup.md#project-context). Read the intent folder's applicable instructions before creating or updating its records.

Before framework work, search the configured intent folder for relevant active intents and read their linked preparation. Clarify the requested outcome and discuss whether to extend an existing active intent or create an independent intent. Obtain explicit user confirmation before creating or updating any intent record. An existing confirmation covers the exact proposed record update; any revision or changed outcome requires renewed confirmation. If the user corrects the proposed outcome or intent relationship, revise the interpretation and confirm before writing.

Once confirmed and authorized, save the intent in the configured folder and identify its path. Use a descriptive outcome name and follow the folder's record format.

Record verbatim user requests and corrections separately from agent interpretation. Link related preparation, OpenSpec changes and established Linear work. Ownership boundaries remain distinct:
- The intent owns the requested outcome, provenance, and links to preparation.
- OpenSpec retains specification, design approval, and implementation-task ownership.
- Linear retains work-tracking ownership.

Proposals reference the owning intent, and the intent links the preparation without duplicating authoritative specifications or task progress.

Honour an explicit choice to work outside the framework. Carry out requested work within authorization without requiring framework setup, creating an intent, or triggering framework ingestion. Honour advice-only and read-only requests by inspecting relevant records while leaving intent, project, brain and Linear records unchanged.

An intent remains active while its requested outcome or linked preparation remains unfinished. An intent may span multiple OpenSpec changes. Archiving one linked change leaves unfinished intent work active and updates only relevant results and references within the confirmed scope. Cross-repository work and handoffs preserve the owning intent path and defining `.das-work` path so receiving agents resolve relative paths from the defining context file.

## Resolve OpenSpec context

Use OpenSpec 1.13.0. Read command help for the operation, then read `openspec status --change <name> --json` and `openspec instructions <artifact> --change <name> --json` as needed. Use the `das-work-schema` schema for this bundle's software changes.

When a store is selected, carry `--store <id>` through every operation accepting it and every handoff. Read the CLI's resolved root, output paths and context files. Artifact paths belong to the planning root; source edits belong to the participating code repositories. Read [stores](../openspec-store/SKILL.md) for shared planning and [worksets](../openspec-workset/SKILL.md) for folder groups.

## Approval and execution

Planning produces a proposed outcome for the user to judge. Record explicit approval of the implementation scope in the change's `design.md` before executing it. An already approved request supplies that approval; reuse it. File existence and CLI readiness establish artifact availability.

Read project conventions before editing. Implement only the agreed behavior. Write finished code and current specifications as a coherent current state, with meaningful names and complete caller updates. Keep historical problems and decisions in issues, change artifacts and archive records.

Use [tdd](../tdd/SKILL.md) at useful behavioral seams. Exercise the actual changed behavior and record the commands, results and limitations under the change's `evidence.md`. Mark a task complete only after its implementation and applicable checks succeed. On requirement revision, inspect completed tasks against the revised behavior and uncheck affected work whose completion evidence no longer applies.

Review the complete relevant implementation with [code-review](../code-review/SKILL.md). Verification reports conformance and remaining findings. Synchronization updates current specs; the archive skills file the change and preserve its knowledge through [brain ingestion](references/brain-ingestion.md). Complete the selected specification reconciliation, archive operation, ingestion and readback before reporting archive completion. Publication, commits, PR creation and merging follow the user's authorization and project's policy. Multi-repository changes retain evidence and publication state for each repository.

### Issue worktrees

Linear issue implementation uses worktrees by default. The issue released as one outcome owns the integration branch and worktree in each participating repository, normally a story or bug. Determine ownership from what ships together. Establish that worktree from the repository's default branch before the first repository edit for the outcome. An independently shipped issue owns its own worktree.

Issues beneath that outcome use their own worktrees, branching from the owning issue's branch even while it is unmerged. Merge their completed work locally into the owning branch. The owning issue has one pull request to the default branch per repository, containing the combined work. Implementation, review markers, fixes and checks run in the worktree for the issue being worked on. Carry its path and base branch into task context and handoffs.

Resolve the worktree folder through [project context](references/setup.md#project-context). Place each worktree under `{folder}/{organisation key}/{repo}/{branch}`, using the project's established organisation and repository names and the issue's Linear branch name. Where the plx CLI is available, use `plx create worktree --issue {identifier} --base {base}` and pass `--path {path}` when the configured destination differs from its default. Otherwise use `git worktree add` with the same branch, base and destination. Reuse an existing worktree for the same issue.

Keep the main checkout on the repository's default branch throughout. Fetch and fast-forward it before creating worktrees, when resuming issue work, and immediately after each merge to the default branch. Preserve concurrent local changes; report any obstruction to that update rather than overwriting them. Apply an explicitly selected project direct-to-main mode where configured. Record-only work in a shared administrative workspace follows that workspace's main-branch policy.

After opening the owning issue's pull request, babysit it until merged, closed or the user stops monitoring. Watch required checks, conflicts and review feedback, handling fixes in its worktree. Use the host's supported persistent follow-up when monitoring must continue beyond the active turn. After the user's approval and successful required checks, squash-merge the approved revision and immediately update the main checkout as above. Keep the remote branch; remove local worktrees and branches through the project's source-preservation policy.

## Portable interaction

Use the host's available file, search, command and question capabilities. Read another skill through its linked `SKILL.md`; host-specific invocation syntax is optional. Present questions about behaviors and outcomes through question tools when available, otherwise in concise conversation. Ask only decisions not settled by sources or earlier answers, one subject per question, in waves whose prerequisites are known.

When recommending work, name the exact installed skill and link its `SKILL.md`, explain why it fits the current evidence, and state the result it should produce. Use [ask-skuddy](../ask-skuddy/SKILL.md) to assemble the relevant skills into an ordered path. Distinguish the next ready skill from later steps with unresolved prerequisites.

Perform work directly. Where the user permits delegation and the host supports it, independent assignments may run concurrently with explicit inputs, output ownership and acceptance criteria. The same dependency order works sequentially. A missing capability blocks only the action that requires it; state the missing prerequisite accurately. Use credentials through the available authenticated connection and keep secrets out of artifacts and handoffs.

## Handoff

Carry the approved scope, owning intent path, defining `.das-work` path, exact working directories, selected store, change identity and path, Linear links, remaining tasks and evidence references. Preserve intent and folder ownership through [intent context](#intent-context) across repositories and shared planning stores. For incomplete archive ingestion, record the archived identity, known saved brain paths and remaining work. Read existing comments and handoffs before adding a relevant update. Preserve facts in their owning artifact and link them from recipients.
