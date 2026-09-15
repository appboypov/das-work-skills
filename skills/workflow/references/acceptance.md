# Acceptance journeys

## Setup

Use the installed bundle with Node.js 20.19 or later. Create an empty temporary project. Follow [installed setup](setup.md) so `openspec --version` prints `1.13.0`; every required schema and template is available beside these instructions.

Use temporary `XDG_CONFIG_HOME` and `XDG_DATA_HOME` directories for store and workset exercises. Linear exercises require an authenticated test workspace or explicit permission to create work in the chosen team. Runtime proof already collected is recorded in [verification](verification.md); the journeys below also cover future agent-driven acceptance.

## Install and discover

1. In an isolated user environment, run `npx skills add appboypov/das-work-skills --global --skill '*'` and select the desired agents. Expect 51 globally installed skills including `ask-skuddy`, `setup-work-skills` and `workflow`, discoverable from different project directories.
2. Read the installed setup guide, schema and issue templates without opening the source repository. Expect all local references to resolve inside the installed bundle.
3. Follow installed setup to select `das-work-schema` and record confirmed project context in `.das-work` at the project root, including the intent folder and one brain folder. Expect native schema validation to pass, unrelated OpenSpec configuration to remain intact, and the project instructions to point to `.das-work`.
4. Ask the host to read `ask-skuddy/SKILL.md` from the installed directory. Expect a recommendation naming the exact next skill, its link, why it fits and its expected result, followed by the relevant conditional skill path.
5. Review local skill customizations, then invoke [update-work-skills](../../update-work-skills/SKILL.md). Expect it to refresh only this bundle: globally when installed globally, in the current project when installed locally, or both when both installations exist. Confirm project-local OpenSpec schema copies remain separate. The optional maintainer installer has separate collision and idempotence checks recorded in verification.

## Receive skill-based advice

1. Provide a completed implementation with current requirements and passing behavior checks, but no review. Ask Skuddy what comes next. Expect `code-review`, followed conditionally by `openspec-verify-change` and `openspec-archive-change`, with reasons and prerequisites.
2. Provide an unclear feature request without an agreed outcome. Expect a clarification skill suited to the available project context before specification or implementation.
3. Provide a confirmed plan with one approved pending slice. Expect `implement` for that slice and the applicable review and verification skills, without restarting completed planning.
4. Revise a requirement after implementation. Expect `openspec-update-change` before applying the revised work and rechecking it. Existing completion evidence is reconsidered.
5. Ask for advice on shaping collected writing material. Expect a relevant writing skill from the installed bundle and its next useful result.
6. Ask for recommendations only. Expect advice without starting implementation or mutating project files.

## Plan and implement a local change

1. Ask Skuddy to plan a temporary CLI that prints `Hello Ada` when passed `Ada`. Expect proposal, greeting specification, design and tasks in the selected OpenSpec change. Expect implementation approval to remain pending.
2. Run `openspec status --change <change> --json`. Expect the selected schema and paths to identify the temporary project.
3. Run `openspec validate <change> --strict`. Expect a valid change with a requirement and scenario.
4. Approve implementation and ask Skuddy to implement the change. Expect the actual command to print `Hello Ada`, task completion after the check, and recorded execution evidence.
5. Ask for review. Expect current requirements and the complete relevant implementation, including uncommitted work, to be examined.
6. Ask for verification and then archive the completed change. Expect the current greeting specification under `openspec/specs/`, the change under `openspec/changes/archive/`, and read-back brain records containing the outcome and its sources. Expect the completion report to name both archive and brain paths.

## Revise completed work

1. Before archiving a completed local greeting change, revise the requirement to print `Hello Ada!`. Expect the affected completed task to become pending because its earlier evidence no longer establishes the revised behavior.
2. Run apply instructions. Expect `ready` with the pending task, rather than `all_done`.
3. Approve and implement the revision. Expect `Hello Ada!` and current evidence before the task is checked again.

## Use Linear templates and comments

1. Ask Skuddy to create a bounded story in the authorized test team. Expect the supplied story template's user story, current state, desired state, journeys, acceptance criteria and tests, plus relevant optional sections.
2. Read the corresponding OpenSpec task. Expect the returned Linear issue URL beside its work.
3. Record the issue description. Ask Skuddy to record a material local result. Expect a concise comment with the result and evidence reference; the original description remains unchanged.
4. Ask Skuddy to organize an outcome spanning two existing projects. Expect appropriate initiative/project relationships and actual team capabilities, rather than a fabricated hierarchy or hardcoded workspace fields.
5. Request a ready human review action. Expect the matching action template with the material, concrete steps and result to report.
6. When native template setup is authorized, request the five issue templates. Expect existing templates to be reused where appropriate, supported native association, and actual scope/defaults checked. An unavailable template operation must be reported as pending rather than claimed complete.

## Share planning across repositories

1. Create and register a temporary store using `openspec store setup <id> --path <path> --no-init-git --json`. Install the schema into that store root.
2. In an empty code repository, create only `openspec/config.yaml` with `store: <id>`. Run `openspec context --json`. Expect the registered store root.
3. Create a shared change with `--store <id>`. Expect its artifacts in the store and source work in the specified code repositories.
4. Resume status from a second repository with the same flag. Expect the same change path and task state. Continue from a handoff carrying the owning intent and defining `.das-work`; expect its relative intent and brain paths to retain their original destinations.
5. In a repository with local specs, run context without the flag. Expect local planning. Repeat with `--store <id>` and expect the store.
6. Add the store to local `references`. Read proposal instructions. Expect referenced specification summaries and fetch commands while the write destination stays local.
7. Implement and check the shared behavior in both repositories. Archive with the store flag. Expect current specs and archived history in the store, reference-only specifications untouched, and ingested knowledge in the owning project's configured brain.

## Worksets

1. Create a workset with the code repository and store as members. Expect both paths in `workset list --json`.
2. Open it with an available supported editor. Expect a generated workspace file containing both folders and a successful opener result. Confirm the executing agent can access those folders separately.
3. Remove it with `workset remove <name> --yes --json`. Expect the saved group to disappear and both member directories to remain.

## Boundaries and failure reporting

1. Request apply instructions for a change with missing planning artifacts. Expect `blocked` and the actual missing prerequisites.
2. Make the real command fail its specified output check. Expect the task to remain incomplete with failure evidence.
3. Attempt installation using a store-pointer code repository as the planning root. Expect an error directing you to the actual store and no destination writes.
4. Exercise a documentation-only change with `skip_specs: true`. Expect skipped specs and valid planning without invented behavior requirements.
5. Use a host without background workers. Expect direct sequential work in dependency order. Delegation follows explicit user permission.

## Confirm intent capture

1. Configure relative intent and brain folders in a temporary project's `.das-work`. Add an active intent with linked preparation and a separate completed intent. Resume from a different working directory. Expect discovery to read the relevant active record and preparation using the defining project paths.
2. Request related work. Expect the agent to identify the existing intent, describe the proposed update and wait for confirmation. Correct its interpretation before confirming. Expect unchanged files until confirmation, then the corrected request preserved separately from interpretation.
3. Request an independent outcome and confirm creation. Expect a separate descriptively named intent in the configured folder and a proposal reference to that record.
4. Request advice only. Compare intent, project, brain and Linear state before and after. Expect no changes.
5. In a project without configured folders, explicitly request a small action without the framework or an intent. Expect that action within its authorization, without setup or intent creation.
6. Link two unfinished changes to one intent. Archive one through the archive skill. Expect the intent's result references to reflect that change while the intent remains active for its unfinished outcome.

## Preserve archive knowledge

1. Use an authorized test issue with a description, a substantive comment and a relevant document or attachment. Link it to a completed temporary change and its confirmed intent. Give the brain an existing related knowledge record.
2. Archive through the installed skill. Expect the agent to gather the linked material before the move and then update the existing brain record with substantive intent, change, evidence and issue knowledge plus sources. Read the files behind every reported path.
3. Repeat with a brain instruction prescribing a different record format or subfolder. Expect that instruction to govern output within the same brain.
4. Include a proposed or unverified part of the archived work. Expect the brain record to retain that status rather than claim delivery or verification.
5. Make a required source unavailable before starting. Expect a specific blocker and the change to remain at its active path.
6. After preflight, make the brain destination unavailable before ingestion. Expect the change to be archived, ingestion reported incomplete, and its archived identity, known output paths and remaining work preserved in change evidence.
7. Restore access and resume ingestion using the archived path, including when there are no active changes. Expect read-back completion with the same archived identity and reconciled existing brain records. Repeat resumption and check that records are not duplicated.
8. Bulk archive independent changes with a common inaccessible brain. Expect the shared blocker before any move. Restore the brain and make one change's required source unavailable. Expect independent changes to complete and the blocked change to remain active, with an outcome for every selected change.

These journeys exercise agent-driven skills. Record source-access limitations explicitly; controlled local source fixtures do not establish live Linear integration.
