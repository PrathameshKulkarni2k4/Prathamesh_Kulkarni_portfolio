# Prathamesh Kulkarni — Portfolio

A refined, recruiter-focused personal portfolio for **Prathamesh Kulkarni** — B.Tech CSE '26, GATE 2025 qualified, Full-Stack & AI engineer.

Built with **Next.js 14 (App Router)**, **Tailwind CSS** and **Framer Motion**.

## Design direction

Deliberately restrained. A near-black monochrome base, a single electric-lime accent used sparingly, and typography doing the heavy lifting — Inter for the interface, Instrument Serif italic for emphasis, JetBrains Mono for labels and metadata. The motion is quiet: scroll reveals, a magnetic CTA, a cursor-trailing light and a film-grain overlay.

The reasoning: a hiring manager skims a portfolio for under a minute. Loud gradients and constant animation read as *template*; restraint, clarity and fast scanning read as *senior engineering taste*.

## Structure of the page

| Section | What it does |
| --- | --- |
| Hero | Name, current role and company, one-line pitch, resume CTA, and four scannable proof points |
| Work | Project list — title, category, outcome bullets, stack and live/code links, all visible without clicking |
| About | Positioning paragraph plus a facts table and "beyond the code" list |
| Stack | Six grouped columns of tools |
| Experience | Internships and education as a clean two-column list |
| Contact | Email, phone, location and social links |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build && npm run start
```

## Structure

```
app/
  layout.tsx        # metadata + fonts
  page.tsx          # section composition
  globals.css       # design tokens, utilities, grain, marquee
components/
  navbar.tsx
  footer.tsx
  sections/         # hero, work, about, stack, experience, contact
  ui/               # reveal, magnetic, marquee, section-label, cursor-glow
lib/
  data.ts           # ALL content lives here
  utils.ts          # cn()
```

## Editing content

Everything editable is in **`lib/data.ts`** — profile, proof points, projects, skills, timeline and nav. Change that one file and the whole site follows.

The resume is committed at **`public/Prathamesh_Kulkarni_Resume.pdf`** and served from the site root at `/Prathamesh_Kulkarni_Resume.pdf`. Replace that one file to update the download link everywhere.

## Deploy

The site builds to a fully static `out/` directory (`output: "export"` in `next.config.mjs`), so it can be hosted anywhere — Vercel, Netlify, GitHub Pages, S3.

Push to GitHub and import on [Vercel](https://vercel.com). `vercel.json` sets `outputDirectory: "out"`, which means the deploy works as a plain static site and does **not** depend on the project's framework preset being set to Next.js. Functions (if ever added) run in Mumbai (`bom1`).

---

Built by Prathamesh Kulkarni.
