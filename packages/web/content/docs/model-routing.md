Multi-model routing sends each part of a run to the model that fits it best, instead of running everything on one model. LazyCodex installs OmO's routing defaults into Codex so a serious repository is not bottlenecked by a single context window or price point.

### What gets routed

- **Planning and exploration** go to a strong reasoning model that can hold a large context and weigh trade-offs.
- **Implementation turns** go to a fast, capable coding model for the bulk of the edit loop.
- **Verification** goes to a model used as an oracle, chosen for judgment rather than throughput.
- **Specialist skills** can target their own model when a skill benefits from a specific profile.

### How it fits the harness

Routing is part of the harness setup that `npx lazycodex-ai install` wires into Codex. It detects the available subscriptions and provider auth, then maps roles to models so you do not hand-configure each one.

### Provider auth

Auth targets Codex itself, not LazyCodex. Once Codex is logged in, the installer's subscription detection and provider routing take over. If you let an LLM agent run the install, it walks the same detection and selection for you.

### Customizing it

Routing and provider settings live in the configuration. See [Configuration](./configuration.md) for the fields that control which model handles which role, and how to override the defaults per project.
