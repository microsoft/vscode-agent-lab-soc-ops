# Part 1: Setup & Context Engineering

[← Overview](00-overview.md)

---

In this section, you'll set up your development environment and teach GitHub Copilot about your codebase.

> 🎮 **[Play the Soc Ops game](../game/)** — See what you'll be building!

---

## 🔧 Initial Setup

### Step 1: Create Your Repository

1. Open [github.com/copilot-dev-days/agent-lab-typescript](https://github.com/copilot-dev-days/agent-lab-typescript)
2. Click **Use this template** → **Create a new repository**
   - Name: `my-soc-ops`
   - Visibility: **Public**
3. ✅ Your own Soc Ops repo is ready!

### Step 2: Enable GitHub Pages

1. Go to your repo's **Settings** → **Pages**
2. Under "Build and deployment", change *Deploy from a branch* to **GitHub Actions**
3. ✅ Any commit will now publish to: `https://{username}.github.io/{repo-name}`

### Step 3: Clone & Open in VS Code

1. Open VS Code
2. Run command: `Git: Clone` → `Clone from GitHub`
3. Select your new repository
4. Install recommended extensions (notification or `Extensions: Show Recommended Extensions`)

### Step 4: Run the Setup Agent

In the Chat panel:

```
/setup
```

The agent will figure out any required installation steps.

✅ **Success:** App is running and open in browser!

Keep this `.lab/` guide open (📌 Pin).

---

## 📚 Understanding Context Engineering

Context engineering is how you teach AI about your specific codebase. This makes Copilot's suggestions more accurate and relevant.

### Task 1: Auto-generated Instructions

Instructions guide all agentic codebase interactions, making them more efficient and reliable. Add them early, but make sure to keep them maintained and succinct.

**Steps:**

1. Run command: `Chat: Generate Workspace Instructions File`
   - While agent analyzes the codebase, optionally start next task
2. Review results — probably too long and detailed
3. Follow-up: *"Compress down by half and add a mandatory development [ ] checklist (lint, build, test) to the top"*
4. Commit instructions

✅ **Result:** All future requests will have a basic map of the workspace.

---

### Task 2: Background Agents

Handoff tasks that don't require handholding to background agents, which execute them isolated in git worktrees for quick parallel local iteration.

**Steps:**

1. Chat `+` → `New background agent` / `New cloud agent`
2. New Background agent: *Add linting rules for unused vars and awaits usage; and fix any errors*
   - Review and *Apply*, then right-click delete the session
3. New cloud agent: *Make the readme more engaging as landing page to the project*

✅ **Result:** Agents adjusted the rules, fixed errors, and all edits are merged back into main. Stricter linting rules will catch any human/agent mistakes earlier.

---

### Task 3: Check Tailwind 4 Instructions

Tailwind v4 instructions close gaps from training data and document the latest best practices.

See prompt in the footer.

> 💡 **Optional:** If interested how it works, delete main text and re-run the prompt

---

### Task 4: Check Frontend Instructions

The "no purple gradients" instructions challenge the agent to think like a designer and be more bold and creative.

Source: Claude blog, linked in the footer.

> 💡 **Think about:** What other agentic biases could you challenge and nudge?

---

## ✅ Part 1 Complete!

You've learned how to:
- Set up your development environment
- Generate and refine workspace instructions
- Use background and cloud agents for parallel work
- Understand existing instruction files
