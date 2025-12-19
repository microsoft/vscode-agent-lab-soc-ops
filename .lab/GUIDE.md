# Soc Ops — A VS Code Agent Lab (1hr)

Harald Kirschner `@digitarald`
— VS Code Team `@code`

## Checklist

- [ ] Latest VS Code **v1.107** (no update pending)
- [ ] Signed in with GitHub
  - Copilot Free can not run cloud agent!
- [ ] Git & Node installed
- [ ] Chat open and Agent ready for action

*Optional*: Use DevContainer or WSL.

## Setup


1. Open https://github.com/microsoft/vscode-agent-lab-soc-ops
   1. *Use this template* > *Create a new repository* (pick `my-soc-ops`, make it *Public*)
      - ✅ Your own *soc-ops* GitHub repo is ready
   2. ⚠️ Enable *Settings* > *Pages* > *Deploy from a branch* to *GitHub Actions*
      - ✅ Any commit to the repo will publish the game as GitHub page: `http://{your-gh-username}.github.io/{my-soc-ops}`
2. Open VS Code:
	1. Command: `Git: Clone > Clone from GitHub`
	2. Install recommended extensions (notification or `Extensions: Show Recommended Extensions`)
	3. Chat: Run `/setup` lets the agent figure out any required installation steps
3. 🎉 App is running and open in browser!

Keep this `.lab/GUIDE.md` open (📌 Pin).

## Learning Objectives

After completing this workshop, you:

1. **Can onboard AI to your codebase** and workflows with context engineering
2. **Understand the agentic primitives** to build an AI-first engineering flow
3. **Unlocked agentic abundance** to scale exploration and speed up learning across more development tasks
4. **felt the vibes** … hey, you designed and build your social social bingo; use to create more good vibes

## Recommendation

1. Keep the live-updated browser open
2. Commit working code often
3. Revert unexpected changes using chat *Checkpoints* and *Undo*, then try again

## 1. Context engineering your repo

DIY: Tour of the project. Try out the game.

### Task: Run and understand the /setup prompt

**TL;DR:** AI-guided installations, so you don't have to read docs.

See `.github/prompts/setup.prompt.md`.

### Task: Auto-generated instructions

**TL;DR:** Instructions guide all agentic codebase interactions, making them more efficient and reliable. Add them early, but make sure to keep them maintained and succinct.

1. Command `Chat: Generate Workspace Instructions File`
   1. While agent analyzes the codebase, optionally start next task
2. Review results, probably be too long and detailed
3. Follow-up *“Compress down by half and add a mandatory development [ ] checklist (lint, build, test) to the top”*
4. Commit instructions

Result: All future requests will have basic map of the workspace.

### Task: Background agents

**TL;DR:** Handoff tasks that don’t require handholding to background agents, which execute them isolated in git worktrees for quick parallel local iteration.

1. Chat `+` > `New background agent` / `New cloud agent`:
2. New Background agent: *Add linting rules for unused vars and awaits usage; and fix any errors*
   1. Review and *Apply*, then right-click delete the sessions.
3. New cloud agent: *Make the readme more engaging as landing page to the project*

Result: Agents completed adjusted the rules, fixed errors, and all edits are merged back into main. Stricter linting rules will catch any human/agent mistakes earlier.

### Task: Check Tailwind 4 instructions

**TL;DR**: Tailwind v4 instructions close gaps from training data and document the latest best practices.

See prompt in the footer.

**Optional**, if interested how it works: Delete main text and re-run the prompt

### Task: Check Frontend Instructions

**TL;DR**: The “no purple gradients” instructions, challanges the agent to think like a designer and be more bold and creative.

Source: Claude blog, linked in the footer.

**Optional**: What other agentic biases could you challenge and nudge?

## 2. Design-first Frontend Vibing

Now that we've engineered the repo context, let's get creative.

### Task: Make it yours

**TL;DR**: Plan mode to start off any bigger work items—iterate on the plan (2+ times!) with tweaks and clarifications.

Steps:
1. Switch to Plan mode
2. *Lets do a full redesign. Make it …*
3. Review plan and start Implement

Ideas:
- Minimalist Mono
- Grotesque Type Grid
- Retro Terminal Green
- Vaporwave Sunset
- Cyberpunk Neon
- Brutalist Blocks
- Soft Pastel Clouds
- Skeuomorphic Stickers
- Dark Mode Noir
- Playful Candy Pop
- Pixel Arcade Style
- Scandinavian Calm
- Corporate Clean Blue
- Gradient Glass UI
- Notebook Doodle Sketch
- Space Galaxy Glow
- Paper Card Cutouts
- Geometric Memphis
- Cozy Coffee Shop
- Metallic Chrome UI
- Bold Constructivist
- Eco Leafy Green
- Anime Bubble Aesthetic
- Monochrome Newspaper
- Chalkboard Classroom
- Yacht Club Nautical
- Desert Sand Minimal
- Bold Serif Vintage
- Toybox Primary Colors

Result: Frontend and tailwind instructions are use to build a beautiful design.

### Task: Keep instructions updated

**TL;DR**: Keep instructions updated with major architecture/design/dependency changes.

1. Follow-up: `Add design guide section to copilot-instructions.md`
2. Confirm, commit and push

Bonus: Check that GitHub pages is updating.

### Task: A lot more redesign

**TL;DR**: Scale exploration and learning with async cloud agents.

- New Chat with Plan mode
- `Redesign the start screen as more engaging landing page`
- *Result*: Lots of variations suggested in considerations
- Run the prompt: `/cloud-explore design variations`
  - See `.github/prompts/cloud-explore.prompt.md`
- Check Agent sessions for new 3 cloud agents appearing to track progress. Click to follow along or open agent in web.
- LATER: Review the 3 designs, based on screenshots in PRs.

**Result:** 3 cloud agent sessions which will take a few minutes to complete. Meanwhile …

## 3. Quiz it up

### Task: Your own quiz master

**TL;DR:** Define your own specialized workflows with custom agents, beyond generic coding prompts. Works both locally and in cloud coding agent.

Steps:
- New Chat, pick *Quiz Master* as custom agent
- `Update questions to …` or just `Update quiz`
- Check out the prompt in `.github/agents/quiz-master.agent.md`
- Optional: Follow-up to nudge for more creativity, chaos, engagement.
- `+` > `New cloud agent`: pick Quiz Master
- Pick another theme and send

**Theme ideas**:
- Skill Bingo: Instead of personal facts → workplace or technical skills.
- Personality Bingo: Preferences, quirks, fun traits.
- Secret Challenge Bingo: Each square has a quick micro-task with a person you meet.
- Team Bingo: Each square contains a department or team category.
- Classic Facts Bingo: Basic human facts (birthday month, pets, etc.).
- Work Culture Bingo: Productivity habits, meeting styles, tools.
- Tech Life Bingo: Coding languages, shortcuts, frameworks, dev memes.
- Travel Bingo: Cities lived in, countries visited, cultural traditions.
- Creative Bingo: Music, art, design tastes, creative skills.
- Micro-Challenge Bingo: Quick actions (teach a word, show a meme).
- Deep Chat Bingo: Reflective or meaningful conversation starters.
- Office Humor Bingo: Desk quirks, caffeine habits, meeting hot takes.
- Opposites Bingo: Find someone who is your opposite on specific axes.
- Fandom Bingo: Sci-fi, gaming, books, shows, niche interests.
- Lifestyle Bingo: Sleep, fitness, food, routines.
- Mystery Bingo: Guess who matches a trait and verify.
- Chaos Bingo: Surprising, absurd, unpredictable prompts.

**Result:** Custom agent runs through the updated quiz, generating new creative and engaging questions.

## 4. Multi-Agent and Multi-Bingo

### Task: New Scavenger Hunt mode, TDD-driven

**TL;DR:** Custom agents with handoffs can break complex workflows down into smaller steps with users in control for critical decisions.

Steps:
- Start a new Plan agent
- *Add a new Scavenger Hunt mode: same questions, but shown as simple list with checkboxes + progress meter.*
- Iterate on plan for correctness and completeness …
  - Does it add the mode to the start page?
  - Does it go overboard with progress?
- Run TDD Red mode *Start with tests*
	- Review tests being written
	- Check out VS Code's test runner
- After TDD Red is done, pick TDD Green
	- Review implementation and more tests passing
- Check before and after/refactor
    - Make sure it works, as TDD agent focuses on ONLY writing fully tested code
- Work through hand offs, red - green - refactor.

Bonus:
- Reset to Checkpoint right before “TDD Red” starts, and retry with “TDD Supervisor”

**Result:** Finely controlled TDD flow breaks tests down but allows you to review/confirm each critical step (tests, implementation, review).

### Task: Card Deck Shuffle, Design-driven

**TL;DR**: Break down agent workflows into specific focus areas, like design-first.

Steps:
1. New chat with agent: `Pixel Jam`
2. *New mode: Card Deck Shuffle. Every player opens the game → taps → gets a random card with a question.*
3. Result: Agent iterates on the UI while keeping
4. Follow up to make it work like you want:
    - *Add left/right (fail, success)*
    - *Draw a card right when I open it*
5. Commit

### Task: UX Review Agent 

**TL;DR**: Combine MCP, custom workflows, and subagent isolation in an agent for powerful workflows. Focus on different aspects, like usability, a11y, compliance.

- New chat with agent: `Pixel Jam`: *Run review*
- Use Allow for this Workspace for Playwright tool approvals
- Follow along as it reviews
  - Aside: Open `.github/agents/pixel-jam.agent.md` to review the prompt
- *Result*: Behold a mighty in-depth review
- Bonus:
  - File findings as issues on GitHub for later
  - Assign critical issues to coding agent to fix

## Bonus: Keep going

- Fix UX review problems, delegated to background or cloud agent
- Add ability to have multiple question themes to pick from
- Add social sharing to win state
- Make a real iOS or full-stack app?

---

Happy Coding,

  👋 Harald Kirschner and the VS Code team

p.s. to stay up to date:

1. [VS Code on YouTube](https://www.youtube.com/code)
2. [VS Code Copilot Docs](https://code.visualstudio.com/docs/copilot/overview)
3. [Awesome Copilot](https://github.com/github/awesome-copilot) for more customizations
