import json, time, urllib.parse, urllib.request, collections

EP = "https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q="
# Group A: existing coverage (alphabet soup on top seeds only)
A_SOUP = ["jura error", "saeco error", "samsung oven error", "ge dishwasher error", "delonghi error", "breville oracle"]
# Group A rest + Group B: single shots + a couple of suffix variants
B_SINGLE = [
  "breville barista express", "gaggia error", "nespresso error", "miele coffee machine error",
  "keurig error", "ninja coffee bar error", "siemens eq error", "delonghi dedica error",
  "delonghi eletta error", "samsung dishwasher error", "samsung induction error",
  "samsung washer error", "ge washing machine error", "ge fridge error", "krups coffee error",
  "samsung oven error codes", "saeco xelsis error", "jura error codes",
]
SUFFIXES = ["codes", "code", "list", "meaning", "fix", " a", " b", " c"]
SYMPTOM = ["breville", "jura", "saeco", "delonghi"]
SYM = [" not heating", " lights flashing", " wont turn on", " leaking water", " descale"]

def sug(q):
    try:
        req = urllib.request.Request(EP + urllib.parse.quote(q), headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=10) as r:
            return json.loads(r.read().decode("utf-8", "ignore"))[1]
    except Exception:
        return []

hits = collections.Counter()
def run(seeds, suffixes):
    for s in seeds:
        for suf in suffixes:
            for r in sug(s + suf):
                hits[r] += 1
            time.sleep(0.18)

run(A_SOUP, [""] + SUFFIXES)                       # deep: existing brands
run(B_SINGLE, [""])                                 # single-shot: uncovered machines + head terms
run([b for b in SYMPTOM for _ in [0]], SYM)         # symptom seeds

# bucket suggestions into candidate themes
THEMES = {
 "jura": ["jura"], "saeco/philips": ["saeco", "xelsis", "philips"], "breville": ["breville", "oracle", "barista", "sage"],
 "samsung": ["samsung"], "ge": ["ge ", "hotpoint"], "delonghi": ["delonghi", "dedica", "eletta"],
 "nespresso": ["nespresso"], "gaggia": ["gaggia"], "miele": ["miele"], "keurig": ["keurig"],
 "ninja": ["ninja"], "siemens": ["siemens"], "krups": ["krups"], "symptom": ["not heating", "flashing", "won't turn", "wont turn", "leaking"],
}
bucket = collections.Counter()
for s, n in hits.items():
    sl = s.lower()
    for theme, kws in THEMES.items():
        if any(k in sl for k in kws):
            bucket[theme] += n
            break
    else:
        bucket["other"] += n

print("=== THEME DEMAND (raw suggestion hits) ===")
for t, n in bucket.most_common():
    print(f"{t:14} {n}")
print("\n=== TOP 40 SUGGESTIONS ===")
for s, n in hits.most_common(40):
    print(f"{n:3}  {s}")
json.dump({"hits": dict(hits.most_common(400))}, open("harvest10.json", "w"), indent=1)
print("\nsaved harvest10.json,", len(hits), "distinct suggestions")
