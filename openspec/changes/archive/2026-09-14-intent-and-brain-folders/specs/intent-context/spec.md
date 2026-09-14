## Purpose

Preserve confirmed user outcomes in a configured intent folder and carry their ownership through framework work.

## ADDED Requirements

### Requirement: Configured storage locations
The workflow SHALL record the user-selected intent folder and exactly one second-brain folder in project context, resolve relative paths against that context file, and follow each destination's applicable instructions before writing.

#### Scenario: Selecting storage during setup
- **WHEN** the user supplies the intent and brain folders during setup
- **THEN** subsequent framework work discovers and saves intents in that intent folder and uses that single brain for ingestion
- **AND** the recorded locations preserve the user's selection

#### Scenario: Relative paths during continuation
- **WHEN** work resumes from another directory with relative folder paths in the owning project's context
- **THEN** the paths resolve relative to the defining context file rather than the current directory

#### Scenario: Missing required location
- **WHEN** a framework operation needs a folder that has not been configured
- **THEN** the agent obtains the user's location choice before writing there

### Requirement: Confirmed active-intent resolution
The agent SHALL search relevant active intents and read their linked preparation, clarify the desired outcome, and discuss the proposed reuse or creation with the user before creating or updating an intent. It SHALL capture the intent once the outcome and record choice are confirmed, subject to the user's write permissions.

#### Scenario: Related active intent
- **WHEN** a request belongs to an existing active intent
- **THEN** the agent identifies that intent and discusses extending it
- **AND** updates its record only after user confirmation covering the proposed update

#### Scenario: Independent outcome
- **WHEN** the clear requested outcome needs a separate intent
- **THEN** the agent confirms that understanding with the user before creating its record in the configured intent folder

#### Scenario: User corrects the interpretation
- **WHEN** the user corrects the proposed outcome or intent relationship
- **THEN** the agent revises its understanding and obtains confirmation before writing the proposed record change

### Requirement: Request provenance and ownership
The intent SHALL preserve verbatim requests and corrections separately from interpretation and link its related preparation, OpenSpec changes and established Linear work. OpenSpec SHALL retain specification, design approval and implementation-task ownership; Linear SHALL retain work-tracking ownership.

#### Scenario: Preparing a change
- **WHEN** an OpenSpec change is prepared for a confirmed intent
- **THEN** its proposal references the intent and the intent links the preparation without duplicating authoritative specifications or task progress

### Requirement: Explicit framework and write choices
The agent SHALL honour an explicit choice to work outside the framework and an explicit read-only request.

#### Scenario: Work without the framework
- **WHEN** the user requests work without the framework or an intent
- **THEN** the agent carries out the requested work within its authorization without requiring framework setup, creating an intent or triggering framework ingestion

#### Scenario: Advice only
- **WHEN** the user requests advice without changes
- **THEN** the agent can inspect relevant records but leaves intent, project, brain and Linear records unchanged

### Requirement: Continuation and intent lifecycle
The workflow SHALL preserve the owning intent and configuration across handoffs, shared planning stores and participating repositories. An intent SHALL remain active while its requested outcome or preparation remains unfinished.

#### Scenario: Multi-repository handoff
- **WHEN** a handoff continues the change in another participating repository
- **THEN** the receiving agent uses the same owning intent and defining project context rather than selecting destinations from its working directory

#### Scenario: One of several changes is archived
- **WHEN** one linked change is archived while another part of the intent remains unfinished
- **THEN** the intent remains active and its relevant result and references are updated under the confirmed scope
