# AGENTS.md

## Project Context

This is the independent Marth Systems website repository (https://marthsystems.com).
It is a standard React application built with Vite, Tailwind CSS, Lucide icons, and Framer Motion.

## Key Files

- `src/`: frontend application source code.
- `src/pages/`: public page routes (`Home`, `Credentialing`, `Billing`, `Contact`, etc.).
- `src/components/`: reusable layout, navigation, footer, and UI components.
- `server/contact-handler.js`: server-side contact form validation and department routing logic.
- `vite.config.js`: Vite build configuration and local development setup.

## Working Notes

- Use `npm run dev` to start the local development server.
- Use `npm run build` to compile the production bundle.
- Keep changes focused on the user's request, preserving existing design and routing conventions.
- Never hardcode secrets or email credentials in client-side code.
- Contact form routing is enforced server-side.
