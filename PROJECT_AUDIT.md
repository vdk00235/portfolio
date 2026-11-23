# Project audit

## Architecture
- Vite 5, React 18, TypeScript and Tailwind CSS; client-side application mounted by `src/main.tsx` with `createRoot`.
- One public URL (`/`) containing hash-linked sections for home, about, skills, projects and contact. Project detail is an in-page modal, not a route.
- The interface supports English, French and Arabic through a browser-local language preference. All three variants share `/`; the language choice is not a separately crawlable URL.
- Vercel is referenced as the current hosting platform in the project brief. No Vercel or Cloudflare configuration file, redirect rule, or server rendering setup was present during inspection.
- Available scripts: `npm run build`, `npm run lint`, and `npm run typecheck`. No test script is defined.

## Existing search and accessibility setup
- `index.html` already had an English title, description, viewport, favicon, theme color and Google Fonts stylesheet hints.
- The initial React root was empty. Profile/project text was only rendered after JavaScript.
- No canonical, social preview metadata, JSON-LD, robots file, sitemap, or `llms.txt` was present.
- Project thumbnails use descriptive project names as alt text and lazy loading; most decorative icons are hidden from assistive technology.
- Public content and project descriptions are in the React bundle, so no JavaScript still limited meaningful initial HTML content.

## Findings and limits
- Existing content describes skills and six projects but does not substantiate a Chad or N'Djamena business location or the full target service list. A +235 WhatsApp number is displayed; it does not establish a street address or business location.
- No real public address, legal company details, company profile, client list, social profile beyond GitHub and Baaed, or distinct project URLs were found.
- English/French/Arabic are client-side translations. There are no language-specific routes; hreflang would therefore be misleading.
- The supplied live Vercel URL returned `NOT_FOUND` on an attempted request to `/robots.txt`. The deployment/domain mapping must be checked before search engines can reach the site. Remote live page inspection was not possible.
- Static Vite hosting can serve the one-page app and fallback metadata, but it does not provide server-rendered language variants. Search engines capable of rendering JavaScript may discover the full page after rendering.
- Project images use external postimg.cc URLs. Their availability, size and compression are controlled outside this repository.
- `VITE_BREVO_API_KEY` is read by frontend code. Any `VITE_` value is bundled into client code; it must never contain a private API secret. This audit did not read `.env` or expose credentials. Prefer a server-side mail relay if the key is secret.
- Contact card displayed `opicasoft@gmail.com` but linked to a different address; the link now matches the displayed address.

## Recommended follow-up
- Restore the Vercel project/domain mapping and verify public HTTP 200 responses for `/`, `/robots.txt`, `/sitemap.xml`, and `/llms.txt`.
- Confirm location/service-area wording and the developer/Opica Soft relationship before adding local business claims or location schema.
- Consider distinct locale routes plus server/static rendering only if maintaining separately indexed translations is desired.
- Move any private email provider credential out of client-side Vite variables.
