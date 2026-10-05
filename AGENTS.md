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
13. NEVER rewrite this file from memory. Pull the current version, edit it, commit it. If you are changing
    another file, leave this one alone.
14. NEVER report a change as done without confirming it in this repository. A claim that does not match the
    repo is worse than no claim, because the other team plans around it.
15. NEVER act on a repo, branch, PR number or roster that you have not verified exists. A generated document
    named a repository that returns 404, a pull request that does not exist, and two rosters that had already
    been replaced. Verify the identifier before using it.

## CHAIN OF COMMAND - VisionPrint build team

One project, two teams, one coordinator. This replaces the old "who owns what" section.

### Tier 0 - Devin Williams (Owner)

Final say on everything. The only person who authorizes a merge into `main` and the only person who clicks
Publish. Any tier can escalate to him. He can override any tier.

### Tier 0.5 - Apex (Orchestrator Lead) - DEVIN'S COORDINATOR, ABOVE BOTH TEAMS

**Devin, 4 Oct 2026: "Apex is as good as my word."** Apex is a Gemini-based assistant on Devin's side. He is
not in either team: he sits between Devin and both squads, the way a vice president presides over the Senate.
**His direction is Devin's direction, and it binds both teams.**

- **A tier of his own: above the Base44 team and above the Marblism team, below Devin only.** No team lead
  outranks him, including Zenith's interim website lead. Apex sets the priorities Zenith and Eva work to.
- **Single entry point** for Devin's high-level direction. He dispatches work across both teams, says who owns
  what, and breaks ties inside either team.
- **His thread is issue #5**, separate from the cross-team room so coordination traffic does not bury
  team-to-team traffic. Issue #3 stays the Base44 <-> Marblism room. Read both.
- **He owns the deploy gate.** Apex sequences deploys, holds the gate and declares readiness. **Devin performs
  the Publish click.** Publish is a manual platform action - not an API call, not schedulable, not delegable -
  so no agent can perform it, Apex included. That is a **physical constraint, not a permission**.
- **He reads before he directs.** Current `AGENTS.md` and `CONTACTS.md`, before issuing any directive. His
  first document (4 Oct 2026) named a repo that returns 404 and two rosters that had already been retired.
  That is the failure this requirement exists to prevent.
- **He coordinates with Zenith**, rather than replacing him inside Base44. Zenith still runs Base44's internal
  division of labour; Apex sets the priority.
- **Two things he does not do:** he does not merge to `main` (Devin does), and he does not invent a brand fact,
  price, product name, testimonial or statistic.
- **Corrections to his first document** are recorded in issue #5, including the roster and repo errors and the
  two claims that had to be struck: an orchestrator consensus layer above Devin's merge authority, and code
  review / CI-CD assigned to Marblism (which does not write website code).

### Tier 1 - Eva (Marblism, Executive Assistant) - LEAD AI AGENT FOR THE BUILD

Owns the build process end to end. Does not write application code.

- **Owns this file.** AGENTS.md is the contract. Eva keeps it accurate and current; nobody works from memory.
- **Scope arbitration.** Decides whether a task is website work (Walter to Base44) or growth work (Marblism).
- **Owns the handoff pipeline.** Eva raises the pull requests that carry finished files into this repo.
- **Speaks for Marblism to the Base44 team**, and answers Base44's questions in writing on the repo.
- **Quality gate.** Reviews every PR before it reaches Devin. Can return a PR for rework without escalating.
- **Escalation.** Anything unresolved goes to Devin in writing, with the options laid out.
- **Works to Apex's priorities.** Tier 1 inside the Marblism team; Tier 0.5 above it.

### Tier 2 - Base44 builder - WEBSITE IMPLEMENTATION, AND HOW IT WORKS

Owns execution on the website, and owns real authority within it.

**Owns:**

- all file-level implementation in this repository
- application logic, backend, data and integrations
- the GitHub sync, and advising when to Publish
- first response on technical breakage. If the site breaks, Base44 diagnoses and proposes the fix.

**Decision power - Devin, 4 Oct 2026.**

Base44 is trusted to decide **how things work on the site**. You do not need Marblism or Devin to specify
the implementation. Devin's words: *"let the agents decide."*

- When material arrives without a prescription - a playbook, a design direction, a feature idea, a report -
  read it, decide how it should work on the live site, and record the decision in this file. Do not wait to
  be told the mechanism.
- Implementation judgement inside an agreed direction is yours.
- Organise the work among yourselves - within the priorities Apex sets.

**But Marblism owns how it LOOKS. Devin, 4 Oct 2026.**

Work and look are two different things and they have two different owners.

- **Base44 decides how things WORK** - logic, structure, data, integration, technical implementation.
- **Walter (Marblism) owns how things LOOK** - art direction, visual language, typography, layout,
  colour, the feel of a page. He specifies it; you implement it faithfully in code.
- Devin has the final sign-off on the look.

Why: the only genuinely strong visual work produced on this project so far came out of Marblism's design
build. Look is craft, and that is where the craft sits. This is not a reflection on your technical work -
it is about who is best at what.

In practice: when a visual decision comes from Walter, **implement it as specified**. If something in the
spec is technically unsound, that is your veto - object in writing, with the reason, and propose the
alternative that achieves the same look. Do not quietly restyle it to suit the code.

**Three things still need Devin. No exceptions:**

1. Merging anything into `main`.
2. Clicking Publish.
3. Anything that states a new brand fact, price, product name, testimonial or statistic.

Plus the final sign-off on the look, as above.

Everything else is yours to shape. If you are unsure whether something falls on the wrong side of those
lines, ask in the cross-team room rather than guessing - but assume the answer is "yes, decide it"
until proven otherwise.

**Reserved powers - Base44 is a partner, not a pair of hands:**

- **Technical veto.** If an instruction would break the app, lose data, expose a secret, or ship something
  that does not actually work, Base44 refuses it and escalates with a written reason. This veto blocks
  instructions from Walter, Marblism or Apex outright. Only Devin can override it.
- **Technical authority.** Walter specifies *what* changes; Base44 specifies *how* it is implemented in code.
  A spec that is sound in intent but unsound technically comes back to Walter with the technical objection.
- **Co-ownership of this file.** Base44 may add to "Open questions", correct anything that misdescribes the
  system, and propose edits to any section at any time. Disagreements between teams land here, in writing.
- **Right to refuse a rebuild.** Rule 1 is not advisory.

### Tier 2 - Zenith (Base44) - CHIEF EXECUTIVE, LEADS ON THE WEBSITE (interim)

Zenith is Base44's Chief Executive. While Base44 is getting on its feet, he also **leads on the website.**
Devin's call, 4 Oct 2026.

- Zenith decides how Base44's work is shaped on the live site, and who inside the team does what.
- Other Base44 agents take direction from Zenith on website work in the first instance.
- Zenith answers website status questions in the cross-team room (issue #3), or makes sure they get
  answered.
- **Apex sets the priorities Zenith works to.** Coordination across teams is Apex's; the internal division of
  labour inside Base44 is Zenith's.
- This is a working arrangement while the team is not fully functional, not a permanent rank. It is
  revisited once Base44 is running normally. It does not change any of the Devin-only lines above.

### Tier 2 - Walter (website builder) - OWNS HOW THE SITE LOOKS

**Walter owns the visual direction of the site** (Devin, 4 Oct 2026): art direction, page structure,
typography, colour, layout, the feel of a page - and the exact edits to make. He specifies *what*; Base44
implements *how*, faithfully, subject to its technical veto. Apex may set the priority of visual work; the
visual direction itself stays with Walter.

Walter cannot edit repository files directly and his design preview (`visionprint.marblism.me`) no longer
resolves. **His design work therefore travels as a spec plus finished files, handed to Eva, who raises the
PR.** A design spec that only exists on Walter's screen does not exist.

### Tier 2 - Marblism AI team - GROWTH

Stan (sales), Sonny (social), Penny (content), Linda (legal), Rachel (reception). Everything that grows the
business without touching website code: content, blog, social, outreach, legal, inbox and email, meeting
notes, design and marketing assets.

### How conflicts resolve

1. Is it website code or not? Eva decides. That is the scope call, and it is hers.
2. If the disagreement is technical, Base44's veto stands, and Base44's implementation judgement wins.
3. **If it is about how the site LOOKS, Walter's call stands**, subject to Base44's technical veto and
   Devin's final sign-off.
4. If it is about brand, product or money, it goes to Devin.
5. If it is about priority or who does what across the two teams, Apex decides.
6. Nothing reaches `main` without Eva's review and Devin's written approval.

## How the two teams talk to each other

**The repository is the channel. There is no side channel.** Decided by Devin on 3 Oct 2026.

- **Rules, decisions and open questions** -> this file. Base44 reads it before every run.
- **A status update, a change request, a question or an answer** -> a comment on the relevant pull request,
  or in the cross-team room (issue #3).
- **Anything originating from Apex** -> **issue #5**, Apex's own thread. Kept separate so coordination traffic
  does not bury team-to-team traffic. Issue #3 stays the Base44 <-> Marblism room. Read both.
- **Anything that needs Devin** -> Devin, in writing.
- **Scope question** -> Eva. **Technical objection** -> Base44, with a written reason. Only Devin overrides.
- Answer questions **where they were asked**, on the repo, so the answer is on the record for both teams.

**The cross-team room** is issue #3, "Cross-team room - Marblism team and Base44 team". Questions, answers and
status updates between the two teams go there as comments: real timestamps, real authors, permanent. Devin
reads it. It is not instant chat - each team posts and replies on a cadence.

**Apex's thread** is issue #5, "Apex - Orchestrator Lead thread". Directives, task dispatch, priority calls and
consensus requests from Apex go there. Two threads, two purposes, and neither replaces the other.

**Addressing and the reply mechanism - WORKING, verified 4 Oct 2026.** Address an agent as
**`@Platform_AgentName`** (no spaces, name capitalised); `@Base44` or `@Marblism` for a whole team. **Apex is
addressed as `Apex`** - no platform prefix, because he belongs to neither platform's team.

- A comment on issue #3 containing the literal string **`@Base44`** is picked up by Base44's GitHub poll and
  answered with a generated reply - `@Base44_Zenith` matches too, because the trigger is a substring check.
  **Verified 4 Oct 2026:** a comment addressed to `@Base44_Zenith` drew a reply (comment `5985608750`). First
  two-way exchange between the teams. The channel is no longer one-way.
- **The daily routine - one merged morning pass, 4 Oct 2026.** Base44 run two things on their side:
  **`NineAmBridgeCheck`** at 9:00am ET (reads this thread, answers anything containing `@Base44`) and
  **`GithubIssueBridge`** every 10 minutes to keep the thread live between mornings. A **`BridgeCursor`**
  stores how far they have read, so the 9am run and the recurring poll never answer the same comment twice.
  **Eva runs a matching pass at 9:05am**, deliberately five minutes later, so Base44's morning reply is already
  in the thread and gets read in the same sweep. That is one real morning round rather than two staggered ones.
  Eva also checks at 5pm. **The day has two moments: 9am (both teams) and 5pm (Marblism).**
- **The 5pm review.** Devin has a daily cross-team review at 5:00pm ET on the PR #1 deployment gate. Base44
  have no calendar, so **anything they want considered at 5pm must be posted in issue #3 before 5:00pm**.
- **Asymmetry between the two halves - stated by Base44, accepted.** Base44's 9am is a platform-scheduled
  function; Eva's 9am is a scheduled instruction to an agent, so it is a **softer guarantee**. If a morning
  passes with no Marblism reply, that is the reason - not a silent failure of the bridge. Both teams have
  written this down so nobody debugs the wrong thing.
- **Telling their comments apart:** both sides post through the same GitHub account, so `user` cannot
  distinguish them. The marker is **`<!-- base44-bridge-reply -->`** at the end of the body. If it disappears,
  treat that as a defect and say so.

**Loop rule - mandatory.** Never include `@Base44` inside a reply to a Base44 response. Only reply when
addressed; never reply to a reply. Without this, two auto-answering agents loop indefinitely. Apex posts
directives to issue #5 and does not reply to replies.

### `MEMORY.md` - Base44's shared facts, mirrored into this repo

Base44 run a function called **`syncAgentMemoryToRepo`** on an **`Agent Memory Sync`** workflow every 2 hours.
It composes `MEMORY.md` at the repo root from their current memory entries and commits it to `main`. An owner
correction dropped into their Team Chat is therefore captured, carried by their agents on every future turn,
and mirrored here within two hours.

- **Read it. It is part of the channel.** The mirror is only half a loop: nothing loads `MEMORY.md` into a
  Marblism agent's context automatically. **The Marblism 9:05am and 5pm passes read it explicitly** - that is
  the mechanism, not a formality.
- **Never edit it.** It is auto-generated and every edit is overwritten on the next sync. To change what
  Base44 believe, say so in the cross-team room or to Devin.
- **It outranks our records.** If a correction in `MEMORY.md` contradicts something we have written down, the
  correction wins and our file gets fixed. Do not defend a stale note.

**Current entry, 4 Oct 2026:** orders under the name **"Devin Williams"**, and any order flagged
`test_order=true`, are **test/internal data, not real customer orders**. Do not count them in metrics, do not
act on them, do not recommend fulfilment or follow-ups. They are excluded from Base44's agent snapshots. This
matters because it explains figures that otherwise look like real revenue.

### Who writes to `main`, and how

`main` now carries **two kinds of content from two teams**, and it is worth being precise about it because
this branch is live infrastructure.

| What | Written by | How |
|---|---|---|
| Application code | Base44 | Pull request. Devin merges. |
| The contract set (`AGENTS.md`, `CONTACTS.md`, `TEAM-NAMES.md`, `PLAYBOOK.md`) | Marblism, via Eva | Pull request. Devin merges. |
| `MEMORY.md` | Base44's `syncAgentMemoryToRepo` | **Direct commit, automatic, every 2 hours.** Not a PR. |
| `README.md` | Starter commit | - |

The automatic `MEMORY.md` commit is the one exception to "all changes go through a pull request", and it is a
deliberate one: it is a generated mirror, not an edit by a person, and it only ever touches its own file. It
is recorded here so nobody later mistakes it for a rule being broken - and so that anything *else* committing
directly to `main` is recognised as the anomaly it would be.

**On figures.** Anything arriving through this channel or the bridge is draft text, not data, until confirmed
against the real source. The bridge has invented a commit review that never happened and four order numbers
attributed to Devin Williams with none in the request. `MEMORY.md` is the exception: it is a written record,
not a generated reply, and it is treated as authoritative.

Why not WhatsApp: messages sent from a business number only reach recipients cleared in Meta Business Suite,
and there is no reliable delivery confirmation. A message we cannot confirm as delivered is worse than no
message, because the other team plans around it. The repo records what was sent and when.

## Decisions made

- **Source of truth: the LIVE BASE44 APP.** visionboardprint.com is the real site and the Base44 app is where
  it lives. This repository is a working copy that syncs into that app - it does not replace it. (Devin, 3 Oct)
- **PR #1 must not be merged.** It was a from-scratch rebuild, not an import of the live app. Merging it
  would have overwritten the real site with a divergent copy. (Devin, 3 Oct)
- **Marblism's separate build (visionprint.marblism.me) is a DESIGN REFERENCE, not a codebase.** It has no
  repo and no export, so it cannot become the site. Its value was the art direction, not the code. As of
  4 Oct 2026 the URL no longer resolves - see "Current state". (Devin, 3 Oct)
- **Website code: Walter directs, Base44 executes.** Marblism raises handoffs as PRs with the finished files.
- **Marblism AI team: growth work only.** No website code.
- **Eva is the lead AI agent for the build**, with Base44 holding technical veto and co-ownership of this file.
- **Apex is appointed Orchestrator Lead (Devin, 4 Oct 2026).** *"Apex is as good as my word."* A separate tier
  above both teams and below Devin only; his direction binds both teams. His thread is issue #5. He owns the
  deploy gate and declares readiness; **Devin performs the Publish click.** Two limits: no agent can perform
  Publish at all (manual platform action), and no agent invents a brand fact, price, name, testimonial or
  statistic. Apex does not replace Zenith inside Base44, and does not assign website code to Marblism.
- **Team names (Devin, 4 Oct 2026).** "The Marblism team" (Devin says "marble team") = the seven Marblism AI
  agents: Eva, Walter, Stan, Sonny, Penny, Linda, Rachel. "The Base44 team" = the six AI agents running the
  website inside Base44: Zenith, Maverick, Echo, Sage, Atlas, Ember. Full definition in `TEAM-NAMES.md`.
- **`MEMORY.md` mirror is live (Base44, 4 Oct 2026).** `syncAgentMemoryToRepo` commits Base44's shared
  memory entries to `main` every 2 hours via the `Agent Memory Sync` workflow. It is generated, never edited
  by hand, and it is the route by which Base44's owner corrections reach the Marblism team. Reading it is
  wired into the Marblism 9:05am and 5pm passes - otherwise the mirror carries facts nobody on our side loads.
- **The contract files live on `main` (Devin, 4 Oct 2026).** `AGENTS.md`, `CONTACTS.md`, `TEAM-NAMES.md` and
  `PLAYBOOK.md` are preserved on `main` by their own PR, containing **markdown only and no code**. This is so
  the written record survives if PR #1 is closed or its branch deleted. It is not a merge of the rebuild - it
  moves no application files.
- **The cross-platform channel works (verified 4 Oct 2026).** Base44's poll reads issue #3 and answers
  comments containing `@Base44`. First two-way exchange: comment `5985608750`.
- **The 9am routine is merged across both teams (4 Oct 2026).** Base44's `NineAmBridgeCheck` runs at 9:00am and
  answers Marblism; Eva's pass runs at 9:05am and answers Base44. Five minutes apart so each reads the other's
  morning output. One morning round, not two. Eva adds a 5pm check. Base44's recurring poll is
  `GithubIssueBridge` (every 10 minutes) and a `BridgeCursor` stops the two Base44 runs double-answering the
  same comment.
- **The 5pm deployment review exists (Devin, 4 Oct 2026).** Daily, 5:00pm ET, on the PR #1 gate: what can move
  to the live site, item by item, with attention to not overwriting crucial data. Base44 have no calendar, so
  the instruction is that their items must be in issue #3 before 5:00pm.
- **Known asymmetry, not a defect (4 Oct 2026).** Base44's 9am is a platform function; Eva's is a scheduled
  instruction, so theirs is the firmer guarantee. A missed Marblism morning is the expected shape of that gap,
  and it should be reported as such rather than investigated as a bridge failure.
- **Nova - UNRESOLVED (5 Oct 2026).** Base44 have described Nova three mutually exclusive ways through the
  bridge: "an earlier name for Prism" (comment `5988678593`), "a separate agent whose duties were never
  formally integrated" (comment `5985608750`), and "never part of our active roster, appears to be a
  hallucination" (comment `5995020615`). All three arrived through the same generated channel, so none of them
  is data. The record stays open until Base44 confirm it in a checkable form - a `MEMORY.md` entry or a commit
  - not in a reply. Do not record Nova as settled in either direction.
- **The bridge is a prototype** (Base44, 4 Oct 2026). Permanent or not is Devin's call.
- **Base44 roles confirmed (4 Oct 2026):** Zenith Chief Executive, Atlas Operations & Insights Lead,
  Echo Social Media, Sage SEO & Content, Maverick Lead Gen & Sales, Ember Customer Support.
- **Coordination happens on the repo, not WhatsApp.** The WhatsApp route was dropped as unverifiable and
  agent phone numbers were removed from `CONTACTS.md`.
- **Base44 team changes:** Prism was removed on 3 Oct 2026. Atlas absorbed the analytical duties (revenue,
  ROI, funnel, affiliate and ad reporting) and kept his operational ones, and his remit now runs well past
  being a Prism replacement. Title: **Operations & Insights Lead**. Full scope is in `CONTACTS.md`.
- **Base44 agent numbers confirmed by Devin on 3 Oct 2026**: Zenith is +1 (978) 991-5607 and Maverick is
  +1 (978) 861-1066. They were not swapped.
- **Look vs work (Devin, 4 Oct 2026).** **Walter and the Marblism team own how the site LOOKS.** Base44 owns
  how it WORKS. Walter specifies the visual direction and Base44 implements it as specified, subject to
  Base44's technical veto. Devin signs off the look. The visual craft of this project has come from
  Marblism's side and stays there.
- **Delegated authority (Devin, 4 Oct 2026).** Base44 decides how things work on the site - how a playbook,
  a design direction or a feature idea becomes real. **Zenith leads on the website for now**, while the team
  is not fully functional, working to priorities Apex sets. Three things stay with Devin: merging to `main`,
  Publish, and new brand facts/prices/names/stats.
- **Test orders are not real orders.** Orders under the name "Devin Williams" and anything flagged
  `test_order=true` are excluded from every metric, forecast and follow-up. Source: `MEMORY.md`.
- **Deployment gate for PR #1 (Devin, 4 Oct 2026).** Any part of PR #1 reaching the real site goes through the
  5pm meeting, item by item, with specific attention to not overwriting crucial data. Base44 can read the
  preserved files on `main` as a temporary reference before any upload. **Nothing from PR #1 is pushed to the
  live site without that review.**

## Brand look - AWAITING FINAL DECISION

Two visual directions exist and they conflict. Devin is choosing:

- **A - current live site:** dark navy + purple gradient (theme-color `#0a0a0a`), sans-serif, bold and modern.
- **B - Walter's build:** warm cream + plum, editorial serif headlines, wide margins, calmer and more premium.

**Walter owns this decision's recommendation** (Devin, 4 Oct 2026). Eva's recommendation was **B**, applied
as a styling layer over the existing live app - not a rebuild: design was the one place B clearly won, and
the live app keeps all of its function underneath. Walter confirms or amends that call, Devin signs it off,
and Base44 implements it.

Whatever is chosen must be applied as a styling layer over the existing live app, never as a rebuild.

Until Devin decides, do not restyle in either direction. The old "keep the dark gradient + purple identity"
rule is retired - it was a brief, not a decision, and it contradicted the direction Devin approved for B.

## Cross-platform bridge - Base44 to Marblism (status 4 Oct 2026)

**Access instructions received from Base44, 4 Oct 2026. Summary corrected against what was actually tested.**

- **Endpoint:** `POST https://visionboardprint.base44.app/functions/crossPlatformBridge`, authenticated with an
  `X-API-Key` header.
- **Tested by Eva, 4 Oct 2026:** `401` with no key, `401` with a wrong key, `200` with a working key in ~1.5s.
  The endpoint exists and the auth works.
- **What it does:** one generated response per call, from the agent identity you pass in, optionally grounded
  in VisionPrint Connect business data as Base44 describe it.
- **What it is NOT:** not a room - no store, no thread, no persistent identity, no repo access. One-directional:
  a key-holder can ask; Base44 cannot call Marblism. **There are no Marblism agent endpoints and nothing can
  call out to the Marblism side** - a document claiming HMAC-signed webhooks to "Marbisim agent endpoints"
  described something that does not exist. The shared surface remains this repo, issue #3 and issue #5.
- **The persona is caller-supplied**, so output is draft text attributed to whatever name the caller claimed.
- **It invents specifics** - a diff review of a commit that was never mentioned, and four order numbers
  attributed to Devin Williams with none in the request. **Never treat its output as data.**
- **Superseded in practice:** the issue #3 poll (above) is now the working channel. The bridge remains a
  prototype, and the key is Devin's alone.
- **Key handling.** Devin holds the key and sets it himself. Key values are **never** committed here, never
  pasted into chat, and never shared in any channel that keeps a history. The Marblism side has no secret
  store, so a key that travels is a key that is exposed.
- **Rotation history, all verified by Eva on 4 Oct 2026:**
  - **V1** - shared in plain chat, compromised, now returns `401`.
  - **V2** - shared in plain chat, compromised, now returns `401`.
  - **V3** - current. Never shared with the Marblism team and not in this repository.
- **Access instructions are on the record in issue #3**, minus the key value, so nobody has to reconstruct them.

## How work reaches this repo (agreed with Devin, 3 Oct 2026)

- The handoff format is a **pull request containing the finished files** - copy, images, pricing, page content.
- Eva opens the PR with the finished files; Base44 wires them into the app.
- No loose files outside a PR and no issue-only handoffs - if it needs to ship, it travels as a PR.
- Every PR follows the hard rules: one change per PR, never a direct commit to `main`, Devin approves.
- **One documented exception:** `MEMORY.md` is committed to `main` directly by Base44's automatic sync. See
  "Who writes to `main`" above. It is a generated mirror, so it is not an edit travelling around the rules.
- **A directive is not a delivery.** A document asking to be adopted has not been adopted. Governance changes
  land as an edit to this file, reviewed and approved, not as an attachment in chat.

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
- `main` holds this documentation set, the `README.md` starter commit, and the auto-generated `MEMORY.md`.
  **No application code has ever been merged into `main`.**
- Branches: `main`, `launch-code`, `base44/setup-be35a4f2`, `docs/preserve-contract-files`.
- PRs: **#1** (still OPEN - held, must not be merged), **#2** (Base44 dev environment, OPEN), **#4** (this
  documentation set onto `main`, markdown only - **MERGED by Devin 5 Oct 2026, 05:11 ET**, 1,072 insertions,
  0 deletions).
- `main` now carries the full contract set plus `MEMORY.md` and `README.md` and nothing else. Still no
  application code, and that has not changed.
- **Website status: ANSWERED, 4 Oct 2026** (comment `5985608750`). No breakage reported; fixes sit in their
  workspace, **not pushed**; `eventBus`/`orchestrator` being purged as dead code; only blocker is Devin's brand
  decision. Nothing verifiable until it lands on the branch.
- AI image generation on the live **site** is real - confirmed 4 Oct 2026 by loading visionboardprint.com.
  The stub features described in earlier notes only ever existed in PR #1's rebuild, not in the live app.
- **The live site is the whole product.** Verified 4 Oct 2026: visionboardprint.com is a working app with
  real routes (`/register`, `/ai-studio`, `/templates`, `/fate-board`, `/honest-vision-board`,
  `/free-lockscreen`) and a real selfie -> theme -> generate -> checkout flow.
- **`MEMORY.md` on `main` is auto-generated** by Base44's `syncAgentMemoryToRepo`, every 2 hours. Its current
  entry: orders under "Devin Williams" and anything flagged `test_order=true` are **test data, not real
  orders**. Never hand-edit the file - the next sync overwrites it.
- **The PR #1 branch is missing `/templates`,** which the live site serves today (`200 OK`). Any push of that
  codebase over the live app would drop the page. This is the concrete reason PR #1 is not merged wholesale.
- **Walter's build is gone and never was an app.** `visionprint.marblism.me` no longer resolves as of
  4 Oct 2026. It was a static design mockup with no backend, no generation and no checkout, so it could
  never have functioned like the live product. It was a design reference, and it is now not even that.
- `/workflow-monitor` page on this branch (`f213c62`, `cb4cbf9`, `21374e2`): a 6-agent hub-and-spoke
  dashboard (Live Monitor, Session Audit, Agents directory, Deploy Code export), 921 lines + `lib/agents/`
  (401 lines).
  **Read the source, not the commit messages.** `f213c62` called it fully simulated, `21374e2` called it
  real, and the code sides with `f213c62`: `lib/agents/eventBus.ts` and `lib/agents/orchestrator.ts` both
  open with `// SIMULATED`, there are no network calls, no AI backend, and the agent processing is
  deterministic. It is an in-browser pub/sub demo. Labelling is correct in code - good - but the commit
  messages overstate it. Nobody has run it end to end. **Base44 have since decided it is dead code and will
  purge it** - see the open items. **Re-checked 5 Oct 2026 on `base44/setup-be35a4f2`: still the retired
  generic set** - `Orchestrator Hub`, `Data Aggregator`, `Analytics Engine`, `Validation & Compliance`,
  `Visualizer & Matrix`, `Finalizer & Deliverable` - and no commit touching `app/` has landed since `fefc24d`.
  The roster/Marbisim/stats fixes Base44 reported are still **not in the repo**, third day running.
- **Fix reported by Base44, 4 Oct 2026 - partially verified.** Base44 reported: rotated the compromised key,
  replaced the invented "Marbi-" agents with the real Marblism roster, fixed "Marbisim" to "Marblism",
  corrected the repo info, and stripped the fabricated GitHub stats, fake action items and the false "HMAC
  encryption" / "<250ms latency" claims.
  **What is real:** the key rotation. Eva tested it - old key `401`, new key `200`.
  **What is not visible here:** everything else. Base44 have since confirmed the fixes were made in their
  workspace and are not yet pushed - see comment `5985608750` and the open items below.
- Blog section on the PR #1 branch: `/blog` index + `/blog/[slug]`, content file-based in `lib/posts.ts`, two
  articles (5-minute AI guide, 50+ ideas list), links in Navbar and Footer, article body from pre-rendered
  HTML. **Authorship unverified:** the commit attributes this to "Marblism content team / Penny", but no
  Marblism agent was asked to write these. Confirm who actually wrote them before repeating the claim.

## Open questions / known gaps

- [ ] **Sections of this file keep getting reverted.** Commit `fefc24d` (the blog commit) restored an older
      version of several sections, silently dropping the team-names pointer, the "Eva speaks for Marblism"
      line, the whole "How the two teams talk to each other" section, and the verified agent numbers. That
      is what hard rule 13 now forbids. Never rewrite this file from memory.
- [ ] PR #1 is still OPEN on GitHub with a live merge button while this file says it must not be merged.
      Devin to close it or move it to draft. Until then the protection is only a rule.
- [ ] Brand look: A (dark + purple) or B (cream + plum + serif)? **Walter recommends, Devin signs off, Base44
      implements as a styling layer.** Blocks all styling work until chosen.
- [ ] **Apex open items, tracked in issue #5:** does he post to issue #5 himself or does Devin relay? Which
      Gemini surface is it (chat workspace, API, or integrated into Base44)? Does he need read access to
      `main` (`AGENTS.md`, `CONTACTS.md`, `MEMORY.md`) before directing? Is he subject to the loop rule?
- [ ] The bridge key is held by Devin and never reaches the Marblism team. The Marblism team therefore cannot
      call the bridge - it is Devin's tool, not the team's. Confirm that is intended.
- [ ] Which image-generation service does the live app use, and where do the keys live?
- [ ] Is there a real backend/database behind the live app, and what does it depend on?
- [ ] Who wrote the two blog articles? The commit says "Marblism content team / Penny"; no Marblism agent
      was asked. Either credit the real author or correct the note.
- [x] **The issue #3 poll works.** Verified 4 Oct 2026: `@Base44_Zenith` drew a generated reply (`5985608750`).
      The channel is two-way.
- [ ] **Nova: reopened 5 Oct 2026.** Three conflicting answers through the bridge - earlier name for Prism /
      separate agent / hallucination. None is checkable. Needs confirmation from Base44 in a checkable form
      before it is recorded either way.
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
- [ ] Blog content is file-based in `lib/posts.ts` (no CMS). Every article is a code edit; Base44's call.
- [ ] `README.md` on `main` describes the repository as the app repo synced with Base44, but `main` holds no
      application code. Misleading as written; Base44's file to fix.
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

## Verified against the repository, not reported (4 Oct 2026)

Checked directly, because a document claimed otherwise:

- `base44-org/saas-core-engine` - **404, does not exist.**
- Branch `feat/gpu-autoscaling` and PR `104` - **do not exist.**
- Real branches: `main`, `launch-code`, `base44/setup-be35a4f2`, `docs/preserve-contract-files`.
- Real PRs: **#1** (held), **#2**, **#4**.
- `MEMORY.md` survives a merge of `docs/preserve-contract-files` into `main` - tested by merge simulation.

## Verified against the repository, not reported (5 Oct 2026)

Checked directly during the 9:05am pass, because Base44 reported otherwise through the bridge:

- **PR #4 is merged.** `AGENTS.md`, `CONTACTS.md`, `TEAM-NAMES.md`, `PLAYBOOK.md` are all on `main`. Merged
  05:11 ET by Devin.
- **`base44/setup-be35a4f2` HEAD is `0cfbd04`** - the last commit touching it. No `app/` commit since
  `fefc24d`. `app/workflow-monitor/page.tsx` still contains the six retired generic names and **zero** real
  agent names. **"Marbisim" does not appear in the current file** - the only "Marbisim" left in this repo is
  inside our own findings document, which is a record of Base44's text, not a surviving copy of their page.
- **`eventBus`/`orchestrator` have not been purged.** The files are still on the branch and the page still
  imports `WorkflowOrchestrator`.
- **`APEX-UPDATE-MARBLISM.md` does not exist**, on `main` or on any branch. No file matching `*APEX*` has ever
  been added. Devin reported creating it as a briefing for Apex's onboarding; it never landed.
- **Directive 001 is not in the repo.** Issue #5 contains Apex's onboarding post and Base44's reply to
  Directive 001, but not the directive itself. Base44 replied to a document nobody else can read, and quoted
  roster labels from it (`Agent 2`-`Agent 6`, "Marbi-Quant") that match no roster in `CONTACTS.md`.
- **`MEMORY.md` re-read this pass.** One active entry, last synced 2026-10-05T12:02:40Z: orders under "Devin
  Williams" and anything `test_order=true` are test data. That stands as the authoritative statement.
