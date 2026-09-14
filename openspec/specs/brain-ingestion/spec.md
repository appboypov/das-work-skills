# brain-ingestion specification

## Purpose

Preserve the knowledge produced by archived work in the configured second brain with its sources and accurate outcome evidence.

## Requirements

### Requirement: Instruction-led curated preservation
The archive workflow SHALL ingest the intent, change artifacts, delivery evidence and substantive linked Linear material into the configured single brain. It SHALL default to curated records with sources and follow the brain's applicable instructions for organization and preservation format.

#### Scenario: Default preservation
- **WHEN** the brain instructions specify no alternative preservation format
- **THEN** ingestion saves curated substantive knowledge with source references, including relevant intent requests, decisions, change results and Linear discussion
- **AND** source links accompany the retained knowledge rather than replacing it

#### Scenario: Brain-specific instructions
- **WHEN** the brain instructions prescribe a preservation format and record locations
- **THEN** ingestion uses that format and those locations within the configured brain

### Requirement: Complete source preflight
Before moving a change, the agent SHALL resolve its owning intent and brain, read applicable destination instructions and relevant existing records, and gather required change evidence and linked Linear material. Source gathering SHALL include issue descriptions and comments and relevant documents and attachments.

#### Scenario: Accessible linked sources
- **WHEN** all required sources and the destination are accessible
- **THEN** the agent gathers their substantive content before performing the archive move

#### Scenario: Required source unavailable
- **WHEN** a required issue, document, attachment, intent or destination cannot be accessed
- **THEN** the agent reports the specific missing prerequisite before moving the affected change
- **AND** it does not report archive-and-ingestion completion

### Requirement: Accurate record reconciliation
Ingestion SHALL reconcile existing brain records rather than create duplicate knowledge and SHALL distinguish proposed, delivered and verified outcomes using the available evidence. Brain instructions SHALL determine record structure and linking.

#### Scenario: Existing knowledge record
- **WHEN** a relevant brain record already contains part of the change's knowledge
- **THEN** ingestion updates or links that record as appropriate and retains source provenance

#### Scenario: Incomplete or unverified work
- **WHEN** an archived change includes proposed, excluded, unfinished or unverified work
- **THEN** retained records identify its actual status and do not claim that archiving proves delivery or verification

### Requirement: Observable archive completion
The skill-driven archive workflow SHALL complete its existing specification reconciliation and archive operation, ingest the gathered material, read back the saved records, and report the archive identity and brain record paths. Completion SHALL require successful ingestion and readback.

#### Scenario: Successful single archive
- **WHEN** the archive operation, ingestion and readback succeed
- **THEN** the agent reports completion with the archived change path and saved brain record paths

### Requirement: Resumable incomplete ingestion
The workflow SHALL preserve the archived identity, known destination paths and remaining ingestion work when ingestion fails after the move. Resumption SHALL use that archived identity and reconcile existing outputs.

#### Scenario: Failure after archive move
- **WHEN** the archive move succeeds but writing or reading back a brain record fails
- **THEN** the result states that the change is archived and ingestion is incomplete
- **AND** identifies the archived path, known output paths and remaining work

#### Scenario: Resume an archived change
- **WHEN** the user resumes incomplete ingestion for an archived change
- **THEN** the agent resolves the archived source and existing outputs without moving the change again or duplicating records
- **AND** resumption remains available when there are no active changes

### Requirement: Per-change bulk outcomes
Bulk archiving SHALL check shared prerequisites before moving changes and track archive and ingestion outcomes separately for each selected change. A failure specific to one change SHALL allow independent changes to continue.

#### Scenario: Shared destination unavailable
- **WHEN** the configured brain cannot be accessed for the batch
- **THEN** the agent reports the shared blocker before any selected change is moved

#### Scenario: Individual failure
- **WHEN** one selected change fails a change-specific prerequisite or ingestion step
- **THEN** the agent reports its precise outcome while continuing independent eligible changes
- **AND** the final report identifies completed, blocked, skipped and archived-but-ingestion-incomplete changes as applicable
