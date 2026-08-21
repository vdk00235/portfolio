import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { Send, Paperclip, X, Mail, User2, FileText, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { BREVO_CONFIG, EmailAttachment } from '../config';
import { buildRequestEmailHtml, fileToBase64 } from '../lib/emails';

interface FormErrors {
  name?: string;
  email?: string;
  description?: string;
}

type SubmitStatus = 'idle' | 'sending' | 'sent' | 'error';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function RequestForm() {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!name.trim()) next.name = t.contact.form.required;
    if (!email.trim()) next.email = t.contact.form.required;
    else if (!EMAIL_REGEX.test(email.trim())) next.email = t.contact.form.validEmail;
    if (!description.trim()) next.description = t.contact.form.required;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? []);
    setFiles(prev => [...prev, ...selected]);
    e.target.value = '';
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    if (!BREVO_CONFIG.apiKey) {
      console.error('RequestForm: VITE_BREVO_API_KEY is missing. Make sure .env exists and the dev server was restarted.');
      setStatus('error');
      return;
    }

    const images = files.filter(f => f.type.startsWith('image/'));
    const otherFiles = files.filter(f => !f.type.startsWith('image/'));

    try {
      const htmlContent = buildRequestEmailHtml({
        name: name.trim(),
        email: email.trim(),
        description: description.trim(),
        images,
        otherFiles,
      });

      const payload: {
        sender: typeof BREVO_CONFIG.sender;
        to: typeof BREVO_CONFIG.to;
        subject: string;
        htmlContent: string;
        attachment?: EmailAttachment[];
      } = {
        sender: BREVO_CONFIG.sender,
        to: BREVO_CONFIG.to,
        subject: `Project Request — ${name.trim()}`,
        htmlContent,
      };

      if (files.length > 0) {
        const attachment: EmailAttachment[] = [];

        for (let i = 0; i < images.length; i++) {
          const image = images[i];
          attachment.push({
            content: await fileToBase64(image),
            name: image.name,
            contentType: image.type || 'image/png',
            contentId: `img-${i}`,
          });
        }

        for (const file of otherFiles) {
          attachment.push({
            content: await fileToBase64(file),
            name: file.name,
            contentType: file.type || 'application/octet-stream',
          });
        }

        payload.attachment = attachment;
      }

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);

      let response: Response;
      try {
        response = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': BREVO_CONFIG.apiKey,
            accept: 'application/json',
          },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });
      } finally {
        clearTimeout(timeout);
      }

      if (!response.ok) {
        const detail = await response.text();
        console.error(`RequestForm: Brevo API error ${response.status}:`, detail);
        throw new Error(`Brevo API error: ${response.status}`);
      }

      setStatus('sent');
    } catch (error) {
      console.error('RequestForm: send failed:', error);
      openMailToFallback();
      setStatus('sent');
    }
  };

  const openMailToFallback = () => {
    const fileList = files.length
      ? files.map(f => `- ${f.name}\n`).join('')
      : '- none';

    const subject = encodeURIComponent(`Project Request — ${name.trim()}`);
    const body = encodeURIComponent(
      [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        '',
        `Description:`,
        description.trim(),
        '',
        `Attachments:`,
        fileList.trim(),
      ].join('\n')
    );

    window.location.href = `mailto:${BREVO_CONFIG.to[0].email}?subject=${subject}&body=${body}`;
  };

  const inputClasses =
    'w-full px-4 py-3 bg-card border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-shadow';

  return (
    <div id="request" className="hairline-gradient glass-card relative rounded-3xl shadow-card p-8 md:p-10">
      <div className="mb-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
          {t.contact.form.heading}
        </h3>
        <div className="h-1 w-16 bg-gradient-accent rounded-full mx-auto mt-4" />
      </div>

      {status === 'sent' ? (
        <div className="text-center py-10 space-y-4">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
            <Send className="w-8 h-8 text-green-600 dark:text-green-400" aria-hidden="true" />
          </div>
          <p className="text-lg font-medium text-foreground">{t.contact.form.success}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {status === 'error' && (
            <div
              className="flex items-start gap-3 px-4 py-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
              role="alert"
            >
              <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-red-600 dark:text-red-300">{t.contact.form.error}</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="req-name" className="block text-sm font-semibold text-foreground">
                {t.contact.form.name} <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <div className="relative">
                <User2 className="absolute start-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" aria-hidden="true" />
                <input
                  id="req-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.contact.form.namePlaceholder}
                  className={`${inputClasses} ps-10 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-border'}`}
                />
              </div>
              {errors.name && (
                <p className="text-sm text-red-500" role="alert">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="req-email" className="block text-sm font-semibold text-foreground">
                {t.contact.form.email} <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute start-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" aria-hidden="true" />
                <input
                  id="req-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.contact.form.emailPlaceholder}
                  className={`${inputClasses} ps-10 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-border'}`}
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-500" role="alert">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="req-desc" className="block text-sm font-semibold text-foreground">
              {t.contact.form.description} <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <div className="relative">
              <FileText className="absolute start-3 top-4 text-muted-foreground w-5 h-5" aria-hidden="true" />
              <textarea
                id="req-desc"
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={t.contact.form.descriptionPlaceholder}
                className={`${inputClasses} ps-10 resize-y ${errors.description ? 'border-red-500 focus:ring-red-500' : 'border-border'}`}
              />
            </div>
            {errors.description && (
              <p className="text-sm text-red-500" role="alert">{errors.description}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="req-files" className="block text-sm font-semibold text-foreground">
              {t.contact.form.files}
            </label>
            <input
              ref={fileInputRef}
              id="req-files"
              type="file"
              multiple
              accept="image/*,.pdf,.zip,.doc,.docx,.xls,.xlsx,.txt"
              onChange={handleFileChange}
              disabled={status === 'sending'}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={status === 'sending'}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-border rounded-lg text-muted-foreground hover:border-accent hover:text-accent transition-colors cursor-pointer"
            >
              <Paperclip className="w-5 h-5" aria-hidden="true" />
              {t.contact.form.files}
            </button>

            {files.length > 0 && (
              <ul className="mt-3 space-y-2">
                {files.map((file, index) => (
                  <li
                    key={`${file.name}-${index}`}
                    className="flex items-center justify-between gap-3 px-3 py-2 bg-muted rounded-lg"
                  >
                    <span className="text-sm text-foreground truncate">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      disabled={status === 'sending'}
                      className="p-1 rounded hover:bg-border text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                      aria-label={`Remove ${file.name}`}
                    >
                      <X className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-accent text-white dark:text-background rounded-lg font-semibold shadow-card hover:shadow-lift hover:-translate-y-0.5 hover-glow transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              <Send className={`w-5 h-5 ${status === 'sending' ? 'animate-pulse' : ''}`} aria-hidden="true" />
              {status === 'sending' ? t.contact.form.sending : t.contact.form.submit}
            </button>
            <p className="mt-3 text-center text-sm text-muted-foreground">
              {t.contact.form.sendNote}
            </p>
          </div>
        </form>
      )}
    </div>
  );
}