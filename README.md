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

- Edit the `projects` array in `app/projects.ts` to add or update curated project cards. Include a verified public repository URL, concise evidence-based description, technologies confirmed by the repository, a status, and a featured flag. Use `screenshotPath` for an image stored under `public/`; set unavailable screenshots and demo URLs to `null`.
- Add only real public contact details and profile URLs. The email action and social links remain hidden until their URLs are provided.
- Project links open in a new tab; demo buttons are shown only when a real demo URL is set.
- Replace or supplement `app/icon.svg` with a personal icon if desired. Add screenshots to `public/` only when they are available and properly licensed.
- Add a resume only when a real, current document is ready to publish.

### Manual GitHub project review

GitHub project reviews are performed only when requested; this portfolio does not monitor repositories continuously or update itself automatically. During a requested review, inspect only repositories that are accessible, compare verified repository contents with `app/projects.ts`, and recommend additions, updates, featured changes, or removals. Update the curated data only when repository details and links can be verified. Public search results do not imply access to private repositories or every repository on an account.

StockPilot is described as a PHP inventory management system developed with XAMPP and MySQL/MariaDB, including inventory workflows, activity logs, price history, and database triggers. It is not currently listed because no matching public repository was found during this review; add it to the portfolio only after its repository and details can be verified.

## Publishing

Vercel is a straightforward option for this Next.js app:

1. Push the repository to a Git provider.
2. Import the repository in Vercel and keep the detected Next.js framework settings.
3. Use `npm run build` as the build command; no environment variables are currently required.
4. Deploy, then add a custom domain in the hosting dashboard if you have one.
5. Before sharing the URL, add real contact and project links and review the published page on mobile and desktop.

Other Node.js hosts can run the same production build with `npm run build` and `npm run start`.
