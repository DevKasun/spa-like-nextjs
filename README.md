# GymFit — Workout Showcase Dashboard

A dark, green-themed **Next.js** dashboard that showcases gym workouts in detail. Every exercise is presented in a card with a custom SVG human figure that visually highlights the **target muscle groups**, so you can see at a glance which muscles a movement works.

![Theme](https://img.shields.io/badge/theme-deep%20black%20%2B%20green-22c55e)

## Features

- **Workout cards** — each exercise shows:
  - a front/back SVG human figure with the **main muscle** glowing green and **secondary muscles** in light green,
  - the workout name (e.g. *Bench Press*),
  - the **main muscle** and **secondary muscle(s)** as badges,
  - category and difficulty tags.
- **Live search** — filter workouts by name or by muscle (searches main + secondary muscles).
- **Quick filters** — one-click chips for **Arms, Chest, Back, Shoulders, Legs** and **Core** (plus *All*).
- **Data loaded from an API** — the dashboard fetches workout data from a built-in API route (`/api/workouts`) with skeleton loading, empty, and error states.
- **Deep black + green theme** — all styling lives in a single `app/globals.css`.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, TypeScript, Turbopack)
- [React 19](https://react.dev)
- [pnpm](https://pnpm.io)

## Project Structure

```
app/
├── api/workouts/route.ts      # API endpoint serving the workout data
├── components/
│   ├── body-figure.tsx        # SVG human figure with highlightable muscles
│   ├── workout-card.tsx       # Single workout card
│   └── workout-dashboard.tsx  # Search + filters + grid (client component)
├── lib/
│   └── workouts.ts            # Workout data model & dataset
├── globals.css                # All application styles
├── layout.tsx                 # Root layout & metadata
└── page.tsx                   # Dashboard page
```

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the dashboard.

## Workout Data

Workouts are defined in `app/lib/workouts.ts` and served through the `GET /api/workouts` route handler:

```
GET /api/workouts
→ { "workouts": Workout[], "total": number }
```

Each workout follows this shape:

```ts
type Workout = {
  id: string;
  name: string;            // e.g. "Bench Press"
  category: Category;      // chest | back | shoulders | arms | legs | core
  mainMuscle: MuscleGroup; // chest | back | shoulders | biceps | triceps | forearms | abs | quads | hamstrings | glutes | calves
  secondaryMuscles: MuscleGroup[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
};
```

To add a new workout, just append an entry to the `workouts` array — the dashboard and muscle-map highlights update automatically.

## Useful Commands

```bash
pnpm dev      # start the development server
pnpm build    # create a production build
pnpm start    # serve the production build
pnpm lint     # run ESLint
```

## Deploy on Vercel

The easiest way to deploy this app is the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for details.
