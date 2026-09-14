# Skill mechanics

Read [writing-for-agents](SKILL.md) for instruction structure and progressive disclosure.

Every skill has a directory containing `SKILL.md`, with a stable kebab-case `name` and a concise `description` in YAML frontmatter. The description states its activity and the conditions for reaching it. Keep host-specific configuration in the host's own setup rather than making the skill depend on it.

A user or another skill can reach the same instructions. Use relative links between bundled skills and supporting files so discovery does not require a particular command syntax or invocation API. Keep files needed on every run in the skill body; link optional references with the condition for reading them.

A router identifies the user's current need and selects the relevant skill, carrying settled context and authorization. It can read and apply the linked skill through ordinary file access. Separate a skill when it owns a distinct activity or a reusable reference other skills need. Verify frontmatter names, local links and supporting assets before delivery.
