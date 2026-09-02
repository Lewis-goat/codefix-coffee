# Deep SERP audit — Appliance error-code lookup (B5 + C4 merged finalist)

Date: 2026-09-02. Method: WebSearch per query, top ~8 results classified. Screening context: B5 espresso codes 29/40 (weakest SERPs in set B, AIO risk), C4 household codes 28/40 (brand pages + JustAnswer + FB posts; data-accuracy risk).

## Part 1 — Query-by-query SERP records

### Q1 `breville barista touch error code er12` (coffee)
| # | Domain | Type | Age | Purpose-built? | Strength |
|---|---|---|---|---|---|
| 1 | justanswer.com (Oracle Touch ER12) | paywalled Q&A | 2024-25 | no (thread) | big-UGC |
| 2 | justanswer.com (Barista Touch ER05) | Q&A | 2024 | wrong code | big-UGC |
| 3 | coffeeforums.co.uk | forum | ~2023 | no | small-UGC |
| 4 | justanswer.com (generic ER12) | Q&A | 2024 | no | big-UGC |
| 5 | home-barista.com | forum | 2021 | no | mid-UGC |
| 6 | gearfaults.com/overview/breville | new programmatic error-code site | 2025-26 | brand overview, not per-code | small |
| 7 | website-files.com PDF (scraped manual) | PDF | ? | no | none |
| 8 | coffeecherish.com ER12/ER15/ER16 | blog | ~2023 | yes-ish (3 codes bundled) | small |
- No official Breville page. AIO: gives 3 contradictory meanings (portafilter / heating / brew unit) — the ambiguity itself is the opportunity: a per-model disambiguation page beats the one-liner.
- Beatable: **5/5**. Note gearfaults.com is a new entrant already doing exactly this idea (monitor it).

### Q2 `jura e8 error 2 fix` (coffee)
| # | Domain | Type | Age | Purpose-built? | Strength |
|---|---|---|---|---|---|
| 1-4 | justanswer.com x4 | Q&A | 2023-25 | no | big-UGC |
| 5 | spresco.com | small blog, purpose-built | 2024 | yes | small |
| 6 | jura-parts.com error codes 1-19 | parts retailer list | old, evergreen | list page | mid |
| 7 | coffeeseller.com blog | shop blog | 2024 | list | small |
| 8 | ask.okorder.com | content farm Q&A | ? | no | small |
- No official Jura page (Jura's site has no code list). AIO: "thermoblock not reaching temp, unplug 30 min / hairdryer trick" — largely satisfies definition, but the real answer is "NTC/thermoblock replacement, cost X, worth it?" which AIO doesn't give.
- Beatable: **4/5** (JustAnswer wall is weak; jura-parts is the only real incumbent).

### Q3 `saeco xelsis error 14` (coffee)
| # | Domain | Type | Age | Purpose-built? | Strength |
|---|---|---|---|---|---|
| 1 | manualslib (Xelsis manual p15) | scanned manual | old | no | big |
| 2 | philips.com.hk error-code page | official (generic, all models) | current | generic | big |
| 3 | saeco.com FAQ | official generic list | current | generic | big |
| 4-7 | fixya.com x4 | Q&A | 2010s | no | mid-UGC (dying) |
| 8 | mespiecesdetachees.com service-manual PDF | PDF | 2011 | no | small |
| 9 | coffeegrump.com | blog list | 2023 | list | small |
| 10 | cmosinsight.com | AI-farm blog | 2024 | thin | small |
- Official generic page exists (Philips/Saeco share one FAQ: 01/03/04/05/14/11/19). AIO: fully satisfied ("overheated, wait 30 min"). Only the "it keeps coming back = NTC sensor" nuance survives.
- Beatable: **3/5** — beatable on model-specific depth, but low click survival.

### Q4 `delonghi magnifica evo descale light stays on after descaling` (coffee, symptom-style not code)
| # | Domain | Type | Age | Purpose-built? | Strength |
|---|---|---|---|---|---|
| 1 | coolblue.nl advice | retailer help article | current | yes | mid-big |
| 2 | coffeeforums.co.uk | forum | 2023 | no | small-UGC |
| 3 | delonghi.com FAQ | official | current | generic | big |
| 4 | justanswer.com | Q&A | 2025 | no | big-UGC |
| 5 | support.delonghi.com (Evo help center) | official model-specific | current | yes | big |
| 6 | descaler.co.uk blog | shop blog | 2022 | yes | small |
| 7-9 | substack review, costco, ebay | junk | — | no | — |
- Official model-specific page exists (De'Longhi help center is good for Dinamica/Evo). AIO: partially satisfies; the flow-sensor/float-magnet fix is the click-worthy detail.
- Beatable: **3/5**. De'Longhi is the best-covered coffee brand officially — lower priority.

### Q5 `philips 5400 lattego error 03` (coffee)
| # | Domain | Type | Age | Purpose-built? | Strength |
|---|---|---|---|---|---|
| 1 | manualslib (5000 LatteGo service manual p38) | scanned manual | recent upload | no | big |
| 2 | manualslib (5400 service manual) | scanned manual | recent | no | big |
| 3-4 | philips.com (.eg / usa) error-code FAQ | official generic | current | generic | big |
| 5 | coolblue.nl | retailer help | current | list | mid |
| 6 | brewive.com | new small blog, purpose-built | 2025 | yes (model x common errors) | small |
| 7 | justanswer.co.uk | Q&A | 2023 | no | big-UGC |
| 8-9 | ebay.de listings | junk | — | no | — |
- Official generic page exists. AIO: satisfies ("brew group dirty, rinse + lubricate"). eBay junk at #8-9 says Google has run out of content. Manualslib ranking a *service* manual = pro-level content gap.
- Beatable: **3/5**.

### Q6 `ge dishwasher error code 888` (household)
| # | Domain | Type | Age | Purpose-built? | Strength |
|---|---|---|---|---|---|
| 1-3,5 | youtube.com x4 ("EASY GUIDE" AI-voice channels) | video | 2024-26 | yes | big platform |
| 4,6,8 | justanswer.com x3 | Q&A | 2023-25 | no | big-UGC |
| 7 | howtofixit.net | AI-ish blog | 2024 | yes | small |
- **No GE official page ranks** (GE's support-search content exists but is invisible). No RepairClinic/PartSelect. AIO: gives cause (UI-to-main-board comms / blown fuse) but "which board, part #, cost" survives.
- Beatable: **4/5** (YouTube slot-fillers + JustAnswer; text SERP is empty).

### Q7 `bosch washing machine error e57` (household)
| # | Domain | Type | Age | Purpose-built? | Strength |
|---|---|---|---|---|---|
| 1 | subzerorepairnewyork.com | local repair-shop programmatic page | 2024-25 | yes | small |
| 2 | boschappliance.support/error-codes/washer/washer-e57 | unofficial programmatic error-code site | 2025 | yes | small |
| 3 | justanswer.co.uk | Q&A | 2015 | no | big-UGC |
| 4 | homestuffer.com | blog | 2023 | yes | small |
| 5 | pro.washerhouse.com | programmatic error-code site (RU-origin, EN) | 2020 | yes | small |
| 6 | washingcodes.com | programmatic error-code site | 2019-22 | yes | small |
| 7 | all-errors.com | programmatic error-code site | 2021 | yes | small |
| 8 | errors.codes/en/bosch/washer/error-e57 | programmatic error-code site | 2023 | yes | small |
- No official Bosch page. **But 6 of 8 results are purpose-built programmatic error-code pages** — the exact product idea already exists on the household side, many times over, all thin. AIO satisfies ("inverter/motor control fault, unplug, call a pro").
- Beatable: **2/5** — beatable in authority terms, but you'd be the 7th clone; no differentiation left except quality.

### Q8 `lg dryer error code d80` (household)
| # | Domain | Type | Age | Purpose-built? | Strength |
|---|---|---|---|---|---|
| 1 | asurion.com | big insurer content hub | 2024 | yes | big |
| 2 | academy.fredsappliance.com | repair-training blog | 2023 | yes | mid |
| 3 | partselect.com blog | parts retailer, purpose-built | 2023 | yes | big |
| 4 | lg.com error-code list | official | current | list | big |
| 5 | justanswer.com | Q&A | 2025 | no | big-UGC |
| 6 | beaconsaves.com | warranty co. error-code hub | 2025 | yes | mid |
| 7 | dryergeeks.com | niche programmatic site | 2024 | yes | small |
| 8 | dryerventcleanersofct.com | local service | 2024 | yes | small |
- Everyone owns this: official + PartSelect + Asurion + Beacon. AIO fully satisfies (80% vent blockage, clean vent).
- Beatable: **1/5**. Representative of high-volume LG/Samsung codes.

### Q9 `whirlpool dishwasher error code f8 e4` (household)
| # | Domain | Type | Age | Purpose-built? | Strength |
|---|---|---|---|---|---|
| 1 | fredsappliance.com | repair blog, purpose-built | 2023 | yes | mid |
| 2 | ifixit.com answers | UGC | 2022 | no | big-UGC |
| 3,5 | producthelp.whirlpool.com x2 (video + page) | official, purpose-built | current | yes | big |
| 4,6,7 | facebook.com group posts x3 | UGC | 2024-25 | no | big-UGC |
| 8-9 | justanswer.com x2 | Q&A | 2024 | no | big-UGC |
- Official purpose-built page exists. Whirlpool's producthelp is the best-in-class official code library (also covers Maytag/KitchenAid). AIO satisfies (water in base pan, dry it, check hoses).
- Beatable: **2/5** (FB/JustAnswer slots 4-9 are beatable, but you land below Whirlpool + Fred's).

### Q10 `samsung oven error code se` (household)
| # | Domain | Type | Age | Purpose-built? | Strength |
|---|---|---|---|---|---|
| 1 | quora.com | UGC | old | no | big-UGC |
| 2 | justanswer.com | Q&A | 2020s | no | big-UGC |
| 3 | us.community.samsung.com | brand forum | 2022 | no | big-UGC |
| 4 | appliancepartspros.com blog | parts retailer, purpose-built | 2022 | yes | mid-big |
| 5 | facebook.com group | UGC | 2024 | no | big-UGC |
| 6 | appliancevideo.com | old repair Q&A | 2010s | thin | small |
| 7 | glenzac.wordpress.com | free-host blog | 2021 | microwave, not oven | tiny |
| 8 | samsung.com/us TSG page | official (title "Welcome to the" — broken metadata) | current | generic | big |
| 9 | ushl.samsung.com/ua (Ukrainian) | official, wrong locale | current | list | big |
- Official page exists but is mis-titled and outranked by Quora/JustAnswer/wordpress. AIO satisfies ("shorted keypad, reseat harness, replace membrane/PCB") — but "membrane part # for NX58H5600SS, $40 DIY vs $250 call-out" survives.
- Beatable: **4/5**.

### Bonus (from screening, re-run) `ge dryer error code e8`
JustAnswer x3, TikTok, samedayappliancerepair, easybear x2. Still no GE page. E8 has 3 model-dependent meanings (tach sensor / drum light / combo drain) — AIO hedges. Beatable 4/5. Note easybear-appliancerepair.com (a repair shop) has already built a full "Error Codes Library — Complete Brand Reference" (2025-26).


## (1) Query table
| # | Query | SERP makeup | Official page? | Purpose-built page? | AIO satisfies? | Beatable |
|---|---|---|---|---|---|---|
| 1 | Breville Barista Touch ER12 | JustAnswer ×3, forums, PDF, 1 small blog | No | Bundled blog only | Contradictory | 5 |
| 2 | Jura E8 error 2 fix | JustAnswer ×4, parts retailer list, small blog | No | 1 small | Mostly | 4 |
| 3 | Saeco Xelsis error 14 | manualslib, Philips generic, Fixya ×4 | Generic | Lists only | Yes | 3 |
| 4 | DeLonghi Evo descale light stays on | Coolblue, official model page, forum | Yes (good) | Yes | Partial | 3 |
| 5 | Philips 5400 LatteGo error 03 | service manuals, Philips generic, eBay junk | Generic | 1 new small | Yes | 3 |
| 6 | GE dishwasher error 888 | YouTube ×4 (AI-voice), JustAnswer ×3 | No | 1 thin blog | Partial | 4 |
| 7 | Bosch washer E57 | 6 programmatic error-code clones | No | Yes ×6 | Yes | 2 |
| 8 | LG dryer d80 | Asurion, PartSelect, LG, Beacon | Yes | Yes ×5 | Yes | 1 |
| 9 | Whirlpool dishwasher F8 E4 | Whirlpool ×2, Fred's, FB ×3, JustAnswer | Yes (best-in-class) | Yes | Yes | 2 |
| 10 | Samsung oven SE | Quora, JustAnswer, brand forum, FB, mis-titled official | Broken | 1 retailer blog | Mostly | 4 |
| + | GE dryer E8 | JustAnswer ×3, TikTok, repair shops | No | Repair-shop library | Hedges | 4 |

## (2) Three strongest page ideas
1. **Breville per-model × per-code disambiguation pages** ("ER12 on Barista Touch vs Oracle Touch vs Barista Pro: what it means, the 5-minute fix, when it's the brew unit"). Target: Q1 and every Breville ER code. No official page, AIO is contradictory, JustAnswer is paywalled — the single best gap in the audit.
2. **Jura code pages that answer "is it worth repairing"** — code → likely part (NTC / thermoblock / drainage valve) → part cost → DIY difficulty → typical service cost. Target: Q2 + Jura codes 1–19 (retailer list exists but no fix-first pages).
3. **Orphan-brand household codes** where the manufacturer has no page: GE dishwasher/dryer codes (Q6, bonus), Samsung oven codes (Q10). Skip LG/Samsung laundry and Whirlpool (owned by official + PartSelect/Asurion) and Bosch (6 clones).

## (3) Biggest risks
- **AIO answers the definition** on most codes. Every page must lead with the fix, the part number, and the cost decision, not "what does error X mean". That is also what makes the page click-worthy.
- **New entrants doing the same thing**: gearfaults.com (Breville overview, 2025–26), brewive.com (Philips, 2025), easybear's error-code library, and 6 clone sites on Bosch. Coffee is thinner than household but not empty; speed matters.
- **Data accuracy per model** — codes shift meaning across models/years. Source from service manuals (manualslib ranks *service* manuals for these queries, which is a gap in itself) and label each page "verified for models X/Y".
- **RPM assumption**: home-repair AdSense RPM ($8–20 US) is real, and this audience is consumers on phones with low ad-blocker rates — the opposite of the dev/gamer finalists. Coffee-machine owners also skew high-income (Jura/Breville buyers).
- Household side broadly is owned by PartSelect/RepairClinic/Asurion/official; entering there is a 7th-clone play.

## (4) Is ~250 pv/month achievable in 6 months?
Yes, likely (~75%). One template, ~5 coffee brands × 10–20 codes × 2–4 models ≈ 150–300 pages, plus ~30 orphan household pages. Ten page-1 rankings at 100–400/mo each clears the bar several times over. Ceiling is meaningfully higher than the other finalists (5–20k pv/mo at 18 months if coverage is complete).

## (5) Recommendation score: **8/10** — recommended scope: **coffee-machine first, orphan household brands second**
Start with Breville → Jura → Saeco/Philips → DeLonghi (in that order of SERP weakness), then add GE and Samsung-oven codes. Do not build LG/Samsung laundry, Whirlpool, or Bosch pages.
