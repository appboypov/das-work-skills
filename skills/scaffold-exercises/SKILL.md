---
name: scaffold-exercises
description: Create a usable sequence of learning exercises. Use when authoring course sections problems solutions or explainers.
---
# Scaffold exercises

Read [workflow](../workflow/SKILL.md). Inspect existing course structure, numbering, learning goals and validation commands. Reuse their conventions.

1. Read the agreed course plan. Determine the ordered sections, learning prerequisites and outcome of each exercise. Resolve missing learning outcomes before writing.
2. Use the course's existing structure. For a course without one, use exercises/XX-section/XX.YY-exercise/ with problem, solution or explainer directories according to the exercise's purpose.
3. Write each relevant readme with the learning goal, prerequisites, concrete learner instructions and expected result. A problem contains intentional learner tasks; its solution demonstrates the result and an explainer teaches the concept. Include runnable material when the exercise requires it.
4. If inserting or moving exercises, update numbering and every affected link together. Preserve existing student work.
5. Run the project's available course checks, execute runnable examples and check references. When there is no course linter, inspect the directory sequence and exercise completeness directly. Report exact checks and delivery paths. Commit only when authorized.
