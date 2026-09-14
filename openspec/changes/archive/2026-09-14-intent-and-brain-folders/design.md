## Context

The approved behavioural decisions are recorded in [proposal](proposal.md), [intent requirements](specs/intent-context/spec.md) and [ingestion requirements](specs/brain-ingestion/spec.md). Authorization is recorded under Implementation approval.

Source inspection found that `.das-work` is plain Markdown project context; OpenSpec owns schema/store configuration. Archive skills perform agent-driven moves and already distinguish spec reconciliation from archival. Exploration restricts writes, handoffs carry change context, and setup installs a copied schema. The generic installer copies supporting skill files recursively. The checker validates skill frontmatter, relative links, portability and supplied templates.

## Decisions

### Configuration and intent ownership

Keep configuration in `.das-work`, as documented in `skills/workflow/references/setup.md`. Add labelled `Intent folder` and `Brain folder` path entries to the existing Markdown context contract. Each is one filesystem path; relative paths resolve from the defining `.das-work`. Paths can designate separate roots or a nested arrangement. Each folder's applicable instructions govern its records. Do not introduce a config parser or separate settings file.

`skills/workflow/SKILL.md` owns intent resolution: search relevant active records and preparation, establish the outcome, discuss reuse or creation, confirm before writing, and identify the resulting path. Preserve verbatim user requests separately from interpretation. Honour read-only requests and explicit framework opt-out before triggering setup or capture. Reuse confirmation covering the same proposed record update; changed outcomes require renewed confirmation. Archive authorization covers the described result/reference updates within that confirmed intent scope.

The portable bundle describes this contract directly and links its local workflow owner. Personal workspace paths and personal-only blueprint links are research sources, not installed dependencies. Record formatting follows destination instructions; retain descriptive intent identity, outcome, provenance and preparation links when those instructions leave formatting open.

Proposal schema instructions and the existing proposal template carry an intent reference. The intent owns the requested outcome; existing design approval and task progress retain their current owners. No new schema artifact is added.

Handoffs carry the intent path and defining project context path alongside the existing store/change/repository fields. Shared planning and a changed working directory do not change intent or brain ownership.

### Shared archive ingestion

Add `skills/workflow/references/brain-ingestion.md`, read by both archive skills. Keep archive-only source gathering and ingestion detail there; workflow links the procedure and defines what completion means.

Preflight resolves the confirmed intent, single brain and its instructions, reads existing relevant brain records, and gathers change artifacts, evidence and linked issue descriptions/comments plus relevant attachments and documents. Missing required access blocks the affected move. Scope source gathering to linked work that contributes to this change; do not traverse unrelated Linear work.

Preserve the existing archive operation and per-delta specification inclusion rules. Ingest curated knowledge with source references unless brain instructions prescribe another format. Retain substantive knowledge locally and distinguish proposed, delivered, verified and excluded historical material. Reconcile existing records according to destination instructions.

Use the existing change evidence/handoff record to retain archive identity, intent reference, defining configuration, saved brain paths and any incomplete ingestion steps. Read back outputs before declaring ingestion complete. This is workflow evidence, not a new runtime state machine or service. On resumption, accept the archived path as the source and reconcile existing outputs; archive entry points must handle this before an empty-active-change exit.

For bulk archive, check common prerequisites once and record each change's archive and ingestion outcome. A shared blocker prevents moves; a change-specific blocker affects that change. Align the existing conflicting stop-batch and continue-on-failure wording with this distinction.

### Affected files

| Files | Responsibility |
|---|---|
| `skills/setup-work-skills/SKILL.md`, `skills/workflow/references/setup.md` | Folder selection, instruction discovery and path semantics |
| `skills/workflow/SKILL.md` | Canonical intent contract, authorization and completion ownership |
| `skills/workflow/references/brain-ingestion.md` | Shared source gathering, preservation and completion procedure |
| `skills/openspec-archive-change/SKILL.md`, `skills/openspec-bulk-archive-change/SKILL.md` | Integration, per-change outcomes and archived resumption |
| `skills/openspec-explore/SKILL.md`, `skills/grilling/SKILL.md`, `skills/grill-with-docs/SKILL.md`, `skills/to-spec/SKILL.md` | Consistent intent discovery/capture and write boundaries |
| `skills/workflow/schemas/das-work-schema/schema.yaml`, its `templates/proposal.md` | Owning intent reference |
| `openspec/schemas/das-work-schema/schema.yaml`, its `templates/proposal.md` | Align this repository's installed planning schema copy |
| `skills/handoff/SKILL.md`, `skills/ask-skuddy/SKILL.md`, `skills/openspec-onboard/SKILL.md` | Continuation, recommended workflow and onboarding |
| `README.md`, `skills/workflow/references/acceptance.md` | User-facing setup and acceptance journeys |

Keep unrelated content intact. New instructions describe the agreed behaviour directly. Keep historical verification records intact and append only actual observed implementation evidence where applicable.

## Repositories

Only `das-work-skills` participates. Planning lives in `openspec/changes/intent-and-brain-folders/` using `das-work-schema`. Brain and intent locations selected by future users are runtime destinations, not hardcoded project dependencies. Linear uses the host's existing authenticated access.

## Verification

Run repository checks and validate the bundled and local schema copies. Exercise installed skills in disposable project/intent/brain folders with controlled source material and explicitly authorized test Linear material where available. Check the actual resulting records and archive paths, not only matching instruction text.

Cover configured relative paths; confirmed existing-intent reuse and fresh creation; corrections before capture; advice-only and opt-out with unchanged records; cross-repository continuation; default and brain-directed preservation; inaccessible required sources before a move; successful single archive and readback; post-move ingestion failure and repeat-safe resumption with no active changes; mixed bulk outcomes; and an intent with unfinished linked work.

Record executed commands, observed outcomes and access limitations in change evidence. A missing live Linear test capability must remain an explicit verification limitation rather than a claim of exercised integration. OpenSpec validation proves artifact structure, not delivered workflow behaviour.

## Risks

- Folder instructions vary. Read them before placement and preserve their organization rather than imposing a personal brain format.
- Brain or source access can fail after preflight. Preserve archived identity and partial output paths so work remains resumable.
- Intent capture and archive updates must respect explicit user authorization; entry skills must refer to the same canonical rule.
- Source and installed schema copies can drift. Compare the affected instructions/templates and validate both after implementation.
- CLI status currently reports `planningHome.defaultSchema` as `spec-driven` despite the local config selecting `das-work-schema`; this change explicitly selects the schema and status confirms `schemaName: das-work-schema`. Runtime repair is outside scope.

## Implementation approval

The user approved the complete specification through the Plannotator folder review, which returned `{"decision":"approved"}`. Approval covers the proposal, both capability deltas, this design and the implementation tasks. The user subsequently selected "Proceed with implementation", authorizing application of this change.
