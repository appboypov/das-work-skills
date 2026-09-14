---
name: linear
description: Organize work and communicate progress in Linear. Use when managing initiatives projects issues or human actions.
---
# Linear

Read [workflow](../workflow/SKILL.md). Use the authenticated Linear connection available to this agent. Discover its supported operations and the workspace's teams, memberships, statuses, labels, templates and existing related work before writing. Read full issue descriptions and comments when resuming work. Resolve ambiguous workspace or team identity with the user.

## Organize the outcome

Choose the smallest useful structure and reuse existing entities:

| Entity or capability | Use |
| --- | --- |
| Initiative | Strategic outcome spanning projects; connect projects and maintain meaningful initiative updates |
| Project | Defined outcome across one or more teams; set scope, owner, resources and target dates when known |
| Milestone | Named intermediate result within a project; assign relevant issues |
| Issue | One bounded outcome with a type and observable acceptance criteria |
| Sub-issue | Independently trackable part of a parent outcome |
| Relationships | Native blocking, blocked-by, related and duplicate relationships |
| Cycle | Team timebox when the team uses cycles |
| Priority and estimate | Agreed urgency and size using the team's actual scale |
| Labels and statuses | Workspace classification and lifecycle vocabulary |
| Documents and resources | Shared context and accessible links to specifications and evidence |
| Updates and comments | Material progress, decisions, blockers and delivery evidence |
| Triage | Classify incoming work, establish scope and route it to the right team or project |

An issue belongs to one project; a cross-project outcome uses related issues with explicit dependencies. Use capabilities supported by the workspace's plan and the current connection. Discover available release, reporting, view and integration capabilities when the requested outcome needs them. Report an unavailable operation rather than claiming it ran.

## Create an issue

Choose one of the [issue templates](../workflow/templates/issues/): [story](../workflow/templates/issues/a-story.md), [bug](../workflow/templates/issues/a-bug.md), [enhancement](../workflow/templates/issues/an-enhancement.md), [refactor](../workflow/templates/issues/a-refactor.md), or [chore](../workflow/templates/issues/a-chore.md).

Read and fill its existing sections. Keep relevant journeys and acceptance criteria in the description. Resolve replace markers from known facts, omit marked optional sections when inapplicable, and remove authoring comments from the published instance. Missing facts remain explicit questions or blockers; never invent them to fill a template. Preserve the template source itself.

Apply the team's existing type classification, assignment, project, milestone, dependencies and appropriate status. Record the returned identifier and canonical URL in the related OpenSpec change or task. Include an accessible change link where one exists. Local paths identify files for agents; they are not web links for readers.

## Tasks and human actions

Use [the task template](../workflow/templates/tasks/a-task.md) for a detailed assignment under the change when the checklist alone cannot carry the needed context. Insert the relevant category template from [tasks](../workflow/templates/tasks/). The OpenSpec checklist owns execution completion; supporting task files provide scope and evidence.

Use the matching [action template](../workflow/templates/actions/) for a ready human action. Include exact steps, required links and the result to report. Session actions include a complete portable session request. Place these in the team's configured human-action workflow. Preserve the recipient's requested language. A review action is ready only when its material and checks are ready.

## Maintain work

Issue descriptions retain their initial template brief. Read the existing discussion and add a short comment for a relevant decision, changed requirement, blocker or completed local result. State what happened, its consequence and a useful evidence link. Routine local actions stay local. Update assignment, status and relationships when warranted by observed work. Follow the team's completion and verification policy, and identify checks that have not run.

When reorganizing work, preserve identifiers and history, inspect dependents, and move only the intended entities. Deleting work or changing workspace configuration requires authorization for that operation.

## Native templates

When asked to configure native Linear templates, read [template setup](template-setup.md). The repository copies own template content; template installation is an explicit operation. Finish by reading the created or updated entity and confirming its fields, relationships, content and returned URL.
