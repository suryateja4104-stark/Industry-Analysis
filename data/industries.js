// AutoIntel Pro — Industry Data
// Porter's Five Forces scores: 1 = Low, 2 = Medium, 3 = High, 4 = Very High

const INDUSTRIES = [
  {
    id: 1,
    name: "Information Technology",
    sector: "TECHNOLOGY",
    icon: "computer",
    marketSize: "$245B Industry",
    cagr: "~13% CAGR",
    cagrValue: 13,
    description: "India's IT sector is the backbone of the digital economy, serving global enterprises with software, BPO, and cloud services. Bengaluru, Hyderabad, and Pune form the tech triangle driving global innovation.",
    majorPlayers: ["TCS", "Infosys", "Wipro", "HCL Technologies", "Tech Mahindra"],
    growthDrivers: [
      "Global digital transformation wave",
      "Cloud & AI adoption surge",
      "Strong STEM talent pipeline",
      "Government's Digital India push",
      "GCC (Global Capability Centres) expansion"
    ],
    challenges: [
      "High attrition and talent war",
      "Rising wage inflation",
      "Automation displacing mid-tier roles",
      "Geopolitical dependencies (US market)",
      "Visa restrictions on H-1B workforce"
    ],
    porterForces: {
      newEntrants: 2,      // MEDIUM
      buyerPower: 3,       // HIGH
      supplierPower: 3,    // HIGH (talent)
      substitutes: 2,      // MEDIUM
      rivalry: 4           // VERY HIGH
    },
    porterLabels: {
      newEntrants: "MEDIUM",
      buyerPower: "HIGH",
      supplierPower: "HIGH",
      substitutes: "MEDIUM",
      rivalry: "VERY HIGH"
    },
    budgetHighlights: "PLI scheme for Electronics Manufacturing (₹76,000 Cr). National Data Governance Framework. ₹10,000 Cr India AI Mission. Semiconductor Fab incentives.",
    marketContext: "India's IT-BPM revenue touched $245 billion in FY2024, with exports accounting for $194 billion. The sector employs 5.4 million professionals directly. GCCs now number 1,600+, employing 1.9 million.",
    color: "#6366F1"
  },
  {
    id: 2,
    name: "Banking & Financial Services",
    sector: "FINANCE",
    icon: "account_balance",
    marketSize: "$1.3T Assets",
    cagr: "~10% CAGR",
    cagrValue: 10,
    description: "India's banking sector is undergoing a fintech revolution led by UPI. With 800M+ internet users and a robust regulatory framework, India has become a global benchmark for digital payments and financial inclusion.",
    majorPlayers: ["HDFC Bank", "SBI", "ICICI Bank", "Kotak Mahindra", "Axis Bank"],
    growthDrivers: [
      "UPI's exponential transaction volumes",
      "Jan Dhan financial inclusion success",
      "MSME credit digitalisation",
      "Neo-bank and fintech disruption",
      "Rising insurance & wealth penetration"
    ],
    challenges: [
      "NPA (Non-Performing Assets) management",
      "Cybersecurity and fraud risks",
      "Regulatory compliance burden (RBI)",
      "PSU bank privatisation uncertainty",
      "Crypto & DeFi regulatory ambiguity"
    ],
    porterForces: {
      newEntrants: 1,
      buyerPower: 2,
      supplierPower: 1,
      substitutes: 3,
      rivalry: 3
    },
    porterLabels: {
      newEntrants: "LOW",
      buyerPower: "MEDIUM",
      supplierPower: "LOW",
      substitutes: "HIGH",
      rivalry: "HIGH"
    },
    budgetHighlights: "GIFT City IFSC expansion (₹1 lakh Cr pipeline). Recapitalisation of PSU banks. Digital Rupee (CBDC) pilot. ONDC expansion for financial services.",
    marketContext: "India processed 131 billion UPI transactions in FY2024 worth ₹199 lakh crore. Credit-to-GDP ratio stands at 57%, leaving ample headroom for growth. India ranks 2nd globally in fintech adoption.",
    color: "#0EA5E9"
  },
  {
    id: 3,
    name: "Automobile",
    sector: "AUTOMOTIVE",
    icon: "directions_car",
    marketSize: "3rd Largest Market",
    cagr: "~5% CAGR",
    cagrValue: 5,
    description: "Automobile is a key sector in the Indian economy. India is the 3rd largest auto market globally, hosting global OEMs alongside homegrown champions. The EV transition is reshaping supply chains and consumer behaviour.",
    majorPlayers: ["Maruti Suzuki", "Hyundai India", "Tata Motors", "Mahindra & Mahindra", "Honda Cars"],
    growthDrivers: [
      "Rising middle-class income",
      "Rural market penetration",
      "SUV & premium segment growth",
      "Export diversification",
      "EV adoption & government incentives (FAME II)"
    ],
    challenges: [
      "Semiconductor chip constraints",
      "Transition costs to EV",
      "Rising input material costs",
      "Regulatory compliance (CAFE norms)",
      "Charging infrastructure gaps"
    ],
    porterForces: {
      newEntrants: 1,
      buyerPower: 2,
      supplierPower: 2,
      substitutes: 2,
      rivalry: 3
    },
    porterLabels: {
      newEntrants: "LOW",
      buyerPower: "MEDIUM",
      supplierPower: "MEDIUM",
      substitutes: "MEDIUM",
      rivalry: "HIGH"
    },
    budgetHighlights: "PLI scheme for automobile and auto components (₹25,938 Cr outlay). Scrappage policy push. FAME III for EVs. Production-linked incentives for EV batteries.",
    marketContext: "India's domestic auto sales crossed 4.9 million passenger vehicles in FY2024 — a historic high. EV sales grew 90% YoY. India exported $21.2 billion in auto components in FY2024.",
    color: "#F59E0B"
  },
  {
    id: 4,
    name: "Pharmaceuticals",
    sector: "HEALTHCARE",
    icon: "medication",
    marketSize: "3rd by Volume",
    cagr: "~11% CAGR",
    cagrValue: 11,
    description: "India is the pharmacy of the world — supplying 20% of global generic medicines. With 3,000+ drug manufacturers and a thriving biotech ecosystem, India's pharma sector is a critical pillar of global health security.",
    majorPlayers: ["Sun Pharma", "Dr. Reddy's", "Cipla", "Divi's Labs", "Lupin"],
    growthDrivers: [
      "Generic drug export dominance",
      "Biologic & biosimilar pipeline",
      "Ayushman Bharat healthcare scheme",
      "API (Active Pharma Ingredient) self-reliance",
      "Medical tourism growth"
    ],
    challenges: [
      "US FDA compliance & import alerts",
      "Price control under NPPA",
      "API import dependency on China",
      "R&D investment lag vs global peers",
      "Talent shortage in advanced biotech"
    ],
    porterForces: {
      newEntrants: 2,
      buyerPower: 2,
      supplierPower: 3,
      substitutes: 1,
      rivalry: 3
    },
    porterLabels: {
      newEntrants: "MEDIUM",
      buyerPower: "MEDIUM",
      supplierPower: "HIGH",
      substitutes: "LOW",
      rivalry: "HIGH"
    },
    budgetHighlights: "PLI for Pharmaceuticals (₹15,000 Cr). Bulk Drug Parks scheme. National Medical Devices Policy. ₹64,180 Cr for health sector allocation. API self-reliance mission.",
    marketContext: "Indian pharma market valued at $50 billion in FY2024, growing to $130 billion by 2030. India supplies medicines to 200+ countries. Generic drug exports grew 9% YoY to $27.8 billion.",
    color: "#10B981"
  },
  {
    id: 5,
    name: "Renewable Energy",
    sector: "ENERGY",
    icon: "solar_power",
    marketSize: "200GW+ Capacity",
    cagr: "~20% CAGR",
    cagrValue: 20,
    description: "India is racing towards its 500 GW renewable energy target by 2030. With solar costs dropping 90% in a decade, India is emerging as a clean energy superpower, attracting $30B+ in annual green investments.",
    majorPlayers: ["Adani Green", "ReNew Power", "Tata Power", "NTPC Green", "Greenko Group"],
    growthDrivers: [
      "Government's 500 GW RE target by 2030",
      "Solar panel cost plummeting",
      "Green hydrogen mission",
      "Carbon credit market opening",
      "Corporate PPAs (Power Purchase Agreements)"
    ],
    challenges: [
      "Land acquisition bottlenecks",
      "Grid integration & storage costs",
      "Financing challenges for smaller IPPs",
      "Imported solar cell dependency",
      "Intermittency & baseload gap"
    ],
    porterForces: {
      newEntrants: 2,
      buyerPower: 2,
      supplierPower: 3,
      substitutes: 1,
      rivalry: 3
    },
    porterLabels: {
      newEntrants: "MEDIUM",
      buyerPower: "MEDIUM",
      supplierPower: "HIGH",
      substitutes: "LOW",
      rivalry: "HIGH"
    },
    budgetHighlights: "Green Hydrogen Mission (₹19,744 Cr). PM Surya Ghar Yojana (rooftop solar). VGF for offshore wind. ALMM (Approved List for solar modules). Battery storage BESS incentives.",
    marketContext: "India added 24 GW of renewable capacity in FY2024. Solar capacity crossed 85 GW. FDI in renewable energy crossed $14.5 billion. India ranks 4th globally in renewable energy capacity.",
    color: "#22C55E"
  },
  {
    id: 6,
    name: "Real Estate",
    sector: "REALTY",
    icon: "apartment",
    marketSize: "$477B Market",
    cagr: "~9% CAGR",
    cagrValue: 9,
    description: "India's real estate sector is on a structural upcycle — driven by urbanisation, premium housing demand, and commercial real estate boom driven by GCC expansions and retail resurgence.",
    majorPlayers: ["DLF", "Godrej Properties", "Prestige Estates", "Macrotech (Lodha)", "Brigade Group"],
    growthDrivers: [
      "Urbanisation (600M urban pop by 2036)",
      "Premium & luxury housing boom",
      "GCC-led commercial RE demand",
      "REITs enabling retail investment",
      "Data centre & warehousing growth"
    ],
    challenges: [
      "Affordability gap in metro cities",
      "RERA compliance costs",
      "High stamp duty & transaction friction",
      "Unsold residential inventory in Tier-1",
      "Rising construction material costs"
    ],
    porterForces: {
      newEntrants: 2,
      buyerPower: 2,
      supplierPower: 2,
      substitutes: 1,
      rivalry: 3
    },
    porterLabels: {
      newEntrants: "MEDIUM",
      buyerPower: "MEDIUM",
      supplierPower: "MEDIUM",
      substitutes: "LOW",
      rivalry: "HIGH"
    },
    budgetHighlights: "PMAY (Pradhan Mantri Awas Yojana) — 2 crore urban homes. Infrastructure investment (₹11.1 lakh Cr capex). Smart Cities 2.0 mission. REIT tax exemptions enhanced.",
    marketContext: "India's real estate market is projected to reach $1 trillion by 2030. Residential sales hit a 12-year high in FY2024 with 340,000 units sold. Office space absorption crossed 63 million sqft.",
    color: "#8B5CF6"
  },
  {
    id: 7,
    name: "FMCG",
    sector: "CONSUMER GOODS",
    icon: "shopping_cart",
    marketSize: "$110B Market",
    cagr: "~8% CAGR",
    cagrValue: 8,
    description: "India's FMCG sector is the 4th largest in the world. With 1.4B consumers and rising aspirations, FMCG companies are innovating in premiumisation, health & wellness, and D2C digital channels.",
    majorPlayers: ["HUL", "ITC", "Nestlé India", "Dabur", "Britannia"],
    growthDrivers: [
      "Rural consumption recovery",
      "Premiumisation trend",
      "Health & wellness category boom",
      "D2C & quick commerce channels",
      "Rising female workforce participation"
    ],
    challenges: [
      "Commodity cost volatility",
      "Rural distribution complexity",
      "D2C disruption from new-age brands",
      "GST compliance for multi-SKU portfolios",
      "Packaging regulation (BIS, plastic norms)"
    ],
    porterForces: {
      newEntrants: 2,
      buyerPower: 3,
      supplierPower: 2,
      substitutes: 3,
      rivalry: 4
    },
    porterLabels: {
      newEntrants: "MEDIUM",
      buyerPower: "HIGH",
      supplierPower: "MEDIUM",
      substitutes: "HIGH",
      rivalry: "VERY HIGH"
    },
    budgetHighlights: "GST rationalisation benefiting FMCG companies. PM POSHAN mid-day meals expanding addressable market. Cold chain infrastructure (₹10,000 Cr). Agri-infra fund benefiting rural distribution.",
    marketContext: "India's FMCG market reached $110 billion in FY2024. Rural FMCG grew at 6% vs urban 5%. E-commerce contributes 10%+ to FMCG revenue. Quick commerce (Blinkit, Zepto) reshaping last-mile delivery.",
    color: "#EC4899"
  },
  {
    id: 8,
    name: "Telecommunications",
    sector: "TELECOM",
    icon: "cell_tower",
    marketSize: "$52B Revenue",
    cagr: "~12% CAGR",
    cagrValue: 12,
    description: "India has the world's 2nd largest telecom subscriber base (1.2B). With 5G rollout accelerating and Jio's disruptive pricing reshaping the market, India's digital infrastructure is scaling at unprecedented speed.",
    majorPlayers: ["Jio (Reliance)", "Airtel", "Vi (Vodafone Idea)", "BSNL", "Starlink (incoming)"],
    growthDrivers: [
      "5G rollout across 700+ cities",
      "Enterprise IoT connectivity boom",
      "Satellite broadband disruption",
      "Deep rural connectivity (BharatNet)",
      "OTT & digital content explosion"
    ],
    challenges: [
      "Spectrum cost & capex burden",
      "Vi (Vodafone Idea) viability risk",
      "ARPU (Average Revenue Per User) still low",
      "Fibre-to-home last-mile economics",
      "Regulatory spectrum pricing policy"
    ],
    porterForces: {
      newEntrants: 1,
      buyerPower: 3,
      supplierPower: 2,
      substitutes: 2,
      rivalry: 3
    },
    porterLabels: {
      newEntrants: "LOW",
      buyerPower: "HIGH",
      supplierPower: "MEDIUM",
      substitutes: "MEDIUM",
      rivalry: "HIGH"
    },
    budgetHighlights: "BharatNet Phase III (₹1.39 lakh Cr). 5G spectrum auction proceeds deployed. Telecom PLI (₹12,195 Cr). SATCOM spectrum policy rationalisation. DoT digital infra expansion.",
    marketContext: "India has 850M+ internet users, 2nd globally. 5G connections crossed 100M in 12 months — fastest ramp globally. India's data consumption per user is 25GB/month, among world's highest.",
    color: "#06B6D4"
  },
  {
    id: 9,
    name: "Steel & Metals",
    sector: "INDUSTRIALS",
    icon: "factory",
    marketSize: "2nd Steel Producer",
    cagr: "~7% CAGR",
    cagrValue: 7,
    description: "India is the world's 2nd largest steel producer with 140 MT+ capacity. With massive infrastructure spending and PLI for specialty steel, the sector is poised for structural demand growth driven by construction and manufacturing.",
    majorPlayers: ["Tata Steel", "JSW Steel", "SAIL", "Jindal Steel", "NMDC"],
    growthDrivers: [
      "Infrastructure & capex supercycle",
      "Railways & metro expansion",
      "Defence & shipbuilding demand",
      "Export opportunity to EV supply chains",
      "Specialty steel PLI scheme"
    ],
    challenges: [
      "Chinese steel dumping threat",
      "Coal & coking coal import dependency",
      "Carbon emission regulations (CBAM)",
      "Iron ore quality & royalty issues",
      "Cyclical demand-supply imbalances"
    ],
    porterForces: {
      newEntrants: 1,
      buyerPower: 2,
      supplierPower: 3,
      substitutes: 2,
      rivalry: 3
    },
    porterLabels: {
      newEntrants: "LOW",
      buyerPower: "MEDIUM",
      supplierPower: "HIGH",
      substitutes: "MEDIUM",
      rivalry: "HIGH"
    },
    budgetHighlights: "PLI for Specialty Steel (₹6,322 Cr). National Steel Policy targeting 300 MT capacity by 2030. ₹11.1 lakh Cr infra capex driving steel demand. Safeguard duties on Chinese steel imports.",
    marketContext: "India produced 144 MT of steel in FY2024, up 13% YoY. Steel consumption grew 14% to 136 MT. India aims to be a 300 MT producer by 2030. Green steel / hydrogen-DRI R&D underway.",
    color: "#64748B"
  },
  {
    id: 10,
    name: "Agriculture & Food Processing",
    sector: "AGRI & FOOD",
    icon: "agriculture",
    marketSize: "$1.3T Sector",
    cagr: "~6% CAGR",
    cagrValue: 6,
    description: "India is the world's largest producer of milk, pulses, and spices, and 2nd largest in wheat & rice. Agri-tech, food processing, and cold chain modernisation are unlocking the sector's $1 trillion opportunity.",
    majorPlayers: ["ITC Agri", "Adani Wilmar", "Patanjali Foods", "Marico", "Heritage Foods"],
    growthDrivers: [
      "Food processing FDI surge",
      "Agri-tech & precision farming adoption",
      "PM Kisan direct benefit success",
      "Organic & branded food premiumisation",
      "Millet (Shree Anna) export push"
    ],
    challenges: [
      "Monsoon & climate risk dependency",
      "Fragmented landholding structure",
      "Cold chain & post-harvest losses (~30%)",
      "MSP vs market price policy conflict",
      "Rural credit access constraints"
    ],
    porterForces: {
      newEntrants: 3,
      buyerPower: 3,
      supplierPower: 2,
      substitutes: 2,
      rivalry: 3
    },
    porterLabels: {
      newEntrants: "HIGH",
      buyerPower: "HIGH",
      supplierPower: "MEDIUM",
      substitutes: "MEDIUM",
      rivalry: "HIGH"
    },
    budgetHighlights: "PM Kisan (₹20,000 Cr annually). Agri Infra Fund (₹1 lakh Cr). PLI for Food Processing (₹10,900 Cr). Millet Mission — Shree Anna export promotion. APMC reforms push.",
    marketContext: "India's agriculture sector contributes 18% to GDP, employing 47% of workforce. Food processing exports reached $53 billion in FY2024. Agri-tech startups raised $1.4 billion in VC funding.",
    color: "#84CC16"
  }
];

// Export for both ESM and script tag usage
if (typeof module !== 'undefined') {
  module.exports = { INDUSTRIES };
} else {
  window.INDUSTRIES = INDUSTRIES;
}
