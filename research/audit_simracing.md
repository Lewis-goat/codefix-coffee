# Deep SERP audit — Sim-racing setup reference (per-car steering lock / wheel rotation tables, per-wheelbase FFB matrix, FOV calculators)

Date: 2026-09-02. Screening context: notes_B.md §B7 (31/40, best of set B). Method: WebSearch per query, top ~8 results classified by type / domain strength / page age (where visible) / purpose-built page? / AI-Overview (AIO) risk.

Domain-strength legend: **big** = major media/official/brand (Fanatec, Moza, iRacing support, Wikipedia, YouTube); **mid** = established sim-racing content sites with hundreds of pages and clear affiliate ops (simracingsetup.com, simracingcockpit.gg, coachdaveacademy.com, traxion.gg, overtake.gg); **small** = single-owner blogs/tools (gosetups.gg, solox.gg, victorydash.io, oldbastardsracing.com, west-games.com, dinex86.github.io, jscalc.io); **UGC** = Steam discussions, Reddit, Facebook groups, forum threads, Scribd uploads.

## Exploratory pass (16 queries run, 10 selected)
Also checked and NOT selected: `gran turismo 7 ffb settings moza r5` (weak SERP — Facebook groups, GIMX forum, GTPlanet — but the query is a dud: Moza isn't PS5-licensed, so the honest answer is "it doesn't work natively"); `le mans ultimate ffb settings fanatec csl dd` (Coach Dave + simracingsetup + simracingcockpit + victorydash all have purpose-built pages, beatable 2); `triple screen angle calculator sim racing` (6+ calculators: simracingcockpit, victorydash, gitgud, simrigbuild, simcoaches, ocracing — beatable 1); `wheel base torque comparison table` (Fanatec + simracingsetup comparison table own it, beatable 2); `assetto corsa steering lock list all cars` (SERP entirely redirects to ACC pages + a 2021 Scribd PDF; AC1 per-car locks are a genuine gap but query volume looks tiny).

## Per-query results

### Q1. `assetto corsa competizione steering lock per car`
| # | URL | Type | Strength | Age |
|---|-----|------|----------|-----|
| 1 | gosetups.gg/blog/your-guide-to-steering-locks-in-acc | blog (setup shop) | small | 2023-24 |
| 2 | traxion.gg/how-steering-lock-is-key-to-lap-time-in-acc | media article | mid | ~2022 |
| 3 | simracingsetup.com/assetto-corsa/acc-steering-lock-settings | blog table, GT2/GT3/GT4 | mid | updated 2025-26 |
| 4 | youtube.com "Correct Steering Lock – Every Car" | YouTube | big | 2021-22 |
| 5 | solox.gg/acc-steering-lock-settings-gt3-gt4 | blog table | small | 2024 |
| 6 | steamcommunity.com/app/805550 discussions | Steam thread | UGC | old |
| (also seen on adjacent queries) | coachdaveacademy.com/tutorials/correct-steering-locks-and-ratios-in-acc "(2026)" | blog table | mid | 2026 |
| | github.com/Havner/acc-steering-lock (SimHub plugin, per-car values in source) | GitHub | big/UGC | 2021+ |
- Purpose-built page exists: **yes, at least 4** (simracingsetup, coachdave, solox, gosetups) each with a full per-car table.
- AIO: partial — AIO returns "set wheel to 900, ACC handles it" plus a few example cars; a full table still needs a click.
- **Beatable: 2/5.** The most obvious query in the niche is already owned by mid-strength sites with fresh dated pages. A new site only wins with a strictly better artifact (sortable, per-patch changelog, wheelbase-specific soft-lock instructions) and even then slowly.

### Q2. `assetto corsa evo steering lock per car`
| # | URL | Type | Strength | Age |
|---|-----|------|----------|-----|
| 1 | gosetups.gg ACC steering-lock guide (wrong game) | blog | small | 2023-24 |
| 2 | steamcommunity.com/app/244210 "Can steering lock be changed per car?" (AC1) | Steam thread | UGC | old |
| 3 | steamcommunity.com/app/3058630 "Optimal Steering Lock/Sensitivity Settings" (EVO) | Steam thread | UGC | 2025-26 |
| 4 | simracingsetup.com ACC steering lock (wrong game) | blog | mid | 2025 |
| 5 | coachdaveacademy.com ACC steering locks (wrong game) | blog | mid | 2026 |
| 6-8 | steamcommunity.com/app/3058630 x2, /app/805550 x1 | Steam threads | UGC | 2025-26 |
| (second query) | asetek.com AC EVO wheelbase settings; coachdaveacademy.com AC EVO wheel settings guide (generic, no per-car table) | official / blog | big / mid | 2025 |
- Purpose-built page: **no.** Google is substituting ACC pages; the only EVO-specific results are Steam threads quoting scattered values (Alpine A110 S 520°, M2 CS Racing 790°, F2004 470°, 964 Turbo 1080°). Nobody has the full table. AC EVO is in Early Access, car list still growing (~20-30 cars) -> a scraped table from the game's car data would be the first.
- AIO: weak — AIO gives "use 900/1080 and match in-game", which is not what a per-car searcher wants.
- **Beatable: 4/5.** Best single opening in the set; risk is that simracingsetup/coachdave publish an EVO table the moment 1.0 ships (they already have EVO wheel-settings pages).

### Q3. `automobilista 2 steering rotation per car list`
| # | URL | Type | Strength | Age |
|---|-----|------|----------|-----|
| 1 | asetek.com/simsports/guides/wheelbase-settings-for-automobilista-2 | official vendor guide | big | 2024-25 |
| 2-4 | steamcommunity.com/app/1066890 x3 (help with lock/range; CSL Elite rotation; in-game rotation setup) | Steam threads | UGC | 2020-23 |
| 5 | overtake.gg "auto steering rotation" | forum | mid/UGC | old |
| 6 | forum.reizastudios.com "Steering wheel rotation range" | dev forum | UGC | old |
| 7-10 | steamcommunity.com/app/1066890 x4 | Steam threads | UGC | old |
| (second query) | automobilista2.wiki.gg setup guide (generic) | wiki | mid | 2024 |
- Purpose-built page: **no** per-car list anywhere; 7 of 10 results are Steam/forum threads.
- AIO: medium — "AMS2 uses soft-lock, set 900 and calibrate" satisfies the *setup* intent; the *list* intent (people with fixed-rotation Logitech/Thrustmaster wheels, or who want to pre-set DOR for a car) is unserved.
- **Beatable: 4/5.** Volume is the concern (AMS2 is ~1/5 the ACC audience), but SERP is pure UGC.

### Q4. `beamng steering lock degrees per car`
| # | URL | Type | Strength | Age |
|---|-----|------|----------|-----|
| 1-3 | steamcommunity.com/app/284160 x3 ("Set wheel rotation?", "softlock", "can i change the steering lock?") | Steam threads | UGC | 2016-22 |
| 4 | beamng.com/threads/wheel-control-steering-lock-angle-depending-on-vehicle | official forum | big/UGC | 2019 |
| 5 | beamng.com/threads/setting-up-the-steering-wheel-for-180-degrees | official forum | big/UGC | 2023 |
| 6 | en.wikipedia.org/wiki/Steering_ratio | Wikipedia | big | n/a |
| 7 | youtube "Steering Wheel Tips for BeamNG Drive" | YouTube | big | ~2023 |
| 8-10 | steamcommunity.com x2 + RaceRoom thread (off-topic) | Steam | UGC | old |
- Purpose-built page: **no.** BeamNG's per-vehicle lock values live in the JBeam files (steeringWheelLock) — trivially scrapeable for all ~40 vanilla vehicles + configs.
- AIO: medium — AIO says "the game auto-adapts; trucks ~900, rally ~450-720". Enough for casuals; not for the wheel-owner who wants to know the Sunburst rally = 720°.
- **Beatable: 4/5.** Zero competition, but the audience is skewed to keyboard/controller players and mod-hunters; wheel-owning BeamNG searchers are a minority.

### Q5. `rfactor 2 steering lock list cars degrees`
| # | URL | Type | Strength | Age |
|---|-----|------|----------|-----|
| 1 | overtake.gg "rfactor 2 steering settings" | forum | mid/UGC | ~2013 |
| 2 | steamcommunity.com/app/365960 "Steering lock/angle is all wrong" | Steam thread | UGC | old |
| 3 | overtake.gg "Steering lock logitech g27" | forum | UGC | ~2020 |
| 4 | steamcommunity.com sharedfiles guide "Setting up Steering Degree and FFB properly" | Steam guide | UGC | 2015 |
| 5 | overtake.gg "Guides to help setup steering?" | forum | UGC | old |
| 6 | steamcommunity.com/app/365960 | Steam thread | UGC | old |
| 7-9 | ACC/AC Steam threads (wrong game) | Steam | UGC | old |
- Purpose-built page: **no.** 100% forum/Steam, several 10+ years old.
- AIO: weak — rF2 conflates "steering lock" (front-wheel degrees, 15-25°) with wheel rotation; AIO answers the wrong one half the time. A page that separates the two and lists per-car rotation + default lock + ratio would be the only correct resource.
- **Beatable: 5/5 on difficulty, but 2/5 on volume** — rF2 is a shrinking title now that Studio 397 has moved to Le Mans Ultimate. Net **3/5**. Consider LMU as the target instead (same engine, growing audience, but LMU SERP already has Coach Dave/simracingsetup wheel-settings pages — no per-car lock table though).

### Q6. `forza motorsport steering lock per car degrees`
| # | URL | Type | Strength | Age |
|---|-----|------|----------|-----|
| 1 | steamcommunity.com/app/2440510 "G29 settings help" | Steam thread | UGC | 2023-24 |
| 2 | steamcommunity.com/app/2440510 "What's the best steering rotation degree" | Steam thread | UGC | 2023 |
| 3 | support.forza.net "Forza Motorsport Advanced Wheel Tuning" | official | big | 2023 |
| 4 | steamcommunity.com/app/2440510 "Steering angle of cars" | Steam thread | UGC | 2023 |
| 5 | support.forza.net FM7 wheel setup | official | big | 2019 |
| 6 | carthrottle.com "Why do we need a 900° wheel..." | media | mid | old |
| 7 | simgasm.com FH6 steering sensitivity | blog (hardware shop) | small | 2026 |
| 8-9 | Steam threads | UGC | old |
- Purpose-built page: **no.** Answer in threads: "road cars 990°, race cars 540°, fixed per car".
- AIO: **strong** — that two-bucket answer is AIO-sized. Per-car granularity barely matters in Forza because the game's Steering Lock Scale hides it.
- **Beatable: 3/5** — SERP is weak but the query's intent is mostly satisfiable in one line; a table would exist for completeness and console-crossover traffic, not as a hero page.

### Q7. `iracing wheel rotation setting per car`
| # | URL | Type | Strength | Age |
|---|-----|------|----------|-----|
| 1 | support.iracing.com "Controller Setup and Calibration" | official | big | maintained |
| 2 | overtake.gg "Wheel rotation..." | forum | UGC | old |
| 3 | oldbastardsracing.com "iRacing Fixed Steering Wheel Setup" | blog | small | 2021-23 |
| 4 | steamcommunity RaceRoom thread (wrong game) | Steam | UGC | old |
| 5-8 | steamcommunity.com/app/266410 (iRacing on Steam) x3, /app/2488620 x1 | Steam threads | UGC | old |
| (spreadsheet query) | support.iracing.com steering linearity; oldbastardsracing.com "iRacing Steering Wheel Range – Garage" | official / small | | |
- Purpose-built page: **no per-car table** exists publicly. iRacing's own docs say "calibrate at 900 and forget". The per-car values (180° open-wheelers to 900° production cars, most ~540°) are visible in the garage screen for each car, so a table is buildable by manual capture (iRacing has ~180 cars — no scrapeable config files; values would have to be captured in-sim or crowd-sourced).
- AIO: **strong** for the setup intent ("set 900, done"). The list intent is niche (fixed-DOR wheels, Thrustmaster T150/TMX, users who want hard-lock).
- **Beatable: 2/5.** Weak SERP but iRacing owns position 1, AIO closes the top of the funnel, and data sourcing is manual.

### Q8. `f1 25 wheel settings logitech g923`
| # | URL | Type | Strength | Age |
|---|-----|------|----------|-----|
| 1 | simracingcockpit.gg/f1-25-wheel-settings | blog, all wheels | mid | 2025 |
| 2 | simracingsetup.com F1 26 G923 wheel settings | blog | mid | 2026 |
| 3 | simracingsetup.com F1 25 G923 wheel settings | blog | mid | 2025 |
| 4 | simracingsetup.com F1 25 wheel settings all wheels | blog | mid | 2025 |
| 5 | youtube G923 F1 25 guide | YouTube | big | 2025 |
| 6 | briankoponen.com F1 25 G29/G920 settings | blog (long-running settings site) | small-mid | 2025 |
| 7 | simstaff.net F1 25 wheel settings every platform | blog | small | 2025 |
- Purpose-built page: **yes, saturated** — simracingsetup alone has 3 of the top 4 and already has the F1 26 page up. This is their template business (game x wheel matrix, refreshed every annual release).
- AIO: medium — AIO can list the 6-8 slider values; the sites survive on "for PS5/Xbox/PC" variants and screenshots.
- **Beatable: 1/5.** This is exactly the per-wheelbase FFB matrix idea from B7, and simracingsetup.com + simracingcockpit.gg already run it at scale across F1/GT7/ACC/iRacing/LMU/EA WRC/Forza x Fanatec/Moza/Logitech/Thrustmaster/Simagic. Do not enter the game x wheelbase FFB matrix head-on.

### Q9. `ea wrc wheel settings moza r9 rotation`
| # | URL | Type | Strength | Age |
|---|-----|------|----------|-----|
| 1 | steamcommunity.com/app/1849250 "Moza R9 only getting 181 degrees rotation" | Steam thread | UGC | 2023-24 |
| 2 | steamcommunity sharedfiles guide "EA WRC | Moza R9 FFB Settings" | Steam guide | UGC | 2023 |
| 3 | mozaracing.com blog Moza FFB settings for iRacing (wrong game) | official vendor | big | 2024 |
| 4 | simracingcockpit.gg/ea-wrc-wheel-settings | blog | mid | 2024-25 |
| 5 | simracingsetup.com EA WRC Moza settings guide + FFB fix | blog | mid | 2024 |
| 6 | simracingcockpit.gg/ea-wrc-moza-settings "floaty-centre fix" | blog | mid | 2025 |
- Purpose-built page: **yes** (two mid sites, plus a Steam guide). Thinner than F1 25 but same incumbents.
- AIO: medium-strong — AIO already returns the settings block (Max Wheel Speed 50, SAT 150 etc.).
- **Beatable: 2/5.** Same conclusion as Q8: the wheelbase x game FFB matrix is occupied. Rally/EA WRC is also the most seasonal (spikes on release/DLC).

### Q10. `steering ratio to wheel rotation calculator sim racing`
| # | URL | Type | Strength | Age |
|---|-----|------|----------|-----|
| 1 | overtake.gg "[Download] Steering Ratio Calculator v1.1" (Excel for Race07) | forum download | UGC | ~2013 |
| 2 | coachdaveacademy.com ACC steering locks & ratios | blog | mid | 2026 |
| 3 | en.wikipedia.org/wiki/Steering_ratio | Wikipedia | big | n/a |
| 4 | en.wikipedia.org/wiki/Sim_racing_wheel | Wikipedia | big | n/a |
| 5 | procalclab.com vehicle steering wheel angle calculator | generic calc farm | small | 2024-25 |
| 6 | calculator.academy steering ratio calculator | generic calc farm | mid | n/a |
| 7 | steeringlockratiocalculator.com (http, no TLS) | single-purpose tool | small | old |
| 8 | calculatorcorp.com steering ratio calculator | generic calc farm | small | n/a |
- Purpose-built tool: only generic automotive calculators and a 2013 Excel file. **No sim-specific tool** that takes (wheel DOR, car lock-to-lock, front-wheel lock) and outputs the in-game steering-lock / ratio value for rF2/LMU/AMS2/AC setup screens — which is the actual sim-racing use.
- AIO: weak — needs the user's numbers.
- **Beatable: 4/5.** Low volume as a head term, but this is the one *calculator* in the niche that isn't already built 8 times (unlike FOV/triple-screen). Pairs naturally with the per-car tables (pre-filled dropdowns).

### Extra check: `beamng fov calculator` (calculator baseline)
west-games.com (small, purpose-built BeamNG FOV page), simracingcockpit.gg/fov-calculator (mid), jscalc.io (UGC tool), simcoaches.com (mid shop), dinex86.github.io (GitHub Pages tool), 2 Steam threads. Purpose-built tools: 5. **Beatable 2/5** — confirms B7's "don't lead with FOV". Only the per-game VFOV/HFOV quirk pages (BeamNG labels vertical FOV as horizontal) are a small angle.

## (1) Query table
| # | Query | SERP makeup | Purpose-built page? | AIO satisfies? | Beatable |
|---|---|---|---|---|---|
| 1 | ACC steering lock per car | 4 mid/small blogs with full tables, YouTube | Yes ×4 | Partial | 2 |
| 2 | AC EVO steering lock per car | Steam threads + wrong-game pages | No | Weak | 4 |
| 3 | AMS2 steering rotation per car | Asetek guide + 7 Steam/forum threads | No | Medium | 4 |
| 4 | BeamNG steering lock per car | Steam/forum threads, Wikipedia | No (values in JBeam files) | Medium | 4 |
| 5 | rFactor 2 steering lock list | 100% forum, 10+ yrs old | No | Weak | 3 (volume) |
| 6 | Forza steering lock per car | Steam threads + official | No | Strong | 3 |
| 7 | iRacing wheel rotation per car | official #1 + threads | No (manual capture) | Strong | 2 |
| 8 | F1 25 wheel settings G923 | simracingsetup ×3, simracingcockpit | Saturated | Medium | 1 |
| 9 | EA WRC Moza R9 settings | 2 mid sites + Steam guide | Yes | Medium-strong | 2 |
| 10 | steering ratio → rotation calculator (sim) | generic calc farms, 2013 Excel | No sim-specific tool | Weak | 4 |

## (2) Three strongest page ideas
1. **Per-car steering-lock / rotation tables for the under-served sims** (AC EVO, AMS2, BeamNG, rF2/LMU) — scraped from game data files where possible (BeamNG JBeam `steeringWheelLock`, AC EVO car data), one page per sim + one row-page per car for long-tail ("beamng sunburst steering lock"). Target: Q2, Q3, Q4, Q5.
2. **Sim-specific steering-lock/ratio calculator** — inputs: wheel DOR, car lock-to-lock, front-wheel lock; output: the in-game "steering lock"/ratio value per sim's setup-screen convention (rF2/LMU/AMS2/AC). Pre-filled dropdowns from the tables above. Target: Q10.
3. **Per-game FOV quirk pages** (e.g. BeamNG's vertical-vs-horizontal FOV label) — small, but the only FOV angle not already built 5 times.

## (3) Biggest risks
- The two ideas that came out of screening as the "hero" (game × wheelbase FFB matrix, FOV calculator) are **saturated** by simracingsetup.com and simracingcockpit.gg, who run that template at scale and refresh yearly. Do not compete there.
- The genuinely open queries (AC EVO, AMS2, BeamNG, rF2) are the **smaller titles**; combined US volume is probably a few hundred searches/month. AC EVO is the one growth title, and the incumbents will likely publish an EVO table at 1.0.
- Data sourcing is mixed: BeamNG/AC EVO scrapeable; iRacing (180 cars) manual in-sim capture.
- Audience: PC gamers, ad-blocker rate ~35–45%; hardware CPC is good ($1–3) but effective RPM is halved.
- Seasonality: spikes at game releases/DLC, flat otherwise.

## (4) Is ~250 pv/month achievable in 6 months?
Probable (~60%). 4 sim hub tables + ~80 per-car pages + the calculator, all from one template. Eight page-1 rankings on 100–300/mo queries clears the bar. Ceiling is low (1–3k pv/mo) unless AC EVO grows and the site owns its table before incumbents do.

## (5) Recommendation score: **6/10**
Weakest SERPs are real but sit on the smallest titles, and the high-volume half of the niche is already a template business run by two mid-authority sites. Worth doing only as the fast-mover on AC EVO + BeamNG data pages; not as the primary bet.
