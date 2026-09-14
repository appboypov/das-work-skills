---
name: openspec-store
description: Manage shared OpenSpec planning stores. Use when planning spans repositories or references shared specifications.
---
# OpenSpec stores

Read [workflow](../workflow/SKILL.md). Inspect `openspec store list --json`, `openspec context --json`, and the intended repositories before changing configuration. A store is a standalone checkout with `.openspec-store/store.yaml` and `openspec/`; its registration is machine-local.

## Select the arrangement

- Repo-local: specs and changes live in the code repository's `openspec/`.
- Store-only: the code repository has `openspec/config.yaml` with `store: <id>` and its planning artifacts live in that registered store.
- Store-optional: the repository keeps local specs and changes; pass `--store <id>` for shared work.

Root selection follows explicit `--store`, then local specs/changes, then the project's `store:` pointer, then machine `defaultStore`. Even empty local specs/changes directories select local planning. Confirm the resulting root through context and preserve its selection throughout the change and handoffs.

## Create and join

1. Obtain the intended store identity and location from the agreed project. Reuse an existing registered store when it owns the work.
2. For authorized creation, use `openspec store setup <id> --path <path> --json`. Setup initializes Git and an initial commit by default; pass `--no-init-git` when Git initialization is outside the request. `--remote <url>` records its canonical clone source. Read help before applying additional options.
3. Install `das-work-schema` in the store's `openspec/schemas/` and select it in the store configuration. Keep project-specific context and rules in that root's config.
4. To share a store, use the user's authorized Git publication process. Teammates clone it and run `openspec store register <path>` on their machine. Registration associates an existing checkout; confirm the stored identity and location afterward.
5. Verify with `openspec store doctor <id>` and `openspec context --store <id> --json`. Commands inspect the registered local checkout. Fetching or publishing remote content is a separate authorized Git action.

## Connect existing planning

For store-only work, preserve all existing specs, active changes and archive history while moving the authorized planning content into its owning store. Resolve collisions before moving, repair references and remove only the vacated local specs/changes directories. Keep the code repository's `store:` pointer. Confirm unscoped context resolves the store.

For store-optional work, preserve local planning and explicitly carry `--store <id>` for a shared change. Set or unset machine `defaultStore` through `openspec config` only when the user requests a machine-wide default.

## Read reference stores

Declare `references: [<id>]` in the selected planning root's config for read-only context. A reference may be an object with `id` and `remote`. Artifact instructions supply a referenced-spec index and commands such as `openspec show <spec-id> --type spec --store <reference-id>`.

Read and cite needed reference specs. The change's selected root remains its write destination. Reference configuration grants context, not permission to modify upstream artifacts. Use doctor to report missing registrations or stale local assumptions before relying on them.

## Inspect and remove

Use `store list`, `store doctor`, `doctor` and `context` for discovery and diagnosis. One store ID maps to one checkout on a machine. `store unregister <id>` forgets registration and preserves files. `store remove <id>` also deletes the local folder; obtain explicit deletion authorization and inspect local work before using it.

Planning commands including `schemas` accept `--store` in the pinned runtime. Run `init`, `update`, `templates` and `schema` management from their intended local directory according to command help. Keep this bundle's owned skills under its installer rather than generated upstream skill ownership.

Finish with the verified store ID, root, registration, connected repositories and any remaining access prerequisite. Use [worksets](../openspec-workset/SKILL.md) when a saved folder group is useful.
