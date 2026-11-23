# Contact sitelink readiness report

**Prepared:** 23 November 2026  
**Website:** https://alfa-opica.vercel.app/  
**Deployment:** Source changes only; no deployment was performed.

## Implemented

- Added a dedicated Vite multi-page route at `/contact` using `contact/index.html` and a React entry point. The page has a static, crawlable English contact heading, introduction and email/WhatsApp links before JavaScript runs, then renders the existing design and shared multilingual controls.
- Added localized Contact Us labels and page introduction in English, French and Arabic. Existing client-side language selection also updates the contact page title and description. There are no separate locale URLs, so this remains one URL with the site's current language-switch behavior.
- Added a unique `<title>`, meta description, Open Graph title/description/URL, self-canonical, `index, follow`, and initial `lang="en"` metadata for `/contact`.
- Added a `ContactPage` JSON-LD entity with a project-inquiry `ContactPoint` using the email and WhatsApp number already displayed on the site. Updated the existing homepage `Organization` JSON-LD `contactPoint` to match those visible channels. No LinkedIn profile was found; none was invented. `availableLanguage` was omitted because a translated interface does not verify human response-language coverage.
- Added `/contact` to the sitemap and contact discovery section in `public/llms.txt`.
- Added visible descriptive links in the main navigation, homepage contact section, homepage footer, skills section and project-detail modal. There are no standalone service or project pages in this application; the skills section and project modal link to the contact page instead of creating artificial pages.
- Reused the existing project request form. Failed provider delivery is shown as a fallback, never as successful submission. Visitors are told that the email draft may not open and given the visible direct email address.

## Contact details and data limits

- Email shown publicly: `opicasoft@gmail.com`.
- WhatsApp shown publicly: `+235 97 07 24 00` (`https://wa.me/23597072400`). It was already present in the existing site source and static homepage fallback.
- LinkedIn: not found in the current project; not added.
- Contact form: existing Brevo client-side integration, conditional on its environment variable, with mailto fallback. The source reads `VITE_BREVO_API_KEY`, which is exposed to the browser if configured. No secret was inspected. Before using the form as a reliable service commitment, move private credentials to a server-side relay and verify production delivery end-to-end. The fallback cannot confirm that a draft was opened or sent.
- The site's existing Organization schema identifies “Opica Soft,” but the broader legal/operating relationship remains an owner-confirmation item in `seo-growth/commercial/COMMERCIAL_FACTS_TO_CONFIRM.md`. This change adds only the public contact fields shown in the UI; it does not add an address, hours, legal registration, or unsupported language-availability claims.

## Validation performed

- `npm run build`: succeeded; the build generated both `dist/index.html` and `dist/contact/index.html`.
- `npm run typecheck`: succeeded.
- `npm run lint`: succeeded with two existing `react-refresh/only-export-components` warnings in `LanguageContext.tsx` and `ThemeContext.tsx`; no lint errors.
- Local Vite preview returned HTTP 200 for `/`, `/contact`, and `/contact/`.
- The generated contact HTML includes its unique title, description, canonical, indexability directive, contact links and ContactPage JSON-LD. Sitemap membership and JSON-LD consistency were checked against the built files.
- No production deployment or live production `/contact` check was performed because deployment was explicitly excluded. The 200 responses above are local preview results; the public host will not serve the new route until the owner deploys these changes.
- External-provider delivery, actual email/WhatsApp ownership, and all external links cannot be proven from a local build. No LinkedIn link was added.

## Google sitelink expectations

Google says sitelinks are automated and based in part on site link structure. Helpful practices include a logical structure, informative page titles/headings, concise relevant anchor text, links to important pages and avoiding repetition. Google may omit sitelinks when it does not consider them useful. A dedicated contact route improves the site's navigational clarity; it **does not guarantee** a Contact sitelink or its display for any query. See [Google Search Central: Sitelinks](https://developers.google.com/search/docs/appearance/sitelinks).

## Remaining owner/deployment actions

1. Verify the email inbox and WhatsApp number are currently monitored and approved as public contacts.
2. Move any private Brevo API credential to server-side infrastructure and verify a real inquiry reaches its destination.
3. Review the Organization relationship and contact-point details in structured data.
4. Deploy the site, then check `https://alfa-opica.vercel.app/contact`, canonical, sitemap and robots accessibility in production; submit/inspect the URL in Search Console if available.
5. Allow Google to recrawl and decide whether the page is useful enough to show as a sitelink. No manual sitelink selection control exists.
