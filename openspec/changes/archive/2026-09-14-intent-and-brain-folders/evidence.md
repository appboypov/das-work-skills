# Implementation evidence

## Scope and authorization

The complete specification was approved in the Plannotator folder review. Its process returned `{"decision":"approved"}`. The user subsequently selected "Proceed with implementation". Implementation is confined to the approved bundle guidance, supporting reference, schema copies, README and acceptance journeys.

## Repository checks

Executed from the `das-work-skills` repository:

- `npm run check`: passed; 51 skills, 45 templates, 128 files, valid local references and portable metadata, schema templates present.
- `openspec schema validate das-work-schema --json`: `valid: true`, no issues.
- `diff -r skills/workflow/schemas/das-work-schema openspec/schemas/das-work-schema`: exit 0, no differences. The validated local schema is identical to the bundled schema.
- `openspec validate intent-and-brain-folders --type change --strict --json`: passed, no issues.

The existing installer was executed with `node scripts/install.mjs --skills-dir <temporary-root>/installed`. It installed 128 skill/support files into an isolated directory. Subsequent installation picked up the completed shared procedure and workflow without changing installer logic.

The final installer pass copied the remaining three updated files. An immediate repeat reported `changed: 0`. The throwaway failure-scenario script was removed after its outputs were preserved. Repository and schema validation were repeated successfully after the final source edits.

## Behavioural execution

The isolated runtime root is `/var/folders/fh/kwjz4grx18nbq8pgvbzvn8rc0000gn/T/intent-brain-smoke-an5f2stt`. Three independently owned fixture subtrees exercise the installed Markdown workflows, real OpenSpec-created change directories, actual filesystem moves and saved records. Intent confirmation uses scripted human responses with filesystem snapshots at each response boundary.

Eleven controlled scenarios completed. The implementing agent inspected every report row and the saved records. [Smoke results](smoke-results.json) retains the reports, actual scripted confirmation dialogue, parent assertions and 37 read-back fixture records.

| Journey | Observed result |
|---|---|
| Corrected intent reuse | Both pre-confirmation snapshots matched the initial tree. Thirty-day correction saved after its matching confirmation. |
| Independent intent creation | A separate monthly-summary intent was created after the matching creation confirmation; the prior intent had already been saved. |
| Advice only | Saved intent, configuration and brain records remained unchanged. |
| Framework opt-out | Calculation returned 420 in an unconfigured directory without framework setup or intent creation. |
| Cross-directory ownership | Handoff retained the defining `.das-work`; both relative roots resolved from that file. |
| Single archive and brain-directed curation | Real archive move; existing sign-in fact retained; seven-day policy and sources saved in the prescribed record; search remained proposed and the intent active. |
| Repeat archived ingestion | No active changes at resumption; archived identity and output hashes unchanged, without duplicate records. |
| Missing required source | CLI-created change remained active; nonexistent linked source blocked its move. |
| Shared bulk blocker | Unavailable brain blocked both changes before moves. |
| Independent bulk outcomes | Accessible change archived and produced default curated Markdown; the change with a missing source remained active. |
| Post-move failure and resumption | Filesystem write failed with `No such file or directory`; archived evidence recorded incomplete ingestion; restoring the brain allowed saved-record readback and completion from the archived path. |

The parent also checked 14 source links in fixture brain and intent outputs against their actual filesystem targets, and 25 new canonical-contract anchors in the bundle.

The first intent fixture report was rejected because its reported confirmation questions differed from actual tool calls. A clean replay used matching questions and responses; only that replay contributes the five accepted intent rows. Final intent files also matched the post-creation hashes through advice and opt-out. Failure-path exercises include scripted filesystem actions following the installed guidance; these are workflow smoke checks, not an OpenSpec runtime ingestion implementation.

## Review

Standards review inspected the complete relevant working diff and the new shared reference. Configuration ownership stays in the setup reference, intent behaviour in workflow, and archive preservation in the shared ingestion procedure. Integration files reference those owners. Review corrected a contradictory bulk archive-input failure rule, stale numbered step references, duplicated ingestion steps, configured path wording, and continuation context/source references after moves.

Requirements review compared both capability deltas against setup, intent discovery, write authorization, proposal references, continuation, source gathering, archive completion and failure paths. Brain records distinguish historical proposals from delivered and verified results. Archived resumption retains the defining project context and can run with no active changes. This implementing session does not assign Verified status.

## Independent verification

Fresh verifier agents returned PASS for both slices, with no blocking source findings:

- [Intent verification](verification-intent.md): 5 requirements and 11 scenarios mapped to implementation and evidence. The verifier added an execution check for the initially source-only missing-location scenario: asked before any write, received a scripted folder selection, recorded that choice, resolved the relative path and read the brain instructions. Parent filesystem snapshots confirmed the boundary. This twelfth controlled check is retained in [smoke results](smoke-results.json).
- [Brain verification](verification-brain.md): 6 requirements and 11 scenarios mapped to implementation and evidence. Remaining proof limits are live Linear integration, binary attachment access failures and a fixture explicitly distinguishing verified from delivered status. The delivered instruction contract covers those cases; the fixture exercises do not establish live service behaviour.

The live `openspec instructions proposal --change intent-and-brain-folders --json` output also selected `das-work-schema` and exposed the owning Intent section. No source changes were needed after independent verification.

## Confirmed project configuration

The user selected the existing intent root, supplied `~/Work/brain` as the brain root and confirmed a separate owning intent. [Project context](../../../../.das-work) records the selected folders. The [owning intent](/Users/codaveto/Work/intents/das/intent-and-brain-folders/intent-and-brain-folders.md) retains the exact storage questions, options and answers, requests and corrections, and links this change's preparation and evidence. The proposal and change metadata reference that intent. Repository-local planning and `das-work-schema` remain selected.

Configuration and intent capture are complete. The user selected "Archive and ingest" and then "Sync now", authorizing current-spec reconciliation and permanent ingestion.

Readback confirmed both selected roots exist, all 13 intent wikilinks resolve, the proposal links the saved intent, and the intent remains active. Strict change validation passed; `openspec context --json` still resolves this repository's local root.

## Archive ingestion

Preflight complete. Defining context: `/Users/codaveto/Repos/das/das-work-skills/.das-work`. Owning intent: `/Users/codaveto/Work/intents/das/intent-and-brain-folders/intent-and-brain-folders.md`. Brain destination: `/Users/codaveto/Work/brain`.

The proposal, both capability deltas, design, tasks, execution evidence, independent verification reports, recorded fixture results and confirmed intent were read. No preexisting Linear issue is linked to this change. Existing RESULT titles were inspected and none covers this outcome. Source gathering therefore uses the linked local records; no unrelated issue history is attributed to this work.

Both current specs were created under `openspec/specs/`; all 11 requirement blocks and 22 scenarios match the deltas, and strict spec validation passed. The selected brain's conventions place the permanent decisions and worklog under `brain/memories/` through the canonical logger. [Decision inputs](ingestion-decisions.json) retain the confirmed choices. The Results publication procedure is available and its existing outcomes have been checked.

Archived path: `/Users/codaveto/Repos/das/das-work-skills/openspec/changes/archive/2026-09-14-intent-and-brain-folders`. The permanent worklog was published and read back at `/Users/codaveto/Work/brain/memories/worklogs/das/2026-09-14-569.md`; [logger receipt](worklog-receipt.json).

Five decisions were published through the canonical logger and read back against their confirmed questions, answers and options. Their exact paths are in the [workflow receipts](decision-receipts-workflow.json) and [storage receipts](decision-receipts-storage.json). All six permanent records are under the selected `~/Work/brain/memories/` tree and link the owning intent. The intent links the records, archived source paths and current specifications.

The verified delivery was published as [RESULT-4](https://linear.app/skuddy/issue/RESULT-4/configurable-intent-storage-and-permanent-archive-ingestion) in Done and opened in Linear.app. This result is a delivery record, not a preexisting source issue.

Ingestion readback passed for all six permanent records. All 37 wikilinks across those records and the intent resolve, and every requirement in both current specs matches its archived delta. [Readback manifest](ingestion-readback.json) records the destinations. The live result readback confirmed its title, description, Done state and uploaded independent-verification evidence; [result receipt](result-receipt.json). Archive and brain ingestion are complete.

## Limits

Controlled local issue descriptions, comments and documents exercise source gathering and curation. They do not establish live Linear API source ingestion. Publication and live source ingestion are separate behaviours. No release, commit or PR was published. A bare OpenSpec archive command remains outside the skill-driven ingestion workflow.
