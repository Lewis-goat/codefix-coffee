# Deep SERP audit — Three.js problem pages (live repro + fix)

Date: 2026-09-02. Method: WebSearch per query, US SERP. Screening context: notes_A.md §A4, rubric.md.
Status: COMPLETE.

## Per-query SERP notes

### Q1 `three.js texture not loading` / `texture black`
Top ~8: discourse.threejs.org ×4 (t/58538 2023, t/39305 2022, t/53425 2023, t/2661 2018), github issue #432 (2011), educative.io ×2, oreilly ×2 (2015 cookbook), random github repo.
Types: forum ×4, GitHub issue, course/publisher ×4. Age: 2011–2023, no 2025+.
Purpose-built page with live demo: NO. sbcode/educative are tutorials, not diagnostics.
Domain strength: discourse (DA ~70 but thread-level, not page-level), educative/oreilly strong but off-target titles.
AI Overview: YES, largely — the checklist (local server / async loader / path / lighting) is a paragraph. But "black" has 4 distinct root causes and a page that lets you *see* which one you have (toggle: no server, loading race, wrong colorSpace, no light) keeps some clicks. Beatable 3/5.

### Q2 `three.js shadows not showing`
Top ~8: discourse ×7 (t/3793 2018, t/30269 2021, t/6541 2018, t/14532 2020, t/44769 2022, t/36017 2022, t/14528 2020), educative, oreilly ×2 (2015).
Purpose-built live-demo page: NO. Domain: forum threads all pre-2023, title-matched though.
AI Overview: mostly — "renderer.shadowMap.enabled, light.castShadow, mesh.castShadow/receiveShadow" is the canonical 4-line answer. Residual click reasons: shadow camera frustum too small (invisible bug), shadow.mapSize, bias/acne, DirectionalLight target — those need a visual. A "shadow debugger" page with CameraHelper toggle is a real gap. Beatable 4/5 (weak SERP, but AI eats the easy half).

### Q3 `three.js OrbitControls not working`
Top ~8: discourse ×6 (2020–2024, t/55942 is the r15x+ import-path variant), sbcode.net (tutorial), github ×2 (unrelated repos), educative.
Purpose-built page: sbcode.net orbit-controls page is close (has a live example) but is a tutorial, not "why isn't mine working". DA of sbcode moderate (~40).
AI Overview: YES for the 3 classic causes (update(), import path, renderer.domElement). The r16x-specific cause (three/addons import map, `three/examples/jsm` moved to `three/addons`, controls need `import { OrbitControls } from 'three/addons/controls/OrbitControls.js'`) is where AI answers are stale. Beatable 3/5.

### Q4 `Uncaught TypeError: Failed to resolve module specifier "three"`
Top ~8: discourse ×3 (t/38262 2022, t/64815 2024, t/85336 2025 — active!), github issues #17979 (2019), #22008 (2021), blogspot (2025, thin), sbcode module-specifiers page, habr Q&A, itch.io comments (!).
Purpose-built page: sbcode's page is decent but text-only; blogspot 2025 is thin. itch.io comment threads ranking = very weak SERP.
AI Overview: partially — "add an importmap" is one-liner, but people copy the wrong map (missing `three/addons/` trailing-slash entry) and AI-generated snippets frequently do exactly that. A page with a copy-paste, version-pinned importmap generator (pick r-version → correct map) is a tool AI can't replace. Error-shaped query = high intent, recurring (every new learner hits it). Beatable 5/5.

### Q5 `three.js GLTF model black`
Top ~8: discourse ×10 (2018–2023; t/48075, t/31419, t/11597...). Zero non-forum results in top 10.
Purpose-built page: NO.
AI Overview: partial — causes are many (no lights + MeshStandardMaterial, missing env map for metalness=1, KHR_materials extensions, vertex colors, Blender export with unlit). A page showing the same GLB under each condition with toggles is a real differentiator. Beatable 4/5.

### Q6 `three.js InstancedMesh not updating`
Top ~8: threejs.org docs (strong, but reference not troubleshooting), Medium (Leanne Werner "Troubleshooting InstancedMesh" — direct competitor, low-effort), troisjs docs, github PR, dev.to, github repos ×3.
Purpose-built page: Medium article is text-only. No live demo.
AI Overview: YES — "set instanceMatrix.needsUpdate = true" is a one-liner; also computeBoundingSphere for culling. Lower volume, more advanced audience (fewer clicks, but exactly this site owner's edge). Beatable 3/5.

### Q7 `three.js colors washed out after update` (r152 color-management migration)
Top ~8: github pmndrs/postprocessing discussion #545 (2023), discourse t/56591 (2023, r152), github issue #19169 (2020), discourse t/66135 (2024, r143→r164), discourse t/66217 (2024), github issue #29549 (2024), github PR #23392, salivity.github.io (a three.js docs mirror), adobe community (irrelevant).
Purpose-built page: NO. Nearest is the official "Color management" manual page (not in top 8 for this phrasing; mirrors rank instead — SERP weakness signal).
AI Overview: partial and often WRONG — LLM answers mix pre-r152 (`outputEncoding = sRGBEncoding`, `texture.encoding`) with post-r152 (`outputColorSpace`, `texture.colorSpace`, `ColorManagement.enabled`) and mis-handle the postprocessing/EffectComposer case (OutputPass vs GammaCorrectionShader). A side-by-side live repro ("same scene, r151 vs r16x, toggle ColorManagement / outputColorSpace / OutputPass") is genuinely un-AI-able. Recurring migration pain through at least 2027 as legacy codebases upgrade. Beatable 5/5.

### Q8 `three.js scene too dark after upgrade` (r155 physically-correct lights / useLegacyLights)
Top ~8: discourse ×9 (t/59879 2024, t/53733 megathread 2023 incl. Mugen87/donmccurdy replies, t/56141, t/56181, t/74974 2025), adobe community (noise).
Purpose-built page: NO. The megathread is authoritative but 40+ posts long — exactly what a single page with "intensity converter: legacy → physical (×π for directional/ambient, decay=2 + candela for point/spot)" beats.
AI Overview: partial — "multiply intensity by π / set useLegacyLights" is short, but users don't know *which* version boundary they crossed and the decay change is usually omitted. An interactive slider (pre/post r155 intensity) is a tool. Beatable 5/5. Note: `useLegacyLights` removed r165 — pages that say "just set useLegacyLights=true" are now wrong (AI included).

### Q9 `sRGBEncoding is not defined` / `export 'sRGBEncoding' was not found in 'three'`
Top ~8: github googlemaps/js-three issue #1036 (2024), github issue #23251 (2022), discourse ×4 (2020–2024), wikipedia (!), neofixer.arizona.edu docs mirror ×3 (.edu mirror of three.js docs).
Purpose-built page: NO. Very weak SERP: Wikipedia + .edu mirror of docs in top 10 for an error string.
AI Overview: YES — "rename to SRGBColorSpace" one-liner fully satisfies the literal error. Residual clicks: people whose *dependency* (googlemaps/js-three, troika, drei, older R3F) still uses it — needs a compat table (which lib version supports three ≥ r152/r162). Better as one row in a "removed/renamed APIs r150→r17x" lookup page than a standalone. Beatable 4/5 (easy SERP, low click retention).

### Q10 `three.js raycaster not working` / `intersectObjects returns empty`
Top ~8: discourse ×4 (t/27746 2021 gltf, t/54611 2023, t/26281 2020, t/10171 2019), github issues #20697 (2020), #8081 (2016), github PR #8733, a personal notes repo, oreilly 2015, educative.
Purpose-built page: NO.
AI Overview: partial — NDC normalization + setFromCamera is a paragraph; but the real failures are visual/structural: pointer coords wrong when canvas isn't full-window (getBoundingClientRect), `recursive:true` for GLTF groups, InstancedMesh needs matrixWorld, layers, near/far, camera inside group, skinned mesh bounds. A live demo where you click and see the ray drawn (ArrowHelper) with each pitfall togglable is a strong page. Beatable 4/5.

### Dropped after exploration
- `canvas blurry / setPixelRatio` — official manual "Responsive design" page + MDN + Medium; AI one-liner suffices. 2/5.
- `window resize stretched` — dev.to + official manual + 2015 rioki; one-liner (`camera.aspect; updateProjectionMatrix; setSize`). 2/5.

## (1) Query table

| # | Query (target) | SERP top-8 makeup | Newest page | Live-demo page exists? | AI-Overview satisfies? | Beatable (1–5) |
|---|---|---|---|---|---|---|
| 1 | three.js texture not loading / black | discourse×4, GH issue 2011, educative×2, O'Reilly 2015×2 | 2023 | No | Mostly | 3 |
| 2 | three.js shadows not showing | discourse×7, educative, O'Reilly 2015×2 | 2022 | No | Mostly (easy half) | 4 |
| 3 | three.js OrbitControls not working | discourse×6, sbcode, GH repos×2, educative | 2024 | sbcode (tutorial, partial) | Yes for classic causes; stale for r16x addons path | 3 |
| 4 | Failed to resolve module specifier "three" | discourse×3 (2025), GH issues×2, blogspot, sbcode, habr, itch.io comments | 2025 | No (text only) | Partly — AI importmaps often wrong | 5 |
| 5 | three.js GLTF model black | discourse×10, nothing else | 2023 | No | Partly (many causes) | 4 |
| 6 | InstancedMesh not updating | official docs, Medium, troisjs, GH×4, dev.to | 2024 | No | Yes | 3 |
| 7 | colors washed out after update (r152) | discourse×4, GH×4, docs mirror, noise | 2024 | No | Partly, often wrong | 5 |
| 8 | scene too dark after upgrade (r155 lights) | discourse×9 (megathread), noise | 2025 | No | Partly (omits decay; useLegacyLights removed) | 5 |
| 9 | sRGBEncoding is not defined | GH×2, discourse×4, Wikipedia, .edu docs mirror×3 | 2024 | No | Yes | 4 |
| 10 | raycaster not working / no intersects | discourse×4, GH×3, O'Reilly 2015, educative | 2023 | No | Partly | 4 |

Observed across all 10: zero big publishers; zero StackOverflow in top 8 on any query (Google is favouring discourse.threejs.org for this ecosystem); no purpose-built diagnostic page with a live repro anywhere. The only "content" competitors are sbcode.net, educative.io, Medium one-offs, and docs mirrors (.edu / github.io) — mirrors ranking is a strong SERP-weakness signal.

## (2) Three strongest page ideas

1. **"three.js import map generator + `Failed to resolve module specifier "three"` fixer"** — targets: `Failed to resolve module specifier "three"`, `three/addons OrbitControls import not working`, `three.js importmap example r1xx`, `Relative references must start with "/"` three. Page: pick version → copy-paste `<script type="importmap">` with both `three` and `three/addons/` entries, live "does it load?" check in-page, plus explanation of es-module-shims for Safari <16.4. Every new learner hits this; SERP has itch.io comments and blogspot in top 10.
2. **"Scene too dark / colors washed out after upgrading three.js" — r152 color + r155 lighting migration lab** — targets: `three.js colors washed out after update`, `three.js scene too dark after upgrade`, `useLegacyLights removed`, `outputEncoding is not a function`, `sRGBEncoding is not defined` (all in one cluster, ~6–8 pages sharing one demo harness). Page: same scene rendered in two iframes at pinned old/new versions; sliders for intensity, toggles for ColorManagement/outputColorSpace/OutputPass; intensity converter (legacy→physical). LLM answers are provably wrong here (they still recommend useLegacyLights, removed r165) — best AI-resistance in the set.
3. **"Shadows not showing — live shadow debugger"** — targets: `three.js shadows not showing`, `directional light shadow not working`, `shadow acne three.js`, `shadow cut off / disappears`. Page: one scene with checkboxes for renderer.shadowMap.enabled / castShadow / receiveShadow / mapSize / bias, plus CameraHelper overlay for the shadow-camera frustum ("why shadows vanish at the edge"). Forum threads can't show it; AI Overview covers only the 4 booleans. Raycaster debugger (Q10, ray drawn as ArrowHelper) is the natural 4th.

## (3) Biggest risks

- **AI cannibalization (biggest).** Of the 10, ~4 are fully answered by a Google AI Overview / ChatGPT (Q1, Q3-classic, Q6, Q9). Realistic click-through on error queries with AIO present is now ~30–50% of 2022 levels. Only queries where the answer is *visual* or *version-dependent-and-LLMs-are-stale* (Q2, Q4, Q5, Q7, Q8, Q10) retain clicks. Migration-breakage pages have a shelf-life: strong 2024–2027, then decay as codebases finish migrating — but three.js breaks something every ~10 releases, so the *template* stays alive (e.g. WebGPURenderer/TSL migration is the next wave).
- **discourse.threejs.org authority.** Official forum, DA ~70, Google clearly prefers it for this ecosystem; a fresh thread can outrank a new site for months. Mitigation: threads are page-level weak (old, unstructured, no title match on many variants); a page that answers the *cluster* with a demo can take the featured-snippet/"video-like" slot. Also: post the demo link *in* relevant discourse threads (allowed, common) — that's both a backlink and direct referral.
- **Ad economics.** Dev audience ad-blocker rate 40–55% (this niche skews higher: Chrome-devtools-open users). Tech CPC looks like $1.5–4 but display RPM on a small dev site with AdSense/Ezoic-tier is realistically $3–8 per 1k *unblocked* views → effective $1.5–4 RPM. At 250 pv/mo that is ~$0.50–1/month. Monetization must not be display ads: the sensible path is (a) affiliate to Three.js Journey / Udemy-style courses, (b) a paid "three.js version migration checker" or template pack, (c) consulting leads, (d) sponsorship from Poly Haven / Spline / Needle / Sketchfab-type tools. Display ads alone fail the rubric on ad value in practice.
- **Volume ceiling.** Whole error-cluster is small: three.js core search interest is stable but the per-error long tail is probably 50–800 searches/mo each in the US, and shrinking with AIO. A 40-page site plausibly tops out ~2–6k pv/mo, not 50k.
- **Maintenance.** Live demos pinned to a version go stale; each page needs a "tested on r1xx" badge and a re-run every ~6 months. This is a cost, but it's also the moat (forum threads never get updated).

## (4) Is ~250 pv/month achievable in 6 months?

Yes — probable (≈70%) with: 25–40 pages built off one demo-harness template (Three.js + import-map + version switcher), ~3 pages/week; titles matching the exact error strings; each page ≤800 words + live demo + copy-paste fix + "which version changed this" table; a hub page per cluster (Import/ESM, Color & lighting migration, Shadows, Loaders/GLTF, Interaction/Raycast, Performance/Instancing); linking demos from 10–15 relevant discourse threads and 2–3 GitHub issues (the only realistic backlink source, and it drives direct referral independent of Google); JSON-LD FAQ/HowTo markup; indexing via Search Console. 250 pv/mo needs only ~8 pv/day — 15 pages ranking page-1 for a 100–300/mo query each at 5–10% CTR does it. The ceiling matters more than the floor: expect 1–3k pv/mo at 12–18 months, not more.

## (5) Recommendation score: **7/10**

Rationale: best personal-edge fit of the finalists (owner ships Three.js games; can build live repros that no competitor page has), unusually weak SERPs (forums, 2015 books, docs mirrors, itch.io comments), and a real, defensible format (live toggleable repro) that AI Overviews structurally cannot replicate. Held back from 8–9 by: small absolute volume, ~40% of candidate queries already eaten by AI one-liners, dev ad-blocking gutting display RPM, and migration-page decay. Proceed only if monetization is affiliate/product/lead-based rather than display ads, and lead with the two migration clusters (import maps; r152/r155 color+lighting) where LLM answers are demonstrably wrong.

Status: COMPLETE.
