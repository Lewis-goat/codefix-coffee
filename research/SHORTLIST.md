# Phase 1 result — niche shortlist and pick (2026-09-02)

Screened 36 candidate niches (4 archetype groups, ~160 live SERP checks) against the 8-criterion rubric, then ran 10-query deep audits on three archetype-diverse finalists. Full data: `niche-scoring.csv` (ranked), `notes_A–D.md` (per-query SERP observations), `audit_*.md` (deep audits).

## Screening: top 10 of 36
| Rank | ID | Niche | /40 | Screening verdict |
|---|---|---|---|---|
| 1 | B7 | Sim-racing setup tables | 31 | Weak SERPs on wheel-rotation queries; hardware CPC |
| 2 | B5 | Espresso-machine error codes | 29 | Weakest SERPs in set (JustAnswer, Fixya, PDFs) |
| 2 | B9 | Mechanical keyboard reference | 29 | Weak signals but you'd be the 4th switch DB |
| 2 | D1 | Minecraft technical tools | 29 | Huge volume, kids-tier CPC |
| 5 | A4 | Three.js problem pages | 28 | Forum-only SERPs, best owner edge |
| 5 | A9 | GeoGuessr clue reference | 28 | Easy to rank, near-zero CPC, ad-blocked audience |
| 5 | C4 | Household appliance error codes | 28 | Brand × code template, repair CPC $2–5 |
| 5 | D3 | CSS/typography tools | 28 | Converter farm except clamp/fluid-type |
| 5 | D4 | Networking calculators | 28 | Head terms owned; VLSM/per-port open |
| 10 | A3 | Pine Script error lookup | 27 | Spammy SERPs, tiny per-error volume |

Disqualified / flagged: A8 prediction markets (gambling-adjacent, AdSense policy), B3 reloading (firearms ad restrictions), D2 emulation (BIOS/ROM adjacency), A2/C2 borderline YMYL if content strays into advice.

## Deep audits (10 queries each)
| Finalist | Beatable queries (≥4/5) | Display-ad fit | Ceiling | Score |
|---|---|---|---|---|
| Appliance error codes (coffee-first) | 6 of 11 | Best: consumer, mobile, low ad-block, repair RPM $8–20 | 5–20k pv/mo | **8/10** |
| Three.js problem pages | 6 of 10 | Worst: dev ad-blockers ~50%, needs affiliate/product | 1–3k pv/mo | 7/10 |
| Sim-racing per-car lock tables | 4 of 10 | Medium: gamer ad-block, good hardware CPC | 1–3k pv/mo | 6/10 |

## Pick: coffee-machine error-code lookup (expanding to orphan household brands)
Why: it is the only finalist where SERP weakness, ad economics, and template leverage all line up. Breville and Jura codes have no official page, AI Overviews give contradictory answers, and the top results are paywalled JustAnswer threads and scanned PDFs. The audience is consumers on phones who do not run ad blockers, in the home-repair AdSense category. One page template covers ~200 brand × model × code pages. Break-even (~250 pv/mo) needs about ten page-1 rankings out of those 200.

Differentiator that beats both the AI one-liner and the clone sites: every page leads with the fix, then part number, part cost, DIY difficulty, and "repair or replace" — not the definition.

Build order: Breville → Jura → Saeco/Philips → DeLonghi → GE dishwasher/dryer → Samsung oven. Skip LG/Samsung laundry, Whirlpool, Bosch (owned).

Watch list: gearfaults.com, brewive.com (new 2025–26 entrants in the same gap). Move fast.

## Runner-up
Three.js problem pages (import-map generator; r152/r155 color+lighting migration lab; shadow debugger). Strongest personal edge and genuinely un-AI-able format, but it fails the *display-ad* goal specifically. Worth building later as an affiliate/product site, or as a second site reusing the Astro scaffold.

## Next step (Phase 2)
Register a domain (coffee-machine-neutral name so household codes fit later), scaffold Astro + Cloudflare Pages, build the error-code page template + data schema (brand, model, code, meaning, fix steps, part, cost, verified-models), and ship the first 15 Breville pages + privacy/about pages for AdSense.
