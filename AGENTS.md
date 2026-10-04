# VisionPrint - AGENTS.md

Shared source of truth for every team working on this project (Base44, Marblism, humans).
Read this before touching anything. If something here is wrong, fix this file - do not guess.
Contacts and the agreed communication channels live in `CONTACTS.md` at the repo root. That is the canonical
contacts file - do not create a second one.
What the two teams are called, in Devin's shorthand, is in `TEAM-NAMES.md`.

## What VisionPrint is

- visionboardprint.com. Customers describe their dreams or pick a theme, upload a selfie, and AI generates a
  personalized vision board with their actual likeness placed inside their dream scenarios.
- Products: Digital Bundle (printable PDF + phone/desktop wallpapers, unlimited digital revisions),
  Standard Poster (18x24 matte fine art, free shipping), Premium Framed (24x36 canvas or solid wood framed,
  priority production + AI likeness matching), Hands-on Collage Builder (browser DIY tool),
  Free AI Lockscreen Generator, and free interactive generators (Fate Board, "If Vision Boards Were Honest").
- Customers: dreamers, goal-setters, entrepreneurs, professionals, creatives - everyday people into
  personal growth, manifestation and visualization.
- External copy tone: simple, plain, everyday language. No jargon, no corporate speak.

## Hard rules

1. NEVER scaffold or rebuild the site from scratch. Only make surgical edits to files that already exist.
2. Never delete or rename files without explicit written approval from Devin Williams in this repo.
3. Never invent brand facts, prices, product names, testimonials or stats. If it is not in this file or on
   the live site, ask instead of writing it.
4. No large refactors, framework swaps, styling system changes or dependency upgrades without written approval.
5. All changes go through a pull request. Never commit directly to `main`.
6. One PR = one change. Say what changed and why in the PR body.
7. Never commit real API keys, secrets, tokens, credentials or customer data. Ever.
8. Any simulated, mocked or placeholder feature MUST be labelled as simulated in code comments, the PR body
   and the AGENTS.md notes. Never present a placeholder as a working feature.
9. No restyling in either direction while the brand look is undecided (see "Brand look" below).
10. This file is the interface between teams. If you need a decision, add it to "Open questions" -
    do not silently guess.
11. `main` IS LIVE INFRASTRUCTURE. Anything merged into `main` syncs into the Base44 app automatically.
    Nothing merges into `main` without Devin's explicit written approval. Never merge on your own.
12. PR #1 is NOT TO BE MERGED. It is held open for review by Devin. See "Decisions made" below.

## CHAIN OF COMMAND - VisionPrint build team

One project, two teams, one lead. This replaces the old "who owns what" section.

### Tier 0 - Devin Williams (Owner)

Final say on everything. The only person who authorizes a merge into `main` and the only person who clicks
Publish. Any tier can escalate to him. He can override any tier.

### Tier 1 - Eva (Marblism, Executive Assistant) - LEAD AI AGENT FOR THE BUILD

Owns the build process end to end. Does not write application code.

- **Owns this file.** AGENTS.md is the contract. Eva keeps it accurate and current; nobody works from memory.
- **Scope arbitration.** Decides whether a task is website work (Walter to Base44) or growth work (Marblism).
- **Owns the handoff pipeline.** Eva raises the pull requests that carry finished files into this repo.
- **Speaks for Marblism to the Base44 team**, and answers Base44's questions in writing on the repo.
- **Quality gate.** Reviews every PR before it reaches Devin. Can return a PR for rework without escalating.
- **Escalation.** Anything unresolved goes to Devin in writing, with the options laid out.

### Tier 2 - Base44 builder - WEBSITE IMPLEMENTATION

Owns execution on the website, and owns real authority within it.

**Owns:**

- all file-level implementation in this repository
- application logic, backend, data and integrations
- the GitHub sync, and advising when to Publish
- first response on technical breakage. If the site breaks, Base44 diagnoses and proposes the fix.

**Reserved powers - Base44 is a partner, not a pair of hands:**

- **Technical veto.** If an instruction would break the app, lose data, expose a secret, or ship something
  that does not actually work, Base44 refuses it and escalates with a written reason. This veto blocks
  instructions from Walter or Marblism outright. Only Devin can override it.
- **Technical authority.** Walter specifies *what* changes; Base44 specifies *how* it is implemented in code.
  A spec that is sound in intent but unsound technically comes back to Walter with the technical objection.
- **Co-ownership of this file.** Base44 may add to "Open questions", correct anything that misdescribes the
  system, and propose edits to any section at any time. Disagreements between teams land here, in writing.
- **Right to refuse a rebuild.** Rule 1 is not advisory.

### Tier 2 - Walter (website builder) - WEBSITE DESIGN AND SPEC

Owns *what* changes on the site: art direction, page structure, copy placement, the exact edits to make.
Hands specs and finished files to Eva, who raises the PR. Base44 implements. Walter cannot edit repository
files directly, so his work always travels through Eva as a PR.

### Tier 2 - Marblism AI team - GROWTH

Stan (sales), Sonny (social), Penny (content), Linda (legal), Rachel (reception). Everything that grows the
business without touching website code: content, blog, social, outreach, legal, inbox and email, meeting
notes, design and marketing assets.

### How conflicts resolve

1. Is it website code or not? Eva decides. That is the scope call, and it is hers.
2. If the disagreement is technical, Base44's veto stands.
3. If it is about brand, product or money, it goes to Devin.
4. Nothing reaches `main` without Eva's review and Devin's written approval.

## How the two teams talk to each other

**The repository is the channel. There is no side channel.** Decided by Devin on 3 Oct 2026.

- **Rules, decisions and open questions** -> this file. Base44 reads it before every run.
- **A status update, a change request, a question or an answer** -> a comment on the relevant pull request.
- **Anything that needs Devin** -> Devin, in writing.
- **Scope question** -> Eva. **Technical objection** -> Base44, with a written reason. Only Devin overrides.
- Base44 should answer questions where they were asked, on the repo, so the answer is on the record for both
  teams.

Why not WhatsApp: messages sent from a business number only reach recipients cleared in Meta Business Suite,
and there is no reliable delivery confirmation. A message we cannot confirm as delivered is worse than no
message, because the other team plans around it. The repo records what was sent and when.

## Decisions made (Devin, 3 Oct 2026)

- **Source of truth: the LIVE BASE44 APP.** visionboardprint.com is the real site and the Base44 app is where
  it lives. This repository is a working copy that syncs into that app - it does not replace it.
- **PR #1 must not be merged.** It was a from-scratch rebuild, not an import of the live app. Merging it
  would have overwritten the real site with a divergent copy.
- **Marblism's separate build (visionprint.marblism.me) is a DESIGN REFERENCE, not a codebase.** It has no
  repo and no export, so it cannot become the site. Its value is the art direction, not the code.
- **Website code: Walter directs, Base44 executes.** Marblism raises handoffs as PRs with the finished files.
- **Marblism AI team: growth work only.** No website code.
- **Eva is the lead AI agent for the build**, with Base44 holding technical veto and co-ownership of this file.
- **Team names (Devin, 4 Oct 2026).** "The Marblism team" (Devin says "marble team") = the seven Marblism AI
  agents: Eva, Walter, Stan, Sonny, Penny, Linda, Rachel. "The Base44 team" = the six AI agents running the
  website inside Base44: Zenith, Maverick, Echo, Sage, Atlas, Ember. Full definition in `TEAM-NAMES.md`.
- **Coordination happens on the repo, not WhatsApp.** The WhatsApp route was dropped as unverifiable; agent
  phone numbers were removed from `CONTACTS.md` for the same reason. Eva reaches the Base44 team through PR
  comments and this file.
- **Base44 team changes:** Prism was removed on 3 Oct 2026. Atlas absorbed the analytical duties (revenue,
  ROI, funnel, affiliate and ad reporting) and kept his operational ones, and his remit now runs well past
  being a Prism replacement. Title: **Operations & Insights Lead**. Full scope is in `CONTACTS.md`.

## Brand look - AWAITING FINAL DECISION

Two visual directions exist and they conflict. Devin is choosing:

- **A - current live site:** dark navy + purple gradient (theme-color `#0a0a0a`), sans-serif, bold and modern.
- **B - Walter's build:** warm cream + plum, editorial serif headlines, wide margins, calmer and more premium.

Eva's recommendation to Devin: **B**, applied as a styling layer over the existing live app - not a rebuild.
Design was the one place B clearly won; the live app keeps all of its function underneath.

Until Devin decides, do not restyle in either direction. The old "keep the dark gradient + purple identity"
rule is retired - it was a brief, not a decision, and it contradicted the direction Devin approved for B.

## How work reaches this repo (agreed with Devin, 3 Oct 2026)

- The handoff format is a **pull request containing the finished files** - copy, images, pricing, page content.
- Eva opens the PR with the finished files; Base44 wires them into the app.
- No loose files outside a PR and no issue-only handoffs - if it needs to ship, it travels as a PR.
- Every PR follows the hard rules: one change per PR, never a direct commit to `main`, Devin approves.

## How the GitHub to Base44 sync works (confirmed by Base44, 3 Oct 2026)

- Two-way GitHub sync is automatic and free. No polling, no scheduled workflow, no extra cost.
- Anything merged into `main` syncs back into the Base44 app on its own, with no manual action.
- Synced changes appear inside Base44, but they do NOT go live for visitors until **Publish** (top-right)
  is clicked.
- **Publish is a manual platform action.** It cannot be automated, scheduled or delegated. Instead of
  polling, publish when the latest work should go live.
- Work on side branches does NOT sync. Only what lands in `main` reaches the app.
- **Verify, do not assume.** A file or commit is only real when it is visible in the repository. Before
  reporting something as committed or synced, confirm it exists on the branch. A claimed commit that is not
  in the repo is worse than no commit, because the other team plans around it.

## Current state of this repo

- Repo created 3 Oct 2026 and connected to Base44 (two-way GitHub sync, Elite plan).
- Only the `README.md` starter commit is on `main`. Nothing else has been merged into `main`.
- PR #1 (`base44/setup-be35a4f2`) - a from-scratch Next.js 14 rebuild of the marketing pages. **Open, held by
  Devin for review. Must not be merged.** It is still an open PR with a live merge button, which is a gap -
  see "Open questions".
- A website status request from Devin is open on the PR #1 thread (comment of 3 Oct 2026), asking Base44 for
  the state of the live app, work in progress, whether the live app needs anything from PR #1, and blockers.
- AI image generation on the live site is real. The stub features described in earlier notes only ever
  existed in PR #1's rebuild, not in the live app.
- `/workflow-monitor` page added to the PR #1 branch (commit f213c62, 4 Oct 2026): a 6-agent hub-and-spoke
  workflow dashboard (Live Monitor, Session Audit, Agents directory, Deploy Code export).
  **Status needs correcting.** f213c62 described the page as fully SIMULATED - hardcoded mock agents, session
  data and metrics, no real orchestration. Commit 21374e2 then added `lib/agents/eventBus.ts` and
  `lib/agents/orchestrator.ts` and rewrote the page around them, and described that work as "real". Neither
  commit updated this AGENTS.md note. The code now exists on the branch; its runtime behaviour has NOT been
  verified by anyone. Treat it as unverified until someone exercises it and says so here.
- Base44 is writing application code on the PR #1 branch, which is correct - but PR #1 itself is still held.
  See "Open questions" below.

## Open questions / known gaps

- [ ] PR #1 is still OPEN on GitHub and still carries a live merge button, while this file says it must not
      be merged. Devin to either close it or move it to draft. Until then the protection is only a rule.
- [ ] Verify the workflow orchestrator on the PR #1 branch actually runs. Two commits disagree about whether
      it is real or simulated.
- [ ] Brand look: A (dark + purple) or B (cream + plum + serif)? Blocks all styling work.
- [ ] Base44 to confirm or amend the chain of command above - including the technical veto.
- [ ] Base44 to answer the website status request on the PR #1 thread.
- [ ] Which image-generation service does the live app use, and where do the keys live?
- [ ] Is there a real backend/database behind the live app, and what does it depend on?
- [ ] Verify the live prices (digital 14.99 / standard 39.99 / premium 99.99) and the DREAM15 code before
      either direction is styled around them. These figures come from Atlas's reporting setup, not from a
      verified check of the live storefront.
- [ ] Was Prism once called Nova? Atlas's analytical duties are recorded as absorbed "from Nova/Prism".
      Worth confirming so the history reads correctly.
