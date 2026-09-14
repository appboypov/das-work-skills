---
name: triage
description: Classify incoming work and establish its next action. Use when reviewing a Linear inbox or an incoming issue.
---
# Triage

Read [workflow](../workflow/SKILL.md) and [linear](../linear/SKILL.md). Discover the workspace's actual intake states, types, priorities, ownership and related work.

1. Read the full issue, comments, attachments and linked change or PR. Reuse prior answers and findings. For an inbox, group work by the current action needed and explain each item's consequence before prioritizing it.
2. Inspect relevant source and existing requirements. Check whether the request is already implemented, duplicates existing work, conflicts with a settled decision or lacks essential information. For a bug, use the reported failure as the starting evidence and run an appropriate reproduction when available.
3. Recommend the matching story, bug, enhancement, refactor or chore classification and the next action. Use [grilling](../grilling/SKILL.md) for material behavioral ambiguity and [domain-modeling](../domain-modeling/SKILL.md) for terminology.
4. For a fresh issue, use its type template through linear. For an existing brief, preserve its description and add concise relevant findings in comments. Record reproduction evidence, missing facts, duplicate links or scope decisions where applicable.
5. Set supported fields and relationships within the requested authority. Distinguish ready planning from approved implementation. Close or reject work only when that outcome is authorized and explain the reason in history.
6. When work is ready, link its OpenSpec change and next bounded task or human action. Finish with the actual identifiers, states and outstanding blockers.
