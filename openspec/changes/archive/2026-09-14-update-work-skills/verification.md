# Verification report: update-work-skills

## Summary

| Dimension | Result |
| --- | --- |
| Completeness | 2/2 implementation tasks complete; 2/2 requirements represented |
| Correctness | All 4 scenarios have applicable command evidence; reporting instruction inspected |
| Coherence | Three-file source scope follows the approved design and portable skill conventions |

## Requirement and scenario evidence

- **Update installed bundles in place**: `skills/update-work-skills/SKILL.md:7-8` selects the target working directory and invokes both scopes without a bundle filter. README and ask-skuddy expose the same skill. Isolated bundle installation copied the new skill exactly.
- **Global and project installations exist**: run 5 in [smoke-results.json](smoke-results.json) checked global skills and updated the project installation, exit 0. Runs 7 and 9 used the exact documented npx command with both scopes.
- **Only global installations exist**: run 3 reported global skills up to date and no project skills to update, exit 0.
- **Report the actual update result**: `skills/update-work-skills/SKILL.md:9` requires output and exit-status inspection and reporting actual updates, skips and failures.
- **Updates complete**: runs 5 and 7 reported setup-work-skills updated in the project, exit 0.
- **Updates fail or skills are skipped**: run 9 exercised the skipped branch with a controlled global local-source lock entry. It reported update-work-skills could not be checked automatically while reporting the separate project update. The nonzero-failure branch was not runtime-tested.

## Checks and working state

Reused the runtime evidence from this implementation because the three source files have not changed since those runs. Read every saved update invocation and compared its observed result to the scenarios. OpenSpec status reports all planning artifacts complete; apply reports 2/2 tasks complete. Strict change validation passed. Bundle validation passed with 52 skills and 129 files.

Source SHA-256 fingerprints:

- `skills/update-work-skills/SKILL.md`: `9792c8b98936f86b70ac0fe9d049ad4b7ed8bffef2f45bda4860c31fb466e10d`
- `skills/ask-skuddy/SKILL.md`: `756d0c670f979ab0244dd73baa0fea66ecc3c6e7c5a964648c5ef56ed1faa163`
- `README.md`: `dec16c0ca92f35ffb22e91bb16743f24368e50011b537e97b96b90662ff98522`

## Findings and limits

No blocking implementation findings. The command wrapper follows the approved requirements and design. Existing upstream reporting limitations are preserved in [evidence](evidence.md#limits-and-observations).

This check was performed by the implementing agent in the same conversation. It is not independent verification and sets no record to Verified. The command was exercised directly; an independent agent following the written skill and a real failed-update invocation remain untested. The skipped branch covers the combined failure-or-skip scenario.

## Next step

The change is ready for independent verification if required by the workspace's delivery gate, followed by authorized current-spec synchronization and archive. No publication or live installation is claimed.
