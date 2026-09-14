---
name: code-review
description: Review implementation against project standards and requirements. Use when reviewing committed or work-in-progress changes.
---
# Code review

Read [workflow](../workflow/SKILL.md). Establish the requested scope, participating repositories, current OpenSpec change and supplied issue history.

## Capture the complete change

Identify the appropriate base from the requested branch, PR or commit and verify it exists. Compare committed work against its merge base, then inspect staged, unstaged and relevant untracked files separately. A three-dot commit diff alone omits work in progress. For a cross-repository change, capture each repository's base and working state. Keep unrelated user changes outside the review scope and report any uncertainty about ownership.

Read the actual files and affected callers behind the diff. Resolve the current requirements from the OpenSpec change and its linked specifications. Read issue comments for decisions and progress beyond the initial brief. If the specification is unavailable, report that limitation explicitly.

## Standards

Read project conventions before judging implementation. Inspect naming, duplication, responsibility, unnecessary indirection, coupled data, repeated decisions, scattered edits and unused generalization where they affect the change. Prefer coherent modules with small useful interfaces. Treat design smells as reasoned findings, with project conventions taking precedence over generic preferences.

Each finding names its location, the violated rule or concrete maintenance risk, and a scoped correction. Distinguish enforced standards from judgment calls. Use automated checks for rules tooling can establish.

## Requirements

For each agreed behavior, inspect implementation and its evidence. Identify missing or partial behavior, incorrect behavior and additions outside scope. Quote or link the relevant requirement and name the observable consequence. Check error paths, affected callers and completed tasks whose evidence no longer matches revised requirements.

## Report

Perform the standards and requirements passes directly, or independently when permitted by the shared workflow. Report them as separate sections so a pass on one cannot hide a failure on the other. Rank actionable findings within each section, with file locations and evidence. State exactly what was inspected and which checks ran. Review reports findings; applying fixes requires the authorized implementation scope.
