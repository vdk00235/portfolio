# Keyword mapping — SEO Phase 2

## Existing page

The site currently has one crawlable route, `/`, with five in-page sections (home, about, skills, projects and contact). The language selector swaps copy in browser state; it does not create separately addressable English, French or Arabic documents. Assigning a different SEO title/H1 to a section does not make that section a standalone landing page.

| Page/status | Primary keyword suggestion | Secondary suggestions | Search intent |
|---|---|---|---|
| `/` existing profile + portfolio | Mahamat Mahamat Tahir full-stack developer | personal portfolio; web and mobile developer; React; React Native; Flutter; FastAPI; Node.js | Find/assess a developer and inspect work |
| `/contact` new, dedicated contact route | Contact Opica Soft / Contact Mahamat Tahir | email; WhatsApp; project inquiry; contact us | Reach the developer or start a project |
| `/` French UI (not a separate indexable URL) | Mahamat Mahamat Tahir développeur full-stack | portfolio développeur; développement web et mobile; React Native; Flutter; FastAPI | French profile discovery |
| `/` Arabic UI (not a separate indexable URL) | محمد محمد طاهر مطور متكامل | مطور تطبيقات الويب والهواتف; Flutter; React Native; FastAPI | Arabic profile discovery |
| `/` local intent (conditional) | full-stack developer in Chad / développeur full-stack au Tchad / مطور متكامل في تشاد | N'Djamena variants; mobile and web development | Local discovery; use only after service geography is confirmed |

## Proposed pages — not created

These should become distinct URLs only after each has original information beyond a short keyword landing page. Proposed URL examples are illustrative and require route/build support and indexable rendering.

| Proposed page | Primary | Secondary | Build when |
|---|---|---|---|
| `/about/` or `/en/about/` personal profile | Mahamat Tahir software developer | biography, approach, verified experience, Chad only if confirmed | Personal history, experience, focus and links can be written first-hand |
| `/services/mobile-app-development/` | mobile app development | Flutter, React Native, cross-platform apps | Service scope, process, deliverables, supported platforms and real examples are confirmed |
| `/services/backend-development/` | backend development | FastAPI, Node.js, REST API, integrations | Specific backend scope, architecture/process and project evidence are available |
| `/services/ai-development/` | AI application development | relevant methods, integrations, evaluation | Substantial AI capability and an original, accurately described example exist; currently unsupported |
| `/projects/{project-slug}/` | project name + project type | stack, use case, contribution, outcomes | Each project has original case-study facts, publishable screenshots/demo, role and permission details |
| `/services/` (Opica Soft) | Opica Soft software development services | web/mobile/backend services; local modifiers conditionally | Brand ownership/relationship, actual offerings, team/organization identity, contact and service area are verified |

Do not publish empty stubs. A page should explain the audience/problem, the developer's actual role, approach, technologies where relevant, constraints, outcome supported by evidence, and next step. Separate locales should use stable locale URLs and genuinely translated page content; then use reciprocal `hreflang` and matching canonical URLs. Do not add `hreflang` to the current same-URL language toggle.

## Existing page metadata and headings

Implemented on `/`: localized browser title/description update with the chosen UI language; descriptive single H1 names Mahamat and his full-stack role; the static English document has equivalent initial title, description and H1 for no-JS parsing. The main section headings remain About, Technologies & Skills, Featured Projects and Contact, with project titles as H3. Existing navigation links connect these sections and CTA links guide visitors to projects/contact. No unsupported location or AI claim was inserted.

## Structured data and language

Existing `Person` and `Organization` JSON-LD remain limited to known name, role, technologies, brand contact and public profiles. Do not attach a `LocalBusiness` address, `areaServed`, geo coordinates, review, rating, client list or business registration without evidence. Consider `ProfilePage` only for a future dedicated person profile; Google's guidance says that markup fits a page primarily about one person, while a mixed homepage is not usually a profile page ([Google Search Central: ProfilePage](https://developers.google.com/search/docs/appearance/structured-data/profile-page)).

The current browser language switch sets `html lang` and direction and changes metadata in the client. It is not a substitute for distinct crawlable language URLs. Current canonical remains `/`.

## Metadata and outline specifications

These recommendations describe existing `/` and possible future URLs; only the homepage metadata/H1 behavior was implemented in this phase. Titles and descriptions are unique per locale/page. Future examples that include a location are conditional on owner confirmation.

| URL/language | SEO title | Meta description | H1 | H2/H3 outline |
|---|---|---|---|---|
| `/` English (implemented default) | Mahamat Mahamat Tahir \| Full-Stack Developer Portfolio | Portfolio of Mahamat Mahamat Tahir, a full-stack developer building web and mobile applications with React, React Native, Flutter, FastAPI and Node.js. Explore selected projects and contact Opica Soft. | Mahamat Mahamat Tahir — Full-Stack Developer | H2 About Me; Technologies & Skills; Featured Projects; Get In Touch. H3 per project and contact methods. |
| `/fr/` proposed | Mahamat Mahamat Tahir \| Développeur full-stack | Portfolio de Mahamat Mahamat Tahir, développeur full-stack d’applications web et mobiles avec React, React Native, Flutter, FastAPI et Node.js. Découvrez ses projets et contactez Opica Soft. | Mahamat Mahamat Tahir — Développeur full-stack | H2 Profil; Compétences techniques; Projets sélectionnés; Contact. H3 per project. |
| `/ar/` proposed | محمد محمد طاهر \| مطور متكامل | معرض أعمال محمد محمد طاهر، مطور متكامل لتطبيقات الويب والهواتف باستخدام React وReact Native وFlutter وFastAPI وNode.js. استكشف المشاريع وتواصل مع Opica Soft. | محمد محمد طاهر — مطور متكامل | H2 نبذة عني; المهارات التقنية; مشاريع مختارة; تواصل معي. H3 per project. |
| `/about/` or `/en/about/` proposed | About Mahamat Mahamat Tahir \| Software Developer | Read Mahamat Mahamat Tahir’s developer profile, verified experience, technical focus and professional links. | About Mahamat Mahamat Tahir | H2 Background; Development approach; Technologies; Professional profiles. H3 only for meaningful subsections. |
| `/services/mobile-app-development/` proposed | Mobile App Development \| Mahamat Mahamat Tahir | Explore mobile app development with Flutter and React Native, the supported platforms, delivery process and relevant project examples. | Mobile App Development with Flutter and React Native | H2 Suitable projects; Platforms and scope; Process; Relevant work; FAQs/contact. H3 only where the actual offer supports them. |
| `/services/backend-development/` proposed | Backend and API Development \| Mahamat Mahamat Tahir | Learn about backend and API development using FastAPI and Node.js, including confirmed integration scope, delivery process and project evidence. | Backend and API Development | H2 Backend scope; API integrations; Security/operations (only claims with evidence); Process; Projects; Contact. |
| `/services/ai-development/` proposed, defer | AI Development \| Opica Soft (only if true brand relation) | Describe concrete AI application work, evaluation, limitations and safeguards after verified experience exists. | AI Application Development | H2 Use case; Approach; Evaluation; Data and limitations; Case study; Contact. Do not publish before substantial evidence exists. |
| `/projects/{project}/` proposed per case study | `{Project name}: {actual project type} \| Mahamat Mahamat Tahir` | `{Project name}` case study: the problem, Mahamat's verified contribution, implementation approach and evidenced outcome. | `{Project name}` — `{project type}` | H2 Context; Role; Solution; Technical approach; Outcome/status; Links. H3 technical areas where useful. |
| `/services/` proposed Opica Soft | Opica Soft \| Software Development Services | Describe only the software services, delivery process, verified organization details and contact information Opica Soft actually provides. | Software Development Services by Opica Soft | H2 Services (each real offer as H3); How work is delivered; Work examples; About the organization; Contact. |

Use internal links with descriptive labels: homepage profile → relevant skill section; skill/project → related case study/service where available; each service/case study → related evidence and contact; all locale siblings → corresponding translated page. Do not cross-link to empty proposed pages. Existing page already links in-page via the nav and project/contact calls to action.

For an eventual locale route, set the document's actual `lang` and direction, self-canonical to that locale URL, reciprocal `hreflang` (including `x-default` if a maintained selector page exists), translated visible content, and localized title/description. Use `Person`/`Organization` only where they accurately describe the page. A dedicated profile can consider `ProfilePage` with `mainEntity: Person`; a service page can consider `Service` with a real provider only when its public content supports it. No local schema until real place/service geography is confirmed. Do not use AI schema or testimonials without visible verifiable content.
