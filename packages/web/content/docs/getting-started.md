LazyCodex is most useful as a harness for complex codebases: project memory, planning, execution, verified completion, skills, hooks, model routing, and diagnostics. This page walks through the four commands you will reach for most often and when to pick each.

### The four commands

| Command | Use it when |
| --- | --- |
| `$init-deep` | The repository is too large or too old to explain from memory. |
| `$ulw-plan` | The work needs decisions before any code is written. |
| `$start-work` | A plan exists and should be executed to completion. |
| `$ulw-loop` | You want the agent to keep going until the result is verified. |

### How to choose

Start with `$init-deep` once per repository so agents have hierarchical `AGENTS.md` context to work from.

For anything ambiguous, run `$ulw-plan` first. It interviews you, explores the codebase in parallel, and writes a decision-complete plan to `plans/<slug>.md` without touching product code.

Hand that plan to `$start-work` to execute it: durable Boulder state, parallel subagents, strict TDD, and five evidence gates. It prints `ORCHESTRATION COMPLETE` when every checkbox is done.

`$ulw-loop` is the tightest loop — use it for a single task that must run until an oracle verifies completion. It does not plan; it executes and verifies.

### A typical session

```text
$init-deep
$ulw-plan "add rate limiting to the api gateway"
$start-work plans/add-rate-limiting.md
```

If the job is small and well-understood, skip the plan and loop directly:

```text
ulw fix the flaky checkout test
```

See [Feature coverage](./skills.md) for the skills that add specialist judgment around these commands.
