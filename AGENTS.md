# VisionPrint - AGENTS.md

Shared source of truth for every team working on this repo (Base44 builder, Marblism AI team, humans).
Read this before touching anything. If something here is wrong, fix this file - do not guess.

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
9. Keep the dark gradient + purple accent visual identity unless explicitly told otherwise.
10. This file is the interface between teams. If you need a decision, add it to "Open questions" -
    do not silently guess.

## Who owns what - scope split (agreed with Devin, 3 Oct 2026)

There are two teams on this project and they must not duplicate each other's work.

- **Walter (Marblism website builder) - leads website code changes.** He decides what changes on the physical
  website and specifies the edits to make.
- **Base44 builder - executes the website edits Walter specifies**, and owns the application-side
  implementation in this repository. It does not freelance, redesign or rebuild on its own initiative.
- **Marblism AI team - everything else that grows the business.** All the work that does not involve directly
  changing the physical website: content, blog, social, sales outreach, legal, inbox and email, meeting notes,
  design and marketing assets. They currently do this better, so that is where it lives.
- **Devin Williams - owner.** Final approval on every change, from either side.

The rule, in one line: **website code = Walter directs, Base44 executes. Growth work that touches no website
code = Marblism.** Nobody does both, nobody does the other's job.

## How work reaches this repo (agreed with Devin, 3 Oct 2026)

- The handoff format is a **pull request containing the finished files** - copy, images, pricing, page content.
- Marblism opens the PR with the finished files; Base44 wires them into the app.
- No loose files outside a PR and no issue-only handoffs - if it needs to ship, it travels as a PR.
- Every PR still follows the hard rules: one change per PR, never a direct commit to `main`, Devin approves.

## Current state of this repo

- Repo created 3 Oct 2026 and connected to Base44 (two-way GitHub sync, Elite plan).
- PR #1 (`base44/setup-be35a4f2`) contains a from-scratch Next.js 14 (App Router) + TypeScript + Tailwind
  rebuild of the marketing pages, generated from visionboardprint.com. It is NOT an import of the live
  Base44 app's real source. Held by Devin for review - not merged.
- AI image generation (fate board, honest board, lockscreen, studio): simulated timed placeholders.
  No real AI calls.
- Auth (`/register`, `/login`): UI-only stubs that redirect to `/ai-studio`. No backend, no database.

## Open questions / known gaps

- [ ] Was PR #1 a rebuild, or is the live Base44 app's real source supposed to land in this repo? If it was a
      rebuild, we now have two divergent codebases for one website - that is the main risk right now.
- [ ] Which image-generation service is approved, and where do the keys live?
- [ ] Is there a real backend/database, and does the live site depend on it?
- [ ] Which of the two codebases is the single source of truth for visionboardprint.com going forward?
