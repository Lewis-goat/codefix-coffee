// Runtime config. Set these as environment variables in Cloudflare Pages (Settings → Environment variables)
// or in a local .env file. Nothing ad-related renders until ADSENSE_CLIENT is set.
const env = (k: string) => (import.meta.env?.[k] as string | undefined) || process.env[k] || '';

export const SITE = {
  name: 'CodeFix',
  tagline: 'Appliance error codes, explained with the fix first.',
  description: 'Look up any espresso machine, dishwasher, dryer or oven error code. Each page gives the fix, the part, the cost and whether it is worth repairing.',
  contactEmail: env('CONTACT_EMAIL') || 'hello@example.com',
  updated: '2026-09-02',

  // AdSense: publisher ID, e.g. 'ca-pub-1234567890123456' (AdSense → Account → Account information)
  adsenseClient: env('ADSENSE_CLIENT'),
  // Optional manual ad units (AdSense → Ads → By ad unit → Display ad, copy the data-ad-slot number).
  // Leave empty to rely on Auto ads only.
  adSlotInContent: env('ADSENSE_SLOT_INCONTENT'),
  adSlotFooter: env('ADSENSE_SLOT_FOOTER'),

  // Cloudflare Web Analytics token (Cloudflare → Analytics & Logs → Web Analytics → add site → copy token). Cookieless.
  cfAnalyticsToken: env('CF_ANALYTICS_TOKEN'),
};
