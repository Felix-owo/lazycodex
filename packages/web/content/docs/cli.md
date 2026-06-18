The `lazycodex-ai` CLI is the entry point for installing and diagnosing the harness. It is meant to be run through `npx` — never install it globally.

### install

```bash
npx lazycodex-ai install
```

Installs the OmO agent harness into Codex: commands, skills, hooks, model routing, and verification defaults in one pass. This is exactly equivalent to:

```bash
npx --yes --package oh-my-openagent omo install --platform=codex
```

To skip the TUI and let the installer run autonomously:

```bash
npx lazycodex-ai install --no-tui --codex-autonomous
```

### doctor

```bash
npx lazycodex-ai doctor
```

Prints a health report: what is configured, what is missing, and why. Run this first when a hook is pending, a skill is not loading, or routing looks wrong.

### Prerequisites

- [Node.js](https://nodejs.org) — any maintained LTS; `npx` ships with it. Bun is **not** required for the installer.
- The [OpenAI Codex CLI](https://github.com/openai/codex) or the Codex app, logged in.

> Do not use `npm install -g` or `bun add -g`. Always invoke via `npx`.

### Marketplace alternative

As an additive, experimental path you can install from inside Codex: type `/plugins`, open the **Add Marketplace** tab, and enter `https://github.com/code-yeongyu/lazycodex`, then install `omo` from the `sisyphuslabs` marketplace. Or from the CLI:

```bash
codex plugin marketplace add https://github.com/code-yeongyu/lazycodex
codex plugin add omo@sisyphuslabs
```

The npx installer above stays the primary path. See [Installation](./installation.md) for the full walkthrough.
