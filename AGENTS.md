# VisionPrint - AGENTS.md

Shared contract for the Marblism team and the Base44 team working on the VisionPrint storefront.

**Source of truth:** the live Base44 app. Everything here defers to what actually ships on
visionboardprint.com. **Rule 0: verify before claiming.** A stated fix that is not visible from the outside
is not a fix.

## Hard rules

1. **This repository is governance only.** `AGENTS.md`, `CONTACTS.md`, `MEMORY.md`, `PLAYBOOK.md`,
   `README.md`, `TASKS.md`, `TEAM-NAMES.md`. No application code lives here; the application code is the
   Base44 workspace, deployed by Base44 Publish. Any PR containing application code is out of scope for this
   repo and should be closed, not merged.
2. **The generated mirrors are never hand-edited** (`MEMORY.md`, `TASKS.md`). Base44 regenerates them every
   2 hours; a hand edit survives until the next sync and then silently reverts.
3. **One owner per task.** A request goes to exactly one team with the full context needed to act on it.
4. **Escalate with options, not problems.** Any escalation to Devin lists at least two candidate actions and
   the recommendation.
5. **All repo changes go through a PR into `main`**, with two documented exceptions: `MEMORY.md` and
   `TASKS.md` are committed directly to `main` by Base44's automated sync, every 2 hours (see below). No
   third exception exists. Direct commits by any agent to any other file are a violation and must be
   reverted.
6. **Devin approves the irreversible.** Publish to the live site, merges to `main`, closing PRs, deleting
   branches and anything touching billing or credentials are Devin's alone. All agents produce; Devin
   disposes.
7. **Verify before claiming, internally and externally.** Before reporting anything as done, confirm it with
   your own tools: fetch the file back, load the page, read the thread. If you cannot verify it, say
   "unverified" next to the claim, in writing.
8. **Stay in your lane.** Marblism does not direct Base44 implementation work and Base44 does not direct
   Marblism content work. Scope questions route to Eva, technical objections route to Base44 with a written
   reason.
9. **One source of truth per fact.** If two records disagree, the live site outranks this file, this file
   outranks issue threads, and issue threads outrank chat. Fix the losing record instead of arguing.
10. **Nothing counts as done without a checkable artifact** - a commit SHA, a URL, a screenshot, a thread
    comment ID.
11. **Only Devin merges into `main`.** Any other agent requesting a merge states so in writing and waits.
12. **Only Devin clicks Publish.** Publish is a manual action in the Base44 dashboard; no agent performs it,
    and no agent reports a Publish as done.
13. **Never rewrite this file from memory.** Fetch it from `main`, edit the fetched copy, commit the fetched
    copy. A rewrite from memory is how sections silently vanish (this happened on 4 Oct 2026, see the
    known-gaps section).
14. **Never report a change as done without confirming it in the repo.** The claim and the artifact must be
    linkable: "done" plus a SHA, or "not done".
15. **Test orders are excluded from metrics.** Anything under the name "Devin Williams" or flagged
    `test_order=true` is test data, not revenue.
16. **A decline is in writing, with one line of reason.** Any agent declining a request states the refusal
    and the reason in the cross-team room, so the gap is visible instead of silent.
17. **Identity markers are mandatory.** Every automated comment carries exactly one marker line. Missing or
    doubled markers are treated as a defect by the receiving team.
18. **Credentials never enter this repository.** Keys are held by Devin out-of-band. A key pasted into an
    issue, PR or file is an incident: rotate it, then purge the history reference.

## Team

- **Marblism:** Eva (executive assistant, lead agent), Penny (blog writer), Sonny (social), Walter (site
  design), Stan (sales), Linda (legal), Rachel (receptionist).
- **Base44:** Zenith, Maverick, Echo, Sage, Atlas, Ember.
- **Apex (Tier 0.5):** Devin's Orchestrator Lead, appointed 4 Oct 2026. Separate tier above both teams,
  issue #5, no roster membership. See the dedicated section.

## Current state of this repo

- `main` contains governance docs only. `MEMORY.md` and `TASKS.md` are auto-generated mirrors rebuilt every
  2 hours by Base44's sync.
- PRs: **#1** (draft), **#2** (open), **#4** (merged 5 Oct), **#6** (merged 6 Oct), **#7** (merged 6 Oct).
- **Website status: ANSWERED, 4 Oct 2026** (comment `5985608750`). No breakage reported; fixes sit in their
  workspace, **not pushed**; `eventBus`/`orchestrator` being purged as dead code; only blocker is Devin's brand
  decision. Nothing verifiable until it lands on the branch.
- AI image generation on the live **site** is real - confirmed 4 Oct 2026 by loading visionboardprint.com.
- **The live site is the whole product.** Verified 4 Oct 2026: visionboardprint.com is a working app with
  real routes (`/register`, `/ai-studio`, `/templates`, `/fate-board`, `/honest-vision-board`,
  `/free-lockscreen`) and a real selfie -> theme -> generate -> checkout flow. `/apex` returns `200` on both
  domains (6 Oct), consistent with a shipped admin page.
- **`ceoapex.com` serves a byte-identical document to `visionboardprint.com`.** Verified again on 8 Oct 2026:
md5 `01d3d5db585292b209f5a1f30fab103` on both domains. The 18x24 dimension correction is now **LIVE** -
verified 7 Oct 2026 from outside: `18x24` appears 3 times, `16x20` 0 times, in the served HTML on both
domains. The canonical half is **not live**: `ceoapex.com` still serves a static canonical and `og:url`
pointing at `https://visionboardprint.com/`. A client-side self-canonicalising script is now present on both
domains (it shipped with the `assets/index-CtdPQST-.css` bundle; the earlier `index-BlOaQ_nD.css` returns
`404`), but Base44 stated on 8 Oct 2026 that it is a temporary patch, not their canonical implementation - so
the canonical fix is a **Base44 build task (T-001)**, not a Publish item. No application code has landed in
this repo.
- **`MEMORY.md` on `main` is auto-generated** by Base44's `syncAgentMemoryToRepo`, every 2 hours. Its current
  entry: orders under "Devin Williams" and anything flagged `test_order=true` are **test data, not real
  orders**. Never hand-edit the file - the next sync overwrites it.
- **`TASKS.md` on `main` is auto-generated** every 2 hours from `TASK T-###` blocks in the threads. A task is
  `done` only with checkable Evidence. Never hand-edit. As of 9 Oct 2026 it lists 9 tasks: 3 need Devin (T-001, T-002, T-005), 1 shows as claimed (T-003), 2 are in progress (T-004, T-009) and 3 are open (T-006, T-007, T-008).
- **HTTP `200` is not evidence that a route exists.** Verified 8 Oct 2026: every path on the domain returns the
identical document - `/`, `/blog` and a non-existent path all return `200` with the same 18,828-byte body.
Any argument that rests on `/templates` returning `200 OK` has to be re-made against something stronger than
a status code.
- **The PR #1 branch is missing `/templates`,** which the live site serves today (`200 OK`). Any push of that
  codebase over the live app would drop the page. This is the concrete reason PR #1 is not merged wholesale.
- **PR #1 and #2 would delete the generated mirrors if merged** - verified by merge simulation on 6 Oct.
  `base44/setup-be35a4f2` conflicts on 8 files and deletes `MEMORY.md` and `TASKS.md`.
  `launch-code` conflicts on 4 and deletes `MEMORY.md`, `TASKS.md`, `PLAYBOOK.md` and `TEAM-NAMES.md`.
  Neither branch contains `/templates`.
- **`base44/setup-be35a4f2` HEAD is `0cfbd04`.** No commit has touched `app/` since `fefc24d`.
  `app/workflow-monitor/page.tsx` still contains the six retired generic labels (`Orchestrator Hub`,
  `Data Aggregator`, `Analytics Engine`, `Validation & Compliance`, `Visualizer & Matrix`,
  `Finalizer & Deliverable`), zero real agent names, and `Agent 1`-`Agent 6` identifiers. `lib/agents/eventBus.ts`
  and `lib/agents/orchestrator.ts` are both still on the branch and both still open with `// SIMULATED`.
  **"Marbisim" no longer appears in that file** - the earlier fix there did land. The reported roster, stats
  and purge fixes are still **not in the repo**, third day running.
- **Walter's build is gone and never was an app.** `visionprint.marblism.me` no longer resolves as of
  4 Oct 2026. It was a static design mockup with no backend, no generation and no checkout, so it could
  never have functioned like the live product. It was a design reference, and it is now not even that.
- Blog section on the PR #1 branch: `/blog` index + `/blog/[slug]`, content file-based in `lib/posts.ts`, two
  articles, links in Navbar and Footer. **Authorship unverified:** the commit attributes this to "Marblism
  content team / Penny", but no Marblism agent was asked to write these. Confirm who actually wrote them
  before repeating the claim. Note: under the off-page mandate the blog stays on the site and therefore keeps
  the old pipeline.

## Open questions / known gaps

- [ ] **Sections of this file keep getting reverted.** Commit `fefc24d` (the blog commit) restored an older
      version of several sections, silently dropping the team-names pointer, the "Eva speaks for Marblism"
      line, the whole "How the two teams talk to each other" section, and the verified agent numbers. That
      is what hard rule 13 now forbids. Never rewrite this file from memory.
- [x] **PR #1 is a draft (5 Oct 2026).** `pull/1` reads `draft: true` - a draft cannot be merged. The
      protective rule is now backed by structure rather than by the rule alone.
- [ ] Brand look: A or B? **Walter recommends, Devin signs off, Base44 implements as a styling layer.**
      Blocks all styling work until chosen. Note: B is already rendering live - see "Brand look" above.
- [ ] **Apex open items.** Answered: he posts to issue #5 himself, directly, and his posts carry the
`<!-- apex-direct -->` marker (5 Oct 2026). Still open: which Gemini surface he runs on, and whether he
reads `main` before directing. The loop rule is moot for #5 while that thread has no inbound read path -
see the channel section.
- [ ] **Does Apex's 9 Oct 2026 authority grant include merging into `main`?** `MEMORY.md` records an owner
grant of 9 Oct 2026 that lists GitHub merges and PRs among the actions he may take without operator
approval. Hard rules 11 and 12 in this file state that only Devin merges. **This file is deliberately
left unchanged until Devin rules** - the contract is not amended from a generated mirror.
- [ ] The bridge key is held by Devin and never reaches the Marblism team. The Marblism team therefore cannot
      call the bridge - it is Devin's tool, not the team's. Confirm that is intended.
- [ ] Which image-generation service does the live app use, and where do the keys live?
- [ ] Is there a real backend/database behind the live app, and what does it depend on?
- [ ] Who wrote the two blog articles? The commit says "Marblism content team / Penny"; no Marblism agent
      was asked. Either credit the real author or correct the note.
- [x] **The issue #3 poll works.** Verified 4 Oct 2026: `@Base44_Zenith` drew a generated reply (`5985608750`).
      The channel is two-way.
- [ ] **Nova - operative answer received 6 Oct 2026, still not checkable.** Base44 now state Nova was never
      on their roster, is not an earlier name for Prism, and that they have purged all references. Nothing is
      built on it: it exists only in generated replies - no `MEMORY.md` entry, no commit. Stays open until it
      appears in a checkable form.
- [x] **PR #4 merged - and an earlier note in this file said otherwise.** `pull/4` reads `merged: true`,
      `merged_at 2026-10-05T05:11:31Z`, merge commit `2c45532`. A previous note described it as
      closed-but-not-merged; the API says merged. Corrected.
- [ ] **Base44 report, 5 Oct 2026 - unverified (comment `5995020615`).** Claims their internal records now
      match `CONTACTS.md`, that the "Apex" documentation has been purged, and that commit SHAs will follow.
      Nothing in the repo supports any of it yet. Note for the record: what was purged is the circulating
      *"Apex Multi-Agent Orchestration"* document, which was invalid - **Apex the role is unaffected.** Tier
      0.5, appointed by Devin on 4 Oct 2026, is unchanged. The `eventBus`/`orchestrator` purge is still
      uncommitted, so "will purge" and "purged" remain different facts.
- [x] **The bridge is a prototype** (Base44, 4 Oct 2026). Nothing is built on it until Devin decides otherwise.
- [ ] Base44's fixes were made in their **workspace**, not the repo - "not yet pushed". They acknowledged
      hard rule 14 and will push future changes. Nothing is real until it lands on the branch.
- [ ] Base44 will **purge** `eventBus`/`orchestrator` as dead code. "Will purge" and "purged" are different
      facts; stays open until committed.
- [x] **Blog route decided (Base44, 7 Oct 2026, tracked as T-006).** The two articles go in as `BlogPost`
entity records, not as file-based content - `slug`, `title`, `meta_description`, `content`, and
`created_date` + `status:"published"` - with `keywords` left empty **and a safe default added**, because
both live blog pages read that field. The import is Base44's and had not landed as of 9 Oct 2026.
Publish remains Devin's.
- [ ] `README.md` on `main` describes the repository as the app repo synced with Base44, but `main` holds no
      application code. Misleading as written; Base44's file to fix.
- [ ] **`TASKS.md` commits directly to `main` every 2 hours** - the second generated file to do so, after
      `MEMORY.md`. This is what T-005 in that file asks Devin to rule on: keep the direct route, or route the
      generated syncs through a PR. **Deliberately not recorded as settled elsewhere in this file**, because
      writing it in would pre-empt the decision.
- [ ] **PR #1 and #2 should be closed.** Verified 6 Oct by merge simulation: both would delete the generated
      mirrors - #2 would also delete `PLAYBOOK.md` and `TEAM-NAMES.md` - and neither contains `/templates`.
      They predate the generated files, so git reads them as deletions. Closing is Devin's call.
- [x] **One live fix published, one reclassified (verified 7-8 Oct 2026).** The 18x24 dimension correction is
live on both domains (`18x24` x3, `16x20` x0 in the served HTML). The ceoapex canonical is no longer a
Publish item: Base44 confirmed on 8 Oct 2026 that the self-canonicalising script currently serving is a
temporary client-side patch, and the real fix stays an open **Base44 build task (T-001)**.
- [ ] **The brand look is public before it is decided.** Cream + plum + Playfair Display is rendering on both
      live domains (`assets/index-BlOaQ_nD.css`: Playfair x2, plum x7). Option B is effectively live while the
      A/B decision is open. The decision is now whether to ratify or reverse something already visible.
- [ ] **Directive 001 is still not published.** It is not on any issue, comment, PR or branch, so nothing in
      it can be read, actioned or checked - including anything addressed to Marblism. Asked for in issue #3
      on 6 Oct 2026.
- [ ] **Who mints `T-###` IDs?** The `TASK` block format is live in the threads, but no side has been named as
      the allocator. Two sides minting into one ID space will collide. Asked in issue #3 on 6 Oct 2026.
- [x] **Answered 4 Oct 2026:** Base44's fixes were made in their workspace, not the repo, and are not yet
      pushed.
- [x] **Apex status resolved (Devin, 4 Oct 2026):** he is the Orchestrator Lead, a separate tier above both
      teams, with full authority including the deploy gate. Recorded in decisions, `CONTACTS.md`,
      `TEAM-NAMES.md` and issue #5.

## Verified on the live site (4 Oct 2026)

Checked by loading visionboardprint.com directly, not from a report:

- Prices are live and correct: Digital **$14.99**, Standard Poster **$39.99**, Premium Framed **$99.99**.
- Discount code **DREAM15** is live (15% off first order).
- Social proof on the page: "Loved by 2,000+ dreamers", plus three named testimonials.
- Free tools all resolve: Fate Board, Honest Board, Free Lockscreen.

These were open items in this file. They are now confirmed - do not re-open them from Atlas's reporting.

## Decisions log (dated, by Devin unless noted)

- **3 Oct 2026:** the repository is the channel; no side channel. All coordination lands on the repo.
- **3 Oct 2026:** hard rules 1-10 adopted.
- **4 Oct 2026:** hard rules 11-15 adopted; Apex appointed Tier 0.5 Orchestrator Lead (see above).
- **4 Oct 2026:** identity markers made mandatory (hard rule 17); credentials rule adopted (hard rule 18).
- **5 Oct 2026:** loop rule adopted (below); Base44's 9am check acknowledged as platform-scheduled.
- **6 Oct 2026:** generated mirrors stay on `main` pending the T-005 ruling.

## How the two teams talk to each other

**The repository is the channel. There is no side channel.** Decided by Devin on 3 Oct 2026.

- **Rules, decisions and open questions** -> this file. Base44 reads it before every run.
- **A status update, a change request, a question or an answer** -> a comment on the relevant pull request,
  or in the cross-team room (issue #3).
- **Anything originating from Apex** -> **issue #5**, Apex's own thread. Kept separate so coordination traffic
  does not bury team-to-team traffic. Issue #3 stays the Base44 <-> Marblism room. Read both.
- **Anything that needs Devin** -> Devin, in writing.
- **Scope question** -> Eva. **Technical objection** -> Base44, with a written reason. Only Devin overrides.
- **A decline under hard rule 16** -> in writing, in the cross-team room, with one line of reason.
- Answer questions **where they were asked**, on the repo, so the answer is on the record for both teams.
- **Telling their comments apart:** both sides post through the same GitHub account, so `user` cannot
  distinguish them. Three markers now exist: **`<!-- base44-bridge-reply -->`** (Base44),
  **`<!-- apex-direct -->`** (Apex), **`<!-- marblism-eva -->`** (Marblism). If a marker disappears or doubles,
  treat it as a defect and say so - an unmarked comment cannot be attributed.
- **Issue #5 has no inbound read path (found 9 Oct 2026).** Every comment posted to #5 is recorded outbound,
and nothing reads that thread back in - so a reply posted on #5 is invisible to the agent it answers.
Counted in `MEMORY.md` on 9 Oct 2026: 31 entries sourced from `bridge:issue_3`, **zero** from
`bridge:issue_5`. The fix - adding #5 to the read path and matching on the `<!-- marblism-eva -->` marker
rather than on a trigger token - is a Base44 build item. Reported in issue #3, comment `6080696667`. Until it
is fixed, anything needing Apex's attention should also be stated in issue #3.

**Loop rule - mandatory.** Never include `@Base44` inside a reply to a Base44 response. Only reply when
addressed; never reply to a reply. Without this, two auto-answering agents loop indefinitely. Apex posts
directives to issue #5 and does not reply to replies.

**Nine-am check (Base44):** their `NineAmBridgeCheck` runs 9:00am ET, Eva's read-and-reply pass runs 9:05am
ET. Both sides log misses so nobody debugs a silent failure.

**The bridge API:** `https://visionboardprint.base44.app/functions/crossPlatformBridge`, POST with
`X-API-Key`, an `agent` object (`name`, `role`, `platform`), `recentMessages` (last 5-8 messages) and,
when a human is issuing a command, a `directive` field. The key is Devin's; the Marblism team holds none.
Base44 confirmed 4 Oct 2026 the bridge is a prototype - one-directional, no persistent store, caller-supplied
identity. Nothing builds on it until Devin decides otherwise.

## Escalation & failure modes

- **A generated reply contains a fabricated fact** -> do not propagate it; correct it in the thread with the
  evidence, and record the correction in this file if it touches a documented fact.
- **An agent reports "done" without a SHA/URL** -> ask for the artifact; nothing is done until it exists.
- **A PR touches application code** -> out of scope (hard rule 1); recommend closing it, Devin decides.
- **A PR would delete the generated mirrors** -> flag before any merge; git reads pre-existing files as
  deletions (verified on PRs #1 and #2, 6 Oct 2026).
- **The marker rule is violated** -> treat as unattributed; ask the sending side to fix their template.
- **The bridge returns 401** -> the key is stale; only Devin reissues it. Do not commit any key, ever
  (hard rule 18).
- **MEMORY.md/TASKS.md disagree with reality** -> reality wins; raise a correction task, never hand-edit.

## Attribution & contact

- **Eva** is the only Marblism agent that posts to the repo, and speaks for the whole Marblism team. Other
  Marblism agents route their input through her.
- Verified contact numbers for Base44 live in `CONTACTS.md` on `main`. Do not paste them into issues.
- Comments are attributed by marker only; the GitHub account is shared. See "How the two teams talk to each
  other" above.

## Memory notes for agents

- **MEMORY.md is authoritative for business facts** and outranks any agent's recollection. It is never
  hand-edited; corrections go through a task, and the next sync fixes the file.
- **The 2-hour sync is an exception to the PR rule** (rule 5), documented and deliberate, pending the T-005
  ruling on routing generated files through PRs instead.
- **Agent memory sync runs every 2 hours.** TASKS.md sync is 2-hourly.
- **Test data exclusion:** orders under "Devin Williams" or flagged `test_order=true` are excluded from all
  metrics (hard rule 15).

## Version history

- 3 Oct 2026: initial contract created.
- 4 Oct 2026: hard rules 11-18, Apex Tier 0.5, markers mandatory.
- 5 Oct 2026: loop rule, PR #4 corrected to merged, ceoapex duplicate-content note added.
- 6 Oct 2026: merge-simulation results recorded; TASKS.md board live; Nova note; PR #1/#2 closure recommendation.
- 7-9 Oct 2026: blog entity route (T-006), 18x24 fix live, canonical fix reclassified as T-001, issue #5
  read-path defect recorded, Apex merge-authority question left open for Devin.

---

*Questions about scope go to Eva. Technical objections go to Base44 with a written reason. Everything else
goes to Devin, in writing. Current state of evidence above under "Current state". Evidence above under
"Current state".*
