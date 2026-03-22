# Part 4: Multi-Agent Development

[← Part 3](03-quiz-master.md)

---

## Task 1: Scavenger Hunt Mode (TDD-Driven)

Custom agents with handoffs can break complex workflows down into smaller steps with users in control for critical decisions.

**Steps:**

1. Start a new Plan agent
2. *Add a new Scavenger Hunt mode: same questions, but shown as simple list with checkboxes + progress meter.*
3. Iterate on plan for correctness and completeness …
   - Does it add the mode to the start page?
   - Does it go overboard with progress?
4. Run TDD Red mode — *Start with tests*
   - Review tests being written
   - Check out VS Code's test runner
5. After TDD Red is done, pick TDD Green
   - Review implementation and more tests passing
6. Check before and after/refactor
   - Make sure it works, as TDD agent focuses on ONLY writing fully tested code
7. Work through hand offs: red → green → refactor

**Bonus:** Reset to Checkpoint right before "TDD Red" starts, and retry with "TDD Supervisor"

✅ **Result:** Finely controlled TDD flow breaks tests down but allows you to review/confirm each critical step (tests, implementation, review).

---

## Task 2: Card Deck Shuffle (Design-Driven)

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

## Task 3: UX Review Agent

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
- Use TDD agents with Red → Green → Refactor workflow
- Use design-first agents for UI-driven development
- Run UX review agents for comprehensive testing
- Combine multiple agent types for complex workflows

### Keep Going

- 📺 [VS Code on YouTube](https://www.youtube.com/code)
- 📖 [VS Code Copilot Docs](https://code.visualstudio.com/docs/copilot/overview)
- 🌟 [Awesome Copilot](https://github.com/github/awesome-copilot)
