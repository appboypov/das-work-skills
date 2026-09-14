# Brain ingestion

Preserve knowledge produced by archived work in the configured second brain with its sources and accurate outcome evidence. Both [single archive](../../openspec-archive-change/SKILL.md) and [bulk archive](../../openspec-bulk-archive-change/SKILL.md) call this shared procedure.

Canonical intent context and authorization boundaries live in [workflow](../SKILL.md#intent-context). Configured storage locations live in `.das-work` at the project root, as described in [setup](setup.md#project-context).

Use the storage and path rules in [project context](setup.md#project-context), retaining the defining `.das-work` across shared-store and multi-repository work.

Scope source gathering strictly to linked work that contributes to the change. Do not traverse unrelated Linear work. When the user explicitly requests work outside the framework or asks for advice only, skip framework ingestion and leave brain records unchanged.

## Preflight

Run preflight before moving any change.

1. **Resolve configuration and destination**
   - Locate the defining `.das-work` file and resolve its configured folders using the project context path rules.
   - Confirm that the brain folder exists and is writable. If unconfigured, ask the user to select the brain folder before proceeding.
   - Resolve and read the owning intent and its linked preparation from the change's `proposal.md` or through active intent discovery per [workflow](../SKILL.md#intent-context).
2. **Read destination instructions and existing records**
   - Read applicable instructions in the brain folder, such as README or guidelines files, to discover prescribed folder structure, note formats, frontmatter, or naming conventions.
   - Read existing relevant records in the brain to avoid duplicating knowledge and to plan record reconciliation.
3. **Gather change and linked sources**
   - Change artifacts and evidence: read the available artifacts at the paths resolved for the selected schema, including proposal, specifications, design, tasks, `.openspec.yaml` and evidence or handoff records where applicable.
   - Linked Linear work: issue descriptions and issue comments for issues linked to this change.
   - Relevant attachments and documents: specifications, architectural notes, design decisions, and files referenced by the change, intent, or issue comments.
   - Keep source gathering scoped to linked work that directly contributes to the change.
4. **Check required source accessibility**
   - Verify access to every required issue, document, attachment, owning intent, and the brain destination before making any move.
   - When a required source is unavailable, report the specific missing prerequisite and leave the affected change at its active path.
   - In bulk archiving, distinguish shared blockers from change-specific blockers. An inaccessible brain folder or an unreadable applicable instruction file stops moves across the batch. An inaccessible issue or document specific to one change halts that change while independent eligible changes proceed.

5. **Preserve continuation context**
   - Before the move, record the defining `.das-work`, owning intent and gathered source references in the change's evidence or handoff record. This record moves with the change and identifies its ownership if ingestion is interrupted.

## Ingestion and readback

Run ingestion and readback immediately after moving the change directory to `planningHome.changesDir/archive/<target-name>`, or when resuming an already archived change.

1. **Apply preservation format**
   - **Default preservation:** When brain instructions specify no alternative format, save curated substantive knowledge with source references. Include relevant intent requests, decisions, architecture trade-offs, delivered change results, and substantive Linear discussions. Keep substantive knowledge readable locally. Source links accompany retained knowledge rather than replacing it.
   - **Brain-specific instructions:** When destination instructions prescribe a format, folder layout, frontmatter, or naming pattern, use that format and those locations within the configured brain.
2. **Reconcile existing records**
   - When a relevant brain record already covers part of the change's topic, update or link that record rather than creating a duplicate note. Retain provenance and source links.
   - Distinguish proposed, delivered, verified, and excluded historical material using available evidence. When an archived change includes proposed, excluded, unfinished, or unverified work, state its actual status. Archiving preserves historical records; it does not claim delivery or verification for unverified work.
3. **Update owning intent**
   - Update the owning intent record in the configured `Intent folder` with the archived change identity, archive path, and brain record links.
   - Keep record updates strictly within the confirmed intent scope.
   - When the intent covers multiple changes or remaining unfinished work, keep the intent active. Archiving one linked change does not close an intent with unfinished scope.
4. **Read back saved records**
   - Read back every saved or updated brain record and intent record from disk to verify that writes succeeded and content is intact.
   - Record the archived change path, defining `.das-work` path, owning intent path, saved brain record paths and completed or remaining ingestion work in the change's evidence or handoff notes. Repair references to moved change artifacts in the intent and saved knowledge so source links resolve at their archived locations.
5. **Handle post-move failures**
   - When the archive move succeeds but writing or reading back a brain record fails, state that the change is archived and ingestion is incomplete.
   - Report the archived path, known destination paths, and remaining ingestion work.
   - Retain the archived identity and partial output paths in evidence so work remains resumable. Do not report archive completion.

## Resumption

Resume incomplete ingestion for an archived change without repeating completed steps.

1. **Availability**
   - Resumption applies when an archive move succeeded but ingestion failed, was interrupted, or was left incomplete.
   - Resumption remains available when there are no active changes in the planning root.
2. **Resolve archived source and state**
   - Use the archived change directory as the source. Do not move the change again.
   - Read the change's evidence or handoff notes to identify the owning intent, configured brain, previously saved brain record paths, and remaining ingestion steps.
   - Re-run preflight against the archived source to read current destination instructions, confirm access and gather any required sources. Preserve the recorded owning configuration when resuming from another directory.
3. **Reconcile and complete remaining work**
   - Inspect existing brain records to avoid duplicating previously saved knowledge.
   - Complete only the remaining ingestion steps.
   - Update the owning intent record with the completed brain paths.
   - Read back all updated records.
4. **Report completion**
   - Once readback confirms all records, report completion with the archived change path and all saved brain record paths.
