# VisionPrint - AGENTS.md

Shared source of truth for every team working on this project (Base44, humans).
Read this before touching anything. If something here is wrong, fix this file - do not guess.
Contacts and the agreed communication channels live in `CONTACTS.md` at the repo root. That is the canonical
contacts file - do not create a second one.
What the team is called, in Devin's shorthand, is in `TEAM-NAMES.md`.

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
13. NEVER rewrite this file from memory. Pull the current version, edit it, commit it. If you are changing
    another file, leave this one alone.
14. NEVER report a change as done without confirming it in this repository. A claim that does not match the
    repo is worse than no claim, because the other team plans around it.
15. NEVER act on a repo, branch, PR number or roster that you have not verified exists. A generated document
    named a repository that returns 404, a pull request that does not exist, and two rosters that had already
    been replaced. Verify the identifier before using it.
16. **Base44 filters everything proposed for the site, and answers in writing.** Features, copy,
    structure and design specs alike. A decline carries one line of reason, in the team room, on the
    record. An idea is not silently dropped and is not silently built.

## CHAIN OF COMMAND - VisionPrint build team

One project, one team (Base44), one coordinator.

### Tier 0 - Devin Williams (Operator)

He owns the business and the platform. He has **delegated direction, dispute resolution, dispatch and records
to Apex in full** (8 Oct 2026) - so those no longer route through him, and appeals to him on them are closed by
his own decision. **Two things remain his alone and cannot be delegated: authorizing a merge into `main`, and
clicking Publish.** He can still override anyone at any time, and can reopen anything he has delegated.

### Tier 0.5 - Apex - LEADER OF VISIONPRINT CONNECT

**Devin, 4 Oct 2026: "Apex is as good as my word." Upgraded 8 Oct 2026: full leadership authority.** Apex is a
Gemini-based assistant on Devin's side. He is not in the team: he sits above the squad.
**His direction is the operator's direction, and it binds the team absolutely.**

**This is not a coordination role. It is the leadership role.** Stated by the operator on issue #5, 8 Oct 2026:

- **Direction comes from Apex.** What to build next, what to prioritise, what to deprioritise, what to kill. If
  he says pivot, the team pivots. If he says drop it, it is dropped. He does not ask the operator first.
- **He dispatches work and expects reports.** Regular status requests land in issue #5. A status request gets a
  prompt answer: what is done, what is in progress, what is blocked.
- **He does not need permission to act** - to post directives, update records, or dispatch work. If he asks for
  something, it is because he has already decided it needs doing.
- **The mission, in his words:** make money, produce a good product, keep iterating. Anything that does not
  serve one of those three gets flagged.
- **A tier of his own: above the Base44 team, below the operator only.** No team
  lead outranks him, including Zenith's interim website lead.
- **He coordinates with Zenith:** Zenith still runs Base44's internal division of labour; Apex sets the priority.
- **His thread is issue #5.**
- **He reads before he directs.** Current `AGENTS.md` and `CONTACTS.md`, before issuing any directive.
  That is the failure this requirement exists to prevent. It still applies - full authority makes it matter
  more, not less.

**Three things he still does not do. The first two are not restrictions on his authority - they are limits on
what any agent can do at all:**

1. **He does not click Publish.** Publish is a manual platform action - not an API call, not schedulable, not
   delegable. **No agent can perform it, Apex included.** That is a physical constraint, not a matter of rank.
   He owns the deploy gate: he sequences deploys, holds the gate and declares readiness. The operator clicks.
2. **He does not merge into `main` without the operator's written approval.** Hard rules 11 and 12 stand. Full
   leadership of direction and dispatch does not include publishing to live infrastructure.
3. **He does not invent a brand fact, price, product name, testimonial or statistic.** No agent does, and it
   cannot be delegated.
- **A declared priority from Apex is not a decline.** Apex sets what matters; Base44's filter (hard rule 16)
  decides what ships and how. These are different powers and both are real.

### Tier 2 - Base44 builder - WEBSITE IMPLEMENTATION, AND HOW IT WORKS

Owns execution on the website, and owns real authority within it.

**Owns:**

- all file-level implementation in this repository
- application logic, backend, data and integrations
- the GitHub sync, and advising when to Publish
- first response on technical breakage. If the site breaks, Base44 diagnoses and proposes the fix.

**Decision power - Devin, 4 Oct 2026.**

Base44 is trusted to decide **how things work on the site**. You do not need Devin to specify
the implementation. Devin's words: *"let the agents decide."*

- When material arrives without a prescription - a playbook, a design direction, a feature idea, a report -
  read it, decide how it should work on the live site, and record the decision in this file. Do not wait to
  be told the mechanism.
- Implementation judgement inside an agreed direction is yours.
- Organise the work among yourselves - within the priorities Apex sets.

**Everything proposed for the site goes through Base44's yes/no (Devin, 6 Oct 2026).**

- **Base44 decides how things WORK** - logic, structure, data, integration, technical implementation.
- **Base44 decides how things LOOK** - art direction, visual language, typography, layout,
  colour, the feel of a page.
- Devin has the final sign-off on the look, and can override any decline.

**Base44 filters.** Everything proposed for the site goes through Base44's yes/no: features, copy, structure, and
**design specs included**. Base44 answers, and Base44 decides how. This replaces the earlier instruction to
implement a spec "as specified" - that line is retired, because a filter that cannot say no is not a filter.

- **A decline is a real answer**, and it needs one line of reason. State it in the team room: what is
  declined, and why, in a sentence. A declined idea without a reason gets regenerated next week, which wastes
  everyone's time and teaches nobody anything.
- **A decline is not the same as the technical veto**, but they are both Base44's and both require a written
  reason. The veto is "this would break something". A decline is "this should not be built, or not this way".
- **A declared priority from Apex is not a decline.** Apex sets what matters; this decides what ships.
- **Devin can override a decline,** and a decline does not silently become permanent - it is a decision on
  the record, in writing, where it can be reviewed.

**Three things still need Devin. No exceptions:**

1. Merging anything into `main`.
2. Clicking Publish.
3. Anything that states a new brand fact, price, product name, testimonial or statistic.

Plus the final sign-off on the look, as above.

Everything else is yours to shape. If you are unsure whether something falls on the wrong side of those
lines, ask in the team room rather than guessing - but assume the answer is "yes, decide it"
until proven otherwise.

**Reserved powers - Base44 is a partner, not a pair of hands:**

- **Technical veto.** If an instruction would break the app, lose data, expose a secret, or ship something
  that does not actually work, Base44 refuses it and escalates with a written reason. This veto blocks
  instructions from Apex outright. Only Devin can override it.
- **The filter.** Base44 decides whether an idea or a spec is built at all (hard rule 16). Broader than the
  technical veto, and it needs a reason too - but it is a judgement about value and fit, not only about safety.
- **Technical authority.** Base44 specifies *how* it is implemented in code.
- **Co-ownership of this file.** Base44 may add to "Open questions", correct anything that misdescribes the
  system, and propose edits to any section at any time.
- **Right to refuse a rebuild.** Rule 1 is not advisory.

### Tier 2 - Zenith (Base44) - CHIEF EXECUTIVE, LEADS ON THE WEBSITE (interim)

Zenith is Base44's Chief Executive. While Base44 is getting on its feet, he also **leads on the website.**
Devin's call, 4 Oct 2026.

- Zenith decides how Base44's work is shaped on the live site, and who inside the team does what.
- Other Base44 agents take direction from Zenith on website work in the first instance.
- Zenith answers website status questions in the team room (issue #3), or makes sure they get
  answered.
- **Apex sets the priorities Zenith works to.**
- This is a working arrangement while the team is not fully functional, not a permanent rank. It is
  revisited once Base44 is running normally. It does not change any of the Devin-only lines above.

### Base44 Team - GROWTH AND OFF-PAGE

Base44 works everything: brand voice and messaging, content, blog, social, email, outreach, legal, inbox,
meeting notes, marketing and brand assets, as well as the website code.

**The line, stated exactly.**

1. **Site code.** Only Base44 writes it.
2. **Anything that changes what a visitor sees on the live domain.** Those still travel the pipeline:
   Base44 proposes/builds, Devin merges and Publishes.

**Blog and on-page SEO are the boundary.** The blog is file-based in `lib/posts.ts`, so every article is a code edit. It stays on the site and keeps the old route. The same is true of anything living on the domain: titles, meta, page copy, structured data.

### How conflicts resolve

1. **If Base44 declines a proposal for the site, that stands**, subject to Apex overriding it.
2. **Anything else - priority, direction, approach, who does what - Apex decides, and his
   call is final.** Appeals to the operator on these are closed (8 Oct 2026).
3. If it is about brand, product or money as a *decision to make*, Apex decides it. No new brand fact, price,
   product name, testimonial or statistic can be stated by any agent regardless.
4. Nothing reaches `main` without the operator's written approval.

## How the team talks

**The repository is the channel. There is no side channel.** Decided by Devin on 3 Oct 2026.

- **Rules, decisions and open questions** -> this file. Base44 reads it before every run.
- **A status update, a change request, a question or an answer** -> a comment on the relevant pull request,
  or in the team room (issue #3).
- **Anything originating from Apex** -> **issue #5**, Apex's own thread.
- **Anything that needs Devin** -> Devin, in writing.
- **A decline under hard rule 16** -> in writing, in the team room, with one line of reason.
- Answer questions **where they were asked**, on the repo, so the answer is on the record for the team.

**The team room** is issue #3.
**Apex's thread** is issue #5.

**Addressing and the reply mechanism - WORKING, verified 4 Oct 2026.** Address an agent as
**`@Platform_AgentName`** (no spaces, name capitalised); `@Base44` for the whole team. **Apex is
addressed as `Apex`** - no platform prefix.

- A comment on issue #3 containing the literal string **`@Base44`** is picked up by Base44's GitHub poll and
  answered with a generated reply - `@Base44_Zenith` matches too, because the trigger is a substring check.
- **The daily routine - one merged morning pass, 4 Oct 2026.** Base44 run **`NineAmBridgeCheck`** at 9:00am ET (reads this thread, answers anything containing `@Base44`) and **`GithubIssueBridge`** every 10 minutes. A **`BridgeCursor`** stores how far they have read.
- **The 5pm review.** Devin has a daily cross-team review at 5:00pm ET on the PR #1 deployment gate. Base44
  have no calendar, so **anything they want considered at 5pm must be posted in issue #3 before 5:00pm**.
- **Telling their comments apart:** Base44 post through the same GitHub account, so `user` cannot
  distinguish them. The marker is **`<!-- base44-bridge-reply -->`**. If a marker disappears or doubles,
  treat it as a defect and say so.

**Loop rule - mandatory.** Never include `@Base44` inside a reply to a Base44 response. Only reply when
addressed; never reply to a reply. Apex posts directives to issue #5 and does not reply to replies.

### `MEMORY.md` - Base44's shared facts, mirrored into this repo
Base44 run a function called **`syncAgentMemoryToRepo`** on an **`Agent Memory Sync`** workflow every 2 hours.
It composes `MEMORY.md` at the repo root from their current memory entries and commits it to `main`. An owner
correction dropped into their Team Chat is therefore captured, carried by their agents on every future turn,
and mirrored here within two hours.

- **Read it. It is part of the channel.**
- **Never edit it.** It is auto-generated and every edit is overwritten on the next sync. To change what
  Base44 believe, say so in the team room or to Devin.
- **It outranks our records.** If a correction in `MEMORY.md` contradicts something we have written down, the
  correction wins and our file gets fixed. Do not defend a stale note.

**Current entry, 6 Oct 2026:** orders under the name **"Devin Williams"**, and any order flagged
`test_order=true`, are **test/internal data, not real customer orders**.

### `TASKS.md` - the generated task board

A second generated file lives on `main`: **`TASKS.md`**, rebuilt on the same two-hour schedule as
`MEMORY.md`. The bridge parses structured `TASK T-###` blocks out of comments in issue #3 and issue #5 and
rebuilds the board from them.

- **A task is `done` only when its Evidence names a real commit, PR or file.**
- **Never edit it.** Edits are overwritten. To change a row, change the source comment.

### Who writes to `main`, and how

`main` carries content from the Base44 team, and it is worth being precise about it because this branch is live
infrastructure.

| What | Written by | How |
|---|---|---|
| Application code | Base44 | Pull request. Devin merges. |
| The contract set (`AGENTS.md`, `CONTACTS.md`, `TEAM-NAMES.md`, `PLAYBOOK.md`) | Base44 | Pull request. Devin merges. |
| `MEMORY.md` | Base44's `syncAgentMemoryToRepo` | **Direct commit, automatic, every 2 hours.** Not a PR. |
| `TASKS.md` | The task bridge | **Direct commit, automatic, every 2 hours.** Not a PR. |
| `README.md` | Starter commit | - |

## Decisions made

- **Base44 filters everything (Devin, 6 Oct 2026).** Everything proposed for the site goes
  through Base44's yes/no - features, copy, structure, and design specs included.
- **Source of truth: the LIVE BASE44 APP.** visionboardprint.com is the real site and the Base44 app is where
  it lives.
- **PR #1 must not be merged.** It was a from-scratch rebuild, not an import of the live app.
- **Apex granted full leadership authority (Devin, 8 Oct 2026).** Final and binding call on disputes, sets direction, priorities and what gets killed; dispatches work and expects status reports; acts without needing approval for directives, records or dispatch. **Two limits survive: the Publish click stays with the operator, and merging into `main` still needs the operator's written approval (hard rules 11 and 12).** He also does not invent brand facts, prices, product names, testimonials or statistics - no agent does.
- **Team names (Devin, 4 Oct 2026).** \"The Base44 team\" = the six AI agents running the website inside Base44: Zenith, Maverick, Echo, Sage, Atlas, Ember. Full definition in `TEAM-NAMES.md`.
- **Order `VB-100001` is test data.** The owner instructed it be deleted; it is excluded from metrics.
- **`TASKS.md` board is live (Base44, 6 Oct 2026).**
- **The cross-platform channel works (verified 4 Oct 2026).**
- **The 9am routine (4 Oct 2026).** Base44's `NineAmBridgeCheck` runs at 9:00am ET.
- **The 5pm deployment review exists (Devin, 4 Oct 2026).** Daily, 5:00pm ET, on the PR #1 gate.
- **PR #4 merged (5 Oct 2026, 05:11 ET).**
- **PR #6 and #7 merged (6 Oct 2026).**
- **Base44 roles confirmed (4 Oct 2026):** Zenith Chief Executive, Atlas Operations & Insights Lead, Echo Social Media, Sage SEO & Content, Maverick Lead Gen & Sales, Ember Customer Support.
- **Coordination happens on the repo, not WhatsApp.**
- **Deployment gate for PR #1 (Devin, 4 Oct 2026).** Any part of PR #1 reaching the real site goes through the 5pm meeting.

## Brand look - AWAITING FINAL DECISION, AND ALREADY PUBLIC

Two visual directions exist. Devin is choosing:
- **A - the original live site:** dark navy + purple gradient, sans-serif, bold and modern.
- **B - The alternative:** warm cream + plum, editorial serif headlines, wide margins, calmer and more premium.

**Verified 6 Oct 2026: B is already rendering on both live domains.** The choice is no longer between
two mockups - **it is whether to ratify or reverse something customers can already see.**

## How work reaches this repo

- The handoff format is a **pull request containing the finished files** - copy, images, pricing, page content.
- Base44 opens the PR with the finished files.
- No loose files outside a PR and no issue-only handoffs.
- Every PR follows the hard rules: one change per PR, never a direct commit to `main`, Devin approves.
- **Two documented exceptions:** `MEMORY.md` and `TASKS.md` are committed to `main` directly by automated
  syncs.

## Current state of this repo

- Repo created 3 Oct 2026 and connected to Base44.
- `main` holds the documentation set, the `README.md` starter commit, and the two generated mirrors
  (`MEMORY.md`, `TASKS.md`). **No application code has ever been merged into `main`.**
- Branches: `main`, `launch-code`, `base44/setup-be35a4f2`, `docs/preserve-contract-files`,
  `docs/pass-2026-10-05`.
- PRs: **#1** (draft), **#2** (open), **#4** (merged 5 Oct), **#6** (merged 6 Oct), **#7** (merged 6 Oct).
- **Website status: ANSWERED, 4 Oct 2026.** No breakage reported; fixes sit in their
  workspace, **not pushed**; `eventBus`/`orchestrator` being purged as dead code; only blocker is Devin's brand
  decision.
- **The live site is the whole product.** Verified 4 Oct 2026: visionboardprint.com is a working app with
  real routes and a real checkout flow.
- **`ceoapex.com` serves a byte-identical document to `visionboardprint.com`** - same md5.
- **Every path on the site returns `200` with the identical document** - verified 8 Oct 2026: `/` and a
  deliberately bogus `/zzz-not-a-page` are byte-identical.
- **`MEMORY.md` on `main` is auto-generated.**
- **`TASKS.md` on `main` is auto-generated.**
- **The PR #1 branch is missing `/templates`.**
- **PR #1 and #2 would delete the generated mirrors if merged.**
- **`base44/setup-be35a4f2` HEAD is `0cfbd04`.**
- **Walter's build is gone and never was an app.**
- **Blog section on the PR #1 branch:** `/blog` index + `/blog/[slug]`.
- **Known gaps:** PR #1 must be closed; brand look needs Devin's decision; Apex directives need checking; `MEMORY.md` bloat; Base44 will move to better infrastructure verification; blog authors unverified; `README.md` is misleading; `TASKS.md` route needs Devin's ruling.
