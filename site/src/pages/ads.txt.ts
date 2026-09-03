import type { APIRoute } from 'astro';
import { SITE } from '../site';
// AdSense requires /ads.txt listing the publisher. Generated from ADSENSE_CLIENT (ca-pub-XXXX → pub-XXXX).
export const GET: APIRoute = () => {
  const pub = SITE.adsenseClient.replace(/^ca-/, '');
  const body = pub ? `google.com, ${pub}, DIRECT, f08c47fec0942fa0\n` : '# Set ADSENSE_CLIENT to populate this file\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
