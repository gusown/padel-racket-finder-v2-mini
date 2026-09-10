// All specs, test ratings, prices and links: padelreference.com product pages (September 2026)
const PADELREFERENCE_DATA = [
  { name: "HEAD Extreme Pro 2026", brand: "HEAD", url: "https://www.padelreference.com/en/padel-rackets/p/head-extreme-pro-2026", price: 279.90, shape: "Diamond", weight: 367.5, balance: "Head Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 10, control: 7, comfort: 7, maneuverability: 8, effect: 8, tolerance: 8 } },
  { name: "HEAD Coello Motion 2026", brand: "HEAD", url: "https://www.padelreference.com/en/padel-rackets/p/head-coello-motion-2026", price: 279.90, shape: "Diamond", weight: 360, balance: "Head Heavy", feel: "Flexible / Comfort", level: "Advanced to Expert", ratings: { power: 9, control: 7, comfort: 8, maneuverability: 7, effect: 8, tolerance: 7 } },
  { name: "HEAD Radical Motion 2026", brand: "HEAD", url: "https://www.padelreference.com/en/padel-rackets/p/head-radical-motion-2026", price: 158.90, shape: "Teardrop", weight: 360, balance: "Balanced", feel: "Flexible / Comfort", level: "Advanced to Expert", ratings: { power: 7, control: 8, comfort: 9, maneuverability: 8, effect: 6, tolerance: 9 } },
  { name: "HEAD Coello Vibe 2026", brand: "HEAD", url: "https://www.padelreference.com/en/padel-rackets/p/head-coello-vibe-2026", price: 115.90, shape: "Teardrop", weight: 355, balance: "Balanced", feel: "Hybrid / Intermediate", level: "Beginner", ratings: { power: 7, control: 7, comfort: 9, maneuverability: 8, effect: 5, tolerance: 8 } },
  { name: "HEAD Xenon 2026", brand: "HEAD", url: "https://www.padelreference.com/en/padel-rackets/p/head-xenon-2026", price: 67.90, shape: "Round", weight: 363, balance: "Handle Heavy", feel: "Flexible / Comfort", level: "Beginner", ratings: { power: 5, control: 8, comfort: 8, maneuverability: 8, effect: 6, tolerance: 8 } },
  { name: "Adidas Metalbone 3.5 2026", brand: "Adidas", url: "https://www.padelreference.com/en/padel-rackets/p/adidas-metalbone-35-2026", price: 284.90, shape: "Diamond", weight: 360, balance: "Head Heavy", feel: "Hybrid / Intermediate", level: "Advanced to Expert", ratings: { power: 9, control: 8, comfort: 8, maneuverability: 7, effect: 9, tolerance: 8 } },
  { name: "Adidas Cross It Light 3.5 2026", brand: "Adidas", url: "https://www.padelreference.com/en/padel-rackets/p/adidas-cross-it-light-35-2026", price: 239.90, shape: "Round", weight: 357.5, balance: "Handle Heavy", feel: "Hybrid / Intermediate", level: "Advanced to Expert", ratings: { power: 7, control: 8, comfort: 9, maneuverability: 9, effect: 7, tolerance: 8 } },
  { name: "Adidas Cross It Team Control 3.5 2026", brand: "Adidas", url: "https://www.padelreference.com/en/palas-de-padel/p/adidas-cross-it-team-control-35-2026", price: 149.90, shape: "Round", weight: 365, balance: "Balanced", feel: "Flexible / Comfort", level: "Advanced to Expert", ratings: { power: 7, control: 8, comfort: 9, maneuverability: 8, effect: 7, tolerance: 8 } },
  { name: "Babolat Technical Viper 3.0", brand: "Babolat", url: "https://www.padelreference.com/en/padel-rackets/p/babolat-technical-viper-3-padel-racket", price: 309.90, shape: "Diamond", weight: 370, balance: "Head Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 10, control: 6, comfort: 7, maneuverability: 6, effect: 9, tolerance: 6 } },
  { name: "Babolat Veron Juan Lebron 3.0 2026", brand: "Babolat", url: "https://www.padelreference.com/en/babolat-padel-rackets/p/babolat-veron-juan-lebron-3.0-2026", price: 215.90, shape: "Diamond", weight: 365, balance: "Head Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 8, control: 7, comfort: 8, maneuverability: 7, effect: 8, tolerance: 7 } },
  { name: "Babolat Air Veron 2026", brand: "Babolat", url: "https://www.padelreference.com/en/padel-rackets/p/babolat-air-veron-2026-padel-racket", price: 198.90, shape: "Teardrop", weight: 355, balance: "Head Heavy", feel: "Hybrid / Intermediate", level: "Intermediate", ratings: { power: 8, control: 7, comfort: 7, maneuverability: 9, effect: 8, tolerance: 8 } },
  { name: "Babolat Air Origin 2025", brand: "Babolat", url: "https://www.padelreference.com/en/padel-rackets/p/babolat-air-origin-2025", price: 99.90, shape: "Teardrop", weight: 345, balance: "Balanced", feel: "Flexible / Comfort", level: "Beginner", ratings: { power: 6, control: 7, comfort: 8, maneuverability: 9, effect: 4, tolerance: 9 } },
  { name: "Babolat Counter Origin 2025", brand: "Babolat", url: "https://www.padelreference.com/en/padel-rackets/p/babolat-counter-origin", price: 89.90, shape: "Round", weight: 355, balance: "Handle Heavy", feel: "Flexible / Comfort", level: "Beginner", ratings: { power: 4, control: 7, comfort: 8, maneuverability: 8, effect: 7, tolerance: 9 } },
  { name: "Wilson Bela Pro V3 2025", brand: "Wilson", url: "https://www.padelreference.com/en/padel-rackets/p/wilson-bela-pro-v3-2025", price: 209.90, shape: "Diamond", weight: 367.5, balance: "Head Heavy", feel: "Flexible / Comfort", level: "Advanced to Expert", ratings: { power: 9, control: 7, comfort: 7, maneuverability: 6, effect: 7, tolerance: 7 } },
  { name: "Wilson Defy V1 2025", brand: "Wilson", url: "https://www.padelreference.com/en/padel-rackets/p/wilson-defy-v1-2025", price: 168.90, shape: "Diamond", weight: 365, balance: "Head Heavy", feel: "Flexible / Comfort", level: "Advanced to Expert", ratings: { power: 9, control: 8, comfort: 7, maneuverability: 5, effect: 9, tolerance: 6 } },
  { name: "Wilson Blade V4 2026", brand: "Wilson", url: "https://www.padelreference.com/en/padel-rackets/p/wilson-blade-v4-2026", price: 189.90, shape: "Teardrop", weight: 365, balance: "Balanced", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 8, control: 8, comfort: 7, maneuverability: 8, effect: 8, tolerance: 8 } },
  { name: "Wilson Optix V2 Lite Lilac", brand: "Wilson", url: "https://www.padelreference.com/en/padel-rackets/p/wilson-optix-v2-lite-lilac", price: 99.90, shape: "Round", weight: 360, balance: "Handle Heavy", feel: "Flexible / Comfort", level: "Beginner", ratings: { power: 6, control: 8, comfort: 8, maneuverability: 9, effect: 5, tolerance: 8 } },
  { name: "Bullpadel Vertex 03 Light X-Series", brand: "Bullpadel", url: "https://www.padelreference.com/en/padel-rackets/p/bullpadel-vertex-03-light-x-series", price: 149.90, shape: "Diamond", weight: 355, balance: "Head Heavy", feel: "Hybrid / Intermediate", level: "Advanced to Expert", ratings: { power: 8, control: 7, comfort: 8, maneuverability: 9, effect: 9, tolerance: 8 } },
  { name: "Bullpadel Hack 04 2026", brand: "Bullpadel", url: "https://www.padelreference.com/en/padel-rackets/p/bullpadel-hack-04-26", price: 209.90, shape: "Diamond", weight: 367.5, balance: "Head Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 10, control: 8, comfort: 7, maneuverability: 7, effect: 9, tolerance: 7 } },
  { name: "Bullpadel Neuron 02 2026", brand: "Bullpadel", url: "https://www.padelreference.com/en/padel-rackets/p/bullpadel-neuron-02-2026", price: 216.90, shape: "Teardrop", weight: 362.5, balance: "Balanced", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 8, control: 9, comfort: 7, maneuverability: 7, effect: 5, tolerance: 7 } },
  { name: "Bullpadel Vertex 05 Hybrid 2026", brand: "Bullpadel", url: "https://www.padelreference.com/en/padel-rackets/p/bullpadel-vertex-05-hybrid-2026", price: 224.90, shape: "Teardrop", weight: 365, balance: "Balanced", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 9, control: 9, comfort: 8, maneuverability: 7, effect: 8, tolerance: 8 } },
  { name: "Bullpadel Flow 27", brand: "Bullpadel", url: "https://www.padelreference.com/en/padel-rackets/p/bullpadel-flow-27", price: 269.90, shape: "Diamond", weight: 355, balance: "Head Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 7, control: 8, comfort: 8, maneuverability: 9, effect: 8, tolerance: 8 } },
  { name: "NOX X-Hero Blue 2026", brand: "NOX", url: "https://www.padelreference.com/en/padel-rackets/p/nox-x-hero-blue-2026", price: 64.90, shape: "Round", weight: 355, balance: "Handle Heavy", feel: "Flexible / Comfort", level: "Beginner", ratings: { power: 5, control: 8, comfort: 8, maneuverability: 8, effect: 5, tolerance: 8 } },
  { name: "NOX X-One Silhouette 2026", brand: "NOX", url: "https://www.padelreference.com/en/padel-rackets/p/padel-racket-nox-x-one-silhouette-2026", price: 84.90, shape: "Round", weight: 355, balance: "Balanced", feel: "Flexible / Comfort", level: "Intermediate", ratings: { power: 4, control: 7, comfort: 9, maneuverability: 9, effect: 6, tolerance: 8 } },
  { name: "NOX ML10 Ventus Control 3K 2026", brand: "NOX", url: "https://www.padelreference.com/en/padel-rackets/p/nox-ml10-ventus-control-3k-2026", price: 225.90, shape: "Round", weight: 365, balance: "Balanced", feel: "Flexible / Comfort", level: "Advanced to Expert", ratings: { power: 7, control: 10, comfort: 8, maneuverability: 7, effect: 8, tolerance: 7 } },
  { name: "NOX AT10 Genius 12K Alum Xtrem 2026", brand: "NOX", url: "https://www.padelreference.com/en/padel-rackets/p/nox-AT10-genius-12K-alum-xtrem-2026", price: 234.90, shape: "Teardrop", weight: 365, balance: "Balanced", feel: "Hybrid / Intermediate", level: "Advanced to Expert", ratings: { power: 9, control: 10, comfort: 7, maneuverability: 8, effect: 9, tolerance: 8 } },
  { name: "NOX EA10 Ventus Attack 12K Xtrem 2026", brand: "NOX", url: "https://www.padelreference.com/en/padel-rackets/p/nox-EA10-ventus-attack-12K-xtrem-2026", price: 234.90, shape: "Diamond", weight: 365, balance: "Head Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 9, control: 7, comfort: 7, maneuverability: 8, effect: 7, tolerance: 8 } },
  { name: "Siux Beat Play Control 2026", brand: "Siux", url: "https://www.padelreference.com/en/padel-rackets/p/siux-beat-play-control-2026", price: 78.90, shape: "Round", weight: 362.5, balance: "Handle Heavy", feel: "Flexible / Comfort", level: "Beginner", ratings: { power: 5, control: 6, comfort: 8, maneuverability: 8, effect: 5, tolerance: 9 } },
  { name: "Siux Astra Go Control 2026", brand: "Siux", url: "https://www.padelreference.com/en/siux-padel-rackets/p/siux-astra-go-control-2026", price: 94.90, shape: "Round", weight: 355, balance: "Handle Heavy", feel: "Hybrid / Intermediate", level: "Intermediate", ratings: { power: 7, control: 8, comfort: 8, maneuverability: 8, effect: 6, tolerance: 6 } },
  { name: "Siux Trilogy Elite 2026", brand: "Siux", url: "https://www.padelreference.com/en/padel-rackets/p/siux-trilogy-elite-2026", price: 169.90, shape: "Round", weight: 367.5, balance: "Handle Heavy", feel: "Hybrid / Intermediate", level: "Advanced to Expert", ratings: { power: 7, control: 10, comfort: 8, maneuverability: 8, effect: 7, tolerance: 8 } },
  { name: "Siux Fenix Elite 2026", brand: "Siux", url: "https://www.padelreference.com/en/padel-rackets/p/siux-fenix-elite-2026", price: 169.90, shape: "Diamond", weight: 362.5, balance: "Head Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 9, control: 7, comfort: 7, maneuverability: 7, effect: 7, tolerance: 7 } },
  { name: "Siux Electra Elite 2026", brand: "Siux", url: "https://www.padelreference.com/en/padel-rackets/p/siux-electra-elite-2026", price: 169.90, shape: "Teardrop", weight: 362.5, balance: "Balanced", feel: "Hybrid / Intermediate", level: "Advanced to Expert", ratings: { power: 8, control: 9, comfort: 7, maneuverability: 7, effect: 9, tolerance: 8 } },
  { name: "StarVie Helion 2024", brand: "StarVie", url: "https://www.padelreference.com/en/starvie-padel-rackets/p/starvie-helion-2024", price: 99.90, shape: "Round", weight: 365, balance: "Handle Heavy", feel: "Flexible / Comfort", level: "Intermediate", ratings: { power: 7, control: 9, comfort: 8, maneuverability: 8, effect: 7, tolerance: 7 } },
  { name: "StarVie Aquila 2025", brand: "StarVie", url: "https://www.padelreference.com/en/starvie-padel-rackets/p/starvie-aquila-2025", price: 160.90, shape: "Teardrop", weight: 365, balance: "Balanced", feel: "Flexible / Comfort", level: "Intermediate", ratings: { power: 8, control: 7, comfort: 7, maneuverability: 7, effect: 7, tolerance: 7 } },
  { name: "StarVie Metheora Pro Touch 2025", brand: "StarVie", url: "https://www.padelreference.com/en/padel-rackets/p/starvie-metheora-pro-touch-2025", price: 169.90, shape: "Round", weight: 365, balance: "Handle Heavy", feel: "Flexible / Comfort", level: "Intermediate", ratings: { power: 7, control: 10, comfort: 7, maneuverability: 7, effect: 8, tolerance: 8 } },
  { name: "StarVie Triton Pro 2025", brand: "StarVie", url: "https://www.padelreference.com/en/starvie-padel-rackets/p/starvie-triton-pro-2025", price: 229, shape: "Teardrop", weight: 365, balance: "Balanced", feel: "Stiff / Power", level: "Intermediate", ratings: { power: 9, control: 8, comfort: 7, maneuverability: 6, effect: 8, tolerance: 9 } },
  { name: "StarVie Brava Pro 2025", brand: "StarVie", url: "https://www.padelreference.com/en/padel-rackets/p/starvie-brava-pro-2025", price: 159, shape: "Teardrop", weight: 367.5, balance: "Balanced", feel: "Stiff / Power", level: "Intermediate", ratings: { power: 8, control: 9, comfort: 8, maneuverability: 9, effect: 9, tolerance: 8 } },
  { name: "Tecnifibre Curva Power 2026", brand: "Tecnifibre", url: "https://www.padelreference.com/en/padel-rackets/p/tecnifibre-curva-power-2026", price: 249.90, shape: "Teardrop", weight: 360, balance: "Balanced", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 9, control: 7, comfort: 7, maneuverability: 7, effect: 7, tolerance: 8 } },
  { name: "Tecnifibre Curva Soft 2026", brand: "Tecnifibre", url: "https://www.padelreference.com/en/padel-rackets/p/tecnifibre-curva-soft-2026", price: 199.90, shape: "Teardrop", weight: 358, balance: "Balanced", feel: "Flexible / Comfort", level: "Intermediate", ratings: { power: 7, control: 8, comfort: 8, maneuverability: 9, effect: 7, tolerance: 8 } },
  { name: "Tecnifibre Bomba Lite", brand: "Tecnifibre", url: "https://www.padelreference.com/en/padel-rackets/p/tecnifibre-bomba-lite", price: 135.90, shape: "Diamond", weight: 345, balance: "Balanced", feel: "Flexible / Comfort", level: "Beginner", ratings: { power: 6, control: 7, comfort: 9, maneuverability: 9, effect: 6, tolerance: 9 } },
  { name: "Tecnifibre Bomba Max", brand: "Tecnifibre", url: "https://www.padelreference.com/en/padel-rackets/p/tecnifibre-bomba-max", price: 215.90, shape: "Diamond", weight: 365, balance: "Balanced", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 9, control: 8, comfort: 6, maneuverability: 7, effect: 7, tolerance: 6 } },
  { name: "Tecnifibre Wall Master 370", brand: "Tecnifibre", url: "https://www.padelreference.com/en/padel-rackets/p/wall-master-370", price: 109.90, shape: "Round", weight: 370, balance: "Handle Heavy", feel: "Stiff / Power", level: "Intermediate", ratings: { power: 7, control: 8, comfort: 8, maneuverability: 8, effect: 7, tolerance: 8 } },
  { name: "Dunlop FX Pro", brand: "Dunlop", url: "https://www.padelreference.com/en/padel-rackets/p/dunlop-fx-pro", price: 189.90, shape: "Teardrop", weight: 370, balance: "Head Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 9, control: 7, comfort: 8, maneuverability: 8, effect: 7, tolerance: 8 } },
  { name: "Dunlop Nanomax Lite 2026", brand: "Dunlop", url: "https://www.padelreference.com/en/padel-rackets/p/dunlop-nanomax-lite-2026", price: 74.90, shape: "Teardrop", weight: 360, balance: "Balanced", feel: "Flexible / Comfort", level: "Beginner", ratings: { power: 7, control: 7, comfort: 8, maneuverability: 9, effect: 6, tolerance: 8 } },
  { name: "Dunlop Nanomax Pro 2026", brand: "Dunlop", url: "https://www.padelreference.com/en/padel-rackets/p/dunlop-nanomax-pro-2026", price: 84.90, shape: "Teardrop", weight: 365, balance: "Balanced", feel: "Hybrid / Intermediate", level: "Intermediate", ratings: { power: 7, control: 8, comfort: 8, maneuverability: 8, effect: 6, tolerance: 8 } },
  { name: "Dunlop Galactica OS 2025", brand: "Dunlop", url: "https://www.padelreference.com/en/padel-rackets/p/dunlop-galactica-os-2025", price: 128.90, shape: "Round", weight: 355, balance: "Handle Heavy", feel: "Hybrid / Intermediate", level: "Intermediate", ratings: { power: 8, control: 8, comfort: 7, maneuverability: 8, effect: 7, tolerance: 6 } },
  { name: "Dunlop PDL 25 Galactica Pro", brand: "Dunlop", url: "https://www.padelreference.com/en/padel-rackets/p/dunlop-pdl-25-galactica-pro", price: 189.90, shape: "Teardrop", weight: 370, balance: "Balanced", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 9, control: 9, comfort: 7, maneuverability: 6, effect: 9, tolerance: 7 } },
  { name: "Oxdog Ultimate Court 2026", brand: "Oxdog", url: "https://www.padelreference.com/en/padel-rackets/p/oxdog-ultimate-court-2026", price: 129.90, shape: "Diamond", weight: 365, balance: "Balanced", feel: "Hybrid / Intermediate", level: "Intermediate", ratings: { power: 8, control: 6, comfort: 8, maneuverability: 7, effect: 9, tolerance: 8 } },
  { name: "Osaka Deshi Control Green/Black", brand: "Osaka", url: "https://www.padelreference.com/en/padel-rackets/p/osaka-deshi-control-greenblack", price: 89.90, shape: "Round", weight: 360, balance: "Handle Heavy", feel: "Flexible / Comfort", level: "Beginner", ratings: { power: 7, control: 8, comfort: 7, maneuverability: 8, effect: 8, tolerance: 6 } }
];

const BALANCE_MAP = { "Handle Heavy": "Low", "Balanced": "Medium", "Head Heavy": "High" };
const FEEL_HARDNESS = { "Flexible / Comfort": 4, "Hybrid / Intermediate": 5.5, "Stiff / Power": 8 };
const LEVEL_MAP = { "Beginner": "Beginner", "Intermediate": "Intermediate", "Advanced to Expert": "Advanced" };
const LEVEL_GROWTH = { Beginner: 6, Intermediate: 8, Advanced: 9 };

const BALANCE_LABELS = { Low: "grifflastig", Medium: "ausgewogen", High: "kopflastig" };
const FEEL_LABELS = { "Flexible / Comfort": "weich", "Hybrid / Intermediate": "mittel", "Stiff / Power": "hart" };
const LEVEL_LABELS = { Beginner: "Einsteiger", Intermediate: "Mittelklasse", Advanced: "Fortgeschritten/Profi" };

function normalizeRacket(raw) {
  const r = raw.ratings;
  const level = LEVEL_MAP[raw.level];
  return {
    name: raw.name,
    brand: raw.brand,
    url: raw.url,
    price: raw.price,
    form: raw.shape,
    weight: raw.weight,
    balance: BALANCE_MAP[raw.balance],
    feel: raw.feel,
    hardness: FEEL_HARDNESS[raw.feel],
    level,
    power: r.power,
    control: r.control,
    comfort: r.comfort,
    maneuver: r.maneuverability,
    effect: r.effect,
    forgiveness: r.tolerance,
    // Not published by the shop: derived from its ratings and level label
    net: (r.maneuverability + r.control) / 2,
    defense: (r.control + r.tolerance) / 2,
    growth: LEVEL_GROWTH[level]
  };
}

const RACKETS = PADELREFERENCE_DATA.map(normalizeRacket);

const QUICK_QUESTIONS = [
  {
    id: "level",
    title: "Wie viel Padel hast du gespielt?",
    hint: "Eine \"Session\" ist eine Trainings- oder Spieleinheit auf dem Platz.",
    opts: [["A", "0–5 Sessions"], ["B", "5–20 Sessions"], ["C", "20–50 Sessions"], ["D", "50+ Sessions / Turniere"]]
  },
  {
    id: "style",
    title: "Wie würdest du dein Spiel beschreiben?",
    hint: "Defensiv = du spielst sicher und wartest auf Fehler des Gegners. Offensiv = du suchst aktiv den Punktgewinn über Smashes und Angriffe.",
    opts: [["A", "Defensiv"], ["B", "Allround"], ["C", "Offensiv"]]
  },
  {
    id: "position",
    title: "Wo spielst du am liebsten?",
    hint: "Deine bevorzugte Position beeinflusst, wie wichtig Netzspiel (Volleys) gegenüber Defensive (Lobs, Abwehr) für deinen Schläger ist.",
    opts: [["A", "Hinten"], ["B", "Variabel"], ["C", "Gerne am Netz"], ["D", "Sehr offensiv"]]
  },
  { id: "power", title: "Wie wichtig ist dir Power?", hint: "Power beschreibt, wie viel zusätzliche Schlagkraft dir der Schläger selbst gibt — besonders hilfreich, wenn dir noch die eigene Wucht fehlt.", range: true },
  { id: "control", title: "Wie wichtig ist dir Kontrolle?", hint: "Kontrolle beschreibt, wie präzise du den Ball platzieren kannst — meist wichtiger als Power für ein konstantes Spiel.", range: true },
  { id: "forgive", title: "Wie wichtig ist dir Fehlertoleranz / großer Sweet Spot?", hint: "Der Sweet Spot ist die Zone auf dem Schlägerkopf, die den saubersten Treffer gibt. Ein großer Sweet Spot verzeiht auch Treffer, die nicht perfekt mittig sitzen.", range: true },
  { id: "comfort", title: "Wie wichtig ist dir Komfort?", hint: "Komfort beschreibt, wie wenig Vibration beim Treffer in Arm und Schulter ankommt — wichtig für lange Sessions.", range: true },
  {
    id: "joints",
    title: "Hast du manchmal Beschwerden in Ellenbogen, Handgelenk oder Schulter?",
    hint: "Im Volksmund oft \"Tennisarm\" genannt. Weichere Schläger mit neutraler oder niedriger Balance schonen die Gelenke spürbar mehr als harte Diamond-Schläger.",
    opts: [["A", "Nein, keine Beschwerden"], ["B", "Manchmal, leichte Beschwerden"], ["C", "Ja, regelmäßig"]]
  },
  {
    id: "weakness",
    title: "Wo siehst du aktuell deine größten Schwächen?",
    hint: "Wähle alles, was zutrifft. Wir gleichen deine Schwächen mit den Eigenschaften des Schlägers aus und geben dir am Ende passende Trainingstipps.",
    multi: true,
    opts: [["A", "Power"], ["B", "Kontrolle"], ["C", "Return"], ["D", "Aufschlag"], ["E", "Volley / Netzspiel"], ["F", "Defensive"], ["G", "Timing / Technik"]]
  },
  {
    id: "technique",
    title: "Wie sauber ist deine Technik?",
    hint: "Bei noch unsauberer Technik empfehlen wir automatisch weichere, fehlerverzeihendere Schläger mit großem Sweet Spot.",
    opts: [["A", "Noch unsauber"], ["B", "Solide, aber inkonstant"], ["C", "Ziemlich sauber"], ["D", "Sehr sauber"]]
  },
  {
    id: "sports",
    title: "Welche anderen Schlägersportarten hast du schon gespielt?",
    hint: "Vorerfahrung verbessert oft dein Ballgefühl. Sie fließt ins Kontroll-Matching und in deine persönlichen Tipps ein.",
    multi: true,
    opts: [["A", "Keine", true], ["B", "Tennis"], ["C", "Badminton"], ["D", "Tischtennis"], ["E", "Squash"], ["F", "Andere"]]
  },
  {
    id: "frequency",
    title: "Wie oft spielst du Padel?",
    hint: "Je öfter du spielst, desto mehr lohnt sich ein Schläger, der auch bei intensiverem Training mitwächst.",
    opts: [["A", "Seltener als 1x im Monat"], ["B", "1x pro Woche"], ["C", "2–3x pro Woche"], ["D", "4x+ pro Woche / Wettkampf"]]
  },
  {
    id: "shapePreference",
    title: "Kennst du schon deine bevorzugte Kopfform?",
    hint: "Rund = maximale Kontrolle & großer Sweet Spot. Teardrop = Allround-Mix aus Power & Kontrolle. Diamond = maximale Power, aber kleinerer Sweet Spot und anstrengender für Einsteiger.",
    opts: [["A", "Rund"], ["B", "Teardrop"], ["C", "Diamond"], ["D", "Weiß ich noch nicht"]]
  },
  {
    id: "growth",
    title: "Wie lange soll der Schläger mit dir mitwachsen?",
    hint: "Falls du dich schnell verbessern willst, empfehlen wir Schläger mit mehr Powerreserven für die Zukunft statt reinen Einsteiger-Modellen.",
    opts: [["A", "Hauptsächlich jetzt"], ["B", "1 Jahr+"], ["C", "1–2 Jahre+"], ["D", "Möglichst lange"]]
  },
  {
    id: "budget",
    title: "Was ist dein maximales Budget?",
    hint: "Alle Preise sind Richtwerte fürs Matching. Der aktuelle Preis kann über den Link am Ende geprüft werden.",
    opts: [["A", "Unter 100 €"], ["B", "100–130 €"], ["C", "130–150 €"], ["D", "150–180 €"], ["E", "180–220 €"], ["F", "220 €+"]]
  }
];

const PRO_EXTRA_QUESTIONS = [
  {
    id: "weightPref",
    title: "Bevorzugst du eher leichte oder schwere Schläger?",
    hint: "Leichtere Schläger (unter 358 g) ermöglichen schnellere Reaktionen am Netz. Schwerere (365 g+) geben mehr Power und Stabilität bei Schmetterbällen.",
    opts: [["A", "Eher leicht"], ["B", "Ausgewogen"], ["C", "Eher schwer"], ["D", "Weiß ich nicht"]]
  },
  {
    id: "balanceFeel",
    title: "Bevorzugst du ein griffiges oder kopflastiges Spielgefühl?",
    hint: "Griffig (niedrige Balance) = mehr Kontrolle und schnellere Handbewegungen. Kopflastig (hohe Balance) = mehr Power, aber ein trägerer Schwung.",
    opts: [["A", "Griffig (mehr Kontrolle)"], ["B", "Ausgewogen"], ["C", "Kopflastig (mehr Power)"], ["D", "Weiß ich nicht"]]
  },
  {
    id: "level2",
    title: "Auf welchem Niveau spielst du hauptsächlich?",
    hint: "Dein Wettkampf-Niveau beeinflusst, wie leistungsorientiert dein Schläger sein sollte.",
    opts: [["A", "Hobby / Freizeit"], ["B", "Amateur-Liga"], ["C", "Ambitioniert / Turniere"], ["D", "Leistungssport"]]
  },
  {
    id: "injuryDetail",
    title: "Welche Regionen betreffen deine Beschwerden?",
    hint: "Schulterprobleme reagieren besonders auf kopflastige Schläger, Handgelenksprobleme auf harte Schläger.",
    multi: true,
    showIf: () => ["B", "C"].includes(getAnswer("joints")),
    opts: [["A", "Ellenbogen"], ["B", "Handgelenk"], ["C", "Schulter"]]
  },
  {
    id: "court",
    title: "Spielst du hauptsächlich Indoor oder Outdoor?",
    hint: "Outdoor (Wind, Sonne) profitiert oft von etwas mehr Kontrolle und Stabilität. Indoor erlaubt kompromissloseres Powerspiel.",
    opts: [["A", "Outdoor"], ["B", "Indoor"], ["C", "Beides"]]
  },
  {
    id: "brand",
    title: "Hast du eine bevorzugte Marke?",
    hint: "Optional — passende Modelle bekommen einen kleinen Bonus, aber Performance bleibt wichtiger als Marke.",
    opts: [["A", "Keine Präferenz"], ["B", "NOX"], ["C", "Bullpadel"], ["D", "HEAD"], ["E", "Adidas"], ["F", "Babolat"], ["G", "Andere"]]
  },
  {
    id: "budgetFlex",
    title: "Würdest du für den perfekten Schläger auch etwas mehr zahlen?",
    hint: "Falls ja, lockern wir dein Budget-Limit leicht, um dir auch knapp darüber liegende Top-Modelle zu zeigen.",
    opts: [["A", "Nein, strikt bei meinem Budget bleiben"], ["B", "Ja, bis zu 20 € mehr"], ["C", "Ja, bis zu 40 € mehr"]]
  },
  {
    id: "playstyleIcon",
    title: "Welcher Spielstil inspiriert dich am meisten?",
    hint: "Nur für den Vibe — hilft uns, zwischen ähnlich guten Empfehlungen die passende Note zu treffen.",
    opts: [["A", "Kontrollierter Allrounder"], ["B", "Aggressiver Power-Spieler"], ["C", "Geduldiger Verteidiger"], ["D", "Kreativer Netzspieler"]]
  }
];

const SCORE_DIVISORS = { quick: 3.6, pro: 4.0 };

const RACKET_ICON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="racket-icon" aria-hidden="true">
  <ellipse cx="12" cy="9" rx="7" ry="8" stroke="currentColor" stroke-width="1.6"/>
  <line x1="12" y1="17" x2="12" y2="23" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  <circle cx="9" cy="7" r="0.9" fill="currentColor"/>
  <circle cx="12" cy="6" r="0.9" fill="currentColor"/>
  <circle cx="15" cy="7" r="0.9" fill="currentColor"/>
  <circle cx="9" cy="11" r="0.9" fill="currentColor"/>
  <circle cx="12" cy="12" r="0.9" fill="currentColor"/>
  <circle cx="15" cy="11" r="0.9" fill="currentColor"/>
</svg>`;

let currentQuestion = 0;
let answers = {};
let testMode = "quick";
let activeQuestions = QUICK_QUESTIONS;

const getElement = id => document.getElementById(id);

getElement("startBtn").onclick = () => {
  getElement("startBtn").blur();
  document.querySelector(".hero").classList.add("hidden");
  getElement("modeSelect").classList.remove("hidden");
};

getElement("quickModeBtn").onclick = () => startTest("quick");
getElement("proModeBtn").onclick = () => startTest("pro");
getElement("modeBackBtn").onclick = () => {
  getElement("modeSelect").classList.add("hidden");
  document.querySelector(".hero").classList.remove("hidden");
};

function startTest(mode) {
  testMode = mode;
  activeQuestions = mode === "pro" ? QUICK_QUESTIONS.concat(PRO_EXTRA_QUESTIONS) : QUICK_QUESTIONS;
  currentQuestion = 0;
  answers = {};
  getElement("modeSelect").classList.add("hidden");
  getElement("quiz").classList.remove("hidden");
  renderQuestion();
}

function getVisibleQuestions() {
  return activeQuestions.filter(q => !q.showIf || q.showIf());
}

function renderQuestion() {
  const questions = getVisibleQuestions();
  const question = questions[currentQuestion];
  getElement("stepLabel").textContent = `${currentQuestion + 1} / ${questions.length}`;
  const progressPercent = Math.round((currentQuestion + 1) / questions.length * 100);
  getElement("progressPct").textContent = progressPercent + "%";
  getElement("bar").style.width = progressPercent + "%";

  let html = `<div class="eyebrow">FRAGE ${currentQuestion + 1}${question.multi ? " · MEHRFACHAUSWAHL" : ""}</div><h2>${question.title}</h2>`;
  if (question.hint) html += `<p class="hint">${question.hint}</p>`;
  const backButton = currentQuestion > 0
    ? `<button class="secondary" onclick="goToPrevious()">← Zurück</button>`
    : `<span></span>`;

  if (question.range) {
    const currentValue = answers[question.id] || 5;
    html += `<div class="range-value" id="rv">${currentValue}</div>`;
    html += `<input class="range" id="range" type="range" min="1" max="10" value="${currentValue}">`;
    html += `<div class="actions">${backButton}<button class="primary" onclick="submitRange()">Weiter →</button></div>`;
  } else if (question.multi) {
    const selected = getList(question.id);
    html += `<div class="options">`;
    html += question.opts.map(([key, label]) => {
      const isSelected = selected.includes(key);
      return `<button class="option option-multi${isSelected ? " selected" : ""}" aria-pressed="${isSelected}" onclick="toggleAnswer('${key}')"><span class="check" aria-hidden="true"></span>${label}</button>`;
    }).join("");
    html += `</div>`;
    html += `<div class="actions">${backButton}<button class="primary" onclick="goToNext()"${selected.length ? "" : " disabled"}>Weiter →</button></div>`;
  } else {
    html += `<div class="options">`;
    html += question.opts.map(([key, label]) =>
      `<button class="option${answers[question.id] === key ? " selected" : ""}" onclick="chooseAnswer('${key}')">${key}) ${label}</button>`
    ).join("");
    html += `</div>`;
    html += `<div class="actions">${backButton}</div>`;
  }

  getElement("questionCard").innerHTML = html;

  if (question.range) {
    getElement("range").oninput = e => {
      getElement("rv").textContent = e.target.value;
    };
  }
}

function chooseAnswer(choice) {
  answers[getVisibleQuestions()[currentQuestion].id] = choice;
  goToNext();
}

function toggleAnswer(choice) {
  const question = getVisibleQuestions()[currentQuestion];
  const exclusiveKeys = question.opts.filter(opt => opt[2]).map(opt => opt[0]);
  let selected = getList(question.id);
  if (selected.includes(choice)) {
    selected = selected.filter(key => key !== choice);
  } else if (exclusiveKeys.includes(choice)) {
    selected = [choice];
  } else {
    selected = selected.filter(key => !exclusiveKeys.includes(key)).concat(choice);
  }
  answers[question.id] = selected;
  renderQuestion();
}

function submitRange() {
  answers[getVisibleQuestions()[currentQuestion].id] = +getElement("range").value;
  goToNext();
}

function goToNext() {
  if (currentQuestion < getVisibleQuestions().length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showResults();
  }
}

function goToPrevious() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
}

function getAnswer(id) {
  return answers[id];
}

function getList(id) {
  const value = answers[id];
  return Array.isArray(value) ? value : value ? [value] : [];
}

function getMaxBudget() {
  const budgetMap = { A: 99, B: 130, C: 150, D: 180, E: 220, F: 999 };
  let max = budgetMap[getAnswer("budget")] || 180;
  const flex = getAnswer("budgetFlex");
  if (flex === "B") max += 20;
  if (flex === "C") max += 40;
  return max;
}

function calculateRawScore(racket) {
  let score = 0;
  const style = getAnswer("style");
  const position = getAnswer("position");
  const weaknesses = getList("weakness");
  const technique = getAnswer("technique");
  const joints = getAnswer("joints");
  const frequency = getAnswer("frequency");
  const shapePref = getAnswer("shapePreference");
  const sports = getList("sports");

  // Style matching
  if (style === "A") {
    score += racket.defense * 2;
  } else if (style === "C") {
    score += racket.power * 2;
  } else {
    score += ((racket.control + racket.power) / 2) * 2;
  }

  // Position matching
  if (position === "C" || position === "D") {
    score += racket.net * 1.5;
  } else if (position === "A") {
    score += racket.defense * 1.5;
  } else {
    score += ((racket.net + racket.defense) / 2) * 1.5;
  }

  // User preferences (sliders)
  score += racket.control * (+getAnswer("control") || 7) * 1.2;
  score += racket.power * (+getAnswer("power") || 6) * 1.1;
  score += racket.forgiveness * (+getAnswer("forgive") || 7) * 1.1;
  score += racket.comfort * (+getAnswer("comfort") || 7) * 0.7;

  // Weakness compensation, damped so selecting many weaknesses doesn't inflate every score
  const weaknessFactor = 1 / Math.sqrt(Math.max(1, weaknesses.length));
  if (weaknesses.includes("A")) score += racket.power * 2 * weaknessFactor;
  if (["B", "C", "D"].some(w => weaknesses.includes(w))) score += racket.control * 1.4 * weaknessFactor;
  if (weaknesses.includes("E")) score += racket.net * 1.5 * weaknessFactor;
  if (weaknesses.includes("F")) score += racket.defense * 1.7 * weaknessFactor;
  if (weaknesses.includes("G")) score += racket.forgiveness * 1.6 * weaknessFactor;

  // Technique level
  if (technique === "A") score += racket.forgiveness * 2.2;
  if (technique === "B") score += racket.forgiveness * 1.2;

  // Experience: beginners need forgiveness and should avoid demanding power frames
  const level = getAnswer("level");
  if (level === "A" || level === "B") {
    score += racket.forgiveness * 1.5;
    if (racket.form === "Diamond") score -= 12;
    if (racket.hardness >= 7) score -= 6;
    if (racket.level === "Beginner") score += 6;
  }
  if (level === "A" && racket.level === "Advanced") score -= 6;
  if (level === "D") {
    score += racket.power * 0.8 + racket.growth * 0.8;
    if (racket.level === "Beginner") score -= 8;
  }

  // Racket-sport background transfers ball feel into control
  if (sports.includes("B") || sports.includes("C")) score += racket.control * 0.3;

  // Growth potential
  if (getAnswer("growth") === "C") score += racket.growth * 2;
  if (getAnswer("growth") === "D") score += racket.growth * 2.5;

  // Frequent players also benefit from growth reserves
  if (frequency === "C") score += racket.growth * 1;
  if (frequency === "D") score += racket.growth * 1.8;

  // Joint health: comfort and softness matter a lot more
  if (joints === "B") {
    score += racket.comfort * 1.5;
    if (racket.hardness >= 6) score -= 6;
  }
  if (joints === "C") {
    score += racket.comfort * 3;
    if (racket.hardness >= 6) score -= 14;
    if (racket.balance === "High" || racket.form === "Diamond") score -= 10;
  }

  // Explicit shape preference
  const shapeMap = { A: "Round", B: "Teardrop", C: "Diamond" };
  if (shapeMap[shapePref] && racket.form === shapeMap[shapePref]) score += 10;

  // Budget matching
  const maxBudget = getMaxBudget();
  if (racket.price <= maxBudget) {
    score += 8;
  } else {
    score -= Math.min(18, (racket.price - maxBudget) * 0.18);
  }

  // Penalize overly demanding rackets for less experienced players
  if (["A", "B"].includes(technique)) {
    if (racket.hardness >= 7) score -= 8;
    if (racket.balance === "High" || racket.form === "Diamond") score -= 7;
  }

  // --- Pro test only signals (no-op if unanswered) ---
  const weightPref = getAnswer("weightPref");
  if (weightPref === "A" && racket.weight < 358) score += 8;
  if (weightPref === "C" && racket.weight >= 365) score += 8;
  if (weightPref === "B" && racket.weight >= 358 && racket.weight < 365) score += 6;

  const balanceFeel = getAnswer("balanceFeel");
  if (balanceFeel === "A" && (racket.balance === "Low" || racket.balance === "Low-Medium")) score += 10;
  if (balanceFeel === "C" && (racket.balance === "High" || racket.balance === "Medium-High")) score += 10;
  if (balanceFeel === "B" && racket.balance === "Medium") score += 8;

  const level2 = getAnswer("level2");
  if (level2 === "C") score += racket.growth * 1.2;
  if (level2 === "D") score += racket.power * 1.5 + racket.growth * 1.5;

  const injuryRegions = getList("injuryDetail");
  if (joints === "B" || joints === "C") {
    if (injuryRegions.includes("C") && (racket.balance === "High" || racket.form === "Diamond")) score -= 6;
    if (injuryRegions.includes("B") && racket.hardness >= 6) score -= 6;
  }

  const court = getAnswer("court");
  if (court === "A") score += racket.control * 0.4;
  if (court === "B") score += racket.power * 0.3;

  const brandMap = { B: "NOX", C: "Bullpadel", D: "HEAD", E: "Adidas", F: "Babolat" };
  const brandPref = getAnswer("brand");
  if (brandMap[brandPref] && racket.brand === brandMap[brandPref]) score += 6;

  const playstyle = getAnswer("playstyleIcon");
  if (playstyle === "A") score += racket.control * 0.3;
  if (playstyle === "B") score += racket.power * 0.4;
  if (playstyle === "C") score += racket.defense * 0.4;
  if (playstyle === "D") score += racket.net * 0.4;

  return score;
}

function calculateScore(rawScore) {
  return Math.round(Math.max(0, Math.min(100, rawScore / SCORE_DIVISORS[testMode])));
}

function getUserProfile() {
  const position = getAnswer("position");
  const style = getAnswer("style");
  let net = 6;
  let defense = 6;

  if (position === "C" || position === "D") {
    net = 9; defense = 4;
  } else if (position === "A") {
    net = 3; defense = 9;
  }
  if (style === "A") defense = Math.min(10, defense + 1.5);
  if (style === "C") net = Math.min(10, net + 1);

  return {
    control: +getAnswer("control") || 7,
    power: +getAnswer("power") || 6,
    forgive: +getAnswer("forgive") || 7,
    comfort: +getAnswer("comfort") || 7,
    net: Math.round(net * 10) / 10,
    defense: Math.round(defense * 10) / 10
  };
}

function polarPoint(cx, cy, radius, index, total) {
  const angle = (Math.PI / 180) * (-90 + (360 / total) * index);
  return [cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)];
}

function pointsToString(points) {
  return points.map(p => p.join(",")).join(" ");
}

function buildRadarChart(profile, racket) {
  const labels = ["Kontrolle", "Power", "Sweet Spot", "Komfort", "Netzspiel", "Defensive"];
  const userValues = [profile.control, profile.power, profile.forgive, profile.comfort, profile.net, profile.defense];
  const racketValues = [racket.control, racket.power, racket.forgiveness, racket.comfort, racket.net, racket.defense];
  const cx = 150, cy = 150, maxR = 100;
  const total = labels.length;

  const gridRings = [0.25, 0.5, 0.75, 1].map(scale => {
    const pts = labels.map((_, i) => polarPoint(cx, cy, maxR * scale, i, total));
    return `<polygon points="${pointsToString(pts)}" class="radar-grid" />`;
  }).join("");

  const axisLines = labels.map((_, i) => {
    const [x, y] = polarPoint(cx, cy, maxR, i, total);
    return `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" class="radar-axis" />`;
  }).join("");

  const labelEls = labels.map((label, i) => {
    const [x, y] = polarPoint(cx, cy, maxR + 26, i, total);
    return `<text x="${x}" y="${y}" class="radar-label" text-anchor="middle" dominant-baseline="middle">${label}</text>`;
  }).join("");

  const userPts = userValues.map((v, i) => polarPoint(cx, cy, (Math.min(10, v) / 10) * maxR, i, total));
  const racketPts = racketValues.map((v, i) => polarPoint(cx, cy, (Math.min(10, v) / 10) * maxR, i, total));

  return `<svg viewBox="0 0 300 300" class="radar-svg" role="img" aria-label="Vergleich deines Profils mit dem Top-Schläger">
    ${gridRings}
    ${axisLines}
    <polygon points="${pointsToString(racketPts)}" class="radar-racket" />
    <polygon points="${pointsToString(userPts)}" class="radar-user" />
    ${labelEls}
  </svg>`;
}

function createStatBars(racket) {
  const stats = [
    ["Kontrolle", racket.control],
    ["Power", racket.power],
    ["Fehlertoleranz", racket.forgiveness],
    ["Komfort", racket.comfort],
    ["Handling", racket.maneuver],
    ["Effet", racket.effect]
  ];
  return `<div class="stat-bars">${stats.map(([label, value]) => `
    <div class="stat-bar-row">
      <span class="stat-bar-label">${label}</span>
      <div class="stat-bar-track"><div class="stat-bar-fill" style="width:${Math.round(value / 10 * 100)}%"></div></div>
      <span class="stat-bar-value">${value}/10</span>
    </div>`).join("")}</div>`;
}

function showResults() {
  const ranked = RACKETS
    .map(racket => ({ ...racket, rawScore: calculateRawScore(racket) }))
    .sort((a, b) => b.rawScore - a.rawScore)
    .map(racket => ({ ...racket, score: calculateScore(racket.rawScore) }));

  const profile = getUserProfile();
  const maxBudget = getMaxBudget();
  const inBudget = ranked.filter(r => r.price <= maxBudget);
  const fitMinusOvershoot = r => r.rawScore - (r.price - maxBudget) * 1.5;
  const overBudget = ranked
    .filter(r => r.price > maxBudget)
    .sort((a, b) => fitMinusOvershoot(b) - fitMinusOvershoot(a));
  const topThree = inBudget.concat(overBudget).slice(0, 3);
  const modeLabel = testMode === "pro" ? "PRO-ANALYSE" : "QUICK-ANALYSE";

  getElement("quiz").classList.add("hidden");
  getElement("results").classList.remove("hidden");

  let html = `<div class="results-head">`;
  html += `<div class="badge">${RACKET_ICON}DEIN PADEL RACKET FIT · ${modeLabel}</div>`;
  html += `<h1>Dein Match.</h1>`;
  html += `<p>Auf Basis deiner Antworten haben wir dein Profil gegen ${RACKETS.length} Modelle im Finder bewertet.</p>`;
  html += `</div>`;
  html += `<div class="profile">`;
  html += `<div class="stat"><b>${profile.control}/10</b><span>Kontrolle</span></div>`;
  html += `<div class="stat"><b>${profile.power}/10</b><span>Power</span></div>`;
  html += `<div class="stat"><b>${profile.forgive}/10</b><span>Fehlertoleranz</span></div>`;
  html += `<div class="stat"><b>${profile.comfort}/10</b><span>Komfort</span></div>`;
  html += `</div>`;

  html += `<section class="analysis">`;
  html += `<h2 class="analysis-title">Deine Profil-Analyse</h2>`;
  html += `<p class="hint">Dein Spielprofil (hell) im Vergleich zu den Eigenschaften deines Top-Matches (gestrichelt).</p>`;
  html += `<div class="radar-wrap">${buildRadarChart(profile, topThree[0])}</div>`;
  html += `<div class="radar-legend"><span><i class="legend-dot legend-user"></i>Dein Profil</span><span><i class="legend-dot legend-racket"></i>${topThree[0].name}</span></div>`;
  html += `</section>`;

  html += topThree.map((r, n) => createRacketCard(r, n, topThree[0])).join("");
  html += buildPlayerAnalysis(profile);
  html += `<div class="notice"><b>Hinweis:</b> Alle ${RACKETS.length} Schläger, ihre Specs, Testwerte (Power, Kontrolle, Komfort, Handling, Effet, Fehlertoleranz), Preise und Links stammen von padelreference.com (Stand: September 2026). Die Werte für Netzspiel und Defensive leiten wir daraus ab. Preise und Verfügbarkeit können sich ändern.</div>`;
  html += `<button class="secondary restart" onclick="location.reload()">Test erneut starten</button>`;

  getElement("results").innerHTML = html;
}

function createRacketCard(racket, index, top) {
  const reason = index === 0
    ? generateTopReasonText(racket)
    : generateAlternativeText(racket, top);
  const overBudgetNote = racket.price > getMaxBudget()
    ? ` <b>Liegt über deinem Budget</b> — im Finder gibt es nicht genug passende Modelle in deiner Preisklasse.`
    : "";

  let html = `<article class="recommendation">`;
  html += `<div class="rank">#${index + 1} BEST MATCH</div>`;
  html += `<div class="rec-title">`;
  html += `<div>`;
  html += `<h2>${racket.name}</h2>`;
  html += `<div>${racket.brand} · ${SHAPE_LABELS[racket.form]} · ${formatNumber(racket.weight)} g · ${BALANCE_LABELS[racket.balance]} · Kern ${FEEL_LABELS[racket.feel]} · ${LEVEL_LABELS[racket.level]}</div>`;
  html += `</div>`;
  html += `<div class="score">${racket.score}/100</div>`;
  html += `</div>`;
  html += createStatBars(racket);
  html += `<p class="reason">${reason}</p>`;
  html += `<div class="why">`;
  html += `<h3>Preis</h3>`;
  html += `<p>Shop-Preis <b>${formatNumber(racket.price.toFixed(2))} €</b> (Stand: September 2026). Preise können sich ändern — bitte vor dem Kauf im Shop prüfen.${overBudgetNote}</p>`;
  html += `</div>`;
  html += `<a class="buy" href="${racket.url}" target="_blank" rel="noopener">Im Shop ansehen ↗</a>`;
  html += `<p class="source-note">Testwerte &amp; Daten: padelreference.com</p>`;
  html += `</article>`;

  return html;
}

const SHAPE_PHRASES = { Round: "runde Kopfform", Teardrop: "Teardrop-Kopfform", Diamond: "Diamond-Kopfform" };
const SHAPE_LABELS = { Round: "Rund", Teardrop: "Teardrop", Diamond: "Diamond" };

function formatNumber(value) {
  return String(value).replace(".", ",");
}

function joinList(items) {
  return items.length > 1 ? items.slice(0, -1).join(", ") + " und " + items[items.length - 1] : items[0];
}

function generateTopReasonText(racket) {
  const profile = getUserProfile();
  const technique = getAnswer("technique");
  const joints = getAnswer("joints");
  const growth = getAnswer("growth");
  const reasons = [];

  if (profile.control >= 7 && racket.control >= 8) reasons.push("viel Kontrolle");
  if (profile.power >= 7 && racket.power >= 9) reasons.push("viel Power");
  if ((profile.forgive >= 7 || technique === "A" || technique === "B") && racket.forgiveness >= 8) {
    reasons.push("einen großen, fehlerverzeihenden Sweet Spot");
  }
  if ((profile.comfort >= 7 || joints === "B" || joints === "C") && racket.comfort >= 8) {
    reasons.push("hohen, gelenkschonenden Komfort");
  }
  if ((growth === "C" || growth === "D") && racket.growth >= 9) {
    reasons.push("genug Reserven für deine Weiterentwicklung");
  }

  const shapeMap = { A: "Round", B: "Teardrop", C: "Diamond" };
  if (shapeMap[getAnswer("shapePreference")] === racket.form) {
    reasons.push(`die gewünschte ${SHAPE_PHRASES[racket.form]}`);
  }

  const balanceFeel = getAnswer("balanceFeel");
  if (balanceFeel === "A" && (racket.balance === "Low" || racket.balance === "Low-Medium")) {
    reasons.push("das von dir bevorzugte griffige Spielgefühl");
  }
  if (balanceFeel === "C" && (racket.balance === "High" || racket.balance === "Medium-High")) {
    reasons.push("das von dir bevorzugte kopflastige Powergefühl");
  }

  let text = reasons.length
    ? `Dieser Schläger passt besonders gut zu dir, weil er ${joinList(reasons.slice(0, 4))} mitbringt.`
    : "Dieser Schläger erzielt über alle deine Antworten hinweg die beste Gesamtbewertung.";

  const brandMap = { B: "NOX", C: "Bullpadel", D: "HEAD", E: "Adidas", F: "Babolat" };
  if (brandMap[getAnswer("brand")] === racket.brand) {
    text += ` Außerdem stammt er von deiner Wunschmarke ${racket.brand}.`;
  }
  return text;
}

function generateAlternativeText(racket, top) {
  const stats = [
    ["Kontrolle", racket.control - top.control],
    ["Power", racket.power - top.power],
    ["Fehlertoleranz", racket.forgiveness - top.forgiveness],
    ["Komfort", racket.comfort - top.comfort]
  ];
  const more = stats.filter(([, diff]) => diff >= 0.5).map(([label]) => label);
  const less = stats.filter(([, diff]) => diff <= -1).map(([label]) => label);

  const parts = [];
  if (more.length) parts.push(`mehr ${joinList(more)}`);
  if (less.length) parts.push(`${more.length ? "dafür " : ""}weniger ${joinList(less)}`);
  const priceDiff = racket.price - top.price;
  if (priceDiff <= -15) parts.push(`rund ${Math.round(-priceDiff)} € günstiger`);
  if (priceDiff >= 15) parts.push(`rund ${Math.round(priceDiff)} € teurer`);
  if (racket.form !== top.form) parts.push(`Kopfform ${SHAPE_LABELS[racket.form]} statt ${SHAPE_LABELS[top.form]}`);

  return parts.length
    ? `Im Vergleich zu deinem Top-Match: ${parts.join(" · ")}.`
    : "Sehr ähnliches Profil wie dein Top-Match — eine gute Alternative, falls das erste Modell nicht verfügbar ist.";
}

const STAGES = [
  { name: "Einsteiger", next: "Grundschläge (Vorhand, Rückhand, Volley) konstant ins Spiel bringen und das Spiel mit der Glaswand kennenlernen." },
  { name: "Aufsteiger", next: "Konstanz aufbauen: Bälle kontrolliert in die Mitte spielen und den Lob als Verteidigungswaffe einsetzen." },
  { name: "Fortgeschritten", next: "Positionsspiel verbessern: gemeinsam mit dem Partner ans Netz rücken und die Bandeja sicher spielen." },
  { name: "Ambitioniert", next: "Variation ins Spiel bringen: Víbora, Chiquita und bewusste Tempowechsel trainieren." },
  { name: "Leistungsspieler", next: "Feinschliff: Matchplanung, Videoanalyse deiner Spiele und gezieltes Athletiktraining." }
];

const WEAKNESS_TIPS = {
  A: "Power: Sie kommt im Padel vor allem aus Timing und Körperrotation, nicht aus dem Arm. Trainiere den Smash mit Ganzkörperbewegung und triff den Ball am höchsten Punkt.",
  B: "Kontrolle: Spiele mehr Bälle mit mittlerem Tempo gezielt in die Mitte oder auf die Füße der Gegner. Zielübungen mit Hütchen helfen, Präzision vor Tempo zu stellen.",
  C: "Return: Kurze Ausholbewegung, Ball früh nehmen und bevorzugt tief in die Mitte spielen — so kommt der Aufschläger nicht bequem ans Netz.",
  D: "Aufschlag: Konstanz vor Tempo. Der Ball wird nach dem Aufprall auf Hüfthöhe oder darunter getroffen — ziele auf die Ecke zur Seitenwand oder auf den Körper und variiere mit Slice.",
  E: "Netzspiel: Kontinentalgriff, kurze Blockbewegung statt Ausholen, Schläger immer vor dem Körper. Ein Split-Step vor jedem gegnerischen Schlag verbessert dein Timing.",
  F: "Defensive: Übe das Spiel mit der Glaswand — Ball abprallen lassen, mitdrehen, danach spielen. Der hohe Lob ist deine beste Waffe, um die Gegner vom Netz zu drängen.",
  G: "Timing: Mach bei jedem gegnerischen Schlag einen Split-Step und bereite den Schläger früh vor. Ein kurzes Handyvideo deiner Schläge oder eine Trainerstunde zeigt Technikfehler schnell."
};

function getProgressStage() {
  const scale = { A: 0, B: 1, C: 2, D: 3 };
  const values = ["level", "technique", "frequency", "level2"]
    .map(id => scale[getAnswer(id)])
    .filter(value => value !== undefined);
  const average = values.reduce((sum, value) => sum + value, 0) / values.length;
  return {
    index: Math.round(average / 3 * (STAGES.length - 1)),
    percent: Math.max(6, Math.round(average / 3 * 100))
  };
}

function getPlayerType(profile, stageIndex) {
  const style = getAnswer("style");
  const position = getAnswer("position");
  if (stageIndex === 0) {
    return { name: "Einsteiger mit Potenzial", text: "Du stehst noch am Anfang — jetzt zählen ein fehlerverzeihender Schläger und saubere Grundlagen." };
  }
  if (style === "C" || position === "D" || (profile.power >= 8 && profile.power > profile.control)) {
    return { name: "Power-Angreifer", text: "Du suchst aktiv den Punkt, übernimmst gerne Verantwortung und willst Bälle über Kopf beenden." };
  }
  if (position === "C") {
    return { name: "Netzspieler", text: "Du fühlst dich am Netz am wohlsten und machst Punkte mit Volleys und Druck aus der Vorderposition." };
  }
  if (style === "A" || position === "A") {
    return { name: "Solider Verteidiger", text: "Du spielst geduldig, bringst viele Bälle zurück und nutzt die Fehler deiner Gegner." };
  }
  return { name: "Kontrollierter Allrounder", text: "Du bist variabel unterwegs und setzt auf ein ausgewogenes Spiel aus Kontrolle und Druck." };
}

function buildPlayerAnalysis(profile) {
  const stage = getProgressStage();
  const type = getPlayerType(profile, stage.index);
  const weaknesses = getList("weakness");
  const sports = getList("sports");
  const position = getAnswer("position");
  const joints = getAnswer("joints");
  const weaknessLabels = Object.fromEntries(QUICK_QUESTIONS.find(q => q.id === "weakness").opts);

  const strengths = [];
  if (["C", "D"].includes(getAnswer("technique"))) strengths.push("Saubere Technik");
  if (["C", "D"].includes(getAnswer("frequency"))) strengths.push("Viel Spielpraxis");
  if (sports.some(s => s !== "A")) strengths.push("Ballgefühl aus anderen Schlägersportarten");
  if (position === "C" || position === "D") strengths.push("Präsenz am Netz");
  if (position === "A") strengths.push("Geduld von hinten");
  if (position === "B") strengths.push("Flexibel auf beiden Positionen");
  if (getAnswer("style") === "B") strengths.push("Variables Spiel");
  if (!strengths.length) strengths.push("Motivation, besser zu werden");

  const focusAreas = weaknesses.map(key => weaknessLabels[key]);
  if (joints === "B" || joints === "C") focusAreas.push("Gelenkbelastung im Blick behalten");

  const tips = weaknesses.map(key => WEAKNESS_TIPS[key]);
  if (joints === "B" || joints === "C") {
    tips.push("Gelenke: Unterarm und Schulter vor jeder Session aufwärmen und einen weichen Schläger mit großem Sweet Spot nutzen. Anhaltende Beschwerden ärztlich abklären lassen.");
  }
  if (sports.includes("B")) tips.push("Aus dem Tennis: Schwinge im Padel kompakter, verzichte auf starken Topspin und nutze die Wände, statt jeden Ball direkt zu nehmen.");
  if (sports.includes("C")) tips.push("Aus dem Badminton: Halte das Handgelenk vor allem am Netz stabil — Kontrolle kommt im Padel aus einer ruhigen Schlagfläche.");
  if (sports.includes("D")) tips.push("Aus dem Tischtennis: Deine Reflexe sind am Netz Gold wert — achte auf eine kompakte, stabile Schlagfläche statt viel Handgelenk.");
  if (sports.includes("E")) tips.push("Aus dem Squash: Dein Wandgefühl ist ein echter Vorteil — nutze es bewusst bei Bällen aus der Rückwand.");
  if (["A", "B"].includes(getAnswer("frequency"))) tips.push("Regelmäßigkeit: Eine feste Session pro Woche bringt deutlich mehr Fortschritt als unregelmäßiges Spielen.");
  if (getAnswer("technique") === "A" && getAnswer("shapePreference") === "C") {
    tips.push("Kopfform: Diamond-Schläger verzeihen wenig. Für den Einstieg sind runde oder Teardrop-Schläger meist die bessere Wahl — der Finder berücksichtigt das bereits.");
  }

  const ideas = ["Teste vor dem Kauf nach Möglichkeit einen der empfohlenen Schläger im Club oder beim Händler."];
  if (["A", "B"].includes(getAnswer("budget"))) ideas.push("Vorjahresmodelle sind oft deutlich günstiger bei nahezu gleicher Leistung.");
  if (position === "A") ideas.push("Such dir einen Partner, der gerne ans Netz geht — Verteidiger und Netzspieler ergänzen sich im Doppel ideal.");
  if (position === "C" || position === "D") ideas.push("Ein geduldiger Partner, der von hinten viele Bälle zurückbringt, ergänzt dein Netzspiel ideal.");
  if (["C", "D"].includes(getAnswer("frequency"))) ideas.push("Führe ein kurzes Trainingstagebuch: Notiere nach jeder Session einen Schlag, der gut lief, und einen, an dem du arbeitest.");
  ideas.push("Wechsle regelmäßig das Griffband — ein frisches Griffband verbessert den Halt und entlastet den Unterarm.");

  let html = `<section class="player-analysis">`;
  html += `<div class="badge">SPIELERPROFIL IM DETAIL</div>`;
  html += `<h2 class="analysis-title">Dein Spielertyp: ${type.name}</h2>`;
  html += `<p class="reason">${type.text}</p>`;

  html += `<div class="stage">`;
  html += `<div class="stage-head"><span>Entwicklungsstand</span><b>${STAGES[stage.index].name}</b></div>`;
  html += `<div class="stage-track"><div class="stage-fill" style="width:${stage.percent}%"></div></div>`;
  html += `<div class="stage-labels">${STAGES.map((s, i) => `<span${i === stage.index ? ` class="active"` : ""}>${s.name}</span>`).join("")}</div>`;
  html += `<p class="hint"><b>Nächster Schritt:</b> ${STAGES[stage.index].next}</p>`;
  html += `</div>`;

  html += `<div class="analysis-columns">`;
  html += `<div><h3>Deine Stärken</h3><ul class="tag-list">${strengths.map(s => `<li>${s}</li>`).join("")}</ul></div>`;
  html += `<div><h3>Deine Baustellen</h3><ul class="tag-list tag-list-focus">${(focusAreas.length ? focusAreas : ["Keine angegeben"]).map(s => `<li>${s}</li>`).join("")}</ul></div>`;
  html += `</div>`;

  if (tips.length) {
    html += `<h3>Trainingstipps für dich</h3>`;
    html += `<ol class="tip-list">${tips.slice(0, 6).map(t => `<li>${t}</li>`).join("")}</ol>`;
  }
  html += `<h3>Ideen</h3>`;
  html += `<ul class="tip-list">${ideas.slice(0, 4).map(i => `<li>${i}</li>`).join("")}</ul>`;
  html += `</section>`;
  return html;
}
