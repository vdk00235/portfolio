# Customer communication policy — proposed

**Draft for owner review. Not an approved public policy.**

## Channels shown on the current portfolio

- Email: `opicasoft@gmail.com`
- WhatsApp: `+235 97 07 24 00`
- Request form: uses Brevo when configured; code currently falls back to an email draft if sending fails.

Confirm each channel is monitored, the receiving account is correct, attachments arrive, and an owner/backup can respond. The repository shows inconsistent addresses in the email sender and fallback text; resolve this before publishing a service-level commitment.

## Proposed policy fields to approve

- Public working days/hours and timezone
- First-human-response target and exceptions (weekends, holidays, leave, high workload)
- Whether the target applies to WhatsApp, direct email and the website form equally
- What counts as an acknowledgement, consultation, estimate or technical support response
- Expected project update frequency once contracted
- Which language(s) are supported for commercial correspondence
- How customer files and confidential information should be shared
- Escalation contact if the primary channel fails

## Recommended wording after confirmation

Use neutral language such as “We review project enquiries during [approved hours]. We aim to acknowledge complete enquiries within [owner-approved target]. Acknowledgement is not a project quote or delivery commitment; timing depends on the requested scope and availability.” Do not publish bracketed fields before approval. Do not call support “24/7” unless a staffed service genuinely exists.

## Enquiry form improvements before any promise

The form previously marked a failed Brevo call as sent after opening a mailto draft. It now distinguishes the fallback state and tells the visitor to review and send the email draft; this still cannot prove that the email was sent. The translated helper copy no longer promises that a request goes straight to the inbox or promises a quick reply. Move any private Brevo credential to a server-side function before production reliance. No response-time analytics exist; an owner-managed timestamp log is the lowest-friction baseline.
