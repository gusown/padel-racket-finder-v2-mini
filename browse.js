// Browse & compare mode — lets you explore all rackets without doing the quiz.
// Relies on globals defined in app.js: RACKETS, t, LANG, getElement, formatNumber,
// formatPrice, buildRadarSVG, racketRadarValues, createStatBars, racketImageBlock,
// animateFillsAndScores, RACKET_ICON.

let browseFilters = { search: "", shape: "", brand: "", level: "", sort: "control" };
let compareSelection = [];

function openBrowse() {
  document.querySelector(".hero").classList.add("hidden");
  getElement("modeSelect").classList.add("hidden");
  getElement("quiz").classList.add("hidden");
  getElement("results").classList.add("hidden");
  getElement("browseSection").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
  renderBrowseControls();
  renderBrowseGrid();
  renderCompareView();
}

function closeBrowse() {
  getElement("browseSection").classList.add("hidden");
  document.querySelector(".hero").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderBrowseControls() {
  const shapes = [...new Set(RACKETS.map(r => r.form))];
  const brands = [...new Set(RACKETS.map(r => r.brand))].sort();
  const levels = ["Beginner", "Intermediate", "Advanced"];

  const shapeSelect = getElement("browseShape");
  shapeSelect.innerHTML = `<option value="">${t("browse.allShapes")}</option>` +
    shapes.map(s => `<option value="${s}">${t("shape." + s)}</option>`).join("");
  shapeSelect.value = browseFilters.shape;

  const brandSelect = getElement("browseBrand");
  brandSelect.innerHTML = `<option value="">${t("browse.allBrands")}</option>` +
    brands.map(b => `<option value="${b}">${b}</option>`).join("");
  brandSelect.value = browseFilters.brand;

  const levelSelect = getElement("browseLevel");
  levelSelect.innerHTML = `<option value="">${t("browse.allLevels")}</option>` +
    levels.map(l => `<option value="${l}">${t("level." + l)}</option>`).join("");
  levelSelect.value = browseFilters.level;

  const sortSelect = getElement("browseSort");
  sortSelect.innerHTML = [
    ["control", t("browse.sortControl")],
    ["power", t("browse.sortPower")],
    ["priceAsc", t("browse.sortPriceAsc")],
    ["priceDesc", t("browse.sortPriceDesc")]
  ].map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
  sortSelect.value = browseFilters.sort;

  getElement("browseSearch").value = browseFilters.search;
  getElement("browseSearch").placeholder = t("browse.searchPlaceholder");

  getElement("browseSearch").oninput = e => { browseFilters.search = e.target.value; renderBrowseGrid(); };
  shapeSelect.onchange = e => { browseFilters.shape = e.target.value; renderBrowseGrid(); };
  brandSelect.onchange = e => { browseFilters.brand = e.target.value; renderBrowseGrid(); };
  levelSelect.onchange = e => { browseFilters.level = e.target.value; renderBrowseGrid(); };
  sortSelect.onchange = e => { browseFilters.sort = e.target.value; renderBrowseGrid(); };
}

function getFilteredRackets() {
  const q = browseFilters.search.trim().toLowerCase();
  const sorters = {
    control: (a, b) => b.control - a.control,
    power: (a, b) => b.power - a.power,
    priceAsc: (a, b) => a.price - b.price,
    priceDesc: (a, b) => b.price - a.price
  };
  return RACKETS
    .filter(r =>
      (!q || r.name.toLowerCase().includes(q) || r.brand.toLowerCase().includes(q)) &&
      (!browseFilters.shape || r.form === browseFilters.shape) &&
      (!browseFilters.brand || r.brand === browseFilters.brand) &&
      (!browseFilters.level || r.level === browseFilters.level)
    )
    .sort(sorters[browseFilters.sort] || sorters.control);
}

function browseCard(racket) {
  const selected = compareSelection.includes(racket.name);
  const full = compareSelection.length >= 3 && !selected;
  const label = selected ? t("browse.compareRemove") : (full ? t("browse.compareFull") : t("browse.compareAdd"));
  const safeName = racket.name.replace(/'/g, "\\'");
  return `<article class="browse-card">
    ${racketImageBlock(racket)}
    <div class="browse-card-body">
      <h3>${racket.name}</h3>
      <div class="browse-card-meta">${racket.brand} · ${t("shape." + racket.form)} · ${formatPrice(racket.price)} €</div>
      <button class="secondary browse-toggle${selected ? " selected" : ""}"${full ? " disabled" : ""} onclick="toggleCompare('${safeName}')">${label}</button>
    </div>
  </article>`;
}

function renderBrowseGrid() {
  const list = getFilteredRackets();
  const grid = getElement("browseGrid");
  grid.innerHTML = list.length
    ? `<p class="hint">${t("browse.resultsCount")(list.length)}</p><div class="browse-cards">${list.map(browseCard).join("")}</div>`
    : `<p class="hint">${t("browse.noResults")}</p>`;
  renderCompareBar();
}

function toggleCompare(name) {
  if (compareSelection.includes(name)) {
    compareSelection = compareSelection.filter(n => n !== name);
  } else if (compareSelection.length < 3) {
    compareSelection.push(name);
  }
  renderBrowseGrid();
  renderCompareView();
}

function clearCompare() {
  compareSelection = [];
  renderBrowseGrid();
  renderCompareView();
}

function renderCompareBar() {
  const bar = getElement("browseCompareBar");
  if (!compareSelection.length) {
    bar.classList.add("hidden");
    bar.innerHTML = "";
    return;
  }
  bar.classList.remove("hidden");
  bar.innerHTML = `<span>${t("browse.compareBarText")(compareSelection.length)}</span><button class="secondary" onclick="clearCompare()">${t("browse.compareClear")}</button>`;
}

const COMPARE_RADAR_CLASSES = ["radar-user", "radar-partner", "radar-racket"];
const COMPARE_LEGEND_CLASSES = ["legend-user", "legend-partner", "legend-racket"];

function browseCompareCard(racket, index) {
  return `<article class="recommendation anim-in" style="animation-delay:${index * 0.08}s">
    <div class="rec-body">
      ${racketImageBlock(racket)}
      <div class="rec-main">
        <h2>${racket.name}</h2>
        <div>${racket.brand} · ${t("shape." + racket.form)} · ${formatNumber(racket.weight)} g · ${t("balance." + racket.balance)} · ${t("kernLabel")} ${t("feel." + racket.feel)} · ${t("level." + racket.level)}</div>
        ${createStatBars(racket)}
        <div class="why"><h3>${t("card.priceLabel")}</h3><p>${t("card.priceText")(formatPrice(racket.price))}</p></div>
        <a class="buy" href="${racket.url}" target="_blank" rel="noopener">${t("card.buy")}</a>
      </div>
    </div>
  </article>`;
}

function renderCompareView() {
  const view = getElement("browseCompareView");
  if (compareSelection.length < 2) {
    view.innerHTML = "";
    return;
  }
  const rackets = compareSelection.map(name => RACKETS.find(r => r.name === name)).filter(Boolean);
  const radar = buildRadarSVG(rackets.map((r, i) => ({ values: racketRadarValues(r), cssClass: COMPARE_RADAR_CLASSES[i] })));

  let html = `<section class="analysis anim-in"><h2 class="analysis-title">${t("browse.compareTitle")}</h2>`;
  html += `<div class="radar-wrap">${radar}</div>`;
  html += `<div class="radar-legend">${rackets.map((r, i) => `<span><i class="legend-dot ${COMPARE_LEGEND_CLASSES[i]}"></i>${r.name}</span>`).join("")}</div>`;
  html += `</section>`;
  html += rackets.map(browseCompareCard).join("");
  view.innerHTML = html;
  animateFillsAndScores(view);
}

function renderBrowseIfActive() {
  if (!getElement("browseSection").classList.contains("hidden")) {
    renderBrowseControls();
    renderBrowseGrid();
    renderCompareView();
  }
}
