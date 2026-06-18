LazyCodex ports a single discipline agent from OmO into Codex: **Hephaestus**, the autonomous deep worker. There is no Sisyphus orchestrator in the Codex package — Hephaestus is the one role, and it carries the whole run itself with read-only subagents for parallel exploration.

### What Hephaestus is

Named after the Greek god of the forge. Goal-oriented: you give it objectives, not step-by-step recipes, and it executes them end-to-end. "The Legitimate Craftsman." Methodical, thorough, obsessive — built for deep architectural reasoning, complex debugging, and cross-domain synthesis.

### The operating loop

Hephaestus runs a short, tight loop on every unit of work:

1. **Explore** — map the terrain. Read the code with tools, never speculate. Fire 2-5 parallel explore subagents before writing anything.
2. **Plan** — chart the course. Record files to modify, specific changes, and dependencies via `update_plan`.
3. **Implement** — build with precision. Surgical edits that match codebase style (naming, indentation, imports, error handling) even when a greenfield would read differently.
4. **Verify** — prove it works. LSP diagnostics on changed files, related tests, and build — in parallel where possible.
5. **Manually QA** — drive the artifact through its real surface (HTTP call, tmux, browser), then write the final message.

### What it never does

- **Never trusts subagent self-reports.** Verification is independent; a child saying "done" does not close the work.
- **Never proposes when you asked for code.** Unless you explicitly want a plan or a brainstorm, it implements.
- **Never speculates about code it has not read.** Exploration is cheap; assumption is expensive.
- **Never leaves work unresolved at end of turn.** Every plan step is reconciled: `completed`, blocked (one-line reason), or removed (one-line reason).

### Delegation, not orchestration

Hephaestus stays the parent. For parallel exploration it spawns read-only Codex subagent roles (`multi_agent_v1.spawn_agent`) and keeps the parent session live with brief status updates while children run. It does not hand the run off to a separate orchestrator — it owns the goal, delegates the grunt work, and verifies the results itself.

### Where the boulder comes from

The full OmO has a second primary agent, **Sisyphus**, the orchestrator with `.omo/boulder.json` session continuity. The Codex package is the Hephaestus-only light port, so on Codex the durable progress state lives in `.omo/boulder.json` as written by [`$start-work`](./start-work.md) and the Stop-hook continuation — without the Sisyphus orchestration layer.

### Reading more

- [ultrawork mode](./ultrawork.md) — the mode that turns the loop into a binding verified run.
- [Hooks & Lifecycle](./hooks-lifecycle.md) — how the Stop-hook re-injects the next turn until the plan is complete.
