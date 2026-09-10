const RACKETS = [
  {
    name: "NOX AT10 Pro Cup Soft 2026",
    brand: "NOX",
    form: "Teardrop",
    balance: "Medium",
    weight: 365,
    hardness: 5,
    control: 9.5,
    power: 8,
    forgiveness: 9.5,
    comfort: 9.5,
    maneuver: 8.5,
    net: 8.5,
    defense: 9,
    growth: 9.5,
    price: 150,
    url: "https://www.idealo.de/preisvergleich/OffersOfProduct/208710118_-at10-pro-cup-soft-2026-by-agustin-tapia-nox-sport.html"
  },
  {
    name: "NOX ML10 Ventus Control 3K 2026",
    brand: "NOX",
    form: "Round",
    balance: "Low",
    weight: 360,
    hardness: 5,
    control: 10,
    power: 7,
    forgiveness: 9.5,
    comfort: 9,
    maneuver: 9,
    net: 7.5,
    defense: 10,
    growth: 9.5,
    price: 180,
    url: "https://www.noxsport.com/"
  },
  {
    name: "HEAD Speed Motion 2026",
    brand: "HEAD",
    form: "Teardrop",
    balance: "Medium",
    weight: 360,
    hardness: 6,
    control: 8.5,
    power: 9,
    forgiveness: 8,
    comfort: 7.5,
    maneuver: 9,
    net: 9,
    defense: 8,
    growth: 9,
    price: 170,
    url: "https://www.head.com/"
  },
  {
    name: "Adidas Metalbone CTRL 2026",
    brand: "Adidas",
    form: "Round",
    balance: "Low-Medium",
    weight: 360,
    hardness: 6,
    control: 10,
    power: 8,
    forgiveness: 8.5,
    comfort: 7.5,
    maneuver: 8.5,
    net: 8,
    defense: 9,
    growth: 10,
    price: 180,
    url: "https://www.adidas.com/"
  },
  {
    name: "Bullpadel Ionic Control 2026",
    brand: "Bullpadel",
    form: "Round",
    balance: "Low-Medium",
    weight: 365,
    hardness: 5,
    control: 9.5,
    power: 8,
    forgiveness: 9,
    comfort: 9,
    maneuver: 8,
    net: 8,
    defense: 9.5,
    growth: 9,
    price: 170,
    url: "https://www.bullpadel.com/"
  },
  {
    name: "Babolat Counter Veron 2.6",
    brand: "Babolat",
    form: "Round",
    balance: "Medium",
    weight: 365,
    hardness: 6,
    control: 8.5,
    power: 9,
    forgiveness: 9,
    comfort: 7.5,
    maneuver: 8,
    net: 8.5,
    defense: 9,
    growth: 9,
    price: 170,
    url: "https://www.babolat.com/"
  },
  {
    name: "HEAD Gravity Motion 2026",
    brand: "HEAD",
    form: "Teardrop",
    balance: "Medium",
    weight: 355,
    hardness: 5,
    control: 9,
    power: 8,
    forgiveness: 9.5,
    comfort: 9,
    maneuver: 9,
    net: 8.5,
    defense: 9,
    growth: 9,
    price: 165,
    url: "https://www.head.com/"
  },
  {
    name: "NOX Equation Advanced 2026",
    brand: "NOX",
    form: "Round",
    balance: "Low-Medium",
    weight: 360,
    hardness: 4,
    control: 9,
    power: 7.5,
    forgiveness: 9.5,
    comfort: 9.5,
    maneuver: 9,
    net: 7.5,
    defense: 9.5,
    growth: 8.5,
    price: 140,
    url: "https://www.noxsport.com/"
  }
];

const QUESTIONS = [
  {
    id: "level",
    title: "Wie viel Padel hast du gespielt?",
    opts: [
      ["A", "0–5 Sessions"],
      ["B", "5–20 Sessions"],
      ["C", "20–50 Sessions"],
      ["D", "50+ Sessions / Turniere"]
    ]
  },
  {
    id: "style",
    title: "Wie würdest du dein Spiel beschreiben?",
    opts: [
      ["A", "Defensiv"],
      ["B", "Allround"],
      ["C", "Offensiv"]
    ]
  },
  {
    id: "position",
    title: "Wo spielst du am liebsten?",
    opts: [
      ["A", "Hinten"],
      ["B", "Variabel"],
      ["C", "Gerne am Netz"],
      ["D", "Sehr offensiv"]
    ]
  },
  { id: "power", title: "Wie wichtig ist dir Power?", range: true },
  { id: "control", title: "Wie wichtig ist dir Kontrolle?", range: true },
  { id: "forgive", title: "Wie wichtig ist dir Fehlertoleranz / großer Sweet Spot?", range: true },
  { id: "comfort", title: "Wie wichtig ist dir Komfort?", range: true },
  {
    id: "weakness",
    title: "Was ist aktuell deine größte Schwäche?",
    opts: [
      ["A", "Power"],
      ["B", "Kontrolle"],
      ["C", "Return"],
      ["D", "Aufschlag"],
      ["E", "Volley / Netzspiel"],
      ["F", "Defensive"],
      ["G", "Timing / Technik"]
    ]
  },
  {
    id: "technique",
    title: "Wie sauber ist deine Technik?",
    opts: [
      ["A", "Noch unsauber"],
      ["B", "Solide, aber inkonstant"],
      ["C", "Ziemlich sauber"],
      ["D", "Sehr sauber"]
    ]
  },
  {
    id: "sports",
    title: "Hast du vorher Tennis oder einen anderen Racketsport gespielt?",
    opts: [
      ["A", "Nein"],
      ["B", "Tennis"],
      ["C", "Badminton"],
      ["D", "Tischtennis / Squash"],
      ["E", "Andere"]
    ]
  },
  {
    id: "growth",
    title: "Wie lange soll der Schläger mit dir mitwachsen?",
    opts: [
      ["A", "Hauptsächlich jetzt"],
      ["B", "1 Jahr+"],
      ["C", "1–2 Jahre+"],
      ["D", "Möglichst lange"]
    ]
  },
  {
    id: "budget",
    title: "Was ist dein maximales Budget?",
    opts: [
      ["A", "Unter 100 €"],
      ["B", "100–130 €"],
      ["C", "130–150 €"],
      ["D", "150–180 €"],
      ["E", "180–220 €"],
      ["F", "220 €+"]
    ]
  }
];

let currentQuestion = 0;
let answers = {};

const getElement = id => document.getElementById(id);

getElement("startBtn").onclick = () => {
  getElement("startBtn").blur();
  document.querySelector(".hero").classList.add("hidden");
  getElement("quiz").classList.remove("hidden");
  renderQuestion();
};

function renderQuestion() {
  const question = QUESTIONS[currentQuestion];
  getElement("stepLabel").textContent = `${currentQuestion + 1} / ${QUESTIONS.length}`;
  const progressPercent = Math.round((currentQuestion + 1) / QUESTIONS.length * 100);
  getElement("progressPct").textContent = progressPercent + "%";
  getElement("bar").style.width = progressPercent + "%";

  let html = `<div class="eyebrow">FRAGE ${currentQuestion + 1}</div><h2>${question.title}</h2>`;

  if (question.range) {
    const currentValue = answers[question.id] || 5;
    html += `<div class="range-value" id="rv">${currentValue}</div>`;
    html += `<input class="range" id="range" type="range" min="1" max="10" value="${currentValue}">`;
    html += `<div class="actions">`;
    html += `<button class="secondary" onclick="goToPrevious()">← Zurück</button>`;
    html += `<button class="primary" onclick="submitRange()">Weiter →</button>`;
    html += `</div>`;
  } else {
    html += `<div class="options">`;
    html += question.opts.map(opt =>
      `<button class="option" onclick="chooseAnswer('${opt[0]}')">${opt[0]}) ${opt[1]}</button>`
    ).join("");
    html += `</div>`;
    html += `<div class="actions">`;
    html += currentQuestion > 0
      ? `<button class="secondary" onclick="goToPrevious()">← Zurück</button>`
      : `<span></span>`;
    html += `</div>`;
  }

  getElement("questionCard").innerHTML = html;

  if (question.range) {
    getElement("range").oninput = e => {
      getElement("rv").textContent = e.target.value;
    };
  }
}

function chooseAnswer(choice) {
  answers[QUESTIONS[currentQuestion].id] = choice;
  goToNext();
}

function submitRange() {
  answers[QUESTIONS[currentQuestion].id] = +getElement("range").value;
  goToNext();
}

function goToNext() {
  if (currentQuestion < QUESTIONS.length - 1) {
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

function getMaxBudget() {
  const budgetMap = { A: 99, B: 130, C: 150, D: 180, E: 220, F: 999 };
  return budgetMap[getAnswer("budget")] || 180;
}

function calculateScore(racket) {
  let score = 0;
  const style = getAnswer("style");
  const position = getAnswer("position");
  const weakness = getAnswer("weakness");
  const technique = getAnswer("technique");

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

  // User preferences
  score += racket.control * (+getAnswer("control") || 7) * 1.2;
  score += racket.power * (+getAnswer("power") || 6) * 1.1;
  score += racket.forgiveness * (+getAnswer("forgive") || 7) * 1.1;
  score += racket.comfort * (+getAnswer("comfort") || 7) * 0.7;

  // Weakness compensation
  if (weakness === "A") score += racket.power * 2;
  if (["B", "C", "D"].includes(weakness)) score += racket.control * 1.4;
  if (weakness === "E") score += racket.net * 1.5;
  if (weakness === "F") score += racket.defense * 1.7;

  // Technique level
  if (technique === "A") score += racket.forgiveness * 2.2;
  if (technique === "B") score += racket.forgiveness * 1.2;

  // Growth potential
  if (getAnswer("growth") === "C") score += racket.growth * 2;
  if (getAnswer("growth") === "D") score += racket.growth * 2.5;

  // Budget matching
  const maxBudget = getMaxBudget();
  if (racket.price <= maxBudget) {
    score += 8;
  } else {
    score -= Math.min(18, (racket.price - maxBudget) * 0.18);
  }

  // Penalize demanding rackets for inexperienced players
  if (["A", "B"].includes(technique)) {
    if (racket.hardness >= 7) score -= 8;
    if (racket.balance === "High") score -= 7;
  }

  return Math.round(Math.max(0, Math.min(100, score / 2.35)));
}

function getUserProfile() {
  return {
    control: +getAnswer("control") || 7,
    power: +getAnswer("power") || 6,
    forgive: +getAnswer("forgive") || 7,
    comfort: +getAnswer("comfort") || 7
  };
}

function showResults() {
  const rankedRackets = RACKETS.map(racket => ({
    ...racket,
    score: calculateScore(racket)
  })).sort((a, b) => b.score - a.score);

  const profile = getUserProfile();
  const topThree = rankedRackets.slice(0, 3);

  getElement("quiz").classList.add("hidden");
  getElement("results").classList.remove("hidden");

  let html = `<div class="results-head">`;
  html += `<div class="badge">DEIN PADEL RACKET FIT</div>`;
  html += `<h1>Dein Match.</h1>`;
  html += `<p>Auf Basis deiner Antworten haben wir dein Profil gegen die verfügbaren Modelle im Finder bewertet.</p>`;
  html += `</div>`;
  html += `<div class="profile">`;
  html += `<div class="stat"><b>${profile.control}/10</b><span>Kontrolle</span></div>`;
  html += `<div class="stat"><b>${profile.power}/10</b><span>Power</span></div>`;
  html += `<div class="stat"><b>${profile.forgive}/10</b><span>Fehlertoleranz</span></div>`;
  html += `<div class="stat"><b>${profile.comfort}/10</b><span>Komfort</span></div>`;
  html += `</div>`;
  html += topThree.map((r, n) => createRacketCard(r, n)).join("");
  html += `<div class="notice"><b>Hinweis:</b> Die Schlägerauswahl ist bewusst klein und kuratiert. Preise ändern sich; vor dem Kauf bitte den aktuellen Preis über den jeweiligen Link prüfen.</div>`;
  html += `<button class="secondary restart" onclick="location.reload()">Test erneut starten</button>`;

  getElement("results").innerHTML = html;
}

function createRacketCard(racket, index) {
  const reason = index === 0
    ? generateTopReasonText(racket)
    : `Sehr gute Alternative, wenn du ${index === 1 ? "etwas mehr Kontrolle und Fehlertoleranz" : "etwas mehr Dynamik und Netzspiel"} möchtest.`;

  let html = `<article class="recommendation">`;
  html += `<div class="rank">#${index + 1} BEST MATCH</div>`;
  html += `<div class="rec-title">`;
  html += `<div>`;
  html += `<h2>${racket.name}</h2>`;
  html += `<div>${racket.brand} · ${racket.form} · ${racket.weight} g · ${racket.balance} Balance</div>`;
  html += `</div>`;
  html += `<div class="score">${racket.score}/100</div>`;
  html += `</div>`;
  html += `<div class="chips">`;
  html += `<span class="chip">Kontrolle ${racket.control}/10</span>`;
  html += `<span class="chip">Power ${racket.power}/10</span>`;
  html += `<span class="chip">Sweet Spot ${racket.forgiveness}/10</span>`;
  html += `<span class="chip">Komfort ${racket.comfort}/10</span>`;
  html += `</div>`;
  html += `<p class="reason">${reason}</p>`;
  html += `<div class="why">`;
  html += `<h3>Preis</h3>`;
  html += `<p>Preisindikator ca. <b>${racket.price} €</b>. Für den echten Kauf den aktuellen Preis über den Link prüfen.</p>`;
  html += `</div>`;
  html += `<a class="buy" href="${racket.url}" target="_blank" rel="noopener">Aktuellen Preis prüfen ↗</a>`;
  html += `</article>`;

  return html;
}

function generateTopReasonText(racket) {
  const reasons = [];
  if (racket.control >= 9) reasons.push("hohe Kontrolle für präzises Allround-Spiel");
  if (racket.forgiveness >= 9) reasons.push("großer Sweet Spot und viel Fehlertoleranz");
  if (racket.power >= 8) reasons.push("gute Unterstützung bei fehlender eigener Power");
  if (racket.growth >= 9) reasons.push("genug Reserven für deine Weiterentwicklung");
  if (racket.net >= 8 && racket.defense >= 8) reasons.push("starkes Gleichgewicht aus Netzspiel und Defensive");
  return "Dieser Schläger passt besonders gut, weil er " + reasons.slice(0, 4).join(", ") + " kombiniert.";
}