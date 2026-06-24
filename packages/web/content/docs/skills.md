LazyCodex is most useful as a harness for complex codebases: project memory, planning, execution, verified completion, skills, hooks, model routing, and diagnostics.

### Built-in workflows

Start with `$init-deep` when the repository is too large or too old to explain from memory. It generates hierarchical `AGENTS.md` context so agents can find the right files before they change code.

Use `$ulw-plan` when the work needs decisions before implementation, `$start-work` when a plan should be executed, and `$ulw-loop` when you want the agent to keep going until the result is verified.

### Feature coverage

The three command pillars stay simple:

- `$ulw-loop` keeps moving until verified completion
- `$ulw-plan` turns fuzzy work into a decision-complete plan
- `$start-work` executes a plan with durable Boulder progress

Skills add specialist judgment around those pillars.

Most skills auto-activate when a request matches their domain, so you do not need to study or manually select every skill before using LazyCodex. When you want to be explicit, put the skill name in the prompt — for example `$visual-qa`, `$git-master`, or `$ultraresearch`.

| Skill | Use it for |
| --- | --- |
| `init-deep` | Hierarchical `AGENTS.md` context for large or old repos |
| `ulw-plan` | Explore-first planning before coding |
| `ulw-loop` | Evidence-bound loop until verified completion |
| `start-work` | Execute a plan with durable Boulder progress |
| `review-work` | Five-lane parallel post-implementation review |
| `remove-ai-slops` | Behavior-preserving cleanup of AI-looking code |
| `frontend` | Designed UI work instead of generic layout filling |
| `programming` | Strict TypeScript, Rust, Python, or Go discipline, TDD-first |
| `git-master` | Atomic commits, rebase/squash, push safety, history investigation |
| `visual-qa` | Screenshot/TUI diff plus dual-oracle visual QA |
| `debugging` | Evidence-led root-cause investigation |
| `refactor` | Behavior-preserving restructure of existing code |
| `ultraresearch` | Maximum-saturation research: parallel codebase, web, official-docs, and OSS-repo swarms, recursive lead expansion, empirical verification, and cited synthesis |
| `LSP` | Diagnostics, definitions, references, symbols, and renames |
| `lsp-setup` | Configure language servers for a project |
| `AST-grep` | Structural search and rewrite across code |
| `rules` | Project instructions from AGENTS, rules, and instruction files |
| `comment-checker` | Feedback after edit-like operations |

### Skill highlights

**review-work** — A post-implementation review orchestrator. After significant work, it launches five parallel sub-agents covering goal/constraint verification, hands-on QA execution, code quality, security, and context mining from git history and issues. All five must pass for the review to pass. One failure means the review fails.

**remove-ai-slops** — Removes AI-generated code smells while strictly preserving behavior. The safety invariant: regression tests lock behavior *before* a single line is deleted. Covers obvious comments, excessive defensive code, unnecessary abstractions, dead code, duplicates, and oversized modules (250+ pure LOC triggers a full modular refactoring).

**frontend** — Not a single rule file but a router. It reads design, perfection, and ui-ux-db references based on the task, then builds and verifies against the actual browser. Covers UI implementation, styling, layout, animation, Lighthouse 100, Core Web Vitals, accessibility, and React dev tools.

**programming** — One philosophy across four languages: strict types, modern stacks (Pydantic v2 / serde+thiserror / Zod / gin+sqlc+pgx+slog), parse-don't-validate, exhaustive match, typed errors, no escape hatches, 250 pure LOC ceiling, TDD. The skill gates on language and loads the matching reference set before writing a single line.

**debugging** — Hypothesis-driven runtime debugging. Every claim about why a bug happens must come from observed state, not code reading. Covers crashes, silent failures, wrong responses, stuck processes, memory leaks, async misbehavior, and reverse engineering. Leaves no debug artifacts behind.

**refactor** — Maps the codebase before touching anything, evaluates test coverage to set the verification strategy, plans atomic steps with rollback points, then executes with LSP and AST-grep. Any test failure during execution triggers an immediate stop and revert.

**LSP** — Gives the agent language-server precision: diagnostics, go-to-definition, find-references, document symbols, and safe workspace-wide renames. Runs as MCP tool calls, not shell commands.

**rules** — Automatically injects project instructions from `CONTEXT.md`, `.omo/rules/`, `.claude/rules/`, `.github/instructions/`, and `.github/copilot-instructions.md` at session start and on every prompt submit. No command to run — just works when the plugin is active.

**comment-checker** — Fires after every edit-like tool call. If it flags a comment, Codex receives blocking feedback and must fix or justify the comment before proceeding. Catches comment drift (comments that no longer match the code below them) at the moment of introduction rather than in a later review.

### Where skills live

OmO can load skills from project and user locations such as `.opencode/skills`, `~/.config/opencode/skills`, `.claude/skills`, `.agents/skills`, and `~/.agents/skills`.

LazyCodex installs the Codex Light setup with:

```bash
npx lazycodex-ai install
```

That installer wires the Codex marketplace plugin as `omo@sisyphuslabs` while keeping the public package alias easy to remember.

The command pillars and the disciplines behind them are covered in depth: [ulw-plan](./ulw-plan.md), [ulw-loop](./ulw-loop.md), [start-work](./start-work.md), [TDD](./tdd.md), [manual QA](./manual-qa.md), and [git workflow](./git-workflow.md).
