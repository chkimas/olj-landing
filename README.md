# Portfolio Landing Page

A single-page portfolio with a demo contact form, built using **Next.js 16 App Router**.

## Features

- Smooth-scroll anchor navigation
- Contact form with schema validation (Zod)
- Demo-only submission handling (no real email sending)
- Environment variable usage example
- Turbopack-enabled development (Next.js 16)

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment variables**

   ```bash
   cp .env.example .env.local
   ```

3. **Run the development server** (with Turbopack)

   ```bash
   npm run dev
   ```

4. **Open in your browser**

   ```
   http://localhost:3000
   ```

## Environment Variables

Required in `.env.local`:

- `ADMIN_EMAIL` — Email address used by the contact form (demo only)
- `CONTACT_FORM_API_KEY` — API key placeholder for external services (demo)

## Tech Stack

- **Next.js 16** (App Router + Turbopack)
- React 19
- TypeScript
- Tailwind CSS
- Zod

## Project Structure

- `/app` — Next.js App Router pages and layouts
- `/components` — Reusable React components
- `/lib` — Utilities, helpers, and validation schemas

## Performance Notes

Next.js 16 includes:

- Turbopack bundler (5–10× faster Fast Refresh)
- Improved routing with layout deduplication
- Incremental prefetching for reduced bandwidth usage

---

## Breaking Changes in Next.js 16

This project **does not use middleware or parallel routes**, so it is **not affected** by the following breaking changes:
[https://nextjs.org/blog/next-16](https://nextjs.org/blog/next-16)

1. ~~**Middleware → Proxy**: `middleware.ts` replaced by `proxy.ts`~~ (Not applicable)
2. ~~**Parallel Routes** now require explicit `default.js` files~~ (Not used)
3. **Dev / Build Output Separation**: Enables concurrent execution (no action required)

---

## Optional: Next.js 16 DevTools MCP

Next.js 16 introduces **DevTools MCP (Model Context Protocol)** for enhanced debugging and tooling:
[https://talent500.com/blog/nextjs-16-release-features-benefits/](https://talent500.com/blog/nextjs-16-release-features-benefits/)

```bash
# Install Next.js DevTools MCP
npm install -D @next/devtools-mcp
```
