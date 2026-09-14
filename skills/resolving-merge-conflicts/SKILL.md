---
name: resolving-merge-conflicts
description: "Use when you need to resolve an in-progress git merge/rebase conflict."
---

Read [workflow](../workflow/SKILL.md) before applying this skill.


1. **See the current state** of the merge/rebase. Check git history, and the conflicting files.

2. **Find the primary sources** for each conflict. Understand deeply why each change was made, and what the original intent was. Read the commit messages, check the PRs, check original issues/tickets.

3. **Resolve each hunk.** Preserve both intents where compatible. Resolve an incompatible behavioral decision against the approved outcome and its primary sources; ask when the sources cannot settle it. Keep unrelated work intact.

4. Discover the project's **automated checks** and run them, typically typecheck, then tests, then format. Fix anything the merge broke.

5. **Finish the authorized operation.** Stage only the resolved work and complete the merge or rebase when authorized by the request and project policy. Report unresolved decisions or failed checks before proceeding.
