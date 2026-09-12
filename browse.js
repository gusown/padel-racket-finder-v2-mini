// Browse & compare mode — lets you explore all rackets without doing the quiz.
// Relies on globals defined in app.js: RACKETS, t, LANG, getElement, formatNumber,
// formatPrice, buildRadarSVG, racketRadarValues, createStatBars, racketImageBlock,
// animateFillsAndScores, RACKET_ICON.

let browseFilters = { search: "", shape: "", brand: "", level: "", sort: "control" };
let compareSelection = [];
let browseOpenedFromResults = false;

function openBrowse() {
  browseOpenedFromResults = !getElement("results").classList.contains("hidden");
  document.querySelector(".hero").classList.add("hidden");
  getElement("modeSelect").classList.add("hidden");
  getElement("quiz").classList.add("hidden");
  getElement("results").classList.add("hidden");
  getElement("browseSection").classList.remove("hidden");
  if (hasOwnProfile && browseFilters.sort === "control") browseFilters.sort = "personal";
  scrollToTop();
  renderBrowseControls();
  renderBrowseGrid();
  renderCompareView();
}

function closeBrowse() {
  getElement("browseSection").classList.add("hidden");
  if (browseOpenedFromResults) getElement("results").classList.remove("hidden");
  else document.querySelector(".hero").classList.remove("hidden");
  scrollToTop();
}

function scrollToCompare() {
  getElement("browseCompareView").scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
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

  getElement("browseSection").querySelector(".browse-back").textContent =
    browseOpenedFromResults ? t("results.backToResults") : t("browse.back");
  shapeSelect.setAttribute("aria-label", t("browse.allShapes"));
  brandSelect.setAttribute("aria-label", t("browse.allBrands"));
  levelSelect.setAttribute("aria-label", t("browse.allLevels"));
  getElement("browseSearch").setAttribute("aria-label", t("browse.searchPlaceholder"));

  const sortSelect = getElement("browseSort");
  const sortOptions = hasOwnProfile ? [["personal", t("browse.yourScore")]] : [];
  sortSelect.setAttribute("aria-label", t("browse.sortControl"));
  sortSelect.innerHTML = sortOptions.concat([
    ["control", t("browse.sortControl")],
    ["power", t("browse.sortPower")],
    ["priceAsc", t("browse.sortPriceAsc")],
    ["priceDesc", t("browse.sortPriceDesc")]
  ]).map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
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
    personal: (a, b) => personalScoreFor(b) - personalScoreFor(a),
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
  const scoreBadge = hasOwnProfile
    ? `<div class="browse-score" title="${t("browse.yourScoreHint")}">${t("browse.yourScore")}: <b>${personalScoreFor(racket)}/100</b></div>`
    : "";
  return `<article class="browse-card">
    ${racketImageBlock(racket)}
    <div class="browse-card-body">
      <h3>${racket.name}</h3>
      <div class="browse-card-meta">${racket.brand} · ${t("shape." + racket.form)} · ${formatPrice(racket.price)} €</div>
      ${scoreBadge}
      <button class="secondary browse-toggle${selected ? " selected" : ""}"${full ? " disabled" : ""} onclick="toggleCompare('${safeName}')">${label}</button>
    </div>
  </article>`;
}

function buildCompareTable(rackets) {
  const scoreRows = [
    [t("stat.control"), r => r.control],
    [t("stat.power"), r => r.power],
    [t("stat.forgiveness"), r => r.forgiveness],
    [t("stat.comfort"), r => r.comfort],
    [t("stat.maneuver"), r => r.maneuver],
    [t("stat.effect"), r => r.effect]
  ];
  let html = `<div class="compare-table-wrap"><table class="compare-table"><thead><tr><th></th>`;
  html += rackets.map(r => `<th>${r.name}</th>`).join("");
  html += `</tr></thead><tbody>`;
  scoreRows.forEach(([label, getter]) => {
    const values = rackets.map(getter);
    const best = Math.max(...values);
    html += `<tr><td class="compare-row-label">${label}</td>`;
    html += values.map(v => `<td class="${v === best ? "compare-best" : ""}">${v}/10</td>`).join("");
    html += `</tr>`;
  });
  const prices = rackets.map(r => r.price);
  const bestPrice = Math.min(...prices);
  html += `<tr><td class="compare-row-label">${t("card.priceLabel")}</td>`;
  html += prices.map(p => `<td class="${p === bestPrice ? "compare-best" : ""}">${formatPrice(p)} €</td>`).join("");
  html += `</tr>`;
  html += `<tr><td class="compare-row-label">${t("stat.weight")}</td>`;
  html += rackets.map(r => `<td>${formatNumber(r.weight)} g</td>`).join("");
  html += `</tr>`;
  if (hasOwnProfile) {
    const scores = rackets.map(r => personalScoreFor(r));
    const bestScore = Math.max(...scores);
    html += `<tr class="compare-personal-row"><td class="compare-row-label">${t("browse.yourScore")}</td>`;
    html += scores.map(s => `<td class="${s === bestScore ? "compare-best" : ""}">${s}/100</td>`).join("");
    html += `</tr>`;
  }
  html += `</tbody></table></div>`;
  return html;
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
  const jump = compareSelection.length >= 2
    ? `<button class="primary" onclick="scrollToCompare()">${t("browse.compareJump")}</button>`
    : "";
  bar.innerHTML = `<span>${t("browse.compareBarText")(compareSelection.length)}</span><div class="compare-bar-actions">${jump}<button class="secondary" onclick="clearCompare()">${t("browse.compareClear")}</button></div>`;
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
  html += buildCompareTable(rackets);
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
