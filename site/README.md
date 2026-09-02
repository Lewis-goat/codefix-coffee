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

## Monetize
- Set `adsenseClient` in `src/site.ts` after AdSense approval; the layout injects the script and an in-content unit.
- Update `contactEmail` and the site name in `src/site.ts` before launch.

## Add a model / brand
Add the code table to `codes_raw.json`, a `Model` entry in `breville.ts`; playbooks classify by meaning text automatically. Add `deepDives['SKU:CODE']` for hero pages.
