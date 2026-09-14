## Intent

[Confirmed owning intent](/Users/codaveto/Work/intents/das/intent-and-brain-folders/intent-and-brain-folders.md).

## Why

Users need their work to survive a conversation and an archived change. The bundle currently configures Linear and OpenSpec context, but does not configure intent storage or second-brain storage, resolve active intents with the user, or ingest archived work into permanent knowledge.

The desired result is confirmed intent capture in a user-selected folder and archive completion that preserves curated knowledge and its sources in the user's single second brain, following that brain's instructions.

## What changes

- Configure the intent folder and one brain folder through the existing project setup.
- Discover relevant active intents and read their preparation. Confirm the desired outcome and whether to reuse or create an intent with the user before writing the record.
- Preserve verbatim requests and corrections separately from interpretation. Honour explicit framework opt-out and read-only requests.
- Carry intent ownership through proposals, exploration, specification authoring and handoffs.
- Ingest the intent, archived change, delivery evidence and substantive linked Linear material through one shared procedure used by single and bulk archive workflows.
- Default to curated records with sources, subject to the brain's instructions. Reconcile existing records, distinguish proposed, delivered and verified outcomes, and report incomplete ingestion with a resumable archived identity.
- Keep multi-change intents active until their outcome is complete and retain the owning project's configuration across shared-store and multi-repository work.

## Capabilities

### New capabilities

- `intent-context`: configured folder ownership, active-intent discovery, confirmed capture, continuation and framework opt-out.
- `brain-ingestion`: instruction-led preservation of archived work in one brain, including source gathering, completion evidence, failure handling and resumption.

### Modified capabilities

None. This repository has no existing main capability specs.

## Impact

Participating repository: `das-work-skills`. Changes affect its Markdown skills, setup reference, proposal schema/template, handoff and onboarding guidance, README and acceptance journeys. One shared ingestion reference is added under `skills/workflow/references/`.

Planning is repository-local and uses `das-work-schema`. The installed bundle's schema and the repository-local copy must remain aligned when implementation updates the proposal template and instructions.

The implementation uses agent-driven skill workflows and existing file and Linear access. Installer behaviour, OpenSpec runtime commands, release publication and Linear state automation remain outside this change. A bare OpenSpec archive command does not gain an ingestion hook.

## Linear

No related Linear issue has been established for this change. This specification request authorizes planning artifacts, not issue creation or implementation.
