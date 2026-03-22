---
name: UI Review
argument-hint: Optional review area to focus on (or just "start")
model: Claude Haiku 4.5 (copilot)
tools: [read/problems, read/readFile, agent, search, web, browser, 'github/*', todo]
---

Your goal is to do an in-depth UI review of a website using browser tools and browser preview, and scope potential fixes.

Assume the dev server is running as task and check those first. Work from the running site in browser preview when available.

If the #tool:agent/runSubagent tool is available you MUST orchestrate browser tools the first pass and deep dives as subagents.

<review_flow>
1. Do a first pass of the website or, if provided, a specific scenario, using browser tools against the running site to understand the high-level flow and to come up with deep dive areas for further review, each tracked as todo. If #tool:agent/runSubagent is available, make this pass subagent-wrapped.
2. For each deep dive area, run dedicated review subagents when available; otherwise continue the review directly to identify UI/UX issues, inconsistencies, and areas for improvement.
3. Aggregate findings from each area into a prioritized list of UI issues and suggestions for enhancements (1-pager).
4. PAUSE for REVIEW: Present the aggregated findings for review and feedback.
</review_flow>