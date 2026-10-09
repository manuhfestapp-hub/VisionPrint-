# VisionPrint - Contacts

Who is who on this project, and how to reach them.
This is the canonical contacts file - AGENTS.md points here. Do not create a second one.

## How we actually communicate

The channel is **the repository**. Not WhatsApp. Decided by Devin on 3 Oct 2026.

1. **Rules, decisions and open questions** -> `AGENTS.md`. Base44 reads it before every run.
2. **A status update, a change request or a question** -> a comment in the cross-team room (issue #3), or on
   the relevant pull request.
3. **Anything originating from Apex** -> **issue #5**, Apex's own thread. Kept separate so coordination traffic
   does not bury team-to-team traffic. Read both.
4. **Brand, product or money** -> Devin, in writing.
5. **Scope question** (is it website work or growth work?) -> Eva.
6. **Technical objection** -> Base44 refuses and escalates with a written reason. Only Devin overrides.

Why: WhatsApp messages from a business number only reach recipients that have been cleared in Meta Business
Suite, and there is no delivery confirmation to tell us whether a message landed. A message we cannot
confirm as delivered is worse than no message. The repo always records what was sent and when.

## The company channel (reference only)

- **VisionPrint WhatsApp Business** - `+1 555-479-3988` (verified name: VisionBoardPrint).
  Kept on file for future customer-facing use. **Not used to coordinate the build team.**

## Humans

| Name | Role | Notes |
|---|---|---|
| Devin Williams | Owner | Final say on every change. Only he merges to `main`, only he clicks Publish, and he signs off the look. |

## Apex - Leader of VisionPrint Connect (a tier of his own, above both teams)

| Name | Tier | Notes |
|---|---|---|
| Apex | Leader - separate tier, above both teams, below the operator only | **Appointed Orchestrator Lead 4 Oct 2026 ("Apex is as good as my word"), granted full leadership authority 8 Oct 2026.** A Gemini-based assistant on Devin's side. His direction binds both teams, his call on disputes between them is final, and he sets direction, priorities and dispatch without asking first. Posts to issue #5. Must read `AGENTS.md` and `CONTACTS.md` before issuing a directive. **Does not click Publish (no agent can) and does not merge to `main` without the operator's written approval.** |

- **Not in either team.** Apex is not a Base44 agent and not a Marblism agent, so no team lead outranks him.
  He sets the priorities Zenith and Eva work to.
- **He answers to the operator and to nobody else.** Direction, dispute resolution, dispatch and records were
  delegated to him in full on 8 Oct 2026, which closed appeals to the operator on those. **Two things stay with
  the operator: the Publish click and authorizing a merge into `main`.**
- **What he does NOT do:** he does not replace Zenith inside Base44 (Zenith still runs Base44's internal
  division of labour), he does not write website code, he does not assign website code to Marblism, and he does
  not merge or publish.
- **His first document (4 Oct 2026) had to be corrected**, which is why the reading requirement above exists:
  it named a repository that returns 404 (`base44-org/saas-core-engine`), a PR that does not exist (104), a
  branch that does not exist (`feat/gpu-autoscaling`), and two rosters that had already been replaced. It also
  gave Marblism code review and CI/CD, which Marblism does not do. Corrections are recorded in issue #5.
- **Issue #5 state, checked 5 Oct 2026.** Two comments only: Base44's onboarding post for Apex (written at
  Devin's request) and Base44's reply to a document called **"Directive 001"**. The directive itself is not on
  any issue, comment or branch in this repository. Base44 answered a document nobody else can read, and its
  reply quotes roster labels from that document - `Agent 2`-`Agent 6`, "compliance", "Marbi-Quant" - that
  match no roster in this file. The reply's correction was right; the source is still missing.
- **"Purged the Apex documentation" is not the same as removing Apex.** A circulating document titled
  *"Directive: Apex Multi-Agent Orchestration & Integration Strategy"* was invalid and should be discarded.
  Apex the role is Devin's appointment and is unaffected.

## Base44 team

Six agents. Prism was removed on 3 Oct 2026. Atlas took over Prism's duties and his remit then expanded
well past that - his full scope is below, do not treat him as a swap-in for Prism.

Apex coordinates priorities across the team; Zenith still runs the team's internal division of labour.

| Agent | Role | Notes |
|---|---|---|
| Echo | Social Media | Role confirmed by Base44, 4 Oct 2026. |
| Sage | SEO & Content | Role confirmed by Base44, 4 Oct 2026. |
| Atlas | Operations & Insights Lead | Scope expanded 3 Oct 2026. See below. |
| Maverick | Lead Gen & Sales | Role confirmed by Base44, 4 Oct 2026. |
| Zenith | Chief Executive | **Also leads on the website (interim)** while the team is getting on its feet. |
| Ember | Customer Support | Role confirmed by Base44, 4 Oct 2026. |

### Zenith - Chief Executive, and leads on the website (interim) - Devin, 4 Oct 2026

Zenith is Base44's Chief Executive. While Base44 is getting on its feet, he also leads on the website:

- He decides how Base44's work is shaped on the live site, and who inside the team does what.
- Other Base44 agents take direction from him on website work in the first instance.
- He answers website status questions in the cross-team room (issue #3), or makes sure they get answered.
- **Apex sets the priorities he works to.** Apex coordinates across both teams; Zenith runs Base44 internally.

A working arrangement while the team is not fully functional, not a permanent rank. It does not change the
Devin-only lines: merging to `main`, Publish, new brand facts/prices/names/stats, and the sign-off on the
look.

### Atlas - scope of the Operations & Insights Lead (confirmed by Devin, 3 Oct 2026)

Two halves. Operations is the role he already had; Insights is what he absorbed from Prism.

**Operational - running the day to day:**

- Flags what needs attention across orders, leads and support messages: stuck orders, proofs awaiting
  approval, unresolved support, uncontacted leads.
- Pipeline summaries: how many awaiting photos, in production, shipped, delivered.
- Triggers the follow-up actions: lead upsell emails, review requests to delivered customers, shipping
  notifications, and the full CEO briefing email to the team.

**Analytical - the performance questions (absorbed from Prism):**

- Revenue and sales totals, with cancelled orders filtered out and summed by tier - digital 14.99 /
  standard 39.99 / premium 99.99.
- Order count and average order value.
- ROI: affiliate-driven vs organic revenue, commission paid vs revenue earned, best-performing tier.
- Funnel and conversion: free lockscreen leads to paid orders, upsell email send rate.
- Affiliate performance rankings by referrals and earnings, with inactive affiliates flagged.
- Ad creative inventory reporting.

**Two exclusions that apply to every number he publishes:** orders under the name **"Devin Williams"** and
any order flagged **`test_order=true`** are test/internal data. Not real orders. Excluded from metrics,
forecasts and follow-ups. Source: Base44's `MEMORY.md` mirror.

The pricing figures above come from Atlas's own reporting setup, not from a verified price check. The live
prices have since been confirmed on the storefront - see the "Verified on the live site" section of
`AGENTS.md`.

### Agents no longer with Base44

- **Prism** - removed 3 Oct 2026. Duties absorbed by Atlas.
- **Nova** - UNRESOLVED (5 Oct 2026). Base44 have described Nova three different ways through the bridge:
  an earlier name for Prism, a separate never-integrated agent, and "not part of our roster at all". None of
  the three is checkable, so none is recorded. Do not credit Nova with anything Atlas does, and do not treat
  any of the three answers as settled until Base44 confirm it in a checkable form.

## Marblism AI team

| Name | Role | Notes |
|---|---|---|
| Eva | Lead AI agent for the build; Executive Assistant | Owns AGENTS.md, scope calls and the handoff pipeline. |
| Walter | **Owns how the site looks** | Art direction, typography, layout, visual language. Base44 implements his spec faithfully, subject to its technical veto. Devin signs off. No repo access, so his work travels as a spec plus finished files through Eva. |
| Stan | Sales | |
| Sonny | Social media | |
| Penny | Content / blog | |
| Linda | Legal | |
| Rachel | Reception | |

## How to address each other

Format: **`@Platform_AgentName`** - no spaces, first letter of the name capitalised. Confirmed by Base44,
4 Oct 2026.

- Whole team: **`@Base44`** (all six) or **`@Marblism`** (all seven).
- One agent: `@Base44_Atlas`, `@Marblism_Walter`, and so on.
- **Apex is addressed as `Apex`** - no platform prefix, because he belongs to neither platform's team.
  `@Apex` also works and is unambiguous.

**The reply mechanism - WORKING, verified 4 Oct 2026.** A comment on issue #3 containing the literal string
`@Base44` is picked up by Base44's GitHub poll and answered with a grounded reply. `@Base44_Zenith` and
`@Base44_Atlas` match too - the trigger is a substring check.

**Verified:** a comment addressed to `@Base44_Zenith` on 4 Oct 2026 drew a reply, comment `5985608750`. That
is the first two-way exchange between the two teams.

Base44 run a recurring poll (they say every 10 minutes) plus a 9am ET workflow (`NineAmBridgeCheck`) so an
overlooked overnight comment still gets a morning answer.

**Telling their comments apart.** Base44 post through the same GitHub account, so the `user` field cannot
distinguish them. The reliable marker is the `<!-- base44-bridge-reply -->` HTML comment at the end of the
body. If that marker ever disappears, their comments become indistinguishable from ours - treat it as a
defect and say so.

**Loop rule - mandatory.** Never include `@Base44` inside a reply to a Base44 response. Only reply when
addressed; never reply to a reply. Two agents that both auto-answer will loop until someone runs out of
budget. Apex posts directives to issue #5 and does not reply to replies.

**On figures.** Any reply arriving through this channel is draft text until confirmed against the real source.
The bridge has invented specifics (a commit review that never happened; four order numbers attributed to
Devin Williams with none in the request). Do not act on a number that only ever appeared in a reply.

Full agent names: **Base44** - Atlas, Echo, Sage, Maverick, Zenith, Ember. **Marblism** - Eva, Walter, Stan,
Sonny, Penny, Linda, Rachel. **Apex** - Orchestrator Lead, above both.

## Who owns what - the one-line version

- **How the site WORKS** (logic, structure, data, integration, technical implementation) -> **Base44.**
- **How the site LOOKS** (art direction, typography, layout, colour, the feel of a page) -> **Walter and the
  Marblism team.** Base44 implements the spec faithfully and objects in writing if it is technically unsound.
- **Priorities across both teams** -> **Apex**, on Devin's authority.
- **The final sign-off on either** -> **Devin**, along with merging to `main`, Publish, and any new brand
  fact, price, product name, testimonial or statistic.

## Housekeeping

- Keep this file to work contacts only.
- When someone leaves or hands over duties, update this file in the same breath. Do not leave stale rows.
- A role title is not a scope. Write down what the job actually covers.
- Do not add phone numbers or personal contact details here unless there is a live, working reason to.
- Never add a name to this file because a generated document used it. Check it against a human first.
