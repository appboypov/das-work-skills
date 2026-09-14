---
name: openspec-bulk-archive-change
description: Archive several changes and ingest their knowledge into the configured brain. Use when archiving a batch or resuming its incomplete ingestion.
---

Read [workflow](../workflow/SKILL.md) and [brain ingestion](../workflow/references/brain-ingestion.md) before applying this skill.


Archive multiple completed changes in a single operation.

This skill allows you to batch-archive changes, handling spec conflicts intelligently by checking the codebase to determine what's actually implemented.

**Store selection:** If the user names a store (a store is a standalone OpenSpec repo registered on this machine) or the work lives in one, run `openspec store list --json` to discover registered store ids, then pass `--store <id>` on the commands that read or write specs and changes (`new change`, `status`, `instructions`, `list`, `show`, `validate`, `archive`, `doctor`, `context`, `schemas`, `view`). Once selected, treat `--store <id>` as sticky for the rest of the workflow. Every unscoped example of those commands below is shorthand: before running it, append the flag. For example, run `openspec status --change "<name>" --json --store "<id>"`, not the unscoped form shown below. Other commands do not take the flag. Hints printed by commands already carry the flag; keep it on follow-ups. Without a store, commands act on the nearest local `openspec/` root.

`<capability-path>` is the spec directory relative to `specs/` (for example, `user-auth` or `identity/user-auth`). Preserve the full path from each delta spec when resolving its main spec.

**Input**: None required (prompts for selection)

**Steps**

1. **Get active changes**

   Run `openspec list --json` to get all active changes.

   Handle any requested archived resumption through [brain ingestion resumption](../workflow/references/brain-ingestion.md#resumption), including when active changes also exist. Archived selections use their archived paths and proceed directly to ingestion and readback. Keep them out of active-change CLI checks, sync and moves, and include their outcomes in the batch report.

   If no active changes or requested archived resumptions remain, inform the user and stop.

2. **Prompt for change selection**

   Ask the user to choose changes (multi-select):
   - Show each change with its schema
   - Include an option for "All changes"
   - Allow any number of selections (1+ works, 2+ is the typical use case)
   - When resuming incomplete ingestion, include eligible archived changes in the selection prompt

   **IMPORTANT**: Do NOT auto-select. Always let the user choose.

   Read current verification evidence for every selected change. Distinguish completed, verified behavior from incomplete historical work. Preserve unfinished tasks and failed checks when the user explicitly chooses to archive unfinished work.

   **Load current archive inputs once for the selected root before batch validation:**

   Choose one selected change from this root and run
   `openspec instructions archive --change "<selected-change>" --json` with the
   same selected-root flags. Read the returned context and operation guidance.
   If the command fails or returns invalid JSON, report the error and resolve
   the selected root or runtime prerequisite before processing the batch.

   A valid response may omit `context` and `operationGuidance`. Treat
   `context` as a required prompt-level input across the batch: read and consider
   it, and apply relevant project facts, conventions, and constraints. Treat
   `operationGuidance` as optional additive advice: read and consider every
   entry, and follow entries that are applicable and compatible with the built-in
   batch workflow.

   Keep both fields separate from conflict analysis, explicit user choices,
   resolved paths, CLI checks, and command contracts. If context conflicts with one
   of those controlling inputs, report the conflict and preserve the controlling
   value. If guidance is inapplicable or conflicts with a controlling input, do not
   follow it and explain why. Do not infer skipped prompts, replacement paths, or
   flags from either field, and do not copy their text verbatim into specs, changes,
   or summaries. These are prompt-level behavior contracts, not enforceable checks.

3. **Batch validation - gather status for all selected changes**

   For each selected change, collect:

   a. **Artifact status** - Run `openspec status --change "<name>" --json`
      - Parse `schemaName`, `artifacts`, `planningHome`, `changeRoot`, `artifactPaths`, and `actionContext`
      - Note which artifacts are `done` vs other states

   b. **Task completion** - Read `artifactPaths.tasks.existingOutputPaths` from status JSON
      - Count `- [ ]` (incomplete) vs `- [x]` (complete)
      - If no tasks file exists, note as "No tasks"

   c. **Delta specs** - Check `artifactPaths.specs.existingOutputPaths` from status JSON
      - List which capability specs exist
      - For each, extract requirement names (lines matching `### Requirement: <name>`)
      - Treat this list as the only delta-spec source. If the `specs` entry is
        missing or the list is empty, perform no spec sync or specs-instruction
        lookup for that change; do not infer deltas from unrelated artifacts.
      - Evaluate this independently for every change, including mixed-schema
        batches where some schemas have no `specs` artifact.
4. **Detect spec conflicts**

   Build a map keyed by `<capability-path>`, the exact path relative to `specs/`:

   ```text
   identity/user-auth -> [change-a, change-b]  <- CONFLICT (2+ changes)
   billing/user-auth  -> [change-c]            <- OK (different full path)
   ```

   A conflict exists when 2+ selected changes have delta specs for the exact same `<capability-path>`.

5. **Resolve conflicts agentically**

   **For each conflict**, investigate the codebase:

   a. **Read the delta specs** from each conflicting change to understand what each claims to add/modify

   b. **Search the codebase** for implementation evidence:
      - Look for code implementing requirements from each delta spec
      - Check for related files, functions, or tests

   c. **Determine resolution**:
      - If only one change is actually implemented -> sync that one's specs
      - If both are implemented -> derive the resulting requirements from their actual implemented behavior and current verification evidence. Preserve compatible contributions. Resolve contradictory requirements before choosing a merge order.
      - If neither implemented -> skip spec sync, warn user

   d. **Record resolution** for each conflict:
      - An inclusion or exclusion decision for every delta spec, keyed by change and `<capability-path>`
      - Which included delta specs to apply and in what order
      - Which delta specs to exclude from sync because their implementation is missing
      - Rationale (what was found in codebase)

6. **Show consolidated status table**

   Display a table summarizing all changes:

   ```markdown
   | Change              | Artifacts | Tasks | Specs   | Conflicts | Status |
   |---------------------|-----------|-------|---------|-----------|--------|
   | schema-management   | Done      | 5/5   | 2 delta | None      | Ready  |
   | project-config      | Done      | 3/3   | 1 delta | None      | Ready  |
   | add-oauth           | Done      | 4/4   | 1 delta | identity/user-auth (!) | Ready* |
   | add-verify-skill    | 1 left    | 2/5   | None    | None      | Warn   |
   ```

   For conflicts, show the resolution:
   ```text
   * Conflict resolution:
     - identity/user-auth spec: Preserve the demonstrated OAuth and JWT behaviors in the resulting requirements; validate both after the merge.
   ```

   For incomplete changes, show warnings:
   ```text
   Warnings:
   - add-verify-skill: 1 incomplete artifact, 3 incomplete tasks
   ```

7. **Confirm batch operation**

   Ask the user a single confirmation question:

   - "Archive N changes?" with options based on status
   - Options might include:
     - "Archive all N changes"
     - "Archive only N ready changes (skip incomplete)"
     - "Cancel"

   If there are incomplete changes, make clear they'll be archived with warnings.

   Route on the answer by intent, not by exact label. you wrote these labels,
   so match what the user picked rather than the wording above:
   - "Cancel". stop, do not archive. Report that nothing was archived and skip the remaining steps.
   - The archive-everything option. proceed with every selected change
   - The ready-only option. proceed with only the changes the step 6 table marks `Ready` or `Ready*`, and record the rest as Skipped in step 8f. If a `Ready*` change's conflict partner is skipped, re-derive that conflict's resolution using only the changes being archived.
   - Anything else. ask again rather than archiving

   Before step 8 writes the first main spec or moves any change, check shared prerequisites and fetch every required specs-rule snapshot for the confirmed batch.

   **Check shared destination prerequisites:**
   Complete the shared destination checks in [brain ingestion preflight](../workflow/references/brain-ingestion.md#preflight). A shared blocker stops the batch before any selected change is moved or written.

   **Fetch specs-rule snapshots:**
   For each change that will sync concrete `artifactPaths.specs.existingOutputPaths`, run `openspec instructions specs --change "<name>" --json` exactly once with the same selected-root flags. Obtain all snapshots before the first write or move. If any lookup exits non-zero or returns invalid artifact-instruction JSON, identify the affected change, report the error, and stop the whole batch before any main-spec write or change move. Do not treat lookup failure as omitted rules. A valid response without `rules` is the no-rules case.
8. **Execute archive for each confirmed change**

   Before processing, carry the recorded decisions from step 5 (after any step 7 re-derivation) into two per-delta sets:
   - `includedDeltas`: all non-conflicting delta specs from confirmed changes plus conflict deltas selected for sync
   - `excludedDeltas`: conflict deltas from confirmed changes excluded because their implementation is missing
   - A single change can have both included and excluded delta specs. Keep the decision per delta; do not collapse it into a per-change sync flag.

   Process changes in the determined order (respecting conflict resolution):

   a. **Run change-specific preflight**:
      - Complete [brain ingestion preflight](../workflow/references/brain-ingestion.md#preflight) for the change, reusing the shared destination checks.
      - Mark a source-specific blocker as `Blocked`, retain that change's active path and continue independent eligible changes. Reconsider conflict partners whose sync depended on the blocked change before proceeding.

   b. **Sync included delta specs**:
      - Run the `openspec-sync-specs` workflow inline (agent-driven intelligent merge) only for changes with entries in `includedDeltas`, passing only the included delta paths and explicitly instructing it to ignore that change's `excludedDeltas`. Wait for it to finish.
      - For conflicts, apply in resolved order.
      - Pass that change's fetched specs-rule snapshot into inline sync; inline
        sync must reuse it without fetching instructions again
      - Apply artifact rules only to main specs produced by that change. They do
        not change conflict resolution, archive behavior, or CLI contracts, and
        their text is not copied into an output file
      - Do not delegate to a background task. Step 8d would move `changeRoot` out from under a sync that is still reading it.
      - If a change has no included delta specs, do not run the sync workflow for it.

   c. **Verify included delta specs before moving changeRoot**:
      - Re-run the comparison only for delta specs in `includedDeltas` against main spec at `<planningHome.root>/openspec/specs/<capability-path>/spec.md` (use the store-aware `planningHome.root` from step 3 status JSON, not a hardcoded repo path).
      - Verify that main specs are updated:
        - ADDED requirements present
        - MODIFIED requirements carrying scenario and description changes named in the delta, with their other scenarios intact
        - REMOVED requirements gone. and where this sync retired a capability (removed its last requirement, leaving `## Requirements` empty), its main spec deleted rather than left empty; a spec the sync deliberately kept and reported is also a match
        - RENAMED requirements present under the new name and absent under the old one
      - Do not verify delta specs in `excludedDeltas`; they are intentionally left unsynced.
      - If sync failed or any capability does not match verification, report what differs and mark that change as `Failed`. Do not move that change's `changeRoot`. Independent eligible changes continue.

   d. **Perform the archive move**:
      - Target name: use the change name as-is when it already starts with a `YYYY-MM-DD-` prefix; otherwise prepend the current date as `YYYY-MM-DD-<name>` (same rule as `openspec archive`).
      - Check if target already exists:
        - If yes: mark that change as `Failed` (archive directory already exists), do not move `changeRoot`, and continue with other changes.
        - If no: move `changeRoot` to the archive directory:
          ```bash
          mkdir -p "<planningHome.changesDir>/archive"
          mv "<changeRoot>" "<planningHome.changesDir>/archive/<target-name>"
          ```

   e. **Ingest knowledge and read back records**:
      - Immediately after moving `changeRoot`, complete [ingestion and readback](../workflow/references/brain-ingestion.md#ingestion-and-readback).
      - Record a post-move failure as `Archived (ingestion incomplete)` with its archived identity, known output paths and remaining work. Continue independent eligible changes.

   f. **Track outcome for each change**:
      - `Completed`: archived successfully, brain ingestion and readback verified, with saved brain record paths.
      - `Archived (ingestion incomplete)`: moved to archive, but brain ingestion or readback failed; records remaining work and resumption details.
      - `Blocked`: change-specific preflight failed (missing required issue, document, attachment, or intent); `changeRoot` unmoved.
      - `Failed`: error during spec verification or archive move (e.g. archive directory already exists); `changeRoot` unmoved.
      - `Skipped`: user chose not to archive.
      - `Sync skipped`: for every delta in `excludedDeltas`, report `sync skipped` with the change, `<capability-path>`, and recorded reason. This is distinct from skipping the archive.

9. **Display summary**

   Show final results with per-change outcomes:

   ```markdown
   ## Bulk Archive Complete

   Archived and ingested 3 changes:
   - schema-management-cli -> archive/2026-01-19-schema-management-cli/ (brain: knowledge/schema-management.md)
   - project-config -> archive/2026-01-19-project-config/ (brain: knowledge/project-config.md)
   - add-oauth -> archive/2026-01-19-add-oauth/ (brain: knowledge/auth.md)

   Skipped 1 change:
   - add-verify-skill (user chose not to archive incomplete)

   Spec sync summary:
   - 4 delta specs synced to main specs
   - 1 delta spec sync skipped (add-jwt, identity/user-auth: implementation not found)
   - 1 conflict resolved (identity/user-auth: synced add-oauth, skipped add-jwt)
   ```

   If any changes are blocked, failed, or have incomplete ingestion:
   ```markdown
   Archived with incomplete ingestion (resumable) 1 change:
   - partial-change -> archive/2026-01-19-partial-change/ (remaining: write knowledge/partial.md)

   Blocked 1 change:
   - blocked-change: Missing linked Linear issue attachment design-spec.pdf (changeRoot intact)

   Failed 1 change:
   - some-change: Archive directory already exists (changeRoot intact)
   ```
**Conflict Resolution Examples**

Example 1: Only one implemented
```text
Conflict: <planningHome.root>/openspec/specs/auth/spec.md touched by [add-oauth, add-jwt]

Checking add-oauth:
- Delta adds "OAuth Provider Integration" requirement
- Searching codebase... found src/auth/oauth.ts implementing OAuth flow

Checking add-jwt:
- Delta adds "JWT Token Handling" requirement
- Searching codebase... no JWT implementation found

Resolution: Only add-oauth is implemented. Will sync add-oauth specs only.
```

Example 2: Both implemented
```text
Conflict: <planningHome.root>/openspec/specs/api/spec.md touched by [add-rest-api, add-graphql]

Checking add-rest-api (created 2026-01-10):
- Delta adds "REST Endpoints" requirement
- Searching codebase... found src/api/rest.ts

Checking add-graphql (created 2026-01-15):
- Delta adds "GraphQL Schema" requirement
- Searching codebase... found src/api/graphql.ts

Resolution: Both implemented. Preserve the demonstrated REST and GraphQL
behaviors in the resulting API requirements and validate both.
```

**Output On Success**

```markdown
## Bulk Archive Complete

Archived and ingested N changes:
- <change-1> -> archive/<target-name-1>/ (brain: <saved-brain-paths>)
- <change-2> -> archive/<target-name-2>/ (brain: <saved-brain-paths>)

Spec sync summary:
- N delta specs synced to main specs
- No conflicts (or: M conflicts resolved)
```

**Output On Partial Success**

```markdown
## Bulk Archive Results

Archived and ingested N changes:
- <change-1> -> archive/<target-name-1>/ (brain: <saved-brain-paths>)

Archived with incomplete ingestion (resumable) K changes:
- <change-2> -> archive/<target-name-2>/ (remaining: <remaining-work>)

Blocked M changes:
- <change-3>: Missing required document <path> (changeRoot intact)

Failed J changes:
- <change-4>: Archive directory already exists (changeRoot intact)

Skipped P changes:
- <change-5> (user chose not to archive incomplete)
```

**Output When No Changes**

```markdown
## No Changes to Archive

No active changes found. If you have archived changes with incomplete ingestion, run `openspec-bulk-archive-change` and name the archived changes to resume ingestion.
```

**Guardrails**
- Allow any number of changes (1+ is fine, 2+ is the typical use case)
- Always prompt for selection, never auto-select
- Detect spec conflicts early and resolve by checking codebase
- When several changes are implemented, resolve the resulting requirements against their combined behavioral evidence before choosing a merge order
- Skip spec sync only when implementation is missing (warn user)
- Show clear per-change status before confirming
- Use single confirmation for entire batch
- Never archive after the user cancels the confirmation; a cancelled batch archives nothing
- Check for incomplete ingestion of archived changes before stopping on empty active changes
- Check shared brain prerequisites once before any change moves; an inaccessible brain folder is a shared blocker that stops the batch before any move
- Run change-specific preflight before moving each change; an inaccessible issue, document, or intent blocks only that change while independent eligible changes continue
- Move `changeRoot` only after preflight passes
- If archive target exists or spec verification fails, fail that change but continue with others
- If sync is requested, run the `openspec-sync-specs` workflow inline (agent-driven) for each change with included delta specs
- Carry the per-delta `includedDeltas` and `excludedDeltas` decisions into execution; sync and verify only included deltas
- Report every excluded delta as `sync skipped` without treating the archive itself as skipped
- Never archive a change while a spec sync is still in flight; run the sync inline and verify main specs before moving `changeRoot`
- Run brain ingestion and read back saved records immediately after each change moves; post-move ingestion failure records the change as archived with incomplete ingestion and allows independent changes to continue
- Resumption accepts the archived directory directly without moving files again or duplicating records
- Scope source gathering to linked work contributing to each change
- Keep multi-change intents active while unfinished work remains
- Track and report all outcomes per change: completed, archived with incomplete ingestion, blocked, failed, and skipped
- Distinguish shared blockers from change-specific failures: a shared blocker stops moves across the batch; a change-specific blocker affects only that change and allows independent eligible changes to proceed
- Fetch archive inputs once per selected root before spec inspection or moves; resolve a failed lookup before processing that root's batch
- Fetch all required specs-rule snapshots before the batch's first main-spec write or move; a shared snapshot failure stops the batch atomically before any write or move
- Changes without concrete `artifactPaths.specs.existingOutputPaths` continue without spec sync
- Apply relevant runtime context across the batch and report conflicts
- Operation guidance remains advisory; consider every entry and explain rejected advice
- Keep runtime inputs, conflict analysis, CLI-derived values, and artifact rules separate
- Artifact rules constrain only written specs
- Never copy runtime input or artifact-rule text verbatim into output files
