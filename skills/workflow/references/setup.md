# Set up from installed skills

Use the installed files for every step. The source repository is only needed by maintainers. Install the full bundle together because skills link to their siblings. Each installed skill directory includes its supporting files.

## Runtime

OpenSpec requires Node.js 20.19 or later. Check `node --version` and `openspec --version`. This bundle targets OpenSpec 1.13.0, including its experimental store and workset commands.

When the user authorizes runtime installation, install the pinned CLI independently of the source checkout:

```sh
npm install --global @fission-ai/openspec@1.13.0
openspec --version
```

Use the environment's normal package location and permissions. An alternative is `npx --yes --package @fission-ai/openspec@1.13.0 openspec <arguments>`, with the working directory set to the intended project. Preserve that invocation choice across the journey.

## Project planning

1. Inspect the project instructions and existing `openspec` configuration. Read [stores](../../openspec-store/SKILL.md) when choosing shared planning. Resolve the actual planning root with `openspec context --json`, including `--store <id>` when selected. A code repository's store pointer identifies another planning root.
2. Read the bundled [schema](../schemas/client-work/schema.yaml) and its [templates](../schemas/client-work/templates/). Using the host's file tools, copy that complete directory to `<planning-root>/openspec/schemas/client-work/`. Read existing destination files first. Preserve local modifications and resolve differences deliberately before replacing them.
3. In the planning root's existing `openspec/config.yaml` or `config.yml`, set `schema: client-work`, preserving every unrelated field and comment. Create `config.yaml` if neither exists. Reuse the selected store and reference configuration.
4. From that root, run `openspec schema validate client-work --json`. Expect `valid: true` and no issues. Check `openspec schemas --json` lists the local schema.
5. Create subsequent changes with `--schema client-work` and the selected store flag. Read each change's returned `schemaName`, artifact paths and context files.

## Linear and discovery

Read [Linear](../../linear/SKILL.md) through the available authenticated connection. Discover the actual workspace, team, projects, states, labels and permissions. Reuse existing work. Configure native templates through [template setup](../../linear/template-setup.md) only when requested.

Make all installed sibling skills discoverable to the host. Start with [ask-skuddy](../../ask-skuddy/SKILL.md). Keep project-specific configuration in that project's existing instruction or configuration record. Credentials stay in the authenticated connection.

## Everyday use

Start with the current outcome and evidence. Skuddy routes planning, questioning, research, implementation, review, writing and handoff to the relevant skill. [Workflow](../SKILL.md) owns the shared rules. [Acceptance journeys](acceptance.md) provide repeatable exercises, and [verification](verification.md) records the checks performed for this distribution.

The supplied [issue](../templates/issues/), [task](../templates/tasks/) and [action](../templates/actions/) templates are available here after installation. [Provenance](../upstream.json) and [licenses](../licenses/) travel with them.

Use the skills package manager's update operation when requesting a bundle update. Review local skill customizations before updating. Existing project schemas retain their own copies; compare them with the updated installed schema and revalidate after an approved schema update.
