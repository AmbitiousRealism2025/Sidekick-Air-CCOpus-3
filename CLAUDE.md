# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sidekick Air landing page — a Next.js 15 marketing site for an inflatable therapy table product.

## Commands

```bash
npm run dev          # Start dev server at localhost:3000
npm run build        # Create production build (standalone output)
npm run start        # Run production server
npm run lint         # ESLint check
```

## Architecture

### Tech Stack
- **Next.js 15** with App Router and Server Components
- **TypeScript** in strict mode
- **Tailwind CSS v3** with custom theme
- **Framer Motion** for animations
- Configured for **standalone output** (Kilo Deploy compatible)

### Project Structure
```
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts (Space Grotesk, DM Sans)
│   │   ├── page.tsx            # Landing page - composes all sections
│   │   ├── globals.css         # CSS variables, base styles
│   │   └── api/health/route.ts # Health check endpoint
│   ├── components/
│   │   ├── sections/           # Page sections (Hero, Problem, Difference, etc.)
│   │   ├── ui/                 # Reusable components (Button, FeatureCard, AnimatedText)
│   │   └── layout/             # Navigation, Container
│   ├── lib/
│   │   ├── fonts.ts            # next/font configurations
│   │   └── animations.ts       # Framer Motion variants
│   └── types/index.ts          # Shared TypeScript types
├── tailwind.config.ts          # Custom colors (graphite, steel-blue, copper, arctic, mist)
└── next.config.ts              # standalone output enabled
```

### Design System

**Colors** (defined in `tailwind.config.ts`):
- `graphite` — Dark foundation (#1C1C1E)
- `steel-blue` — Primary accent/CTAs (#387CFF)
- `copper` — Warm accent (#D36C3E)
- `arctic` — Light backgrounds (#F7F8FA)
- `mist` — Neutral (#E2E2E4)

**Typography**:
- `font-display` — Space Grotesk (headlines)
- `font-body` — DM Sans (body text)

**Animation Variants** (`src/lib/animations.ts`):
- `fadeInUp`, `fadeIn`, `scaleIn` — Standard reveals
- `staggerContainer` — Parent for staggered children

### Page Sections Flow
Hero → OriginStory → Problem → Difference → NewStandard → SidekickCare → Movement → Footer

### Key Patterns

**Scroll Animations**: Use `SectionWrapper` component with Framer Motion's `whileInView` for scroll-triggered reveals.

**Responsive Design**: Mobile-first with Tailwind breakpoints (`md:`, `lg:`, `xl:`).

**Component Props**: UI components use TypeScript interfaces from `src/types/index.ts`.
