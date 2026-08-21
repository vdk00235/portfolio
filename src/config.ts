export const BREVO_CONFIG = {
  apiKey: (import.meta.env.VITE_BREVO_API_KEY as string | undefined) ?? '',
  sender: {
    name: 'Opica Soft',
    email: 'getinfosabel@gmail.com',
  },
  to: [{ email: 'opicasoft@gmail.com', name: 'Opica requests' }],
} as const;

export interface EmailAttachment {
  content: string;
  name: string;
  contentType: string;
  contentId?: string; 
}