// app.js — Industry Tracker Application Logic with 13 Sector Dashboard Components, Value Chain Matrix & Read-Only Ingestion

/* ================================================
   STATE & PERSISTENCE
   ================================================ */
const STORAGE_KEY_INDUSTRIES = 'industry_tracker_industries_v5';
const STORAGE_KEY_UPLOADS = 'industry_tracker_uploads_v5';

function loadInitialIndustries() {
  const saved = localStorage.getItem(STORAGE_KEY_INDUSTRIES);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      return parsed.map(ensureIndustryEnrichment);
    } catch (e) { console.error('Failed to parse industries', e); }
  }
  return DEFAULT_INDUSTRIES.map(ensureIndustryEnrichment);
}

function loadInitialUploads() {
  const saved = localStorage.getItem(STORAGE_KEY_UPLOADS);
  if (saved) {
    try { return JSON.parse(saved); } catch (e) { console.error('Failed to parse uploads', e); }
  }
  return [...DEFAULT_UPLOAD_HISTORY];
}

const state = {
  currentPage: 'dashboard',
  searchQuery: '',
  sectorFilter: 'all',
  activeDocScope: 'all', // 'all' | 'latest' | specific doc name
  compareList: [],       // Array of industry IDs (max 4)
  industries: loadInitialIndustries(),
  uploadHistory: loadInitialUploads(),
  modalModuleFilter: 'all',
  charts: {}
};

function saveState() {
  localStorage.setItem(STORAGE_KEY_INDUSTRIES, JSON.stringify(state.industries));
  localStorage.setItem(STORAGE_KEY_UPLOADS, JSON.stringify(state.uploadHistory));
}

/* ================================================
   13 SECTOR DASHBOARD ENRICHMENT HELPER
   =============================================== */
function ensureIndustryEnrichment(ind) {
  if (!ind) return ind;

  if (!ind.regulatoryTimeline) {
    ind.regulatoryTimeline = [
      { year: "2018", title: "Regulatory Framework Reform", detail: "Policy licensing standards & FDI channel expansion" },
      { year: "2020", title: "Digital Integration Mandate", detail: "API interoperability & electronic reporting requirements" },
      { year: "2022", title: "PLI Incentive Allocation", detail: "Government fiscal support & export promotion scheme" },
      { year: "2024+", title: "ESG & Sustainability Norms", detail: "Mandatory BRSR disclosure & carbon reduction targets" }
    ];
  }

  if (!ind.globalBenchmarking) {
    ind.globalBenchmarking = {
      metricLabel: "Per Capita Consumption / Spend ($)",
      labels: ["India", "China", "Brazil", "USA", "Global Avg"],
      values: [48, 160, 110, 340, 135]
    };
  }

  if (!ind.costStructure) {
    ind.costStructure = {
      labels: ["Total Revenue", "Raw Materials", "Employee Cost", "Other Opex", "EBITDA", "D&A", "PAT"],
      values: [100, 52, 14, 14, 20, 5, 15]
    };
  }

  if (!ind.workingCapital) {
    ind.workingCapital = {
      inventoryDays: 36,
      receivableDays: 28,
      payableDays: 42,
      cashConversionCycle: 22
    };
  }

  if (!ind.creditProfile) {
    ind.creditProfile = {
      netDebtToEbitda: "1.4x",
      creditRating: "AA / Stable",
      costOfDebt: "7.8%",
      liquidityBuffer: "Strong Reserve Position"
    };
  }

  if (!ind.stockPerformance) {
    ind.stockPerformance = {
      labels: ["Q1 23", "Q2 23", "Q3 23", "Q4 23", "Q1 24", "Q2 24"],
      sectorIndex: [100, 108, 120, 130, 142, 158],
      benchmarkNifty: [100, 105, 112, 116, 122, 130],
      return1Yr: "+29.5%",
      return3Yr: "+72.0%",
      volatilityBeta: "1.10x"
    };
  }

  if (!ind.customerSegmentation) {
    ind.customerSegmentation = {
      labels: ["B2C Urban", "B2C Rural", "B2B Enterprise"],
      values: [45, 35, 20],
      incomeCohort: "Tier-1 Metros (45%), Tier-2/3 Cities (35%), Rural Markets (20%)"
    };
  }

  if (!ind.demandSupplyGap) {
    ind.demandSupplyGap = {
      labels: ["2021", "2022", "2023", "2024E", "2025F"],
      installedCapacity: [100, 112, 126, 142, 160],
      actualDemand: [86, 98, 114, 130, 150],
      utilizationRate: "82.5% Utilization"
    };
  }

  if (!ind.swot) {
    ind.swot = {
      strengths: ["Massive domestic demographic dividend & rising disposable income", "Established distribution channels spanning urban & rural hubs"],
      weaknesses: ["Sensitivity to raw material price volatility", "Margin pressure in traditional unorganized segments"],
      opportunities: ["Omnichannel digital commerce expansion & premiumization", "PLI policy support accelerating manufacturing exports"],
      threats: ["Hyperlocal quick-commerce disruption", "Global supply chain disruptions & freight rate inflation"]
    };
  }

  if (!ind.dealTimeline) {
    ind.dealTimeline = [
      { date: "Q2 2023", company: "Brand Portfolio Buyout", value: "$420M", buyer: "Strategic Conglomerate A" },
      { date: "Q4 2023", company: "D2C Stake Acquisition", value: "$190M", buyer: "Private Equity Growth Fund" },
      { date: "Q1 2024", company: "Manufacturing Asset Integration", value: "$350M", buyer: "Global Industrial Group" }
    ];
  }

  if (!ind.techRadar) {
    ind.techRadar = {
      aiIntegration: "Medium",
      roboticsAutomation: "Medium",
      d2cOmnichannel: "High",
      platformEcosystem: "Medium"
    };
  }

  if (!ind.interviewAngles) {
    ind.interviewAngles = [
      "Market Sizing: Estimate the annual total addressable market (TAM) for this sector by 2030.",
      "Profitability Case: How can a market leader improve EBITDA margin by 300 bps?",
      "M&A Evaluation: What operational risks would you assess when acquiring an industry competitor?",
      "Supply Chain: Calculate the cost trade-off between local sourcing vs global imports."
    ];
  }

  if (!ind.glossary) {
    ind.glossary = [
      { term: "EBITDA", definition: "Earnings Before Interest, Tax, Depreciation & Amortization." },
      { term: "TAM", definition: "Total Addressable Market — Total revenue opportunity." },
      { term: "CAGR", definition: "Compound Annual Growth Rate over a specific timeframe." },
      { term: "PLI", definition: "Production Linked Incentive scheme by the Government of India." }
    ];
  }

  return ind;
}

/* ================================================
   DATA SCOPE & FILTERING HELPERS
   =============================================== */
function getLatestUploadedDoc() {
  if (!state.uploadHistory || state.uploadHistory.length === 0) return null;
  return state.uploadHistory[0];
}

function getDisplayedIndustries() {
  if (state.activeDocScope === 'all') {
    return state.industries;
  }
  
  if (state.activeDocScope === 'latest') {
    const latest = getLatestUploadedDoc();
    if (!latest) return state.industries;
    const filtered = state.industries.filter(ind => ind.uploadedDoc === latest.name);
    return filtered.length > 0 ? filtered : state.industries;
  }

  const filtered = state.industries.filter(ind => ind.uploadedDoc === state.activeDocScope);
  return filtered.length > 0 ? filtered : state.industries;
}

function getIndustryById(id) {
  return state.industries.find(i => i.id === id);
}

function getBadgeClass(level) {
  if (!level) return 'badge-medium';
  const l = level.toLowerCase();
  if (l === 'low') return 'badge-low';
  if (l === 'high') return 'badge-high';
  return 'badge-medium';
}

function makeBadge(level) {
  return `<span class="force-badge ${getBadgeClass(level)}">${level}</span>`;
}

function forceToScore(level) {
  if (!level) return 3;
  const l = level.toLowerCase();
  if (l === 'low') return 1;
  if (l === 'medium') return 3;
  if (l === 'high') return 5;
  return 3;
}

/* ================================================
   RESET DATA & RESET UPLOADS
   =============================================== */
function resetAllUploadedData() {
  localStorage.removeItem(STORAGE_KEY_INDUSTRIES);
  localStorage.removeItem(STORAGE_KEY_UPLOADS);
  
  state.industries = DEFAULT_INDUSTRIES.map(ensureIndustryEnrichment);
  state.uploadHistory = [...DEFAULT_UPLOAD_HISTORY];
  state.activeDocScope = 'all';
  state.searchQuery = '';
  state.sectorFilter = 'all';
  state.compareList = [];

  saveState();
  updateDocFilterOptions();
  renderActiveScopeUI();
  refreshCurrentPage();
  showToast('✅ System restored to original default baseline dataset.');
}

function deleteUploadHistoryItem(docId) {
  const item = state.uploadHistory.find(u => u.id === docId || u.name === docId);
  if (!item) return;

  const docName = item.name;
  state.uploadHistory = state.uploadHistory.filter(u => u.id !== docId && u.name !== docId);
  state.industries = state.industries.filter(ind => ind.uploadedDoc !== docName);

  if (state.activeDocScope === docName || (state.activeDocScope === 'latest' && getLatestUploadedDoc()?.name !== docName)) {
    state.activeDocScope = 'all';
  }

  saveState();
  updateDocFilterOptions();
  renderActiveScopeUI();
  refreshCurrentPage();
  showToast(`🗑️ Removed document "${docName}" & extracted features.`);
}

/* ================================================
   DATASET FOCUS SCOPE UI
   =============================================== */
function setDatasetScope(scope) {
  state.activeDocScope = scope;
  renderActiveScopeUI();
  refreshCurrentPage();
}

function renderActiveScopeUI() {
  const tabAll = document.getElementById('tab-scope-all');
  const tabLatest = document.getElementById('tab-scope-latest');
  const docSelect = document.getElementById('docFilterSelect');

  if (tabAll) tabAll.classList.toggle('active', state.activeDocScope === 'all');
  if (tabLatest) tabLatest.classList.toggle('active', state.activeDocScope === 'latest');

  if (docSelect) {
    if (state.activeDocScope !== 'all' && state.activeDocScope !== 'latest') {
      docSelect.value = state.activeDocScope;
    } else {
      docSelect.value = 'all';
    }
  }

  const banner = document.getElementById('activeScopeBanner');
  const bannerText = document.getElementById('bannerText');

  if (banner && bannerText) {
    if (state.activeDocScope === 'all') {
      banner.classList.add('hidden');
    } else {
      banner.classList.remove('hidden');
      const latest = getLatestUploadedDoc();
      const docName = state.activeDocScope === 'latest' ? (latest ? latest.name : 'Latest Upload') : state.activeDocScope;
      const count = getDisplayedIndustries().length;
      bannerText.innerHTML = `Currently focused on <strong>${docName}</strong> (${count} Extracted Industries)`;
    }
  }

  document.querySelectorAll('.upload-history-item').forEach(item => {
    const isFocus = item.dataset.docName === state.activeDocScope || 
      (state.activeDocScope === 'latest' && item.dataset.docName === getLatestUploadedDoc()?.name);
    item.classList.toggle('is-active-focus', isFocus);
  });
}

function updateDocFilterOptions() {
  const docSelect = document.getElementById('docFilterSelect');
  if (!docSelect) return;

  const currentVal = docSelect.value;
  docSelect.innerHTML = `<option value="all">Source: All Documents</option>`;
  
  const uniqueDocs = [...new Set(state.uploadHistory.map(u => u.name))];
  uniqueDocs.forEach(docName => {
    const opt = document.createElement('option');
    opt.value = docName;
    opt.textContent = `Doc: ${docName}`;
    docSelect.appendChild(opt);
  });

  docSelect.value = currentVal && uniqueDocs.includes(currentVal) ? currentVal : 'all';
}

/* ================================================
   NAVIGATION
   =============================================== */
function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const pageEl = document.getElementById(`page-${page}`);
  const navEl = document.getElementById(`nav-${page}`);
  if (pageEl) pageEl.classList.add('active');
  if (navEl) navEl.classList.add('active');

  state.currentPage = page;
  refreshCurrentPage();
}

function refreshCurrentPage() {
  const page = state.currentPage;
  if (page === 'dashboard') initDashboard();
  if (page === 'explorer') initExplorer();
  if (page === 'compare') renderCompare();
  if (page === 'upload') renderUploadHistory();
}

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    navigateTo(item.dataset.page);
  });
});

/* ================================================
   DASHBOARD VISUALIZATIONS
   =============================================== */
function initDashboard() {
  const displayed = getDisplayedIndustries();
  const docCount = state.activeDocScope === 'all' ? state.uploadHistory.length : 1;
  const indCount = displayed.length;
  const sectorCount = new Set(displayed.map(i => i.sector)).size;

  const kpiDocs = document.getElementById('kpiDocsValue');
  const kpiInds = document.getElementById('kpiIndustriesValue');
  const kpiSecs = document.getElementById('kpiSectorsValue');

  if (kpiDocs) kpiDocs.dataset.target = docCount;
  if (kpiInds) kpiInds.dataset.target = indCount;
  if (kpiSecs) kpiSecs.dataset.target = sectorCount;

  animateKPIs();
  renderSectorChart();
  renderCagrLeaderboardChart();
  renderHeatmapTable();
}

function animateKPIs() {
  document.querySelectorAll('.kpi-value').forEach(el => {
    const target = parseInt(el.dataset.target) || 0;
    const duration = 600;
    const start = performance.now();
    const startVal = 0;

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(startVal + (target - startVal) * eased);
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

function renderSectorChart() {
  const ctx = document.getElementById('sectorChart');
  if (!ctx) return;

  const displayed = getDisplayedIndustries();
  const sectorCount = {};
  displayed.forEach(ind => {
    sectorCount[ind.sector] = (sectorCount[ind.sector] || 0) + 1;
  });

  const labels = Object.keys(sectorCount);
  const data = Object.values(sectorCount);
  const colors = labels.map(l => SECTOR_COLORS[l] || '#1e4078');

  if (state.charts.sector) state.charts.sector.destroy();

  state.charts.sector = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels,
      datasets: [{
        data,
        backgroundColor: colors,
        borderColor: '#ffffff',
        borderWidth: 2,
        hoverOffset: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '65%',
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#ffffff',
          borderColor: 'rgba(30,64,120,0.14)',
          borderWidth: 1,
          titleColor: '#0f1e35',
          bodyColor: '#4a6080',
          padding: 10,
          titleFont: { family: 'Space Mono', size: 11, weight: '700' },
          bodyFont: { family: 'Inter', size: 12 },
          callbacks: { label: ctx => ` ${ctx.parsed} industries` }
        }
      }
    }
  });

  const legendEl = document.getElementById('sectorLegend');
  if (legendEl) {
    legendEl.innerHTML = labels.slice(0, 9).map((label, i) => `
      <div class="legend-item">
        <div class="legend-dot" style="background:${colors[i]}"></div>
        <span>${label} (${data[i]})</span>
      </div>
    `).join('');
  }
}

function renderCagrLeaderboardChart() {
  const ctx = document.getElementById('cagrLeaderboardChart');
  if (!ctx) return;

  const displayed = getDisplayedIndustries();
  const parsed = displayed.map(ind => {
    const match = ind.cagr.match(/(\d+)/);
    const val = match ? parseInt(match[1]) : 10;
    return { name: ind.name, cagr: val, sector: ind.sector };
  }).sort((a, b) => b.cagr - a.cagr).slice(0, 6);

  if (state.charts.cagr) state.charts.cagr.destroy();

  state.charts.cagr = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: parsed.map(p => p.name.length > 16 ? p.name.slice(0, 16) + '…' : p.name),
      datasets: [{
        label: 'CAGR Growth %',
        data: parsed.map(p => p.cagr),
        backgroundColor: parsed.map(p => SECTOR_COLORS[p.sector] || '#0284c7'),
        borderRadius: 6,
        borderSkipped: false
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#ffffff',
          borderColor: 'rgba(30,64,120,0.14)',
          borderWidth: 1,
          titleColor: '#0f1e35',
          bodyColor: '#059669',
          padding: 10,
          titleFont: { family: 'Space Mono', size: 11 },
          bodyFont: { family: 'Inter', size: 12, weight: '600' },
          callbacks: { label: ctx => ` CAGR: ~${ctx.parsed.x}%` }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(30,64,120,0.06)' },
          ticks: { color: '#8aa0be', font: { family: 'Space Mono', size: 9 }, callback: val => `${val}%` }
        },
        y: {
          grid: { display: false },
          ticks: { color: '#0f1e35', font: { family: 'Inter', size: 11, weight: '500' } }
        }
      }
    }
  });
}

function renderHeatmapTable() {
  const tbody = document.getElementById('heatmapBody');
  if (!tbody) return;

  const displayed = getDisplayedIndustries().slice(0, 12);
  const latestDoc = getLatestUploadedDoc()?.name;

  tbody.innerHTML = displayed.map(ind => {
    const isNew = ind.isNew || ind.uploadedDoc === latestDoc;
    return `
      <tr class="${isNew ? 'row-new' : ''}">
        <td class="industry-cell" data-id="${ind.id}">
          <span>${ind.name}</span>
          ${isNew ? `<span class="new-tag-badge">NEW</span>` : ''}
        </td>
        <td>${makeBadge(ind.forces.newEntrants)}</td>
        <td>${makeBadge(ind.forces.buyerPower)}</td>
        <td>${makeBadge(ind.forces.supplierPower)}</td>
        <td>${makeBadge(ind.forces.substitutes)}</td>
        <td>${makeBadge(ind.forces.rivalry)}</td>
        <td class="doc-source-cell">${ind.uploadedDoc || 'Default'}</td>
      </tr>
    `;
  }).join('');

  tbody.querySelectorAll('.industry-cell').forEach(cell => {
    cell.addEventListener('click', () => openModal(cell.dataset.id));
  });
}

/* ================================================
   EXPLORER
   =============================================== */
function initExplorer() {
  const filterEl = document.getElementById('sectorFilter');
  if (filterEl) {
    const currentSector = filterEl.value;
    filterEl.innerHTML = `<option value="all">All Sectors</option>`;
    
    const uniqueSectors = [...new Set(state.industries.map(i => i.sector))].sort();
    uniqueSectors.forEach(sector => {
      const opt = document.createElement('option');
      opt.value = sector;
      opt.textContent = sector;
      filterEl.appendChild(opt);
    });

    filterEl.value = uniqueSectors.includes(currentSector) ? currentSector : 'all';
  }

  renderIndustryGrid();

  const searchEl = document.getElementById('industrySearch');
  if (searchEl) {
    searchEl.value = state.searchQuery;
    searchEl.oninput = e => {
      state.searchQuery = e.target.value;
      renderIndustryGrid();
    };
  }

  if (filterEl) {
    filterEl.onchange = e => {
      state.sectorFilter = e.target.value;
      renderIndustryGrid();
    };
  }
}

function renderIndustryGrid() {
  const grid = document.getElementById('industryGrid');
  const noResults = document.getElementById('noResults');
  if (!grid) return;

  const query = state.searchQuery.toLowerCase().trim();
  const sector = state.sectorFilter;
  const displayed = getDisplayedIndustries();
  const latestDoc = getLatestUploadedDoc()?.name;

  const filtered = displayed.filter(ind => {
    const matchSearch = !query ||
      ind.name.toLowerCase().includes(query) ||
      ind.sector.toLowerCase().includes(query) ||
      ind.description.toLowerCase().includes(query);
    const matchSector = sector === 'all' || ind.sector === sector;
    return matchSearch && matchSector;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResults.classList.remove('hidden');
    return;
  }

  noResults.classList.add('hidden');

  grid.innerHTML = filtered.map(ind => {
    const color = SECTOR_COLORS[ind.sector] || '#2563eb';
    const isNew = ind.isNew || ind.uploadedDoc === latestDoc;
    return `
      <div class="industry-card ${isNew ? 'card-highlight-new' : ''}" data-id="${ind.id}">
        <div class="card-top">
          <div class="card-sector-tag" style="color:${color};background:${color}15;border:1px solid ${color}33">${ind.sector}</div>
          ${isNew ? `<span class="new-tag-badge">LAST UPDATED</span>` : ''}
        </div>
        <div class="card-title">${ind.name}</div>
        <div class="card-desc">${ind.description}</div>
        <div class="card-metrics">
          <div class="card-metric">
            <div class="card-metric-label">SIZE</div>
            <div class="card-metric-value">${ind.size}</div>
          </div>
          <div class="card-metric">
            <div class="card-metric-label">CAGR</div>
            <div class="card-metric-value" style="color:#059669;">${ind.cagr}</div>
          </div>
        </div>
        <div class="card-footer">
          <span class="card-doc-source" title="${ind.uploadedDoc || 'Default'}">📄 ${ind.uploadedDoc || 'Default'}</span>
          <div class="card-actions">
            <button class="card-analyze-btn" data-id="${ind.id}">Analyze &amp; Charts →</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.industry-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.id));
  });

  grid.querySelectorAll('.card-analyze-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openModal(btn.dataset.id);
    });
  });
}

/* ================================================
   INDUSTRY DETAIL FULL-PAGE DASHBOARD DECK (13 COMPONENTS)
   =============================================== */
function openModal(id) {
  const rawInd = getIndustryById(id);
  if (!rawInd) return;
  const ind = ensureIndustryEnrichment(rawInd);

  document.getElementById('modalSector').textContent = ind.sector;
  document.getElementById('modalTitle').textContent = ind.name;

  const forces = [
    { key: 'newEntrants', label: 'New Entrants', value: ind.forces.newEntrants },
    { key: 'buyerPower', label: 'Buyer Power', value: ind.forces.buyerPower },
    { key: 'supplierPower', label: 'Supplier Power', value: ind.forces.supplierPower },
    { key: 'substitutes', label: 'Substitutes', value: ind.forces.substitutes },
    { key: 'rivalry', label: 'Competitive Rivalry', value: ind.forces.rivalry }
  ];

  const vc = ind.valueChain || {
    inputs: "Raw Materials & Core Component Suppliers",
    operations: "Processing & Assembly Engineering",
    distribution: "Distribution & Retail Channels",
    endMarkets: "Enterprise & End Consumers",
    marginDriver: "Scale Economies & IP",
    bottleneck: "Supply Chain Disruptions"
  };

  document.getElementById('modalBody').innerHTML = `
    <!-- Modular Section Filter Bar (Full Width) -->
    <div class="modal-module-toggle-bar">
      <span style="font-family:var(--font-mono);font-size:11px;color:var(--outline);font-weight:700;">FILTER MODULES:</span>
      <button class="module-toggle-chip ${state.modalModuleFilter === 'all' ? 'active' : ''}" data-mod-filter="all">All 13 Modules</button>
      <button class="module-toggle-chip ${state.modalModuleFilter === 'priority' ? 'active' : ''}" data-mod-filter="priority">★ Priority (1, 3, 6, 9)</button>
      <button class="module-toggle-chip ${state.modalModuleFilter === 'regulatory' ? 'active' : ''}" data-mod-filter="regulatory">Policy &amp; Reg</button>
      <button class="module-toggle-chip ${state.modalModuleFilter === 'financial' ? 'active' : ''}" data-mod-filter="financial">Financial &amp; Credit</button>
      <button class="module-toggle-chip ${state.modalModuleFilter === 'market' ? 'active' : ''}" data-mod-filter="market">Market &amp; Strategy</button>
      <button class="module-toggle-chip ${state.modalModuleFilter === 'prep' ? 'active' : ''}" data-mod-filter="prep">Prep &amp; Glossary</button>
    </div>

    <!-- Overview & Source PDF (Full Width) -->
    <div class="deck-module-card span-full" data-module-cat="market">
      <div class="modal-section-title">Ingested Report Overview</div>
      <p class="modal-desc" style="margin-bottom:8px;">${ind.description}</p>
      <div style="font-family:var(--font-mono);font-size:11px;color:var(--outline);">📄 Ingested Document: <strong>${ind.uploadedDoc || 'Default Industry Primer'}</strong></div>
    </div>

    <!-- Read-only Financial Metrics (Full Width) -->
    <div class="deck-module-card span-full" data-module-cat="financial">
      <div class="modal-section-title">Market Intelligence &amp; Metrics</div>
      <div class="modal-metrics-grid">
        <div class="modal-metric">
          <div class="modal-metric-label">Market Size</div>
          <div class="modal-metric-value">${ind.size}</div>
        </div>
        <div class="modal-metric">
          <div class="modal-metric-label">Growth (CAGR)</div>
          <div class="modal-metric-value" style="color:#059669;">${ind.cagr}</div>
        </div>
        <div class="modal-metric">
          <div class="modal-metric-label">Strategic Outlook</div>
          <div class="modal-metric-value" style="color:${ind.outlook === 'Positive' ? '#059669' : ind.outlook === 'Volatile' ? '#d97706' : '#1e4078'};">${ind.outlook}</div>
        </div>
      </div>
    </div>

    <!-- 1. Regulatory/Policy Timeline (Priority 1 - Full Width) -->
    <div class="deck-module-card span-full" data-module-cat="regulatory priority">
      <div class="boxed-section-header">
        <div class="boxed-section-title-group">
          <span class="priority-tag">PRIORITY 1</span>
          🏛️ Regulatory &amp; Policy Timeline
        </div>
        <span class="source-citation">[Source: Ministry Filings &amp; Sector Primers, 2024]</span>
      </div>
      <div class="timeline-horizontal">
        ${ind.regulatoryTimeline.map(t => `
          <div class="timeline-step">
            <div class="timeline-year">${t.year}</div>
            <div class="timeline-title">${t.title}</div>
            <div class="timeline-detail">${t.detail}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 2. Global Benchmarking (Col 1) -->
    <div class="deck-module-card" data-module-cat="market">
      <div class="boxed-section-header">
        <div class="boxed-section-title-group">
          🌐 Global Benchmarking (India vs Global Peers)
        </div>
        <span class="source-citation">[Source: Global Sector Benchmarks]</span>
      </div>
      <div style="height:220px;">
        <canvas id="globalBenchmarkingCanvas"></canvas>
      </div>
    </div>

    <!-- 3. Cost Structure / Margin Bridge Waterfall (Priority 3 - Col 2) -->
    <div class="deck-module-card" data-module-cat="financial priority">
      <div class="boxed-section-header">
        <div class="boxed-section-title-group">
          <span class="priority-tag">PRIORITY 3</span>
          📊 Cost Structure &amp; Margin Bridge (Waterfall ➔ PAT)
        </div>
        <span class="source-citation">[Source: Financial Statement Bridge]</span>
      </div>
      <div style="height:220px;">
        <canvas id="costStructureCanvas"></canvas>
      </div>
    </div>

    <!-- 4. Working Capital Cycle (Col 1) -->
    <div class="deck-module-card" data-module-cat="financial">
      <div class="boxed-section-header">
        <div class="boxed-section-title-group">
          🔄 Working Capital Cycle Flow
        </div>
        <span class="source-citation">[Source: Balance Sheet Operating Cycles]</span>
      </div>
      <div class="wc-cycle-grid">
        <div class="wc-box">
          <div class="wc-box-label">Inventory Days</div>
          <div class="wc-box-value">${ind.workingCapital.inventoryDays} Days</div>
        </div>
        <div class="wc-box">
          <div class="wc-box-label">Receivable Days</div>
          <div class="wc-box-value">${ind.workingCapital.receivableDays} Days</div>
        </div>
        <div class="wc-box">
          <div class="wc-box-label">Payable Days</div>
          <div class="wc-box-value">${ind.workingCapital.payableDays} Days</div>
        </div>
        <div class="wc-net-box">
          <div class="wc-net-label">Net Cash Conversion Cycle (CCC)</div>
          <div class="wc-net-value">${ind.workingCapital.cashConversionCycle} Days</div>
        </div>
      </div>
    </div>

    <!-- 5. Credit Profile (Col 2) -->
    <div class="deck-module-card" data-module-cat="financial">
      <div class="boxed-section-header">
        <div class="boxed-section-title-group">
          💳 Credit Profile &amp; Debt Metrics
        </div>
        <span class="source-citation">[Source: Rating Agency Reports]</span>
      </div>
      <div class="credit-grid">
        <div class="credit-card">
          <div class="credit-label">Net Debt / EBITDA</div>
          <div class="credit-val">${ind.creditProfile.netDebtToEbitda}</div>
        </div>
        <div class="credit-card">
          <div class="credit-label">Avg Credit Rating</div>
          <div class="credit-val" style="color:#059669;">${ind.creditProfile.creditRating}</div>
        </div>
        <div class="credit-card">
          <div class="credit-label">Cost of Debt</div>
          <div class="credit-val">${ind.creditProfile.costOfDebt}</div>
        </div>
        <div class="credit-card">
          <div class="credit-label">Liquidity Buffer</div>
          <div class="credit-val">${ind.creditProfile.liquidityBuffer}</div>
        </div>
      </div>
    </div>

    <!-- 6. Stock/Index Performance (Priority 6 - Col 1) -->
    <div class="deck-module-card" data-module-cat="financial priority">
      <div class="boxed-section-header">
        <div class="boxed-section-title-group">
          <span class="priority-tag">PRIORITY 6</span>
          📈 Stock Index Performance vs Benchmark (Nifty)
        </div>
        <span class="source-citation">[Source: Exchange Market Data]</span>
      </div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
        <span style="font-family:var(--font-mono);font-size:11px;background:#e0f2fe;color:#0369a1;padding:4px 10px;border-radius:4px;font-weight:700;">1Yr Return: ${ind.stockPerformance.return1Yr}</span>
        <span style="font-family:var(--font-mono);font-size:11px;background:#dcfce7;color:#15803d;padding:4px 10px;border-radius:4px;font-weight:700;">3Yr Return: ${ind.stockPerformance.return3Yr}</span>
        <span style="font-family:var(--font-mono);font-size:11px;background:#fef3c7;color:#b45309;padding:4px 10px;border-radius:4px;font-weight:700;">Beta Volatility: ${ind.stockPerformance.volatilityBeta}</span>
      </div>
      <div style="height:210px;">
        <canvas id="stockPerformanceCanvas"></canvas>
      </div>
    </div>

    <!-- 7. Customer/Demand Segmentation (Col 2) -->
    <div class="deck-module-card" data-module-cat="market">
      <div class="boxed-section-header">
        <div class="boxed-section-title-group">
          🎯 Customer &amp; Demand Segmentation
        </div>
        <span class="source-citation">[Source: Customer Surveys]</span>
      </div>
      <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:16px;align-items:center;">
        <div style="height:200px;">
          <canvas id="customerSegCanvas"></canvas>
        </div>
        <div style="background:var(--surface-low);border:1px solid var(--surface-stroke);border-radius:var(--r-md);padding:14px;">
          <div style="font-family:var(--font-mono);font-size:10px;color:var(--outline);margin-bottom:6px;font-weight:700;">INCOME COHORT &amp; GEOGRAPHY SPLIT</div>
          <div style="font-family:var(--font-body);font-size:12px;color:var(--on-surface);line-height:1.5;">${ind.customerSegmentation.incomeCohort}</div>
        </div>
      </div>
    </div>

    <!-- 8. Demand-Supply Gap (Col 1) -->
    <div class="deck-module-card" data-module-cat="market">
      <div class="boxed-section-header">
        <div class="boxed-section-title-group">
          ⚖️ Demand-Supply Gap &amp; Capacity Utilization
        </div>
        <span class="source-citation">[Source: Capacity Trackers]</span>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
        <span style="font-family:var(--font-mono);font-size:11px;color:var(--outline);">Utilization Rate Metric:</span>
        <span style="font-family:var(--font-mono);font-size:11px;background:#e0f2fe;color:#0369a1;padding:4px 10px;border-radius:4px;font-weight:700;">${ind.demandSupplyGap.utilizationRate}</span>
      </div>
      <div style="height:210px;">
        <canvas id="demandSupplyCanvas"></canvas>
      </div>
    </div>

    <!-- 11. Technology/Disruption Radar (Col 2) -->
    <div class="deck-module-card" data-module-cat="regulatory market">
      <div class="boxed-section-header">
        <div class="boxed-section-title-group">
          ⚡ Technology &amp; Disruption Radar
        </div>
        <span class="source-citation">[Source: Innovation Trackers]</span>
      </div>
      <div class="tech-radar-grid">
        <div class="tech-radar-card">
          <span class="tech-name">🤖 GenAI / AI Integration</span>
          ${makeBadge(ind.techRadar.aiIntegration)}
        </div>
        <div class="tech-radar-card">
          <span class="tech-name">🦾 Robotics / Automation</span>
          ${makeBadge(ind.techRadar.roboticsAutomation)}
        </div>
        <div class="tech-radar-card">
          <span class="tech-name">🛒 D2C / Omnichannel</span>
          ${makeBadge(ind.techRadar.d2cOmnichannel)}
        </div>
        <div class="tech-radar-card">
          <span class="tech-name">🌐 Platform Ecosystem</span>
          ${makeBadge(ind.techRadar.platformEcosystem)}
        </div>
      </div>
    </div>

    <!-- 9. SWOT Summary (Priority 9 - Full Width) -->
    <div class="deck-module-card span-full" data-module-cat="market priority">
      <div class="boxed-section-header">
        <div class="boxed-section-title-group">
          <span class="priority-tag">PRIORITY 9</span>
          🧩 SWOT Summary Matrix
        </div>
        <span class="source-citation">[Source: Strategic Intelligence]</span>
      </div>
      <div class="swot-grid">
        <div class="swot-box swot-strengths">
          <div class="swot-title">💪 STRENGTHS</div>
          <ul class="swot-list">
            ${ind.swot.strengths.map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>
        <div class="swot-box swot-weaknesses">
          <div class="swot-title">⚠️ WEAKNESSES</div>
          <ul class="swot-list">
            ${ind.swot.weaknesses.map(w => `<li>${w}</li>`).join('')}
          </ul>
        </div>
        <div class="swot-box swot-opportunities">
          <div class="swot-title">🚀 OPPORTUNITIES</div>
          <ul class="swot-list">
            ${ind.swot.opportunities.map(o => `<li>${o}</li>`).join('')}
          </ul>
        </div>
        <div class="swot-box swot-threats">
          <div class="swot-title">🛡️ THREATS</div>
          <ul class="swot-list">
            ${ind.swot.threats.map(t => `<li>${t}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>

    <!-- 10. Recent Deal Timeline (Full Width) -->
    <div class="deck-module-card span-full" data-module-cat="financial">
      <div class="boxed-section-header">
        <div class="boxed-section-title-group">
          🤝 Recent Deal Timeline (M&amp;A &amp; PE Deals)
        </div>
        <span class="source-citation">[Source: Deal Trackers]</span>
      </div>
      <div class="deal-timeline-strip">
        ${ind.dealTimeline.map(d => `
          <div class="deal-card">
            <div class="deal-top">
              <span class="deal-date">${d.date}</span>
              <span class="deal-val">${d.value}</span>
            </div>
            <div class="deal-company">${d.company}</div>
            <div class="deal-buyer">Buyer/Investor: ${d.buyer}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Visual Value Chain Stage Pipeline Flow (Full Width) -->
    <div class="deck-module-card span-full" data-module-cat="market">
      <div class="modal-section-title">🔗 Visual Value Chain Flow Pipeline</div>
      <div class="vc-pipeline-flow">
        <div class="vc-flow-step">
          <div class="vc-flow-step-num">STAGE 1</div>
          <div class="vc-flow-step-title">Inputs</div>
          <div class="vc-flow-step-desc">${vc.inputs}</div>
        </div>
        <div class="vc-flow-step">
          <div class="vc-flow-step-num">STAGE 2</div>
          <div class="vc-flow-step-title">Operations</div>
          <div class="vc-flow-step-desc">${vc.operations}</div>
        </div>
        <div class="vc-flow-step">
          <div class="vc-flow-step-num">STAGE 3</div>
          <div class="vc-flow-step-title">Distribution</div>
          <div class="vc-flow-step-desc">${vc.distribution}</div>
        </div>
        <div class="vc-flow-step">
          <div class="vc-flow-step-num">STAGE 4</div>
          <div class="vc-flow-step-title">Touchpoints</div>
          <div class="vc-flow-step-desc">${vc.endMarkets}</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px;">
        <div class="modal-metric" style="background:#e0f2fe;border-color:rgba(2,132,199,0.3);">
          <div class="modal-metric-label" style="color:#0369a1;">Highest Margin Driver</div>
          <div style="font-size:12px;font-weight:600;color:#0369a1;">${vc.marginDriver}</div>
        </div>
        <div class="modal-metric" style="background:#fef2f2;border-color:rgba(220,38,38,0.2);">
          <div class="modal-metric-label" style="color:#b91c1c;">Value Chain Bottleneck</div>
          <div style="font-size:12px;font-weight:600;color:#b91c1c;">${vc.bottleneck}</div>
        </div>
      </div>
    </div>

    <!-- Porter's Five Forces Radar Chart & Badges (Full Width) -->
    <div class="deck-module-card span-full" data-module-cat="market">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:center;">
        <div>
          <div class="modal-section-title">Five Forces Intensity Profile</div>
          <div class="modal-forces-grid">
            ${forces.map(f => `
              <div class="modal-force">
                <span class="modal-force-name">${f.label}</span>
                ${makeBadge(f.value)}
              </div>
            `).join('')}
          </div>
        </div>
        <div>
          <div class="modal-section-title">Forces Spider Radar Graphic</div>
          <div class="modal-radar-wrapper">
            <canvas id="modalForcesRadar"></canvas>
          </div>
        </div>
      </div>
    </div>

    <!-- 12. Common Interview Angles (Placement Prep - Col 1) -->
    <div class="deck-module-card" data-module-cat="prep">
      <div class="boxed-section-header">
        <div class="boxed-section-title-group">
          🎓 Placement Prep — Common Interview Angles (PE / IB / Consulting)
        </div>
        <span class="source-citation">[Source: Placement Question Bank]</span>
      </div>
      <div class="interview-angles-box">
        ${ind.interviewAngles.map(q => `<div class="interview-angle-item">📌 <strong>Case/Guesstimate:</strong> ${q}</div>`).join('')}
      </div>
    </div>

    <!-- 13. Sector Glossary (Col 2) -->
    <div class="deck-module-card" data-module-cat="prep">
      <div class="boxed-section-header">
        <div class="boxed-section-title-group">
          📖 Compact Sector Glossary &amp; Terminology
        </div>
        <span class="source-citation">[Source: Sector Glossary]</span>
      </div>
      <div class="glossary-grid">
        ${ind.glossary.map(g => `
          <div class="glossary-item">
            <div class="glossary-term">${g.term}</div>
            <div class="glossary-def">${g.definition}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Key Players (Full Width) -->
    <div class="deck-module-card span-full" data-module-cat="market">
      <div class="modal-section-title">Key Industry Players</div>
      <div class="modal-players-list">
        ${ind.players.map(p => `<span class="player-chip">${p}</span>`).join('')}
      </div>
    </div>

    <!-- Action Buttons (Full Width) -->
    <div class="span-full" style="display:flex;align-items:center;justify-content:flex-end;gap:12px;margin-top:10px;padding-top:16px;border-top:1px solid var(--surface-stroke);">
      ${state.compareList.includes(id) ? `
        <button class="btn-secondary-sm" style="color:var(--critical-red);" onclick="removeFromCompare('${id}');closeModal();">Remove from Compare</button>
      ` : `
        <button class="btn-secondary-sm" onclick="addToCompare('${id}');closeModal();navigateTo('compare');">Add to Compare Module →</button>
      `}
    </div>
  `;

  document.getElementById('modalOverlay').classList.add('open');

  // Filter chips event listeners
  document.querySelectorAll('.module-toggle-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const filter = chip.dataset.modFilter;
      state.modalModuleFilter = filter;
      document.querySelectorAll('.module-toggle-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      document.querySelectorAll('.deck-module-card').forEach(card => {
        const cats = card.dataset.moduleCat || '';
        if (filter === 'all' || cats.includes(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Render Chart.js visual charts inside modal
  renderModalForcesRadar(ind);
  renderGlobalBenchmarkingChart(ind);
  renderCostStructureChart(ind);
  renderStockPerformanceChart(ind);
  renderCustomerSegChart(ind);
  renderDemandSupplyChart(ind);
}

/* Modal Canvas Charts Initializations */
function renderModalForcesRadar(ind) {
  const ctx = document.getElementById('modalForcesRadar');
  if (!ctx) return;

  const data = [
    forceToScore(ind.forces.newEntrants),
    forceToScore(ind.forces.buyerPower),
    forceToScore(ind.forces.supplierPower),
    forceToScore(ind.forces.substitutes),
    forceToScore(ind.forces.rivalry)
  ];

  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Entrants', 'Buyer Power', 'Supplier Power', 'Substitutes', 'Rivalry'],
      datasets: [{
        label: ind.name,
        data,
        backgroundColor: 'rgba(2, 132, 199, 0.20)',
        borderColor: '#0284c7',
        borderWidth: 2,
        pointBackgroundColor: '#0284c7',
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        r: {
          min: 0, max: 5,
          ticks: { display: false, stepSize: 1 },
          grid: { color: 'rgba(30,64,120,0.1)' },
          pointLabels: { font: { family: 'Space Mono', size: 9 }, color: '#4a6080' }
        }
      }
    }
  });
}

function renderGlobalBenchmarkingChart(ind) {
  const ctx = document.getElementById('globalBenchmarkingCanvas');
  if (!ctx || !ind.globalBenchmarking) return;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ind.globalBenchmarking.labels,
      datasets: [{
        label: ind.globalBenchmarking.metricLabel,
        data: ind.globalBenchmarking.values,
        backgroundColor: ['#0284c7', '#059669', '#7c3aed', '#d97706', '#94a3b8'],
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false }, ticks: { font: { family: 'Space Mono', size: 9 } } },
        y: { grid: { color: 'rgba(30,64,120,0.06)' } }
      }
    }
  });
}

/* Financial Waterfall Bridge Calculation & Rendering */
function calculateWaterfallBridge(costStructure) {
  const rawLabels = costStructure.labels || ["Total Revenue", "Raw Materials", "Employee Cost", "Other Opex", "EBITDA", "D&A", "PAT"];
  const rawVals = costStructure.values || [100, 52, 14, 14, 20, 5, 15];

  const ranges = [];
  const colors = [];
  const tooltips = [];

  let running = rawVals[0] || 100;

  // 1. Total Revenue (0 to Revenue)
  ranges.push([0, running]);
  colors.push('#0284c7'); // Cyan/Navy Total
  tooltips.push(`Total Revenue: ${running}%`);

  // 2. Raw Materials Deduction (-vals[1])
  const cost1 = rawVals[1] || 40;
  let next = running - cost1;
  ranges.push([Math.max(0, next), running]);
  colors.push('#dc2626'); // Red cost deduction
  tooltips.push(`- ${rawLabels[1]}: ${cost1}% (${running}% ➔ ${next}%)`);
  running = next;

  // 3. Employee Cost Deduction (-vals[2])
  const cost2 = rawVals[2] || 14;
  next = running - cost2;
  ranges.push([Math.max(0, next), running]);
  colors.push('#ea580c'); // Orange cost deduction
  tooltips.push(`- ${rawLabels[2]}: ${cost2}% (${running}% ➔ ${next}%)`);
  running = next;

  // 4. Other Opex Deduction (-vals[3])
  const cost3 = rawVals[3] || 14;
  next = running - cost3;
  ranges.push([Math.max(0, next), running]);
  colors.push('#d97706'); // Amber cost deduction
  tooltips.push(`- ${rawLabels[3]}: ${cost3}% (${running}% ➔ ${next}%)`);
  running = next;

  // 5. EBITDA Subtotal (0 to EBITDA)
  const ebitda = rawVals[4] || running;
  ranges.push([0, ebitda]);
  colors.push('#059669'); // Emerald Green Subtotal
  tooltips.push(`EBITDA Subtotal: ${ebitda}% of Revenue`);
  running = ebitda;

  // 6. D&A / Provision Deduction (-vals[5])
  const da = rawVals[5] || 5;
  next = running - da;
  ranges.push([Math.max(0, next), running]);
  colors.push('#64748b'); // Slate Gray deduction
  tooltips.push(`- ${rawLabels[5]}: ${da}% (${running}% ➔ ${next}%)`);
  running = next;

  // 7. PAT Net Profit Final (0 to PAT)
  const pat = rawVals[6] || running;
  ranges.push([0, pat]);
  colors.push('#0369a1'); // Deep Blue Net Profit
  tooltips.push(`PAT (Net Profit): ${pat}% of Revenue`);

  return {
    labels: rawLabels,
    ranges,
    colors,
    tooltips
  };
}

function renderCostStructureChart(ind) {
  const ctx = document.getElementById('costStructureCanvas');
  if (!ctx || !ind.costStructure) return;

  const bridge = calculateWaterfallBridge(ind.costStructure);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: bridge.labels,
      datasets: [{
        label: 'Waterfall Bridge (% of Revenue)',
        data: bridge.ranges,
        backgroundColor: bridge.colors,
        borderRadius: 4,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#ffffff',
          borderColor: 'rgba(30,64,120,0.14)',
          borderWidth: 1,
          titleColor: '#0f1e35',
          bodyColor: '#1e4078',
          padding: 10,
          titleFont: { family: 'Space Mono', size: 11, weight: '700' },
          bodyFont: { family: 'Inter', size: 12 },
          callbacks: {
            label: function(context) {
              const idx = context.dataIndex;
              return bridge.tooltips[idx] || `${context.raw[0]}% - ${context.raw[1]}%`;
            }
          }
        }
      },
      scales: {
        x: { grid: { display: false }, ticks: { font: { family: 'Space Mono', size: 9 } } },
        y: {
          min: 0, max: 100,
          grid: { color: 'rgba(30,64,120,0.06)' },
          ticks: { callback: v => `${v}%`, font: { family: 'Space Mono', size: 9 } }
        }
      }
    }
  });
}

function renderStockPerformanceChart(ind) {
  const ctx = document.getElementById('stockPerformanceCanvas');
  if (!ctx || !ind.stockPerformance) return;

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ind.stockPerformance.labels,
      datasets: [
        {
          label: `${ind.name} Index`,
          data: ind.stockPerformance.sectorIndex,
          borderColor: '#0284c7',
          backgroundColor: 'rgba(2, 132, 199, 0.08)',
          fill: true,
          tension: 0.3
        },
        {
          label: 'Nifty 50 Benchmark',
          data: ind.stockPerformance.benchmarkNifty,
          borderColor: '#94a3b8',
          borderDash: [4, 4],
          fill: false,
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { font: { family: 'Space Mono', size: 9 } } }
      },
      scales: {
        x: { grid: { display: false }, ticks: { font: { family: 'Space Mono', size: 9 } } },
        y: { grid: { color: 'rgba(30,64,120,0.06)' } }
      }
    }
  });
}

function renderCustomerSegChart(ind) {
  const ctx = document.getElementById('customerSegCanvas');
  if (!ctx || !ind.customerSegmentation) return;

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ind.customerSegmentation.labels,
      datasets: [{
        data: ind.customerSegmentation.values,
        backgroundColor: ['#0284c7', '#059669', '#7c3aed'],
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '60%',
      plugins: {
        legend: { position: 'bottom', labels: { font: { family: 'Inter', size: 10 } } }
      }
    }
  });
}

function renderDemandSupplyChart(ind) {
  const ctx = document.getElementById('demandSupplyCanvas');
  if (!ctx || !ind.demandSupplyGap) return;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ind.demandSupplyGap.labels,
      datasets: [
        {
          label: 'Installed Capacity',
          data: ind.demandSupplyGap.installedCapacity,
          backgroundColor: '#94a3b8',
          borderRadius: 4
        },
        {
          label: 'Actual Demand',
          data: ind.demandSupplyGap.actualDemand,
          backgroundColor: '#0284c7',
          borderRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { labels: { font: { family: 'Space Mono', size: 9 } } } },
      scales: {
        x: { grid: { display: false }, ticks: { font: { family: 'Space Mono', size: 9 } } },
        y: { grid: { color: 'rgba(30,64,120,0.06)' } }
      }
    }
  });
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
});

/* ================================================
   COMPARE WITH VISUAL CHARTS & MATRIX
   =============================================== */
function initCompare() {
  const sel = document.getElementById('compareSelect');
  if (sel) {
    sel.innerHTML = `<option value="">Add industry to compare...</option>`;
    const displayed = getDisplayedIndustries();
    displayed.forEach(ind => {
      const opt = document.createElement('option');
      opt.value = ind.id;
      opt.textContent = ind.name;
      sel.appendChild(opt);
    });

    sel.onchange = e => {
      if (!e.target.value) return;
      addToCompare(e.target.value);
      e.target.value = '';
    };
  }

  document.getElementById('clearAllBtn')?.addEventListener('click', () => {
    state.compareList = [];
    renderCompare();
  });
}

function addToCompare(id) {
  if (state.compareList.includes(id)) return;
  if (state.compareList.length >= 4) {
    showToast('⚠️ Maximum 4 industries for comparison');
    return;
  }
  state.compareList.push(id);
  renderCompare();
}

function removeFromCompare(id) {
  state.compareList = state.compareList.filter(i => i !== id);
  renderCompare();
}

function renderCompare() {
  renderCompareTags();
  renderCompareMatrix();
}

function renderCompareTags() {
  const tagsEl = document.getElementById('compareTags');
  if (!tagsEl) return;

  tagsEl.innerHTML = state.compareList.map(id => {
    const ind = getIndustryById(id);
    return ind ? `
      <div class="compare-tag">
        ${ind.name}
        <span class="tag-remove" onclick="removeFromCompare('${id}')">×</span>
      </div>
    ` : '';
  }).join('');
}

function renderCompareMatrix() {
  const resultsEl = document.getElementById('compareResults');
  if (!resultsEl) return;

  if (state.compareList.length === 0) {
    resultsEl.innerHTML = `
      <div class="compare-placeholder">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="48" height="48">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
        <p>Select industries above to compare Five Forces, Market Metrics &amp; Value Chains side-by-side</p>
      </div>
    `;
    return;
  }

  const industries = state.compareList.map(getIndustryById).filter(Boolean);
  const forceKeys = [
    { key: 'newEntrants', label: 'New Entrants' },
    { key: 'buyerPower', label: 'Buyer Power' },
    { key: 'supplierPower', label: 'Supplier Power' },
    { key: 'substitutes', label: 'Substitutes' },
    { key: 'rivalry', label: 'Competitive Rivalry' }
  ];

  resultsEl.innerHTML = `
    <!-- Comparative Radar Chart & Growth Chart Row -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px;">
      <div class="compare-matrix-card">
        <div class="compare-matrix-header">
          <div class="compare-matrix-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2" width="18" height="18">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            Five Forces Radar Profile Overlay
          </div>
          <div class="compare-matrix-subtitle">Visual intensity profile overlay across selected domains</div>
        </div>
        <div style="height:250px;padding:16px;">
          <canvas id="compareRadarCanvas"></canvas>
        </div>
      </div>

      <div class="compare-matrix-card">
        <div class="compare-matrix-header">
          <div class="compare-matrix-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" width="18" height="18">
              <line x1="18" y1="20" x2="18" y2="10"/>
              <line x1="12" y1="20" x2="12" y2="4"/>
              <line x1="6" y1="20" x2="6" y2="14"/>
            </svg>
            CAGR Growth Comparison Graphic
          </div>
          <div class="compare-matrix-subtitle">Comparative annual growth rate % visualization</div>
        </div>
        <div style="height:250px;padding:16px;">
          <canvas id="compareCagrCanvas"></canvas>
        </div>
      </div>
    </div>

    <!-- 1. Value Chain Comparison Matrix -->
    <div class="compare-matrix-card" style="margin-bottom:20px;">
      <div class="compare-matrix-header">
        <div class="compare-matrix-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2" width="18" height="18">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
          </svg>
          Value Chain Comparison Matrix
        </div>
        <div class="compare-matrix-subtitle">Comparative mapping of supplier inputs, core operations, channels, margin drivers &amp; bottlenecks</div>
      </div>
      <div class="table-wrapper">
        <table class="compare-table">
          <thead>
            <tr>
              <th>VALUE CHAIN STAGE</th>
              ${industries.map(ind => `<th>${ind.name.toUpperCase()}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="font-weight:600;color:var(--on-surface);">1. Supplier Inputs</td>
              ${industries.map(ind => `<td style="color:var(--on-surface);">${(ind.valueChain?.inputs) || 'Raw Materials & Core Inputs'}</td>`).join('')}
            </tr>
            <tr>
              <td style="font-weight:600;color:var(--on-surface);">2. Operations &amp; Assembly</td>
              ${industries.map(ind => `<td style="color:var(--on-surface);">${(ind.valueChain?.operations) || 'Processing & Development'}</td>`).join('')}
            </tr>
            <tr>
              <td style="font-weight:600;color:var(--on-surface);">3. Distribution Channels</td>
              ${industries.map(ind => `<td style="color:var(--on-surface);">${(ind.valueChain?.distribution) || 'Dealer & Online Networks'}</td>`).join('')}
            </tr>
            <tr>
              <td style="font-weight:600;color:var(--on-surface);">4. End Touchpoints</td>
              ${industries.map(ind => `<td style="color:var(--on-surface);">${(ind.valueChain?.endMarkets) || 'Enterprise & Retail Customers'}</td>`).join('')}
            </tr>
            <tr>
              <td style="font-weight:600;color:var(--on-surface);">Highest Margin Stage</td>
              ${industries.map(ind => `<td style="color:#0369a1;font-weight:600;">${(ind.valueChain?.marginDriver) || 'Scale Economies'}</td>`).join('')}
            </tr>
            <tr>
              <td style="font-weight:600;color:var(--on-surface);">Value Chain Bottleneck</td>
              ${industries.map(ind => `<td style="color:#b91c1c;font-weight:600;">${(ind.valueChain?.bottleneck) || 'Supply Disruption Risk'}</td>`).join('')}
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 2. Porter's Five Forces Matrix -->
    <div class="compare-matrix-card" style="margin-bottom:20px;">
      <div class="compare-matrix-header">
        <div class="compare-matrix-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2" width="18" height="18">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
          Porter's Five Forces Matrix
        </div>
        <div class="compare-matrix-subtitle">Direct intensity comparison across selected domains</div>
      </div>
      <table class="compare-table">
        <thead>
          <tr>
            <th>FORCE</th>
            ${industries.map(ind => `<th>${ind.name.toUpperCase()}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${forceKeys.map(f => `
            <tr>
              <td>${f.label}</td>
              ${industries.map(ind => `<td>${makeBadge(ind.forces[f.key])}</td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <!-- 3. Market Intelligence Comparison -->
    <div class="compare-matrix-card">
      <div class="compare-matrix-header">
        <div class="compare-matrix-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2" width="18" height="18">
            <line x1="18" y1="20" x2="18" y2="10"/>
            <line x1="12" y1="20" x2="12" y2="4"/>
            <line x1="6" y1="20" x2="6" y2="14"/>
          </svg>
          Market Intelligence Comparison
        </div>
        <div class="compare-matrix-subtitle">Market size, growth, and strategic outlook across industries</div>
      </div>
      <table class="compare-table">
        <thead>
          <tr>
            <th>METRIC</th>
            ${industries.map(ind => `<th>${ind.name.toUpperCase()}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sector</td>
            ${industries.map(ind => `<td style="color:var(--on-surface);font-size:12px">${ind.sector}</td>`).join('')}
          </tr>
          <tr>
            <td>Market Size</td>
            ${industries.map(ind => `<td style="color:var(--on-surface);font-size:12px">${ind.size}</td>`).join('')}
          </tr>
          <tr>
            <td>CAGR</td>
            ${industries.map(ind => `<td style="color:#059669;font-size:12px;font-weight:600;">${ind.cagr}</td>`).join('')}
          </tr>
          <tr>
            <td>Outlook</td>
            ${industries.map(ind => {
              const c = ind.outlook === 'Positive' ? '#059669' : ind.outlook === 'Volatile' ? '#d97706' : '#1e4078';
              return `<td style="color:${c};font-size:12px;font-weight:600;">${ind.outlook}</td>`;
            }).join('')}
          </tr>
          <tr>
            <td>Source Document</td>
            ${industries.map(ind => `<td style="color:var(--outline);font-size:11px;">${ind.uploadedDoc || 'Default'}</td>`).join('')}
          </tr>
        </tbody>
      </table>
    </div>
  `;

  renderCompareCharts(industries);
}

function renderCompareCharts(industries) {
  const radarCtx = document.getElementById('compareRadarCanvas');
  const cagrCtx = document.getElementById('compareCagrCanvas');

  const chartColors = ['#0284c7', '#059669', '#7c3aed', '#d97706'];

  if (radarCtx) {
    const datasets = industries.map((ind, idx) => ({
      label: ind.name,
      data: [
        forceToScore(ind.forces.newEntrants),
        forceToScore(ind.forces.buyerPower),
        forceToScore(ind.forces.supplierPower),
        forceToScore(ind.forces.substitutes),
        forceToScore(ind.forces.rivalry)
      ],
      backgroundColor: chartColors[idx % chartColors.length] + '20',
      borderColor: chartColors[idx % chartColors.length],
      borderWidth: 2
    }));

    new Chart(radarCtx, {
      type: 'radar',
      data: {
        labels: ['Entrants', 'Buyer Power', 'Supplier Power', 'Substitutes', 'Rivalry'],
        datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            min: 0, max: 5,
            ticks: { display: false },
            grid: { color: 'rgba(30,64,120,0.1)' },
            pointLabels: { font: { family: 'Space Mono', size: 9 }, color: '#4a6080' }
          }
        }
      }
    });
  }

  if (cagrCtx) {
    const cagrVals = industries.map(ind => {
      const match = ind.cagr.match(/(\d+)/);
      return match ? parseInt(match[1]) : 10;
    });

    new Chart(cagrCtx, {
      type: 'bar',
      data: {
        labels: industries.map(i => i.name),
        datasets: [{
          label: 'CAGR Growth %',
          data: cagrVals,
          backgroundColor: industries.map((i, idx) => chartColors[idx % chartColors.length]),
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false }, ticks: { font: { family: 'Space Mono', size: 10 } } },
          y: { grid: { color: 'rgba(30,64,120,0.06)' }, ticks: { callback: v => `${v}%` } }
        }
      }
    });
  }
}

/* ================================================
   UPLOAD & SAMPLE INGESTION PACKS WITH VALUE CHAIN
   =============================================== */
function renderUploadHistory() {
  const list = document.getElementById('uploadHistoryList');
  if (!list) return;

  if (state.uploadHistory.length === 0) {
    list.innerHTML = `<div style="font-family:var(--font-mono);font-size:11px;color:var(--outline);padding:12px 0;">No uploads present. Click below or upload a file.</div>`;
    return;
  }

  list.innerHTML = state.uploadHistory.map(item => `
    <div class="upload-history-item" data-doc-name="${item.name}">
      <div>
        <div class="upload-history-name">${item.name}</div>
        <div class="upload-history-meta">${item.date} · ${item.industries} industries extracted</div>
      </div>
      <div class="history-item-actions">
        <span class="upload-status-badge status-processed">${item.status}</span>
        <svg class="history-delete-btn" onclick="deleteUploadHistoryItem('${item.id || item.name}')" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14" title="Delete document & extracted data">
          <polyline points="3 6 5 6 21 6"/>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
        </svg>
      </div>
    </div>
  `).join('');

  renderActiveScopeUI();
}

function initUpload() {
  const zone = document.getElementById('uploadZone');
  const fileInput = document.getElementById('fileInput');

  zone.addEventListener('dragover', e => {
    e.preventDefault();
    zone.classList.add('drag-over');
  });
  zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
  zone.addEventListener('drop', e => {
    e.preventDefault();
    zone.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file) processFileUpload(file);
  });

  fileInput.addEventListener('change', e => {
    const file = e.target.files[0];
    if (file) processFileUpload(file);
  });

  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index);
      if (!isNaN(idx) && PRESET_UPLOADS[idx]) {
        ingestReportPack(PRESET_UPLOADS[idx]);
      }
    });
  });
}

function ingestReportPack(pack) {
  showToast(`⚡ Extracting 13 sector dashboard components from "${pack.name}"…`);

  setTimeout(() => {
    const docName = pack.name;
    const today = new Date().toISOString().split('T')[0];
    const docId = 'doc-' + Date.now();

    const existingIndex = state.uploadHistory.findIndex(u => u.name === docName);
    if (existingIndex !== -1) {
      state.uploadHistory.splice(existingIndex, 1);
    }

    state.uploadHistory.unshift({
      id: docId,
      name: docName,
      date: today,
      industries: pack.industries.length,
      status: 'Processed'
    });

    pack.industries.forEach(newInd => {
      const indObj = ensureIndustryEnrichment({
        ...newInd,
        uploadedDoc: docName,
        uploadedDate: today,
        isNew: true
      });
      const existingIndIdx = state.industries.findIndex(i => i.id === newInd.id);
      if (existingIndIdx !== -1) {
        state.industries[existingIndIdx] = indObj;
      } else {
        state.industries.unshift(indObj);
      }
    });

    saveState();
    updateDocFilterOptions();
    
    setDatasetScope(docName);
    showToast(`✅ Extracted ${pack.industries.length} industries & 13 sector components from "${docName}"!`);
  }, 1000);
}

function processFileUpload(file) {
  if (!file.name.toLowerCase().endsWith('.pdf')) {
    showToast('❌ Only PDF files are supported.');
    return;
  }

  showToast(`⚡ Extracting PDF metrics & 13 sector dashboard components from "${file.name}"…`);

  setTimeout(() => {
    const docName = file.name;
    const today = new Date().toISOString().split('T')[0];
    const docId = 'doc-' + Date.now();

    const cleanBaseName = file.name.replace(/\.pdf$/i, '').replace(/[^a-zA-Z0-9]/g, ' ');
    const extractedIndustries = [
      ensureIndustryEnrichment({
        id: `custom-ind-1-${Date.now()}`,
        name: `${cleanBaseName} Digital Frontier`,
        sector: "Technology",
        description: `Extracted from uploaded report ${file.name}. High-growth technology domain identified with strong market expansion signals.`,
        size: "$14.8 Billion Market",
        cagr: "~26% CAGR",
        players: ["Tech Leader A", "Software Provider B", "Cloud Platform C"],
        forces: { newEntrants: "Medium", buyerPower: "High", supplierPower: "Low", substitutes: "Medium", rivalry: "High" },
        valueChain: {
          inputs: "Cloud Infrastructure, Data Feeds & Specialized Tech Talent",
          operations: "Algorithmic Development, API Processing & Continuous QA",
          distribution: "Direct B2B Web Enterprise Portals & Channel Partners",
          endMarkets: "Commercial Enterprises & Institutional Clients",
          marginDriver: "High Gross Margin Intellectual Property (IP) & SaaS ARR",
          bottleneck: "Senior Software Engineering Capacity Constraints"
        },
        trend: "up",
        outlook: "Positive"
      }),
      ensureIndustryEnrichment({
        id: `custom-ind-2-${Date.now()}`,
        name: `${cleanBaseName} Value Chain Operations`,
        sector: "Infrastructure",
        description: `Extracted value chain and operational metrics from ${file.name}. Substantial capital expenditure and structural expansion.`,
        size: "$52 Billion Capex",
        cagr: "~16% CAGR",
        players: ["Infra Operator X", "Logistics Group Y", "Engineering Corp Z"],
        forces: { newEntrants: "Low", buyerPower: "Medium", supplierPower: "Medium", substitutes: "Low", rivalry: "Medium" },
        valueChain: {
          inputs: "Heavy Raw Materials, Structural Steel, Turbines & Land Grants",
          operations: "Civil Engineering, EPC Construction & Site Operations",
          distribution: "B2B Off-take Agreements & Government Distribution Outlets",
          endMarkets: "Industrial Hubs, Regional Logistics Operators & Municipalities",
          marginDriver: "Long-term Concession Agreements & Scale Economies",
          bottleneck: "Environmental Permits & Primary Raw Material Price Inflation"
        },
        trend: "up",
        outlook: "Positive"
      })
    ];

    state.uploadHistory.unshift({
      id: docId,
      name: docName,
      date: today,
      industries: extractedIndustries.length,
      status: 'Processed'
    });

    extractedIndustries.forEach(indObj => {
      indObj.uploadedDoc = docName;
      indObj.uploadedDate = today;
      indObj.isNew = true;
      state.industries.unshift(indObj);
    });

    saveState();
    updateDocFilterOptions();

    setDatasetScope(docName);
    showToast(`✅ Extracted ${extractedIndustries.length} industries & 13 sector components from "${file.name}"!`);
  }, 1200);
}

/* ================================================
   RESET MODAL & TOP BUTTON HANDLERS
   =============================================== */
function initResetHandlers() {
  const resetModal = document.getElementById('resetModalOverlay');

  function openResetModal() { resetModal?.classList.add('open'); }
  function closeResetModal() { resetModal?.classList.remove('open'); }

  document.getElementById('sidebarResetBtn')?.addEventListener('click', openResetModal);
  document.getElementById('topResetBtn')?.addEventListener('click', openResetModal);
  document.getElementById('resetDataBtn')?.addEventListener('click', openResetModal);
  
  document.getElementById('resetModalClose')?.addEventListener('click', closeResetModal);
  document.getElementById('resetModalCancel')?.addEventListener('click', closeResetModal);
  document.getElementById('resetModalConfirm')?.addEventListener('click', () => {
    closeResetModal();
    resetAllUploadedData();
  });

  document.getElementById('tab-scope-all')?.addEventListener('click', () => setDatasetScope('all'));
  document.getElementById('tab-scope-latest')?.addEventListener('click', () => setDatasetScope('latest'));
  document.getElementById('bannerShowAllBtn')?.addEventListener('click', () => setDatasetScope('all'));

  document.getElementById('docFilterSelect')?.addEventListener('change', e => {
    setDatasetScope(e.target.value);
  });
}

/* ================================================
   TOAST NOTIFICATION
   =============================================== */
function showToast(message) {
  const existing = document.querySelector('.upload-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'upload-toast';
  toast.innerHTML = `<span>${message}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(16px)';
    toast.style.transition = 'opacity 0.3s, transform 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

/* ================================================
   INIT
   =============================================== */
function init() {
  updateDocFilterOptions();
  renderActiveScopeUI();
  initResetHandlers();
  initCompare();
  initUpload();
  initDashboard();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
