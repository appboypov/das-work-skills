## Purpose

Let users update their installed skill bundles through one portable skill using the existing updater and its installation records.

## ADDED Requirements

### Requirement: Update installed bundles in place

The bundle SHALL provide a discoverable `update-work-skills` skill that invokes the existing skills updater for all installed bundles in global and current-project scope using their recorded installation destinations.

#### Scenario: Global and project installations exist

- **WHEN** the user invokes update-work-skills from a project with installed skills and has globally installed skills
- **THEN** the skill runs the updater for both scopes without restricting the operation to the DAS bundle
- **AND** the updater owns destination selection through its existing installation records

#### Scenario: Only global installations exist

- **WHEN** the user invokes update-work-skills where no project skills are installed
- **THEN** the skill still runs the global update and reports the updater's project-scope result

### Requirement: Report the actual update result

The skill SHALL report the updater's observed result including reported failures or skipped skills rather than claim that every installed skill was updated.

#### Scenario: Updates complete

- **WHEN** the updater finishes successfully
- **THEN** the skill summarizes the updates or up-to-date result the command actually reported

#### Scenario: Updates fail or skills are skipped

- **WHEN** the updater reports a failure or skips an installed skill
- **THEN** the skill includes that outcome in its report
- **AND** it does not report the affected skill as successfully updated
