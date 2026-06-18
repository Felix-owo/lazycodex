Hooks and lifecycle are how the harness keeps a long run moving without you re-prompting every turn. OmO installs lifecycle hooks into Codex that observe each turn and decide what happens next.

### The core mechanism

A Stop-hook fires when a turn ends. If a plan is still in progress, the hook re-injects the next turn automatically — the agent continues from durable progress state instead of waiting for you to say "continue". The run only stops when the plan is complete or a gate fails in a way that needs a human.

### Where progress lives

Progress state is written to `.omo/boulder.json` and survives across turns and sessions. That is what lets [`$start-work`](./start-work.md) resume a plan after a restart, and what keeps [`$ulw-loop`](./ulw-loop.md) honest about how far it has actually gotten.

### Approval and trust

Hooks never run before approval. On the first launch after install, Codex's startup review asks you to approve the omo hooks. After every upgrade the hooks show as **Modified** — expected, because the plugin files changed and the previous trust hashes no longer match — re-approve and the next session re-runs bootstrap on the new version.

### Evidence gates

During execution the lifecycle enforces five evidence gates before a step can close: plan reread, automated verification, manual-QA, adversarial QA, and cleanup. A step that cannot pass its gates does not advance, regardless of what the status text claims.

### Reading more

- [ultrawork mode](./ultrawork.md) — the mode that turns these gates into a binding loop.
- [Configuration](./configuration.md) — how to tune hook behavior and lifecycle defaults.
