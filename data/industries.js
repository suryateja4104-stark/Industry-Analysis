// AutoIntel Pro — Industry Data
// Porter's Five Forces scores: 1 = Low, 2 = Medium, 3 = High, 4 = Very High
// Repopulated from IndustryDecks 2026-27.json & Individual Industry Decks (22 industries)

const INDUSTRIES = [
  {
    "id": 1,
    "slug": "food-delivery",
    "name": "Food Delivery",
    "sector": "CONSUMER & DIGITAL",
    "icon": "fastfood",
    "marketSize": "US$ 259.3B Global / \u20b920.2k Cr Q1",
    "cagr": "12% CAGR",
    "cagrValue": 12,
    "description": "The food delivery industry in India is a dominant duopoly (Zomato >60%, Swiggy ~40%) handling over 95% of restaurant deliveries. In Q1 FY26, consolidated revenue surged 182% YoY to \u20b920,211 Cr with PAT jumping to \u20b992 Cr. The sector is rapidly expanding into quick commerce with dark store networks operating across 130+ cities, shifting strategic focus toward profitability, contribution margins, and 10-minute grocery fulfillment.",
    "sourceFile": "Individual Industry Decks/Food Delivery_industry.pdf",
    "sourceDoc": "Food Delivery_industry.pdf",
    "majorPlayers": [
      "Zomato",
      "Swiggy",
      "Blinkit",
      "Instamart",
      "Zepto"
    ],
    "growthDrivers": [
      "Quick commerce hypergrowth with dark stores expanding catalog to electronics, beauty, and apparel",
      "Increasing smartphone penetration and digital payments across Tier-2/3 Indian cities",
      "Changing urban consumer lifestyles favoring convenience and speed over scheduled grocery runs",
      "B2B restaurant supply integration (Hyperpure) creating captive procurement margins",
      "Fleet electrification lowering per-kilometer delivery costs by 25-30%"
    ],
    "challenges": [
      "Gig worker labor welfare legislation, minimum wage mandates, and unionization pressures",
      "Heavy capital burn in expanding dark store density into suburban and non-metro micro-markets",
      "Restaurant association pushback on high commission rates and customer data withholding",
      "Safety and traffic scrutiny around aggressive 10-minute delivery time targets",
      "Food packaging and raw ingredient cost inflation impacting average order values"
    ],
    "porterForces": {
      "newEntrants": 1,
      "buyerPower": 3,
      "supplierPower": 2,
      "substitutes": 3,
      "rivalry": 3
    },
    "porterLabels": {
      "newEntrants": "LOW",
      "buyerPower": "HIGH",
      "supplierPower": "MEDIUM",
      "substitutes": "HIGH",
      "rivalry": "HIGH"
    },
    "budgetHighlights": "Social Security Code implementation for gig workers, GST rate stability for delivery transactions, and PM E-DRIVE subsidies driving EV rider transition.",
    "marketContext": "In Q1 FY26, consolidated industry revenue jumped 182% YoY to \u20b920,211 Cr with PAT reaching \u20b992 Cr. Food delivery core revenue grew 22.7% YoY while quick commerce GOV surged 39.8% YoY with 1,171 active dark stores.",
    "color": "#e11d48"
  },
  {
    "id": 2,
    "slug": "healthcare-hospitals",
    "name": "Healthcare & Hospitals",
    "sector": "HEALTHCARE",
    "icon": "local_hospital",
    "marketSize": "US$ 135 Bn (Hospitals FY26)",
    "cagr": "10.6% CAGR",
    "cagrValue": 10.6,
    "description": "India's broad healthcare sector reached US$ 372 billion in 2023 with hospitals accounting for ~US$ 135 billion in FY26, projected to touch US$ 202 billion by 2030 (10.6% CAGR). Organised private hospitals represent a \u20b978,500 Cr revenue pool with CRISIL forecasting a 5th consecutive year of double-digit growth (14-15%) in FY27.",
    "sourceFile": "Individual Industry Decks/Healthcare_industry.pdf",
    "sourceDoc": "Healthcare_industry.pdf",
    "majorPlayers": [
      "Apollo Hospitals",
      "Max Healthcare",
      "Fortis Healthcare",
      "Narayana Health",
      "Medanta"
    ],
    "growthDrivers": [
      "Aging demographics and rising incidence of lifestyle diseases (cardiac, cancer, diabetes)",
      "Post-pandemic surge in retail and corporate health insurance penetration (growing 18% YoY)",
      "Booming Medical Value Travel attracting 1.4M+ international patients seeking low-cost complex surgeries",
      "Adoption of robotic-assisted surgery and precision oncology driving ARPOB higher",
      "Shift toward asset-light brownfield expansion and O&M hospital management contracts"
    ],
    "challenges": [
      "High nursing and paramedic attrition to overseas markets (UK, Middle East, Germany)",
      "Price caps on essential drugs, coronary stents, and orthopedic implants by NPPA",
      "Disputes with TPAs over claim settlement delays and deduction percentages",
      "Rising land acquisition and construction capex in Tier-1 cities",
      "Doctor compensation inflation eating into hospital operating margins"
    ],
    "porterForces": {
      "newEntrants": 1,
      "buyerPower": 2,
      "supplierPower": 3,
      "substitutes": 1,
      "rivalry": 2
    },
    "porterLabels": {
      "newEntrants": "LOW",
      "buyerPower": "MEDIUM",
      "supplierPower": "HIGH",
      "substitutes": "LOW",
      "rivalry": "MEDIUM"
    },
    "budgetHighlights": "Union Budget allocation of \u20b990,000+ Cr for health and family welfare, universal PM-JAY health insurance for all senior citizens aged 70+, and customs duty exemptions on 3 critical cancer drugs.",
    "marketContext": "India has 1.3 hospital beds per 1,000 population versus the WHO guideline of 3.0. Major chains are expanding bed capacity by 25-30% over FY25-FY28 through brownfield additions, maintaining 65-72% occupancy and \u20b955,000-75,000 metro ARPOB.",
    "color": "#0284c7"
  },
  {
    "id": 3,
    "slug": "hotels-hospitality",
    "name": "Hotels & Hospitality",
    "sector": "CONSUMER & HOSPITALITY",
    "icon": "hotel",
    "marketSize": "US$ 1.37 Tn Global ($45B India)",
    "cagr": "6.8% CAGR (Global) / 13% CAGR (India)",
    "cagrValue": 13,
    "description": "The global hotels market stands at US$ 1.37 Trillion in 2026 heading to US$ 1.89 Trillion by 2031. In India, the hospitality sector is experiencing an unprecedented structural upcycle with record Average Room Rates (ARR) and Revenue Per Available Room (RevPAR) driven by corporate travel, luxury domestic leisure, weddings, and international MICE conferences.",
    "sourceFile": "Individual Industry Decks/Hotels & Hospitality_industry.pdf",
    "sourceDoc": "Hotels & Hospitality_industry.pdf",
    "majorPlayers": [
      "IHCL (Taj)",
      "EIH (Oberoi)",
      "ITC Hotels",
      "Lemon Tree",
      "Chalet Hotels"
    ],
    "growthDrivers": [
      "Boom in spiritual tourism circuits (Ayodhya, Varanasi, Ujjain) registering 300%+ footfall growth",
      "Corporate MICE demand propelled by world-class centers (Yashobhoomi in Delhi, Jio World in Mumbai)",
      "High-spending Indian big-fat-wedding industry generating 30-40% of luxury hotel revenues",
      "Shift toward asset-light management contracts increasing return on capital employed (ROCE >20%)",
      "Expansion of regional air connectivity under UDAN bringing high-end resorts to Tier-2/3 cities"
    ],
    "challenges": [
      "High operating leverage during seasonal monsoon or unexpected travel slowdowns",
      "Shortage of trained chefs and frontline hospitality personnel leading to 35% attrition",
      "OTA commissions of 15-20% on independent hotel bookings eroding gross margins",
      "High local taxes on luxury room tariffs and liquor licenses across various states",
      "Rising cost of land acquisition in key metropolitan business districts"
    ],
    "porterForces": {
      "newEntrants": 1,
      "buyerPower": 2,
      "supplierPower": 2,
      "substitutes": 2,
      "rivalry": 3
    },
    "porterLabels": {
      "newEntrants": "LOW",
      "buyerPower": "MEDIUM",
      "supplierPower": "MEDIUM",
      "substitutes": "MEDIUM",
      "rivalry": "HIGH"
    },
    "budgetHighlights": "Capital expenditure outlays for 50 selected tourist destinations, viability gap funding for convention centers, and infrastructure status for projects above \u20b950 Cr.",
    "marketContext": "Supply growth in India remains muted at ~5-6% CAGR while demand is compounding at 10-12%, enabling hotels to sustain 68-74% occupancies alongside double-digit rate hikes across metro and leisure destinations.",
    "color": "#d97706"
  },
  {
    "id": 4,
    "slug": "it-industry",
    "name": "Information Technology (IT)",
    "sector": "TECHNOLOGY",
    "icon": "computer",
    "marketSize": "US$ 315 Bn (FY2026)",
    "cagr": "6.1% CAGR (Long-term 11%)",
    "cagrValue": 6.1,
    "description": "India's IT industry is the cornerstone of its modern export economy, reaching US$ 315 billion in FY26 (+6.1% YoY) with IT exports touching US$ 246 billion. The sector is on track to cross US$ 500 billion by 2030, bolstered by 1,600+ Global Capability Centres (GCCs), enterprise cloud migrations, and rapid deployment of Generative AI engineering solutions.",
    "sourceFile": "Individual Industry Decks/IT_industry.pdf",
    "sourceDoc": "IT_industry.pdf",
    "majorPlayers": [
      "TCS",
      "Infosys",
      "HCLTech",
      "Wipro",
      "Tech Mahindra"
    ],
    "growthDrivers": [
      "Enterprise GenAI adoption driving massive data infrastructure and model fine-tuning contracts",
      "Accelerating cloud modernization as Fortune 500 firms exit on-premise data centers",
      "Surge in Japanese and European FDI seeking engineering talent diversification (Japanese FDI up 4x)",
      "Growth of ER&D (Engineering Research & Development) for automotive, aerospace, and medtech",
      "Cost optimization mega-deals as global firms consolidate disparate IT vendors"
    ],
    "challenges": [
      "High wage inflation and talent retraining costs for emerging Generative AI frameworks",
      "Discretionary tech spend slowdowns in US and European banking and retail sectors",
      "Geopolitical visa restrictions and minimum wage mandates on H-1B and L-1 workforces",
      "Margin compression on traditional application support and legacy maintenance contracts",
      "Rapid growth of captive GCCs competing directly with IT vendors for premier STEM talent"
    ],
    "porterForces": {
      "newEntrants": 1,
      "buyerPower": 3,
      "supplierPower": 3,
      "substitutes": 1,
      "rivalry": 3
    },
    "porterLabels": {
      "newEntrants": "LOW",
      "buyerPower": "HIGH",
      "supplierPower": "HIGH",
      "substitutes": "LOW",
      "rivalry": "HIGH"
    },
    "budgetHighlights": "\u20b910,372 Cr IndiaAI Mission allocation, PLI Scheme 2.0 for IT hardware (\u20b917,000 Cr), tax exemptions for R&D expenditures, and expanded semiconductor fab incentives.",
    "marketContext": "India's tech sector employs 5.4 million professionals directly. Global Capability Centres (GCCs) have expanded to over 1,600 units employing 1.9 million specialists and contributing over $60 billion in high-value engineering exports.",
    "color": "#6366f1"
  },
  {
    "id": 5,
    "slug": "pharmaceuticals",
    "name": "Pharmaceuticals",
    "sector": "HEALTHCARE",
    "icon": "medication",
    "marketSize": "US$ 60.3 Bn (FY2026)",
    "cagr": "10.0% CAGR",
    "cagrValue": 10.0,
    "description": "The Indian pharmaceutical market stood at US$ 57.6 billion in 2025 and is estimated at US$ 60.3 billion in FY26, compounding at 10% CAGR toward US$ 130 billion by 2030. Known as the pharmacy of the world, India supplies 20% of global generics by volume, backed by 500+ API manufacturers and the highest count of USFDA-approved plants outside the United States.",
    "sourceFile": "Individual Industry Decks/Pharmaceuticals_industry.pdf",
    "sourceDoc": "Pharmaceuticals_industry.pdf",
    "majorPlayers": [
      "Sun Pharma",
      "Dr. Reddy's",
      "Cipla",
      "Torrent Pharma",
      "Zydus"
    ],
    "growthDrivers": [
      "Patent cliff: $200+ billion in biologic and small molecule drugs losing exclusivity globally by 2030",
      "Rising domestic chronic disease burden driving steady 10-12% branded prescription demand",
      "Diversification into complex biosimilars, peptide therapies, and inhalation products",
      "Jan Aushadhi store expansion democratizing generic medication across tier-2/3 India",
      "Backward integration into domestic APIs supported by government bulk drug park subsidies"
    ],
    "challenges": [
      "Heightened USFDA inspection scrutiny resulting in Form 483 observations and import alerts",
      "Price erosion in standard oral solid generics in the US market averaging 6-8% annually",
      "Domestic price controls administered through the National List of Essential Medicines (NLEM)",
      "Supply chain dependency on critical chemical intermediates imported from East Asia",
      "Rising R&D costs and clinical trial litigation timelines for paragraph IV patent challenges"
    ],
    "porterForces": {
      "newEntrants": 1,
      "buyerPower": 3,
      "supplierPower": 2,
      "substitutes": 1,
      "rivalry": 3
    },
    "porterLabels": {
      "newEntrants": "LOW",
      "buyerPower": "HIGH",
      "supplierPower": "MEDIUM",
      "substitutes": "LOW",
      "rivalry": "HIGH"
    },
    "budgetHighlights": "Biopharma SHAKTI initiative ($1.08B), customs exemptions on life-saving cancer drugs, expansion of PLI for bulk drugs, and dedicated R&D innovation funds for biosimilar development.",
    "marketContext": "Pharmaceutical exports reached an all-time record of US$ 30.5 billion in FY25. With chronic therapies (cardiovascular, diabetes, oncology) expanding to 40% of the domestic market, Indian firms are shifting from commoditized pills to high-margin biosimilars and complex injectables.",
    "color": "#059669"
  },
  {
    "id": 6,
    "slug": "telecom",
    "name": "Telecommunications",
    "sector": "TELECOMMUNICATIONS",
    "icon": "cell_tower",
    "marketSize": "\u20b91.02 Lakh Cr (Quarterly Dec-25)",
    "cagr": "8.1% AGR YoY",
    "cagrValue": 8.1,
    "description": "India's telecom sector is one of the world's largest digital lifelines, generating \u20b91.02 lakh crore in quarterly gross revenue (Q3 Dec-2025) with Adjusted Gross Revenue (AGR) rising 8.1% YoY to \u20b984,270 Cr. The market serves 1,306 million telephone subscribers and 1,029 million broadband connections at 91.7% teledensity, with private operators handling 92.2% of market share.",
    "sourceFile": "Individual Industry Decks/Telecom_industry.pdf",
    "sourceDoc": "Telecom_industry.pdf",
    "majorPlayers": [
      "Reliance Jio",
      "Bharti Airtel",
      "Vodafone Idea",
      "Indus Towers"
    ],
    "growthDrivers": [
      "Tariff repair compounding ARPU from \u20b9182 to \u20b9195 and expected to reach \u20b9230-250 by late 2026",
      "Explosion of 5G Fixed Wireless Access (FWA) replacing traditional home wired broadband",
      "Exponential data growth driven by short-form video streaming, gaming, and cloud applications",
      "Enterprise connectivity including private 5G networks for automotive and smart factories",
      "Consolidation into a healthy private duopoly commanding over 92% of the total revenue pool"
    ],
    "challenges": [
      "Massive capital expenditure burden for nationwide 5G densification and small-cell deployment",
      "Financial stress and debt overhang on Vodafone Idea threatening three-player market viability",
      "High Right-of-Way (RoW) fees and permit delays imposed by local municipal corporations",
      "Low monetization of 5G speed tiers as consumer plans remain largely unlimited data bundles",
      "Over-the-top (OTT) voice platforms cannibalizing traditional voice minutes and roaming fees"
    ],
    "porterForces": {
      "newEntrants": 1,
      "buyerPower": 2,
      "supplierPower": 3,
      "substitutes": 1,
      "rivalry": 3
    },
    "porterLabels": {
      "newEntrants": "LOW",
      "buyerPower": "MEDIUM",
      "supplierPower": "HIGH",
      "substitutes": "LOW",
      "rivalry": "HIGH"
    },
    "budgetHighlights": "Continuity in telecom infrastructure outlays, Universal Service Obligation Fund (USOF) fiberization for 250,000 gram panchayats, and waiver of bank guarantees for future spectrum auctions.",
    "marketContext": "India is the world's most data-intensive mobile market with average monthly consumption reaching 25.7 GB per user across the sector and 42.3 GB on Reliance Jio, at a global-low realization of \u20b97.87 per GB. A further 16-20% tariff increase in 2026 is driving sustainable ROCE recovery.",
    "color": "#7c3aed"
  },
  {
    "id": 7,
    "slug": "artificial-intelligence",
    "name": "Artificial Intelligence (AI)",
    "sector": "TECHNOLOGY",
    "icon": "smart_toy",
    "marketSize": "US$ 244 Bn (Global 2025)",
    "cagr": "27.7% CAGR",
    "cagrValue": 27.7,
    "description": "The global Artificial Intelligence market was valued at US$ 244 billion in 2025 and is projected to expand to US$ 827 billion by 2030, compounding at 27.7% CAGR. Global VC investment into AI topped US$ 202 billion in 2025 with total AI infrastructure capex exceeding US$ 325 billion, driven by hyperscalers buildouts and enterprise GenAI agent deployment.",
    "sourceFile": "Individual Industry Decks/AI_industry.pdf",
    "sourceDoc": "AI_industry.pdf",
    "majorPlayers": [
      "NVIDIA",
      "Microsoft",
      "Alphabet",
      "Amazon",
      "OpenAI"
    ],
    "growthDrivers": [
      "Massive hyperscaler capex buildout exceeding $325 billion in datacenter compute infrastructure in 2025",
      "Rapid adoption of multi-agent autonomous workflows automating complex knowledge work",
      "Sovereign AI initiatives across nations funding national compute clusters and local language LLMs",
      "Monetization of AI code assistants (GitHub Copilot, Cursor) reporting over 80% developer retention",
      "Edge AI deployment on smartphones and PC processors enabling offline private inference"
    ],
    "challenges": [
      "Binding physical constraints in electrical grid power, nuclear SMR timelines, and datacenter cooling",
      "High token inference costs challenging consumer application profitability at scale",
      "Hallucination and safety alignment liabilities preventing full autonomous deployment in regulated fields",
      "Intense talent compensation wars for elite research scientists and GPU systems engineers",
      "Risk of intellectual property infringement claims and regulatory data export restrictions"
    ],
    "porterForces": {
      "newEntrants": 2,
      "buyerPower": 2,
      "supplierPower": 4,
      "substitutes": 1,
      "rivalry": 4
    },
    "porterLabels": {
      "newEntrants": "MEDIUM",
      "buyerPower": "MEDIUM",
      "supplierPower": "VERY HIGH",
      "substitutes": "LOW",
      "rivalry": "VERY HIGH"
    },
    "budgetHighlights": "\u20b910,372 Cr IndiaAI Mission allocation, funding for 3 Centers of Excellence for AI in premier institutes, and tax incentives for green megawatt datacenters.",
    "marketContext": "Enterprise Generative AI is actively reducing corporate software development and customer service costs by 30-50%. Despite multiple compression from historical 40x P/E peaks to ~22x forward multiples for chip leaders, earnings growth remains at record highs.",
    "color": "#8b5cf6"
  },
  {
    "id": 8,
    "slug": "aviation",
    "name": "Airlines & Aviation",
    "sector": "TRANSPORTATION & LOGISTICS",
    "icon": "flight",
    "marketSize": "US$ 14.78 Bn (FY2025)",
    "cagr": "12.0% CAGR",
    "cagrValue": 12.0,
    "description": "India's aviation market is valued at ~US$ 14.78 billion in 2025 and is projected to reach US$ 26\u201329 billion by FY2030-31 (12% CAGR). India is the world's 3rd largest domestic aviation market behind the US and China, with annual domestic passenger volume reaching 164 million travelers and commercial fleets expanding from 700+ to 1,500+ aircraft by 2030.",
    "sourceFile": "Individual Industry Decks/Airlines_industry.pdf",
    "sourceDoc": "Airlines_industry.pdf",
    "majorPlayers": [
      "IndiGo",
      "Air India Group",
      "Akasa Air",
      "SpiceJet"
    ],
    "growthDrivers": [
      "Rapid middle-class income expansion with only ~4-5% of Indians having flown commercially",
      "Commissioning of dual-airport infrastructure in Mumbai and Delhi unlocking peak departure slots",
      "Expansion of direct international point-to-point flights bypassing Middle Eastern hub airports",
      "GIFT City IFSC leasing framework saving airlines 10-15% on offshore aircraft financing",
      "High growth in dedicated belly-hold and express domestic air cargo"
    ],
    "challenges": [
      "Unhedged foreign currency exposure as aircraft lease rentals and spare parts are priced in US Dollars",
      "Aviation Turbine Fuel (ATF) price volatility representing 40-45% of total airline operating costs",
      "Supply chain delays from Boeing and Pratt & Whitney grounding ~15% of narrowbody fleets",
      "Pilot and certified maintenance engineer shortages creating operational bottlenecks",
      "Intense price wars during non-holiday quarters eroding passenger yields"
    ],
    "porterForces": {
      "newEntrants": 1,
      "buyerPower": 3,
      "supplierPower": 3,
      "substitutes": 2,
      "rivalry": 3
    },
    "porterLabels": {
      "newEntrants": "LOW",
      "buyerPower": "HIGH",
      "supplierPower": "HIGH",
      "substitutes": "MEDIUM",
      "rivalry": "HIGH"
    },
    "budgetHighlights": "Capital allocation for airport modernization under UDAN 5.0, reduction of VAT on Aviation Turbine Fuel (ATF) in 28 states, and tax holidays for aircraft leasing companies operating in GIFT City IFSC.",
    "marketContext": "IndiGo and Air India form a virtual duopoly controlling 91%+ of domestic passenger traffic. Indian carriers hold a record order book of over 1,500 new aircraft with Airbus and Boeing scheduled for delivery through 2035.",
    "color": "#0284c7"
  },
  {
    "id": 9,
    "slug": "asset-management",
    "name": "Asset Management",
    "sector": "FINANCIAL SERVICES",
    "icon": "account_balance_wallet",
    "marketSize": "\u20b973.73 Lakh Cr AUM (FY26)",
    "cagr": "15.0% CAGR",
    "cagrValue": 15.0,
    "description": "The Indian Asset Management (Mutual Fund) industry has witnessed an unprecedented financialization wave, with Assets Under Management (AUM) expanding from \u20b924.48 lakh crore in FY19 to \u20b973.73 lakh crore in FY26 (15% CAGR). The sector is propelled by monthly SIP inflows exceeding \u20b923,000 crore, 180+ million investor folios, and an equity AUM proportion exceeding 56%.",
    "sourceFile": "Individual Industry Decks/Asset Management_industry.pdf",
    "sourceDoc": "Asset Management_industry.pdf",
    "majorPlayers": [
      "SBI MF",
      "ICICI Pru AMC",
      "HDFC AMC",
      "Nippon India",
      "Kotak MF"
    ],
    "growthDrivers": [
      "Structural financialization of domestic household savings shifting from real estate and gold into equities",
      "Systematic Investment Plan (SIP) culture creating sticky, counter-cyclical retail monthly inflows of \u20b923,000+ Cr",
      "Surge in Tier-2 and Tier-3 town penetration supported by Aadhaar e-KYC and digital onboarding",
      "Expansion of passive low-cost ETFs and thematic sector funds",
      "Strong operating leverage where asset management operating margins expand to 60-70% as AUM scales"
    ],
    "challenges": [
      "Cyclical equity market corrections triggering temporary retail redemption waves",
      "Regulatory compression of Total Expense Ratios (TER) by SEBI to protect retail investor returns",
      "Rising marketing and commission share payouts to national wealth distributors and fintech aggregators",
      "Passive indexing and zero-cost ETFs compressing active management alpha generation",
      "Compliance liabilities under revised Prevention of Money Laundering Act (PMLA) audit norms"
    ],
    "porterForces": {
      "newEntrants": 2,
      "buyerPower": 3,
      "supplierPower": 1,
      "substitutes": 3,
      "rivalry": 3
    },
    "porterLabels": {
      "newEntrants": "MEDIUM",
      "buyerPower": "HIGH",
      "supplierPower": "LOW",
      "substitutes": "HIGH",
      "rivalry": "HIGH"
    },
    "budgetHighlights": "Continuity in long-term capital gains tax structures, incentives for retail pension and NPS mutual fund allocations, and streamlined KYC frameworks for non-resident Indian investors.",
    "marketContext": "India's mutual fund AUM to GDP ratio stands at ~19%, leaving significant headroom compared to the global average of 75% and the US at 130%. Distribution is evenly split between direct digital channels (45.4%) and mutual fund distributors (45.0%).",
    "color": "#1e3a8a"
  },
  {
    "id": 10,
    "slug": "automobile",
    "name": "Automobile",
    "sector": "AUTOMOTIVE",
    "icon": "directions_car",
    "marketSize": "US$ 213.74 Bn (FY2027E)",
    "cagr": "5.5% CAGR (Volume) / 11% (Value)",
    "cagrValue": 5.5,
    "description": "India is the 3rd largest automobile market globally, generating US$ 213.74 billion in projected revenue by FY2027E with total domestic sales of 25.6 million vehicles in FY24 rising toward 28+ million in FY26. The sector is undergoing a structural premiumisation wave (SUVs account for >52% of passenger vehicle sales) alongside an accelerating electric vehicle transition.",
    "sourceFile": "Individual Industry Decks/Automobile_industry.pdf",
    "sourceDoc": "Automobile_industry.pdf",
    "majorPlayers": [
      "Maruti Suzuki",
      "Hyundai India",
      "Tata Motors",
      "Mahindra & Mahindra"
    ],
    "growthDrivers": [
      "Strong premiumisation trend with compact and mid-size SUVs accounting for >52% of total passenger vehicle sales",
      "Rapid adoption of electric vehicles in the 2-wheeler segment (surpassing 2 million units annually)",
      "Expansion of rural incomes and rural road networks driving entry-level motorcycle and tractor demand",
      "Integration of advanced driver-assistance systems (ADAS Level 2), panoramic sunroofs, and connected car tech",
      "Export competitiveness with India serving as a global export base for Hyundai, Maruti Suzuki, and Bajaj Auto"
    ],
    "challenges": [
      "High goods and services tax (GST of 28% plus compensation cess up to 22% on large SUVs)",
      "Raw material price volatility in steel, aluminum, copper, and precious metals for catalytic converters",
      "Supply chain risks around imported automotive semiconductor chips and power electronics",
      "High interest rates on retail auto loans dampening entry-level two-wheeler and hatchback sales",
      "Urban traffic congestion and parking constraints slowing new car registrations in metros"
    ],
    "porterForces": {
      "newEntrants": 1,
      "buyerPower": 2,
      "supplierPower": 2,
      "substitutes": 1,
      "rivalry": 3
    },
    "porterLabels": {
      "newEntrants": "LOW",
      "buyerPower": "MEDIUM",
      "supplierPower": "MEDIUM",
      "substitutes": "LOW",
      "rivalry": "HIGH"
    },
    "budgetHighlights": "PLI Scheme for Automobile and Auto Components (\u20b925,938 Cr), incentives for advanced chemistry battery cells (\u20b918,100 Cr), and scrap page policy incentives for vehicles over 15 years old.",
    "marketContext": "Passenger vehicle sales in India reached an all-time record of 4.2 million units in FY24, led by sport utility vehicles (SUVs). Two-wheeler sales are rebounding toward 19 million units, while commercial vehicles benefit from national highway infrastructure investments.",
    "color": "#0f766e"
  },
  {
    "id": 11,
    "slug": "banking",
    "name": "Banking",
    "sector": "FINANCIAL SERVICES",
    "icon": "account_balance",
    "marketSize": "US$ 3.36 Tn (Assets FY26)",
    "cagr": "14.0% Credit Growth",
    "cagrValue": 14.0,
    "description": "India's banking system oversees assets exceeding US$ 3.36 Trillion (\u20b9206 lakh crore), split between public sector banks (US$ 2,006 Bn) and private banks (US$ 1,355 Bn). The sector is experiencing its strongest health in over a decade with Gross NPAs dropping to 2.6-2.8%, sustained double-digit credit expansion (13-15% YoY), and digital payment leadership via UPI processing 20.4 billion monthly transactions worth \u20b926.84 lakh crore.",
    "sourceFile": "Individual Industry Decks/Banking_industry.pdf",
    "sourceDoc": "Banking_industry.pdf",
    "majorPlayers": [
      "HDFC Bank",
      "SBI",
      "ICICI Bank",
      "Kotak Mahindra",
      "Axis Bank"
    ],
    "growthDrivers": [
      "Strong capex cycle in manufacturing, infrastructure, and real estate powering 13-15% credit growth",
      "Digital underwriting leveraging Account Aggregator and GST data accelerating MSME credit",
      "Low mortgage penetration (under 12% of GDP) offering multi-decade runway for retail home loans",
      "High return on assets (RoA of 1.2-1.4%) driven by stable Net Interest Margins and benign credit costs",
      "Expansion of co-lending partnerships between banks and agile fintech NBFCs"
    ],
    "challenges": [
      "Structural deposit lag where credit growth (14-15%) outpaces deposit accretion (10-11%)",
      "Tight liquidity conditions forcing banks to hike deposit rates, squeezing Net Interest Margins",
      "Cybersecurity threats, digital payment fraud, and operational IT downtime risks",
      "Unsecured personal loan and credit card default creep leading to higher RBI risk weights",
      "Heightened regulatory compliance oversight and governance audits by the Reserve Bank of India"
    ],
    "porterForces": {
      "newEntrants": 1,
      "buyerPower": 2,
      "supplierPower": 1,
      "substitutes": 3,
      "rivalry": 3
    },
    "porterLabels": {
      "newEntrants": "LOW",
      "buyerPower": "MEDIUM",
      "supplierPower": "LOW",
      "substitutes": "HIGH",
      "rivalry": "HIGH"
    },
    "budgetHighlights": "Recapitalization buffers, ongoing priority sector lending targets, sovereign green bond issuance frameworks, and expansion of GIFT City offshore banking units.",
    "marketContext": "India's banking system has staged a historic asset quality turnaround with Gross NPAs dropping to a multi-decade low of 2.6-2.8% and Net NPAs below 0.6%. In February 2026 alone, UPI processed 20.39 billion transactions worth \u20b926.84 lakh crore across 694 live banks.",
    "color": "#1e40af"
  },
  {
    "id": 12,
    "slug": "cement",
    "name": "Cement & Building Materials",
    "sector": "MANUFACTURING & MATERIALS",
    "icon": "foundation",
    "marketSize": "491.4 MT (Production FY26)",
    "cagr": "8.6% YoY",
    "cagrValue": 8.6,
    "description": "India is the 2nd largest cement producer globally after China, accounting for over 8% of global installed capacity. Cement production reached 491.4 MT in FY26 (+8.6% YoY) against total installed capacity of 700 MTPA. The industry is adding 150-160 MT capacity between FY25 and FY28, underpinned by massive central infrastructure outlays and housing schemes.",
    "sourceFile": "Individual Industry Decks/Cement_industry.pdf",
    "sourceDoc": "Cement_industry.pdf",
    "majorPlayers": [
      "UltraTech Cement",
      "Ambuja & ACC",
      "Shree Cement",
      "Dalmia Bharat"
    ],
    "growthDrivers": [
      "Massive central capex on national highways, dedicated freight corridors, metro rail, and new airports",
      "Pradhan Mantri Awas Yojana (PMAY Urban 2.0 & Gramin) driving robust bagged cement demand",
      "Expanding Waste Heat Recovery Systems (WHRS) and solar power lowering power and fuel costs by 20%",
      "Increased adoption of blended cements (PPC/PSC) reducing expensive clinker factor to 62-65%",
      "Strong rural housing construction backed by consecutive normal agricultural monsoons"
    ],
    "challenges": [
      "Fuel price volatility in imported petcoke and Indonesian thermal coal impacting power costs",
      "High freight and logistics expenses accounting for 30-33% of total cement production and delivery costs",
      "Local price wars in regional clusters (particularly South and East India) during seasonal monsoon dips",
      "Stricter environmental emission norms requiring expensive particulate matter filter retrofits",
      "Acquisition valuation inflation for brownfield grinding and clinker units"
    ],
    "porterForces": {
      "newEntrants": 1,
      "buyerPower": 2,
      "supplierPower": 3,
      "substitutes": 1,
      "rivalry": 3
    },
    "porterLabels": {
      "newEntrants": "LOW",
      "buyerPower": "MEDIUM",
      "supplierPower": "HIGH",
      "substitutes": "LOW",
      "rivalry": "HIGH"
    },
    "budgetHighlights": "\u20b912.2 lakh crore capital infrastructure allocation in the FY27 Union Budget, \u20b93.09 lakh crore for highways (+8%), and \u20b954,917 crore for PMAY-Gramin rural housing converting directly into bagged cement demand.",
    "marketContext": "The Indian cement industry is consolidating into an oligopoly, with top 5 players controlling ~60% of total installed capacity. With EBITDA per tonne holding at \u20b9900-950, leaders are investing \u20b91.2 lakh crore to expand total national capacity past 850 MTPA by 2030.",
    "color": "#64748b"
  },
  {
    "id": 13,
    "slug": "consumer-durables",
    "name": "Consumer Durables",
    "sector": "CONSUMER",
    "icon": "tv",
    "marketSize": "\u20b91.5 Lakh Cr+ Sector",
    "cagr": "12.0% CAGR",
    "cagrValue": 12.0,
    "description": "India is projected to become the world's 4th largest consumer durables market by FY27, with the total sector revenue crossing \u20b91.5 lakh crore. The room air-conditioner (RAC) segment alone was valued at nearly US$ 5 billion in FY25 and is projected to reach \u20b950,000 crore by FY29 (12% CAGR), accelerated by prolonged summer heatwaves, rising middle-class disposable incomes, and the September 2025 GST rationalization from 28% to 18%.",
    "sourceFile": "Individual Industry Decks/Consumer Durables_industry.pdf",
    "sourceDoc": "Consumer Durables_industry.pdf",
    "majorPlayers": [
      "Havells",
      "Voltas",
      "Blue Star",
      "Whirlpool",
      "Dixon Tech"
    ],
    "growthDrivers": [
      "Low household AC penetration (8%) providing multi-decade growth runway as middle-class incomes rise",
      "September 2025 GST rate reduction from 28% to 18% unlocking pent-up replacement and first-time demand",
      "Prolonged summer heatwaves extending peak appliance selling seasons into secondary monsoonal cycles",
      "Ubiquitous Zero-Cost EMI consumer financing penetration (over 65% of durables bought on consumer credit)",
      "Localization of rotary compressors and heat exchangers supported by \u20b96,238 Cr PLI white goods incentives"
    ],
    "challenges": [
      "Severe seasonality where 50-60% of annual room air conditioner sales occur in just 3 summer months",
      "Global commodity price volatility in copper, aluminum, crude-linked polymers, and steel",
      "Shortage of skilled certified HVAC technicians during peak installation seasons causing customer churn",
      "Margin erosion from aggressive festive discounting across online e-commerce channels",
      "Inventory carryover risks if unseasonal summer rains or mild weather compress seasonal sales"
    ],
    "porterForces": {
      "newEntrants": 2,
      "buyerPower": 3,
      "supplierPower": 2,
      "substitutes": 1,
      "rivalry": 4
    },
    "porterLabels": {
      "newEntrants": "MEDIUM",
      "buyerPower": "HIGH",
      "supplierPower": "MEDIUM",
      "substitutes": "LOW",
      "rivalry": "VERY HIGH"
    },
    "budgetHighlights": "PLI Scheme for White Goods expansion, customs duty reductions on critical appliance copper and plastic feedstocks, and consumer financing liquidity support via Priority Sector Lending.",
    "marketContext": "India's room AC household penetration is exceptionally low at ~8% compared to 60%+ in China and 90% in Japan. Record heatwaves and the September 2025 GST reduction from 28% to 18% drove over 35% YoY volume growth across Tier-2 and Tier-3 towns.",
    "color": "#ea580c"
  },
  {
    "id": 14,
    "slug": "diagnostics",
    "name": "Diagnostics",
    "sector": "HEALTHCARE",
    "icon": "biotech",
    "marketSize": "US$ 11.0 Bn (CY2025)",
    "cagr": "11.2% CAGR",
    "cagrValue": 11.2,
    "description": "The Indian diagnostic labs market was valued at US$ 11.0 billion in CY2025 and is projected to expand to US$ 28.5 billion by 2034, compounding at an 11.2% CAGR. Although diagnostic services represent less than 10% of India's total healthcare spending, they guide over 70% of clinical treatment decisions. With unorganised labs controlling ~80% of the market, organized national chains are capitalizing on massive consolidation headroom.",
    "sourceFile": "Individual Industry Decks/Diagnostics_industry.pdf",
    "sourceDoc": "Diagnostics_industry.pdf",
    "majorPlayers": [
      "Dr Lal PathLabs",
      "Metropolis",
      "Vijaya Diagnostic",
      "Agilus (SRL)"
    ],
    "growthDrivers": [
      "Rising chronic and lifestyle disease burden requiring quarterly and bi-annual blood monitoring",
      "Aging demographic shift with the 45+ population expanding at 2.4% annually (vs 0.7% for general population)",
      "Expansion of preventive wellness test packages now contributing over 25% of organized chain revenues",
      "Shift from unorganized standalone neighborhood labs (~80% market share) to trusted NABL-accredited national chains",
      "Surge in home collection services facilitated by GPS-tracked digital phlebotomist apps"
    ],
    "challenges": [
      "Aggressive price discounting on routine blood test packages by online pharmacy aggregators",
      "Shortage of MD pathologists and certified microbiologists in Tier-2 and Tier-3 markets",
      "Maintaining strict cold-chain logistics for biological samples across non-metro transit hubs",
      "Reagent cost inflation denominated in foreign currency (US Dollars / Euros)",
      "High marketing expenses and commission payouts to local clinic doctor referral networks"
    ],
    "porterForces": {
      "newEntrants": 2,
      "buyerPower": 2,
      "supplierPower": 2,
      "substitutes": 1,
      "rivalry": 3
    },
    "porterLabels": {
      "newEntrants": "MEDIUM",
      "buyerPower": "MEDIUM",
      "supplierPower": "MEDIUM",
      "substitutes": "LOW",
      "rivalry": "HIGH"
    },
    "budgetHighlights": "Expansion of National Health Mission free diagnostic service initiatives, tax incentives for diagnostic equipment deployed in aspirational districts, and GST exemptions on healthcare diagnostic testing services.",
    "marketContext": "Chronic lifestyle diseases (diabetes, hypertension, cardiology) generate over 60% of diagnostic revenue through repeat monitoring. The 45+ age cohort is expanding at 2.4% annually to 2050, converting one-off diagnostic checks into predictable quarterly annuity revenue.",
    "color": "#0d9488"
  },
  {
    "id": 15,
    "slug": "ecommerce",
    "name": "E-Commerce",
    "sector": "CONSUMER & DIGITAL",
    "icon": "shopping_cart",
    "marketSize": "US$ 65\u201366 Bn (CY2025)",
    "cagr": "21.0% CAGR",
    "cagrValue": 21.0,
    "description": "India's e-retail Gross Merchandise Value (GMV) reached US$ 65\u201366 billion in CY2025, growing 19\u201321% YoY and accelerating to 23\u201325% in early 2026. Total e-commerce including travel and digital services stands at US$ 125 billion, heading to US$ 345 billion by 2030. Despite rapid scale, e-commerce represents only ~1.6% of GDP and 6.5% of total retail (compared to 14% of GDP in China), highlighting immense long-term runway.",
    "sourceFile": "Individual Industry Decks/eCommerce_industry.pdf",
    "sourceDoc": "eCommerce_industry.pdf",
    "majorPlayers": [
      "Flipkart",
      "Amazon India",
      "Meesho",
      "Blinkit",
      "Zepto"
    ],
    "growthDrivers": [
      "Shopper headroom: only ~30% of internet users currently shop online versus 92% in China",
      "Rising GDP per capita crossing $2,800 toward $4,000+, the global trigger point for discretionary spending",
      "Quick commerce explosion (10-15 minute delivery) expanding from groceries to electronics and fashion",
      "Vernacular language apps and voice-assisted search unlocking 200M+ new shoppers in Tier-2/3/4 towns",
      "Retail Media Ad-Tech monetization generating high-margin platform advertising revenues (3-5% of GMV)"
    ],
    "challenges": [
      "High Return-to-Origin (RTO) and reverse logistics costs on Cash-on-Delivery orders (reaching 20-25% in fashion)",
      "Intense quick commerce competition capturing high-frequency, high-margin consumer basket purchases",
      "Regulatory compliance restrictions under foreign direct investment (FDI) marketplace norms",
      "Customer acquisition cost (CAC) inflation as performance marketing on Meta and Google becomes expensive",
      "Counterfeit product monitoring and trademark infringement liabilities across open seller marketplaces"
    ],
    "porterForces": {
      "newEntrants": 1,
      "buyerPower": 3,
      "supplierPower": 2,
      "substitutes": 2,
      "rivalry": 3
    },
    "porterLabels": {
      "newEntrants": "LOW",
      "buyerPower": "HIGH",
      "supplierPower": "MEDIUM",
      "substitutes": "MEDIUM",
      "rivalry": "HIGH"
    },
    "budgetHighlights": "PM GatiShakti national master plan lowering logistics costs from 13% to under 9% of GDP, postal network integration (India Post) for rural e-commerce delivery, and GST simplification for small online sellers.",
    "marketContext": "India's online shopper headroom is vast: only ~30% of India's 850 million internet users shop online, compared to 92% in China and 74% in the US. As per-capita GDP crosses $4,000 by 2030, discretionary consumer spending is hitting an exponential inflection point.",
    "color": "#2563eb"
  },
  {
    "id": 16,
    "slug": "electric-vehicles",
    "name": "Electric Vehicles (EV)",
    "sector": "AUTOMOTIVE",
    "icon": "electric_car",
    "marketSize": "US$ 65.0 Bn (FY2026)",
    "cagr": "19.44% CAGR",
    "cagrValue": 19.44,
    "description": "The Indian Electric Vehicle market stood at US$ 54.4 billion in 2025 and is projected to reach US$ 65.0 billion in FY2026, growing at a 19.44% CAGR (2025-29P). Electric two-wheelers represent ~92% of total EV sales volume, while passenger electric cars and electric commercial buses are the fastest-growing segments. The sector is supported by multi-billion-dollar lithium-ion cell gigafactories and government incentives under PM E-DRIVE.",
    "sourceFile": "Individual Industry Decks/EV_industry.pdf",
    "sourceDoc": "EV_industry.pdf",
    "majorPlayers": [
      "Tata Motors",
      "Ola Electric",
      "Ather Energy",
      "Mahindra & Mahindra"
    ],
    "growthDrivers": [
      "Compelling total cost of ownership (TCO) with EV running cost at \u20b90.40/km vs \u20b92.20/km for petrol vehicles",
      "Establishment of domestic battery gigafactories lowering cell costs toward global parity of $85-90/kWh",
      "Fleet electrification commitments by e-commerce and quick-commerce logistics operators (100% EV by 2030)",
      "Expansion of highway fast-charging networks supported by oil marketing companies at 20,000+ retail fuel outlets",
      "Introduction of mass-market electric passenger SUVs priced between \u20b910 lakh and \u20b915 lakh"
    ],
    "challenges": [
      "Higher upfront vehicle purchase cost compared to internal combustion equivalents without government subsidies",
      "Limited fast-charging infrastructure in non-metro regions and residential apartment complexes",
      "Thermal management challenges in extreme Indian summer temperatures (45\u00b0C+) requiring robust cooling",
      "Resale value ambiguity and battery pack replacement cost anxiety among second-hand vehicle buyers",
      "Geopolitical vulnerability in the supply chain for refined lithium carbonate and rare-earth permanent magnets"
    ],
    "porterForces": {
      "newEntrants": 2,
      "buyerPower": 2,
      "supplierPower": 3,
      "substitutes": 2,
      "rivalry": 3
    },
    "porterLabels": {
      "newEntrants": "MEDIUM",
      "buyerPower": "MEDIUM",
      "supplierPower": "HIGH",
      "substitutes": "MEDIUM",
      "rivalry": "HIGH"
    },
    "budgetHighlights": "PM E-DRIVE allocation (\u20b910,900 Cr), customs duty exemptions on 25 critical mineral imports (Lithium, Copper, Cobalt), and capital subsidies for fast-charging stations across national highways.",
    "marketContext": "Major battery gigafactories are going live in India, including Tata Group's Agratas ~$1.6 Bn (\u20b913,000 Cr) 20-40 GWh plant at Sanand, Ola Electric's 5-20 GWh Gigafactory, and Reliance Industries' 30 GWh battery project, reducing cell import dependence from 100% to under 40% by 2028.",
    "color": "#10b981"
  },
  {
    "id": 17,
    "slug": "fmcg",
    "name": "FMCG (Fast-Moving Consumer Goods)",
    "sector": "CONSUMER",
    "icon": "shopping_bag",
    "marketSize": "US$ 335.6 Bn (FY2026)",
    "cagr": "16.3% CAGR",
    "cagrValue": 16.3,
    "description": "The Indian Fast-Moving Consumer Goods (FMCG) market reached US$ 287.91 billion in 2025 and is estimated at US$ 335.63 billion in 2026, projected to expand to US$ 725.26 billion by 2031 at a 16.3% CAGR (expected to double by 2032). Food & Beverage constitutes ~50% of the industry, followed by Personal Care (30%) and Home Care (20%), powered by 9 million+ retail touchpoints and rising rural disposable incomes.",
    "sourceFile": "Individual Industry Decks/FMCG_industry.pdf",
    "sourceDoc": "FMCG_industry.pdf",
    "majorPlayers": [
      "Hindustan Unilever",
      "ITC",
      "Nestl\u00e9 India",
      "Britannia",
      "Dabur India"
    ],
    "growthDrivers": [
      "Rural consumption rebound powered by strong agricultural monsoons and direct benefit transfer (DBT) schemes",
      "Premiumisation across urban cohorts (shifting from bar soaps to body washes, and loose tea to gourmet blends)",
      "Rapid expansion of quick commerce platforms capturing 30-40% of packaged snacks, dairy, and beverage sales in metros",
      "Expanding modern trade and organized supermarket chains across Tier-2 and Tier-3 district headquarters",
      "Direct-to-Consumer (D2C) brand incubations and strategic acquisitions by traditional conglomerates"
    ],
    "challenges": [
      "Commodity price volatility in agricultural inputs (wheat, sugar, milk) and imported crude palm oil",
      "Intense competition from low-overhead regional and unorganized local brands in rural weekly haats",
      "Packaging sustainability mandates under Extended Producer Responsibility (EPR) increasing recycling costs",
      "Higher trade promotion spends demanded by quick commerce and modern trade supermarket chains",
      "Slowing urban volume growth in mature commodity categories like basic detergents and toilet soaps"
    ],
    "porterForces": {
      "newEntrants": 2,
      "buyerPower": 2,
      "supplierPower": 2,
      "substitutes": 1,
      "rivalry": 3
    },
    "porterLabels": {
      "newEntrants": "MEDIUM",
      "buyerPower": "MEDIUM",
      "supplierPower": "MEDIUM",
      "substitutes": "LOW",
      "rivalry": "HIGH"
    },
    "budgetHighlights": "Continuity in agricultural price support mechanisms, rural employment guarantee outlays (MGNREGA), and reduced basic customs duty on critical edible oil and processing inputs.",
    "marketContext": "FMCG majors in India command premium valuations (45-60x P/E multiples) driven by pristine debt-free balance sheets, ROE exceeding 40%, and dividend payout ratios above 70%. Rural markets contribute ~38% of FMCG sales and are growing faster than urban centers due to rising agricultural real wages.",
    "color": "#c2410c"
  },
  {
    "id": 18,
    "slug": "insurance",
    "name": "Insurance",
    "sector": "FINANCIAL SERVICES",
    "icon": "health_and_safety",
    "marketSize": "\u20b97.05 Lakh Cr (FY25)",
    "cagr": "15.7% Life / 9.3% Non-Life",
    "cagrValue": 15.7,
    "description": "India's insurance industry registered \u20b97.05 lakh crore in total premium income in FY25 (US$ 82.5 Bn). Overall insurance penetration stands at 3.7% of GDP (life 2.7%, non-life 1.0%), compared to a global benchmark near 7.0%, with premium density at US$ 97 per capita. In FY26, life new business premiums grew 15.7% to \u20b94.60 lakh crore, buoyed by the historic September 2025 GST exemption on individual life and health policies.",
    "sourceFile": "Individual Industry Decks/Insurance_industry.pdf",
    "sourceDoc": "Insurance_industry.pdf",
    "majorPlayers": [
      "LIC",
      "HDFC Life",
      "SBI Life",
      "ICICI Pru Life",
      "ICICI Lombard"
    ],
    "growthDrivers": [
      "Severe under-penetration (3.7% of GDP vs 7% global average) and per capita premium density of just $97",
      "Historic GST waiver in September 2025 removing 18% tax on individual term life and health insurance premiums",
      "IRDAI regulatory reforms enabling 'Use and File' product launches and composite licensing frameworks",
      "Bancassurance partnerships leveraging vast public and private bank branch networks across semi-urban India",
      "Rising health insurance awareness post-pandemic with retail health premiums compounding at 20%+ annually"
    ],
    "challenges": [
      "Medical inflation in private hospitals running at 12-14% annually, driving higher health claim loss ratios",
      "Low financial literacy and high lapse rates with 13th-month persistency averaging 82-86% across private players",
      "Mis-selling risks in traditional endowment and unit-linked insurance plans (ULIPs)",
      "High agency commission and initial marketing acquisition costs in non-bank distribution channels",
      "Capital market volatility impacting investment returns on insurers' massive equity and bond portfolios"
    ],
    "porterForces": {
      "newEntrants": 1,
      "buyerPower": 2,
      "supplierPower": 1,
      "substitutes": 2,
      "rivalry": 3
    },
    "porterLabels": {
      "newEntrants": "LOW",
      "buyerPower": "MEDIUM",
      "supplierPower": "LOW",
      "substitutes": "MEDIUM",
      "rivalry": "HIGH"
    },
    "budgetHighlights": "Insurance for All by 2047 national mission, composite insurance licensing framework allowing single entities to underwrite both life and general policies, and standard micro-insurance tax exemptions.",
    "marketContext": "India is projected to become the world's 6th largest insurance market by 2032. The removal of the 18% GST burden in September 2025 dramatically expanded retail affordability, driving a 21% surge in life policy sales in October-November 2025 alone.",
    "color": "#0369a1"
  },
  {
    "id": 19,
    "slug": "oil-and-gas",
    "name": "Oil & Gas",
    "sector": "ENERGY",
    "icon": "oil_barrel",
    "marketSize": "258.12 MMTPA (Refining Capacity)",
    "cagr": "4.2% Refining Expansion",
    "cagrValue": 4.2,
    "description": "India is the world's 4th largest crude refiner and 3rd largest oil consumer, with domestic refining capacity reaching 258.12 MMTPA in FY25 (up from 251 MMTPA in FY24). Petroleum product exports reached 65.08 million tonnes in FY25 and 56.94 million tonnes in 11M FY26. The sector is led by state refiners (IOCL, BPCL, HPCL) and Reliance Industries' Jamnagar mega-complex (world's largest single-site refinery).",
    "sourceFile": "Individual Industry Decks/Oil & Gas_industry.pdf",
    "sourceDoc": "Oil & Gas_industry.pdf",
    "majorPlayers": [
      "Indian Oil (IOCL)",
      "Reliance Industries",
      "Bharat Petroleum",
      "ONGC",
      "GAIL"
    ],
    "growthDrivers": [
      "Expanding domestic refining capacity from 258 MMTPA toward 310 MMTPA by 2028 to meet regional energy demand",
      "Petrochemical integration: Indian refiners investing \u20b92.5 lakh crore to raise petrochemical intensity from 5% to 15%",
      "Rapid expansion of City Gas Distribution (CGD) networks adding 12M+ piped domestic PNG household connections",
      "E20 Ethanol blending milestone reducing crude import bills by over \u20b940,000 crore annually",
      "Investments in green hydrogen, compressed biogas (CBG), and EV fast-charging corridors at 30,000+ pumps"
    ],
    "challenges": [
      "Heavy 88% crude oil import dependency leaving the economy vulnerable to Middle Eastern geopolitical conflicts",
      "Global Gross Refining Margin (GRM) volatility driven by fluctuating crack spreads for diesel and gasoline",
      "Energy transition risks as electric mobility and public mass transit dampen long-term gasoline volume growth",
      "Substantial capital expenditure required to meet corporate net-zero operational carbon targets by 2040",
      "Retail fuel excise duty adjustments used by the central government to absorb international crude spikes"
    ],
    "porterForces": {
      "newEntrants": 1,
      "buyerPower": 2,
      "supplierPower": 3,
      "substitutes": 2,
      "rivalry": 3
    },
    "porterLabels": {
      "newEntrants": "LOW",
      "buyerPower": "LOW",
      "supplierPower": "HIGH",
      "substitutes": "MEDIUM",
      "rivalry": "HIGH"
    },
    "budgetHighlights": "Strategic Petroleum Reserve (SPR) underground cavern expansion, customs duty rationalization on LNG and LPG imports, and capital grants for City Gas Distribution (CGD) pipe connections.",
    "marketContext": "India refines more crude than it consumes, serving as a vital regional fuel exporter to Europe and Asia. Domestically, City Gas Distribution networks now cover 88% of India's population across 300+ Geographical Areas (GAs), driving massive adoption of piped natural gas (PNG) and CNG vehicles.",
    "color": "#3f6212"
  },
  {
    "id": 20,
    "slug": "real-estate",
    "name": "Real Estate",
    "sector": "INFRASTRUCTURE & REAL ESTATE",
    "icon": "domain",
    "marketSize": "US$ 650 Bn (2025F)",
    "cagr": "19.5% CAGR",
    "cagrValue": 19.5,
    "description": "India's real estate sector is projected to reach US$ 650 billion in 2025F, US$ 1 Trillion by 2030, and US$ 5.8 Trillion by 2047, contributing 13% of national GDP. The industry is the second-largest employer after agriculture. Propelled by RERA formalisation, urbanisation, and corporate developer consolidation, residential pre-sales in top-7 cities surpassed 450,000 units while Grade-A office absorption exceeded 55 million sq.ft.",
    "sourceFile": "Individual Industry Decks/Real Estate_industry.pdf",
    "sourceDoc": "Real Estate_industry.pdf",
    "majorPlayers": [
      "DLF Ltd",
      "Macrotech (Lodha)",
      "Godrej Properties",
      "Prestige Estates"
    ],
    "growthDrivers": [
      "Rapid urbanisation with India's urban population expected to reach 600 million (40% of population) by 2030",
      "Massive flight to quality: Tier-1 branded listed developers capturing over 45% of total residential sales",
      "Demand for premium and luxury housing (units above \u20b92 crore) growing at 40%+ YoY across Mumbai, NCR, and Bengaluru",
      "Institutional capital inflows through REITs (Commercial Office, Warehousing, and Retail Malls)",
      "Non-Resident Indian (NRI) remittances channeling billions of dollars into luxury domestic real estate assets"
    ],
    "challenges": [
      "Input cost inflation in construction raw materials (reinforcement steel, cement, ceramic tiles, labor)",
      "Delays in obtaining environmental clearances, aviation height sanctions, and fire department NoCs",
      "High land prices and non-negotiable landowner revenue share demands in prime micro-markets",
      "Mortgage interest rate sensitivity among middle-income and affordable housing buyers",
      "State stamp duty and registration fee revisions impacting luxury property registration momentum"
    ],
    "porterForces": {
      "newEntrants": 1,
      "buyerPower": 2,
      "supplierPower": 3,
      "substitutes": 1,
      "rivalry": 3
    },
    "porterLabels": {
      "newEntrants": "LOW",
      "buyerPower": "MEDIUM",
      "supplierPower": "HIGH",
      "substitutes": "LOW",
      "rivalry": "HIGH"
    },
    "budgetHighlights": "Pradhan Mantri Awas Yojana (PMAY 2.0) with \u20b92.2 lakh crore budgetary support, tax deductions on home loan interest under Section 24, and infrastructure status for affordable rental housing.",
    "marketContext": "The sector has undergone a seismic shift toward balance sheet de-leveraging. DLF is completely net-debt positive with net cash, while Macrotech (Lodha) reduced net-debt-to-equity to 0.2x, generating peak operating cash flows and recording inventory absorption cycles under 12 months in Tier-1 cities.",
    "color": "#b45309"
  },
  {
    "id": 21,
    "slug": "saas",
    "name": "Cloud & SaaS",
    "sector": "TECHNOLOGY",
    "icon": "cloud",
    "marketSize": "US$ 35 Bn ARR (FY2027E)",
    "cagr": "17.55% CAGR (Global $976 Bn)",
    "cagrValue": 17.55,
    "description": "India's SaaS (Software as a Service) ecosystem has expanded ~4x in five years, growing from ~$3.5 billion to over $13 billion in annual recurring revenue (ARR), on track to reach $35 billion ARR by FY2027E. Backed by 1,600+ funded SaaS ventures and 27+ unicorns, the sector is experiencing a valuation reset toward disciplined capital efficiency (Rule of 40) and embedded GenAI capabilities.",
    "sourceFile": "Individual Industry Decks/SaaS_industry.pdf",
    "sourceDoc": "SaaS_industry.pdf",
    "majorPlayers": [
      "Freshworks",
      "Zoho",
      "Postman",
      "BrowserStack",
      "Icertis"
    ],
    "growthDrivers": [
      "Cross-border export engine: Indian SaaS firms generate 70%+ of recurring revenues from US and European enterprise clients",
      "Unrivaled cost-to-code advantage with engineering talent located in Chennai, Bengaluru, and Pune",
      "Transition to agentic and generative AI workflows allowing SaaS products to charge for work done rather than seats",
      "Vertical SaaS tailored to specialized industries (healthcare clinics, spas, automotive dealerships, logistics)",
      "Expansion of developer-tool SaaS (Postman, BrowserStack) commanding exceptional developer word-of-mouth stickiness"
    ],
    "challenges": [
      "Enterprise software budget consolidation where CFOs mandate 15-20% cuts in third-party software subscriptions",
      "AI disruption threats where autonomous coding agents allow companies to build lightweight internal tools",
      "Customer Acquisition Cost (CAC) inflation in traditional search and outbound marketing channels",
      "High customer churn in small-and-medium business (SMB) accounts due to macroeconomic belt-tightening",
      "GPU cloud compute token costs eating into traditional 80% gross software margins"
    ],
    "porterForces": {
      "newEntrants": 2,
      "buyerPower": 3,
      "supplierPower": 3,
      "substitutes": 2,
      "rivalry": 3
    },
    "porterLabels": {
      "newEntrants": "MEDIUM",
      "buyerPower": "HIGH",
      "supplierPower": "HIGH",
      "substitutes": "MEDIUM",
      "rivalry": "HIGH"
    },
    "budgetHighlights": "Tax incentives for R&D expenditures, liberalized cross-border remittance frameworks, and government cloud procurement mandates favoring domestic SaaS platforms.",
    "marketContext": "In early 2026, public SaaS multiples completed a decade-plus valuation reset from pandemic highs of 15x-20x EV/Revenue down to historical medians of 3.2x-3.4x for traditional software, while AI-native leaders (such as Palantir at ~40x) command massive premiums. The focus has decisively shifted to the Rule of 40.",
    "color": "#4f46e5"
  },
  {
    "id": 22,
    "slug": "steel",
    "name": "Steel & Metals",
    "sector": "MANUFACTURING & MATERIALS",
    "icon": "precision_manufacturing",
    "marketSize": "153.6 MT (FY26 Apr-Feb)",
    "cagr": "7.2% CAGR",
    "cagrValue": 7.2,
    "description": "India is the 2nd largest crude steel producer in the world after China. In FY26 (Apr-Feb), crude steel output reached 153.6 MT, finished steel production touched 146.8 MT, and domestic consumption reached 147.7 MT. Total installed capacity reached 218.29 MTPA in FY26 (up from 200.33 MT in FY25), powered by central infrastructure projects, automotive demand, and industrial capex.",
    "sourceFile": "Individual Industry Decks/Steel_industry.pdf",
    "sourceDoc": "Steel_industry.pdf",
    "majorPlayers": [
      "Tata Steel",
      "JSW Steel",
      "SAIL",
      "JSPL",
      "AM/NS India"
    ],
    "growthDrivers": [
      "National Infrastructure Pipeline driving record demand for structural steel in railways, bridges, metros, and expressways",
      "Booming automotive and appliance manufacturing driving demand for high-strength cold-rolled and galvanized steel",
      "Expansion of captive iron ore mining leases insulating leaders like Tata Steel and SAIL from external raw material price spikes",
      "Government's 300 MTPA steel capacity target by 2030 backed by \u20b91.5 lakh crore in brownfield mill expansions",
      "Transition to low-carbon Green Steel using hydrogen-ready direct reduced iron (DRI) and green hydrogen fuel"
    ],
    "challenges": [
      "Heavy 85%+ import dependence on expensive Australian metallurgical coking coal",
      "Cheap steel dumping from surplus Chinese mills depressing Asian export prices and hot-rolled coil margins",
      "European Union Carbon Border Adjustment Mechanism (CBAM) imposing export penalties on high-emission blast furnace steel",
      "Massive capital intensity requiring continuous balance sheet debt servicing for multi-year blast furnace expansions",
      "Stringent environmental standards for blast furnace flue gas desulfurization and carbon capture"
    ],
    "porterForces": {
      "newEntrants": 1,
      "buyerPower": 2,
      "supplierPower": 3,
      "substitutes": 1,
      "rivalry": 3
    },
    "porterLabels": {
      "newEntrants": "LOW",
      "buyerPower": "MEDIUM",
      "supplierPower": "HIGH",
      "substitutes": "LOW",
      "rivalry": "HIGH"
    },
    "budgetHighlights": "Continuity in the 30% export duty on raw iron ore to preserve domestic supply, waiver of basic customs duty on coking coal and ferronickel imports, and capital allocations for National Infrastructure Pipeline projects.",
    "marketContext": "India's per capita steel consumption stands at ~90 kg against the global average of 220 kg, offering decades of structural expansion. In FY26, domestic steel consumption grew 11.5% YoY, outperforming all major global steel markets as infrastructure investments converted into record rebar and flat steel demand.",
    "color": "#475569"
  }
];

// Export for both Node.js (tests) and Browser environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { INDUSTRIES };
} else {
  window.INDUSTRIES = INDUSTRIES;
}
