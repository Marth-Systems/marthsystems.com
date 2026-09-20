# Marth Systems Website

Production website for Marth Systems (https://marthsystems.com).

Healthcare Operations, Simplified: Provider Credentialing, Provider Enrollment, Billing, AR Management, Prior Authorization, and Patient Support.

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm (or compatible package manager)

### Installation

```bash
npm install
```

### Local Development

Start the local Vite development server:

```bash
npm run dev
```

Open the printed URL (typically `http://localhost:5173`) in your browser.

### Production Build

Create an optimized production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Code Quality & Checks

```bash
npm run lint         # Run ESLint
npm run lint:fix     # Fix lint errors automatically
npm run typecheck    # Run TypeScript checks via jsconfig.json
```

## Project Structure

- `src/`: React source code (components, pages, styles)
- `public/`: Static assets (favicons, SVG logos, manifest, robots.txt, sitemap.xml)
- `server/`: Server-side contact form handler and API adapter specification
