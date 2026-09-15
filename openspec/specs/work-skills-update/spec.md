# Work skills update specification

## Purpose

Let users refresh the DAS work skills bundle in its existing global and current-project installations through the skills CLI.

## Requirements

### Requirement: Update installed DAS work skills

The bundle SHALL provide a discoverable `update-work-skills` skill that considers the global configuration and current project to determine where this bundle is installed. It SHALL run `npx skills add appboypov/das-work-skills --global --skill '*'` for an existing global installation and `npx skills add appboypov/das-work-skills --skill '*'` from the current project for an existing local installation.

#### Scenario: Global and project installations exist

- **WHEN** DAS work skills are installed globally and in the current project
- **THEN** the skill runs both commands to refresh this bundle in both scopes

#### Scenario: Only a global installation exists

- **WHEN** DAS work skills are installed globally but not in the current project
- **THEN** the skill runs only the global command

#### Scenario: Only a project installation exists

- **WHEN** DAS work skills are installed in the current project but not globally
- **THEN** the skill runs only the local command from the current project

#### Scenario: Neither installation exists

- **WHEN** DAS work skills are installed in neither scope
- **THEN** the skill reports that there is no installation to update and runs neither command

### Requirement: Report the actual update result

The skill SHALL report the updater's observed result including reported failures or skipped skills rather than claim that every installed skill was updated.

#### Scenario: Updates complete

- **WHEN** the updater finishes successfully
- **THEN** the skill summarizes the updates or up-to-date result the command actually reported

#### Scenario: Updates fail or skills are skipped

- **WHEN** the updater reports a failure or skips an installed skill
- **THEN** the skill includes that outcome in its report
- **AND** it does not report the affected skill as successfully updated
