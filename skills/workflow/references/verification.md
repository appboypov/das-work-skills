# Verification

Implementation and checks were performed directly by the main agent. No subagents were launched. Runtime checks used OpenSpec 1.13.0 with temporary XDG configuration and data directories. User store registrations and global defaults were not changed.

## Observed results

| Check | Observed result |
| --- | --- |
| Bundle integrity | 51 unique skill identities, 45 templates, valid local Markdown references, portable frontmatter and present schema templates |
| Issue template fidelity | All five supplied issue template bodies retained exactly |
| First installation | 128 files installed, including skills, supporting assets, schema, licenses and provenance |
| Reinstallation | Zero changed files on an identical subsequent install |
| Owned adaptation update | Changed bundle source files updated successfully through the same installer |
| Local customization | An edited installed skill caused preflight failure; its content and planning config remained unchanged |
| Source protection | A destination nested inside the source skill tree was rejected |
| Store-pointer protection | A code repository pointing to a store was rejected as a schema installation root before destination writes |
| Config preservation | Existing reference-store configuration survived explicit schema selection |
| Native schema | `schema validate das-work-schema --json` returned `valid: true` and no issues |
| Planning instructions | Proposal, specs, design and tasks resolved through the custom schema |
| Missing prerequisites | Apply instructions returned `blocked` with the actual missing artifacts |
| Ready work | Complete planning with an unchecked task returned `ready` |
| Real behavior | A temporary greeting command initially printed `Hi Ada`; after correction it printed the required `Hello Ada` |
| Completed work | Checked task returned `all_done` after the actual behavior check |
| Requirement revision | Punctuation revision invalidated prior evidence; unchecking the affected task restored `ready` |
| Revised behavior | The command printed `Hello Ada!` and the exact-output check passed |
| Local archive | Strict validation passed; native archive produced the demonstrated current greeting specification |
| Store-only routing | A config-only code repository resolved its registered planning store |
| Store-optional routing | Unscoped context stayed local; explicit store selection resolved the store |
| Cross-directory continuation | Shared status from a different repository resolved the same store change |
| Store schema lookup | `schemas --store smoke-plans --json` returned the store-local custom schema |
| Read-only references | Artifact instructions included the reference index and fetch command; its spec bytes stayed unchanged |
| Multi-repository behavior | Both temporary repository commands printed `Hello Ada!` |
| Shared archive | Archive invoked from a code checkout updated current specs and history in the selected store only |
| Documentation-only change | `skip_specs: true` produced skipped specs and passed strict validation without invented requirements |
| Workset creation | Saved and listed the two requested folders |
| Workset opening | The VS Code opener returned success; the generated workspace file contained both expected folder paths |
| Workset removal | Confirmed removal deleted the saved group while preserving both member directories |
| Supporting code assets | Both shell templates passed `bash -n`; installer, checker and dependency-cruiser configuration passed `node --check` |

## Integration review

The skill instructions were reviewed for shared artifact ownership, explicit implementation approval, task completion evidence, requirement revision, complete diff review, agent portability and Linear comment behavior. Source scans found no host-specific invocation metadata or dependencies on personal Work workflows in the delivered skills. The router and repository instructions identify Skuddy.

Bulk archive resolves overlapping requirements against combined implementation evidence. Current source describes the intended behavior; issues and archived changes retain historical context.

## Findings resolved during execution

The first installer run encountered macOS's system directory symlink. The installer now resolves the explicitly selected destination's existing ancestor before checking child paths. Installation and idempotent reinstallation then passed.

The first non-interactive workset removal required `--yes`. The delivered workset instructions include that confirmed option, and the subsequent removal passed.

The CLI's creation progress message and `planningHome.defaultSchema` can say `spec-driven` while the created change uses the selected custom schema. Schema instructions and validation confirmed the selection. Consumers use the change's `schemaName` and returned artifact paths.

## Evidence and limits

The standard skills CLI also installed all 51 skills with `--copy` into a temporary client project. The installed tree contained the setup guide, schema, templates, licenses and provenance without symlinks to the checkout. Copying the installed schema into that project and running OpenSpec through an independent `npx --package @fission-ai/openspec@1.13.0` invocation passed native validation. Client operation requires no source-repository files.

[checks.json](checks.json) records command invocations with output, including initial findings and intentionally rejected operations. [source-checksums.json](source-checksums.json) identifies the checked skill and script files. Historical command paths reflect their execution locations.

Schema naming and project-context checks confirmed `das-work-schema` in installer output, native schema validation, new-change status and artifact instructions. Reinstallation changed zero files and preserved unrelated configuration and comments. Setup and resumed work use `.das-work`; Skuddy's recommendation contract names installed skills, explains their purpose and orders the relevant steps. The acceptance journeys cover review, clarification, approved work, revisions, writing and advice-only requests. These routing checks are instruction review, not a claim of execution across every agent.

The CLI smoke journeys were authored and executed by the main agent using the delivered workflow rules. They establish installer behavior, native schema compatibility, actual command behavior and planning-root resolution. Skill instructions are agent guidance, not runtime enforcement of approval or evidence.

No claim is made that every skill has been exercised by every coding agent. Independent verification, native Linear template installation, live initiative/project restructuring, PR publication and a complete agent-driven bulk-archive conflict journey were not performed. Those operations require the relevant workspace permissions, requested work and host capabilities. The acceptance journeys describe how to exercise them. The editor opener's successful exit and workspace file were checked; its visible window was not inspected.
