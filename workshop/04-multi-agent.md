# Part 4: Multi-Agent Development

[← Part 3](03-quiz-master.md)

---

## Task 1: Agent Hooks — Test Gate for TDD Green

[Agent hooks](https://code.visualstudio.com/docs/copilot/customization/hooks) execute shell commands at key lifecycle points during agent sessions. We'll add a **Stop hook** to TDD Green so it can't stop until all tests pass.

**Steps:**

1. Open `.github/agents/tdd-green.agent.md`
2. Prompt `Add a agent-scoped stop hook to tdd-green that checks if tests all passed`
3. In `.github/agents/tdd-green.agent.md` the hook should be defined in the YAML frontmatter.

✅ **Result:** TDD Green now has a safety net — it will keep working until all tests pass before handing back control.

---

## Task 2: New Bingo Pattern (TDD-Driven)

Use the TDD to add a "Four Corners" bingo pattern. The hooks you set up will enforce TDD discipline on both sides — Red must produce failing tests, Green must make them pass.

**Steps:**

1. First, add a stop hook to TDD Red — open `.github/agents/tdd-red.agent.md` and prompt:
   *Add a stop hook that runs the tests and verifies at least one test is failing — TDD Red isn't done until it has written a genuinely failing test*
2. New chat with agent: `TDD`
3. *Add a "Four Corners" bingo win pattern — all four corner squares (top-left, top-right, bottom-left, bottom-right) must be marked*
4. Watch TDD orchestrate:
   - **TDD Red** writes failing tests for Four Corners detection — hook fires on stop, keeps it going if tests aren't actually failing
   - Review the new tests in VS Code's test runner
   - **TDD Green** implements the minimal code to pass — hook fires on stop, keeps it going if tests fail
   - **TDD Refactor** cleans up the implementation
   - Click on any sub-agent while it runs to see its context and instructions
4. Review the summary of changes

✅ **Result:** Orchestrated TDD cycle with automatic test gating — no manual handoffs between agents.

---

## Task 3: Verify with Agent Debug Logs

Inspect what happened under the hood — did the hook fire? How did agents communicate?

**Steps:**

1. Verify the hook loads: open the **GitHub Copilot Chat Hooks** output channel (Output panel → channel dropdown)
2. Open Agent Debug Logs: gear icon (⚙️) in Chat view → **Show Agent Debug Logs**
3. **Logs view:** filter for hook execution events during TDD Green
4. **Agent Flow Chart:** visualize the TDD → Red → Green → Refactor orchestration
5. **Summary view:** review total tool calls and token usage

**Bonus:** Click the ✨ sparkle icon to attach debug events to a new chat, then ask: `/troubleshoot did the Stop hook fire during TDD Green?`

✅ **Result:** Full observability into multi-agent orchestration and hook execution.

---

## Task 4: Card Deck Shuffle (Design-Driven)

Break down agent workflows into specific focus areas, like design-first.

**Steps:**

1. New chat with agent: `Pixel Jam`
2. *New mode: Card Deck Shuffle. Every player opens the game → taps → gets a random card with a question.*
3. Agent iterates on the UI
4. Follow up to make it work like you want:
   - *Add left/right (fail, success)*
   - *Draw a card right when I open it*
5. Commit

---

## Task 5: UX Review Agent

Combine MCP, custom workflows, and subagent isolation in an agent for powerful workflows. Focus on different aspects, like usability, a11y, compliance.

**Steps:**

1. New chat with agent: `Pixel Jam`: *Run review*
2. Keep the app open in VS Code browser preview while the review runs
3. Follow along as it reviews
   - Aside: Open `.github/agents/pixel-jam.agent.md` to review the prompt
4. Behold a mighty in-depth review

**Bonus:**
- File findings as issues on GitHub for later
- Assign critical issues to coding agent to fix

---

## Bonus: Keep Going

- Fix UX review problems, delegated to background or cloud agent
- Add ability to have multiple question themes to pick from
- Add social sharing to win state
- Make a real iOS or full-stack app?

---

## ✅ Part 4 Complete!

You've learned how to:
- Add agent hooks to enforce quality gates (Stop hook on TDD Green)
- Use TDD to orchestrate Red → Green → Refactor automatically
- Inspect agent behavior with Agent Debug Logs and Flow Charts
- Use design-first agents for UI-driven development
- Run UX review agents for comprehensive testing
- Combine multiple agent types for complex workflows

### Keep Going

- 📺 [VS Code on YouTube](https://www.youtube.com/code)
- 📖 [VS Code Copilot Docs](https://code.visualstudio.com/docs/copilot/overview)
- 🌟 [Awesome Copilot](https://github.com/github/awesome-copilot)
