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
2. Read the bundled [schema](../schemas/das-work-schema/schema.yaml) and its [templates](../schemas/das-work-schema/templates/). Using the host's file tools, copy that complete directory to `<planning-root>/openspec/schemas/das-work-schema/`. Read existing destination files first. Preserve local modifications and resolve differences deliberately before replacing them.
3. In the planning root's existing `openspec/config.yaml` or `config.yml`, set `schema: das-work-schema`, preserving every unrelated field and comment. Create `config.yaml` if neither exists. Reuse the selected store and reference configuration.
4. From that root, run `openspec schema validate das-work-schema --json`. Expect `valid: true` and no issues. Check `openspec schemas --json` lists the local schema.
5. Create subsequent changes with `--schema das-work-schema` and the selected store flag. Read each change's returned `schemaName`, artifact paths and context files.

## Linear and discovery

Read [Linear](../../linear/SKILL.md) through the available authenticated connection. Discover the actual workspace, team, projects, states, labels and permissions. Reuse existing work. Configure native templates through [template setup](../../linear/template-setup.md) only when requested.

Make all installed sibling skills discoverable to the host. Start with [ask-skuddy](../../ask-skuddy/SKILL.md) and link `.das-work` from the project's existing agent instructions.

## Project context

Maintain a plain-text Markdown file named `.das-work` at the project root. Read it before setup, advice or resumed work, and update it with confirmed project agreements. Record the project's purpose, relevant repositories, installed skill location, Linear workspace/team/project identifiers and links, planning mode, and references to the selected OpenSpec configuration and project conventions. Include only facts established for this project; use project-relative paths where practical.

OpenSpec's configuration remains authoritative for its schema and store settings. `.das-work` points to that configuration and supplies the context the agent needs to use it. Specs, task progress and implementation approval remain in their existing change artifacts. Credentials stay in the authenticated connection.

## Everyday use

Start with the current outcome and evidence. Skuddy recommends exact installed skill names with links, explains why each fits, and orders them into a path toward the requested result. The next ready skill is distinguished from later steps awaiting evidence or approval. [Workflow](../SKILL.md) owns the shared rules. [Acceptance journeys](acceptance.md) provide repeatable exercises, and [verification](verification.md) records the checks performed for this distribution.

The supplied [issue](../templates/issues/), [task](../templates/tasks/) and [action](../templates/actions/) templates are available here after installation. [Provenance](../upstream.json) and [licenses](../licenses/) travel with them.

Use the skills package manager's update operation when requesting a bundle update. Review local skill customizations before updating. Existing project schemas retain their own copies; compare them with the updated installed schema and revalidate after an approved schema update.
