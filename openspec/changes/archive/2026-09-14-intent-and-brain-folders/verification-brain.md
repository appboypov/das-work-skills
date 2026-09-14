# Verification Report: intent-and-brain-folders (brain-ingestion)

**Verifier:** VerifyBrain (backend-verifier)  
**Change:** `intent-and-brain-folders`  
**Spec slice:** `specs/brain-ingestion/spec.md` (6 requirements, 11 scenarios)  
**Date:** 2026-09-14

Using change: `intent-and-brain-folders`. Override with a different change name if re-running this slice.

## Summary

| Dimension | Status |
|-----------|--------|
| Completeness | 6/6 requirements traced to source; tasks 2.1–2.3 and 3.1–3.2 marked complete |
| Correctness | 11/11 scenarios covered by source + smoke evidence; 3 proof limits on live Linear, attachments, explicit verified labelling |
| Coherence | Shared `brain-ingestion.md` referenced by both archive skills and workflow; design decisions followed; no contradictions between evidence and on-disk fixtures |

**Verdict: Pass**

No `#FEEDBACK #TODO` markers exist in the repository. None deleted.

## Specialist commissioning

| Specialist | Decision | Reason |
|------------|----------|--------|
| backend-tester | Not commissioned | Deliverable is Markdown agent workflows, not an executable backend. Reused `smoke-results.json` and independently re-checked the persisting fixture root on disk (read-only). |
| backend-reviewer | Not commissioned | Verifier performed independent source-to-spec trace. Prior standards review is recorded in `evidence.md`; no product code surface to re-review for this slice. |

## Evidence sources inspected

| Source | Role |
|--------|------|
| `specs/brain-ingestion/spec.md` | Requirement and scenario contract |
| `design.md` § Shared archive ingestion | Design decisions |
| `tasks.md` § 2–3 | Implementation scope |
| `evidence.md` | Recorded execution and limits |
| `smoke-results.json` | Scenario reports, parent link checks, 37 saved fixture records |
| `skills/workflow/references/brain-ingestion.md` | Shared procedure |
| `skills/openspec-archive-change/SKILL.md` | Single archive integration |
| `skills/openspec-bulk-archive-change/SKILL.md` | Bulk integration |
| `skills/workflow/SKILL.md` | Completion ownership (line 50) |
| `skills/workflow/references/acceptance.md` § Preserve archive knowledge | Acceptance journey alignment |
| Fixture root `/var/folders/fh/kwjz4grx18nbq8pgvbzvn8rc0000gn/T/intent-brain-smoke-an5f2stt` | Independent read-only re-check of saved outputs still on disk |

**Live Linear integration:** Not exercised. All issue material uses local fixture files (`sources/issue.md`, linked documents). Smoke scope and evidence limits state this explicitly. Local workflow checks are distinct from production Linear API behaviour.

---

## Requirement-by-requirement verification

### 1. Instruction-led curated preservation

**Requirement:** Ingest intent, change artifacts, delivery evidence and substantive linked Linear material into the configured single brain; default to curated records with sources; follow brain instructions for format.

**Source evidence**

- Shared procedure: `skills/workflow/references/brain-ingestion.md` lines 39–41 (default vs brain-specific preservation), lines 22–26 (source gathering scope).
- Single archive calls ingestion after move: `skills/openspec-archive-change/SKILL.md` lines 128–149.
- Bulk archive calls the same procedure per change: `skills/openspec-bulk-archive-change/SKILL.md` lines 211–213.
- Workflow completion ownership: `skills/workflow/SKILL.md` line 50.

#### Scenario: Default preservation

| Field | Assessment |
|-------|------------|
| **WHEN** | Brain instructions specify no alternative format |
| **Source** | `failures/brain/instructions.md`: “Use curated Markdown records with source links; choose descriptive filenames.” |
| **Execution** | `smoke-results.json` → `failures` → “independent completion despite change-specific blocker”; saved record `failures/brain/export-download-seven-day-retention.md` |
| **Observed** | Curated Markdown with substantive retention knowledge and a `## Sources` section linking issue, policy document and archived evidence. Substantive text retained locally; links accompany rather than replace content. |
| **On-disk check** | Fixture file matches saved_fixture_records content; links resolve per `parent_checks.archive_source_links_resolved` |
| **Status** | **Pass** (controlled local fixtures; not live Linear) |

#### Scenario: Brain-specific instructions

| Field | Assessment |
|-------|------------|
| **WHEN** | Brain instructions prescribe format and record locations |
| **Source** | `archive/brain/instructions.md`: “Maintain curated Markdown knowledge in knowledge/export-retention.md. Use Sources for links. Preserve existing correct facts.” |
| **Execution** | `smoke-results.json` → `archive` → “single archive with source reconciliation and brain-specific format (active intent)” |
| **Observed** | Record written to prescribed path `archive/brain/knowledge/export-retention.md` with `## Sources` section; pre-existing “Downloads require sign-in.” fact preserved. |
| **On-disk check** | SHA-1 `7dec7a124f4fe49370b5e246a073db80dbefec58` matches smoke report |
| **Status** | **Pass** |

---

### 2. Complete source preflight

**Requirement:** Before move, resolve owning intent and brain, read destination instructions and existing records, gather change evidence and linked Linear material (descriptions, comments, documents, attachments). Block on missing access.

**Source evidence**

- Preflight steps 1–5: `brain-ingestion.md` lines 15–33.
- Single archive step 5: `openspec-archive-change/SKILL.md` lines 128–130.
- Bulk shared then per-change preflight: `openspec-bulk-archive-change/SKILL.md` lines 162–163, 176–178.

#### Scenario: Accessible linked sources

| Field | Assessment |
|-------|------------|
| **WHEN** | All required sources and destination accessible |
| **Execution** | Single archive smoke: preflight verified `.das-work`, brain writable, intent, `issue.md`, `retention-policy.md`; continuation context appended to evidence before move |
| **Observed** | `archive/project/openspec/changes/archive/2026-09-14-retention/evidence.md` lists defining `.das-work`, owning intent, source references under “Preflight continuation context” before archive path recorded |
| **On-disk check** | Preflight context present; archived change at `archive/2026-09-14-retention/`; active `retention` path absent |
| **Status** | **Pass** (local issue fixture stands in for Linear description/comment/document) |

#### Scenario: Required source unavailable

| Field | Assessment |
|-------|------------|
| **WHEN** | Required issue, document, attachment, intent or destination inaccessible |
| **Execution (single)** | `archive` → “missing-source preflight blocks archive move” |
| **Observed (single)** | `BLOCKED: required source missing at archive/sources/does-not-exist.md`; move skipped; `missing-source-fixture` remains active; no `archive/2026-09-14-missing-source-fixture` |
| **Execution (bulk)** | `failures` → “independent completion despite change-specific blocker” |
| **Observed (bulk)** | `blocked-export` preflight blocked on `failures/sources/missing-document.md`; change remained active while `available-export` archived |
| **On-disk check** | `does-not-exist.md` absent; `blocked-export/` still under active changes; `available-export` only under `archive/` |
| **Status** | **Pass** |

**Proof limit:** No binary attachment fixture; linked document via issue markdown link only. Guidance text covers attachments (`brain-ingestion.md` line 25); attachment-specific blocking is **unverified**.

---

### 3. Accurate record reconciliation

**Requirement:** Reconcile existing brain records; distinguish proposed, delivered and verified outcomes; brain instructions govern structure and linking.

**Source evidence**

- Reconciliation rules: `brain-ingestion.md` lines 42–44.
- Design alignment: `design.md` lines 27–28.

#### Scenario: Existing knowledge record

| Field | Assessment |
|-------|------------|
| **WHEN** | Relevant brain record already contains part of the change's knowledge |
| **Execution** | Single archive smoke with pre-existing `export-retention.md` containing “Downloads require sign-in.” |
| **Observed** | Updated same file at prescribed path; sign-in fact retained; new retention and source material added; no duplicate note created |
| **On-disk check** | `archive/brain/knowledge/export-retention.md` lines 3–11 |
| **Status** | **Pass** |

#### Scenario: Incomplete or unverified work

| Field | Assessment |
|-------|------------|
| **WHEN** | Archived change includes proposed, excluded, unfinished or unverified work |
| **Execution** | Single archive and bulk success paths |
| **Observed** | Brain records state “search remains proposed and unimplemented”; intent Results use `Delivered:` for retention and `Unfinished:` / “search remains proposed”; intent `State: active`; evidence disclaimers “not production verification” |
| **Negative claim check** | Archiving does not claim search delivery or verification |
| **Status** | **Pass** |

**Proof limit:** Fixture outputs distinguish **proposed** vs **delivered** clearly. They do not use an explicit **verified** label separate from “Delivered (fixture evidence at six days)”. Reconciliation guidance names verified (`brain-ingestion.md` line 44); a dedicated verified-vs-delivered label exercise is **unverified** but the scenario’s anti-overclaim requirement is satisfied.

---

### 4. Observable archive completion

**Requirement:** Complete spec reconciliation and archive operation, ingest gathered material, read back saved records, report archive identity and brain paths; completion requires successful ingestion and readback.

**Source evidence**

- Archive skill steps 4–7 and output templates: `openspec-archive-change/SKILL.md` lines 87–186.
- Ingestion readback step: `brain-ingestion.md` lines 49–51.

#### Scenario: Successful single archive

| Field | Assessment |
|-------|------------|
| **WHEN** | Archive operation, ingestion and readback succeed |
| **Execution** | Single archive smoke |
| **Observed** | Real `mv` to `archive/2026-09-14-retention/`; `skip_specs` honored (`existingOutputPaths` empty); brain and intent updated; evidence records archived path, brain path, intent path, `Ingestion status: complete`; smoke actions include “Read back brain, intent, and archived evidence from disk” |
| **Sync boundary** | Spec sync correctly skipped when no delta specs; archive reconciliation step not falsely claimed |
| **On-disk check** | Evidence and brain/intent paths exist; ingestion complete |
| **Status** | **Pass** |

**Bulk note:** Successful bulk path (`available-export`) records ingestion complete in archived evidence. Smoke actions list ingest but not an explicit read-back step name; saved brain content on disk matches reported paths — **Pass** with inference that readback occurred as part of scripted workflow.

---

### 5. Resumable incomplete ingestion

**Requirement:** Preserve archived identity, destination paths and remaining work when ingestion fails after move; resumption uses archived identity and reconciles existing outputs.

**Source evidence**

- Post-move failure handling: `brain-ingestion.md` lines 52–55.
- Resumption section: `brain-ingestion.md` lines 57–74.
- Single archive resumption entry: `openspec-archive-change/SKILL.md` lines 21–22, 191.
- Bulk resumption entry: `openspec-bulk-archive-change/SKILL.md` lines 25–26, 340.

#### Scenario: Failure after archive move

| Field | Assessment |
|-------|------------|
| **WHEN** | Archive move succeeds but brain write/readback fails |
| **Execution** | `failures` → “post-move ingestion failure and successful resumption” (first phase) |
| **Observed** | Move to `archive/2026-09-14-post-move-failure/`; brain unavailable during ingestion (`No such file or directory` on write probe); evidence records `Ingestion status: incomplete`, archived path, `Remaining work: write curated Markdown brain record…`, `Brain record saved: none`, `Intent updated: pending` |
| **On-disk check** | Archived directory exists; evidence incomplete section matches smoke saved_fixture_records |
| **Status** | **Pass** |

#### Scenario: Resume an archived change

| Field | Assessment |
|-------|------------|
| **WHEN** | User resumes incomplete ingestion for archived change |
| **Execution (incomplete → complete)** | Same smoke row, resumption phase after brain restored |
| **Observed** | Resumption from archived path without second move; brain record `export-ingestion-resumption-fixture.md` saved; intent updated; evidence `Ingestion status: complete after resumption` |
| **Execution (already complete)** | `archive` → “repeat-safe archived resumption with no active changes” |
| **Observed** | Zero active changes; resumption skipped writes when evidence already complete; SHA-1 unchanged for brain, intent, evidence |
| **On-disk check** | Hashes match smoke: `7dec7a12…`, `45405a5c…`, `a8063345…` |
| **Empty-active-change exit** | Single archive guardrail line 191; bulk lines 25–27, 340 — resumption before stop |
| **Status** | **Pass** |

---

### 6. Per-change bulk outcomes

**Requirement:** Bulk archiving checks shared prerequisites once; tracks archive and ingestion outcomes per change; change-specific failure allows independent continuation.

**Source evidence**

- Shared vs change-specific blockers: `brain-ingestion.md` line 30.
- Bulk steps 8a–8f outcome tracking: `openspec-bulk-archive-change/SKILL.md` lines 176–221, 331–354.

#### Scenario: Shared destination unavailable

| Field | Assessment |
|-------|------------|
| **WHEN** | Configured brain cannot be accessed for the batch |
| **Execution** | `failures` → “shared blocker before moves” |
| **Observed** | `mv failures/brain failures/brain-holding`; shared preflight blocked; `available-export` and `blocked-export` unchanged at active paths; brain restored after check |
| **On-disk check** | Both changes under active `openspec/changes/` before independent scenario proceeds |
| **Status** | **Pass** |

#### Scenario: Individual failure

| Field | Assessment |
|-------|------------|
| **WHEN** | One selected change fails change-specific prerequisite or ingestion step |
| **Execution** | `failures` → “independent completion despite change-specific blocker” |
| **Observed** | Shared preflight passed after brain restore; `available-export` archived with default-format brain record and complete ingestion; `blocked-export` blocked on missing source and remained active |
| **Final report shape** | Smoke `observed` names both outcomes; intent `exports.md` records completed archive entry and leaves blocked change without Results entry |
| **On-disk check** | `available_export_archived`; `blocked_export_still_active` |
| **Status** | **Pass** |

**Note:** `Archived (ingestion incomplete)` in the same bulk batch is exercised by the separate post-move failure scenario, not combined with the change-specific blocker row in one batch run. Requirement text is satisfied across bulk smoke rows.

---

## Coherence checks

| Check | Result |
|-------|--------|
| Single shared reference used by both archive skills | Confirmed in skill headers and step links |
| Bulk shared vs change-specific blocker wording aligned with design | Confirmed; prior contradiction called out as fixed in `evidence.md` § Review |
| Preflight continuation context before move | Present in archived evidence files on disk |
| Spec sync boundaries preserved | Single archive honors empty `existingOutputPaths`; bulk scenarios did not require delta sync |
| Acceptance journeys § Preserve archive knowledge | Rows 1–8 map to the six brain smoke scenarios |
| Evidence count “37 read-back fixture records” | Confirmed: 37 keys in `smoke-results.json` → `saved_fixture_records` |
| Overstated completion | Not found. Missing-source scenario correctly leaves change active; post-move failure correctly records incomplete ingestion; Linear/production limits repeated in evidence and smoke scope |

## Unverified / proof limits (non-blocking)

1. **Live Linear API** — issue descriptions, comments and attachments gathered via local markdown fixtures only.
2. **Binary attachments** — no attachment file in fixtures; blocking on missing attachment path not demonstrated.
3. **Explicit verified labelling** — reconciliation guidance includes verified; fixtures demonstrate delivered vs proposed/unfinished without a separate “Verified:” label.

## Markers

| File | Line | Action |
|------|------|--------|
| *(none)* | — | No `#FEEDBACK #TODO` markers in repository |

## Final assessment

All six brain-ingestion requirements are implemented in the shared reference and integrated archive skills. All eleven scenarios are traced to source text and to controlled local smoke execution with on-disk fixture corroboration. Evidence accurately distinguishes local workflow checks from live Linear integration. No contradictions found between `evidence.md`, `smoke-results.json`, and the persisting fixture root.

**Verdict: Pass** — ready for Main to integrate into change-level verification; this slice alone does not mark the whole change Verified.
