---
name: to-spec
description: Synthesize agreed behavior into an OpenSpec change. Use when a conversation or decision map is ready for specification.
---
# Write the specification

Read [workflow](../workflow/SKILL.md). Reuse the conversation, approved decisions, domain glossary, existing specs and relevant source. Resolve only material gaps through [grilling](../grilling/SKILL.md); settled choices stay settled.

1. Resolve the selected planning root and change. For a fresh change, use [openspec-propose](../openspec-propose/SKILL.md). To author the next artifact of an existing change, use [openspec-continue-change](../openspec-continue-change/SKILL.md). If this skill was called with an artifact's CLI instructions, write that artifact directly instead of calling the planning workflow again.
2. Follow the active schema's output path, template and dependencies. Describe the user's problem and desired result in the proposal; define complete behavioral requirements and scenarios in capability deltas. Cover the agreed scope, including its relevant actors and failures, without manufacturing extra stories.
3. Put implementation decisions in design: modules, contracts, data shapes, constraints and participating repositories. Use existing testable seams where possible and identify the behavioral checks that prove the result. A precise schema or state model may be included when it carries a settled decision better than prose.
4. Link supporting research, domain decisions and prototypes. Mark what remains uncertain and resolve anything that would alter the implementation scope before making it ready to build.
5. Validate the change with the CLI and inspect its dependency status. Present the artifact paths and complete proposed outcome for review. Use [to-tickets](../to-tickets/SKILL.md) for work breakdown when needed. Implementation requires the shared workflow's approval.
