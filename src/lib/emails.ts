export interface RequestDetails {
  name: string;
  email: string;
  description: string;
  images: File[];
  otherFiles: File[];
}

export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result ?? '');
      const base64 = result.includes(',') ? result.split(',')[1] : result;
      resolve(base64);
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export function buildRequestEmailHtml(details: RequestDetails): string {
  const { name, email, description, images, otherFiles } = details;

  const imageBlocks = images
    .map((_, i) => {
      return `<div style="margin-bottom:10px;">
        <img src="cid:img-${i}" width="100%" style="display:block;width:100%;border-radius:8px;border:1px solid #e2e8f0;" />
      </div>`;
    })
    .join('');

  const attachmentRows = otherFiles
    .map(
      (f) => `<tr>
        <td style="padding:8px 12px;border:1px solid #e2e8f0;border-radius:8px;color:#334155;font-size:14px;">
          &#128206; ${escapeHtml(f.name)}
        </td>
      </tr>`
    )
    .join('');

  return `<!doctype html>
<html dir="ltr">
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 40px rgba(15,23,42,0.10);">
          <tr>
            <td style="background:#2563eb;background:linear-gradient(90deg,#2563eb 0%,#0891b2 100%);padding:28px 32px;">
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">New Project Request</h1>
              <p style="margin:6px 0 0;color:#dbeafe;font-size:13px;">Opica Soft &middot; Portfolio</p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <table cellpadding="0" cellspacing="0" style="width:100%;">
                <tr>
                  <td style="padding-bottom:24px;">
                    <p style="margin:0 0 6px;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#64748b;">From</p>
                    <p style="margin:0;font-size:17px;color:#0f172a;font-weight:600;">${escapeHtml(name)}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:24px;">
                    <p style="margin:0 0 6px;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#64748b;">Email</p>
                    <p style="margin:0;font-size:16px;color:#2563eb;">${escapeHtml(email)}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:24px;">
                    <p style="margin:0 0 6px;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#64748b;">Request</p>
                    <p style="margin:0;font-size:15px;line-height:1.7;color:#334155;white-space:pre-line;word-break:break-word;">${escapeHtml(description)}</p>
                  </td>
                </tr>
                ${
                  imageBlocks
                    ? `<tr>
                        <td style="padding-bottom:24px;">
                          <p style="margin:0 0 10px;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#64748b;">Images</p>
                          ${imageBlocks}
                        </td>
                      </tr>`
                    : ''
                }
                ${
                  attachmentRows
                    ? `<tr>
                        <td>
                          <p style="margin:0 0 10px;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#64748b;">Attachments</p>
                          <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:separate;border-spacing:0 6px;">${attachmentRows}</table>
                        </td>
                      </tr>`
                    : ''
                }
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px;border-top:1px solid #e2e8f0;background:#f8fafc;">
              <p style="margin:0;font-size:12px;color:#94a3b8;">
                Sent via the Opica Soft portfolio. This is an automated notification — please do not reply to this address.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}