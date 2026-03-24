# Part 1: Setup & Context Engineering

[← Overview](00-overview.md)

---

In this section, you'll set up your development environment and teach GitHub Copilot about your codebase.

> 🎮 **[Play the Bingo Mixer game](../game/)** — See what you'll be building!

---

## 🔧 Initial Setup

### Step 1: Create Your Repository (Required)

1. Open [github.com/microsoft/vscode-agent-lab-soc-ops](https://github.com/microsoft/vscode-agent-lab-soc-ops)
2. Click **Use this template** → **Create a new repository**
   - Name: `my-bingo-mixer`
   - Visibility: **Public**
3. ✅ Your own Bingo Mixer repo is ready!

### Step 2: Enable GitHub Pages

1. Go to your repo's **Settings** → **Pages**
2. Under "Build and deployment", change *Deploy from a branch* to **GitHub Actions**
3. ✅ Any commit will now publish to: `https://{username}.github.io/{repo-name}`

### Step 3: Choose How You'll Develop

#### Option A: Clone locally in VS Code

1. Open VS Code
2. Run command: `Git: Clone` → `Clone from GitHub`
3. Select your new repository
4. Install recommended extensions (notification or `Extensions: Show Recommended Extensions`)

#### Option B: Create a Codespace for your repo

1. Open your repository on GitHub
2. Click **Code** → **Codespaces** → **Create codespace on main**
3. ✅ Codespace starts with your repo and devcontainer.

### Step 4: Run the Setup Agent

In the Chat panel:

```
/setup
```

On the first terminal tool, enable *Auto*-*Approve*.

Let the agent figure out any required installation steps.

✅ **Success:** App is running and open in browser!

Keep this `workshop/` guide open (📌 Pin).

---

## 📚 Understanding Context Engineering

Context engineering is how you teach AI about your specific codebase. This makes Copilot's suggestions more accurate and relevant.

### Task 1: Auto-generated Instructions

Instructions guide all agentic codebase interactions, making them more efficient and reliable. Add them early, but make sure to keep them maintained and succinct.

**Steps:**

1. Run prompt: `/init` with Autopilot enabled
   - While agent analyzes the codebase, optionally start next task
2. Open a new chat for the next task, as init can take a while and we can review later.
3. Review results — is it not too long and overly detailed
   1. Optional follow-up: *"Compress down and add a mandatory development [ ] checklist (lint, build, test) to the top"*
4. Apply and commit

✅ **Result:** All future requests will have a basic map of the workspace.

---

### Task 2: Dogfooding & Custom Skills

**Steps:**

1. Prompt: *"Test the app like a critical dogfooder, giving critical feedback on how fun it is"*
2. Watch how the agent launches the built-in browser, interacts with the app, and writes a report
3. `/create-skill` *for dogfooding* — or: *"Save this as a dogfooding skill"*

✅ **Result:** The agent used the browser to actually play the app and produced a critical report. You then saved that testing approach as a reusable dogfooding skill.

> 💡 **Context engineering insight:** The agent needs hands-on context — running the app, seeing the UI, clicking through flows — to truly understand how it works and validate functionality. Code alone isn't enough; interacting with the running product closes the gap between reading code and understanding the user experience.

---

### Task 3: Customization Modal

Tour the repo customizations to understand how context engineering works in practice.

**Steps:**

1. Open the Customization panel, Command: `Chat: Open Customizations (Preview)`
2. Browse the repo customizations — instructions, skills, and agents
3. Look at the **frontend design skill** and **Tailwind 4 instructions**

> 💡 **Think about:** What conventions or patterns from your own projects could become instructions or skills?

---

## ✅ Part 1 Complete!

You've learned how to:
- Set up your development environment
- Generate and refine workspace instructions
- Dogfood your app with the agent's built-in browser
- Create and save custom skills
- Tour repo customizations (instructions, skills, agents)
