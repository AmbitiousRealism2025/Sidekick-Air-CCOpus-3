# Sidekick Air Landing Page

A visually stunning, production-ready landing page for Sidekick Air — the world's first inflatable therapy table. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Design Philosophy

### Aesthetic Direction: "Clinical Performance"

This landing page blends **athletic performance energy** with **clinical professionalism**. The design feels premium, innovative, and trustworthy — avoiding generic startup aesthetics.

**Key Design Choices:**

- **Typography**: Space Grotesk (display) + DM Sans (body) — distinctive without being trendy
- **Color Palette**: Graphite Charcoal, Electric Steel Blue, Burnt Copper, Arctic White
- **Motion**: Orchestrated scroll animations with staggered reveals
- **Layout**: Full-bleed hero with diagonal section transitions

### What Makes This Different

- Bold visual hierarchy that guides attention
- Atmospheric depth through layered gradients
- Purposeful micro-interactions
- Mobile-first responsive design
- WCAG AA accessible

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 15 | App Router, Server Components |
| TypeScript | Type safety, strict mode |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations |
| Kilo Deploy | Deployment target |

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, pnpm, yarn, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/sidekick-air.git
cd sidekick-air

# Install dependencies
npm install
# or
pnpm install
# or
yarn install
# or
bun install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create production build
npm run build

# Test production build locally
npm run start
```

## Project Structure

```
sidekick-air/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts, metadata
│   │   ├── page.tsx            # Landing page composition
│   │   ├── globals.css         # CSS variables, base styles
│   │   └── api/health/         # Health check endpoint
│   │
│   ├── components/
│   │   ├── sections/           # Page sections (Hero, Features, etc.)
│   │   ├── ui/                 # Reusable UI components
│   │   └── layout/             # Layout components (Navigation, Container)
│   │
│   ├── lib/
│   │   ├── fonts.ts            # Font configurations
│   │   └── animations.ts       # Framer Motion variants
│   │
│   └── types/                  # TypeScript type definitions
│
├── public/images/              # Static assets
├── next.config.ts              # Next.js configuration (standalone output)
├── tailwind.config.ts          # Tailwind theme customization
└── package.json
```

## Page Sections

1. **Hero** — Full-viewport intro with animated gradient orbs
2. **Origin Story** — Drew Freedman's journey and the paddleboard revelation
3. **Problem** — Industry pain points with visual cards
4. **Difference** — Product features and benefits grid
5. **New Standard** — Future vision with AI integration preview
6. **Sidekick Care** — App ecosystem with phone mockup
7. **Movement** — Email capture with social proof
8. **Footer** — Links and social media

## Configuration

### Environment Variables

See `.env.example` for available configuration options:

- `NEXT_PUBLIC_APP_URL` — Base URL for SEO
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — Google Analytics (optional)
- `EMAIL_SERVICE_API_KEY` — Waitlist integration (optional)

### Customization

**Colors** — Edit `tailwind.config.ts` to modify the color palette:

```typescript
colors: {
  'graphite': { DEFAULT: '#1C1C1E', ... },
  'steel-blue': { DEFAULT: '#387CFF', ... },
  'copper': { DEFAULT: '#D36C3E', ... },
  // ...
}
```

**Fonts** — Modify `src/lib/fonts.ts` to change typography:

```typescript
export const spaceGrotesk = Space_Grotesk({ ... })
export const dmSans = DM_Sans({ ... })
```

**Animations** — Adjust timing in `src/lib/animations.ts`

## Deployment

### Kilo Deploy (Recommended)

1. Push code to GitHub
2. Navigate to Kilo Deploy
3. Select repository and branch
4. Add environment variables
5. Click Deploy

The project is configured with `output: 'standalone'` for optimal Kilo Deploy compatibility.

### Other Platforms

Works with any platform supporting Next.js:

- Vercel
- Netlify
- AWS Amplify
- Railway

## Performance

Target metrics:

| Metric | Target |
|--------|--------|
| Lighthouse Performance | > 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Color contrast WCAG AA compliant
- Keyboard navigable
- Reduced motion support

## API Endpoints

### Health Check

```
GET /api/health
```

Returns:
```json
{
  "status": "healthy",
  "timestamp": "2024-12-01T00:00:00.000Z",
  "service": "sidekick-air-landing",
  "version": "1.0.0"
}
```

## Contributing

1. Create a feature branch
2. Make changes
3. Test locally (`npm run build && npm run start`)
4. Submit pull request

## License

Proprietary — All rights reserved by Sidekick Air.

---

Built with purpose for those who heal others.
