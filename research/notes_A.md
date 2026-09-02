# SERP notes — candidates A1–A9 (searched 2026-09-02)

Method: 3–5 seed queries per niche via web search; noted top-10 domains, weak signals per rubric (forum/Reddit/GitHub/PDF/.edu/5+yr-old/thin/title-mismatch/low-authority), tool dominance, and AI-Overview replaceability. General note: none of the A set is a calculator-farm niche except A2 (omnicalculator/wallstreetprep/myfxbook own "max drawdown calculator").

## A1 — Pine Script function-by-function examples
- `request.security example`: traderspost.io, supa.is (2026 AI-flavored article), weinvesting.live (Blogspot), pineify.app ×2. No official docs page in top 5 — unusual; docs rank lower.
- `strategy.exit trailing stop`: tradingview docs (FAQ + concepts), tradingcode.net ×2, marketscripters.com, pineify ×2, TradingView open-source script pages (jp/kr/my mirrors — thin).
- `barstate.isconfirmed`: tradingview docs, trading-strategies.academy, tradingcode.net ×2, chartrades.com, TV script mirrors.
- `array.push example`: tradingcode.net ×2, quantnomad (v4-era), pinewizards, pineify ×2.
- `line continuation error`: medium, tradingcode ×2, quantnomad, pineify, tradingview old v3/v4 docs.
- Weak signals: Blogspot, AI-content sites, v3/v4-era doc pages, script-page mirrors with title "OPEN-SOURCE SCRIPT". Entrenched: tradingcode.net (very deep), pineify.app (aggressive 2025-26 content). AI Overview: snippet-level examples are fully answered. Gap: v5→v6 migration gotchas per function (dynamic requests, lookahead removal, line-wrap changes) with runnable before/after and the exact compiler message — pineify has started this but shallowly.

## A2 — Strategy tester metrics + calculators
- `sharpe ratio explained`: tradingview.com support ×3, TV script/idea pages ×4, bigmovealgo, myveridex. TradingView owns it.
- `profit factor`: tradingview support ×2, TV script search, traderspost, tradingcode, pinescriptlab tool, quantum-algo, backtestbase, supa.is.
- `deep backtesting how to`: tradingview support ×3, tradingheroes, wealth-memo, finestel, financialtechwiz, lunefi.
- `max drawdown calculator`: wallstreetprep, omnicalculator, loris.tools, tradingheroes, myfxbook, swingfolio, journalplus, lunetrading — calculator already dominated (omni + 5 small tool sites).
- `export csv`: Chrome Web Store ×2, tradingview support, quantnomad ×2, backtestbase.
- Weak signals: few. Official support pages are short but authoritative; AI Overview answers definitions. Gap (small): "why TradingView's Sharpe differs from yours" / metric-reconciliation pages. YMYL borderline — keep to metric math, not trading advice.

## A3 — Pine Script error-message lookup
- `requesting too many securities`: tradingcode, pinescripter.app, **studocu** (PDF-ish), tradingview v3/v4 appendix, ru.tradingview support, script mirrors, pine library.
- `"undeclared identifier"`: **YouTube #1**, tradingcode, quantnomad (color.green, old), **pinescripters.net phpBB**, pineify, script mirrors, docs (arrays page — title mismatch).
- `"line 1 mismatched input"`: tradingview error-messages doc, Medium, v4 appendix, **genspark.ai** (AI page), quantvps, tradingcode ×2, **billhowell.ca .txt file**, v3 appendix.
- `"cannot call"`: Medium, YouTube, **docsbot.ai prompt page**, v3/v4 appendix, **dev.to spam**, TV scripts search.
- `"study error"`: **publicistpaper.com, globalfordnews.com** (content-farm spam), TV idea-page mirrors ×3, script mirrors. Effectively no real answer ranks.
- Weak signals: 3+ on every query (spam, txt files, forums, YouTube, stale v3/v4 pages, title mismatches). Best raw SERP weakness in set. Caveat: AI Overview one-liners satisfy most error queries and per-error volume is tiny; the win is the long tail of ~100+ messages as one template. Gap: canonical "error → cause → minimal repro → fix → v6 note" page per message, with a paste-your-error search box.

## A4 — Three.js how-to / error pages
- `texture not loading`: discourse.threejs.org ×7 (2018–2024), educative, oreilly (2015 cookbook), github.
- `shadow not showing`: discourse ×7, educative, oreilly ×2.
- `orbitcontrols not working`: discourse ×6, sbcode.net, github ×2, educative.
- `gltf loader example`: threejs.org docs/examples ×3, medium, sbcode, codepen, github, unpkg, mirrors.
- `instancedmesh example`: math.hws.edu (.edu), medium, threejs docs, npm, discourse, github ×3, YouTube.
- Weak signals: forum threads (official but still threads), .edu, 2015 O'Reilly, GitHub repos. No big publisher. Only sbcode.net and educative are "content" competitors. AI Overview handles the standard checklist answers. Gap: problem-page with live embedded minimal repro + toggle ("flip renderer.shadowMap.enabled and watch") — forum threads can't do that; also r150+ import-map/ESM breakage pages (most threads are pre-ESM).

## A5 — ESP32 error decoder
- `failed to connect to the device`: platformio community, arduino forum, **randomnerdtutorials [SOLVED]**, home-assistant community, lastminuteengineers, docs.espressif esptool troubleshooting, rntlab, github esptool issue, habr.
- `no serial data received`: platformio, github issues ×3, arduino forum ×2, esp32.com, espressif docs, habr.
- `brownout detector`: esp32.com forum, arduino forum, github issue, randomnerdtutorials, dronebot forum, robmiles.com (2020), github discussion, **ebay/newegg junk**.
- `guru meditation`: arduino forum, github issues ×3, espressif docs ×2, esp32.com, rntlab, wikipedia (Amiga article — mismatch).
- Weak signals: forums + GitHub issues + junk e-commerce on every query. But RNT and LME are purpose-built niche authorities already doing "[SOLVED] error X" pages, and Espressif's fatal-errors guide is thorough. Gap: per-panic-reason decoder (LoadProhibited/StoreProhibited/IllegalInstruction/Cache disabled/WDT) with backtrace-decoding walkthrough; RNT has one generic troubleshooting page. Owner has no ESP32 hands-on history.

## A6 — Raspberry Pi per-problem fixes
- `no hdmi signal`: forums.raspberrypi.com ×5 (one from 2013), zbotic.in, thepihut support.
- `undervoltage detected`: pimylifeup, **facebook group**, element14, peppe8o, volumio forum, gist.github, rpi forum.
- `ssh connection refused`: manjaro forum, core-electronics forum, ubuntu-mate forum, rpi forums ×3, chewett.co.uk blog, habr.
- `wifi not working after reboot`: rpi forums ×7 (2017–2025), dietpi forum, github discussion, flightaware forum.
- `boot loop`: rpi forums ×5 (2013–2023), github issues ×2, facebook, **scribd**.
- Weak signals: heaviest forum saturation in the set, plus Facebook, Scribd, gists, decade-old threads. pimylifeup and peppe8o are the only dedicated publishers and are absent from most error queries. Gap: Bookworm/Pi 5-era fix pages (NetworkManager instead of dhcpcd, /boot/firmware/config.txt, PMIC undervoltage on Pi 5) — most ranking threads describe pre-2023 paths. Owner edge only general Linux.

## A7 — Obsidian dataview/templater snippets
- `dataview table example`: medium ×2, cassidoo.co, obsidian forum, obsidian.rocks, github (dataview), dataviewquerybuilder.com, substack.
- `templater date format`: obsidian forum ×6, help.obsidian.md, templater docs (github.io), huggingface mirror, github PR.
- `dataview query by tag`: obsidian forum ×3, obsidian.rocks, dataview docs, glama.ai MCP page, github forks ×3 (thin).
- `css snippet examples`: xda-developers, github ×2, obsidian.md help, prakashjoshipax, patreon, gumroad, huggingface mirror.
- `daily note template`: github ×2, medium, linkedin, dannb.org, systemsculpt, gumroad ×2.
- Weak signals: forum threads, GitHub forks, LinkedIn/Patreon/Gumroad, HuggingFace doc mirrors. Very weak SERP. Downsides: dataviewquerybuilder.com already owns the programmatic "20+ ready queries" angle; plugin docs are canonical; audience monetizes poorly (low CPC, ad-blockers). Gap: templater/moment date-token cheat sheet with live formatter, and dataview snippet pages with copyable frontmatter fixtures.

## A8 — Prediction-market mechanics + fee calculators
- `kalshi fee calculator`: oddsassist calculator, marketmath.io, kalshi fee-schedule PDF, botforkalshi, pm.wiki (interactive sliders), predictionhunt calculator, deadspin.
- `polymarket fees explained`: kucoin blog, medium, docs.polymarket, startpolymarket ×2 (incl. calculator), oddsshopper, help.polymarket.
- `how does kalshi settle`: defirate, kalshi help, thelines, tech-insider, oddsshopper, tradetheoutcome, pillarlabai.
- `kalshi vs polymarket fees`: rotogrinders, covers, si.com, startpolymarket, metamask, sportsbookreview, laikalabs.
- `polymarket limit order`: rocknblock, docs.polymarket, tradingvps, startpolymarket, hey-traders, polymarket101, alphascope, help.polymarket, pillarlabai.
- Weak signals: essentially none — 2026 SERP is sportsbook-affiliate media (SI, covers, rotogrinders, sportsbookreview, deadspin) + a dozen dedicated PM sites, 4+ of which already ship fee calculators, + official docs. Tool already dominates. Ad category is gambling-adjacent: AdSense restrictions and YMYL. Owner's edge (maker/taker microstructure, empirical fee curves) is real but the only defensible angle would be data-driven (e.g., live maker-rebate/fee-curve comparisons), which is more product than content-site. Recommend DQ.

## A9 — GeoGuessr country-clue reference + quizzes
- `bollards by country`: quizlet, hugequiz, geometas, geomastr, github.io note, reverseimagelocation ×3 (blog + cheat-sheet tool + learn page).
- `utility poles by country`: quizlet ×2, sporcle, geometas, YouTube, knowyourgeo, github.io.
- `camera generation guide`: YouTube ×7, openguessr education, geoguessrguide.com, geodummy.
- `license plates chart`: quizlet ×2, geometas, YouTube ×2, geomastr, github.io, wikipedia (brand page), geolearnr, scribblemaps.
- `road lines by country`: quizlet, YouTube, raiseyourgame, github.io, geomastr ×2, geometas, adobe junk, gumroad.
- Weak signals: 3+ on every query (Quizlet/Sporcle sets, GitHub Pages, YouTube, junk URLs). No publisher, lowest KD in set. Incumbents to respect: geometas.com (structured meta DB), geomastr.com, plonkit.net (not surfaced but the community's canonical guide), and reverseimagelocation.com which already runs programmatic per-country cheat-sheets. Camera-gen is a YouTube query. Fatal for the money goal: CPC in gaming is very low and the audience blocks ads; $1.25/mo is reachable only via volume. Gap: cross-cutting searchable clue DB (filter by pole+bollard+line combination -> candidate countries) and image-quiz per meta; incumbents are read-only lists.
