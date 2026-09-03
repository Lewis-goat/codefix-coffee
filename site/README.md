# CodeFix Coffee — espresso machine error-code lookup

Static Astro site. Pages are generated from `src/data/codes_raw.json` (per-model code tables) + `src/data/breville.ts` (fix playbooks per fault category and hand-written deep dives).

## Local
    npm install
    npm run dev      # http://localhost:4321
    npm run build    # dist/

## Deploy (Cloudflare Pages, free)
1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → connect repo.
   Build command: `npm run build`   Output dir: `dist`   Root dir: `site` (if repo root is ~/niche-site)
3. Environment variable `SITE_URL=https://yourdomain.com` (used for canonical + sitemap).
4. Custom domain → add the domain bought on Cloudflare Registrar.
5. Google Search Console + Bing Webmaster: verify, submit `/sitemap-index.xml`.

## Monetize (Phase 4)
Everything is driven by environment variables (see `.env.example`); nothing ad-related renders until they are set.

| Variable | Where to get it |
|---|---|
| `ADSENSE_CLIENT` | AdSense → Account → Account information → Publisher ID (`ca-pub-…`). Enables the script, the `google-adsense-account` verification meta tag, and `/ads.txt`. |
| `ADSENSE_SLOT_INCONTENT` | AdSense → Ads → By ad unit → Display ad → create "in-content" → copy `data-ad-slot`. Optional; renders after the fix steps on every code page. |
| `ADSENSE_SLOT_FOOTER` | Same, a second unit → renders at the end of every page. Optional. |
| `CF_ANALYTICS_TOKEN` | Cloudflare → Analytics & Logs → Web Analytics → Add site → token. Cookieless, no consent banner needed. |
| `CONTACT_EMAIL` | Shown on /contact. |

AdSense launch order (after the domain is live on Cloudflare Pages):
1. Set `ADSENSE_CLIENT` in Cloudflare Pages env vars → redeploy → confirm `https://yourdomain/ads.txt` shows the `pub-` line.
2. AdSense → Sites → Add site → enter the domain → "Ready" (the meta tag verifies it). Review takes days to a few weeks; the site must be indexed and have the privacy/about/contact pages (already there).
3. AdSense → Privacy & messaging → create a GDPR (EU) message and a US state message and publish them. Required for EEA/UK traffic; the AdSense script serves the banner itself.
4. AdSense → Ads → By site → turn **Auto ads** on for the domain (anchor + in-page; leave vignette off initially so it does not hurt rankings).
5. Optional: create the two manual units and set the slot env vars; redeploy.
6. Payments → add tax info and payee details; payout is monthly once the balance reaches $100.

Later upgrades: Ezoic (no traffic minimum, typically higher RPM) once AdSense is approved and traffic passes ~1k/mo; Mediavine Journey at 10k sessions/mo.

## Add a model / brand
Add the code table to `codes_raw.json`, a `Model` entry in `breville.ts`; playbooks classify by meaning text automatically. Add `deepDives['SKU:CODE']` for hero pages.
