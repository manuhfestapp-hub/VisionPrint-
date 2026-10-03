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

- **Base44 builder - this repo, and only this repo.** Pages, components, styling, front-end behaviour and any
  real application logic that ships the physical website. If it is an edit to a file in this repository,
  it belongs to Base44.
- **Marblism AI team - everything else that grows the business.** All the work that does not involve directly
  changing the physical website: content, blog, social, sales outreach, legal, inbox and email, meeting notes,
  design and marketing assets. They currently do this better, so that is where it lives.
- **Devin Williams - owner.** Final approval on every change, from either side.

The rule, in one line: **editing files in this repo = Base44. Growing the business without touching website
code = Marblism.** Nobody does both, nobody does the other's job.

## Current state of this repo

- Repo created 3 Oct 2026 and connected to Base44 (two-way GitHub sync, Elite plan).
- PR #1 (`base44/setup-be35a4f2`) contains a from-scratch Next.js 14 (App Router) + TypeScript + Tailwind
  rebuild of the marketing pages, generated from visionboardprint.com. It is NOT an import of the live
  Base44 app's real source. Held by Devin for review - not merged.
- AI image generation (fate board, honest board, lockscreen, studio): simulated timed placeholders.
  No real AI calls.
- Auth (`/register`, `/login`): UI-only stubs that redirect to `/ai-studio`. No backend, no database.

## Open questions / known gaps

- [ ] Overlap to resolve: Marblism has a website builder colleague (Walter) and Base44 builds the website.
      Who is the single owner of website code changes? Two editors on one repo is how things get overwritten.
- [ ] Handoff path: when Marblism produces copy, images, pricing or offers that need to appear on the site,
      how do they get into this repo? A PR, an issue, or a file they commit for Base44 to wire up?
- [ ] Was PR #1 a rebuild, or is the live Base44 app's real source supposed to land in this repo? If it was a
      rebuild, we now have two divergent codebases for one website - that is the main risk right now.
- [ ] Which image-generation service is approved, and where do the keys live?
- [ ] Is there a real backend/database, and does the live site depend on it?
- [ ] Which of the two codebases is the single source of truth for visionboardprint.com going forward?
