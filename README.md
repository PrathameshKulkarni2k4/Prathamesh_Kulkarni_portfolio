# Prathamesh Kulkarni — Portfolio

A premium, animated personal portfolio for **Prathamesh Kulkarni** — B.Tech CSE '26, GATE 2025 qualified, Full-Stack (MERN) & AI developer.

Built with **Next.js 14 (App Router)**, **Tailwind CSS** and **Framer Motion**, using hand-rolled **Aceternity UI**-style components (spotlight hero, meteors, bento grid, infinite marquee, spotlight cards, scroll-linked timeline, background beams and animated tooltips).

## ✨ Features

- **Spotlight + Meteors hero** with an animated "profile.ts" code card
- **Infinite tech-stack marquee** (pause on hover)
- **Bento grid** for highlights and a **spotlight card** layout for skills
- **Project cards** with per-project accent glow, stack badges and live/repo links
- **Scroll-linked timeline** for experience & education
- **Background beams** contact section with animated social tooltips
- Sticky glass navbar with an animated active-section pill + mobile menu
- Fully responsive, accessible (reduced-motion aware) and dark by default

## 🛠 Tech stack

| Layer      | Tech                                                    |
| ---------- | ------------------------------------------------------- |
| Framework  | Next.js 14 (App Router), React 18, TypeScript           |
| Styling    | Tailwind CSS 3                                          |
| Animation  | Framer Motion                                           |
| Icons      | lucide-react                                            |
| Utilities  | clsx + tailwind-merge (`cn`)                            |

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

## 📁 Structure

```
app/
  layout.tsx        # metadata + fonts
  page.tsx          # section composition
  globals.css       # theme, utilities, scrollbar
components/
  navbar.tsx
  footer.tsx
  sections/         # hero, about, skills, projects, experience, contact
  ui/               # Aceternity-style primitives
lib/
  data.ts           # all content in one place
  utils.ts          # cn()
```

## ✏️ Editing content

Almost everything lives in **`lib/data.ts`** — profile links, stats, skills, projects, timeline and highlights. Update that file and the whole site follows.

## ☁️ Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com) — zero config, it detects Next.js automatically.

---

Built by Prathamesh Kulkarni.
