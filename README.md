# Nishant Parmar: Portfolio

Personal portfolio built with React 18, TypeScript, Vite, Tailwind CSS and Framer Motion.

## Run locally

Requires Node.js 20 or later.

    npm install
    npm run dev       # dev server at http://localhost:5173
    npm run build     # type-check and build to dist/
    npm run preview   # preview the production build

## Edit content

All content lives in `src/data/portfolio.json`. Components read it through `usePortfolio()`, so most changes only touch that file:

- `profile`: name, tagline, bio, location and social links. Leave a social link empty to hide it.
- `experience`, `projects`, `certifications`, `education`, `services`, `achievements`: add, edit or remove entries.
- `testimonials`: leave empty to hide the section.

Projects with a `link` show a Live Project button, and projects with a `source` show a Source Code button.

## Structure

    src/
      components/   one file per page section
      data/         portfolio.json (all content)
      hooks/        usePortfolio.ts (typed access to the data)
      types/        portfolio.ts (TypeScript interfaces)

## Deploy

Hosted on Vercel. Import the repository in Vercel, keep the detected Vite settings (build command `npm run build`, output directory `dist`), and deploy. Each push to the main branch redeploys automatically.
