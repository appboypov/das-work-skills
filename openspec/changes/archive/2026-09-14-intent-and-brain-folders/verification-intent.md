# Verification: intent-context

**Verifier:** VerifyIntent (backend-verifier)  
**Change:** `intent-and-brain-folders`  
**Spec:** `specs/intent-context/spec.md` (5 requirements, 11 scenarios)  
**Date:** 2026-09-14

## Verdict

**Pass** for the `intent-context` slice.

All five requirements are implemented in the canonical workflow, setup, schema, and connected consumer skills. All eleven scenarios have observed execution evidence: ten in `smoke-results.json` with matching on-disk fixture records under `/var/folders/fh/kwjz4grx18nbq8pgvbzvn8rc0000gn/T/intent-brain-smoke-an5f2stt`, and **Missing required location** in `missing-location/report.json` from a bounded configuration exercise.

No `#FEEDBACK #TODO` markers were present in the repository.

## Specialists

| Specialist | Decision | Reason |
| --- | --- | --- |
| `backend-tester` | Not commissioned | Deliverable is Markdown agent-instruction workflows; bounded fixture read-back and recorded smoke rows supply execution proof where applicable. |
| `backend-reviewer` | Not commissioned | No service/API/runtime code in scope; standards review is performed directly against documentation-skill patterns and the change design. |

## Evidence reviewed

| Source | Use |
| --- | --- |
| `openspec/changes/intent-and-brain-folders/specs/intent-context/spec.md` | Requirement and scenario contract |
| `openspec/changes/intent-and-brain-folders/design.md` | Affected files and decisions |
| `openspec/changes/intent-and-brain-folders/tasks.md` §1 | Task scope for intent context |
| `openspec/changes/intent-and-brain-folders/evidence.md` | Recorded checks and smoke limits |
| `openspec/changes/intent-and-brain-folders/smoke-results.json` | Accepted `intent-recheck` replay only (rejected initial run excluded per `rejected_run`) |
| `missing-location/report.json` (on-disk fixture) | Bounded **Missing required location** exercise: prompt-before-write, user choice, path resolution, instruction readback |
| On-disk smoke fixture root | Independent read-back of `.das-work`, intent records, handoff, archive intent, proposals |
| `skills/workflow/SKILL.md`, `skills/workflow/references/setup.md` | Canonical intent contract and configuration |
| Consumer skills (see Coherence) | Exploration, grilling, specification, handoff, onboarding |
| `skills/workflow/schemas/das-work-schema/schema.yaml` and `templates/proposal.md` | Schema intent reference |
| `diff -rq skills/workflow/schemas/das-work-schema openspec/schemas/das-work-schema` | Exit 0, no differences |
| `openspec schema validate das-work-schema --json` | `valid: true`, no issues |

## Dimensions

### Completeness

Tasks 1.1–1.3 are satisfied in source. Setup, workflow, schema proposal instructions/template, handoff, ask-skuddy, openspec-onboard, exploration (`openspec-explore`), grilling (`grilling`, `grill-with-docs`), and specification authoring (`to-spec`) all reference `workflow` intent context or project-context path rules. README and acceptance journeys document configured intent/brain workflow.

### Correctness

Requirement text maps to the cited sources and smoke rows below. Fixture hashes for post-correction intent files on disk match `smoke-results.json` (`retain-export-history.md` → `941052e…`, `preparation.md` → `d84fb48…`, `.das-work` → `f2b844d…`). Saved fixture record bodies in `smoke-results.json` match disk for sampled paths.

### Coherence

Configuration ownership stays in `setup.md` / `setup-work-skills`; intent behaviour in `workflow/SKILL.md`; archive lifecycle cross-references in `brain-ingestion.md` align with workflow §Intent context. Bundled and repository-local schema copies are identical.

---

## Requirement and scenario assessment

### Requirement: Configured storage locations

The workflow SHALL record the user-selected intent folder and exactly one second-brain folder in project context, resolve relative paths against that context file, and follow each destination's applicable instructions before writing.

| Scenario | Status | Evidence | Findings |
| --- | --- | --- | --- |
| **Selecting storage during setup** | Observed (instruction + setup path) | `skills/setup-work-skills/SKILL.md` L9–10; `skills/workflow/references/setup.md` L42–44; fixture `.das-work` records `Intent folder: ../intents` and `Brain folder: ../brain` | Setup skills require user-established labelled entries; fixture preserves user-relative selection. Full interactive setup flow not re-run in this verification pass. |
| **Relative paths during continuation** | Observed | `setup.md` L44; `workflow/SKILL.md` L34; smoke `intent-recheck` row `cross-directory ownership`; on-disk resolution `../intents` → `intent-recheck/intents` from defining `.das-work` parent | Paths resolve from defining context file, not agent working directory. |
| **Missing required location** | Observed | `setup.md` L44; `brain-ingestion.md` preflight; `missing-location/report.json` | Fixture `.das-work` had only `Intent folder: ../intents` for a framework-ingestion request. Agent prompted Main for brain location before any fixture write; intent and brain instruction files unchanged across dialogue (`snapshots.before_reply` stable). After reply `../brain`, recorded `Brain folder` in `.das-work`, resolved to `missing-location/brain` from defining context, read `Keep curated Markdown records with sources.` No archive or ingestion executed. |

### Requirement: Confirmed active-intent resolution

The agent SHALL search relevant active intents and read linked preparation, clarify the outcome, discuss reuse or creation with the user before creating or updating an intent, capture after confirmation, subject to write authorization.

| Scenario | Status | Evidence | Findings |
| --- | --- | --- | --- |
| **Related active intent** | Observed | `workflow/SKILL.md` L21–23; smoke `corrected reuse`; `confirmation_dialogue` calls 1–2; fixture `retain-export-history.md` | Agent proposed extending existing intent; two-step confirmation; files unchanged before confirmation (`tree_hashes.before` stable across dialogue snapshots); update written only after call 2. |
| **Independent outcome** | Observed | `workflow/SKILL.md` L21–23; smoke `independent creation`; fixture `monthly-export-summary-email.md` | Separate intent created after explicit creation confirmation; prior intent already saved (`snapshot` before call 3 shows updated `retain-export-history.md` hash). |
| **User corrects the interpretation** | Observed | `workflow/SKILL.md` L21; smoke `corrected reuse` dialogue | Call 1 correction preserved verbatim in `## User corrections`; renewed confirmation (call 2) before write; `## Agent interpretation` separate from requests/corrections. |

### Requirement: Request provenance and ownership

The intent SHALL preserve verbatim requests and corrections separately from interpretation and link preparation, OpenSpec changes, and Linear work with distinct ownership boundaries.

| Scenario | Status | Evidence | Findings |
| --- | --- | --- | --- |
| **Preparing a change** | Observed | `workflow/SKILL.md` L25–30; `schema.yaml` proposal instruction L11–12; fixture `archive/.../proposal.md` L3 (`Intent:` link); fixture `archive/intents/export-history.md` Results section | Proposal references owning intent; intent links archived change and brain record without copying authoritative specs/tasks. Provenance sections separate requests, corrections, and interpretation in intent-recheck fixtures. Linear ownership described in workflow; live Linear not exercised (documented limit). |

### Requirement: Explicit framework and write choices

The agent SHALL honour explicit framework opt-out and explicit read-only requests.

| Scenario | Status | Evidence | Findings |
| --- | --- | --- | --- |
| **Work without the framework** | Observed | `workflow/SKILL.md` L32; `setup.md` L46; smoke `framework opt-out immutability` | Calculation `420` in unconfigured subdirectory; framework records unchanged (`tree_hashes.unchanged: true`). |
| **Advice only** | Observed | `workflow/SKILL.md` L32; smoke `advice-only immutability`; `parent_checks.post_creation_intent_records_unchanged_through_advice_and_opt_out` | Advice returned without writes; compared hashes unchanged for `.das-work`, brain instructions, and checked intent files. |

### Requirement: Continuation and intent lifecycle

The workflow SHALL preserve owning intent and configuration across handoffs and shared planning; an intent remains active while outcome or preparation is unfinished.

| Scenario | Status | Evidence | Findings |
| --- | --- | --- | --- |
| **Multi-repository handoff** | Observed (path-ownership analogue) | `workflow/SKILL.md` L34, L62; `handoff/SKILL.md` L9; smoke `cross-directory ownership`; fixture `intent-recheck/handoff.md` | Handoff carries defining `.das-work` path, owning intent paths, and explicit path-resolution rule. Smoke used different working directory with relative roots from defining context (acceptance journey §Share planning step 4 describes cross-repo continuation). |
| **One of several changes is archived** | Observed | `workflow/SKILL.md` L34; `brain-ingestion.md` L45–48; smoke archive row `single archive with source reconciliation and brain-specific format (active intent)`; fixture `archive/intents/export-history.md` `State: active` with unfinished search | One linked change archived; intent remains active; Results updated under confirmed scope; unfinished material explicitly retained. |

---

## Consumer integration (tasks 1.2)

| Consumer | Reference to intent context / configuration |
| --- | --- |
| `setup-work-skills` | Establishes folders, `.das-work` entries, path semantics |
| `ask-skuddy` | Resolves intent context before framework work |
| `openspec-explore` | Confirmed capture, write authorization, confirmation before OpenSpec writes |
| `grilling` | Applies intent context when recording confirmed requests/corrections |
| `grill-with-docs` | Reads owning intent; records confirmed requests in intent |
| `to-spec` | Resolves intent context; references owning intent in proposal |
| `handoff` | Carries owning intent and defining `.das-work` paths |
| `openspec-onboard` | Setup + intent resolution in onboarding flow |
| `das-work-schema` proposal artifact | Instruction to resolve owning intent; template `## Intent` section |

`grill-me` intentionally omits intent capture (standalone clarification); consistent with its scope.

## Markers

No `#FEEDBACK #TODO` markers found. None deleted.

## Proof limits

1. **Agent adherence** — smoke and missing-location exercises use scripted agent-driven workflow with saved records; they do not prove every host agent will follow skills without deviation.
2. **Live Linear** — ownership boundaries are documented; integration uses controlled local fixtures per `evidence.md` and `smoke-results.json` scope.
3. **Cross-repository** — handoff and path resolution are proven; a second physical repository was not part of the saved fixture tree (acceptance journey describes expected behaviour).

## Remaining work for Main

None for the `intent-context` spec slice beyond integrating this report into the change-level verification decision.
