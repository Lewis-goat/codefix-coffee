# Niche Ad-Revenue Website: Find-the-Niche → Build → Monetize

## Context

Goal: a small website that earns enough display-ad revenue to cover its own hosting. It does not need to be big. The hard part is not building it, it is picking a niche where a solo site can rank on Google without fighting established publishers. So Phase 1 is a repeatable niche-identification process with a scoring rubric, and Phases 2–4 are the build, content, and monetization steps that follow from whichever niche wins.

Assumptions made (stated so they can be overridden):
- Hosting is a static site on Cloudflare Pages (free tier). The only recurring cost is the domain (~$10–15/yr). So "pays for itself" means roughly **$1.25/month ≈ 200–500 US pageviews/month on AdSense**. That is the break-even bar.
- Time budget: ~5 hrs/week for 8–12 weeks, then maintenance.
- No paid SEO tools. Free tiers + SERP inspection + Search Console are sufficient at this scale.
- I (Claude) can run most of Phase 1 myself with web search/browser: SERP inspection, autocomplete scraping, scoring. The user only needs to pick from the shortlist and register the domain.

---

## Phase 1 — Niche identification (Week 1)

### 1.1 What "easily outcompeted on SEO" actually means in 2026
A niche is beatable when the current top-10 results show **weak-SERP signals**. Look for at least 3 of these on the target queries:
- Reddit / Quora / forum threads or a GitHub issue ranking in the top 5
- PDFs, .edu pages, or 5+ year-old pages with no updates
- Pages whose title does not match the query (Google is settling for a partial match)
- Thin pages (<500 words, no tool, no table) or generic AI-written listicles
- Sites with low domain authority (check via free Ahrefs Website Authority Checker, DR < 30)
- No "People also ask" saturation by big brands

Also require:
- **Not YMYL** (no health, medical, personal finance advice, legal). Google demotes solo sites here and AdSense CPMs don't compensate for the ranking penalty.
- **Not fully AI-answerable**: if an AI Overview fully answers the query, clicks collapse. Prefer queries that need a *tool, calculator, lookup table, dataset, or step-by-step with screenshots*.
- **Evergreen**: the query volume should be flat or rising on Google Trends over 5 years, not a fad.

### 1.2 The three niche archetypes to hunt in
1. **Programmatic reference / lookup pages** — one template, hundreds of pages, each targeting a long-tail query. Examples: "X to Y unit converter for [obscure unit]", spec sheets for a product category, compatibility tables, error-code lookups for a specific software.
2. **Micro-tools & calculators** — a single interactive page per query. Highest RPMs relative to effort, hard for AI Overviews to replace. Examples: niche hobby calculators (reloading, brewing, 3D-print cost, aquarium dosing), developer utilities for one specific tool/framework.
3. **Hyper-specific how-to for one piece of software / hardware** — where the official docs are bad and the forum is the current #1. The user already has deep TradingView / Pine Script knowledge: "Pine Script v6 [specific function] example", "TradingView strategy tester [specific stat] explained" is a legitimate seed here, and dev/fintech-adjacent ad CPMs are high. Caveat: keep it educational, not "how to make money trading" (that side is YMYL).

### 1.3 Seed generation (target: 30–50 candidate niches)
Sources, in order:
- Personal expertise inventory (things the user knows better than a typical writer): Pine Script/TradingView tooling, Three.js/browser game dev, voxel engines, prediction-market mechanics, hypertrophy training math, GeoGuessr meta.
- Google autocomplete mining: type `[topic] ` + each letter a–z, and `how to`, `calculator`, `vs`, `error`, `compatible with` suffixes. Collect every suggestion.
- "People also ask" expansion 2 levels deep on the best suggestions.
- Reddit: subreddits with 20k–300k members where the top posts are recurring "how do I…" questions (that's unmet informational demand).
- Exploding Topics / Google Trends "rising" for tools and hobbies.

### 1.4 Validation & scoring rubric (score every candidate 0–5 on each, sum)
| Criterion | How to measure (free) | 5 = | 0 = |
|---|---|---|---|
| SERP weakness | Manually inspect top 10 for 5 seed queries | 3+ weak signals on most queries | Big publishers own top 10 |
| Keyword difficulty | Ahrefs free KD checker / Keywords Everywhere free credits | KD < 10 | KD > 30 |
| Search volume (cluster) | Sum of Keywords Everywhere / Google Keyword Planner ranges for the cluster | 2k–20k/mo cluster | < 300/mo total |
| AI-Overview resistance | Does the query trigger an AI Overview that fully answers it? | No AIO, or needs a tool | AIO answers it completely |
| Ad value | Keyword Planner top-of-page bid; Ezoic/Mediavine RPM by category (tech, home, hobby gear > general) | CPC > $1.50 | CPC < $0.20 |
| Content leverage | Can 1 template produce 50+ pages, or does each page need bespoke research? | Programmatic / templated | Each page is a 2k-word essay |
| Personal edge | Can the user write something a generalist can't? | Yes, deep first-hand knowledge | No |
| Longevity | Google Trends 5-yr | Flat/rising | Declining |

Cut anything scoring < 25/40. Take the top 3 to a **10-query SERP audit** each (write down who ranks, their DR, page age, whether a tool exists). Pick the winner.

### 1.5 Deliverable for Phase 1
A scored spreadsheet (`niche-scoring.csv`) with 30+ candidates, the top-3 SERP audits, and a one-paragraph pick rationale. I can produce this end-to-end with web search + browser; user reviews and picks.

---

## Phase 2 — Build (Week 2)

- **Stack**: Astro static site (fast, great Lighthouse scores, easy content collections for programmatic pages) → GitHub repo → Cloudflare Pages (free, global CDN, free SSL). Domain via Cloudflare Registrar (at-cost, ~$10/yr, .com preferred).
- **Site structure**: home, ~5 pillar pages, programmatic/tool pages under one clean URL pattern, about, privacy policy (required for AdSense), contact.
- **Technical SEO baked in**: sitemap.xml, robots.txt, canonical tags, JSON-LD (FAQ / HowTo / SoftwareApplication for tools), OpenGraph, semantic headings, image alt text, Core Web Vitals green.
- Register Google Search Console + Bing Webmaster Tools day 1, submit sitemap. Add Cloudflare Web Analytics (free, cookieless, no consent banner needed) instead of GA.
- If the niche is a tool/calculator: build the tool as a vanilla JS island so it works with no framework runtime.

## Phase 3 — Content (Weeks 3–8)

- **Target**: 20–30 pages live by week 8. For programmatic niches, that can be 100+ generated pages, but ship ≥10 hand-crafted quality pages first so Google doesn't classify the site as thin.
- Each page targets one query cluster from the Phase 1 audit. Title = exact query phrasing. Answer in the first 100 words, then depth (tables, screenshots, worked examples, a tool if applicable).
- Internal link every page to ≥3 siblings and its pillar.
- **Cadence**: 3–5 pages/week. I can draft; user reviews for accuracy where personal expertise is the edge.
- Backlinks: don't buy. Do 3 things only: answer 5–10 relevant Reddit/forum threads with a genuine reply that links the tool page; submit tools to relevant directories (e.g. AlternativeTo, Product Hunt for tools, niche-specific lists); ask 2–3 small niche bloggers for a mention.

## Phase 4 — Monetization (Month 2 onward)

1. **Google AdSense** first: apply once ~15 indexed pages + privacy policy + about page are live. No traffic minimum. Expect $3–15 RPM for US traffic depending on niche. Auto ads + one manual in-content unit; don't over-stuff (hurts rankings).
2. **Ezoic** (no traffic minimum, typically 2–3× AdSense RPM) once AdSense is approved and traffic > 1k/mo.
3. **Mediavine Journey** at 10k sessions/mo, **Raptive** at 100k, if it ever gets there. Not needed for break-even.
4. Optional non-ad: one relevant affiliate link per page where a product is naturally recommended (Amazon Associates, or the software's own program). Keep it secondary; the ask was ad revenue.

Break-even math (AdSense, $5 RPM): ~250 pageviews/month covers the domain. A single ranking tool page typically does that alone.

## Phase 5 — Verification & iteration (Month 3+)

- **Week 4 check**: Search Console shows impressions for target queries; all pages indexed (use `site:` and GSC coverage report).
- **Week 8 check**: ≥5 queries in top 20. If zero, the niche audit was wrong — go back to the Phase 1 shortlist's #2 rather than grinding.
- **Month 3 check**: AdSense approved, first revenue posted. Compare earnings vs. $1.25/mo bar.
- **Monthly loop**: GSC "queries with impressions but position 11–30" → improve those pages first (cheapest wins). Add 2–4 pages/month targeting new PAA questions.
- Kill criterion: if after 6 months revenue < hosting cost and no query is in the top 20, drop it and reuse the Astro scaffold on shortlist #2.

## Files / artifacts to create (new project folder, e.g. `~/niche-site/`)
- `research/niche-scoring.csv` — Phase 1 rubric output
- `research/serp-audits.md` — top-3 SERP audits
- `site/` — Astro project, deployed to Cloudflare Pages
- `content/keyword-map.md` — page ↔ query cluster mapping, updated monthly

## Status: Phase 1 DONE, Phase 2 BUILT (2026-09-02). Site in site/ (Astro, 143 pages, 6 Breville models). User to-do: register domain, push to GitHub, connect Cloudflare Pages (SITE_URL env), Search Console, AdSense (set adsenseClient in src/site.ts). Then Phase 3: Jura, Saeco/Philips, DeLonghi, GE, Samsung oven.
Run Phase 1: generate the 30–50 candidate list from the seed sources above, score them with live SERP checks via web search/browser, and hand back the ranked shortlist with the top-3 audits for the user to pick from.
