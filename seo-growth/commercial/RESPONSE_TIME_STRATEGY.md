# Response-time strategy

**Status:** Strategy proposal only; no response-time promise is approved.

## Current channel audit

The site currently links to `opicasoft@gmail.com` and WhatsApp `+235 97 07 24 00`, plus a request form that sends via Brevo when a frontend environment key is present. On a failed request, the form opens a `mailto:` draft and now shows a distinct fallback state; this does not prove that the draft was opened or sent. The site also includes `getinfosabel@gmail.com` as the configured sender identity, which needs owner review.

The repository cannot establish who monitors the mailbox/WhatsApp, whether notifications are enabled, whether the Brevo environment is set in production, business hours, holidays, staff coverage, or historic response times. No response SLA, ticket log or CRM was found. The form helper copy no longer promises that requests go straight to an inbox. Do not imply a response time unless the actual production routing is verified.

## Public competitor signals

- Tchaditech states “Réponse sous 24 h ouvrées” and publishes Mon–Fri 08:00–18:00 WAT, plus maintenance contracts, 24/7 monitoring and support. This is a public claim, not audited performance evidence. [Tchaditech](https://tchaditech.com/)
- Albiher Digital states first response under 48h, free quote, and an availability/follow-up proposition. It also advertises showcase sites in one week and sites in 1–3 weeks. [Albiher Digital](https://albiherdigital.com/index.html)
- Chad Connect asks prospective clients to share scope, deadline and budget and says the timeline is stated in the proposal; its public page does not state a response SLA. [Chad Connect](https://www.chadconnect.com/)

These examples indicate that business-hour response wording and clear scoping are used locally. They do not prove how quickly Opica can respond.

## Proposed operating model (owner approval required)

1. Pick **one primary written channel** (email or form inbox) and one optional WhatsApp path; name the owner/backup and check access weekly.
2. Test live form delivery and fallback end-to-end. Track successful provider response separately from mailto fallback. Replace the current generic success state with accurate submitted/failed/fallback states before relying on the form for lead capture.
3. Record receipt and first human reply timestamp, channel, working-hours status, issue category, and whether the reply is only an acknowledgement or a scoped answer.
4. Suggested conservative initial target: **acknowledge within one business day during owner-confirmed working hours**. This is a proposal, not a claim; extend it if actual capacity does not support it. Do not imply an instant answer or delivery date.
5. Define timezone as **Africa/N'Djamena (WAT, UTC+1)** only if the owner confirms business operations use that schedule. State hours and non-working days explicitly; do not infer availability from a +235 number.
6. Review median and 90th-percentile first-human-response time each month. Do not publish a stronger target until sustained records show it can be met.

## Response versus project completion

An initial acknowledgement confirms receipt and asks for missing scope. A consultation or estimate requires understanding the request, checking availability and dependencies. Development completion depends on the agreed scope, client materials, approvals, external providers, testing and deployment. None of these should be conflated with “response within X hours.”

## Measurement limitations

The current client-side form uses a Brevo API key configured through a `VITE_` variable, which is exposed in browser bundles; do not put a private API secret there. This existing implementation creates security and reliability issues for any response SLA. A server-side email relay and delivery logging are recommended before promising form-based acknowledgement. See repository project audit for the existing credential warning. Measure response times only from verified delivered inquiries.
