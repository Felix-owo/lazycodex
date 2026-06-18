LazyCodex is a thin distribution layer over [OmO](https://github.com/code-yeongyu/oh-my-openagent). The configuration that the installer writes into Codex controls model routing, hooks, skills, and the agent roles the harness uses.

### Where config lives

- Codex configuration that the installer connects to.
- Project-level `AGENTS.md` and rule files that shape agent behavior per repository.
- User-level skill locations such as `~/.config/opencode/skills` and `~/.agents/skills`.

### What you can tune

- **Model routing** — which model handles planning, implementation, verification, and specialist skills. The installer sets sensible defaults from your detected subscriptions; override per role when a project needs a different profile.
- **Hooks and lifecycle** — whether the Stop-hook auto-continues a plan, iteration caps (500 in ultrawork mode, 100 in normal mode), and how completion is gated.
- **Skills** — which skills are active and where they load from.
- **Agent** — Hephaestus, the autonomous deep worker, and its model/prompt overrides. The Codex package is the Hephaestus-only light port; the full OmO's Sisyphus orchestrator is not included.

### Diagnosing config

If something looks pending or degraded, run:

```bash
npx lazycodex-ai doctor
```

It explains what is misconfigured and why, and points at the specific field to fix.

### Re-running setup

The installer is idempotent. Re-running `npx lazycodex-ai install` rewrites the config blocks, agent roles, and bin links on top of what is there, so it is safe to run after editing configuration by hand.

See the [CLI reference](./cli.md) for every command the installer exposes.
