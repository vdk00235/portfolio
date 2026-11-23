# SEO Phase 2 report — keyword ranking strategy

**Website:** <https://alfa-opica.vercel.app/>  
**Prepared:** 23 November 2026

## Outcome

Implemented conservative on-page improvements on the existing single-page React portfolio. The hero H1 identifies Mahamat and his full-stack role in the selected interface language. The default HTML title/description and client-side English/French/Arabic title, description and social title/description now describe the developer and technologies actually shown. The existing design, sections, routes, animations, form, language selector, theme control, project search/filter/modal and external integrations were left in place.

Created the five requested planning files:

- `KEYWORD_RESEARCH.md` — keyword suggestions grouped by person, skill/service and language; separates unmeasured suggestions from real metrics and cites current local wording examples.
- `KEYWORD_MAPPING.md` — existing URL mapping and recommended mappings for future pages.
- `CONTENT_STRATEGY.md` — current-page review, useful page roadmap, content depth requirements, heading/internal-link guidance and genuine authority ideas.
- `LOCAL_SEO_STRATEGY.md` — verified location/contact facts, safe local SEO actions, and owner questions.
- `SEO_PHASE2_REPORT.md` — this implementation and next-step summary.

## What research did and did not establish

Search-result review found real Chad/N'Djamena wording examples around mobile, Flutter, full-stack and web development. These support natural-language phrase suggestions only. No reliable Chad-targeted keyword volume, organic competition/difficulty or ranking data was obtained; the keyword research document labels all candidate phrases as suggestions and invents no metrics. Google's Keyword Planner can provide location/network/range-specific average-monthly-search estimates; its competition measure is advertiser competition, not organic SEO difficulty ([Google Ads metrics](https://support.google.com/google-ads/answer/3022575?hl=en)).

The provided public URL could not be retrieved by the web page inspection tool. This report does not assert live deployment health or search-index status. Existing project audit material also records a prior Vercel `NOT_FOUND` observation; deployment mapping still needs an owner-side check.

## Important limits and next actions

- The site is still one URL. Language choices update browser metadata and `html lang`, but crawlers do not get separate, persistent French and Arabic URLs. Locale-specific titles do not replace static/pre-rendered translated routes.
- No AI development service or AI case study is evidenced. AI keywords appear in the research inventory only and are not implemented as page claims.
- No Chad/N'Djamena residence, business address, service area, Opica Soft legal status/relationship, customer list, testimonials or registrations were invented or added. Confirm facts in `FACTS_TO_CONFIRM.md` before targeting local-business/service keywords or adding location schema.
- The proposed profile, mobile, backend, AI, case-study and Opica Soft service pages are recommendations only. No thin pages were created. Each has a substantial-content threshold and page map in the strategy files.
- GitHub and Baaed links already exist. LinkedIn, project repositories/demos, case studies and client testimonials require genuine profiles, evidence and publishing permissions.
- Search visibility depends on crawlable hosting, useful original content, external reputation and user intent; metadata alone does not guarantee rankings.

## Manual follow-up checklist

1. Verify the deployed homepage and `/robots.txt` and `/sitemap.xml` return the intended public content; connect the intended Vercel project/domain if needed.
2. Confirm facts in `FACTS_TO_CONFIRM.md`, especially the real location/service area and Opica Soft identity.
3. If the facts support it, publish substantial service/case-study content and then choose route architecture with static/pre-rendered language URLs for the translations that will be maintained.
4. Use Google Keyword Planner with Chad and each language selected to collect dated metrics; submit only relevant terms. Set up Search Console and review actual query data after site verification.
5. Improve genuine GitHub/LinkedIn profiles, publish project evidence and request truthful, consented testimonials.

## Commercial search module

The pricing, positioning, response, delivery, warranty and commercial-intent research is maintained in [`seo-growth/commercial/`](seo-growth/commercial/). It extends the SEO/GEO work with dated source-backed competitor research and multilingual buyer-intent hypotheses. It found no Opica price list, operating-hours policy, response log, delivery history or warranty terms; proposed business policies remain unpublished pending owner approval. The factual AI-search file [`public/llms.txt`](public/llms.txt) now explicitly marks these commercial details as unknown and avoids turning proposals into company claims. The contact form also now distinguishes mail-draft fallback from successful submission.

The dedicated contact-page and sitelink-readiness changes are documented in [`seo-growth/CONTACT_SITELINK_REPORT.md`](seo-growth/CONTACT_SITELINK_REPORT.md). The static contact route is in the Vite build and linked from the site's navigation and relevant sections. Google chooses sitelinks automatically; page structure only improves readiness and cannot guarantee selection.

## Validation

The original Phase 2 SEO content work was not separately built or deployed at the time. For the contact-page feature, `npm run build` and `npm run typecheck` succeeded; `npm run lint` had no errors and two Fast Refresh warnings. Local preview, contact metadata/canonical, sitemap membership, JSON-LD consistency, internal contact destinations and fragment targets were checked. No deployment or live-site mutation was performed.
