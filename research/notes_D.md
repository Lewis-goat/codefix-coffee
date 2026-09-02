# Notes — D candidates (SERP observations, 2026-09-02)

Method: WebSearch on all 5 seed queries per niche (45 searches). "Weak" = forum/Reddit/GitHub/PDF/.edu/old page/off-topic result in top ~8.

## D1 Minecraft technical tools — 29/40
- **minecraft enchantment calculator**: Play Store app, minecraftmaps.com, wisehosting.com (hosting-company lead-gen tool), minecraft.tools, TikTok, chapmanofficial.com, arnis.io, App Store, GitHub (kkchengaf). Zero big publishers; two app-store listings and a GitHub repo in top 9.
- **minecraft give command generator**: Chrome Web Store, digminecraft, minecraftmaps, gamergeeks.net, YouTube, crazyozz.com, mcgic.com, and a stray jhu.edu page. Small tool sites only.
- **minecraft tick to seconds**: Roblox devforum (off-topic #1!), minecraft.wiki/fandom, wisehosting, rapidtoolset, CodePen, giganodes, reimaginednetwork, Microsoft Learn, Sportskeeda. Very weak SERP, but the answer (20 tps) is a one-liner — AI box eats it.
- **minecraft villager trade table**: minecraft.wiki + fandom dominate, then minecraftmaps, minecraftsearch, dedicatedminecraft.host, tradersdna (spam), minecraftplot, Scribd. Wiki strong; rest weak.
- **minecraft potion calculator**: Tableau Public (!), grahamedgecombe.com, minecraft.tools, Hypixel forum, mc1337, freeonlinecal, lans.cloud, gamesomg, PyPI. Weak.
- Weak signals: CodePen, Tableau Public, Scribd, GitHub, PyPI, Hypixel forum, off-topic Roblox forum, hosting-company tools.
- Gap: a single fast, modern, version-aware tool hub (1.21+/26.x data components changed /give syntax — many generators are stale). Enchant-order optimizer with the actual anvil cost algorithm is the best single page.
- Caveat: monetization — audience is kids, CPC near floor; the hosting companies rank because they monetize via hosting, not ads. Still likely clears $1.25/mo on volume alone.

## D2 Emulation error lookup — 25/40
- **retroarch core not loading**: libretro forums x2, clockworkpi forum, launchbox forum, FreeBSD forum, maketecheasier, emudesk.com (new one-page-per-issue site — a direct competitor doing this exact play), retroarch.com FAQ, Steam Community x2. Almost all forums.
- **yuzu error**: GitHub issues (lutris, flathub), YouTube x2, yuzu-emu.org error codes, Wikipedia (yuzu fruit/disambiguation pollutes), switchkeys.io (key-download spam), rust-lang forum. Yuzu project is dead (Nintendo, 2024) — declining.
- **dolphin emulator black screen**: launchbox forum, Facebook group, evomailserver blog, OBS forum, Ubuntu forums archive, ngemu forum, computersluggish, mystrikingly spam blog. Extremely weak.
- **pcsx2 bios not found**: pcsx2 forum, libretro forum, then 5 BIOS-download spam domains (biosps.com, ps2-bio.com, ps2bios-download.com, allps2bios.com). Piracy-adjacent SERP.
- **emudeck not working**: GitHub issue, emudeck wiki, YouTube, overkill.wtf, manual.emudeck.com, Steam Community x3.
- Weak signals everywhere (forums, GitHub, FB, spam). Easiest SERP to rank in of the whole D set.
- Risks: AdSense/Ezoic may reject emulation+BIOS content or serve junk ads; emudesk.com already occupies the "issue page" format; answers are step lists AI summarizes well.
- Gap: EmuDeck/Steam Deck-specific problems (rising) with exact log lines as titles.

## D3 Typography & CSS unit tools — 28/40
- **px to rem converter**: openreplay, Adobe edex, elementor, codebeautify, nekocalc, pixelsconverter, cssunitconverter, remtopx.com, gracefulwebstudio. Converter-farm territory (every {unit}-to-{unit} domain exists).
- **em to px**: elementor, codebeautify, pixelsconverter, pixelconverters, cssunitconverter, everythingfonts, pixelconverter.com, designyourway, emtopx.com. Same farm; four near-identical "pixelconverter" domains — saturated.
- **font pairing generator**: Monotype, Fontjoy, Fontpair, Medialoot, Fontshare, Ceros, Dribbble. Owned by established brands/tools — do not enter.
- **css clamp calculator**: utopia.fyi, dev.to (2 posts), geary.co, MDN, chrisburnell.com, marcbacon.com, clampgenerator.com, royalfig.github.io. Small personal tools rank — weakest of the set, but utopia.fyi is the canonical answer.
- **line height calculator**: Figma plugin, tools.rmv.fyi, uisurgeon, MDN, precise-type.com, calculator.academy, a .edu student page, old MDN. Weak.
- AI Overview fully answers px<->rem/em (a division). Only fluid-type/clamp/modular-scale tools resist.
- Gap: fluid type scale + clamp + rem in one generator with copyable CSS custom properties; per-value pages ("18px to rem") are programmatic but farm-saturated.

## D4 Networking calculators — 28/40
- **subnet calculator**: MxToolbox, subnet-calculator.com, SolarWinds, Vultr, IPTP, davidc.net visual subnet calc, calculator.net, subnetcalculator.dev. Brand-owned; forget it.
- **vlsm calculator**: two Play Store apps, subnet-calculator.com, inorain.com, networkingtoolbox.net, vlsmcalc.vercel.app, subnettingpractice.com, subnetcalculator.dev, alternativeto, GitHub React project. Weak — a Vercel hobby app and a GitHub repo rank.
- **port 8443**: phoenixnap, router-switch.com, network-switch.com, buyrouterswitch.com, openportcheckers.com, layer23-switch.com, pentestpad. Reseller blogs and content farms — mid-weak; page type is programmatic (one per port).
- **bandwidth calculator**: Play Store, Omni, Club3D, EarthLink, BroadbandNow, Encore, calculator.net. Ambiguous intent (ISP speed vs file transfer vs video signal); big brands + Omni + calculator.net own it.
- **cidr to netmask**: dnschecker, ipaddressguide, AWS, MxToolbox, O'Reilly book page, AWS SDK docs (off-topic), Splunk community x2. Weak-ish tail, strong head.
- Gap: per-port reference pages (what runs on port N, default services, security notes) and VLSM/supernet planners. Head terms are unwinnable; ad value is the best in the set.

## D5 Music production calculators — 27/40
- **bpm to ms calculator**: muted.io, Play Store, App Store, sengpielaudio (2000s-era page), guitartrainingstudio, rebelsproductions, polarity.me (blog post), bchillmix, tuneform. All small.
- **guitar string tension calculator**: Stringjoy, D'Addario, GHS, YouTube, EverTune, Curt Mangan, stringtensioncalculator.com, Kalium, rodrigocfd.github.io, App Store. Manufacturers own it (they have the string-mass data); GitHub page still cracks top 10.
- **note frequency chart**: muted.io, ccmla.edu, mixbutton, intmath, doctormix, liutaiomottola (old table), profdong.com (432Hz), YouTube, a Weebly PDF. Weak.
- **transpose chart**: music-theory-practice.com, acousticmusictv, PDF (pianochops), pianoandvoicewithbrenda, PDF (linehilton), Gumroad, MIT ODL page. Two raw PDFs + Gumroad = very weak.
- **delay time calculator**: guitar9, soundflow, anotherproducer, thewhippinpost, nickfever, Play Store, wavmonopoly, syncedupaudio. Small.
- No omnicalculator/calculator.net presence on any of the 5 — unusual for a calculator niche.
- Gap: one clean "producer's toolbox" (BPM->ms with dotted/triplet + Hz for LFOs, transpose-by-interval tool, tuning-frequency table selectable A=432/440/442). Programmatic BPM pages (e.g. "128 bpm to ms") are open.
- Downside: CPC low, ad inventory is music-gear affiliate; zero owner expertise.

## D6 Drone/RC calculators — 27/40
- **drone flight time calculator**: flyingtech.co.uk (blog post), GitHub README, Omni (#3), design215, flitetest, everydrone.io, chinahobbyline blog, quadpartpicker news. Omni present, not dominant; GitHub in top 2.
- **lipo c rating calculator**: Grepow blog, soko-heli-tools, batteriesinaflash, mrd-rc.com, swaytronic, translatorscafe, large-battery blog, Wikipedia, pspowers. Manufacturer blogs and old hobby sites; no real dominant tool.
- **rc motor kv calculator**: toolcroze, radiocontrolinfo x3, kwcalc, rcpress (?page_id=937), calculatorshub, rcratings, everycalculators. Calculator-farm sites, but they're thin generic farms, not authorities.
- **prop thrust calculator**: satnow, flitetest, tytorobotics, gobrushless (very old), Wikipedia "bolt thrust" and "thrust-to-weight" (off-topic), calculator.academy, banditairdrives. Weak; Google clearly lacks a good result.
- **lipo battery calculator**: Play Store, ufinebattery blog, cetinich.net microsite, makeras, power-calculation.com, tembrica, lipocalc.lerryws.xyz, large.net. Personal microsites rank.
- Gap: an accurate multi-input build calculator (motor KV × cells × prop -> thrust/hover current -> flight time) with a prop database — nobody except eCalc (paid, not in SERP) does it well. Best ad value among hobby niches (batteries, motors, FPV gear are $$$).

## D7 Coffee brewing calculators — 23/40
- **coffee ratio calculator**: coffeebros, honestcoffeeguide, verenastreet, outin, goodcalculators, beanbox, thecoffeeratio.com, montanacoffeecompany. Roaster Shopify pages + generic calc sites.
- **pour over ratio calculator**: same roaster pages, thecoffeecalculator.com, twistedgoatcoffee, glowcalculator, sagecalculator, missvickie. Calculator farms (glow/sage) present.
- **coffee water recipe calculator**: coffeebros, verenastreet, outin, generalwarfieldscoffee, goodcalculators, jojohersh.github.io, apaxlab.com, decaffed.coffee. Google misreads intent (serves ratio calcs) — a github.io page ranks for the real intent (mineral-water recipes: Barista Hustle / Lotus / Third Wave Water scaling). This is the one real gap.
- **cold brew ratio calculator**: Omni #1, balancecoffee, honestcoffeeguide, wonderwavescoffee, creativewidgets.io, thecoffeeratio. Omni owns the head.
- **grind size chart**: honestcoffeeguide, coffeechronicler, coffeeness.de, MasterClass, 1zpresso, notabarista. Established coffee blogs; not a tool query.
- AI Overview answers "1:16" outright. Coffee ratio is the most AI-vulnerable niche in the set.
- Gap: water-mineral recipe calculator (ppm/GH/KH from concentrates). Small volume, but genuinely unserved.

## D8 Browser-game dev snippets — 22/40
- **canvas requestanimationframe delta time**: MDN, webdevsimplified, dustinpfister.github.io (2018), kirupa, coderwall (2013), dr-nick-nagel.github.io, 33jsconcepts, habr, itch.io post. Weak long tail but MDN sits at #1.
- **webgl texture not loading**: Unity forum, webglfundamentals, itch.io posts x4 (game comment threads!), MDN, O'Reilly, GitHub. Google has nothing — genuinely open error-shaped query.
- **web audio api play sound on click**: openreplay blog, fireship, middleearmedia, ericbidelman (2011), UCI course page, Apple docs, educative, Oracle docs (off-topic). Old and weak.
- **pointer lock api example**: chromium.org, MDN x2, hackernoon, W3C, web.dev, educative, web-api-examples.github.io, redrockcode mirror. MDN/web.dev own it.
- **gamepad api example**: freefrontend, Smashing (2015), GitHub topics, ui.dev, dev.to x2, MDN, MIT Qt docs (off-topic).
- The problem isn't ranking — it's that snippet queries are now answered in-SERP by AI Overviews and offline by ChatGPT/Claude; click-through on how-to code pages has cratered. Each page is bespoke. Owner edge is maximal, which is the only reason this isn't lower.
- Gap: error-message-titled pages ("WebGL: INVALID_VALUE texImage2D", "AudioContext was not allowed to start") with a live reproducer — the interactive demo is the AI-resistant part.

## D9 Voxel / procedural generation — 26/40
- **greedy meshing algorithm**: GitHub x4 (AThilenius, vercidium, roboleary, cgerikj binary-greedy-meshing), Roblox devforum, two arXiv PDFs and a USPTO patent PDF (off-topic). Google literally has no article to show — best weak-SERP signal in the entire D set.
- **voxel engine tutorial**: GitHub (twilson63, 2013-era voxel.js), Medium (Unity), sites.google.com "Let's Make a Voxel Engine" (2012), GitHub x2, dev.to, theslabby.github.io, itch.io tag pages. Ancient and thin.
- **marching cubes tutorial**: Godot forum, polytech.unice.fr applet page, boristhebrave x2, Medium, Wikipedia, HuggingFace course, cs.carleton.edu student comps. Wikipedia/Boris strong; rest weak.
- **simplex noise vs perlin**: bit-101 (2021), Wikipedia x2, arXiv (off-topic), leatherbee (2018), clojurefun.wordpress (2012), pulsegeek, GitHub x2.
- **perlin noise terrain generation tutorial**: Red Blob Games (canonical), Roblox devforum, Medium, gpfault.net, gamegeniuslab, jdhwilkins, itch.io devlog + two itch.io project pages. Red Blob owns; tail weak.
- Volume is the constraint: total cluster maybe 1-2k/mo, mostly students/hobbyists; CPC moderate (Unity/Unreal/asset-store advertisers).
- Gap: interactive in-page demos (greedy meshing step-through, noise octave sliders, marching-cubes case viewer) — precisely what Blockcraft experience enables and what AI text can't replace. Only ~10-15 pages needed, but each is a real build.

## Cross-cutting
- Calculator farms: omnicalculator appears for drone flight time (#3), cold brew (#1), bandwidth (#2); calculator.net for subnet/bandwidth; calculator.academy for line-height/prop thrust; calculatorshub/everycalculators/toolcroze for KV; glowcalculator/sagecalculator for pour-over. None of the D niches is fully owned by farms — D5 (music) had zero farm presence.
- No YMYL disqualifiers in D1-D9. D2 carries an ad-network policy risk (emulation/BIOS/ROM adjacency), not a rubric DQ.
