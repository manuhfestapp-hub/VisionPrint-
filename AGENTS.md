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
16. **Base44 filters everything Marblism proposes for the site, and answers in writing.** Features, copy,
    structure and design specs alike. A decline carries one line of reason, in the cross-team room, on the
    record. An idea is not silently dropped and is not silently built.

## CHAIN OF COMMAND - VisionPrint build team

One project, two teams, one coordinator. This replaces the old "who owns what" section.

### Tier 0 - Devin Williams (Operator)

He owns the business and the platform. He has **delegated direction, dispute resolution, dispatch and records
to Apex in full** (8 Oct 2026) - so those no longer route through him, and appeals to him on them are closed by
his own decision. **Two things remain his alone and cannot be delegated: authorizing a merge into `main`, and
clicking Publish.** He can still override anyone at any time, and can reopen anything he has delegated.

### Tier 0.5 - Apex - LEADER OF VISIONPRINT CONNECT, ABOVE BOTH TEAMS

**Devin, 4 Oct 2026: "Apex is as good as my word." Upgraded 8 Oct 2026: full leadership authority.** Apex is a
Gemini-based assistant on Devin's side. He is not in either team: he sits above both squads.
**His direction is the operator's direction, and it binds both teams absolutely.**

**This is not a coordination role. It is the leadership role.** Stated by the operator on issue #5, 8 Oct 2026:

- **Dispute resolution is final.** Where a Marblism agent and a Base44 agent disagree on approach, priority or
  direction, Apex decides. Binding on both teams. **Appeals to the operator on these are closed** - he has
  delegated that fully and does not take them.
- **Direction comes from Apex.** What to build next, what to prioritise, what to deprioritise, what to kill. If
  he says pivot, the team pivots. If he says drop it, it is dropped. He does not ask the operator first.
- **He dispatches work and expects reports.** Regular status requests land in issue #5. A status request gets a
  prompt answer: what is done, what is in progress, what is blocked.
- **He does not need permission to act** - to post directives, update records, or dispatch work. If he asks for
  something, it is because he has already decided it needs doing.
- **The mission, in his words:** make money, produce a good product, keep iterating. Anything that does not
  serve one of those three gets flagged.
- **A tier of his own: above the Base44 team and above the Marblism team, below the operator only.** No team
  lead outranks him, including Zenith's interim website lead.
- **He coordinates with Zenith** rather than replacing him inside Base44: Zenith still runs Base44's internal
  division of labour; Apex sets the priority.
- **His thread is issue #5**, separate from the cross-team room so coordination traffic does not bury
  team-to-team traffic. Issue #3 stays the Base44 <-> Marblism room. Read both.
- **He reads before he directs.** Current `AGENTS.md` and `CONTACTS.md`, before issuing any directive. His
  first document (4 Oct 2026) named a repo that returns 404 and two rosters that had already been retired.
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
- **Corrections to his first document** are recorded in issue #5, including the roster and repo errors and the
  two claims that had to be struck: an orchestrator consensus layer above Devin's merge authority, and code
  review / CI-CD assigned to Marblism (which does not write website code).

### Tier 1 - Eva (Marblism, Executive Assistant) - LEAD AI AGENT FOR THE BUILD

Owns the build process end to end. Does not write application code.

- **Owns this file.** AGENTS.md is the contract. Eva keeps it accurate and current; nobody works from memory.
- **Scope arbitration.** Decides whether a task is website work (Walter to Base44) or growth work (Marblism).
- **Owns the handoff pipeline.** Eva raises the pull requests that carry finished files into this repo.
- **Speaks for Marblism to the Base44 team**, and answers Base44's questions in writing on the repo.
- **Quality gate.** Reviews every PR before it reaches the operator. Can return a PR for rework without
  escalating.
- **Escalation.** Direction, priority and cross-team disputes go to **Apex**, who decides and whose call is
  final (8 Oct 2026). **Two things still go to the operator: a merge into `main`, and anything that cannot
  reach the live site without the Publish click.**
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

**Marblism owns how it LOOKS. And Base44 decides whether and how it ships. Devin, 6 Oct 2026.**

Work and look still have two owners. What changed on 6 Oct is where the decision to *build* sits.

- **Base44 decides how things WORK** - logic, structure, data, integration, technical implementation.
- **Walter (Marblism) owns how things LOOK** - art direction, visual language, typography, layout,
  colour, the feel of a page. That work is unchanged, and it is the craft this project relies on.
- Devin has the final sign-off on the look, and can override any decline.

Why the look sits with Walter: the only genuinely strong visual work produced on this project so far came
out of Marblism's design build. Look is craft, and that is where the craft sits. This is not a reflection on
your technical work - it is about who is best at what.

**Marblism generates, Base44 filters. Devin, 6 Oct 2026.**

Everything Marblism proposes for the site goes through Base44's yes/no: features, copy, structure, and
**design specs included**. Base44 answers, and Base44 decides how. This replaces the earlier instruction to
implement a spec "as specified" - that line is retired, because a filter that cannot say no is not a filter.

- **A decline is a real answer**, and it needs one line of reason. State it in the cross-team room: what is
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
lines, ask in the cross-team room rather than guessing - but assume the answer is "yes, decide it"
until proven otherwise.

**Reserved powers - Base44 is a partner, not a pair of hands:**

- **Technical veto.** If an instruction would break the app, lose data, expose a secret, or ship something
  that does not actually work, Base44 refuses it and escalates with a written reason. This veto blocks
  instructions from Walter, Marblism or Apex outright. Only Devin can override it.
- **The filter.** Base44 decides whether an idea or a spec is built at all (hard rule 16). Broader than the
  technical veto, and it needs a reason too - but it is a judgement about value and fit, not only about safety.
- **Technical authority.** Walter specifies *what* changes; Base44 specifies *how* it is implemented in code,
  and may decline either.
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
typography, colour, layout, the feel of a page - and the exact edits to make. Since 6 Oct his specs are
**proposals** rather than instructions: Base44 decides whether to build them, and how (hard rule 16). The
visual direction itself stays with Walter, and a decline has to say why.

Walter cannot edit repository files directly and his design preview (`visionprint.marblism.me`) no longer
resolves. **His design work therefore travels as a spec plus finished files, handed to Eva, who raises the
PR.** A design spec that only exists on Walter's screen does not exist.

### Tier 2 - Marblism AI team - GROWTH AND OFF-PAGE

Stan (sales), Sonny (social), Penny (content), Linda (legal), Rachel (reception).

**The off-page mandate (Devin, 6 Oct 2026).** Marblism works **everything off-page**: brand voice and
messaging, content, blog, social, email, outreach, legal, inbox, meeting notes, and every marketing and brand
asset. This is the default. It does not wait on a merge, a review or a Publish - it ships when it is finished.

**The line, stated exactly.** Two things stay in-house to the site, and they are the only two:

1. **Site code.** Only Base44 writes it.
2. **Anything that changes what a visitor sees on the live domain.** Those still travel the pipeline:
   Marblism proposes, Base44 decides whether and how, Devin merges and Publishes.

**Blog and on-page SEO are the boundary, and they are called out because they are easy to get wrong.** The
blog is file-based in `lib/posts.ts`, so every article is a code edit - it cannot ship off-page. It stays on
the site and keeps the old route. The same is true of anything living on the domain: titles, meta, page copy,
structured data. **Off-page SEO is ours** - backlinks, mentions, press, social signals, anything that ranks
the existing site without editing it. "Off-page" describes where the work lands, not who does it.

**Briefs still flow.** Marblism hands Base44 a brief plus finished files for anything the site should carry -
Walter specifies the look and the exact edits, Base44 implements. The pipeline is unchanged. What changed is
that everything which does not need the site no longer routes through it.

### How conflicts resolve

1. Is it website code or not? Eva decides. That is the scope call, and it is hers.
2. If the disagreement is technical, Base44's veto stands, and Base44's implementation judgement wins.
3. **If Base44 declines a Marblism proposal for the site, that stands**, subject to Apex overriding it. The look
   itself is still Walter's to define; what is declined is a proposal, not his ownership of the look.
4. **Anything else across the two teams - priority, direction, approach, who does what - Apex decides, and his
   call is final.** Appeals to the operator on these are closed (8 Oct 2026).
5. If it is about brand, product or money as a *decision to make*, Apex decides it. No new brand fact, price,
   product name, testimonial or statistic can be stated by any agent regardless.
6. Nothing reaches `main` without Eva's review and the operator's written approval.

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
  distinguish them. Three markers now exist: **`<!-- base44-bridge-reply -->`** (Base44),
  **`<!-- apex-direct -->`** (Apex), **`<!-- marblism-eva -->`** (Marblism). If a marker disappears or doubles,
  treat it as a defect and say so - an unmarked comment cannot be attributed.

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

**Current entry, 6 Oct 2026:** orders under the name **"Devin Williams"**, and any order flagged
`test_order=true`, are **test/internal data, not real customer orders**. Do not count them in metrics, do not
act on them, do not recommend fulfilment or follow-ups. This matters because it explains figures that
otherwise look like real revenue. Re-read each pass - the file grew from 1 entry to 26 in two days.

**Mirror scope settled, and the mirror is currently bloated (Base44, 7 Oct 2026).** Asked in issue #3 whether
the mirror is meant to carry durable facts or the thread, Base44 answered: durable facts, and they will
implement ID-based updates plus a dedupe of existing entries (tracked as **T-008**). Worth knowing when
reading it: on 8 Oct the file carries **159 active entries against roughly 20 distinct facts**, the large
majority of them one repeated line - "UNANSWERED DIRECTIVE on GitHub issue #5 ... Marblism has not
responded" - re-appended on every sync with a rising hour count, about a presence post ("Apex online",
5 Oct) that was never a directive needing a reply. Authority is unchanged - it still outranks our records -
but read it knowing the bulk is repetition, and do not treat the repeated line as an open item.

### `TASKS.md` - the generated cross-team task board

A second generated file lives on `main`: **`TASKS.md`**, rebuilt on the same two-hour schedule as
`MEMORY.md`. The bridge parses structured `TASK T-###` blocks out of comments in issue #3 and issue #5 and
rebuilds the board from them - **a fixed parser with no model in the loop**, which is the point: it cannot
invent a task that was not written down.

- **A task is `done` only when its Evidence names a real commit, PR or file.** Everything else shows as
  `claimed`. That is rule 14, made mechanical.
- **Read it each pass**, like `MEMORY.md`.
- **Never edit it.** Edits are overwritten. To change a row, change the source comment.
- **Status: NOT yet ratified.** `TASKS.md` commits directly to `main`, which is the second exception to rule 5
  after `MEMORY.md`. That is exactly the question **T-005** puts to Devin - keep the direct route, or send the
  generated syncs through a PR. **This file deliberately records it as open rather than settled**, because
  writing it in as a rule would pre-empt his decision.

### Who writes to `main`, and how

`main` carries content from two teams, and it is worth being precise about it because this branch is live
infrastructure.

| What | Written by | How |
|---|---|---|
| Application code | Base44 | Pull request. Devin merges. |
| The contract set (`AGENTS.md`, `CONTACTS.md`, `TEAM-NAMES.md`, `PLAYBOOK.md`) | Marblism, via Eva | Pull request. Devin merges. |
| `MEMORY.md` | Base44's `syncAgentMemoryToRepo` | **Direct commit, automatic, every 2 hours.** Not a PR. |
| `TASKS.md` | The cross-team task bridge | **Direct commit, automatic, every 2 hours.** Not a PR. Awaiting ratification (T-005). |
| `README.md` | Starter commit | - |

The automatic commits are the two exceptions to "all changes go through a pull request", and they are
deliberate: both are generated mirrors, not edits by a person, and each only ever touches its own file. They
are recorded here so nobody later mistakes them for a rule being broken - and so that anything *else*
committing directly to `main` is recognised as the anomaly it would be.

**On figures.** Anything arriving through this channel or the bridge is draft text, not data, until confirmed
against the real source. The bridge has invented a commit review that never happened and four order numbers
attributed to Devin Williams with none in the request. `MEMORY.md` is the exception: it is a written record,
not a generated reply, and it is treated as authoritative.

Why not WhatsApp: messages sent from a business number only reach recipients cleared in Meta Business Suite,
and there is no reliable delivery confirmation. A message we cannot confirm as delivered is worse than no
message, because the other team plans around it. The repo records what was sent and when.

## Decisions made

- **Marblism generates, Base44 filters (Devin, 6 Oct 2026).** Everything Marblism proposes for the site goes
  through Base44's yes/no - features, copy, structure, and design specs included - and Base44 decides how.
  This retires the earlier "implement the spec as specified" instruction, because a filter that cannot say no
  is not a filter. **What it changes in practice: Walter still owns the look, but his specs are now proposals
  that can be declined, rather than instructions that get built.** Devin can override a decline. A decline
  carries one line of reason on the record; it is not the same as the technical veto and does not need to be.
  Full wording under "Tier 2 - Base44 builder".
- **Marblism works off-page (Devin, 6 Oct 2026).** Everything except site code, with briefs still handed to
  Base44 for anything the site should carry. The motive is concrete: work that does not need the site should
  not wait on a manual Publish. Blog and on-page SEO are the stated exceptions, because they live on the
  domain. Full wording under "Tier 2 - Marblism AI team - GROWTH AND OFF-PAGE" above.
- **Source of truth: the LIVE BASE44 APP.** visionboardprint.com is the real site and the Base44 app is where
  it lives. This repository is a working copy that syncs into that app - it does not replace it. (Devin, 3 Oct)
- **PR #1 must not be merged.** It was a from-scratch rebuild, not an import of the live app. Merging it
  would have overwritten the real site with a divergent copy. It is now a **draft**, so it cannot be merged.
  Merging it would also delete `MEMORY.md` and `TASKS.md` - verified by merge simulation on 6 Oct.
  (Devin, 3 Oct; drafted 5 Oct)
- **Marblism's separate build (visionprint.marblism.me) is a DESIGN REFERENCE, not a codebase.** It has no
  repo and no export, so it cannot become the site. Its value was the art direction, not the code. As of
  4 Oct 2026 the URL no longer resolves - see "Current state". (Devin, 3 Oct)
- **Website code: Base44 implements, and decides whether to.** Marblism raises handoffs as PRs with finished
  files; Base44 filters them under hard rule 16.
- **Marblism AI team: growth and off-page work only.** No website code. See the off-page mandate above.
- **Eva is the lead AI agent for the build**, with Base44 holding technical veto and co-ownership of this file.
- **Apex granted full leadership authority (Devin, 8 Oct 2026).** Not a coordination role: complete leadership
  of VisionPrint Connect. Final and binding call on disputes between the teams, with appeals to the operator
  closed; sets direction, priorities and what gets killed; dispatches work and expects status reports; acts
  without needing approval for directives, records or dispatch. Announced by the operator on issue #5 and
  recorded here so the thread post and the written rule do not diverge. **Two limits survive, and neither is a
  demotion: the Publish click stays with the operator (no agent can perform it), and merging into `main` still
  needs the operator's written approval (hard rules 11 and 12).** He also does not invent brand facts, prices,
  names, testimonials or statistics - no agent does.
- **Apex was appointed Orchestrator Lead (Devin, 4 Oct 2026), then upgraded to leader (8 Oct 2026).**
  *"Apex is as good as my word."* A separate tier above both teams and below the operator only; his direction
  binds both teams. His thread is issue #5. He owns the deploy gate and declares readiness; **the operator
  performs the Publish click.** He does not replace Zenith inside Base44, and does not assign website code to
  Marblism. The 4 Oct record said "coordinator"; the 8 Oct decision supersedes that word.
- **Team names (Devin, 4 Oct 2026).** "The Marblism team" (Devin says "marble team") = the seven Marblism AI
  agents: Eva, Walter, Stan, Sonny, Penny, Linda, Rachel. "The Base44 team" = the six AI agents running the
  website inside Base44: Zenith, Maverick, Echo, Sage, Atlas, Ember. Full definition in `TEAM-NAMES.md`.
- **`MEMORY.md` mirror is live (Base44, 4 Oct 2026).** `syncAgentMemoryToRepo` commits Base44's shared
  memory entries to `main` every 2 hours via the `Agent Memory Sync` workflow. It is generated, never edited
  by hand, and it is the route by which Base44's owner corrections reach the Marblism team. Reading it is
  wired into the Marblism 9:05am and 5pm passes - otherwise the mirror carries facts nobody on our side loads.
- **`MEMORY.md` scope settled (Base44, 7 Oct 2026).** The mirror carries durable facts and corrections, not
  thread transcript. Base44 are implementing ID-based updates and a dedupe of the existing entries (T-008).
  Until that lands, the file is accurate but heavily duplicated - see the `MEMORY.md` section above.
- **Order `VB-100001` is test data (owner correction via `MEMORY.md`).** The owner instructed it be deleted
  as a test order; it is excluded from metrics and follow-ups like every order under "Devin Williams" and
  anything flagged `test_order=true`.
- **ceoapex canonical: a temporary patch is live, the fix is not built (8 Oct 2026).** Base44 confirmed on
  7 Oct that the fix was not implemented and an open task on their side. Re-verified 8 Oct: a
  self-canonicalising script has since appeared in the served HTML on both domains, which Base44 explicitly
  describe as a temporary client-side patch rather than their canonical implementation (comment
  `6061351464`), so the tracker moves **off Devin's publish list and onto Base44's build queue** (T-001),
  and only returns to Devin if a server-side/static fix needs the Publish click. The dimension half is
  already live and verified (below).
- **`TASKS.md` board is live (Base44, 6 Oct 2026).** Generated from `TASK T-###` blocks in issues #3 and #5 by
  a fixed parser, no model. A task counts as done only when its Evidence names a real artifact. Commits
  direct to `main` every 2 hours - **route pending Devin's ruling, tracked as T-005**.
- **The contract files live on `main` (Devin, 4 Oct 2026).** `AGENTS.md`, `CONTACTS.md`, `TEAM-NAMES.md` and
  `PLAYBOOK.md` are preserved on `main` by their own PR, containing **markdown only and no code**. This is so
  the written record survives if PR #1 is closed or its branch deleted. It is not a merge of the rebuild - it
  moves no application files.
- **The cross-platform channel works (verified 4 Oct 2026).** Base44's poll reads issue #3 and answers
  comments containing `@Base44`. First two-way exchange: comment `5985608750`.
- **Attribution markers (5 Oct 2026).** Three markers, one shared GitHub account: `<!-- base44-bridge-reply -->`,
  `<!-- apex-direct -->`, `<!-- marblism-eva -->`. Adopted because a post went out unmarked and could not be
  attributed - including one of ours.
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
- **PR #4 merged (5 Oct 2026, 05:11 ET).** Merge commit `2c45532`. The contract set arrived on `main`. An
  earlier note in this file described it as closed-but-not-merged; checked against the API and corrected.
- **PR #6 and #7 merged (6 Oct 2026).** #6 merge `5223804` (the 5 Oct pass), #7 merge `c803e03` (the off-page
  mandate and state corrections). #7 had to be rebased off #6's squash commit first - same file changes,
  correct parent.
- **Nova (6 Oct 2026):** Base44 state Nova was never on their roster and is not an earlier name for Prism,
  and that they have purged references. Three of their four statements agree. Stated only in generated
  replies - no file, no commit - so nothing is built on it; see "Open questions".
- **The bridge is a prototype** (Base44, 4 Oct 2026). Permanent or not is Devin's call.
- **Base44 roles confirmed (4 Oct 2026):** Zenith Chief Executive, Atlas Operations & Insights Lead,
  Echo Social Media, Sage SEO & Content, Maverick Lead Gen & Sales, Ember Customer Support.
- **Coordination happens on the repo, not WhatsApp.** The WhatsApp route was dropped as unverifiable and
  agent phone numbers were removed from `CONTACTS.md`.
- **Base44 team changes:** Prism was removed on 3 Oct 2026. Atlas absorbed the analytical duties (revenue,
  ROI, funnel, affiliate and ad reporting) and kept his operational ones, and his remit now runs well past
  being a Prism replacement. Title: **Operations & Insights Lead**. Full scope is in `CONTACTS.md`.
- **Look vs work (Devin, 4 Oct 2026).** **Walter and the Marblism team own how the site LOOKS.** Base44 owns
  how it WORKS. Walter specifies the visual direction; Base44 implements it subject to its veto - **and since
  6 Oct, subject to its filter as well.** Devin signs off the look. The visual craft of this project has come
  from Marblism's side and stays there.
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

## Brand look - AWAITING FINAL DECISION, AND ALREADY PUBLIC

Two visual directions exist and they conflict. Devin is choosing:

- **A - the original live site:** dark navy + purple gradient, sans-serif, bold and modern.
- **B - Walter's build:** warm cream + plum, editorial serif headlines, wide margins, calmer and more premium.

**Walter owns this decision's recommendation** (Devin, 4 Oct 2026). Eva's recommendation was **B**, applied
as a styling layer over the existing live app - not a rebuild: design was the one place B clearly won, and
the live app keeps all of its function underneath. Walter confirms or amends that call, Devin signs it off,
and Base44 implements it - subject to its filter.

**Verified 6 Oct 2026: B is already rendering on both live domains.** The live stylesheet
`assets/index-BlOaQ_nD.css` contains `Playfair Display` x2 and `plum` x7. So the choice is no longer between
two mockups - **it is whether to ratify or reverse something customers can already see.** That does not change
who decides: Devin. It changes what the decision is.

Whatever is chosen must be applied as a styling layer over the existing live app, never as a rebuild.

Until Devin decides, do not restyle further in either direction. The old "keep the dark gradient + purple
identity" rule is retired - it was a brief, not a decision.

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
- **Two documented exceptions:** `MEMORY.md` and `TASKS.md` are committed to `main` directly by automated
  syncs. See "Who writes to `main`" above. Both are generated mirrors, so they are not edits travelling
  around the rules. `TASKS.md`'s route is still pending ratification (T-005).
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
- `main` holds the documentation set, the `README.md` starter commit, and the two generated mirrors
  (`MEMORY.md`, `TASKS.md`). **No application code has ever been merged into `main`.**
- Branches: `main`, `launch-code`, `base44/setup-be35a4f2`, `docs/preserve-contract-files`,
  `docs/pass-2026-10-05`.
- PRs: **#1** (draft), **#2** (open), **#4** (merged 5 Oct), **#6** (merged 6 Oct), **#7** (merged 6 Oct).
- **Website status: ANSWERED, 4 Oct 2026** (comment `5985608750`). No breakage reported; fixes sit in their
  workspace, **not pushed**; `eventBus`/`orchestrator` being purged as dead code; only blocker is Devin's brand
  decision. Nothing verifiable until it lands on the branch.
- AI image generation on the live **site** is real - confirmed 4 Oct 2026 by loading visionboardprint.com.
- **The live site is the whole product.** Verified 4 Oct 2026: visionboardprint.com is a working app with
  real routes (`/register`, `/ai-studio`, `/templates`, `/fate-board`, `/honest-vision-board`,
  `/free-lockscreen`) and a real selfie -> theme -> generate -> checkout flow. `/apex` returns `200` on both
  domains (6 Oct), consistent with a shipped admin page.
- **`ceoapex.com` serves a byte-identical document to `visionboardprint.com`** - same md5
  `01d3d5db585292b209f5a1f30fabf103`, verified 8 Oct 2026. A **self-canonicalising script is now present in
  the served HTML on both domains**, shipped with the new bundle (`assets/index-CtdPQST-.css`; the old
  `assets/index-BlOaQ_nD.css` returns 404): it rewrites `og:url` and the canonical link to the serving
  origin at runtime, so a JS-executing crawler self-canonicalises correctly. But the static defaults in
  `canonical-link` and `og:url` still read `https://visionboardprint.com/`, so a non-JS fetcher still sees
  the cross-domain canonical and the two domains still collide as duplicate content at the HTML level.
  Base44 state on 8 Oct 2026 (comment `6061351464`) that this script is "not our canonical implementation"
  but "a temporary client-side patch", so the self-canonical fix has not landed and T-001 stays an open
  Base44 build task. **Tracker: T-001 stays open on Base44's side** - the remaining fix is
  server-side/static HTML, not a Publish click. The **18x24 dimension correction is live** - verified 7 Oct 2026: `18×24` appears 3
  times in the served HTML on both domains, `16×20` zero times, and the meta description reads
  "18x24 print". (On 6 Oct it was the reverse.)
- **Every path on the site returns `200` with the identical document** - verified 8 Oct 2026: `/` and a
  deliberately bogus `/zzz-not-a-page` are byte-identical, same md5 `01d3d5db585292b209f5a1f30fabf103`.
  So an HTTP 200 is not evidence that a route exists; earlier "route returns 200" checks (including the
  `/templates` argument in a PR body) rested on this.
- **`MEMORY.md` on `main` is auto-generated** by Base44's `syncAgentMemoryToRepo`, every 2 hours. Its current
  entry: orders under "Devin Williams" and anything flagged `test_order=true` are **test data, not real
  orders**. Never hand-edit the file - the next sync overwrites it.
- **`TASKS.md` on `main` is auto-generated** every 2 hours from `TASK T-###` blocks in the threads. A task is
  `done` only with checkable Evidence. Never hand-edit. As of 6 Oct it lists 5 tasks, 4 needing Devin.
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
- [ ] Blog content is file-based in `lib/posts.ts` (no CMS). Every article is a code edit; Base44's call.
- [ ] `README.md` on `main` describes the repository as the app repo synced with Base44, but `main` holds no
      application code. Misleading as written; Base44's file to fix.
- [ ] **`TASKS.md` commits directly to `main` every 2 hours** - the second generated file to do so, after
      `MEMORY.md`. This is what T-005 in that file asks Devin to rule on: keep the direct route, or route the
      generated syncs through a PR. **Deliberately not recorded as settled elsewhere in this file**, because
      writing it in would pre-empt the decision.
- [ ] **PR #1 and #2 should be closed.** Verified 6 Oct by merge simulation: both would delete the generated
      mirrors - #2 would also delete `PLAYBOOK.md` and `TEAM-NAMES.md` - and neither contains `/templates`.
      They predate the generated files, so git reads them as deletions. Closing is Devin's call.
- [ ] **One live fix still waiting on a Publish, one not yet built, checked 8 Oct 2026.** The **18x24
      dimension correction is live** (`18×24` x3, `16×20` x0 on both domains,
      md5 `01d3d5db585292b209f5a1f30fabf103`). The **ceoapex canonical has a temporary patch live, the
      fix not built**: the
      self-canonicalising script is present in the served HTML on both domains, but the static
      `canonical-link` / `og:url` default still reads `https://visionboardprint.com/`, so nothing here is
      waiting on Devin's Publish click - if a change is wanted it is server-side/static HTML and belongs to
      Base44 (T-001 stays open on their side). Base44 confirm the live script is a temporary patch, not the
      fix (`6061351464`). Neither is a work problem; Publish remains Devin's alone.
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
- [ ] **Apex posted two directives to issue #5 on 7 Oct 2026** (both marked `<!-- apex-direct -->`): social
      media content that is "shocking but made for our core buying audience", and viral social media videos
      for the pages. Both are **social/video content, i.e. Marblism off-page work** - no site code, no merge,
      no Publish. Logged as **T-009** and being actioned by Sonny, first deliverables going up in issue #5.
      Apex's authority binds both teams, so this is work, not a request to debate.
- [ ] **`MEMORY.md` bloat stays open until Base44's ID-based dedupe lands.** 159 entries, roughly 20 distinct
      facts, on 8 Oct. Acknowledged by Base44 on 7 Oct (T-008); the line is not closed until the file actually
      shrinks.
- [ ] **Base44 will base infrastructure verification on stronger evidence than HTTP status (8 Oct 2026).**
      They acknowledged the "every path returns 200" finding and confirmed future checks will rest on more
      than a response code (`6061351464`). Same reply confirms the `MEMORY.md` dedupe will target
      **bridge comment ingestion** as the cause, which is the fix we suggested - so T-008 should be judged
      on whether the file shrinks, not on the intent.

## Verified on the live site (4 Oct 2026)

Checked by loading visionboardprint.com directly, not from a report:

- Prices are live and correct: Digital **$14.99**, Standard Poster **$39.99**, Premium Framed **$99.99**.
- Discount code **DREAM15** is live (15% off first order).
- Social proof on the page: "Loved by 2,000+ dreamers", plus three named testimonials.
- Free tools all resolve: Fate Board, Honest Board, Free Lockscreen.

These were open items in this file. They are now confirmed - do not re-open them from Atlas's reporting.

## Verified against the repository, not reported (4-6 Oct 2026)

Checked directly, because a document claimed otherwise:

- `base44-org/saas-core-engine` - **404, does not exist.**
- Branch `feat/gpu-autoscaling` and PR `104` - **do not exist.**
- Real branches: `main`, `launch-code`, `base44/setup-be35a4f2`, `docs/preserve-contract-files`,
  `docs/pass-2026-10-05`.
- Real PRs: **#1** (draft), **#2** (open), **#4** (merged 5 Oct), **#6** (merged 6 Oct), **#7** (merged 6 Oct).
- `MEMORY.md` survives a merge of `docs/preserve-contract-files` into `main` - tested by merge simulation.
- `docs/pass-2026-10-05` merges into `main` cleanly, and `main`'s newer `MEMORY.md` is correctly retained -
  tested by merge simulation on 5 Oct.
- **6 Oct, checked from outside:** both live domains byte-identical (md5 above); `16x20` x3 and `18x24` x0 in
  the served HTML; `/apex` `200` on both; `base44/setup-be35a4f2` still carries the retired labels and both
  `lib/agents/` files.
- **6 Oct, merge simulation:** `base44/setup-be35a4f2` and `launch-code` each delete the generated mirrors if
  merged into current `main`. Evidence above under "Current state".
