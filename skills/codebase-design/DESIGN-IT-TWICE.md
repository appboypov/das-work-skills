# Design it twice

Use this method when comparing interfaces for a chosen module. Read [the design vocabulary](SKILL.md) and [dependency strategies](DEEPENING.md).

1. Ground the comparison in actual callers, constraints, dependency categories and the behavior to hide behind the interface. Present the problem clearly before proposing solutions.
2. Develop meaningfully different candidates directly. Compare a minimal interface, an interface optimized for the common caller, and a flexible interface when real use cases justify flexibility. Consider ports and adapters when dependencies genuinely vary. Optional independent design passes follow the shared workflow's delegation permissions and available capabilities.
3. For each candidate, describe its types and operations, invariants, ordering and error behavior; show a caller example; explain its hidden implementation, dependencies and tradeoffs.
4. Compare depth, locality and seam placement against the same requirements. Recommend the strongest design and state why. Combine parts only when the result has a clearer contract than either candidate.
5. Record the agreed decision in its owning design artifact. Exploration produces a design choice; implementation follows the approved scope.
