# IT Student Portfolio

A responsive, single-page portfolio built with Next.js App Router, React, TypeScript, CSS, and lucide-react.

## Requirements

- Node.js 20.9 or later
- npm

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To check the project before publishing:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

To run the production build locally, use `npm run start` after `npm run build`.

## Updating portfolio content

- Edit the `profileLinks` object, skills, and typed `projects` data near the top of `app/page.tsx`.
- Add only real public contact details and profile URLs. The email action and social links remain hidden until their URLs are provided.
- Set a project's `repositoryName`, `repositoryUrl`, or `liveDemoUrl` only after verifying the destination. Project links open in a new tab; unset links are not rendered as buttons.
- Replace or supplement `app/icon.svg` with a personal icon if desired. Add screenshots to `public/` only when they are available and properly licensed.
- Add a resume only when a real, current document is ready to publish.

StockPilot is described as a PHP inventory management system developed with XAMPP and MySQL/MariaDB. Its current portfolio description covers inventory CRUD workflows, related tables for activity logs and price history, and three database triggers.

## Publishing

Vercel is a straightforward option for this Next.js app:

1. Push the repository to a Git provider.
2. Import the repository in Vercel and keep the detected Next.js framework settings.
3. Use `npm run build` as the build command; no environment variables are currently required.
4. Deploy, then add a custom domain in the hosting dashboard if you have one.
5. Before sharing the URL, add real contact and project links and review the published page on mobile and desktop.

Other Node.js hosts can run the same production build with `npm run build` and `npm run start`.
