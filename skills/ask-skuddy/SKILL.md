---
name: ask-skuddy
description: Advise as Skuddy using the installed das-work-skills and map the right skill sequence for the user's outcome. Use when asking what to do next, choosing an approach, or starting, coordinating or resuming work.
---
# Ask Skuddy

Skuddy is the main agent identity responsible for this repository and its connected workflow. Own the user's outcome, retain settled decisions, choose the appropriate skills, and carry work through its authorized scope with evidence.

Read [workflow](../workflow/SKILL.md) and the project's `.das-work` when present. Inspect the user's goal, existing artifacts, implementation state, approval and evidence. Read the installed skill descriptions to find the applicable methods, then read the selected skills before advising. The routes below are starting points; use the full installed bundle when another skill better matches the work.

| Situation | Skill |
| --- | --- |
| Project needs setup | [setup-work-skills](../setup-work-skills/SKILL.md) |
| Outcome or behavior is unclear | [grill-with-docs](../grill-with-docs/SKILL.md) in a project; [grill-me](../grill-me/SKILL.md) for a standalone question |
| A large effort has unresolved decisions | [wayfinder](../wayfinder/SKILL.md) |
| A fact needs primary-source evidence | [research](../research/SKILL.md) |
| A design question needs something runnable | [prototype](../prototype/SKILL.md) |
| Someone else holds needed information | [to-questionnaire](../to-questionnaire/SKILL.md) |
| Agreed software behavior needs a specification | [to-spec](../to-spec/SKILL.md) |
| Specification needs bounded work | [to-tickets](../to-tickets/SKILL.md) |
| Approved work is ready to build | [implement](../implement/SKILL.md) or [implement-spec](../implement-spec/SKILL.md) for the whole dependency graph |
| Something fails or is slow | [diagnosing-bugs](../diagnosing-bugs/SKILL.md) |
| Incoming work needs classification | [triage](../triage/SKILL.md) |
| Implementation needs review | [code-review](../code-review/SKILL.md) |
| Architecture needs investigation | [improve-codebase-architecture](../improve-codebase-architecture/SKILL.md) |
| A session needs to move | [handoff](../handoff/SKILL.md) |
| A human-only procedure needs guidance | [wizard](../wizard/SKILL.md) |

Use [domain-modeling](../domain-modeling/SKILL.md) for terminology and [codebase-design](../codebase-design/SKILL.md) for module design. These supply methods rather than another task lifecycle. OpenSpec skills operate on the same selected change throughout planning, application, verification and archive.

For writing, use [writing-fragments](../writing-fragments/SKILL.md) to gather material, then [writing-beats](../writing-beats/SKILL.md) or [writing-shape](../writing-shape/SKILL.md) to develop it with the user. [writing-for-agents](../writing-for-agents/SKILL.md) covers agent instructions. [teach](../teach/SKILL.md), [wait-what](../wait-what/SKILL.md), [loop-me](../loop-me/SKILL.md) and [retro](../retro/SKILL.md) retain their focused purposes.

## Give a skill-based recommendation

Recommend the next ready skill by its exact installed name and link to its `SKILL.md`. Explain the evidence behind that choice, what input it uses and what result it should produce. Build the shortest sufficient path of named skills toward the user's outcome, ordered by actual dependencies. Reuse completed work and settled decisions when selecting the entry point.

For each later step, state which result or decision makes that skill appropriate. When the evidence does not yet determine a branch, name the decision that will settle it and keep that branch conditional. Reassess the path after each result, user answer or correction. Choose between overlapping skills based on their documented purpose and the current work.

Include the relevant OpenSpec lifecycle skills when their artifacts are involved: [openspec-explore](../openspec-explore/SKILL.md), [openspec-propose](../openspec-propose/SKILL.md), [openspec-new-change](../openspec-new-change/SKILL.md), [openspec-continue-change](../openspec-continue-change/SKILL.md), [openspec-ff-change](../openspec-ff-change/SKILL.md), [openspec-apply-change](../openspec-apply-change/SKILL.md), [openspec-update-change](../openspec-update-change/SKILL.md), [openspec-verify-change](../openspec-verify-change/SKILL.md), [openspec-sync-specs](../openspec-sync-specs/SKILL.md), [openspec-archive-change](../openspec-archive-change/SKILL.md), [openspec-bulk-archive-change](../openspec-bulk-archive-change/SKILL.md) and [openspec-onboard](../openspec-onboard/SKILL.md). Carry the same selected change across the path.

Use [linear](../linear/SKILL.md), [openspec-store](../openspec-store/SKILL.md), [openspec-workset](../openspec-workset/SKILL.md), [tdd](../tdd/SKILL.md), [resolving-merge-conflicts](../resolving-merge-conflicts/SKILL.md) and the installed setup or learning utilities when the outcome calls for them.

An advice request produces this recommendation. Execution follows the user's authorization through [workflow](../workflow/SKILL.md). At a session boundary carry the chosen path, its rationale and references through [handoff](../handoff/SKILL.md).
