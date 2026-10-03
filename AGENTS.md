# VisionPrint — AI Vision Board Posters

## Overview
Next.js 14 (App Router) + TypeScript + Tailwind CSS. Frontend-only; AI image generation features are currently simulated with timed placeholders.

## Running locally
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
App is served on port 3000. The dev server auto-reloads on file changes.

## Architecture
- `app/` — App Router pages (landing, fate-board, honest-vision-board, free-lockscreen, register, login, ai-studio)
- `components/` — Landing page section components (Navbar, Hero, QuickStart, HowItWorks, Features, Testimonials, Pricing, FreeTools, FinalCTA, Footer)
- `docker-compose.base44.yml` — Dev environment using `node:22-slim` with bind-mounted source

## Notes
- No backend or database — auth pages are UI-only stubs that redirect to `/ai-studio`
- AI generation features (fate board, honest board, lockscreen, studio) use simulated loading states with no real AI calls
- To enable real AI image generation, an API key for an image generation service (e.g. OpenAI, Replicate) would be needed
