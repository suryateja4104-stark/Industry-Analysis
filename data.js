// data.js — Industry intelligence data & default datasets for Industry Tracker
// Repopulated from authentic 2026-27 Sector Intelligence Primers (Individual Industry Decks)

const DEFAULT_INDUSTRIES = [
  {
    "id": "food-delivery",
    "numId": 1,
    "name": "Food Delivery",
    "sector": "Consumer & Digital",
    "icon": "fastfood",
    "color": "#e11d48",
    "description": "The food delivery industry in India is a dominant duopoly (Zomato >60%, Swiggy ~40%) handling over 95% of restaurant deliveries. In Q1 FY26, consolidated revenue surged 182% YoY to \u20b920,211 Cr with PAT jumping to \u20b992 Cr. The sector is rapidly expanding into quick commerce with dark store networks operating across 130+ cities, shifting strategic focus toward profitability, contribution margins, and 10-minute grocery fulfillment.",
    "size": "US$ 259.3 Bn Global / \u20b920,211 Cr India Q1 FY26",
    "marketSize": "US$ 259.3B Global / \u20b920.2k Cr Q1",
    "cagr": "12% CAGR",
    "cagrValue": 12,
    "players": [
      "Zomato",
      "Swiggy",
      "Blinkit",
      "Instamart",
      "Zepto"
    ],
    "majorPlayers": [
      "Zomato",
      "Swiggy",
      "Blinkit",
      "Instamart",
      "Zepto"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "High",
      "supplierPower": "Medium",
      "substitutes": "High",
      "rivalry": "High"
    },
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
    "forcesReasoning": {
      "newEntrants": "High capital burn, entrenched two-wheeler fleet network effects, and customer brand loyalty create formidable moats.",
      "buyerPower": "Consumers face zero switching costs between Zomato and Swiggy and possess high discount and delivery fee sensitivity.",
      "supplierPower": "Restaurants depend on aggregators for online footfalls, but top restaurant chains push back against 20-25% commissions.",
      "substitutes": "Home cooking, dining out, office meal arrangements, and direct brand delivery provide constant alternatives.",
      "rivalry": "Fierce duopolistic rivalry across 10-minute quick commerce delivery, subscription plans (Gold vs One), and merchant exclusivity."
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "Food Delivery_industry.pdf",
    "uploadedDate": "2026-08-01",
    "valueChain": {
      "inputs": "Merchant Restaurant Partnerships, Dark Store Leases, Packaged Goods Sourcing & Rider Onboarding",
      "operations": "Algorithmic Order Dispatch, Route Optimization, Dark Store Batch Picking & Packing",
      "distribution": "Hyperlocal 2-Wheeler / EV Rider Delivery Fleets & Hub-and-Spoke Sortation Hubs",
      "endMarkets": "Urban Professionals, Gen-Z Mobile Consumers, Late-Night Diners & Grocery Shoppers",
      "marginDriver": "In-app Merchant Ad-Tech Revenue, Consumer Platform Fees (\u20b96-10/order) & High-Margin Grocery Baskets",
      "bottleneck": "High Rider Fleet Churn, Rising Fuel Costs & Dark Store Real Estate Saturation in Metros"
    },
    "regulatoryTimeline": [
      {
        "year": "2023",
        "title": "State Gig Worker Welfare Acts",
        "detail": "Mandatory platform registration and welfare cess enacted across Rajasthan and Karnataka."
      },
      {
        "year": "2024",
        "title": "Platform Fee Rollout",
        "detail": "Industry-wide implementation of \u20b93 to \u20b910 convenience fees per order to improve unit economics."
      },
      {
        "year": "2025",
        "title": "ONDC Food Protocol Expansion",
        "detail": "Government-backed open network expands merchant direct ordering to counter aggregator commission rates."
      },
      {
        "year": "2026-27",
        "title": "Quick-Commerce Traffic & Safety Norms",
        "detail": "Municipal rules governing rider traffic speed limits, dark store parking, and fire safety compliance."
      }
    ],
    "budgetHighlights": "Social Security Code implementation for gig workers, GST rate stability for delivery transactions, and PM E-DRIVE subsidies driving EV rider transition.",
    "marketContext": "In Q1 FY26, consolidated industry revenue jumped 182% YoY to \u20b920,211 Cr with PAT reaching \u20b992 Cr. Food delivery core revenue grew 22.7% YoY while quick commerce GOV surged 39.8% YoY with 1,171 active dark stores.",
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
    "globalBenchmarking": {
      "metricLabel": "Food Delivery Penetration (% of Total F&B)",
      "labels": [
        "India",
        "China",
        "USA",
        "UK",
        "Global Avg"
      ],
      "values": [
        11.5,
        34.0,
        22.0,
        24.5,
        18.0
      ]
    },
    "costStructure": {
      "labels": [
        "Gross Revenue",
        "Delivery Fleet Payouts",
        "Dark Store & Warehousing",
        "Marketing & Discounts",
        "EBITDA / Contribution",
        "Payment Gateways & D&A",
        "PAT"
      ],
      "values": [
        100,
        48,
        18,
        12,
        12,
        8,
        4
      ]
    },
    "workingCapital": {
      "inventoryDays": 8,
      "receivableDays": 4,
      "payableDays": 24,
      "cashConversionCycle": -12
    },
    "creditProfile": {
      "netDebtToEbitda": "Net Cash Positive",
      "creditRating": "AA- / Stable",
      "costOfDebt": "8.2%",
      "liquidityBuffer": "\u20b912,500+ Cr Consolidated Liquid Treasury"
    },
    "stockPerformance": {
      "labels": [
        "Q1 24",
        "Q2 24",
        "Q3 24",
        "Q4 24",
        "Q1 25",
        "Q2 25",
        "Q3 25",
        "Q4 25"
      ],
      "sectorIndex": [
        100,
        125,
        155,
        195,
        240,
        290,
        340,
        395
      ],
      "benchmarkNifty": [
        100,
        106,
        114,
        121,
        127,
        134,
        140,
        146
      ],
      "return1Yr": "+88.5%",
      "return3Yr": "+245.0%",
      "volatilityBeta": "1.42x"
    },
    "customerSegmentation": {
      "labels": [
        "Gen-Z & Students",
        "Young Working Pros",
        "Families & Households",
        "Corporate B2B"
      ],
      "values": [
        32,
        44,
        18,
        6
      ],
      "incomeCohort": "Top 10 metros account for 74% of order volume; Tier-2/3 cities generate 26% of orders and are growing at 38% YoY."
    },
    "demandSupplyGap": {
      "labels": [
        "2023",
        "2024",
        "2025",
        "2026E",
        "2027E"
      ],
      "demand": [
        42,
        58,
        78,
        102,
        130
      ],
      "supply": [
        45,
        60,
        75,
        96,
        122
      ],
      "utilizationRate": "94.2% Dark Store Capacity"
    },
    "techRadar": {
      "aiIntegration": "Very High",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "Very High"
    },
    "swot": {
      "strengths": [
        "Entrenched duopoly with >95% market share between Zomato and Swiggy",
        "Hyperlocal dark store network of 1,170+ micro-warehouses across 130+ cities",
        "Expanding high-margin merchant advertising revenue and platform fees"
      ],
      "weaknesses": [
        "Thin food delivery net margins and ongoing price sensitivity in tier-2 towns",
        "Elevated rider fleet turnover exceeding 60% annualized",
        "Continuous capex needed to support rapid dark store network rollouts"
      ],
      "opportunities": [
        "Non-grocery category expansion (electronics, beauty, apparel, gifts) in 10-15 minutes",
        "Farm-to-fork B2B supply chains supplying fresh produce directly to restaurants",
        "Live event ticketing, table booking, and dining-out monetisation ecosystems"
      ],
      "threats": [
        "Mandatory state cess or minimum hourly wage laws for platform gig workers",
        "Deep-pocketed competition from dedicated quick commerce players like Zepto",
        "Open Network for Digital Commerce (ONDC) erosion of aggregator pricing power"
      ]
    },
    "news": [
      {
        "source": "Economic Times",
        "date": "Jul 2026",
        "title": "Zomato Q1 revenue jumps 182% YoY on Blinkit surge",
        "summary": "Consolidated revenue crossed \u20b920,211 Cr as quick commerce GOV grew nearly 40% YoY with 1,171 active dark stores."
      },
      {
        "source": "Mint",
        "date": "Jun 2026",
        "title": "Quick commerce dark stores expand to 30,000 SKUs",
        "summary": "Platforms are stocking smartphones and fashion, challenging traditional e-commerce giants."
      },
      {
        "source": "Business Standard",
        "date": "May 2026",
        "title": "State welfare boards finalize gig worker social security framework",
        "summary": "A 1-2% platform fee cess will be pooled into dedicated worker healthcare and accident insurance funds."
      }
    ],
    "dealTimeline": [
      {
        "date": "May 2026",
        "company": "Zepto",
        "value": "$665M",
        "buyer": "DST Global, Avenir & StepStone"
      },
      {
        "date": "Jan 2026",
        "company": "Zomato Hyperpure",
        "value": "\u20b9800 Cr Internal Capex",
        "buyer": "Zomato Ltd"
      },
      {
        "date": "Nov 2025",
        "company": "Swiggy Ltd",
        "value": "\u20b911,327 Cr IPO",
        "buyer": "Institutional & Retail Investors"
      }
    ],
    "interviewAngles": [
      "How would you evaluate the unit economics of a 10-minute dark store in a Tier-2 city with average order value of \u20b9350 vs metro AOV of \u20b9550?",
      "Guesstimate the total number of daily quick-commerce orders delivered across Bengaluru.",
      "If a state government imposes a mandatory \u20b915/order gig worker social cess, how should an aggregator adjust pricing to protect EBITDA?"
    ],
    "glossary": [
      {
        "term": "GOV (Gross Order Value)",
        "definition": "Total rupee value of merchandise sold on the platform including taxes and delivery fees before discounts."
      },
      {
        "term": "Contribution Margin",
        "definition": "Revenue minus direct variable fulfillment, payment gateway, and delivery rider costs per order."
      },
      {
        "term": "Dark Store",
        "definition": "A micro-fulfillment facility located in dense residential catchments dedicated exclusively to packing online delivery orders."
      }
    ],
    "sourceFile": "Individual Industry Decks/Food Delivery_industry.pdf",
    "sourcePath": "Individual Industry Decks/Food Delivery_industry.pdf",
    "sourceDoc": "Food Delivery_industry.pdf"
  },
  {
    "id": "healthcare-hospitals",
    "numId": 2,
    "name": "Healthcare & Hospitals",
    "sector": "Healthcare",
    "icon": "local_hospital",
    "color": "#0284c7",
    "description": "India's broad healthcare sector reached US$ 372 billion in 2023 with hospitals accounting for ~US$ 135 billion in FY26, projected to touch US$ 202 billion by 2030 (10.6% CAGR). Organised private hospitals represent a \u20b978,500 Cr revenue pool with CRISIL forecasting a 5th consecutive year of double-digit growth (14-15%) in FY27.",
    "size": "US$ 135 Bn Hospitals / US$ 372 Bn Total Healthcare",
    "marketSize": "US$ 135 Bn (Hospitals FY26)",
    "cagr": "10.6% CAGR",
    "cagrValue": 10.6,
    "players": [
      "Apollo Hospitals",
      "Max Healthcare",
      "Fortis Healthcare",
      "Narayana Health",
      "Medanta (Global Health)"
    ],
    "majorPlayers": [
      "Apollo Hospitals",
      "Max Healthcare",
      "Fortis Healthcare",
      "Narayana Health",
      "Medanta"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "Medium",
      "supplierPower": "High",
      "substitutes": "Low",
      "rivalry": "Medium"
    },
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
    "forcesReasoning": {
      "newEntrants": "Prohibitive greenfield capex (\u20b91.2-1.5 Cr per bed in metros), lengthy NABH/JCI accreditations, and doctor hiring moats.",
      "buyerPower": "Patients have tariff transparency for routine surgeries, but complex tertiary care decisions depend strictly on trusted clinical brands.",
      "supplierPower": "Leading cardiac, oncology, and neurosurgeons hold immense pricing power, alongside medical device OEMs (GE, Siemens, Intuitive Surgical).",
      "substitutes": "Outpatient clinics and telemedicine handle minor diagnostics, but major surgical intervention has zero substitutes.",
      "rivalry": "Established corporate hospital networks compete within micro-markets on ARPOB, robotic capabilities, and insurance empanelment."
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "Healthcare_industry.pdf",
    "uploadedDate": "2026-08-01",
    "valueChain": {
      "inputs": "Specialized Surgeons, Nursing Staff, Medical Devices, Surgical Consumables & APIs",
      "operations": "Inpatient Wards, Intensive Care Units (ICUs), Modular Operation Theaters & Imaging Labs",
      "distribution": "Tertiary Hospital Hubs, Satellite Daycare Centers, Tele-Clinics & Outpatient Polyclinics",
      "endMarkets": "Retail Insured Patients, Out-of-Pocket Self-Pay, Medical Value Travelers (MVT) & CGHS/ECHS",
      "marginDriver": "Tertiary/Quaternary Surgeries (Oncology, Cardiology, Organ Transplants) & Robotic Procedures",
      "bottleneck": "Acute Shortage of Super-Specialist Doctors, Nursing Migration & High Metro Land Acquisition Costs"
    },
    "regulatoryTimeline": [
      {
        "year": "2018",
        "title": "Ayushman Bharat (PM-JAY)",
        "detail": "World's largest public health assurance program offering \u20b95 lakh cover per family for 550M citizens."
      },
      {
        "year": "2022",
        "title": "Ayushman Bharat Digital Mission (ABDM)",
        "detail": "National digital health IDs (ABHA), interoperable EHR standards, and telemedicine protocols."
      },
      {
        "year": "2024",
        "title": "NMC Medical Seat Expansion",
        "detail": "National Medical Commission increases postgraduate clinical seats to address specialist doctor shortages."
      },
      {
        "year": "2026-27",
        "title": "Hospital Tariff Harmonization",
        "detail": "Health ministry and IRDAI standardizing surgical package definitions and cashless claim settlement windows."
      }
    ],
    "budgetHighlights": "Union Budget allocation of \u20b990,000+ Cr for health and family welfare, universal PM-JAY health insurance for all senior citizens aged 70+, and customs duty exemptions on 3 critical cancer drugs.",
    "marketContext": "India has 1.3 hospital beds per 1,000 population versus the WHO guideline of 3.0. Major chains are expanding bed capacity by 25-30% over FY25-FY28 through brownfield additions, maintaining 65-72% occupancy and \u20b955,000-75,000 metro ARPOB.",
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
    "globalBenchmarking": {
      "metricLabel": "Hospital Beds per 1,000 Population",
      "labels": [
        "India",
        "WHO Norm",
        "China",
        "USA",
        "UK"
      ],
      "values": [
        1.3,
        3.0,
        4.3,
        2.9,
        2.5
      ]
    },
    "costStructure": {
      "labels": [
        "Total Revenue",
        "Doctor & Clinician Fees",
        "Medical Consumables & Drugs",
        "Nursing & Staff Salaries",
        "Power & Admin Opex",
        "EBITDA",
        "PAT"
      ],
      "values": [
        100,
        22,
        19,
        18,
        16,
        25,
        14
      ]
    },
    "workingCapital": {
      "inventoryDays": 14,
      "receivableDays": 48,
      "payableDays": 42,
      "cashConversionCycle": 20
    },
    "creditProfile": {
      "netDebtToEbitda": "0.6x",
      "creditRating": "AA+ / Stable",
      "costOfDebt": "7.4%",
      "liquidityBuffer": "\u20b94,200 Cr Cash & Committed Credit Lines"
    },
    "stockPerformance": {
      "labels": [
        "Q1 24",
        "Q2 24",
        "Q3 24",
        "Q4 24",
        "Q1 25",
        "Q2 25",
        "Q3 25",
        "Q4 25"
      ],
      "sectorIndex": [
        100,
        112,
        126,
        142,
        160,
        182,
        204,
        230
      ],
      "benchmarkNifty": [
        100,
        106,
        114,
        121,
        127,
        134,
        140,
        146
      ],
      "return1Yr": "+38.4%",
      "return3Yr": "+130.0%",
      "volatilityBeta": "0.82x"
    },
    "customerSegmentation": {
      "labels": [
        "Corporate & Retail Insurance",
        "Cash / Out-of-Pocket",
        "Medical Value Travel",
        "Govt Schemes (PM-JAY/CGHS)"
      ],
      "values": [
        48,
        28,
        14,
        10
      ],
      "incomeCohort": "Metropolitan tertiary hospitals earn ARPOB of \u20b955,000-\u20b975,000/day; Tier-2 secondary hubs average \u20b928,000-\u20b938,000/day."
    },
    "demandSupplyGap": {
      "labels": [
        "2023",
        "2024",
        "2025",
        "2026E",
        "2027E"
      ],
      "demand": [
        72,
        80,
        89,
        99,
        110
      ],
      "supply": [
        64,
        68,
        74,
        81,
        88
      ],
      "utilizationRate": "71.5% Average Occupancy"
    },
    "techRadar": {
      "aiIntegration": "High",
      "roboticsAutomation": "High",
      "d2cOmnichannel": "Medium",
      "platformEcosystem": "High"
    },
    "swot": {
      "strengths": [
        "Unrivaled clinical expertise and international accreditations at 1/5th Western procedure costs",
        "High barrier to entry with integrated tertiary care brands and physician loyalties",
        "Predictable elective surgery pipelines and expanding digital tele-health channels"
      ],
      "weaknesses": [
        "High capital intensity with 3-5 year gestation periods for greenfield hospital commissioning",
        "Heavy concentration of revenues in 4-5 major metro clusters",
        "Dependency on key star surgeons for specialized oncology and organ transplant volumes"
      ],
      "opportunities": [
        "Hub-and-spoke expansion into under-penetrated Tier-2/3 state capitals",
        "Medical tourism expansion leveraging AYUSH and advanced robotic oncology centers",
        "Daycare surgery centers and home health monitoring lowering operational bed costs"
      ],
      "threats": [
        "Judicial or government tariff caps on inpatient beds and diagnostic procedures",
        "Acute shortage of specialized healthcare talent and nursing migration",
        "Delays in TPA health insurance claim disbursements stretching working capital"
      ]
    },
    "news": [
      {
        "source": "Mint",
        "date": "Jul 2026",
        "title": "Max Healthcare greenlights \u20b94,500 Cr brownfield bed addition",
        "summary": "The hospital major will add 2,500 beds over 3 years across Gurugram, Delhi-NCR, and Mumbai."
      },
      {
        "source": "Economic Times",
        "date": "Jun 2026",
        "title": "Medical tourism revenues breach $9 Billion mark in India",
        "summary": "Inflows of patients from Central Asia, Africa, and SAARC nations reached all-time records for cardiology and oncology."
      },
      {
        "source": "Business Standard",
        "date": "May 2026",
        "title": "Apollo Hospitals 24/7 digital platform turns EBITDA positive",
        "summary": "Omnichannel digital consultations, pharmacy deliveries, and diagnostics crossed 12M monthly active users."
      }
    ],
    "dealTimeline": [
      {
        "date": "Apr 2026",
        "company": "Sahyadri Hospitals",
        "value": "\u20b93,200 Cr",
        "buyer": "Ontario Teachers' Pension Plan"
      },
      {
        "date": "Jan 2026",
        "company": "Alexis Hospital Nagpur",
        "value": "\u20b9412 Cr",
        "buyer": "Max Healthcare Institute"
      },
      {
        "date": "Oct 2025",
        "company": "Manipal Health Enterprises",
        "value": "\u20b92,800 Cr Minority Stake",
        "buyer": "Temasek Holdings"
      }
    ],
    "interviewAngles": [
      "A 500-bed hospital in Mumbai costs \u20b9700 Cr to construct. If ARPOB is \u20b965,000, ALOS is 3.5 days, and occupancy is 70%, calculate the operational payback period.",
      "How would you optimize doctor compensation models between fixed retainers and fee-for-service to maximize clinical quality and EBITDA?",
      "Estimate the annual addressable market for robotic knee replacement surgeries in India."
    ],
    "glossary": [
      {
        "term": "ARPOB",
        "definition": "Average Revenue Per Occupied Bed per day \u2014 the primary metric measuring clinical yield and complexity of care in hospitals."
      },
      {
        "term": "ALOS",
        "definition": "Average Length of Stay \u2014 the average number of days a patient spends in the hospital; shorter ALOS improves bed turnover and margins."
      },
      {
        "term": "MVT",
        "definition": "Medical Value Travel \u2014 international patient visits seeking specialized surgeries, generating 2x-3x higher ARPOB than domestic patients."
      }
    ],
    "sourceFile": "Individual Industry Decks/Healthcare_industry.pdf",
    "sourcePath": "Individual Industry Decks/Healthcare_industry.pdf",
    "sourceDoc": "Healthcare_industry.pdf"
  },
  {
    "id": "hotels-hospitality",
    "numId": 3,
    "name": "Hotels & Hospitality",
    "sector": "Consumer & Hospitality",
    "icon": "hotel",
    "color": "#d97706",
    "description": "The global hotels market stands at US$ 1.37 Trillion in 2026 heading to US$ 1.89 Trillion by 2031. In India, the hospitality sector is experiencing an unprecedented structural upcycle with record Average Room Rates (ARR) and Revenue Per Available Room (RevPAR) driven by corporate travel, luxury domestic leisure, weddings, and international MICE conferences.",
    "size": "US$ 1.37 Tn Global / \u20b938,000 Cr India Branded",
    "marketSize": "US$ 1.37 Tn Global ($45B India)",
    "cagr": "6.8% CAGR (Global) / 13% CAGR (India)",
    "cagrValue": 13,
    "players": [
      "IHCL (Taj)",
      "EIH (Oberoi)",
      "ITC Hotels",
      "Lemon Tree Hotels",
      "Marriott India"
    ],
    "majorPlayers": [
      "IHCL (Taj)",
      "EIH (Oberoi)",
      "ITC Hotels",
      "Lemon Tree",
      "Chalet Hotels"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "Medium",
      "supplierPower": "Medium",
      "substitutes": "Medium",
      "rivalry": "High"
    },
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
    "forcesReasoning": {
      "newEntrants": "Multi-year land acquisition and gestation periods of 4-6 years for upscale 5-star properties limit supply shocks.",
      "buyerPower": "Corporate procurement teams negotiate bulk corporate discounts, while retail travelers compare rates via OTAs.",
      "supplierPower": "Food & beverage suppliers and hotel labor unions hold moderate power; luxury interior contractors have specialized pricing.",
      "substitutes": "Airbnb, boutique homestays, and serviced corporate apartments provide viable leisure substitutes.",
      "rivalry": "Intense brand positioning competition across luxury, upper upscale, midscale, and budget boutique segments."
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "Hotels & Hospitality_industry.pdf",
    "uploadedDate": "2026-08-01",
    "valueChain": {
      "inputs": "Prime Real Estate, Architectural Design, Hospitality Talent & Culinary Sourcing",
      "operations": "Room Inventory Management, F&B Operations, Banquet Services & Housekeeping",
      "distribution": "Direct Brand Apps/Portals, Corporate Sales Desks, Travel Agents & Online Travel Agencies (OTAs)",
      "endMarkets": "Domestic Business Travelers, Luxury Vacationers, Wedding Banquets & Global MICE Delegates",
      "marginDriver": "High-Margin F&B Banqueting, Wedding Packages & Asset-Light Hotel Management Fees",
      "bottleneck": "Skilled Hospitality Talent Shortage & Lengthy Municipal Construction Permits"
    },
    "regulatoryTimeline": [
      {
        "year": "2020",
        "title": "Emergency Credit Line Guarantee (ECLGS)",
        "detail": "Special liquidity windows to safeguard hospitality operators through pandemic closures."
      },
      {
        "year": "2023",
        "title": "G20 Summit Infrastructure Boost",
        "detail": "Global visibility across 60 Indian cities driving permanent convention center infrastructure."
      },
      {
        "year": "2024",
        "title": "State Infrastructure Status Reforms",
        "detail": "States including Maharashtra and Karnataka grant industrial electricity and water tariffs to hotels."
      },
      {
        "year": "2026-27",
        "title": "National Tourism Policy & Swadesh Darshan 2.0",
        "detail": "Direct subsidies and tax holidays for eco-resorts and spiritual tourism circuits (Ayodhya, Varanasi, Puri)."
      }
    ],
    "budgetHighlights": "Capital expenditure outlays for 50 selected tourist destinations, viability gap funding for convention centers, and infrastructure status for projects above \u20b950 Cr.",
    "marketContext": "Supply growth in India remains muted at ~5-6% CAGR while demand is compounding at 10-12%, enabling hotels to sustain 68-74% occupancies alongside double-digit rate hikes across metro and leisure destinations.",
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
    "globalBenchmarking": {
      "metricLabel": "Branded Hotel Rooms per 1,000 Population",
      "labels": [
        "India",
        "China",
        "USA",
        "Thailand",
        "Global Avg"
      ],
      "values": [
        0.15,
        2.8,
        16.5,
        4.2,
        3.1
      ]
    },
    "costStructure": {
      "labels": [
        "Gross Revenue",
        "Food & Beverage Costs",
        "Payroll & Employee Benefits",
        "Energy & Utilities",
        "Repairs & Maintenance",
        "EBITDA",
        "PAT"
      ],
      "values": [
        100,
        16,
        22,
        9,
        7,
        34,
        18
      ]
    },
    "workingCapital": {
      "inventoryDays": 6,
      "receivableDays": 28,
      "payableDays": 45,
      "cashConversionCycle": -11
    },
    "creditProfile": {
      "netDebtToEbitda": "0.8x",
      "creditRating": "AA / Stable",
      "costOfDebt": "8.1%",
      "liquidityBuffer": "\u20b93,100 Cr Undrawn Lines & Treasury"
    },
    "stockPerformance": {
      "labels": [
        "Q1 24",
        "Q2 24",
        "Q3 24",
        "Q4 24",
        "Q1 25",
        "Q2 25",
        "Q3 25",
        "Q4 25"
      ],
      "sectorIndex": [
        100,
        118,
        136,
        158,
        184,
        212,
        245,
        280
      ],
      "benchmarkNifty": [
        100,
        106,
        114,
        121,
        127,
        134,
        140,
        146
      ],
      "return1Yr": "+48.2%",
      "return3Yr": "+180.0%",
      "volatilityBeta": "1.15x"
    },
    "customerSegmentation": {
      "labels": [
        "Corporate & Business",
        "Domestic Leisure & Vacations",
        "Weddings & Social Banquets",
        "International MICE / Tourists"
      ],
      "values": [
        38,
        32,
        20,
        10
      ],
      "incomeCohort": "Luxury 5-star properties command ADR of \u20b912,000-\u20b922,000/night; Midscale business hotels average \u20b94,500-\u20b97,000/night."
    },
    "demandSupplyGap": {
      "labels": [
        "2023",
        "2024",
        "2025",
        "2026E",
        "2027E"
      ],
      "demand": [
        65,
        74,
        85,
        96,
        108
      ],
      "supply": [
        58,
        62,
        67,
        72,
        78
      ],
      "utilizationRate": "72.4% Average Occupancy"
    },
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Low",
      "d2cOmnichannel": "High",
      "platformEcosystem": "Medium"
    },
    "swot": {
      "strengths": [
        "Iconic legacy brands (Taj, Oberoi, ITC) with exceptional customer pricing power",
        "Asset-light management fee model shielding corporate balance sheets from debt distress",
        "Favorable structural supply-demand deficit in India supporting multi-year rate expansion"
      ],
      "weaknesses": [
        "Seasonality in leisure destinations leading to low monsoonal occupancy dips",
        "Elevated employee attrition and high costs of continuous guest room renovations",
        "High initial capital outlay for owned property developments"
      ],
      "opportunities": [
        "Spiritual tourism destination hotels along national temple circuits",
        "Boutique experiential homestay brand curation (e.g. IHCL am\u00e3 Stays & Trails)",
        "Airport transit and aero-city mega hotel developments"
      ],
      "threats": [
        "Sudden geopolitical conflicts, health pandemics, or aviation fare spikes curbing travel",
        "Competition from luxury vacation rental platforms in leisure hotspots like Goa and Himachal",
        "Rising utility tariffs and local municipal property taxes"
      ]
    },
    "news": [
      {
        "source": "Economic Times",
        "date": "Jul 2026",
        "title": "IHCL signs 50th management contract of the year, targets 400 hotels",
        "summary": "The Tata-owned hospitality bellwether maintains over 75% operating margin on its management fee portfolio."
      },
      {
        "source": "Livemint",
        "date": "Jun 2026",
        "title": "Average room rates hit record high in Mumbai and Delhi",
        "summary": "Average Room Rates crossed \u20b911,200 across metropolitan business hotels, surpassing pre-pandemic peaks by 42%."
      },
      {
        "source": "CNBC-TV18",
        "date": "Apr 2026",
        "title": "Lemon Tree Hotels accelerates midscale expansion into Tier-3 smart cities",
        "summary": "Chain plans to add 3,000 keys across emerging commercial clusters and industrial corridors."
      }
    ],
    "dealTimeline": [
      {
        "date": "Feb 2026",
        "company": "Chalet Hotels",
        "value": "\u20b9315 Cr",
        "buyer": "Courtyard by Marriott Aravali acquisition"
      },
      {
        "date": "Dec 2025",
        "company": "ITC Hotels",
        "value": "Demerger Listing",
        "buyer": "Public Shareholder Spinoff"
      },
      {
        "date": "Aug 2025",
        "company": "Samhi Hotels",
        "value": "\u20b9450 Cr",
        "buyer": "ACIC Portfolio Additions"
      }
    ],
    "interviewAngles": [
      "A 200-room luxury hotel operates at 75% occupancy and \u20b910,000 ADR. F&B revenue is 60% of room revenue. If departmental profit margin is 45%, calculate annual property EBITDA.",
      "Evaluate whether a hotel chain should pursue an owned-and-operated strategy vs asset-light franchise/management contracts during a high interest rate cycle.",
      "How would you price hotel room inventory dynamically when a major cricket tournament is announced in a Tier-2 city?"
    ],
    "glossary": [
      {
        "term": "ADR (Average Daily Rate)",
        "definition": "Total room revenue divided by the number of paid rooms sold."
      },
      {
        "term": "RevPAR",
        "definition": "Revenue Per Available Room (Occupancy \u00d7 ADR) \u2014 the benchmark metric measuring hotel top-line yield."
      },
      {
        "term": "Asset-Light Model",
        "definition": "A strategy where the operator manages properties owned by third-party real estate developers in exchange for 8-12% fee of gross operating profit."
      }
    ],
    "sourceFile": "Individual Industry Decks/Hotels & Hospitality_industry.pdf",
    "sourcePath": "Individual Industry Decks/Hotels & Hospitality_industry.pdf",
    "sourceDoc": "Hotels & Hospitality_industry.pdf"
  },
  {
    "id": "it-industry",
    "numId": 4,
    "name": "Information Technology (IT)",
    "sector": "Technology",
    "icon": "computer",
    "color": "#6366f1",
    "description": "India's IT industry is the cornerstone of its modern export economy, reaching US$ 315 billion in FY26 (+6.1% YoY) with IT exports touching US$ 246 billion. The sector is on track to cross US$ 500 billion by 2030, bolstered by 1,600+ Global Capability Centres (GCCs), enterprise cloud migrations, and rapid deployment of Generative AI engineering solutions.",
    "size": "US$ 315 Bn FY26 (Exports: US$ 246 Bn)",
    "marketSize": "US$ 315 Bn (FY2026)",
    "cagr": "6.1% CAGR (Long-term 11%)",
    "cagrValue": 6.1,
    "players": [
      "TCS",
      "Infosys",
      "HCLTech",
      "Wipro",
      "Tech Mahindra",
      "LTIMindtree"
    ],
    "majorPlayers": [
      "TCS",
      "Infosys",
      "HCLTech",
      "Wipro",
      "Tech Mahindra"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "High",
      "supplierPower": "High",
      "substitutes": "Low",
      "rivalry": "High"
    },
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
    "forcesReasoning": {
      "newEntrants": "Global enterprise delivery scale, ISO/CMMI Level 5 certifications, and multi-billion-dollar enterprise MSA relationships protect incumbents.",
      "buyerPower": "Fortune 500 CIOs exercise aggressive pricing scrutiny and consolidation across IT service vendors.",
      "supplierPower": "High demand for specialized AI, data engineering, and cybersecurity talent gives engineers bargaining power.",
      "substitutes": "Offshore software delivery has no viable direct substitutes other than captive GCC in-housing.",
      "rivalry": "Intense competitive bidding for large multi-year renewal deals among Indian Tier-1s and global players like Accenture and Cognizant."
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "IT_industry.pdf",
    "uploadedDate": "2026-08-01",
    "valueChain": {
      "inputs": "Engineering Talent Pipeline, Cloud Hyperscaler Partnerships (AWS/Azure/GCP) & R&D Labs",
      "operations": "Agile Software Development, Cloud Architecture, AI Agent Integration & System Maintenance",
      "distribution": "Global Delivery Centers across India, Eastern Europe, LatAm & On-site Client Offices",
      "endMarkets": "BFSI (32%), Healthcare & Life Sciences (18%), Telecom & Tech (15%), Manufacturing & Retail (35%)",
      "marginDriver": "High-Billing AI Solutions, Cloud Modernization & Proprietary Software IP",
      "bottleneck": "Legacy Project Revenue Compression & Client Discretionary IT Budget Freezes"
    },
    "regulatoryTimeline": [
      {
        "year": "2020",
        "title": "Simplified OSP Guidelines",
        "detail": "Government liberalizes Other Service Provider norms, making permanent work-from-anywhere legally seamless."
      },
      {
        "year": "2023",
        "title": "Digital Personal Data Protection (DPDP) Act",
        "detail": "Comprehensive data privacy framework governing corporate data processing and cross-border transfers."
      },
      {
        "year": "2024",
        "title": "IndiaAI Mission Approval",
        "detail": "\u20b910,372 crore ($1.25B) approved for developing national compute infrastructure and AI startups."
      },
      {
        "year": "2026-27",
        "title": "Union Budget Cloud & R&D Incentives",
        "detail": "PLI 2.0 IT hardware incentives (\u20b917,000 Cr) and tax holidays for green cloud data centers in Special Economic Zones."
      }
    ],
    "budgetHighlights": "\u20b910,372 Cr IndiaAI Mission allocation, PLI Scheme 2.0 for IT hardware (\u20b917,000 Cr), tax exemptions for R&D expenditures, and expanded semiconductor fab incentives.",
    "marketContext": "India's tech sector employs 5.4 million professionals directly. Global Capability Centres (GCCs) have expanded to over 1,600 units employing 1.9 million specialists and contributing over $60 billion in high-value engineering exports.",
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
    "globalBenchmarking": {
      "metricLabel": "Share of Global Sourcing / Offshore IT Market (%)",
      "labels": [
        "India",
        "Eastern Europe",
        "Philippines",
        "China",
        "Latin America"
      ],
      "values": [
        58.0,
        12.5,
        9.0,
        8.5,
        6.0
      ]
    },
    "costStructure": {
      "labels": [
        "Gross Revenue",
        "Employee Wages & Benefits",
        "Subcontractor Expenses",
        "Travel & Visas",
        "Software & Infrastructure",
        "EBITDA",
        "PAT"
      ],
      "values": [
        100,
        54,
        11,
        4,
        7,
        24,
        18
      ]
    },
    "workingCapital": {
      "inventoryDays": 0,
      "receivableDays": 68,
      "payableDays": 24,
      "cashConversionCycle": 44
    },
    "creditProfile": {
      "netDebtToEbitda": "Net Cash Positive",
      "creditRating": "AAA / Stable",
      "costOfDebt": "6.9%",
      "liquidityBuffer": "\u20b975,000+ Cr Cumulative Cash & Treasury Investments"
    },
    "stockPerformance": {
      "labels": [
        "Q1 24",
        "Q2 24",
        "Q3 24",
        "Q4 24",
        "Q1 25",
        "Q2 25",
        "Q3 25",
        "Q4 25"
      ],
      "sectorIndex": [
        100,
        108,
        119,
        131,
        142,
        155,
        168,
        180
      ],
      "benchmarkNifty": [
        100,
        106,
        114,
        121,
        127,
        134,
        140,
        146
      ],
      "return1Yr": "+22.4%",
      "return3Yr": "+75.2%",
      "volatilityBeta": "0.94x"
    },
    "customerSegmentation": {
      "labels": [
        "Banking & Financial Services (BFSI)",
        "Manufacturing & Auto",
        "Healthcare & Life Sciences",
        "Retail & CPG",
        "Telecom & Media"
      ],
      "values": [
        31,
        20,
        18,
        16,
        15
      ],
      "incomeCohort": "North America generates 52-56% of revenues; Europe contributes 26-29%; Rest of World & India generate 15-18%."
    },
    "demandSupplyGap": {
      "labels": [
        "2023",
        "2024",
        "2025",
        "2026E",
        "2027E"
      ],
      "demand": [
        78,
        83,
        90,
        98,
        106
      ],
      "supply": [
        85,
        87,
        92,
        99,
        107
      ],
      "utilizationRate": "83.6% Employee Utilization"
    },
    "techRadar": {
      "aiIntegration": "Very High",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "Low",
      "platformEcosystem": "Very High"
    },
    "swot": {
      "strengths": [
        "Unrivaled 5.4 million engineering talent pool and world-leading cost-to-capability ratio",
        "Deep multi-decade client relationships with 80% of Fortune 500 enterprises",
        "Debt-free balance sheets generating substantial free cash flow and 80%+ dividend payouts"
      ],
      "weaknesses": [
        "High dependence on North American corporate IT spending (over 50% revenue exposure)",
        "Slower transition to proprietary IP/software products compared to pure SaaS models",
        "Mid-level management overhead facing disruption from AI-assisted coding tools"
      ],
      "opportunities": [
        "Generative AI transformation contracts, enterprise LLM orchestration, and prompt security",
        "Autonomous vehicle software and industrial IoT engineering in ER&D segments",
        "Accelerated vendor consolidation as global enterprises trim contractor vendor counts"
      ],
      "threats": [
        "AI code generation tools automating routine QA, testing, and legacy migration tasks",
        "Protectionist offshore taxation and visa regulations in key Western markets",
        "Wage inflation compressing margins if billing rates cannot be adjusted upward"
      ]
    },
    "news": [
      {
        "source": "Business Standard",
        "date": "Jul 2026",
        "title": "TCS bags $1.8 Billion AI-driven digital transformation deal in Europe",
        "summary": "The contract involves rebuilding the core insurance operations using autonomous AI agents and cloud architecture."
      },
      {
        "source": "Economic Times",
        "date": "Jun 2026",
        "title": "Indian GCC market revenue tops $60 Billion with 1.9 Million staff",
        "summary": "Global multinationals are scaling engineering centers in Bengaluru and Hyderabad for chip design and AI research."
      },
      {
        "source": "Livemint",
        "date": "May 2026",
        "title": "Infosys launches specialized generative enterprise suites on AWS and Azure",
        "summary": "Topaz platform reports over 300 client enterprise implementations across finance and healthcare."
      }
    ],
    "dealTimeline": [
      {
        "date": "Mar 2026",
        "company": "Altimetrik",
        "value": "$800M",
        "buyer": "TPG Capital Acquisition"
      },
      {
        "date": "Jan 2026",
        "company": "In-Tech (Automotive ER&D)",
        "value": "\u20ac450M",
        "buyer": "Infosys Ltd"
      },
      {
        "date": "Nov 2025",
        "company": "Datapreplabs",
        "value": "\u20b9240 Cr",
        "buyer": "HCLTech"
      }
    ],
    "interviewAngles": [
      "If GenAI tools reduce the required billable hours for an application migration project by 30%, how should an IT service firm restructure its pricing from Time & Materials to Value-Based pricing?",
      "Guesstimate the total annual billable export revenue generated by Bengaluru's IT workforce.",
      "How would you advise an IT vendor losing senior architects to captive multinational GCCs?"
    ],
    "glossary": [
      {
        "term": "GCC (Global Capability Centre)",
        "definition": "Client-owned and operated in-house offshore centers that handle strategic engineering, R&D, and corporate finance."
      },
      {
        "term": "T&M vs Fixed Price",
        "definition": "Time & Materials bills per engineer hour worked; Fixed Price contracts pay for milestones, rewarding vendor productivity gains."
      },
      {
        "term": "Attrition Rate",
        "definition": "The percentage of employees leaving the firm annually; typically ranges between 12% and 18% in Indian IT."
      }
    ],
    "sourceFile": "Individual Industry Decks/IT_industry.pdf",
    "sourcePath": "Individual Industry Decks/IT_industry.pdf",
    "sourceDoc": "IT_industry.pdf"
  },
  {
    "id": "pharmaceuticals",
    "numId": 5,
    "name": "Pharmaceuticals",
    "sector": "Healthcare",
    "icon": "medication",
    "color": "#059669",
    "description": "The Indian pharmaceutical market stood at US$ 57.6 billion in 2025 and is estimated at US$ 60.3 billion in FY26, compounding at 10% CAGR toward US$ 130 billion by 2030. Known as the pharmacy of the world, India supplies 20% of global generics by volume, backed by 500+ API manufacturers and the highest count of USFDA-approved plants outside the United States.",
    "size": "US$ 60.3 Bn FY26 (Exports: US$ 30.5 Bn)",
    "marketSize": "US$ 60.3 Bn (FY2026)",
    "cagr": "10.0% CAGR",
    "cagrValue": 10.0,
    "players": [
      "Sun Pharma",
      "Dr. Reddy's Laboratories",
      "Cipla",
      "Torrent Pharma",
      "Zydus Lifesciences",
      "Lupin"
    ],
    "majorPlayers": [
      "Sun Pharma",
      "Dr. Reddy's",
      "Cipla",
      "Torrent Pharma",
      "Zydus"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "High",
      "supplierPower": "Medium",
      "substitutes": "Low",
      "rivalry": "High"
    },
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
    "forcesReasoning": {
      "newEntrants": "Stringent USFDA and cGMP regulatory compliances, multi-year clinical bio-equivalence studies, and drug master filing costs.",
      "buyerPower": "Consolidated US pharmacy purchasing consortia (Red Oak, ClarusONE, WBAD) dictate aggressive pricing on generic drugs.",
      "supplierPower": "Chinese chemical intermediate suppliers have historically held power, now easing via domestic PLI bulk drug parks.",
      "substitutes": "Prescription pharmaceutical molecules have no direct medical substitutes other than alternative chemical formulations.",
      "rivalry": "Intense generic price erosion upon patent expiry and cut-throat domestic branded generic marketing."
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "Pharmaceuticals_industry.pdf",
    "uploadedDate": "2026-08-01",
    "valueChain": {
      "inputs": "Key Starting Materials (KSMs), Active Pharmaceutical Ingredients (APIs) & Excipients",
      "operations": "Chemical Synthesis, Biologics Fermentation, Tableting, Injectable Filling & Sterile Packaging",
      "distribution": "Carry & Forward (C&F) Agents, Wholesalers, Retail Pharmacies & Jan Aushadhi Kendras",
      "endMarkets": "Domestic Branded Formulations (42%), US/EU Regulated Generics (35%), Emerging Semi-regulated Markets (23%)",
      "marginDriver": "Complex Generics, Specialty Dermatology/Ophthalmology & Biosimilar Commercialization",
      "bottleneck": "USFDA Regulatory Inspection Warnings (Form 483s) & Generic Price Erosion in US"
    },
    "regulatoryTimeline": [
      {
        "year": "2020",
        "title": "Bulk Drug & Medical Device PLI Schemes",
        "detail": "\u20b915,000 crore PLI incentives launched to build 3 mega bulk drug parks and reduce Chinese API dependence."
      },
      {
        "year": "2023",
        "title": "Revised Schedule M Compliance",
        "detail": "Government mandates upgraded Good Manufacturing Practices (GMP) aligned with WHO standards for all pharma units."
      },
      {
        "year": "2025",
        "title": "Biopharma SHAKTI Initiative",
        "detail": "US$ 1.08 Billion national mission launched to accelerate indigenous biologics, mRNA therapies, and clinical trials."
      },
      {
        "year": "2026-27",
        "title": "Jan Aushadhi 25,000 Kendra Milestone",
        "detail": "National generic pharmacy network expansion supplying medicines at 50-80% discount to market rates."
      }
    ],
    "budgetHighlights": "Biopharma SHAKTI initiative ($1.08B), customs exemptions on life-saving cancer drugs, expansion of PLI for bulk drugs, and dedicated R&D innovation funds for biosimilar development.",
    "marketContext": "Pharmaceutical exports reached an all-time record of US$ 30.5 billion in FY25. With chronic therapies (cardiovascular, diabetes, oncology) expanding to 40% of the domestic market, Indian firms are shifting from commoditized pills to high-margin biosimilars and complex injectables.",
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
    "globalBenchmarking": {
      "metricLabel": "Share of Global Generic Medicine Volume (%)",
      "labels": [
        "India",
        "USA",
        "China",
        "Germany",
        "Global Avg"
      ],
      "values": [
        20.0,
        14.0,
        12.5,
        6.0,
        8.0
      ]
    },
    "costStructure": {
      "labels": [
        "Gross Revenue",
        "Raw Materials & APIs",
        "Employee & Clinical R&D",
        "Manufacturing & Power",
        "Selling & Field Force",
        "EBITDA",
        "PAT"
      ],
      "values": [
        100,
        32,
        17,
        13,
        15,
        23,
        16
      ]
    },
    "workingCapital": {
      "inventoryDays": 88,
      "receivableDays": 74,
      "payableDays": 62,
      "cashConversionCycle": 100
    },
    "creditProfile": {
      "netDebtToEbitda": "0.3x",
      "creditRating": "AA+ / Stable",
      "costOfDebt": "7.1%",
      "liquidityBuffer": "\u20b918,500 Cr Cash & Fixed Deposits"
    },
    "stockPerformance": {
      "labels": [
        "Q1 24",
        "Q2 24",
        "Q3 24",
        "Q4 24",
        "Q1 25",
        "Q2 25",
        "Q3 25",
        "Q4 25"
      ],
      "sectorIndex": [
        100,
        114,
        129,
        146,
        165,
        186,
        210,
        235
      ],
      "benchmarkNifty": [
        100,
        106,
        114,
        121,
        127,
        134,
        140,
        146
      ],
      "return1Yr": "+42.1%",
      "return3Yr": "+135.0%",
      "volatilityBeta": "0.72x"
    },
    "customerSegmentation": {
      "labels": [
        "Domestic Branded Prescriptions",
        "US Generics & Specialty",
        "Europe & UK Regulated",
        "RoW & Semi-Regulated",
        "API Merchant Sales"
      ],
      "values": [
        42,
        28,
        12,
        11,
        7
      ],
      "incomeCohort": "Chronic therapies (cardiac, CNS, diabetes) contribute 62% of domestic profits; acute therapies generate 38%."
    },
    "demandSupplyGap": {
      "labels": [
        "2023",
        "2024",
        "2025",
        "2026E",
        "2027E"
      ],
      "demand": [
        52,
        58,
        64,
        72,
        80
      ],
      "supply": [
        58,
        63,
        70,
        77,
        85
      ],
      "utilizationRate": "76.8% Formulation Capacity"
    },
    "techRadar": {
      "aiIntegration": "High",
      "roboticsAutomation": "High",
      "d2cOmnichannel": "Low",
      "platformEcosystem": "Medium"
    },
    "swot": {
      "strengths": [
        "World-leading low-cost generic formulation capabilities and 500+ USFDA plants",
        "High domestic brand loyalty where doctors prescribe by trade name rather than generic INN",
        "Robust balance sheets with strong free cash flow reinvested into specialty pipeline R&D"
      ],
      "weaknesses": [
        "Vulnerability to sudden USFDA warning letters halting production lines",
        "High dependency on third-party API intermediates for critical antibiotic classes",
        "Low investment in early-stage novel chemical entity (NCE) discovery relative to global Big Pharma"
      ],
      "opportunities": [
        "Global biosimilar wave targeting Humira, Keytruda, and GLP-1 weight-loss peptides",
        "Contract Development and Manufacturing (CDMO) expansion as global pharma diversifies from China",
        "Expansion into Latin America, Africa, and Southeast Asian emerging markets"
      ],
      "threats": [
        "Expansion of price control caps by National Pharmaceutical Pricing Authority (NPPA)",
        "Aggressive US buyer consortium consolidation squeezing wholesale margins",
        "Geopolitical tensions affecting chemical feedstock trade routes"
      ]
    },
    "news": [
      {
        "source": "Business Standard",
        "date": "Jul 2026",
        "title": "Dr. Reddy's launches generic biosimilar version of blockbuster oncology drug",
        "summary": "First-wave launch expected to unlock $120M annual revenue opportunity across European markets."
      },
      {
        "source": "Economic Times",
        "date": "Jun 2026",
        "title": "Pharma exports cross milestone $30.5 Billion in FY25",
        "summary": "Growth led by high-value specialty injectables and strong shipments to Latin America and Africa."
      },
      {
        "source": "Mint",
        "date": "May 2026",
        "title": "Sun Pharma completes enrollment for Phase-3 clinical trials in immunology",
        "summary": "Specialty portfolio revenue share reaches 19% of global consolidated sales."
      }
    ],
    "dealTimeline": [
      {
        "date": "May 2026",
        "company": "Curatio Healthcare",
        "value": "\u20b92,000 Cr",
        "buyer": "Torrent Pharma Integration"
      },
      {
        "date": "Jan 2026",
        "company": "Sanofi India Vaccine Distribution",
        "value": "Strategic Pact",
        "buyer": "Cipla Ltd"
      },
      {
        "date": "Nov 2025",
        "company": "Concert Pharmaceuticals",
        "value": "$576M",
        "buyer": "Sun Pharmaceutical Industries"
      }
    ],
    "interviewAngles": [
      "How does patent litigation under Paragraph IV of the Hatch-Waxman Act provide 180-day generic exclusivity, and how should an Indian pharma firm price the exclusive window?",
      "Calculate the ROCE impact if a formulation plant receives an import alert from the USFDA and requires 18 months of remediation.",
      "Why do Indian domestic formulations command 25-30% EBITDA margins while US commodity generics yield 12-15%?"
    ],
    "glossary": [
      {
        "term": "ANDA",
        "definition": "Abbreviated New Drug Application \u2014 regulatory submission made to the USFDA for approval of a generic drug product."
      },
      {
        "term": "Biosimilar",
        "definition": "A biological medical product that is an almost identical copy of an original reference biologic drug whose patent has lapsed."
      },
      {
        "term": "Form 483",
        "definition": "A formal notice issued by the USFDA at the conclusion of an inspection listing non-compliance observations with Good Manufacturing Practices."
      }
    ],
    "sourceFile": "Individual Industry Decks/Pharmaceuticals_industry.pdf",
    "sourcePath": "Individual Industry Decks/Pharmaceuticals_industry.pdf",
    "sourceDoc": "Pharmaceuticals_industry.pdf"
  },
  {
    "id": "telecom",
    "numId": 6,
    "name": "Telecommunications",
    "sector": "Telecommunications",
    "icon": "cell_tower",
    "color": "#7c3aed",
    "description": "India's telecom sector is one of the world's largest digital lifelines, generating \u20b91.02 lakh crore in quarterly gross revenue (Q3 Dec-2025) with Adjusted Gross Revenue (AGR) rising 8.1% YoY to \u20b984,270 Cr. The market serves 1,306 million telephone subscribers and 1,029 million broadband connections at 91.7% teledensity, with private operators handling 92.2% of market share.",
    "size": "\u20b91.02 Lakh Cr Gross Revenue / 1.31 Bn Users",
    "marketSize": "\u20b91.02 Lakh Cr (Quarterly Dec-25)",
    "cagr": "8.1% AGR YoY",
    "cagrValue": 8.1,
    "players": [
      "Reliance Jio",
      "Bharti Airtel",
      "Vodafone Idea (Vi)",
      "Indus Towers",
      "BSNL"
    ],
    "majorPlayers": [
      "Reliance Jio",
      "Bharti Airtel",
      "Vodafone Idea",
      "Indus Towers"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "Medium",
      "supplierPower": "High",
      "substitutes": "Low",
      "rivalry": "High"
    },
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
    "forcesReasoning": {
      "newEntrants": "Astronomical 5G spectrum auction fees, nationwide fiber optic rollouts, and tower tenancies create an insurmountable barrier.",
      "buyerPower": "Consumers face low switching costs via Mobile Number Portability (MNP), but industry-wide tariff hikes reduce discounting choices.",
      "supplierPower": "Telecom gear makers (Ericsson, Nokia, Samsung) and passive tower infrastructure providers (Indus Towers) possess significant pricing leverage.",
      "substitutes": "OTT messaging and VoIP apps (WhatsApp, Zoom) have displaced legacy SMS and voice, yet rely entirely on underlying data bandwidth.",
      "rivalry": "Intense duopolistic network quality competition between Jio and Airtel on 5G Standalone coverage and Fixed Wireless Access (FWA)."
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "Telecom_industry.pdf",
    "uploadedDate": "2026-08-01",
    "valueChain": {
      "inputs": "5G/6G Spectrum Licenses, Telecom Grade Optical Fiber, Active Radios & Tower Real Estate",
      "operations": "Core Network Routing, Software-Defined Networks (SDN), Network Operations Centers (NOC) & Billing",
      "distribution": "Exclusive Brand Stores, Multi-Brand Mobile Retailers, Digital MyJio/Airtel Thanks Apps & Enterprise B2B Teams",
      "endMarkets": "Prepaid Mobile Users (85%), Postpaid Professionals (15%), Home Broadband/FWA & Enterprise Cloud Connectivity",
      "marginDriver": "Tariff Repair (ARPU Expansion toward \u20b9250+), 5G FWA Monetization & Enterprise Private 5G Networks",
      "bottleneck": "Legacy AGR Dues, Elevated Right-of-Way (RoW) Municipal Charges & Fiberization Infrastructure Costs"
    },
    "regulatoryTimeline": [
      {
        "year": "2021",
        "title": "Telecom Structural Reforms Package",
        "detail": "Cabinet approves 4-year moratorium on statutory AGR dues, 100% automatic FDI, and rationalized bank guarantees."
      },
      {
        "year": "2023",
        "title": "Telecommunications Act 2023",
        "detail": "Replaces 138-year-old Telegraph Act, codifying right-of-way permissions and national security interception frameworks."
      },
      {
        "year": "2024",
        "title": "Nationwide Tariff Hike (15-20%)",
        "detail": "First coordinated industry-wide tariff hike in 3 years lifting blended ARPU above \u20b9195 across private telcos."
      },
      {
        "year": "2026-27",
        "title": "Satellite Spectrum Allocation & 6G Vision",
        "detail": "Administrative assignment framework for satellite broadband (Starlink, Eutelsat OneWeb) and Bharat 6G alliance roadmaps."
      }
    ],
    "budgetHighlights": "Continuity in telecom infrastructure outlays, Universal Service Obligation Fund (USOF) fiberization for 250,000 gram panchayats, and waiver of bank guarantees for future spectrum auctions.",
    "marketContext": "India is the world's most data-intensive mobile market with average monthly consumption reaching 25.7 GB per user across the sector and 42.3 GB on Reliance Jio, at a global-low realization of \u20b97.87 per GB. A further 16-20% tariff increase in 2026 is driving sustainable ROCE recovery.",
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
    "globalBenchmarking": {
      "metricLabel": "Average Monthly Mobile Data Usage per User (GB)",
      "labels": [
        "India",
        "USA",
        "China",
        "Europe",
        "Global Avg"
      ],
      "values": [
        25.7,
        18.2,
        16.8,
        15.4,
        14.1
      ]
    },
    "costStructure": {
      "labels": [
        "Gross Revenue",
        "Network Operating Costs",
        "Tower Tenancy Rental",
        "License Fee & Spectrum Usage",
        "Employee & Admin",
        "EBITDA",
        "PAT"
      ],
      "values": [
        100,
        24,
        16,
        10,
        5,
        45,
        18
      ]
    },
    "workingCapital": {
      "inventoryDays": 0,
      "receivableDays": 22,
      "payableDays": 58,
      "cashConversionCycle": -36
    },
    "creditProfile": {
      "netDebtToEbitda": "1.8x (Jio/Airtel Consolidated)",
      "creditRating": "AAA / Stable",
      "costOfDebt": "7.8%",
      "liquidityBuffer": "\u20b928,000 Cr Undrawn Banking Facilities"
    },
    "stockPerformance": {
      "labels": [
        "Q1 24",
        "Q2 24",
        "Q3 24",
        "Q4 24",
        "Q1 25",
        "Q2 25",
        "Q3 25",
        "Q4 25"
      ],
      "sectorIndex": [
        100,
        115,
        132,
        152,
        175,
        198,
        224,
        252
      ],
      "benchmarkNifty": [
        100,
        106,
        114,
        121,
        127,
        134,
        140,
        146
      ],
      "return1Yr": "+45.8%",
      "return3Yr": "+152.0%",
      "volatilityBeta": "0.89x"
    },
    "customerSegmentation": {
      "labels": [
        "Prepaid Mobile Consumers",
        "Postpaid & Family Plans",
        "Home Broadband / 5G FWA",
        "Enterprise & Cloud B2B"
      ],
      "values": [
        68,
        14,
        10,
        8
      ],
      "incomeCohort": "Jio commands 475M+ subscribers; Airtel holds 390M+ subscribers with highest industry ARPU at \u20b9211+."
    },
    "demandSupplyGap": {
      "labels": [
        "2023",
        "2024",
        "2025",
        "2026E",
        "2027E"
      ],
      "demand": [
        82,
        94,
        108,
        124,
        142
      ],
      "supply": [
        85,
        96,
        110,
        126,
        145
      ],
      "utilizationRate": "88.5% Network Spectrum Utilization"
    },
    "techRadar": {
      "aiIntegration": "High",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "Very High"
    },
    "swot": {
      "strengths": [
        "Massive scale with 1.3 billion subscribers and lowest data cost per GB globally",
        "Comprehensive 5G Standalone network coverage across 10,000+ towns",
        "Strong operating leverage enabling incremental revenue from tariff hikes to flow directly to EBITDA"
      ],
      "weaknesses": [
        "Capital-intensive network upgrade cycles requiring continuous capex reinvestment",
        "Uneven financial health with Vodafone Idea dependent on state equity conversions",
        "Low realization per GB compared to global developed telecommunications markets"
      ],
      "opportunities": [
        "5G Fixed Wireless Access (FWA) capturing 50 million underserved household broadband connections",
        "Enterprise private 5G network installations across automotive, ports, and mining hubs",
        "Cloud edge computing integration and AI inference hosting at telecom tower sites"
      ],
      "threats": [
        "Spectrum auction debt repayment obligations stretching corporate balance sheets",
        "Satellite broadband operators (Starlink, Kuiper) competing for high-ARPU rural and enterprise users",
        "Severe currency depreciation increasing the cost of imported telecommunication hardware"
      ]
    },
    "news": [
      {
        "source": "Economic Times",
        "date": "Jul 2026",
        "title": "Airtel and Jio prepare next round of 15% tariff hikes",
        "summary": "Telco industry targets blended ARPU of \u20b9250 within 12 months to support 5G network capital returns."
      },
      {
        "source": "Livemint",
        "date": "Jun 2026",
        "title": "5G FWA subscriber additions surpass traditional fiber additions",
        "summary": "JioAirFiber and Airtel Xstream AirFiber crossed 8 million connected homes within 18 months."
      },
      {
        "source": "Business Standard",
        "date": "May 2026",
        "title": "Telecom sector AGR climbs 8.1% YoY to \u20b984,270 Crore",
        "summary": "Access services contributed 84.5% of overall adjusted gross revenue across licensed circles."
      }
    ],
    "dealTimeline": [
      {
        "date": "Apr 2026",
        "company": "Vodafone Idea",
        "value": "\u20b918,000 Cr",
        "buyer": "Follow-on Public Offering (FPO)"
      },
      {
        "date": "Jan 2026",
        "company": "Indus Towers",
        "value": "\u20b93,500 Cr",
        "buyer": "Bharti Airtel Creeping Acquisition"
      },
      {
        "date": "Aug 2025",
        "company": "Airtel Africa",
        "value": "$1.2B Minority Buyback",
        "buyer": "Bharti Telecom Ltd"
      }
    ],
    "interviewAngles": [
      "If an operator with 400M subscribers raises tariffs by \u20b925/month with a 1.5% churn rate, what is the net annual EBITDA addition?",
      "Evaluate whether Fixed Wireless Access (FWA) is structurally cheaper to deploy than Fiber-to-the-Home (FTTH) in semi-urban India.",
      "Calculate the breakeven ARPU required for a telecom operator to earn 15% ROCE on its 5G spectrum and equipment investments."
    ],
    "glossary": [
      {
        "term": "ARPU",
        "definition": "Average Revenue Per User per month \u2014 the core telecom unit economic metric measuring subscriber monetization."
      },
      {
        "term": "AGR",
        "definition": "Adjusted Gross Revenue \u2014 the revenue baseline computed by the Department of Telecommunications to levy license fees and spectrum usage charges."
      },
      {
        "term": "FWA",
        "definition": "Fixed Wireless Access \u2014 high-speed home wireless broadband delivered using 5G radio spectrum without requiring physical fiber drops."
      }
    ],
    "sourceFile": "Individual Industry Decks/Telecom_industry.pdf",
    "sourcePath": "Individual Industry Decks/Telecom_industry.pdf",
    "sourceDoc": "Telecom_industry.pdf"
  },
  {
    "id": "artificial-intelligence",
    "numId": 7,
    "name": "Artificial Intelligence (AI)",
    "sector": "Technology",
    "icon": "smart_toy",
    "color": "#8b5cf6",
    "description": "The global Artificial Intelligence market was valued at US$ 244 billion in 2025 and is projected to expand to US$ 827 billion by 2030, compounding at 27.7% CAGR. Global VC investment into AI topped US$ 202 billion in 2025 with total AI infrastructure capex exceeding US$ 325 billion, driven by hyperscalers buildouts and enterprise GenAI agent deployment.",
    "size": "US$ 244 Bn (2025) -> US$ 827 Bn (2030E)",
    "marketSize": "US$ 244 Bn (Global 2025)",
    "cagr": "27.7% CAGR",
    "cagrValue": 27.7,
    "players": [
      "NVIDIA",
      "Microsoft / OpenAI",
      "Alphabet (Google)",
      "Amazon (AWS)",
      "Meta",
      "Anthropic"
    ],
    "majorPlayers": [
      "NVIDIA",
      "Microsoft",
      "Alphabet",
      "Amazon",
      "OpenAI"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "Medium",
      "supplierPower": "High",
      "substitutes": "Low",
      "rivalry": "High"
    },
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
    "forcesReasoning": {
      "newEntrants": "Training frontier foundation models requires $500M-$1B+ in compute clusters, proprietary data pipelines, and premier research talent.",
      "buyerPower": "Enterprises can swap underlying LLM APIs via orchestration frameworks, but vendor lock-in occurs at the application and data layer.",
      "supplierPower": "Extreme supplier power held by NVIDIA in GPU accelerators (Blackwell/Hopper architecture) and specialized AI datacenter power/cooling providers.",
      "substitutes": "Traditional heuristic software and rules-based ML cannot match the reasoning and generative capabilities of transformer models.",
      "rivalry": "Hyper-competitive frontier LLM benchmark race between OpenAI, Google Gemini, Anthropic Claude, and open-source models like Meta Llama."
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "AI_industry.pdf",
    "uploadedDate": "2026-08-01",
    "valueChain": {
      "inputs": "AI Semiconductor Accelerators (NVIDIA GPUs/TPUs), Datacenter Power & Clean Water Cooling",
      "operations": "Frontier Foundation Model Pre-training, Reinforcement Learning (RLHF), Fine-Tuning & MLOps",
      "distribution": "Cloud Hyperscaler APIs (Azure, AWS Bedrock, Vertex AI), Open-Source Model Registries & Edge SDKs",
      "endMarkets": "Enterprise Software Vendors, Healthcare Imaging, Coding Automation, Financial Modeling & Autonomous Systems",
      "marginDriver": "GPU Infrastructure Hosting Margins, API Token Consumption & High-Value Enterprise Agent Workflows",
      "bottleneck": "Grid Electricity Availability, GPU Silicon Packaging (CoWoS) Shortages & Data Quality Limits"
    },
    "regulatoryTimeline": [
      {
        "year": "2023",
        "title": "US Executive Order on Safe AI",
        "detail": "Mandates safety assessments and red-teaming disclosures for dual-use foundation models exceeding 10^26 FLOPs."
      },
      {
        "year": "2024",
        "title": "European Union AI Act Passed",
        "detail": "World's first binding risk-tiered legal framework banning unconstrained biometric surveillance and policing high-risk models."
      },
      {
        "year": "2024",
        "title": "IndiaAI Mission Cabinet Approval",
        "detail": "\u20b910,372 crore ($1.25B) sanctioned to procure 10,000+ national GPUs for indigenous startups and academic labs."
      },
      {
        "year": "2026-27",
        "title": "AI Copyright & Content Licensing Norms",
        "detail": "Global statutory regimes establishing licensing royalties for training data ingested from copyrighted publications."
      }
    ],
    "budgetHighlights": "\u20b910,372 Cr IndiaAI Mission allocation, funding for 3 Centers of Excellence for AI in premier institutes, and tax incentives for green megawatt datacenters.",
    "marketContext": "Enterprise Generative AI is actively reducing corporate software development and customer service costs by 30-50%. Despite multiple compression from historical 40x P/E peaks to ~22x forward multiples for chip leaders, earnings growth remains at record highs.",
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
    "globalBenchmarking": {
      "metricLabel": "Private VC Investment in AI (US$ Billion, 2025)",
      "labels": [
        "USA",
        "China",
        "UK",
        "India",
        "Germany"
      ],
      "values": [
        142.0,
        31.5,
        9.8,
        6.2,
        4.5
      ]
    },
    "costStructure": {
      "labels": [
        "Gross Revenue",
        "GPU Cloud Compute & Electricity",
        "AI Research Salaries",
        "Data Licensing & Labeling",
        "Sales & Marketing",
        "EBITDA",
        "PAT"
      ],
      "values": [
        100,
        38,
        22,
        9,
        11,
        20,
        14
      ]
    },
    "workingCapital": {
      "inventoryDays": 0,
      "receivableDays": 35,
      "payableDays": 42,
      "cashConversionCycle": -7
    },
    "creditProfile": {
      "netDebtToEbitda": "Net Cash Positive",
      "creditRating": "AAA / Stable",
      "costOfDebt": "6.2%",
      "liquidityBuffer": "$95+ Bn Cash & Liquid Treasuries across Big Tech"
    },
    "stockPerformance": {
      "labels": [
        "Q1 24",
        "Q2 24",
        "Q3 24",
        "Q4 24",
        "Q1 25",
        "Q2 25",
        "Q3 25",
        "Q4 25"
      ],
      "sectorIndex": [
        100,
        145,
        195,
        260,
        320,
        375,
        430,
        485
      ],
      "benchmarkNifty": [
        100,
        106,
        114,
        121,
        127,
        134,
        140,
        146
      ],
      "return1Yr": "+95.2%",
      "return3Yr": "+385.0%",
      "volatilityBeta": "1.65x"
    },
    "customerSegmentation": {
      "labels": [
        "Enterprise IT & Software",
        "Financial Services & Risk",
        "Healthcare & Drug Discovery",
        "Consumer Internet & Media",
        "Industrial & Defense"
      ],
      "values": [
        38,
        24,
        16,
        12,
        10
      ],
      "incomeCohort": "Infrastructure and hardware capture 55% of the economic profit pool; application software captures 45%."
    },
    "demandSupplyGap": {
      "labels": [
        "2023",
        "2024",
        "2025",
        "2026E",
        "2027E"
      ],
      "demand": [
        100,
        180,
        310,
        520,
        840
      ],
      "supply": [
        75,
        135,
        240,
        420,
        710
      ],
      "utilizationRate": "98.2% Tier-1 GPU Cluster Utilization"
    },
    "techRadar": {
      "aiIntegration": "Very High",
      "roboticsAutomation": "High",
      "d2cOmnichannel": "Medium",
      "platformEcosystem": "Very High"
    },
    "swot": {
      "strengths": [
        "Exponential efficiency gains across programming, customer support, and drug discovery",
        "Dominant platform ecosystems creating lock-in via proprietary APIs and enterprise data connectors",
        "Unprecedented venture and corporate capital allocation driving rapid architectural breakthroughs"
      ],
      "weaknesses": [
        "Extreme physical power and cooling dependency threatening expansion timelines",
        "Commoditization risk for mid-tier open-source foundation models",
        "High unit inference costs for complex multi-modal multi-step agent reasoning"
      ],
      "opportunities": [
        "Sovereign Indian LLMs tailored to 22 official languages and diverse cultural contexts",
        "Physical AI integration combining foundation models with humanoid robotics and self-driving cars",
        "AI-native biology accelerating small molecule synthesis and synthetic biology"
      ],
      "threats": [
        "Severe regulatory bans or strict legal liabilities for algorithmic misinformation and hallucinations",
        "Geopolitical export controls restricting access to advanced lithography and GPU silicon",
        "Public grid power caps halting datacenter construction permits in key urban zones"
      ]
    },
    "news": [
      {
        "source": "Financial Times",
        "date": "Jul 2026",
        "title": "Hyperscaler AI infrastructure spending crosses $325 Billion milestone",
        "summary": "Microsoft, Amazon, and Google allocate over 40% of total capital outlays to advanced GPU datacenters."
      },
      {
        "source": "Reuters",
        "date": "Jun 2026",
        "title": "IndiaAI Mission shortlists 10,000 GPUs to empower domestic AI startups",
        "summary": "Subsidized compute access will be offered to healthtech, agri-tech, and educational LLM researchers."
      },
      {
        "source": "Bloomberg",
        "date": "May 2026",
        "title": "AI multiple compression stabilizes as enterprise software monetisation kicks in",
        "summary": "Forward P/E multiples reflect robust cash flow generation rather than speculative sentiment."
      }
    ],
    "dealTimeline": [
      {
        "date": "Jun 2026",
        "company": "Anthropic",
        "value": "$4.0B Extension",
        "buyer": "Amazon Corporate Expansion"
      },
      {
        "date": "Mar 2026",
        "company": "OpenAI",
        "value": "$10B Strategic Round",
        "buyer": "SoftBank, Thrive Capital & MGX"
      },
      {
        "date": "Dec 2025",
        "company": "Krutrim AI",
        "value": "$50M",
        "buyer": "Matrix Partners India"
      }
    ],
    "interviewAngles": [
      "Calculate the total electrical power required to operate an AI datacenter cluster with 100,000 H100/Blackwell GPUs including cooling overhead (PUE 1.2).",
      "How should a B2B SaaS company price its AI features: flat seat add-on ($20/user/mo) vs consumption-based token billing?",
      "Evaluate the economic moat of foundation model providers against open-source alternatives like Llama-3."
    ],
    "glossary": [
      {
        "term": "PUE (Power Usage Effectiveness)",
        "definition": "Ratio of total datacenter energy consumption to energy delivered to IT compute hardware; lower numbers indicate higher efficiency."
      },
      {
        "term": "Inference vs Training",
        "definition": "Training involves updating model weights using massive datasets; inference is the live execution of a trained model to generate output."
      },
      {
        "term": "Agentic AI",
        "definition": "Autonomous AI systems capable of executing multi-step complex workflows, using external tools and browsing, with minimal human intervention."
      }
    ],
    "sourceFile": "Individual Industry Decks/AI_industry.pdf",
    "sourcePath": "Individual Industry Decks/AI_industry.pdf",
    "sourceDoc": "AI_industry.pdf"
  },
  {
    "id": "aviation",
    "numId": 8,
    "name": "Airlines & Aviation",
    "sector": "Transportation & Logistics",
    "icon": "flight",
    "color": "#0284c7",
    "description": "India's aviation market is valued at ~US$ 14.78 billion in 2025 and is projected to reach US$ 26\u201329 billion by FY2030-31 (12% CAGR). India is the world's 3rd largest domestic aviation market behind the US and China, with annual domestic passenger volume reaching 164 million travelers and commercial fleets expanding from 700+ to 1,500+ aircraft by 2030.",
    "size": "US$ 14.78 Bn (2025) -> US$ 26-29 Bn (FY31)",
    "marketSize": "US$ 14.78 Bn (FY2025)",
    "cagr": "12.0% CAGR",
    "cagrValue": 12.0,
    "players": [
      "IndiGo (InterGlobe Aviation)",
      "Air India Group (Air India + Vistara)",
      "Akasa Air",
      "SpiceJet"
    ],
    "majorPlayers": [
      "IndiGo",
      "Air India Group",
      "Akasa Air",
      "SpiceJet"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "High",
      "supplierPower": "High",
      "substitutes": "Medium",
      "rivalry": "High"
    },
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
    "forcesReasoning": {
      "newEntrants": "Extreme capital intensity, airport landing slot shortages in Mumbai/Delhi, and multi-year aircraft delivery waitlists.",
      "buyerPower": "Online travel aggregators enable transparent fare comparison; passengers display near-zero brand loyalty on economy routes.",
      "supplierPower": "Duopolistic aircraft manufacturers (Airbus, Boeing), engine makers (Pratt & Whitney, CFM), and state-run oil refiners (ATF).",
      "substitutes": "Vande Bharat semi-high-speed express trains and upgraded access-controlled expressways compete effectively on short-haul routes (<500 km).",
      "rivalry": "Fierce competition between low-cost champion IndiGo (63% market share) and Tata-backed full-service Air India Group (28% share)."
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "Airlines_industry.pdf",
    "uploadedDate": "2026-08-01",
    "valueChain": {
      "inputs": "Aircraft Leasing (GECAS, Avolon), Aviation Turbine Fuel (ATF), Flight Crews & Airport Landing Slots",
      "operations": "Flight Dispatch, Rapid Turnaround Management (25-30 min), Line Maintenance & Crew Rostering",
      "distribution": "Direct Airline Websites/Apps, Online Travel Agencies (MakeMyTrip, EaseMyTrip) & Global Distribution Systems (GDS)",
      "endMarkets": "Domestic Leisure Flyers, Corporate Business Commuters, Non-Resident Indian Diaspora & Air Cargo",
      "marginDriver": "Ancillary Revenues (Seat Selection, Excess Baggage, In-flight Meals) & Route Capacity Discipline",
      "bottleneck": "Pratt & Whitney Engine Groundings, Metro Airport Congestion & High State Taxes on ATF"
    },
    "regulatoryTimeline": [
      {
        "year": "2016",
        "title": "UDAN (RCS) Scheme Launch",
        "detail": "Regional connectivity initiative subsidizing unserved airstrips and capping fares for 1-hour flights."
      },
      {
        "year": "2022",
        "title": "Air India Privatization to Tata",
        "detail": "Tata Sons acquires national carrier, initiating fleet consolidation and merger with Vistara."
      },
      {
        "year": "2024",
        "title": "Revised Pilot Duty Time (FDTL) Norms",
        "detail": "DGCA mandates increased weekly rest periods and nighttime flight caps to address pilot fatigue."
      },
      {
        "year": "2026-27",
        "title": "New Green Airport Openings",
        "detail": "Commercial commissioning of Navi Mumbai International Airport (NMIA) and Noida Jewar Airport relieving metro congestion."
      }
    ],
    "budgetHighlights": "Capital allocation for airport modernization under UDAN 5.0, reduction of VAT on Aviation Turbine Fuel (ATF) in 28 states, and tax holidays for aircraft leasing companies operating in GIFT City IFSC.",
    "marketContext": "IndiGo and Air India form a virtual duopoly controlling 91%+ of domestic passenger traffic. Indian carriers hold a record order book of over 1,500 new aircraft with Airbus and Boeing scheduled for delivery through 2035.",
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
    "globalBenchmarking": {
      "metricLabel": "Commercial Aircraft Fleet Size",
      "labels": [
        "USA",
        "China",
        "India (Current)",
        "India (2030E)",
        "UK"
      ],
      "values": [
        6800,
        4200,
        720,
        1550,
        950
      ]
    },
    "costStructure": {
      "labels": [
        "Gross Revenue",
        "Aviation Turbine Fuel (ATF)",
        "Aircraft Lease Rentals",
        "Airport Charges & Navigation",
        "Employee Wages",
        "EBITDA",
        "PAT"
      ],
      "values": [
        100,
        41,
        19,
        11,
        10,
        19,
        7
      ]
    },
    "workingCapital": {
      "inventoryDays": 0,
      "receivableDays": 8,
      "payableDays": 46,
      "cashConversionCycle": -38
    },
    "creditProfile": {
      "netDebtToEbitda": "1.2x (IndiGo Standalone)",
      "creditRating": "AA- / Stable",
      "costOfDebt": "7.9%",
      "liquidityBuffer": "\u20b934,000+ Cr Cash Balance at IndiGo"
    },
    "stockPerformance": {
      "labels": [
        "Q1 24",
        "Q2 24",
        "Q3 24",
        "Q4 24",
        "Q1 25",
        "Q2 25",
        "Q3 25",
        "Q4 25"
      ],
      "sectorIndex": [
        100,
        122,
        148,
        178,
        205,
        235,
        268,
        305
      ],
      "benchmarkNifty": [
        100,
        106,
        114,
        121,
        127,
        134,
        140,
        146
      ],
      "return1Yr": "+52.4%",
      "return3Yr": "+205.0%",
      "volatilityBeta": "1.24x"
    },
    "customerSegmentation": {
      "labels": [
        "Domestic Economy Leisure",
        "Corporate Business Commuters",
        "Short-Haul International",
        "Long-Haul International"
      ],
      "values": [
        58,
        24,
        12,
        6
      ],
      "incomeCohort": "IndiGo handles 63% domestic market share; Air India Group handles 28% domestic and 55% international Indian carrier traffic."
    },
    "demandSupplyGap": {
      "labels": [
        "2023",
        "2024",
        "2025",
        "2026E",
        "2027E"
      ],
      "demand": [
        152,
        168,
        185,
        208,
        232
      ],
      "supply": [
        140,
        155,
        172,
        195,
        220
      ],
      "utilizationRate": "88.6% Passenger Load Factor (PLF)"
    },
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Low",
      "d2cOmnichannel": "High",
      "platformEcosystem": "Medium"
    },
    "swot": {
      "strengths": [
        "IndiGo's world-class cost leadership, 25-minute aircraft turnarounds, and robust cash reserves",
        "Air India's extensive international long-haul bilateral flight rights and premium fleet upgrades",
        "Favorable long-term demographic tailwinds in the world's most populous nation"
      ],
      "weaknesses": [
        "Vulnerability to geopolitical oil price shocks and domestic currency depreciation",
        "High dependence on aircraft engine OEMs suffering persistent supply chain delays",
        "Extremely thin margins susceptible to regulatory ticket pricing caps during festive peaks"
      ],
      "opportunities": [
        "Direct non-stop long-haul connectivity to Europe and North America capturing premium flyers",
        "Establishment of indigenous Maintenance, Repair & Overhaul (MRO) facilities in India",
        "Rapid adoption of Sustainable Aviation Fuel (SAF) to mitigate future carbon border levies"
      ],
      "threats": [
        "High-speed rail expansion (Vande Bharat sleeper and bullet train corridors) eroding short-haul traffic",
        "New DGCA pilot duty time limitations increasing airline crew operating costs by 10-15%",
        "Airport landing fee hikes at newly privatized metro airport terminals"
      ]
    },
    "news": [
      {
        "source": "Economic Times",
        "date": "Jul 2026",
        "title": "IndiGo reports record annual profit of \u20b98,172 Cr on disciplined yields",
        "summary": "Passenger load factors held above 88% while international route expansion contributed 28% of incremental revenue."
      },
      {
        "source": "Mint",
        "date": "Jun 2026",
        "title": "Navi Mumbai Airport begins commercial calibration flights",
        "summary": "Initial Phase-1 capacity of 20 million passengers per annum scheduled to relieve Mumbai's severe congestion."
      },
      {
        "source": "Business Standard",
        "date": "May 2026",
        "title": "Air India completes full operational integration with Vistara",
        "summary": "Consolidated full-service airline deploys unified loyalty program and standardized premium cabin interiors."
      }
    ],
    "dealTimeline": [
      {
        "date": "Mar 2026",
        "company": "Air India Group",
        "value": "Consolidated Merger",
        "buyer": "Tata Sons & Singapore Airlines"
      },
      {
        "date": "Nov 2025",
        "company": "IndiGo (InterGlobe)",
        "value": "30 Airbus A350 Orders",
        "buyer": "Airbus Commercial Aircraft"
      },
      {
        "date": "Jun 2025",
        "company": "Akasa Air",
        "value": "$150M Equity Round",
        "buyer": "Premji Invest & Claymore"
      }
    ],
    "interviewAngles": [
      "If crude oil prices surge from $75 to $95 per barrel, by what percentage must an airline increase its average ticket yield to keep EBITDA margin constant?",
      "Evaluate the profitability of operating a widebody aircraft (Airbus A350) on non-stop Delhi-New York vs narrowbody (A321XLR) on Delhi-London routes.",
      "Explain how an airline uses sale-and-leaseback transactions to generate immediate cash flow from new aircraft deliveries."
    ],
    "glossary": [
      {
        "term": "ASK / RASK",
        "definition": "Available Seat Kilometer (capacity) and Revenue per Available Seat Kilometer \u2014 the benchmark unit revenue metric in aviation."
      },
      {
        "term": "CASK (Cost per ASK)",
        "definition": "Operating cost divided by Available Seat Kilometers; excluding fuel gives CASK-ex-fuel, the truest measure of cost discipline."
      },
      {
        "term": "Passenger Load Factor (PLF)",
        "definition": "The percentage of available passenger seating capacity filled with revenue-paying travelers."
      }
    ],
    "sourceFile": "Individual Industry Decks/Airlines_industry.pdf",
    "sourcePath": "Individual Industry Decks/Airlines_industry.pdf",
    "sourceDoc": "Airlines_industry.pdf"
  },
  {
    "id": "asset-management",
    "numId": 9,
    "name": "Asset Management",
    "sector": "Financial Services",
    "icon": "account_balance_wallet",
    "color": "#1e3a8a",
    "description": "The Indian Asset Management (Mutual Fund) industry has witnessed an unprecedented financialization wave, with Assets Under Management (AUM) expanding from \u20b924.48 lakh crore in FY19 to \u20b973.73 lakh crore in FY26 (15% CAGR). The sector is propelled by monthly SIP inflows exceeding \u20b923,000 crore, 180+ million investor folios, and an equity AUM proportion exceeding 56%.",
    "size": "\u20b973.73 Lakh Cr AUM (FY26) (3x in 7 Years)",
    "marketSize": "\u20b973.73 Lakh Cr AUM (FY26)",
    "cagr": "15.0% CAGR",
    "cagrValue": 15.0,
    "players": [
      "SBI Mutual Fund",
      "ICICI Prudential AMC",
      "HDFC AMC",
      "Nippon India Mutual Fund",
      "Kotak Mahindra AMC",
      "UTI AMC"
    ],
    "majorPlayers": [
      "SBI MF",
      "ICICI Pru AMC",
      "HDFC AMC",
      "Nippon India",
      "Kotak MF"
    ],
    "forces": {
      "newEntrants": "Medium",
      "buyerPower": "High",
      "supplierPower": "Low",
      "substitutes": "High",
      "rivalry": "High"
    },
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
    "forcesReasoning": {
      "newEntrants": "Fintech platforms (Groww, Zerodha, AngelOne) have secured AMC licenses, but institutional brand trust and distribution moats favor incumbents.",
      "buyerPower": "SEBI-mandated Total Expense Ratio (TER) caps and direct digital plans reduce fees; investors switch schemes based on trailing returns.",
      "supplierPower": "Financial market data providers and benchmark index licensors have modest power; fund management talent is readily mobile.",
      "substitutes": "Direct retail equity investing, Portfolio Management Services (PMS), Alternate Investment Funds (AIFs), real estate, and physical gold.",
      "rivalry": "Intense competition on fund performance quartile rankings, distributor payout incentives, and passive index fund ETF pricing."
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "Asset Management_industry.pdf",
    "uploadedDate": "2026-08-01",
    "valueChain": {
      "inputs": "Investor Savings Capital, Custody Services, Market Research Feeds & Core Banking APIs",
      "operations": "Portfolio Construction, Quantitative Risk Modeling, Compliance Filings & NAV Calculation",
      "distribution": "Bank Branches (Associate & Non-Associate), Independent MFDs, Fintech Discount Brokers & National Distributors",
      "endMarkets": "Retail Monthly SIP Savers, High Net-Worth Individuals (HNIs), Family Offices & Corporate Treasuries",
      "marginDriver": "Equity AUM Asset Allocation (65-75 bps net management fee) & High-Retention SIP Books",
      "bottleneck": "SEBI Regulatory Total Expense Ratio (TER) Slabs & Rising Customer Acquisition Costs"
    },
    "regulatoryTimeline": [
      {
        "year": "2018",
        "title": "Categorization & Rationalization of Schemes",
        "detail": "SEBI introduces strict scheme categorization to prevent duplicate offerings across asset classes."
      },
      {
        "year": "2019",
        "title": "TER Slab Revisions",
        "detail": "Regulator caps Total Expense Ratios with tiered reductions as fund AUM scales up."
      },
      {
        "year": "2023",
        "title": "Debt Mutual Fund Tax Parity",
        "detail": "Indexation benefits removed for debt funds, accelerating retail capital migration into equity schemes."
      },
      {
        "year": "2026-27",
        "title": "New Asset Class & Performance Fee Framework",
        "detail": "SEBI introduces a high-ticket hybrid asset class between mutual funds and PMS with flexible performance fees."
      }
    ],
    "budgetHighlights": "Continuity in long-term capital gains tax structures, incentives for retail pension and NPS mutual fund allocations, and streamlined KYC frameworks for non-resident Indian investors.",
    "marketContext": "India's mutual fund AUM to GDP ratio stands at ~19%, leaving significant headroom compared to the global average of 75% and the US at 130%. Distribution is evenly split between direct digital channels (45.4%) and mutual fund distributors (45.0%).",
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
    "globalBenchmarking": {
      "metricLabel": "Mutual Fund AUM to GDP Ratio (%)",
      "labels": [
        "USA",
        "UK",
        "Global Avg",
        "China",
        "India"
      ],
      "values": [
        132.0,
        78.0,
        75.0,
        24.0,
        19.2
      ]
    },
    "costStructure": {
      "labels": [
        "Management Fees",
        "Distributor Commissions",
        "Employee & Fund Managers",
        "Technology & Admin",
        "Marketing & Custody",
        "EBITDA",
        "PAT"
      ],
      "values": [
        100,
        26,
        15,
        6,
        8,
        45,
        34
      ]
    },
    "workingCapital": {
      "inventoryDays": 0,
      "receivableDays": 12,
      "payableDays": 18,
      "cashConversionCycle": -6
    },
    "creditProfile": {
      "netDebtToEbitda": "Net Cash Positive",
      "creditRating": "AAA / Stable",
      "costOfDebt": "N/A (Zero Debt)",
      "liquidityBuffer": "\u20b98,500 Cr Liquid Capital & Seed Investments"
    },
    "stockPerformance": {
      "labels": [
        "Q1 24",
        "Q2 24",
        "Q3 24",
        "Q4 24",
        "Q1 25",
        "Q2 25",
        "Q3 25",
        "Q4 25"
      ],
      "sectorIndex": [
        100,
        118,
        138,
        162,
        190,
        222,
        258,
        298
      ],
      "benchmarkNifty": [
        100,
        106,
        114,
        121,
        127,
        134,
        140,
        146
      ],
      "return1Yr": "+56.4%",
      "return3Yr": "+198.0%",
      "volatilityBeta": "1.18x"
    },
    "customerSegmentation": {
      "labels": [
        "Retail SIP & Lump-Sum",
        "High Net-Worth (HNIs)",
        "Corporate Treasuries",
        "Institutional & Pension Funds"
      ],
      "values": [
        52,
        26,
        14,
        8
      ],
      "incomeCohort": "Direct digital plans account for 45.4% of AUM; Non-associate independent distributors account for 45.0%."
    },
    "demandSupplyGap": {
      "labels": [
        "2023",
        "2024",
        "2025",
        "2026E",
        "2027E"
      ],
      "demand": [
        48,
        58,
        72,
        88,
        105
      ],
      "supply": [
        48,
        58,
        72,
        88,
        105
      ],
      "utilizationRate": "100% Capital Deployment Velocity"
    },
    "techRadar": {
      "aiIntegration": "High",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "Very High",
      "platformEcosystem": "High"
    },
    "swot": {
      "strengths": [
        "Annuity-like monthly SIP cash flows providing downside stability during market downturns",
        "Extraordinary return on equity (ROE >30%) driven by asset-light operating structures",
        "High barriers to entry anchored in decades of institutional brand equity and multi-tier distributor networks"
      ],
      "weaknesses": [
        "Revenues directly correlated to underlying equity market mark-to-market performance",
        "Lower profitability on institutional liquid and debt funds (net fees of 5-10 bps vs 65-75 bps on equity)",
        "Continuous regulatory scrutiny on expense ratios and distributor trail commissions"
      ],
      "opportunities": [
        "Growth in alternative investment funds (AIFs) and private credit mandates for wealthy clients",
        "Expansion of pension and retirement products under the National Pension System",
        "Offshore global wealth allocation for Indian families via Liberalised Remittance Scheme (LRS) funds"
      ],
      "threats": [
        "Prolonged equity bear market causing retail SIP cancellations and redemption pressure",
        "Direct equity and algorithmic trading platforms diverting young retail investors away from mutual funds",
        "Further regulatory cuts to maximum allowable Total Expense Ratios"
      ]
    },
    "news": [
      {
        "source": "Economic Times",
        "date": "Jul 2026",
        "title": "Monthly SIP inflows breach \u20b923,000 Crore record high",
        "summary": "Retail investors contributed over \u20b92.75 lakh crore through systematic investment plans over the last 12 months."
      },
      {
        "source": "Mint",
        "date": "Jun 2026",
        "title": "Mutual Fund AUM crosses \u20b973.7 Lakh Crore milestone",
        "summary": "Equity schemes now represent over 56% of total industry assets, up from 38% five years ago."
      },
      {
        "source": "Business Standard",
        "date": "May 2026",
        "title": "SEBI notifies regulatory sandbox for new intermediate asset class",
        "summary": "Hybrid investment vehicles bridging the gap between mutual funds and portfolio management services set to launch."
      }
    ],
    "dealTimeline": [
      {
        "date": "Feb 2026",
        "company": "Groww Mutual Fund",
        "value": "AUM \u20b95,000 Cr Milestone",
        "buyer": "Billionbrains Garage"
      },
      {
        "date": "Nov 2025",
        "company": "IDFC AMC Integration",
        "value": "\u20b94,500 Cr",
        "buyer": "Bandhan Financial Holdings"
      },
      {
        "date": "Jul 2025",
        "company": "L&T Investment Management",
        "value": "\u20b93,250 Cr",
        "buyer": "HSBC Asset Management"
      }
    ],
    "interviewAngles": [
      "An AMC has \u20b92,00,000 Cr in equity AUM earning 70 bps net fee, and \u20b91,00,000 Cr in debt AUM earning 15 bps. If equity markets correct by 15% and equity AUM drops proportionally, calculate the impact on annual revenue.",
      "Compare the long-term unit economics of acquiring a retail customer via an Independent Financial Advisor (IFA) paying trail commissions vs acquiring directly through a fintech app.",
      "Why is the price-to-earnings (P/E) multiple for pure-play listed AMCs in India significantly higher than asset managers in the US or Europe?"
    ],
    "glossary": [
      {
        "term": "AUM",
        "definition": "Assets Under Management \u2014 the total market value of investments that an asset management firm manages on behalf of clients."
      },
      {
        "term": "SIP",
        "definition": "Systematic Investment Plan \u2014 a facility allowing investors to invest a fixed amount periodically into a mutual fund scheme."
      },
      {
        "term": "TER",
        "definition": "Total Expense Ratio \u2014 the annual percentage of fund assets charged by the AMC to cover management fees, distribution, and operational expenses."
      }
    ],
    "sourceFile": "Individual Industry Decks/Asset Management_industry.pdf",
    "sourcePath": "Individual Industry Decks/Asset Management_industry.pdf",
    "sourceDoc": "Asset Management_industry.pdf"
  },
  {
    "id": "automobile",
    "numId": 10,
    "name": "Automobile",
    "sector": "Automotive",
    "icon": "directions_car",
    "color": "#0f766e",
    "description": "India is the 3rd largest automobile market globally, generating US$ 213.74 billion in projected revenue by FY2027E with total domestic sales of 25.6 million vehicles in FY24 rising toward 28+ million in FY26. The sector is undergoing a structural premiumisation wave (SUVs account for >52% of passenger vehicle sales) alongside an accelerating electric vehicle transition.",
    "size": "US$ 213.74 Bn (FY27E) / 25.6M Vehicles Sold",
    "marketSize": "US$ 213.74 Bn (FY2027E)",
    "cagr": "5.5% CAGR (Volume) / 11% (Value)",
    "cagrValue": 5.5,
    "players": [
      "Maruti Suzuki",
      "Hyundai India",
      "Tata Motors",
      "Mahindra & Mahindra",
      "Toyota Kirloskar",
      "Bajaj Auto"
    ],
    "majorPlayers": [
      "Maruti Suzuki",
      "Hyundai India",
      "Tata Motors",
      "Mahindra & Mahindra"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "Medium",
      "supplierPower": "Medium",
      "substitutes": "Low",
      "rivalry": "High"
    },
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
    "forcesReasoning": {
      "newEntrants": "Massive capital expenditure required for stamping, robotic welding lines, engine/battery tooling, and 1,000+ dealer networks.",
      "buyerPower": "Consumers have vast model choices across compact, midsize, and luxury SUVs, but brand resale value and reliability drive decisions.",
      "supplierPower": "Tier-1 auto component makers have moderate bargaining power; semiconductor and rare-earth magnet suppliers hold concentrated leverage.",
      "substitutes": "Public transit and ride-hailing exist, but personal mobility aspirations and suburban commuting make car ownership irreplaceable.",
      "rivalry": "Fierce competition among domestic champions (Tata, Mahindra) and global OEMs on ADAS safety features, infotainment, and powertrain diversity."
    },
    "trend": "up",
    "outlook": "Stable",
    "uploadedDoc": "Automobile_industry.pdf",
    "uploadedDate": "2026-08-01",
    "valueChain": {
      "inputs": "Automotive Steel, Aluminum, Battery Cells, Microcontrollers, Wiring Harnesses & Rubber Tires",
      "operations": "Robotic Body Stamping, Automated Paint Shops, Engine/Transmission Assembly & Rigorous Quality Audits",
      "distribution": "Authorized Dealer Showrooms, Commercial Fleet Desks, Digital Configurator Portals & Global Export Docks",
      "endMarkets": "Urban Middle Class, Rural Farm Landowners (Tractors/SUVs), Fleet Operators & Export Markets (Africa, LatAm)",
      "marginDriver": "High-Margin Mid-to-Large SUVs (12-16% EBITDA margin), Aftermarket Spare Parts & Extended Warranties",
      "bottleneck": "Automotive Semiconductor Lead Times & Import Dependence for Battery Cells and Rare Earth Minerals"
    },
    "regulatoryTimeline": [
      {
        "year": "2020",
        "title": "BS-VI Emission Norms Leapfrog",
        "detail": "India transitions directly from BS-IV to BS-VI, reducing nitrogen oxide emissions by 70% in diesel and 25% in petrol."
      },
      {
        "year": "2023",
        "title": "Bharat NCAP Safety Crash Test Ratings",
        "detail": "Indigenous car crash safety assessment rating program launched to encourage 5-star structural integrity."
      },
      {
        "year": "2024",
        "title": "Electric Vehicle Policy 2024",
        "detail": "Import tariff concessions on EVs for global manufacturers committing minimum $500M local investment within 3 years."
      },
      {
        "year": "2026-27",
        "title": "CAFE-3 Corporate Fuel Economy Norms",
        "detail": "Stricter carbon dioxide fleet emission limits penalizing heavy ICE lineups and mandating EV/hybrid quotas."
      }
    ],
    "budgetHighlights": "PLI Scheme for Automobile and Auto Components (\u20b925,938 Cr), incentives for advanced chemistry battery cells (\u20b918,100 Cr), and scrap page policy incentives for vehicles over 15 years old.",
    "marketContext": "Passenger vehicle sales in India reached an all-time record of 4.2 million units in FY24, led by sport utility vehicles (SUVs). Two-wheeler sales are rebounding toward 19 million units, while commercial vehicles benefit from national highway infrastructure investments.",
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
    "globalBenchmarking": {
      "metricLabel": "Passenger Cars per 1,000 Inhabitants",
      "labels": [
        "USA",
        "Germany",
        "Japan",
        "China",
        "India"
      ],
      "values": [
        860,
        580,
        500,
        220,
        36
      ]
    },
    "costStructure": {
      "labels": [
        "Ex-Showroom Revenue",
        "Bill of Materials (BOM)",
        "Dealer Margins & Commissions",
        "Employee Salaries",
        "Marketing & D&A",
        "EBITDA",
        "PAT"
      ],
      "values": [
        100,
        68,
        5,
        7,
        7,
        13,
        8
      ]
    },
    "workingCapital": {
      "inventoryDays": 24,
      "receivableDays": 14,
      "payableDays": 64,
      "cashConversionCycle": -26
    },
    "creditProfile": {
      "netDebtToEbitda": "Net Cash Positive (Auto OEMs)",
      "creditRating": "AAA / Stable",
      "costOfDebt": "7.3%",
      "liquidityBuffer": "\u20b945,000+ Cr Cumulative Cash Reserves at Maruti & Tata Motors"
    },
    "stockPerformance": {
      "labels": [
        "Q1 24",
        "Q2 24",
        "Q3 24",
        "Q4 24",
        "Q1 25",
        "Q2 25",
        "Q3 25",
        "Q4 25"
      ],
      "sectorIndex": [
        100,
        116,
        134,
        156,
        180,
        208,
        238,
        270
      ],
      "benchmarkNifty": [
        100,
        106,
        114,
        121,
        127,
        134,
        140,
        146
      ],
      "return1Yr": "+44.2%",
      "return3Yr": "+170.0%",
      "volatilityBeta": "1.08x"
    },
    "customerSegmentation": {
      "labels": [
        "Two-Wheelers (Commuter & Premium)",
        "Passenger Cars & SUVs",
        "Commercial Vehicles (LCV/HCV)",
        "Three-Wheelers & Tractors"
      ],
      "values": [
        74,
        16,
        5,
        5
      ],
      "incomeCohort": "Maruti Suzuki leads PVs with 41% share; Hyundai India holds 14.5%; Tata Motors holds 13.8%; Mahindra holds 11.5%."
    },
    "demandSupplyGap": {
      "labels": [
        "2023",
        "2024",
        "2025",
        "2026E",
        "2027E"
      ],
      "demand": [
        24,
        26,
        28,
        30,
        33
      ],
      "supply": [
        27,
        29,
        31,
        33,
        36
      ],
      "utilizationRate": "82.4% Assembly Plant Utilization"
    },
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Very High",
      "d2cOmnichannel": "Medium",
      "platformEcosystem": "High"
    },
    "swot": {
      "strengths": [
        "World-class manufacturing scale with extensive local component vendor ecosystems",
        "Insurmountable nationwide distribution and service footprints with thousands of touchpoints",
        "Strong brand equity and customer trust in domestic safety champions (Tata Motors, Mahindra)"
      ],
      "weaknesses": [
        "Low motorization density of 36 cars per 1,000 people highlighting mass affordability bottlenecks",
        "Heavy reliance on imported lithium cells and semiconductor microcontrollers",
        "High tax burden on passenger vehicles compared to other emerging markets"
      ],
      "opportunities": [
        "Accelerating electric passenger vehicle market with affordable battery platforms under \u20b910 lakh",
        "Scaling automotive exports to the Middle East, Southeast Asia, and Latin America",
        "Monetization of connected vehicle telematics, software upgrades, and subscription services"
      ],
      "threats": [
        "CAFE-3 compliance penalties if internal combustion fleet emissions fail to meet targets",
        "Aggressive pricing competition from Chinese EV makers expanding in neighboring Asian markets",
        "Fluctuations in domestic steel and aluminum commodity input costs"
      ]
    },
    "news": [
      {
        "source": "Economic Times",
        "date": "Jul 2026",
        "title": "Mahindra & Mahindra reports record SUV booking backlog of 200,000 units",
        "summary": "Flagship Thar, Scorpio-N, and XUV700 continue to drive 18%+ operating margins."
      },
      {
        "source": "Mint",
        "date": "Jun 2026",
        "title": "Hyundai Motor India executes record \u20b927,870 Cr mega IPO",
        "summary": "Largest public market listing in Indian history to fund local EV battery assembly and plant modernization."
      },
      {
        "source": "Business Standard",
        "date": "May 2026",
        "title": "SUV share in Indian passenger car sales crosses 52% landmark",
        "summary": "Consumer preference decisively shifts away from entry-level hatchbacks toward compact crossovers."
      }
    ],
    "dealTimeline": [
      {
        "date": "Oct 2025",
        "company": "Hyundai Motor India",
        "value": "\u20b927,870 Cr IPO",
        "buyer": "Public Listing"
      },
      {
        "date": "Aug 2025",
        "company": "Tata Passenger Electric Mobility",
        "value": "$1.0B Investment",
        "buyer": "TPG Rise Climate"
      },
      {
        "date": "Feb 2025",
        "company": "Mahindra Electric Auto",
        "value": "\u20b9875 Cr Tranche",
        "buyer": "Temasek Holdings"
      }
    ],
    "interviewAngles": [
      "A mid-segment SUV has a retail ex-showroom price of \u20b914 Lakh. Bill of materials is 68%, dealer margin is 4.5%, and GST+cess is 31%. Calculate the OEM's gross profit in rupees.",
      "Analyze the strategic trade-offs for Maruti Suzuki between prioritizing Compressed Natural Gas (CNG) hybrids vs jumping directly into pure Battery Electric Vehicles (BEVs).",
      "Why has the entry-level hatchback market shrunk from 40% of sales to under 20% in India over the past five years?"
    ],
    "glossary": [
      {
        "term": "BOM",
        "definition": "Bill of Materials \u2014 the comprehensive inventory of raw materials, assemblies, and components required to manufacture a vehicle."
      },
      {
        "term": "CAFE Norms",
        "definition": "Corporate Average Fuel Economy norms \u2014 regulatory limits requiring an automaker's fleet-wide carbon emissions to stay below strict targets."
      },
      {
        "term": "Bharat NCAP",
        "definition": "New Car Assessment Program \u2014 India's independent automotive safety rating system grading vehicles from 1 to 5 stars on crash protection."
      }
    ],
    "sourceFile": "Individual Industry Decks/Automobile_industry.pdf",
    "sourcePath": "Individual Industry Decks/Automobile_industry.pdf",
    "sourceDoc": "Automobile_industry.pdf"
  },
  {
    "id": "banking",
    "numId": 11,
    "name": "Banking",
    "sector": "Financial Services",
    "icon": "account_balance",
    "color": "#1e40af",
    "description": "India's banking system oversees assets exceeding US$ 3.36 Trillion (\u20b9206 lakh crore), split between public sector banks (US$ 2,006 Bn) and private banks (US$ 1,355 Bn). The sector is experiencing its strongest health in over a decade with Gross NPAs dropping to 2.6-2.8%, sustained double-digit credit expansion (13-15% YoY), and digital payment leadership via UPI processing 20.4 billion monthly transactions worth \u20b926.84 lakh crore.",
    "size": "US$ 3.36 Tn Assets / \u20b9206 Lakh Cr",
    "marketSize": "US$ 3.36 Tn (Assets FY26)",
    "cagr": "14.0% Credit Growth",
    "cagrValue": 14.0,
    "players": [
      "HDFC Bank",
      "State Bank of India (SBI)",
      "ICICI Bank",
      "Kotak Mahindra Bank",
      "Axis Bank",
      "Bank of Baroda"
    ],
    "majorPlayers": [
      "HDFC Bank",
      "SBI",
      "ICICI Bank",
      "Kotak Mahindra",
      "Axis Bank"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "Medium",
      "supplierPower": "Low",
      "substitutes": "High",
      "rivalry": "High"
    },
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
    "forcesReasoning": {
      "newEntrants": "Strict RBI universal banking licenses, statutory reserve requirements (SLR/CRR), and high initial capital thresholds.",
      "buyerPower": "Borrowers compare loan rates and processing fees, but high switching friction exists on corporate banking relationships.",
      "supplierPower": "Retail depositors provide funding; large institutional depositors negotiate bulk deposit rates during tight liquidity.",
      "substitutes": "NBFCs, mutual funds, corporate bond markets, and peer-to-peer fintech lending apps offer credit alternatives.",
      "rivalry": "Intense competition among premier private lenders (HDFC Bank, ICICI Bank) and state lenders (SBI) for prime retail loans."
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "Banking_industry.pdf",
    "uploadedDate": "2026-08-01",
    "valueChain": {
      "inputs": "CASA Deposits, Fixed Term Deposits, Wholesale Refinance & Central Bank Liquidity",
      "operations": "Credit Risk Underwriting, Algorithmic Loan Origination, Treasury Operations & Collections",
      "distribution": "Physical Bank Branches, Automated Teller Machines (ATMs), NetBanking & Mobile Banking Portals",
      "endMarkets": "Retail Home/Auto Borrowers, MSME Commercial Enterprises, Agriculture Priority Sectors & Corporate Conglomerates",
      "marginDriver": "Net Interest Margin (NIM 3.4-3.9%), Credit Card Fee Interchange & Wealth Advisory Cross-Sell",
      "bottleneck": "Deposit Growth Lagging Credit Demand & Elevated Cost of Retail Funds"
    },
    "regulatoryTimeline": [
      {
        "year": "2016",
        "title": "Insolvency and Bankruptcy Code (IBC)",
        "detail": "Time-bound NCLT resolution framework transforming NPA recovery and corporate debt discipline."
      },
      {
        "year": "2020",
        "title": "Account Aggregator Framework",
        "detail": "RBI-governed financial data-sharing consent architecture enabling collateral-free digital MSME loans."
      },
      {
        "year": "2022",
        "title": "Digital Lending Guidelines",
        "detail": "Strict regulations curbing predatory loan apps by mandating all loan flows directly between bank and borrower accounts."
      },
      {
        "year": "2026-27",
        "title": "Expected Credit Loss (ECL) Norms",
        "detail": "Transition to forward-looking provision provisioning models aligned with global IFRS-9 accounting standards."
      }
    ],
    "budgetHighlights": "Recapitalization buffers, ongoing priority sector lending targets, sovereign green bond issuance frameworks, and expansion of GIFT City offshore banking units.",
    "marketContext": "India's banking system has staged a historic asset quality turnaround with Gross NPAs dropping to a multi-decade low of 2.6-2.8% and Net NPAs below 0.6%. In February 2026 alone, UPI processed 20.39 billion transactions worth \u20b926.84 lakh crore across 694 live banks.",
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
    "globalBenchmarking": {
      "metricLabel": "Bank Credit to GDP Ratio (%)",
      "labels": [
        "India",
        "China",
        "USA",
        "UK",
        "Global Avg"
      ],
      "values": [
        57.5,
        185.0,
        216.0,
        165.0,
        140.0
      ]
    },
    "costStructure": {
      "labels": [
        "Total Interest Income",
        "Interest Expended (Deposits)",
        "Employee & Branch Opex",
        "Provisions & Contingencies",
        "Taxation",
        "Operating Profit (PPOP)",
        "Net Profit (PAT)"
      ],
      "values": [
        100,
        52,
        21,
        6,
        5,
        27,
        16
      ]
    },
    "workingCapital": {
      "inventoryDays": 0,
      "receivableDays": 15,
      "payableDays": 12,
      "cashConversionCycle": 3
    },
    "creditProfile": {
      "netDebtToEbitda": "N/A (CRAR: 16.8%)",
      "creditRating": "AAA / Stable",
      "costOfDebt": "6.8%",
      "liquidityBuffer": "CRAR 17.2% vs 11.5% Regulatory Minimum"
    },
    "stockPerformance": {
      "labels": [
        "Q1 24",
        "Q2 24",
        "Q3 24",
        "Q4 24",
        "Q1 25",
        "Q2 25",
        "Q3 25",
        "Q4 25"
      ],
      "sectorIndex": [
        100,
        109,
        120,
        134,
        150,
        168,
        188,
        210
      ],
      "benchmarkNifty": [
        100,
        106,
        114,
        121,
        127,
        134,
        140,
        146
      ],
      "return1Yr": "+26.8%",
      "return3Yr": "+110.0%",
      "volatilityBeta": "1.02x"
    },
    "customerSegmentation": {
      "labels": [
        "Retail Loans (Mortgages/Auto/Personal)",
        "Large Corporate Lending",
        "MSME & Business Banking",
        "Agriculture & Rural Priority"
      ],
      "values": [
        38,
        30,
        20,
        12
      ],
      "incomeCohort": "Public sector banks hold 60% of total industry assets; Private sector banks account for 40% of assets and 58% of incremental credit."
    },
    "demandSupplyGap": {
      "labels": [
        "2023",
        "2024",
        "2025",
        "2026E",
        "2027E"
      ],
      "demand": [
        130,
        148,
        170,
        195,
        224
      ],
      "supply": [
        128,
        145,
        165,
        188,
        215
      ],
      "utilizationRate": "76.4% Credit-Deposit Ratio"
    },
    "techRadar": {
      "aiIntegration": "Very High",
      "roboticsAutomation": "High",
      "d2cOmnichannel": "Very High",
      "platformEcosystem": "Very High"
    },
    "swot": {
      "strengths": [
        "Cleanest balance sheets in 15 years with Gross NPAs under 3% and robust capital adequacy",
        "Unrivaled sovereign-backed digital public infrastructure (UPI, Aadhaar, Account Aggregator)",
        "Strong low-cost CASA deposit franchises among top-tier institutions"
      ],
      "weaknesses": [
        "Competition from capital markets and mutual funds luring away retail household deposits",
        "Legacy core banking system technical debt in select public sector banking units",
        "Pressure on fee income due to caps on interchange and digital transaction charges"
      ],
      "opportunities": [
        "Unlocking formal credit for 60+ million MSMEs through cash-flow-based digital lending",
        "Cross-selling wealth management, term life, and mutual funds to expanding affluent accounts",
        "Offshore banking and trade finance intermediation through GIFT City IFSC"
      ],
      "threats": [
        "Prolonged deposit mobilization deficit constraining profitable lending volumes",
        "Asset quality deterioration in unsecured personal loans and credit cards if macro growth cools",
        "Disruption of merchant payments by decentralized fintech payment protocols"
      ]
    },
    "news": [
      {
        "source": "Economic Times",
        "date": "Jul 2026",
        "title": "State Bank of India posts record quarterly net profit of \u20b918,400 Crore",
        "summary": "Asset quality improves further with Gross NPA dropping to 2.15% alongside 15.2% credit growth."
      },
      {
        "source": "Mint",
        "date": "Jun 2026",
        "title": "UPI logs record 20.4 Billion monthly transactions worth \u20b926.8 Lakh Crore",
        "summary": "NPCI expands international QR code payment agreements across Southeast Asia and the Middle East."
      },
      {
        "source": "Business Standard",
        "date": "May 2026",
        "title": "RBI guidelines on Expected Credit Loss provisioning scheduled for staged implementation",
        "summary": "Lenders maintain adequate excess capital buffers to transition without equity dilution."
      }
    ],
    "dealTimeline": [
      {
        "date": "Mar 2026",
        "company": "IDBI Bank",
        "value": "Strategic Divestment",
        "buyer": "Government & LIC Stake Sale"
      },
      {
        "date": "Jul 2025",
        "company": "Fincare Small Finance Bank",
        "value": "\u20b94,400 Cr",
        "buyer": "AU Small Finance Bank Merger"
      },
      {
        "date": "Jul 2023",
        "company": "HDFC Ltd & HDFC Bank",
        "value": "$40B Mega Merger",
        "buyer": "Reverse Amalgamation"
      }
    ],
    "interviewAngles": [
      "If a bank's Credit-to-Deposit (CD) ratio rises to 85% while liquidity coverage ratio (LCR) nears regulatory minimums, what funding actions must treasury undertake?",
      "Explain how the Net Interest Margin (NIM) of a bank is impacted during an interest rate cut cycle when 60% of loans are linked to external benchmarks (EBLR).",
      "How does the Expected Credit Loss (ECL) provisioning model differ from the traditional Incurred Loss model under RBI guidelines?"
    ],
    "glossary": [
      {
        "term": "NIM (Net Interest Margin)",
        "definition": "Net interest income divided by total interest-earning assets \u2014 the primary spread metric measuring banking profitability."
      },
      {
        "term": "GNPA / NNPA",
        "definition": "Gross Non-Performing Assets and Net Non-Performing Assets (after provisions) \u2014 the core asset quality indicators."
      },
      {
        "term": "CRAR",
        "definition": "Capital to Risk-Weighted Assets Ratio \u2014 the regulatory measure of a bank's capital strength against potential loan write-offs."
      }
    ],
    "sourceFile": "Individual Industry Decks/Banking_industry.pdf",
    "sourcePath": "Individual Industry Decks/Banking_industry.pdf",
    "sourceDoc": "Banking_industry.pdf"
  },
  {
    "id": "cement",
    "numId": 12,
    "name": "Cement & Building Materials",
    "sector": "Manufacturing & Materials",
    "icon": "foundation",
    "color": "#64748b",
    "description": "India is the 2nd largest cement producer globally after China, accounting for over 8% of global installed capacity. Cement production reached 491.4 MT in FY26 (+8.6% YoY) against total installed capacity of 700 MTPA. The industry is adding 150-160 MT capacity between FY25 and FY28, underpinned by massive central infrastructure outlays and housing schemes.",
    "size": "491.4 MT Production FY26 / 700 MTPA Capacity",
    "marketSize": "491.4 MT (Production FY26)",
    "cagr": "8.6% YoY",
    "cagrValue": 8.6,
    "players": [
      "UltraTech Cement",
      "Ambuja & ACC (Adani)",
      "Shree Cement",
      "Dalmia Bharat",
      "Nuvoco Vistas",
      "JSW Cement"
    ],
    "majorPlayers": [
      "UltraTech Cement",
      "Ambuja & ACC",
      "Shree Cement",
      "Dalmia Bharat"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "Medium",
      "supplierPower": "High",
      "substitutes": "Low",
      "rivalry": "High"
    },
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
    "forcesReasoning": {
      "newEntrants": "Prohibitive greenfield capex ($85-100 per tonne of capacity), limestone mine auction bidding, and complex environmental clearances.",
      "buyerPower": "Large institutional infrastructure contractors negotiate bulk bag discounts; retail home builders pay stable market MRP.",
      "supplierPower": "High power wielded by fuel suppliers (imported petcoke, thermal coal from Coal India) and Indian Railways freight tariffs.",
      "substitutes": "Fly ash, slag, and geopolymer blends substitute clinker partially, but standard Portland cement remains structurally irreplaceable.",
      "rivalry": "Aggressive market share battle between UltraTech and the consolidated Adani Group (Ambuja/ACC) through brownfield acquisitions."
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "Cement_industry.pdf",
    "uploadedDate": "2026-08-01",
    "valueChain": {
      "inputs": "Limestone Quarry Mining, Clinker Kiln Fuel (Petcoke/Coal), Gypsum & Fly Ash Sourcing",
      "operations": "High-Temperature Calcination, Clinker Burning, Automated Ball Mill Grinding & Bagging",
      "distribution": "Dedicated Rail Freight Rakes, Bulk Cement Tankers, Regional Warehouses & Retail Dealer Outlets",
      "endMarkets": "Housing & Real Estate (62%), Infrastructure & Roads (24%), Commercial & Industrial Construction (14%)",
      "marginDriver": "EBITDA per Tonne Optimization (\u20b9900-950/t), Green Power / Waste Heat Recovery (WHRS) & Blended Cement Share",
      "bottleneck": "Rail Rake Availability, Lead Distance Freight Costs (>350 km) & Limestone Mine Depletion"
    },
    "regulatoryTimeline": [
      {
        "year": "2015",
        "title": "Mines and Minerals (MMDR) Amendment",
        "detail": "Mandatory competitive e-auctions for all new captive limestone mining leases."
      },
      {
        "year": "2020",
        "title": "Perform, Achieve and Trade (PAT) Scheme",
        "detail": "Energy efficiency certificates and emission limits enforced across cement kilns."
      },
      {
        "year": "2023",
        "title": "Carbon Credit Trading Scheme (CCTS)",
        "detail": "National carbon market framework incentivizing alternative fuels and low-carbon blended cement."
      },
      {
        "year": "2026-27",
        "title": "Green Rating & Clinker Ratio Norms",
        "detail": "Public procurement mandates prioritizing blended Portland Pozzolana Cement (PPC) and Composite Cement."
      }
    ],
    "budgetHighlights": "\u20b912.2 lakh crore capital infrastructure allocation in the FY27 Union Budget, \u20b93.09 lakh crore for highways (+8%), and \u20b954,917 crore for PMAY-Gramin rural housing converting directly into bagged cement demand.",
    "marketContext": "The Indian cement industry is consolidating into an oligopoly, with top 5 players controlling ~60% of total installed capacity. With EBITDA per tonne holding at \u20b9900-950, leaders are investing \u20b91.2 lakh crore to expand total national capacity past 850 MTPA by 2030.",
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
    "globalBenchmarking": {
      "metricLabel": "Per Capita Cement Consumption (kg/year)",
      "labels": [
        "China",
        "Global Avg",
        "Turkey",
        "USA",
        "India"
      ],
      "values": [
        1650,
        520,
        680,
        310,
        275
      ]
    },
    "costStructure": {
      "labels": [
        "Total Revenue",
        "Raw Materials & Limestone",
        "Power & Fuel Costs",
        "Freight & Logistics",
        "Employee & Maintenance",
        "EBITDA",
        "PAT"
      ],
      "values": [
        100,
        16,
        28,
        31,
        8,
        17,
        10
      ]
    },
    "workingCapital": {
      "inventoryDays": 36,
      "receivableDays": 18,
      "payableDays": 52,
      "cashConversionCycle": 2
    },
    "creditProfile": {
      "netDebtToEbitda": "0.4x (UltraTech / Ambuja)",
      "creditRating": "AAA / Stable",
      "costOfDebt": "7.5%",
      "liquidityBuffer": "\u20b916,000 Cr Consolidated Cash & Treasury"
    },
    "stockPerformance": {
      "labels": [
        "Q1 24",
        "Q2 24",
        "Q3 24",
        "Q4 24",
        "Q1 25",
        "Q2 25",
        "Q3 25",
        "Q4 25"
      ],
      "sectorIndex": [
        100,
        110,
        122,
        136,
        152,
        170,
        190,
        212
      ],
      "benchmarkNifty": [
        100,
        106,
        114,
        121,
        127,
        134,
        140,
        146
      ],
      "return1Yr": "+28.4%",
      "return3Yr": "+112.0%",
      "volatilityBeta": "0.95x"
    },
    "customerSegmentation": {
      "labels": [
        "Individual Home Builders (Retail)",
        "Govt Infrastructure Projects",
        "Commercial Real Estate Builders",
        "Industrial Projects"
      ],
      "values": [
        58,
        22,
        12,
        8
      ],
      "incomeCohort": "UltraTech commands 150+ MTPA capacity; Adani Cement (Ambuja/ACC) controls 100+ MTPA; Shree Cement controls 56 MTPA."
    },
    "demandSupplyGap": {
      "labels": [
        "2023",
        "2024",
        "2025",
        "2026E",
        "2027E"
      ],
      "demand": [
        415,
        453,
        491,
        532,
        578
      ],
      "supply": [
        610,
        668,
        700,
        755,
        810
      ],
      "utilizationRate": "70.2% Industry Operating Capacity"
    },
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "High",
      "d2cOmnichannel": "Low",
      "platformEcosystem": "Medium"
    },
    "swot": {
      "strengths": [
        "Proximity to massive high-grade limestone reserves and captive power infrastructure",
        "Extensive multi-tiered dealer distribution networks spanning 100,000+ building material counters",
        "UltraTech and Adani scale providing unmatched railway freight and petcoke bulk procurement discounts"
      ],
      "weaknesses": [
        "Commoditized product with low brand pricing power differentiation among retail buyers",
        "High carbon footprint facing future green tax and decarbonization capital liabilities",
        "Regional supply-demand imbalances causing pricing volatility in Southern and Eastern states"
      ],
      "opportunities": [
        "Growth in Ready-Mix Concrete (RMC) and specialized water-resistant chemical building products",
        "Decarbonization via Alternate Fuel and Raw materials (AFR), biomass, and green hydrogen kilns",
        "Expansion into under-penetrated rural housing markets across Central and Northern India"
      ],
      "threats": [
        "Surges in global petcoke and coal prices immediately denting per-tonne EBITDA",
        "Freight rate revisions and rake shortages announced by Indian Railways",
        "Delays in state infrastructure budgetary disbursements slowing off-take"
      ]
    },
    "news": [
      {
        "source": "Economic Times",
        "date": "Jul 2026",
        "title": "UltraTech Cement approves \u20b913,000 Cr capex to cross 180 MTPA capacity",
        "summary": "Expansion includes greenfield clinker lines in Rajasthan and grinding units in Odisha and Andhra Pradesh."
      },
      {
        "source": "Mint",
        "date": "Jun 2026",
        "title": "Cement industry EBITDA per tonne stabilizes at \u20b9940 as fuel costs soften",
        "summary": "Waste heat recovery systems now generate over 22% of total plant electrical requirements across major producers."
      },
      {
        "source": "Business Standard",
        "date": "May 2026",
        "title": "Adani Cement completes acquisition of Orient Cement for \u20b98,100 Cr",
        "summary": "Transaction boosts Adani's operational footprint in South and Central India toward its 140 MTPA target."
      }
    ],
    "dealTimeline": [
      {
        "date": "May 2026",
        "company": "Orient Cement",
        "value": "\u20b98,100 Cr",
        "buyer": "Ambuja Cements (Adani)"
      },
      {
        "date": "Jun 2025",
        "company": "Kesoram Cement Assets",
        "value": "\u20b95,377 Cr",
        "buyer": "UltraTech Cement"
      },
      {
        "date": "Dec 2024",
        "company": "Sanghi Industries",
        "value": "\u20b95,185 Cr",
        "buyer": "Ambuja Cements"
      }
    ],
    "interviewAngles": [
      "If rail freight rates increase by 8% and petcoke prices rise by $15/tonne, calculate the required price increase per 50-kg cement bag to maintain a \u20b9950/t EBITDA.",
      "Analyze whether a cement company should expand via brownfield debottlenecking ($45/t) or acquire distressed regional players ($85/t) to capture market share.",
      "Explain how decreasing the clinker-to-cement ratio through fly ash blending directly expands gross margin."
    ],
    "glossary": [
      {
        "term": "Clinker Factor",
        "definition": "The proportion of energy-intensive clinker used in finished cement; lower clinker ratios reduce production cost and carbon intensity."
      },
      {
        "term": "EBITDA per Tonne",
        "definition": "The industry's core operating profitability yardstick calculated as total operating profit divided by metric tonnes sold."
      },
      {
        "term": "Lead Distance",
        "definition": "The average distance over which cement is transported from plant to end customer; typically kept under 300-350 km to preserve margins."
      }
    ],
    "sourceFile": "Individual Industry Decks/Cement_industry.pdf",
    "sourcePath": "Individual Industry Decks/Cement_industry.pdf",
    "sourceDoc": "Cement_industry.pdf"
  },
  {
    "id": "consumer-durables",
    "numId": 13,
    "name": "Consumer Durables",
    "sector": "Consumer",
    "icon": "tv",
    "color": "#ea580c",
    "description": "India is projected to become the world's 4th largest consumer durables market by FY27, with the total sector revenue crossing \u20b91.5 lakh crore. The room air-conditioner (RAC) segment alone was valued at nearly US$ 5 billion in FY25 and is projected to reach \u20b950,000 crore by FY29 (12% CAGR), accelerated by prolonged summer heatwaves, rising middle-class disposable incomes, and the September 2025 GST rationalization from 28% to 18%.",
    "size": "\u20b91.5 Lakh Cr+ Sector / US$ 5 Bn RAC Market",
    "marketSize": "\u20b91.5 Lakh Cr+ Sector",
    "cagr": "12.0% CAGR",
    "cagrValue": 12.0,
    "players": [
      "Havells India",
      "Voltas (Tata)",
      "Blue Star",
      "Whirlpool of India",
      "Dixon Technologies",
      "LG Electronics India"
    ],
    "majorPlayers": [
      "Havells",
      "Voltas",
      "Blue Star",
      "Whirlpool",
      "Dixon Tech"
    ],
    "forces": {
      "newEntrants": "Medium",
      "buyerPower": "High",
      "supplierPower": "Medium",
      "substitutes": "Low",
      "rivalry": "Very High"
    },
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
    "forcesReasoning": {
      "newEntrants": "Contract manufacturers (Dixon, Amber) lower entry barriers for new brands, but established aftermarket service networks and retail shelf space protect leaders.",
      "buyerPower": "Omnichannel shopping platforms (Amazon, Flipkart, Reliance Digital, Croma) allow instant price and star-rating comparisons, forcing price matching.",
      "supplierPower": "Compressor manufacturers, copper tube suppliers, and display panel makers hold moderate leverage; local sourcing is increasing under PLI.",
      "substitutes": "Air coolers offer cheap entry-level cooling, but rising ambient temperatures make mechanical refrigeration air conditioning indispensable.",
      "rivalry": "Cut-throat summer season pricing battles, warranty expansion promotions, and aggressive festive consumer financing discounts."
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "Consumer Durables_industry.pdf",
    "uploadedDate": "2026-08-01",
    "valueChain": {
      "inputs": "Inverter Compressors, Copper Tubes, Aluminum Coils, Polycarbonate Plastics & Microcontroller PCBs",
      "operations": "Sheet Metal Stamping, Automated Heat Exchanger Bending, Injection Molding & Star-Rating Energy Testing",
      "distribution": "Large Format Retailers (Reliance Digital, Croma), Regional Multi-Brand Outlets & E-Commerce / Quick Commerce Portals",
      "endMarkets": "First-Time Tier-2/3 Home Buyers, Urban Replacements/Upgrades & Commercial Small Office / Retail Establishments",
      "marginDriver": "Inverter ACs (5-Star BEE Rated), Connected Smart Appliances & Direct Extended Warranty Programs",
      "bottleneck": "Compressor Import Lead Times, Copper Commodity Price Spikes & Summer After-Sales Installation Bandwidth"
    },
    "regulatoryTimeline": [
      {
        "year": "2021",
        "title": "PLI Scheme for White Goods",
        "detail": "\u20b96,238 crore production-linked incentive scheme launched for air conditioner and LED component manufacturing."
      },
      {
        "year": "2022",
        "title": "Revised BEE Star-Labeling Norms",
        "detail": "Bureau of Energy Efficiency tightens energy efficiency benchmarks, making inverter ACs standard market offerings."
      },
      {
        "year": "2024",
        "title": "Quality Control Orders (QCOs)",
        "detail": "BIS certification mandated on imported copper tubes, aluminum foils, and home appliance electrical plugs."
      },
      {
        "year": "2025",
        "title": "GST Rate Rationalization (Sep 2025)",
        "detail": "GST on air conditioners, televisions, and dishwashers reduced from 28% to 18%, improving affordability."
      }
    ],
    "budgetHighlights": "PLI Scheme for White Goods expansion, customs duty reductions on critical appliance copper and plastic feedstocks, and consumer financing liquidity support via Priority Sector Lending.",
    "marketContext": "India's room AC household penetration is exceptionally low at ~8% compared to 60%+ in China and 90% in Japan. Record heatwaves and the September 2025 GST reduction from 28% to 18% drove over 35% YoY volume growth across Tier-2 and Tier-3 towns.",
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
    "globalBenchmarking": {
      "metricLabel": "Air Conditioner Household Penetration (%)",
      "labels": [
        "Japan",
        "USA",
        "China",
        "Global Avg",
        "India"
      ],
      "values": [
        91.0,
        88.0,
        62.0,
        36.0,
        8.2
      ]
    },
    "costStructure": {
      "labels": [
        "Gross Revenue",
        "Raw Materials & Components",
        "Manufacturing & Assembly",
        "Warranty & After-Sales",
        "Marketing & Dealer Margin",
        "EBITDA",
        "PAT"
      ],
      "values": [
        100,
        62,
        11,
        5,
        12,
        10,
        6
      ]
    },
    "workingCapital": {
      "inventoryDays": 58,
      "receivableDays": 38,
      "payableDays": 68,
      "cashConversionCycle": 28
    },
    "creditProfile": {
      "netDebtToEbitda": "Net Cash Positive (Havells / Blue Star)",
      "creditRating": "AA+ / Stable",
      "costOfDebt": "7.8%",
      "liquidityBuffer": "\u20b95,400 Cr Liquid Capital across Leaders"
    },
    "stockPerformance": {
      "labels": [
        "Q1 24",
        "Q2 24",
        "Q3 24",
        "Q4 24",
        "Q1 25",
        "Q2 25",
        "Q3 25",
        "Q4 25"
      ],
      "sectorIndex": [
        100,
        118,
        138,
        162,
        188,
        218,
        250,
        286
      ],
      "benchmarkNifty": [
        100,
        106,
        114,
        121,
        127,
        134,
        140,
        146
      ],
      "return1Yr": "+52.0%",
      "return3Yr": "+186.0%",
      "volatilityBeta": "1.12x"
    },
    "customerSegmentation": {
      "labels": [
        "First-Time Home Buyers (Tier-2/3)",
        "Metro Replacement & Upgrades",
        "Commercial Offices & Small Retail",
        "Institutions & Hospitality"
      ],
      "values": [
        48,
        32,
        14,
        6
      ],
      "incomeCohort": "Voltas leads room ACs with 19-21% volume share; LG holds 17-19%; Blue Star holds 13-14%; Lloyd (Havells) holds 12%."
    },
    "demandSupplyGap": {
      "labels": [
        "2023",
        "2024",
        "2025",
        "2026E",
        "2027E"
      ],
      "demand": [
        10.5,
        12.8,
        15.6,
        18.5,
        22.0
      ],
      "supply": [
        11.2,
        13.5,
        16.2,
        19.5,
        23.2
      ],
      "utilizationRate": "79.8% Production Line Capacity"
    },
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "High",
      "d2cOmnichannel": "Very High",
      "platformEcosystem": "High"
    },
    "swot": {
      "strengths": [
        "Strong brand equity and vast authorized service engineer networks across urban and rural India",
        "High penetration of non-banking consumer finance (Bajaj Finserv, Pine Labs) enabling zero-downpayment purchases",
        "Expanding domestic manufacturing capabilities under PLI schemes reducing foreign exchange exposure"
      ],
      "weaknesses": [
        "Extreme seasonal dependency with severe inventory carrying risk if summer fails to peak",
        "Relatively low operating margins (8-11% EBITDA) due to high price sensitivity and competitive discounting",
        "Dependency on imported compressors and electronic microcontrollers for high-end inverter models"
      ],
      "opportunities": [
        "Massive headroom in Tier-3/4 towns where electrification and reliable power grids are stabilizing",
        "Smart home IoT integration connecting ACs, refrigerators, and washing machines via mobile apps",
        "Commercial HVAC expansion for commercial real estate, datacenters, and quick-commerce dark stores"
      ],
      "threats": [
        "Surges in global copper and refrigerant gas prices that cannot be immediately passed on to consumers",
        "Disruptive direct-to-consumer pricing by contract manufacturers launching proprietary private labels",
        "Frequent upward revisions in Bureau of Energy Efficiency star-rating energy metrics requiring re-tooling"
      ]
    },
    "news": [
      {
        "source": "Economic Times",
        "date": "Jul 2026",
        "title": "Room AC sales hit record 14 million units on heatwave and 18% GST rate",
        "summary": "Industry registers 38% YoY volume expansion with tier-2 towns contributing over 55% of incremental orders."
      },
      {
        "source": "Mint",
        "date": "Jun 2026",
        "title": "Dixon Technologies signs contract manufacturing pact with global major",
        "summary": "Company will manufacture 1.5 million washing machines and refrigerators at its new facility in Noida."
      },
      {
        "source": "Business Standard",
        "date": "May 2026",
        "title": "Blue Star commissions \u20b9350 Cr Sri City plant phase-2",
        "summary": "Facility dedicated to manufacturing commercial refrigeration units and 5-star inverter air conditioners."
      }
    ],
    "dealTimeline": [
      {
        "date": "Feb 2026",
        "company": "Amber Enterprises",
        "value": "\u20b91,200 Cr Qualified Institutional Placement",
        "buyer": "Institutional Funds"
      },
      {
        "date": "Nov 2025",
        "company": "Voltas Beko JV",
        "value": "Capacity Doubling",
        "buyer": "Tata Sons & Ar\u00e7elik"
      },
      {
        "date": "Jul 2025",
        "company": "Dixon Technologies",
        "value": "Ismartu Acquisition (\u20b9238 Cr)",
        "buyer": "Dixon Tech"
      }
    ],
    "interviewAngles": [
      "If the government reduces GST on air conditioners from 28% to 18%, calculate the retail price reduction for a \u20b940,000 AC assuming OEMs pass on 80% of the benefit and retain 20% in gross margin.",
      "How should a consumer durables manufacturer manage working capital when 60% of annual sales occur in Q1 (summer) while manufacturing must operate steadily year-round?",
      "Evaluate the pros and cons for a brand like Voltas of outsourcing production to an EMS player (Amber/Dixon) vs manufacturing in-house."
    ],
    "glossary": [
      {
        "term": "ISEER Rating",
        "definition": "Indian Seasonal Energy Efficiency Ratio \u2014 the Bureau of Energy Efficiency metric measuring seasonal energy performance of air conditioners."
      },
      {
        "term": "EMS (Electronic Manufacturing Services)",
        "definition": "Contract manufacturing companies (e.g. Dixon, Amber) that assemble electronic appliances on behalf of brand owners."
      },
      {
        "term": "Inverter Technology",
        "definition": "Variable-speed compressor technology that adjusts cooling capacity continuously, saving 30-40% electricity compared to fixed-speed units."
      }
    ],
    "sourceFile": "Individual Industry Decks/Consumer Durables_industry.pdf",
    "sourcePath": "Individual Industry Decks/Consumer Durables_industry.pdf",
    "sourceDoc": "Consumer Durables_industry.pdf"
  },
  {
    "id": "diagnostics",
    "numId": 14,
    "name": "Diagnostics",
    "sector": "Healthcare",
    "icon": "biotech",
    "color": "#0d9488",
    "description": "The Indian diagnostic labs market was valued at US$ 11.0 billion in CY2025 and is projected to expand to US$ 28.5 billion by 2034, compounding at an 11.2% CAGR. Although diagnostic services represent less than 10% of India's total healthcare spending, they guide over 70% of clinical treatment decisions. With unorganised labs controlling ~80% of the market, organized national chains are capitalizing on massive consolidation headroom.",
    "size": "US$ 11.0 Bn (CY2025) -> US$ 28.5 Bn (2034)",
    "marketSize": "US$ 11.0 Bn (CY2025)",
    "cagr": "11.2% CAGR",
    "cagrValue": 11.2,
    "players": [
      "Dr Lal PathLabs",
      "Metropolis Healthcare",
      "Vijaya Diagnostic Centre",
      "SRL Diagnostics (Agilus)",
      "Thyrocare Technologies"
    ],
    "majorPlayers": [
      "Dr Lal PathLabs",
      "Metropolis",
      "Vijaya Diagnostic",
      "Agilus (SRL)"
    ],
    "forces": {
      "newEntrants": "Medium",
      "buyerPower": "Medium",
      "supplierPower": "Medium",
      "substitutes": "Low",
      "rivalry": "High"
    },
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
    "forcesReasoning": {
      "newEntrants": "Opening basic collection booths has low capital barriers, but building reference testing menus (4,000+ tests), NABL accreditations, and doctor trust takes decades.",
      "buyerPower": "Consumers compare routine lipid/thyroid package pricing online, but complex specialized pathology and oncology testing is strictly physician-directed.",
      "supplierPower": "Diagnostic reagent and automated analyzer OEMs (Roche, Abbott, Siemens, Sysmex) have concentrated pricing power, mitigated via volume-linked reagent rental contracts.",
      "substitutes": "Wearable fitness trackers and home glucose meters handle routine monitoring, but clinical diagnosis requires certified laboratory blood and tissue assays.",
      "rivalry": "Intense competition in routine tests from healthtech aggregators (Tata 1mg, Pharmeasy) while national chains differentiate on specialized genomic and oncology tests."
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "Diagnostics_industry.pdf",
    "uploadedDate": "2026-08-01",
    "valueChain": {
      "inputs": "Diagnostic Reagents, Automated Immunoassay Analyzers, Phlebotomy Consumables & Pathologist Talent",
      "operations": "Sample Barcoding, Automated Clinical Chemistry, Molecular Diagnostics & Digital Tele-Pathology Sign-Off",
      "distribution": "Central Reference Labs (CRLs), Regional Reference Labs, Patient Service Centers (PSCs) & Home Sample Phlebotomists",
      "endMarkets": "Walk-In Retail Patients, Doctor-Referred Chronic Sufferers, Corporate Annual Health Checks & Hospital B2B Lab Contracts",
      "marginDriver": "Specialized Testing (Genomics, Histopathology, Oncology Markers at 45%+ gross margin) & Home Collection Fees",
      "bottleneck": "Sample Cold Chain Integrity During Logistics & Pathologist Talent Retention in Tier-2/3 Towns"
    },
    "regulatoryTimeline": [
      {
        "year": "2010",
        "title": "Clinical Establishments Act",
        "detail": "Framework for standardizing minimum lab equipment, qualified personnel, and record keeping across diagnostic centers."
      },
      {
        "year": "2020",
        "title": "RT-PCR Price Capping",
        "detail": "State governments enforce price ceilings on pandemic testing, accelerating automation and cost rationalization."
      },
      {
        "year": "2023",
        "title": "NABL Entry-Level Accreditation",
        "detail": "National Accreditation Board for Testing and Calibration Laboratories launches simplified quality tier for small labs."
      },
      {
        "year": "2026-27",
        "title": "Mandatory Pathologist Digital Signature Norms",
        "detail": "Strict regulations requiring registered pathologists with verifiable digital certificates on all diagnostic reports."
      }
    ],
    "budgetHighlights": "Expansion of National Health Mission free diagnostic service initiatives, tax incentives for diagnostic equipment deployed in aspirational districts, and GST exemptions on healthcare diagnostic testing services.",
    "marketContext": "Chronic lifestyle diseases (diabetes, hypertension, cardiology) generate over 60% of diagnostic revenue through repeat monitoring. The 45+ age cohort is expanding at 2.4% annually to 2050, converting one-off diagnostic checks into predictable quarterly annuity revenue.",
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
    "globalBenchmarking": {
      "metricLabel": "Diagnostic Spending as % of Total Healthcare",
      "labels": [
        "USA",
        "Germany",
        "Japan",
        "Global Avg",
        "India"
      ],
      "values": [
        14.5,
        12.0,
        11.5,
        10.0,
        7.8
      ]
    },
    "costStructure": {
      "labels": [
        "Gross Revenue",
        "Reagents & Lab Consumables",
        "Doctor & Pathologist Salaries",
        "Phlebotomist & Staff Wages",
        "Rent & Collection Centers",
        "EBITDA",
        "PAT"
      ],
      "values": [
        100,
        24,
        12,
        14,
        15,
        27,
        18
      ]
    },
    "workingCapital": {
      "inventoryDays": 16,
      "receivableDays": 12,
      "payableDays": 42,
      "cashConversionCycle": -14
    },
    "creditProfile": {
      "netDebtToEbitda": "Net Cash Positive (Dr Lal / Metropolis)",
      "creditRating": "AA+ / Stable",
      "costOfDebt": "7.2%",
      "liquidityBuffer": "\u20b92,100 Cr Liquid Cash & Treasury Investments"
    },
    "stockPerformance": {
      "labels": [
        "Q1 24",
        "Q2 24",
        "Q3 24",
        "Q4 24",
        "Q1 25",
        "Q2 25",
        "Q3 25",
        "Q4 25"
      ],
      "sectorIndex": [
        100,
        114,
        128,
        144,
        162,
        184,
        208,
        234
      ],
      "benchmarkNifty": [
        100,
        106,
        114,
        121,
        127,
        134,
        140,
        146
      ],
      "return1Yr": "+36.8%",
      "return3Yr": "+134.0%",
      "volatilityBeta": "0.78x"
    },
    "customerSegmentation": {
      "labels": [
        "Chronic Disease Monitoring",
        "Doctor-Prescribed Acute Tests",
        "Preventive Wellness Packages",
        "Hospital Lab Management (B2B)"
      ],
      "values": [
        42,
        28,
        20,
        10
      ],
      "incomeCohort": "Dr Lal PathLabs leads with 10,000+ collection centers; Metropolis leads specialized oncology/molecular testing in West & South India."
    },
    "demandSupplyGap": {
      "labels": [
        "2023",
        "2024",
        "2025",
        "2026E",
        "2027E"
      ],
      "demand": [
        100,
        112,
        125,
        140,
        156
      ],
      "supply": [
        108,
        118,
        130,
        144,
        160
      ],
      "utilizationRate": "68.5% Reference Lab Processing Capacity"
    },
    "techRadar": {
      "aiIntegration": "High",
      "roboticsAutomation": "Very High",
      "d2cOmnichannel": "Very High",
      "platformEcosystem": "High"
    },
    "swot": {
      "strengths": [
        "Asset-light hub-and-spoke laboratory architecture generating exceptional return on capital (ROCE >30%)",
        "High brand trust and clinical accuracy accreditations (NABL, CAP) that cannot be replicated quickly",
        "Sticky annuity revenue streams from chronic disease testing recurring every 90 days"
      ],
      "weaknesses": [
        "Vulnerability to routine blood test price wars in metro clusters",
        "High dependence on doctor prescription referrals in secondary care testing",
        "Regional geographic concentration (Dr Lal in North/East; Metropolis in West/South)"
      ],
      "opportunities": [
        "Growth of high-margin genomic sequencing, liquid biopsies, and companion cancer diagnostics",
        "Consolidation of sub-scale regional hospital labs via long-term management contracts",
        "Direct corporate employee health and insurance pre-policy medical check-up partnerships"
      ],
      "threats": [
        "Potential government price caps on essential diagnostic panels similar to drug price controls",
        "Disruption from point-of-care rapid testing kits eliminating laboratory visits",
        "Aggressive discounting from venture-funded digital health apps burning capital on customer acquisition"
      ]
    },
    "news": [
      {
        "source": "Economic Times",
        "date": "Jul 2026",
        "title": "Dr Lal PathLabs reports 14% volume growth driven by tier-2 wellness packages",
        "summary": "Preventive health checks and home sample collections cross 28% of total retail revenue."
      },
      {
        "source": "Mint",
        "date": "Jun 2026",
        "title": "Metropolis Healthcare expands specialized oncology diagnostics division",
        "summary": "Next-generation sequencing and molecular pathology tests deliver 42% gross margin contribution."
      },
      {
        "source": "Business Standard",
        "date": "May 2026",
        "title": "Diagnostic sector consolidation accelerates as regional unorganized labs face compliance costs",
        "summary": "Top 4 organized chains acquire 18 regional lab networks across Maharashtra and Uttar Pradesh."
      }
    ],
    "dealTimeline": [
      {
        "date": "Mar 2026",
        "company": "Suburban Diagnostics",
        "value": "Network Integration",
        "buyer": "Dr Lal PathLabs"
      },
      {
        "date": "Oct 2025",
        "company": "Core Diagnostics",
        "value": "\u20b9210 Cr",
        "buyer": "Metropolis Healthcare"
      },
      {
        "date": "Jun 2024",
        "company": "Thyrocare Technologies",
        "value": "Stake Increase",
        "buyer": "Pharmeasy / API Holdings"
      }
    ],
    "interviewAngles": [
      "A national diagnostic chain opens a regional hub lab (\u20b98 Cr capex) and 40 collection centers (\u20b95 Lakh each). If daily sample volume is 2,500 tests at \u20b9350 average realization and 30% variable cost, calculate payback period.",
      "Compare the unit economics of a walk-in patient at a physical collection center vs a home collection visit with a phlebotomist earning \u20b980 per pickup.",
      "Why do specialized molecular pathology tests command 50%+ gross margins while routine lipid panels yield less than 20%?"
    ],
    "glossary": [
      {
        "term": "NABL",
        "definition": "National Accreditation Board for Testing and Calibration Laboratories \u2014 the premier government quality certification benchmark for Indian labs."
      },
      {
        "term": "Hub-and-Spoke",
        "definition": "An operating model where samples collected at neighborhood centers are transported to a central high-throughput automated lab for testing."
      },
      {
        "term": "Reagent Rental",
        "definition": "An equipment financing agreement where analyzer OEMs provide automated machines for free in exchange for multi-year proprietary chemical reagent purchase commitments."
      }
    ],
    "sourceFile": "Individual Industry Decks/Diagnostics_industry.pdf",
    "sourcePath": "Individual Industry Decks/Diagnostics_industry.pdf",
    "sourceDoc": "Diagnostics_industry.pdf"
  },
  {
    "id": "ecommerce",
    "numId": 15,
    "name": "E-Commerce",
    "sector": "Consumer & Digital",
    "icon": "shopping_cart",
    "color": "#2563eb",
    "description": "India's e-retail Gross Merchandise Value (GMV) reached US$ 65\u201366 billion in CY2025, growing 19\u201321% YoY and accelerating to 23\u201325% in early 2026. Total e-commerce including travel and digital services stands at US$ 125 billion, heading to US$ 345 billion by 2030. Despite rapid scale, e-commerce represents only ~1.6% of GDP and 6.5% of total retail (compared to 14% of GDP in China), highlighting immense long-term runway.",
    "size": "US$ 65\u201366 Bn GMV (CY2025) -> US$ 345 Bn (2030)",
    "marketSize": "US$ 65\u201366 Bn (CY2025)",
    "cagr": "21.0% CAGR",
    "cagrValue": 21.0,
    "players": [
      "Flipkart (Walmart)",
      "Amazon India",
      "Meesho",
      "Blinkit (Zomato)",
      "Zepto",
      "Tata Neu",
      "Myntra"
    ],
    "majorPlayers": [
      "Flipkart",
      "Amazon India",
      "Meesho",
      "Blinkit",
      "Zepto"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "High",
      "supplierPower": "Medium",
      "substitutes": "Medium",
      "rivalry": "High"
    },
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
    "forcesReasoning": {
      "newEntrants": "Massive fulfillment infrastructure, automated sortation centers, seller financing ecosystems, and customer acquisition moats.",
      "buyerPower": "Online shoppers have zero loyalty, comparing prices instantly across platforms and expecting free delivery and easy returns.",
      "supplierPower": "D2C brands and MSME merchants rely on marketplace platforms for nationwide reach, but top electronic brands negotiate lower commissions.",
      "substitutes": "Offline retail, local kirana stores, shopping malls, and burgeoning 10-minute quick commerce dark stores.",
      "rivalry": "Fierce competition between incumbents (Flipkart, Amazon) and emerging paradigms: zero-commission social commerce (Meesho) and quick commerce (Blinkit, Zepto)."
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "eCommerce_industry.pdf",
    "uploadedDate": "2026-08-01",
    "valueChain": {
      "inputs": "Merchant Onboarding, Marketplace Catalog Curation, Packaging Materials & Fulfillment Center Real Estate",
      "operations": "Algorithmic Product Search, Recommendation Engine Personalization, Dynamic Pricing & Automated Warehouse Picking",
      "distribution": "Inter-City Air/Surface Logistics (Ekart, ATS), Regional Sortation Hubs & Last-Mile Delivery Fleets",
      "endMarkets": "Tier-1 Metro Shoppers, Tier-2/3 Aspirational Consumers, Vernacular Mobile Users & B2B Wholesale Retailers",
      "marginDriver": "Marketplace Advertising Fees (Retail Media Ad-Tech), Seller Fulfillment Services & Consumer Credit (Buy Now Pay Later)",
      "bottleneck": "High Reverse Logistics / Return-to-Origin (RTO) on Cash-on-Delivery & Last-Mile Delivery Cost per Parcel"
    },
    "regulatoryTimeline": [
      {
        "year": "2018",
        "title": "FDI Policy on E-Commerce (Press Note 2)",
        "detail": "Foreign-backed marketplaces barred from holding inventory or giving preferential treatment to related-party sellers."
      },
      {
        "year": "2020",
        "title": "Consumer Protection (E-Commerce) Rules",
        "detail": "Mandates display of country of origin, transparent cancellation policies, and appointed grievance redressal officers."
      },
      {
        "year": "2023",
        "title": "Dark Patterns Prevention Guidelines",
        "detail": "CCPA strictly bans manipulative interface design such as false urgency, basket sneaking, and hidden delivery fees."
      },
      {
        "year": "2026-27",
        "title": "National E-Commerce Policy & ONDC Scaling",
        "detail": "Comprehensive data localization rules, platform neutrality audits, and interoperable open network logistics."
      }
    ],
    "budgetHighlights": "PM GatiShakti national master plan lowering logistics costs from 13% to under 9% of GDP, postal network integration (India Post) for rural e-commerce delivery, and GST simplification for small online sellers.",
    "marketContext": "India's online shopper headroom is vast: only ~30% of India's 850 million internet users shop online, compared to 92% in China and 74% in the US. As per-capita GDP crosses $4,000 by 2030, discretionary consumer spending is hitting an exponential inflection point.",
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
    "globalBenchmarking": {
      "metricLabel": "E-Commerce as % of Total Retail Sales",
      "labels": [
        "China",
        "UK",
        "USA",
        "Global Avg",
        "India"
      ],
      "values": [
        31.0,
        24.5,
        16.2,
        18.0,
        6.5
      ]
    },
    "costStructure": {
      "labels": [
        "Gross Revenue / Take-Rate",
        "Logistics & Last-Mile Delivery",
        "Payment Gateway & Cloud Servers",
        "Customer Acquisition & Marketing",
        "Warehouse Opex & Packaging",
        "EBITDA",
        "PAT"
      ],
      "values": [
        100,
        42,
        14,
        20,
        12,
        8,
        4
      ]
    },
    "workingCapital": {
      "inventoryDays": 0,
      "receivableDays": 8,
      "payableDays": 48,
      "cashConversionCycle": -40
    },
    "creditProfile": {
      "netDebtToEbitda": "Net Cash Positive (Flipkart / Meesho)",
      "creditRating": "AA / Stable",
      "costOfDebt": "8.0%",
      "liquidityBuffer": "$4.5+ Bn Cash Reserves across Major Marketplaces"
    },
    "stockPerformance": {
      "labels": [
        "Q1 24",
        "Q2 24",
        "Q3 24",
        "Q4 24",
        "Q1 25",
        "Q2 25",
        "Q3 25",
        "Q4 25"
      ],
      "sectorIndex": [
        100,
        120,
        145,
        175,
        210,
        250,
        295,
        345
      ],
      "benchmarkNifty": [
        100,
        106,
        114,
        121,
        127,
        134,
        140,
        146
      ],
      "return1Yr": "+64.2%",
      "return3Yr": "+245.0%",
      "volatilityBeta": "1.35x"
    },
    "customerSegmentation": {
      "labels": [
        "Tier-1 Metro Convenience Shoppers",
        "Tier-2/3 Value Fashion & Home",
        "Quick Commerce Impulsive Buyers",
        "B2B Small Kirana Wholesalers"
      ],
      "values": [
        36,
        38,
        16,
        10
      ],
      "incomeCohort": "Tier-2 and rural shoppers generate 62% of transaction volumes; Metros generate 54% of total GMV value."
    },
    "demandSupplyGap": {
      "labels": [
        "2023",
        "2024",
        "2025",
        "2026E",
        "2027E"
      ],
      "demand": [
        55,
        66,
        80,
        98,
        120
      ],
      "supply": [
        60,
        72,
        86,
        105,
        128
      ],
      "utilizationRate": "84.2% Fulfillment Center Space Utilization"
    },
    "techRadar": {
      "aiIntegration": "Very High",
      "roboticsAutomation": "Very High",
      "d2cOmnichannel": "Very High",
      "platformEcosystem": "Very High"
    },
    "swot": {
      "strengths": [
        "Nationwide logistics supply chain reaching 19,000+ pin codes within 24-48 hours",
        "Unrivaled customer data insights powering hyper-personalized recommendation and search algorithms",
        "High-margin advertising ad-tech and marketplace commissions subsidizing last-mile delivery costs"
      ],
      "weaknesses": [
        "Ongoing cash burn on customer acquisition and return logistics in non-metro value tiers",
        "Zero consumer brand loyalty between Flipkart, Amazon, Meesho, and quick commerce platforms",
        "FDI regulatory restrictions preventing ownership of captive inventory and private labels"
      ],
      "opportunities": [
        "Quick commerce expansion delivering high-ticket electronics, cosmetics, and apparel in 10 minutes",
        "Generative AI personal shopping assistants and virtual AR/VR apparel try-ons reducing return rates",
        "Monetization of fintech embedded credit (Pay Later, seller working capital loans)"
      ],
      "threats": [
        "Quick commerce platforms eroding traditional 2-3 day e-commerce delivery relevance in top metros",
        "Open Network for Digital Commerce (ONDC) commoditizing marketplace discovery and logistics margins",
        "Stricter data localization and consumer protection liabilities raising operational compliance overhead"
      ]
    },
    "news": [
      {
        "source": "Economic Times",
        "date": "Jul 2026",
        "title": "Meesho achieves full-year net profitability on zero-commission model",
        "summary": "Company processes over 1.4 billion orders with retail ad-tech revenue and fulfillment fees driving bottom-line."
      },
      {
        "source": "Mint",
        "date": "Jun 2026",
        "title": "Flipkart shifts corporate domicile to India ahead of planned $50 Billion IPO",
        "summary": "Walmart-backed retail giant completes final regulatory approvals for domestic stock exchange listing."
      },
      {
        "source": "Business Standard",
        "date": "May 2026",
        "title": "Quick commerce steals 15% share from traditional e-commerce in electronics and beauty",
        "summary": "Fast fulfillment of chargers, headphones, and skincare disrupts standard 24-hour delivery promises."
      }
    ],
    "dealTimeline": [
      {
        "date": "May 2026",
        "company": "Meesho",
        "value": "$500M Funding Round",
        "buyer": "Tiger Global, Peak XV & SoftBank"
      },
      {
        "date": "Dec 2025",
        "company": "Flipkart",
        "value": "$1.0B Internal Infusion",
        "buyer": "Walmart Inc"
      },
      {
        "date": "Aug 2025",
        "company": "Shadowfax Logistics",
        "value": "\u20b91,200 Cr IPO",
        "buyer": "Public Listing"
      }
    ],
    "interviewAngles": [
      "A customer orders a \u20b91,200 pair of shoes with Cash on Delivery. Return-to-Origin (RTO) probability is 22%. Forward delivery costs \u20b965 and reverse shipping costs \u20b950. Calculate the expected delivery cost per order.",
      "Compare the economic model of horizontal 2-day e-commerce (Flipkart) with 10-minute quick commerce (Blinkit) on gross margin, delivery cost, and AOV.",
      "How does Meesho's zero-commission marketplace monetize through fulfillment spread and merchant search advertising?"
    ],
    "glossary": [
      {
        "term": "GMV",
        "definition": "Gross Merchandise Value \u2014 total value of merchandise sold over a given time period through a customer-to-customer or business-to-consumer exchange site."
      },
      {
        "term": "RTO (Return to Origin)",
        "definition": "When an order is undelivered or rejected by the customer at the doorstep and shipped back to the seller, incurring dual shipping costs."
      },
      {
        "term": "Take-Rate",
        "definition": "The percentage commission and service fee that a marketplace platform retains from each gross merchandise transaction."
      }
    ],
    "sourceFile": "Individual Industry Decks/eCommerce_industry.pdf",
    "sourcePath": "Individual Industry Decks/eCommerce_industry.pdf",
    "sourceDoc": "eCommerce_industry.pdf"
  },
  {
    "id": "electric-vehicles",
    "numId": 16,
    "name": "Electric Vehicles (EV)",
    "sector": "Automotive",
    "icon": "electric_car",
    "color": "#10b981",
    "description": "The Indian Electric Vehicle market stood at US$ 54.4 billion in 2025 and is projected to reach US$ 65.0 billion in FY2026, growing at a 19.44% CAGR (2025-29P). Electric two-wheelers represent ~92% of total EV sales volume, while passenger electric cars and electric commercial buses are the fastest-growing segments. The sector is supported by multi-billion-dollar lithium-ion cell gigafactories and government incentives under PM E-DRIVE.",
    "size": "US$ 65.0 Bn (FY2026) / 2M+ Units Annually",
    "marketSize": "US$ 65.0 Bn (FY2026)",
    "cagr": "19.44% CAGR",
    "cagrValue": 19.44,
    "players": [
      "Tata Motors",
      "Ola Electric",
      "Ather Energy",
      "Mahindra & Mahindra",
      "TVS Motor",
      "Bajaj Auto"
    ],
    "majorPlayers": [
      "Tata Motors",
      "Ola Electric",
      "Ather Energy",
      "Mahindra & Mahindra"
    ],
    "forces": {
      "newEntrants": "Medium",
      "buyerPower": "Medium",
      "supplierPower": "High",
      "substitutes": "Medium",
      "rivalry": "High"
    },
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
    "forcesReasoning": {
      "newEntrants": "Modular EV skateboards and software simplify assembly, but battery safety validation and charging ecosystem capex limit small entrants.",
      "buyerPower": "Consumers compare battery range, battery warranty periods, and running cost savings against internal combustion engine alternatives.",
      "supplierPower": "Global battery cell chemical processors and critical mineral miners (Lithium, Nickel, Cobalt, Rare Earths) hold substantial pricing power.",
      "substitutes": "CNG vehicles, strong hybrid electric vehicles (Toyota/Maruti), and high-mileage ICE two-wheelers remain strong substitutes.",
      "rivalry": "Aggressive price cuts in electric 2-wheelers and fierce competition in mid-size passenger electric SUVs."
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "EV_industry.pdf",
    "uploadedDate": "2026-08-01",
    "valueChain": {
      "inputs": "Cathode/Anode Active Materials, Battery Management Systems (BMS), Electric Motors & Power Electronics (SiC Inverters)",
      "operations": "Lithium-Ion Cell Assembly, Pack Thermal Enclosure Engineering, Vehicle Integration & Over-the-Air (OTA) Software",
      "distribution": "Direct-to-Consumer (D2C) Experience Centers, Franchise Dealerships & Commercial Fleet Electrification Desks",
      "endMarkets": "Urban Commuters, Commercial Delivery Fleets (Swiggy/Zomato/Amazon), State Transport Bus Fleets & Fleet Taxis (BluSmart)",
      "marginDriver": "In-house Lithium Cell Manufacturing, Battery-as-a-Service (BaaS) Subscriptions & Connected Telematics",
      "bottleneck": "Public Fast-Charging Infrastructure Density on Highways & Grid Transformer Capacity Upgrades"
    },
    "regulatoryTimeline": [
      {
        "year": "2019",
        "title": "FAME-II Scheme Launch",
        "detail": "\u20b910,000 crore demand subsidy scheme accelerating electric two-wheelers, three-wheelers, and electric buses."
      },
      {
        "year": "2021",
        "title": "PLI for Advanced Chemistry Cells (ACC)",
        "detail": "\u20b918,100 crore incentive program to build 50 GWh of indigenous lithium-ion battery cell gigafactories."
      },
      {
        "year": "2024",
        "title": "PM E-DRIVE Scheme Approval",
        "detail": "\u20b910,900 crore successor framework targeting 2.4M electric two-wheelers, 300,000 e-rickshaws, and 14,000 electric buses."
      },
      {
        "year": "2026-27",
        "title": "Battery Swapping & Interoperability Standards",
        "detail": "National standardized battery dimensions and connector protocols for commercial two and three-wheelers."
      }
    ],
    "budgetHighlights": "PM E-DRIVE allocation (\u20b910,900 Cr), customs duty exemptions on 25 critical mineral imports (Lithium, Copper, Cobalt), and capital subsidies for fast-charging stations across national highways.",
    "marketContext": "Major battery gigafactories are going live in India, including Tata Group's Agratas ~$1.6 Bn (\u20b913,000 Cr) 20-40 GWh plant at Sanand, Ola Electric's 5-20 GWh Gigafactory, and Reliance Industries' 30 GWh battery project, reducing cell import dependence from 100% to under 40% by 2028.",
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
    "globalBenchmarking": {
      "metricLabel": "EV Penetration Rate in New Two-Wheeler Sales (%)",
      "labels": [
        "China",
        "India",
        "Vietnam",
        "Europe",
        "USA"
      ],
      "values": [
        48.0,
        7.8,
        12.5,
        5.2,
        2.1
      ]
    },
    "costStructure": {
      "labels": [
        "Ex-Showroom Price",
        "Battery Pack (Cells & BMS)",
        "Electric Motor & Inverter",
        "Chassis & Body Stamping",
        "Software & Assembly",
        "EBITDA",
        "PAT"
      ],
      "values": [
        100,
        38,
        16,
        18,
        12,
        10,
        6
      ]
    },
    "workingCapital": {
      "inventoryDays": 32,
      "receivableDays": 16,
      "payableDays": 56,
      "cashConversionCycle": -8
    },
    "creditProfile": {
      "netDebtToEbitda": "1.1x (Consolidated EV OEMs)",
      "creditRating": "AA / Stable",
      "costOfDebt": "7.9%",
      "liquidityBuffer": "\u20b914,000 Cr Committed EV Investment Lines"
    },
    "stockPerformance": {
      "labels": [
        "Q1 24",
        "Q2 24",
        "Q3 24",
        "Q4 24",
        "Q1 25",
        "Q2 25",
        "Q3 25",
        "Q4 25"
      ],
      "sectorIndex": [
        100,
        128,
        162,
        204,
        252,
        308,
        370,
        440
      ],
      "benchmarkNifty": [
        100,
        106,
        114,
        121,
        127,
        134,
        140,
        146
      ],
      "return1Yr": "+74.6%",
      "return3Yr": "+340.0%",
      "volatilityBeta": "1.48x"
    },
    "customerSegmentation": {
      "labels": [
        "Electric Two-Wheelers (E2W)",
        "Passenger Cars & Electric SUVs",
        "Commercial Three-Wheelers (E3W)",
        "Electric Buses & Light Commercial"
      ],
      "values": [
        65,
        18,
        12,
        5
      ],
      "incomeCohort": "Tata Motors leads passenger EVs with 70%+ share; Ola Electric, TVS, and Bajaj dominate the electric two-wheeler market."
    },
    "demandSupplyGap": {
      "labels": [
        "2023",
        "2024",
        "2025",
        "2026E",
        "2027E"
      ],
      "demand": [
        1.5,
        2.1,
        2.9,
        3.9,
        5.2
      ],
      "supply": [
        1.8,
        2.4,
        3.2,
        4.3,
        5.7
      ],
      "utilizationRate": "72.0% EV Assembly Capacity"
    },
    "techRadar": {
      "aiIntegration": "High",
      "roboticsAutomation": "Very High",
      "d2cOmnichannel": "High",
      "platformEcosystem": "Very High"
    },
    "swot": {
      "strengths": [
        "Clear government policy mandate with multi-billion-dollar PLI subsidies and GST set at just 5% for EVs (vs 28% for ICE)",
        "Substantial operational running cost savings for high-utilization commercial delivery riders",
        "Strong software-defined vehicle architectures allowing over-the-air performance and range improvements"
      ],
      "weaknesses": [
        "Heavy dependence on imported lithium cell chemistry and cathode active materials",
        "Underdeveloped public fast-charging grid along secondary highways and rural districts",
        "Volatile short-term consumer demand whenever central FAME subsidies are restructured"
      ],
      "opportunities": [
        "Localization of lithium-ion cell manufacturing unlocking scale economies and supply chain independence",
        "Battery-as-a-Service (BaaS) separating battery cost from vehicle purchase price to reduce upfront sticker price",
        "Export of affordable electric two-wheelers to Southeast Asia, Africa, and Latin America"
      ],
      "threats": [
        "Safety incidents involving battery pack thermal runaway damaging consumer trust",
        "Price dumping by heavily subsidized Chinese EV and cell manufacturers in Asian markets",
        "Alternative transition paths like compressed natural gas (CNG) and strong hybrids capturing budget buyers"
      ]
    },
    "news": [
      {
        "source": "Economic Times",
        "date": "Jul 2026",
        "title": "Tata Agratas begins trial cell production at \u20b913,000 Cr Sanand Gigafactory",
        "summary": "Initial 20 GWh capacity dedicated to Tata Motors passenger EVs and commercial bus programs."
      },
      {
        "source": "Mint",
        "date": "Jun 2026",
        "title": "PM E-DRIVE scheme spurs record electric 2-wheeler monthly registrations",
        "summary": "Electric two-wheeler sales cross 120,000 units per month as festive subsidies take effect."
      },
      {
        "source": "Business Standard",
        "date": "May 2026",
        "title": "Ola Electric achieves operational breakeven as cell cost drops below $95/kWh",
        "summary": "In-house 4680 cell integration improves vehicle gross margins by 450 basis points."
      }
    ],
    "dealTimeline": [
      {
        "date": "Aug 2025",
        "company": "Ola Electric Mobility",
        "value": "\u20b96,146 Cr IPO",
        "buyer": "Public Listing"
      },
      {
        "date": "May 2025",
        "company": "Ather Energy",
        "value": "$71M Round",
        "buyer": "National Investment and Infrastructure Fund (NIIF)"
      },
      {
        "date": "Jan 2025",
        "company": "Tata Agratas",
        "value": "\u20b913,000 Cr Gigafactory Pact",
        "buyer": "Tata Group & Gujarat Govt"
      }
    ],
    "interviewAngles": [
      "If battery pack costs drop from $120/kWh to $85/kWh for a 40 kWh electric car battery, calculate the cost reduction in rupees (USD/INR = 85) and the impact on vehicle gross margins.",
      "Evaluate whether Battery Swapping is economically superior to Fast Charging for commercial three-wheeler auto-rickshaws in high-density metros.",
      "How does a vehicle OEM structure a Battery-as-a-Service (BaaS) lease to achieve parity with internal combustion purchase prices?"
    ],
    "glossary": [
      {
        "term": "BMS",
        "definition": "Battery Management System \u2014 electronic system that manages a rechargeable battery by protecting it from operating outside its safe operating area."
      },
      {
        "term": "Gigafactory",
        "definition": "Large-scale battery manufacturing plant with annual production capacity measured in gigawatt-hours (GWh) of electrochemical storage."
      },
      {
        "term": "TCO",
        "definition": "Total Cost of Ownership \u2014 the comprehensive assessment of purchase price plus lifetime operating, fuel/electricity, and maintenance costs."
      }
    ],
    "sourceFile": "Individual Industry Decks/EV_industry.pdf",
    "sourcePath": "Individual Industry Decks/EV_industry.pdf",
    "sourceDoc": "EV_industry.pdf"
  },
  {
    "id": "fmcg",
    "numId": 17,
    "name": "FMCG (Fast-Moving Consumer Goods)",
    "sector": "Consumer",
    "icon": "shopping_bag",
    "color": "#c2410c",
    "description": "The Indian Fast-Moving Consumer Goods (FMCG) market reached US$ 287.91 billion in 2025 and is estimated at US$ 335.63 billion in 2026, projected to expand to US$ 725.26 billion by 2031 at a 16.3% CAGR (expected to double by 2032). Food & Beverage constitutes ~50% of the industry, followed by Personal Care (30%) and Home Care (20%), powered by 9 million+ retail touchpoints and rising rural disposable incomes.",
    "size": "US$ 335.6 Bn (FY2026) -> US$ 725.3 Bn (2031)",
    "marketSize": "US$ 335.6 Bn (FY2026)",
    "cagr": "16.3% CAGR",
    "cagrValue": 16.3,
    "players": [
      "Hindustan Unilever (HUL)",
      "ITC Limited",
      "Nestl\u00e9 India",
      "Britannia Industries",
      "Dabur India",
      "Godrej Consumer Products",
      "Marico"
    ],
    "majorPlayers": [
      "Hindustan Unilever",
      "ITC",
      "Nestl\u00e9 India",
      "Britannia",
      "Dabur India"
    ],
    "forces": {
      "newEntrants": "Medium",
      "buyerPower": "Medium",
      "supplierPower": "Medium",
      "substitutes": "Low",
      "rivalry": "High"
    },
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
    "forcesReasoning": {
      "newEntrants": "D2C online brands enter niche organic and beauty spaces easily, but scaling to 9 million general trade kirana stores requires decades of distribution capex.",
      "buyerPower": "Consumers can switch between shampoo or biscuit brands effortlessly, but strong emotional brand equity and low sachet price points (\u20b95-10) foster loyalty.",
      "supplierPower": "Agricultural commodity producers (wheat, milk, sugar, tea) have fragmented power; palm oil and chemical surfactant suppliers experience global price swings.",
      "substitutes": "Essential food, soap, hygiene, and laundry products have no viable substitutes in daily human living.",
      "rivalry": "Intense market share battles between multinational giants (HUL, Nestl\u00e9), homegrown conglomerates (ITC, Tata Consumer), and regional players."
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "FMCG_industry.pdf",
    "uploadedDate": "2026-08-01",
    "valueChain": {
      "inputs": "Agricultural Farm Produce (Wheat, Milk, Oilseeds), Specialty Chemicals (LAB, Palm Fatty Acids) & Packaging Films",
      "operations": "Continuous High-Speed Automated Food Processing, Chemical Saponification, Bottling & Multi-Layer Packaging",
      "distribution": "Central Mother Warehouses, Carrying & Forwarding (CFA) Depots, 10,000+ Stockists & 9M+ Kirana Stores",
      "endMarkets": "Rural Agricultural Households (38%), Semi-Urban Towns, Metropolitan Supermarkets & Quick Commerce Platforms",
      "marginDriver": "Premiumisation (Organic Foods, Skin Serums, Liquid Detergents) & High-Margin Direct Sachet Distribution",
      "bottleneck": "Raw Material Commodity Inflation (Palm Oil, Cocoa, Wheat) & Rural Wage Slowdown Vulnerability"
    },
    "regulatoryTimeline": [
      {
        "year": "2006",
        "title": "Food Safety and Standards (FSSAI) Act",
        "detail": "Integrated food safety regulations governing licensing, hygiene, nutritional disclosures, and ingredient testing."
      },
      {
        "year": "2017",
        "title": "Goods and Services Tax (GST) Implementation",
        "detail": "Eliminates state-border checkposts, enabling FMCG firms to consolidate hundreds of small state depots into mega-warehouses."
      },
      {
        "year": "2022",
        "title": "Single-Use Plastic Ban & EPR Norms",
        "detail": "Extended Producer Responsibility mandates consumer goods companies to recycle 100% of post-consumer plastic packaging."
      },
      {
        "year": "2026-27",
        "title": "Front-of-Pack Nutritional Labeling (FOPNL)",
        "detail": "Mandatory warning stars and color-coded salt, sugar, and saturated fat indicators on packaged foods."
      }
    ],
    "budgetHighlights": "Continuity in agricultural price support mechanisms, rural employment guarantee outlays (MGNREGA), and reduced basic customs duty on critical edible oil and processing inputs.",
    "marketContext": "FMCG majors in India command premium valuations (45-60x P/E multiples) driven by pristine debt-free balance sheets, ROE exceeding 40%, and dividend payout ratios above 70%. Rural markets contribute ~38% of FMCG sales and are growing faster than urban centers due to rising agricultural real wages.",
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
    "globalBenchmarking": {
      "metricLabel": "Per Capita FMCG Consumption (US$/year)",
      "labels": [
        "USA",
        "Germany",
        "China",
        "Global Avg",
        "India"
      ],
      "values": [
        3200,
        2400,
        850,
        920,
        165
      ]
    },
    "costStructure": {
      "labels": [
        "Gross Revenue",
        "Raw & Packaging Materials",
        "Advertising & Media Spend",
        "Freight & Logistics",
        "Employee Wages",
        "EBITDA",
        "PAT"
      ],
      "values": [
        100,
        48,
        12,
        6,
        9,
        25,
        19
      ]
    },
    "workingCapital": {
      "inventoryDays": 38,
      "receivableDays": 16,
      "payableDays": 68,
      "cashConversionCycle": -14
    },
    "creditProfile": {
      "netDebtToEbitda": "Net Cash Positive (HUL / ITC / Nestl\u00e9)",
      "creditRating": "AAA / Stable",
      "costOfDebt": "6.8%",
      "liquidityBuffer": "\u20b928,000+ Cr Cumulative Cash Reserves"
    },
    "stockPerformance": {
      "labels": [
        "Q1 24",
        "Q2 24",
        "Q3 24",
        "Q4 24",
        "Q1 25",
        "Q2 25",
        "Q3 25",
        "Q4 25"
      ],
      "sectorIndex": [
        100,
        106,
        114,
        124,
        136,
        150,
        166,
        184
      ],
      "benchmarkNifty": [
        100,
        106,
        114,
        121,
        127,
        134,
        140,
        146
      ],
      "return1Yr": "+22.8%",
      "return3Yr": "+84.0%",
      "volatilityBeta": "0.64x"
    },
    "customerSegmentation": {
      "labels": [
        "Rural Traditional Kiranas",
        "Urban General Trade",
        "Quick Commerce & E-Retail",
        "Modern Trade Supermarkets"
      ],
      "values": [
        38,
        32,
        16,
        14
      ],
      "incomeCohort": "Food & beverages account for 50% of revenue; Personal care generates 30%; Home care generates 20%."
    },
    "demandSupplyGap": {
      "labels": [
        "2023",
        "2024",
        "2025",
        "2026E",
        "2027E"
      ],
      "demand": [
        250,
        288,
        336,
        392,
        458
      ],
      "supply": [
        270,
        310,
        360,
        420,
        490
      ],
      "utilizationRate": "83.5% Manufacturing Capacity"
    },
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "High",
      "d2cOmnichannel": "Very High",
      "platformEcosystem": "High"
    },
    "swot": {
      "strengths": [
        "Unrivaled physical distribution moats reaching 9 million+ retail kirana counters",
        "Iconic household brands with multi-generational emotional trust and high pricing power",
        "Extraordinary return on equity (ROE >40%) and virtually zero long-term balance sheet debt"
      ],
      "weaknesses": [
        "Vulnerability of gross margins to global palm oil and petrochemical surfactant price shocks",
        "Slower product innovation cycles compared to agile venture-funded D2C startups",
        "High saturation and low single-digit volume growth in core metro urban product categories"
      ],
      "opportunities": [
        "Health, wellness, and organic foods capitalizing on post-pandemic clean-label consumer preferences",
        "Scaling premium personal care (sunscreen, face serums, male grooming) through quick commerce",
        "Expansion into under-penetrated rural categories such as dishwash liquids and liquid detergents"
      ],
      "threats": [
        "Spike in agricultural raw material costs due to climate shocks and erratic monsoon rainfall",
        "Margin squeeze from quick commerce platforms demanding higher trade discounts and listing fees",
        "Counterfeits and spurious look-alike brands eating into sales in rural wholesale markets"
      ]
    },
    "news": [
      {
        "source": "Economic Times",
        "date": "Jul 2026",
        "title": "Hindustan Unilever reports 6% underlying volume growth led by rural demand",
        "summary": "Gross margins expand 180 basis points as commodity inputs stabilize across tea and palm oil."
      },
      {
        "source": "Mint",
        "date": "Jun 2026",
        "title": "ITC Foods crosses \u20b918,000 Crore revenue milestone in branded packaged foods",
        "summary": "Aashirvaad and Sunfeast brands drive double-digit growth across regional markets."
      },
      {
        "source": "Business Standard",
        "date": "May 2026",
        "title": "Quick commerce channels contribute 18% of metropolitan FMCG sales",
        "summary": "FMCG giants create dedicated quick-commerce pack sizes and promotional assortments."
      }
    ],
    "dealTimeline": [
      {
        "date": "Mar 2026",
        "company": "Capital Foods (Ching's Secret)",
        "value": "\u20b95,100 Cr",
        "buyer": "Tata Consumer Products"
      },
      {
        "date": "Jan 2026",
        "company": "Organic India",
        "value": "\u20b91,900 Cr",
        "buyer": "Tata Consumer Products"
      },
      {
        "date": "Oct 2025",
        "company": "The Man Company",
        "value": "\u20b9400 Cr",
        "buyer": "Emami Ltd"
      }
    ],
    "interviewAngles": [
      "If crude palm oil prices jump by 25% and palm oil constitutes 35% of a soap bar's raw material cost, calculate the necessary price increase on a \u20b940 soap bar to maintain absolute gross profit per unit.",
      "Analyze whether an FMCG company should build its own D2C website or sell exclusively through quick commerce (Blinkit/Zepto) and modern trade.",
      "Why do FMCG companies prefer to keep the price of a sachet fixed at \u20b95 or \u20b910 while adjusting the grammage (weight) during inflation cycles (shrinkflation)?"
    ],
    "glossary": [
      {
        "term": "Kirana",
        "definition": "Traditional small, independent family-owned neighborhood mom-and-pop grocery store in India, serving as the backbone of FMCG distribution."
      },
      {
        "term": "General Trade vs Modern Trade",
        "definition": "General Trade refers to traditional kiranas and independent distributors; Modern Trade refers to organized supermarket chains and hypermarkets."
      },
      {
        "term": "Grammage / Shrinkflation",
        "definition": "The practice of reducing the quantity or weight of a product while keeping its sticker price unchanged to preserve unit economics during inflation."
      }
    ],
    "sourceFile": "Individual Industry Decks/FMCG_industry.pdf",
    "sourcePath": "Individual Industry Decks/FMCG_industry.pdf",
    "sourceDoc": "FMCG_industry.pdf"
  },
  {
    "id": "insurance",
    "numId": 18,
    "name": "Insurance",
    "sector": "Financial Services",
    "icon": "health_and_safety",
    "color": "#0369a1",
    "description": "India's insurance industry registered \u20b97.05 lakh crore in total premium income in FY25 (US$ 82.5 Bn). Overall insurance penetration stands at 3.7% of GDP (life 2.7%, non-life 1.0%), compared to a global benchmark near 7.0%, with premium density at US$ 97 per capita. In FY26, life new business premiums grew 15.7% to \u20b94.60 lakh crore, buoyed by the historic September 2025 GST exemption on individual life and health policies.",
    "size": "\u20b97.05 Lakh Cr Total Premium (FY25) ($82.5 Bn)",
    "marketSize": "\u20b97.05 Lakh Cr (FY25)",
    "cagr": "15.7% Life / 9.3% Non-Life",
    "cagrValue": 15.7,
    "players": [
      "Life Insurance Corporation (LIC)",
      "HDFC Life",
      "SBI Life",
      "ICICI Prudential Life",
      "ICICI Lombard General",
      "Star Health"
    ],
    "majorPlayers": [
      "LIC",
      "HDFC Life",
      "SBI Life",
      "ICICI Pru Life",
      "ICICI Lombard"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "Medium",
      "supplierPower": "Low",
      "substitutes": "Medium",
      "rivalry": "High"
    },
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
    "forcesReasoning": {
      "newEntrants": "Strict IRDAI capital adequacy, statutory solvency margin thresholds (1.5x minimum), and multi-year bancassurance distribution pacts.",
      "buyerPower": "Web aggregators (PolicyBazaar) offer instant premium comparisons, but claim settlement track records and brand reputation drive final buying.",
      "supplierPower": "Global reinsurers (Munich Re, Swiss Re, GIC Re) set treaty rates for catastrophe and mortality, but direct power over retail carriers is balanced.",
      "substitutes": "Bank fixed deposits, government small savings schemes, and mutual fund SIPs compete for household long-term financial savings.",
      "rivalry": "Intense rivalry between public sector giant LIC (58% market share) and aggressive private bancassurance champions (HDFC Life, SBI Life)."
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "Insurance_industry.pdf",
    "uploadedDate": "2026-08-01",
    "valueChain": {
      "inputs": "Actuarial Mortality/Morbidity Data, Capital Solvency Reserves & Reinsurance Treaties",
      "operations": "Medical Risk Underwriting, Policy Administration, Investment Portfolio Asset-Liability Management (ALM)",
      "distribution": "Bancassurance Bank Branches, Individual Agency Forces, Corporate Brokers & Digital Direct Aggregators",
      "endMarkets": "Retail Protection Seekers, Affluent Pension/Annuity Savers, Corporate Group Health & Commercial Property/Marine",
      "marginDriver": "Value of New Business (VNB Margin 24-28%), High Protection Share & 13th/61st Month Persistency Retention",
      "bottleneck": "First-Year Agency Churn, High Customer Acquisition Expenses & Health Claim Medical Inflation (12-14%)"
    },
    "regulatoryTimeline": [
      {
        "year": "2015",
        "title": "Insurance Laws Amendment Act",
        "detail": "Foreign direct investment cap in insurance raised from 26% to 49%."
      },
      {
        "year": "2021",
        "title": "FDI Liberalization to 74%",
        "detail": "Parliament approves 74% foreign direct investment in insurance companies with majority Indian board safeguards."
      },
      {
        "year": "2022",
        "title": "Bima Sugam Digital Exchange Initiative",
        "detail": "IRDAI approves unified electronic portal to buy, service, and settle claims across all insurers."
      },
      {
        "year": "2025",
        "title": "GST Exemption on Health & Term Life (Sep 2025)",
        "detail": "GST Council waives 18% GST on individual term life and retail health insurance policies, boosting demand by 21%."
      }
    ],
    "budgetHighlights": "Insurance for All by 2047 national mission, composite insurance licensing framework allowing single entities to underwrite both life and general policies, and standard micro-insurance tax exemptions.",
    "marketContext": "India is projected to become the world's 6th largest insurance market by 2032. The removal of the 18% GST burden in September 2025 dramatically expanded retail affordability, driving a 21% surge in life policy sales in October-November 2025 alone.",
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
    "globalBenchmarking": {
      "metricLabel": "Insurance Penetration (% of GDP)",
      "labels": [
        "USA",
        "UK",
        "Global Avg",
        "China",
        "India"
      ],
      "values": [
        11.8,
        10.5,
        7.0,
        4.1,
        3.7
      ]
    },
    "costStructure": {
      "labels": [
        "Gross Written Premium",
        "Net Claims & Benefits Paid",
        "Agent & Broker Commissions",
        "Operating & Tech Opex",
        "Taxation & Reinsurance",
        "Underwriting / Operating Profit",
        "PAT"
      ],
      "values": [
        100,
        64,
        11,
        10,
        3,
        12,
        8
      ]
    },
    "workingCapital": {
      "inventoryDays": 0,
      "receivableDays": 14,
      "payableDays": 32,
      "cashConversionCycle": -18
    },
    "creditProfile": {
      "netDebtToEbitda": "N/A (Solvency Ratio: 2.1x)",
      "creditRating": "AAA / Stable",
      "costOfDebt": "N/A",
      "liquidityBuffer": "Solvency Ratio 2.1x vs 1.5x Regulatory Minimum"
    },
    "stockPerformance": {
      "labels": [
        "Q1 24",
        "Q2 24",
        "Q3 24",
        "Q4 24",
        "Q1 25",
        "Q2 25",
        "Q3 25",
        "Q4 25"
      ],
      "sectorIndex": [
        100,
        112,
        126,
        142,
        160,
        182,
        206,
        232
      ],
      "benchmarkNifty": [
        100,
        106,
        114,
        121,
        127,
        134,
        140,
        146
      ],
      "return1Yr": "+36.2%",
      "return3Yr": "+132.0%",
      "volatilityBeta": "0.85x"
    },
    "customerSegmentation": {
      "labels": [
        "Participating Life Savings",
        "Unit-Linked (ULIPs)",
        "Pure Term Protection",
        "Retail & Group Health",
        "General Motor & Property"
      ],
      "values": [
        34,
        26,
        15,
        14,
        11
      ],
      "incomeCohort": "LIC commands ~58% market share; top 4 private life insurers (SBI Life, HDFC Life, ICICI Pru, Max) control 72% of private APE."
    },
    "demandSupplyGap": {
      "labels": [
        "2023",
        "2024",
        "2025",
        "2026E",
        "2027E"
      ],
      "demand": [
        6.2,
        7.0,
        8.1,
        9.4,
        10.9
      ],
      "supply": [
        6.2,
        7.0,
        8.1,
        9.4,
        10.9
      ],
      "utilizationRate": "100% Policy Underwriting Capacity"
    },
    "techRadar": {
      "aiIntegration": "High",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "Very High",
      "platformEcosystem": "High"
    },
    "swot": {
      "strengths": [
        "Massive captive investment float generating reliable treasury income across multi-decade durations",
        "Bancassurance distribution architecture offering captive, low-cost access to millions of bank account holders",
        "High customer switching barriers once multi-year life policies are initiated"
      ],
      "weaknesses": [
        "Low share of pure protection term insurance compared to tax-saving traditional savings products",
        "High agency channel attrition requiring constant expenditure on agent recruitment and retraining",
        "Vulnerability of health insurance underwriting margins to hospital medical bill inflation"
      ],
      "opportunities": [
        "Bima Sugam digital exchange acting as the 'UPI of insurance' to democratize distribution",
        "Specialized health insurance riders targeting critical illnesses, cancer, and outpatient (OPD) care",
        "Pension and annuity products serving India's rapidly expanding demographic of senior retirees"
      ],
      "threats": [
        "Surges in catastrophic health claim payouts during unexpected pandemic or climate events",
        "Regulatory caps on surrender charges and distributor commissions reducing agent incentives",
        "Direct customer disintermediation by non-traditional insurtech digital platforms"
      ]
    },
    "news": [
      {
        "source": "Economic Times",
        "date": "Jul 2026",
        "title": "Life insurance new business premium climbs 15.7% YoY on GST relief",
        "summary": "Individual term protection policies surge 28% in volume following complete waiver of 18% GST."
      },
      {
        "source": "Mint",
        "date": "Jun 2026",
        "title": "IRDAI prepares final launch guidelines for Bima Sugam portal",
        "summary": "Single platform will connect all 74 life and general insurers for paperless instant policy issuance and claim tracking."
      },
      {
        "source": "Business Standard",
        "date": "May 2026",
        "title": "HDFC Life posts Value of New Business margin of 26.8%",
        "summary": "Product mix optimization toward high-margin annuity and protection products drives profitability."
      }
    ],
    "dealTimeline": [
      {
        "date": "Mar 2026",
        "company": "Manipal Cigna Health",
        "value": "\u20b9500 Cr Growth Capital",
        "buyer": "Manipal Education and Medical Group"
      },
      {
        "date": "Dec 2025",
        "company": "Max Life Insurance",
        "value": "\u20b91,612 Cr Stake Purchase",
        "buyer": "Axis Bank Expansion"
      },
      {
        "date": "Jul 2025",
        "company": "Reliance General Insurance",
        "value": "Resolution Bidding",
        "buyer": "Hinduja Group / IndusInd"
      }
    ],
    "interviewAngles": [
      "An insurer sells \u20b91,000 Cr in Annualized Premium Equivalent (APE) with a 26% Value of New Business (VNB) margin. Calculate the present value of future profits generated by this cohort.",
      "Analyze how the September 2025 removal of 18% GST on health insurance impacts price elasticity of demand for a family floater policy costing \u20b925,000.",
      "Explain why the 13th-month persistency ratio and 61st-month persistency ratio are the most critical operational health indicators for a life insurer."
    ],
    "glossary": [
      {
        "term": "APE",
        "definition": "Annualized Premium Equivalent \u2014 standard industry metric measuring new business volume (100% of regular premiums + 10% of single premiums)."
      },
      {
        "term": "VNB Margin",
        "definition": "Value of New Business Margin \u2014 the present value of future expected profits on new policies sold during a period, expressed as a percentage of APE."
      },
      {
        "term": "Solvency Ratio",
        "definition": "The ratio of an insurer's available capital to its regulatory required capital; Indian insurers must maintain at least 1.5x (150%)."
      }
    ],
    "sourceFile": "Individual Industry Decks/Insurance_industry.pdf",
    "sourcePath": "Individual Industry Decks/Insurance_industry.pdf",
    "sourceDoc": "Insurance_industry.pdf"
  },
  {
    "id": "oil-and-gas",
    "numId": 19,
    "name": "Oil & Gas",
    "sector": "Energy",
    "icon": "oil_barrel",
    "color": "#3f6212",
    "description": "India is the world's 4th largest crude refiner and 3rd largest oil consumer, with domestic refining capacity reaching 258.12 MMTPA in FY25 (up from 251 MMTPA in FY24). Petroleum product exports reached 65.08 million tonnes in FY25 and 56.94 million tonnes in 11M FY26. The sector is led by state refiners (IOCL, BPCL, HPCL) and Reliance Industries' Jamnagar mega-complex (world's largest single-site refinery).",
    "size": "258.12 MMTPA Refining Capacity (FY25)",
    "marketSize": "258.12 MMTPA (Refining Capacity)",
    "cagr": "4.2% Refining Expansion",
    "cagrValue": 4.2,
    "players": [
      "Indian Oil Corporation (IOCL)",
      "Reliance Industries (RIL)",
      "Bharat Petroleum (BPCL)",
      "Hindustan Petroleum (HPCL)",
      "ONGC",
      "GAIL India"
    ],
    "majorPlayers": [
      "Indian Oil (IOCL)",
      "Reliance Industries",
      "Bharat Petroleum",
      "ONGC",
      "GAIL"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "Low",
      "supplierPower": "High",
      "substitutes": "Medium",
      "rivalry": "High"
    },
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
    "forcesReasoning": {
      "newEntrants": "Billion-dollar coastal refinery capex, pipeline rights of way, national security regulations, and retail pump network moats.",
      "buyerPower": "Retail motorists and industrial fuel consumers have low bargaining power as domestic petrol/diesel pricing reflects international benchmark parity.",
      "supplierPower": "High bargaining power of OPEC+ crude oil exporting nations setting global production quotas and geopolitical price floors.",
      "substitutes": "Electric vehicles, compressed natural gas (CNG), ethanol blending (20%), and solar green hydrogen are emerging energy alternatives.",
      "rivalry": "Competition across coastal and inland refining hubs, retail fuel station market share, and commercial petrochemical supply contracts."
    },
    "trend": "stable",
    "outlook": "Stable",
    "uploadedDoc": "Oil & Gas_industry.pdf",
    "uploadedDate": "2026-08-01",
    "valueChain": {
      "inputs": "Imported Heavy & Sour Crude Oil (88% import dependency), Natural Gas & Offshore Exploration Blocks",
      "operations": "Atmospheric Distillation, Fluid Catalytic Cracking (FCC), Hydrocracking & Petrochemical Steam Cracking",
      "distribution": "Cross-Country Pipeline Grids, Railway Tanker Rakes, Coastal Shipping & 90,000+ Retail Fuel Stations",
      "endMarkets": "Automotive Transport (Diesel/Petrol 65%), Aviation (ATF 8%), Industrial Heating/Power & Petrochemical Plastics",
      "marginDriver": "Gross Refining Margins (GRM $8-12/bbl), Petrochemical Crack Spreads & High-Margin Aviation Fuel",
      "bottleneck": "High 88% Crude Import Dependency, Middle Eastern Shipping Chokepoints & Refined Product Fuel Taxes"
    },
    "regulatoryTimeline": [
      {
        "year": "2016",
        "title": "Hydrocarbon Exploration Licensing Policy (HELP)",
        "detail": "Uniform licensing for conventional and unconventional hydrocarbons with revenue-sharing contracts."
      },
      {
        "year": "2020",
        "title": "Deregulation of Auto Fuel Pricing",
        "detail": "State oil marketing companies granted dynamic daily pricing flexibility linked to rolling 15-day international averages."
      },
      {
        "year": "2023",
        "title": "National Green Hydrogen Mission",
        "detail": "\u20b919,744 crore mission mandating oil refineries to replace grey hydrogen with green hydrogen in desulfurization."
      },
      {
        "year": "2025",
        "title": "20% Ethanol Blending (E20) Target",
        "detail": "National rollout of 20% ethanol blended motor spirit across fuel dispensing stations ahead of original 2030 target."
      }
    ],
    "budgetHighlights": "Strategic Petroleum Reserve (SPR) underground cavern expansion, customs duty rationalization on LNG and LPG imports, and capital grants for City Gas Distribution (CGD) pipe connections.",
    "marketContext": "India refines more crude than it consumes, serving as a vital regional fuel exporter to Europe and Asia. Domestically, City Gas Distribution networks now cover 88% of India's population across 300+ Geographical Areas (GAs), driving massive adoption of piped natural gas (PNG) and CNG vehicles.",
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
    "globalBenchmarking": {
      "metricLabel": "Crude Refining Capacity (MMTPA)",
      "labels": [
        "USA",
        "China",
        "Russia",
        "India",
        "Japan"
      ],
      "values": [
        910,
        890,
        330,
        258,
        160
      ]
    },
    "costStructure": {
      "labels": [
        "Gross Revenue",
        "Crude Oil Feedstock Costs",
        "Energy & Refining Fuel",
        "Transportation & Pipeline Opex",
        "Excise Duties & Taxes",
        "EBITDA",
        "PAT"
      ],
      "values": [
        100,
        68,
        6,
        4,
        11,
        7,
        4
      ]
    },
    "workingCapital": {
      "inventoryDays": 42,
      "receivableDays": 12,
      "payableDays": 48,
      "cashConversionCycle": 6
    },
    "creditProfile": {
      "netDebtToEbitda": "1.2x (Consolidated Oil Sector)",
      "creditRating": "AAA / Stable",
      "costOfDebt": "7.1%",
      "liquidityBuffer": "\u20b942,000 Cr Undrawn Sovereign Credit Lines"
    },
    "stockPerformance": {
      "labels": [
        "Q1 24",
        "Q2 24",
        "Q3 24",
        "Q4 24",
        "Q1 25",
        "Q2 25",
        "Q3 25",
        "Q4 25"
      ],
      "sectorIndex": [
        100,
        114,
        128,
        144,
        158,
        174,
        192,
        210
      ],
      "benchmarkNifty": [
        100,
        106,
        114,
        121,
        127,
        134,
        140,
        146
      ],
      "return1Yr": "+28.2%",
      "return3Yr": "+110.0%",
      "volatilityBeta": "0.92x"
    },
    "customerSegmentation": {
      "labels": [
        "Retail Diesel (High-Speed Diesel)",
        "Retail Motor Spirit (Petrol)",
        "Petrochemical Intermediates",
        "Aviation Turbine Fuel & Shipping",
        "LPG Domestic Cooking"
      ],
      "values": [
        38,
        26,
        14,
        12,
        10
      ],
      "incomeCohort": "IOCL leads with 32% refining market share; Reliance Industries controls 27%; BPCL controls 14%; HPCL controls 10%."
    },
    "demandSupplyGap": {
      "labels": [
        "2023",
        "2024",
        "2025",
        "2026E",
        "2027E"
      ],
      "demand": [
        220,
        233,
        246,
        260,
        275
      ],
      "supply": [
        251,
        258,
        270,
        288,
        310
      ],
      "utilizationRate": "98.4% Domestic Refinery Operating Run Rate"
    },
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "High",
      "d2cOmnichannel": "Medium",
      "platformEcosystem": "Medium"
    },
    "swot": {
      "strengths": [
        "World's most complex refining assets capable of processing cheap ultra-heavy sour crude slates",
        "Extensive downstream retail network of 90,000+ pumps commanding supreme national mindshare",
        "Sovereign backing ensuring uninterrupted supply logistics and crude procurement contracts"
      ],
      "weaknesses": [
        "Vulnerability to international oil supply shocks and Red Sea maritime freight spikes",
        "Low retail fuel marketing margins during election or inflation cycles due to price freezes",
        "Heavy long-term capital tied to carbon-intensive assets facing global decarbonization"
      ],
      "opportunities": [
        "Petrochemical expansion capturing value-added polymer and synthetic fiber margins",
        "Setting up 5,000 Compressed Biogas (CBG) plants using municipal and agricultural waste",
        "Green hydrogen electrolysis supplying zero-carbon energy for industrial desulfurization"
      ],
      "threats": [
        "Rapid electrification of two-wheelers and buses flattening domestic diesel and petrol volume demand",
        "Global crude oil benchmark spikes above $100/bbl causing marketing losses for public sector OMCs",
        "Carbon border adjustment taxes on exported petroleum products in European markets"
      ]
    },
    "news": [
      {
        "source": "Economic Times",
        "date": "Jul 2026",
        "title": "Indian refineries operate at 102% throughput to meet Asian export demand",
        "summary": "Refined petroleum exports reach 56.9 million tonnes led by diesel and high-octane gasoline."
      },
      {
        "source": "Mint",
        "date": "Jun 2026",
        "title": "State oil firms commit \u20b92.5 Lakh Crore toward green hydrogen and solar buildout",
        "summary": "IOCL, BPCL, and HPCL target net-zero Scope 1 and Scope 2 operational emissions by 2040."
      },
      {
        "source": "Business Standard",
        "date": "May 2026",
        "title": "Reliance Jamnagar complex commissions advanced polymer cracking unit",
        "summary": "Expansion increases chemical integration index, insulating overall margins from crude crack volatility."
      }
    ],
    "dealTimeline": [
      {
        "date": "Jan 2026",
        "company": "Mahanagar Gas",
        "value": "\u20b9531 Cr",
        "buyer": "Unison Enviro Acquisition Integration"
      },
      {
        "date": "Oct 2025",
        "company": "Nayara Energy",
        "value": "\u20b96,000 Cr Petrochem Capex",
        "buyer": "Rosneft & Trafigura"
      },
      {
        "date": "May 2025",
        "company": "Bharat Petroleum",
        "value": "\u20b949,000 Cr Bina Refinery Expansion",
        "buyer": "BPCL Internal Capex"
      }
    ],
    "interviewAngles": [
      "If crude oil costs $80/barrel and an integrated refinery produces 45% diesel, 30% gasoline, and 15% petrochemicals with a 10% refining loss, calculate the Gross Refining Margin (GRM) per barrel.",
      "Analyze how the blending of 20% ethanol (E20) alters the supply chain economics for an Indian oil marketing company.",
      "Why do Indian coastal refiners like Reliance Jamnagar earn $3-5/bbl higher refining margins than standard European simple refineries?"
    ],
    "glossary": [
      {
        "term": "GRM (Gross Refining Margin)",
        "definition": "The difference between the total market value of petroleum products produced by a refinery and the cost of the crude oil used to produce them, per barrel."
      },
      {
        "term": "Nelson Complexity Index",
        "definition": "A measure of a refinery's secondary conversion capacity and ability to upgrade heavy sour crude into premium light fuels on a scale from 1 to 20."
      },
      {
        "term": "Crack Spread",
        "definition": "The pricing differential between a barrel of crude oil and the refined petroleum products (gasoline, diesel) extracted from it."
      }
    ],
    "sourceFile": "Individual Industry Decks/Oil & Gas_industry.pdf",
    "sourcePath": "Individual Industry Decks/Oil & Gas_industry.pdf",
    "sourceDoc": "Oil & Gas_industry.pdf"
  },
  {
    "id": "real-estate",
    "numId": 20,
    "name": "Real Estate",
    "sector": "Infrastructure & Real Estate",
    "icon": "domain",
    "color": "#b45309",
    "description": "India's real estate sector is projected to reach US$ 650 billion in 2025F, US$ 1 Trillion by 2030, and US$ 5.8 Trillion by 2047, contributing 13% of national GDP. The industry is the second-largest employer after agriculture. Propelled by RERA formalisation, urbanisation, and corporate developer consolidation, residential pre-sales in top-7 cities surpassed 450,000 units while Grade-A office absorption exceeded 55 million sq.ft.",
    "size": "US$ 650 Bn (2025F) -> US$ 1 Tn (2030)",
    "marketSize": "US$ 650 Bn (2025F)",
    "cagr": "19.5% CAGR",
    "cagrValue": 19.5,
    "players": [
      "DLF Ltd",
      "Macrotech Developers (Lodha)",
      "Godrej Properties",
      "Prestige Estates",
      "Oberoi Realty",
      "Sobha",
      "Embassy Office Parks REIT"
    ],
    "majorPlayers": [
      "DLF Ltd",
      "Macrotech (Lodha)",
      "Godrej Properties",
      "Prestige Estates"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "Medium",
      "supplierPower": "High",
      "substitutes": "Low",
      "rivalry": "High"
    },
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
    "forcesReasoning": {
      "newEntrants": "RERA compliance, mandatory escrow of 70% customer collections, multi-crore land parcel acquisitions, and municipal zoning clearances.",
      "buyerPower": "Homebuyers compare floor plans and amenities, but strong flight to quality favors branded corporate developers with proven track records.",
      "supplierPower": "High bargaining power of civil contractors and raw material suppliers (structural steel, cement, specialized elevators).",
      "substitutes": "Rental housing offers flexibility, but cultural wealth accumulation and tax incentives make residential property ownership the primary asset goal.",
      "rivalry": "Intense land acquisition auctions (Joint Development Agreements - JDAs) and premium luxury apartment launches among top tier-1 branded developers."
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "Real Estate_industry.pdf",
    "uploadedDate": "2026-08-01",
    "valueChain": {
      "inputs": "Clear-Title Land Sourcing, Joint Development Agreements (JDAs), Architectural Master Planning & Municipal Approvals",
      "operations": "Civil EPC Contracting, High-Rise Monolithic Concrete Pouring, Structural Engineering & Quality Assurance",
      "distribution": "Channel Partner Real Estate Brokers, Direct Corporate Digital Portals, NRI Wealth Roadshows & Model Show-Flats",
      "endMarkets": "Luxury Homebuyers (>\u20b92 Cr), Mid-Income Families (\u20b960L-\u20b91.5 Cr), Global GCC Office Tenants & Institutional REITs",
      "marginDriver": "Premium Luxury Housing Launches (30-38% EBITDA Margin) & Recurring Commercial Office Lease Rentals",
      "bottleneck": "Municipal Approval Timelines (Environment, Fire, Aviation) & Clear Title Urban Land Parcel Scarcity"
    },
    "regulatoryTimeline": [
      {
        "year": "2016",
        "title": "Real Estate (Regulation and Development) Act (RERA)",
        "detail": "Mandates project registration, carpet area definitions, and 70% customer funds escrowed in designated bank accounts."
      },
      {
        "year": "2019",
        "title": "SWAMIH Investment Fund Launch",
        "detail": "\u20b925,000 crore government-backed fund established to provide last-mile completion financing for stalled housing projects."
      },
      {
        "year": "2023",
        "title": "SEBI SM REIT Regulations",
        "detail": "Small and Medium Real Estate Investment Trusts framework enabling fractional ownership of properties from \u20b910 lakh."
      },
      {
        "year": "2026-27",
        "title": "Unified Digital Land Registry (UDLR)",
        "detail": "Aadhaar-linked GIS land record digitization across major states eliminating title disputes and speeding up project sanctions."
      }
    ],
    "budgetHighlights": "Pradhan Mantri Awas Yojana (PMAY 2.0) with \u20b92.2 lakh crore budgetary support, tax deductions on home loan interest under Section 24, and infrastructure status for affordable rental housing.",
    "marketContext": "The sector has undergone a seismic shift toward balance sheet de-leveraging. DLF is completely net-debt positive with net cash, while Macrotech (Lodha) reduced net-debt-to-equity to 0.2x, generating peak operating cash flows and recording inventory absorption cycles under 12 months in Tier-1 cities.",
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
    "globalBenchmarking": {
      "metricLabel": "Real Estate Contribution to GDP (%)",
      "labels": [
        "China",
        "USA",
        "UK",
        "Global Avg",
        "India"
      ],
      "values": [
        26.0,
        18.0,
        14.5,
        15.0,
        13.0
      ]
    },
    "costStructure": {
      "labels": [
        "Sales Collections",
        "Land Acquisition / JDA Share",
        "Construction & Contracting",
        "Statutory Approvals & Taxes",
        "Marketing & Brokerage",
        "EBITDA",
        "PAT"
      ],
      "values": [
        100,
        28,
        32,
        7,
        5,
        28,
        18
      ]
    },
    "workingCapital": {
      "inventoryDays": 380,
      "receivableDays": 24,
      "payableDays": 85,
      "cashConversionCycle": 319
    },
    "creditProfile": {
      "netDebtToEbitda": "0.3x (Top-5 Listed Developers)",
      "creditRating": "AA+ / Stable",
      "costOfDebt": "8.2%",
      "liquidityBuffer": "\u20b922,000 Cr Undrawn Banking Facilities & Escrows"
    },
    "stockPerformance": {
      "labels": [
        "Q1 24",
        "Q2 24",
        "Q3 24",
        "Q4 24",
        "Q1 25",
        "Q2 25",
        "Q3 25",
        "Q4 25"
      ],
      "sectorIndex": [
        100,
        126,
        160,
        202,
        250,
        308,
        375,
        450
      ],
      "benchmarkNifty": [
        100,
        106,
        114,
        121,
        127,
        134,
        140,
        146
      ],
      "return1Yr": "+80.0%",
      "return3Yr": "+350.0%",
      "volatilityBeta": "1.45x"
    },
    "customerSegmentation": {
      "labels": [
        "Mid-Income Housing (\u20b960L-\u20b91.5 Cr)",
        "Luxury & Ultra-Luxury (>\u20b92 Cr)",
        "Commercial Grade-A Office Leases",
        "Industrial Logistics & Retail Parks"
      ],
      "values": [
        42,
        36,
        14,
        8
      ],
      "incomeCohort": "Top 7 metropolitan cities (Mumbai MMR, NCR, Bengaluru, Hyderabad, Pune, Chennai, Kolkata) generate 82% of organized residential sales."
    },
    "demandSupplyGap": {
      "labels": [
        "2023",
        "2024",
        "2025",
        "2026E",
        "2027E"
      ],
      "demand": [
        380,
        420,
        470,
        525,
        590
      ],
      "supply": [
        350,
        390,
        440,
        495,
        560
      ],
      "utilizationRate": "11.2 Months of Inventory (Healthy Absorption)"
    },
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "High"
    },
    "swot": {
      "strengths": [
        "Strong structural de-leveraging with tier-1 developers holding zero or minimal net debt",
        "RERA governance creating high barriers to entry for unscrupulous unorganized builders",
        "Massive un-launched land banks acquired at low historical costs by leaders like DLF and Godrej"
      ],
      "weaknesses": [
        "Long working capital cycles with residential projects requiring 3-5 years from launch to handover",
        "High vulnerability to local municipal corruption and arbitrary development control regulations",
        "Low rental yields on residential properties (2.5-3.5%) compared to commercial assets (7-8.5%)"
      ],
      "opportunities": [
        "Small and Medium (SM) REITs unlocking institutional liquidity for retail and warehousing assets",
        "Co-living and senior citizen retirement communities catering to changing urban demographics",
        "Expansion into high-growth Tier-2 economic engines (Ahmedabad, Kochi, Jaipur, Chandigarh)"
      ],
      "threats": [
        "Prolonged mortgage rate hikes curtailing purchasing power for mid-income home seekers",
        "Unforeseen judicial stays on environmental and coastal regulation zone (CRZ) clearances",
        "Over-supply in specific micro-markets leading to temporary inventory overhangs"
      ]
    },
    "news": [
      {
        "source": "Economic Times",
        "date": "Jul 2026",
        "title": "DLF sells out \u20b95,500 Cr ultra-luxury Gurugram project within 72 hours of launch",
        "summary": "Super-luxury apartments priced at \u20b918 Cr+ experience intense demand from domestic CXOs and NRIs."
      },
      {
        "source": "Mint",
        "date": "Jun 2026",
        "title": "Commercial office leasing breaches 55 million sq.ft on GCC expansion",
        "summary": "Global Capability Centres account for over 42% of total Grade-A office absorption across Bengaluru and Hyderabad."
      },
      {
        "source": "Business Standard",
        "date": "May 2026",
        "title": "Macrotech Developers achieves record annual pre-sales of \u20b917,500 Crore",
        "summary": "Company achieves target net-debt-to-equity of 0.18x while generating \u20b95,200 Cr in operating cash flows."
      }
    ],
    "dealTimeline": [
      {
        "date": "Feb 2026",
        "company": "Prestige Estates",
        "value": "\u20b95,000 Cr QIP",
        "buyer": "Abu Dhabi Investment Authority & Institutional Funds"
      },
      {
        "date": "Nov 2025",
        "company": "Brookfield India REIT",
        "value": "$1.4B Asset Acquisition",
        "buyer": "Brookfield Asset Management"
      },
      {
        "date": "Jul 2025",
        "company": "Godrej Properties",
        "value": "\u20b93,500 Cr Land Buyout",
        "buyer": "Kandivali Mumbai Project"
      }
    ],
    "interviewAngles": [
      "A developer launches a 1 million sq.ft residential project at \u20b912,000/sq.ft. Construction cost is \u20b94,500/sq.ft, land cost is \u20b93,000/sq.ft, and approval/marketing costs are \u20b91,200/sq.ft. Calculate project EBITDA margin.",
      "Compare the financial and risk profiles of outright land purchases vs Joint Development Agreements (JDAs) sharing 35% of top-line revenue with the landowner.",
      "Explain how a commercial real estate developer monetizes Grade-A office assets via Real Estate Investment Trusts (REITs) to recycle development capital."
    ],
    "glossary": [
      {
        "term": "RERA",
        "definition": "Real Estate (Regulation and Development) Act \u2014 federal legislation establishing regulatory oversight, mandatory project registration, and financial discipline."
      },
      {
        "term": "JDA",
        "definition": "Joint Development Agreement \u2014 an agreement between a landowner and a developer where the landowner contributes land and the developer undertakes construction, sharing revenues or built-up area."
      },
      {
        "term": "Months of Inventory",
        "definition": "The number of months it would take to sell all currently unsold homes in a market at the current pace of sales; under 12-15 months indicates a strong seller's market."
      }
    ],
    "sourceFile": "Individual Industry Decks/Real Estate_industry.pdf",
    "sourcePath": "Individual Industry Decks/Real Estate_industry.pdf",
    "sourceDoc": "Real Estate_industry.pdf"
  },
  {
    "id": "saas",
    "numId": 21,
    "name": "Cloud & SaaS",
    "sector": "Technology",
    "icon": "cloud",
    "color": "#4f46e5",
    "description": "India's SaaS (Software as a Service) ecosystem has expanded ~4x in five years, growing from ~$3.5 billion to over $13 billion in annual recurring revenue (ARR), on track to reach $35 billion ARR by FY2027E. Backed by 1,600+ funded SaaS ventures and 27+ unicorns, the sector is experiencing a valuation reset toward disciplined capital efficiency (Rule of 40) and embedded GenAI capabilities.",
    "size": "US$ 35 Bn ARR (FY27E) / $13B+ Current ARR",
    "marketSize": "US$ 35 Bn ARR (FY2027E)",
    "cagr": "17.55% CAGR (Global $976 Bn)",
    "cagrValue": 17.55,
    "players": [
      "Freshworks",
      "Zoho Corporation",
      "Postman",
      "BrowserStack",
      "Icertis",
      "Zenoti",
      "Chargebee",
      "Innovaccer"
    ],
    "majorPlayers": [
      "Freshworks",
      "Zoho",
      "Postman",
      "BrowserStack",
      "Icertis"
    ],
    "forces": {
      "newEntrants": "Medium",
      "buyerPower": "High",
      "supplierPower": "High",
      "substitutes": "Medium",
      "rivalry": "High"
    },
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
    "forcesReasoning": {
      "newEntrants": "AI-assisted coding and hyperscaler cloud tools lower initial software build costs, but global enterprise distribution and SOC-2 security moats protect incumbents.",
      "buyerPower": "Enterprise CIOs actively audit corporate SaaS stacks, consolidating redundant tools and enforcing aggressive contract renewal price cuts.",
      "supplierPower": "Cloud hyperscalers (AWS, Azure, GCP) and foundation AI model APIs (OpenAI, Anthropic) hold pricing power over hosting and inference tokens.",
      "substitutes": "Internal custom software built with open-source frameworks, and unified platform suites (Microsoft 365, Salesforce) displacing point solutions.",
      "rivalry": "Intense competition between AI-native startups and legacy SaaS incumbents fighting to prevent churn via embedded generative copilots."
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "SaaS_industry.pdf",
    "uploadedDate": "2026-08-01",
    "valueChain": {
      "inputs": "Full-Stack Software Engineers, Cloud Infrastructure (AWS/Azure/GCP) & Foundation AI Model APIs",
      "operations": "Continuous CI/CD Feature Deployment, Generative Copilot Engineering & Multi-Tenant Database Architecture",
      "distribution": "Product-Led Growth (PLG) Freemium Downloads, Inbound Content SEO & US/European Enterprise Inside Sales Teams",
      "endMarkets": "Global Mid-Market SMBs, Fortune 500 Enterprises, DevOps Engineering Teams & Healthcare/Financial Institutions",
      "marginDriver": "Net Revenue Retention (NRR >110%), Gross Profit Margins on Software Subscriptions (75-82%) & Annual Upfront Billings",
      "bottleneck": "Customer Churn in SMB Cohorts, GPU Inference Overhead & Lengthened Enterprise Sales Cycles"
    },
    "regulatoryTimeline": [
      {
        "year": "2018",
        "title": "EU General Data Protection Regulation (GDPR)",
        "detail": "Strict global consumer data privacy consent and right-to-be-forgotten architecture mandates."
      },
      {
        "year": "2020",
        "title": "SOC 2 Type II & ISO 27001 Standardization",
        "detail": "Mandatory security audits required for any SaaS product selling to US/European enterprise IT buyers."
      },
      {
        "year": "2023",
        "title": "India DPDP Act Enacted",
        "detail": "National data governance framework establishing obligations for data fiduciaries and cross-border transfer whitelists."
      },
      {
        "year": "2026-27",
        "title": "EU AI Act Compliance for SaaS",
        "detail": "Mandatory risk classifications and transparency disclosures for embedded AI decision-making algorithms."
      }
    ],
    "budgetHighlights": "Tax incentives for R&D expenditures, liberalized cross-border remittance frameworks, and government cloud procurement mandates favoring domestic SaaS platforms.",
    "marketContext": "In early 2026, public SaaS multiples completed a decade-plus valuation reset from pandemic highs of 15x-20x EV/Revenue down to historical medians of 3.2x-3.4x for traditional software, while AI-native leaders (such as Palantir at ~40x) command massive premiums. The focus has decisively shifted to the Rule of 40.",
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
    "globalBenchmarking": {
      "metricLabel": "Median Public SaaS EV / Forward Revenue Multiple (x)",
      "labels": [
        "AI-Native Leaders",
        "BVP Cloud Index",
        "Equal-Weight Index",
        "India SaaS Median",
        "Legacy Slower SaaS"
      ],
      "values": [
        38.5,
        7.8,
        3.3,
        4.2,
        3.1
      ]
    },
    "costStructure": {
      "labels": [
        "ARR / Subscription Revenue",
        "Sales & Marketing (CAC)",
        "R&D Software Engineering",
        "Cloud Hosting (AWS/Azure)",
        "General & Administrative",
        "EBITDA",
        "PAT / Free Cash Flow"
      ],
      "values": [
        100,
        36,
        24,
        14,
        10,
        16,
        12
      ]
    },
    "workingCapital": {
      "inventoryDays": 0,
      "receivableDays": 26,
      "payableDays": 38,
      "cashConversionCycle": -12
    },
    "creditProfile": {
      "netDebtToEbitda": "Net Cash Positive (Zoho / Freshworks)",
      "creditRating": "AA+ / Stable",
      "costOfDebt": "7.4%",
      "liquidityBuffer": "$3.2+ Bn Cash & Liquid Reserves"
    },
    "stockPerformance": {
      "labels": [
        "Q1 24",
        "Q2 24",
        "Q3 24",
        "Q4 24",
        "Q1 25",
        "Q2 25",
        "Q3 25",
        "Q4 25"
      ],
      "sectorIndex": [
        100,
        110,
        122,
        138,
        155,
        175,
        198,
        225
      ],
      "benchmarkNifty": [
        100,
        106,
        114,
        121,
        127,
        134,
        140,
        146
      ],
      "return1Yr": "+30.4%",
      "return3Yr": "+125.0%",
      "volatilityBeta": "1.32x"
    },
    "customerSegmentation": {
      "labels": [
        "US Enterprise & Mid-Market",
        "European Corporations",
        "India Domestic Enterprises",
        "Rest of World & APAC"
      ],
      "values": [
        54,
        22,
        14,
        10
      ],
      "incomeCohort": "Zoho generates $1.4B+ in profitable ARR; Freshworks generates $700M+ ARR; Postman and BrowserStack exceed $150M ARR."
    },
    "demandSupplyGap": {
      "labels": [
        "2023",
        "2024",
        "2025",
        "2026E",
        "2027E"
      ],
      "demand": [
        10.5,
        13.2,
        16.8,
        21.5,
        27.8
      ],
      "supply": [
        10.5,
        13.2,
        16.8,
        21.5,
        27.8
      ],
      "utilizationRate": "100% Scalable Cloud Multi-Tenant Architecture"
    },
    "techRadar": {
      "aiIntegration": "Very High",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "Very High",
      "platformEcosystem": "Very High"
    },
    "swot": {
      "strengths": [
        "Capital-efficient engineering cost structure enabling Zoho and Indian peers to generate 25%+ free cash flow margins",
        "High Gross Margin profile (75-80%) and high recurring revenue visibility through multi-year enterprise contracts",
        "Global product recognition and developer community love across tools like Postman and BrowserStack"
      ],
      "weaknesses": [
        "Geographic revenue exposure heavily concentrated in North American corporate IT spending",
        "Lower average contract value (ACV) compared to US Silicon Valley competitors with local enterprise field forces",
        "Execution challenges in moving upmarket from SMBs to large Fortune 500 accounts"
      ],
      "opportunities": [
        "Re-architecting SaaS workflows from per-seat billing to consumption/outcome-based pricing for AI agents",
        "Developing vertical SaaS platforms tailored specifically for emerging markets and domestic Indian MSMEs",
        "Consolidation through strategic M&A acquiring distressed or sub-scale venture-backed software point solutions"
      ],
      "threats": [
        "Generative AI copilots from Microsoft and Google eliminating the need for standalone third-party SaaS point apps",
        "Lengthening enterprise procurement approval cycles delaying new ARR bookings",
        "Cloud hosting and AI token inference cost inflation eroding software gross margins"
      ]
    },
    "news": [
      {
        "source": "TechCrunch",
        "date": "Jul 2026",
        "title": "Google completes monumental $32 Billion acquisition of cloud security leader Wiz",
        "summary": "Mega-deal signals intense hyperscaler appetite for unified enterprise cloud security and compliance platforms."
      },
      {
        "source": "Mint",
        "date": "Jun 2026",
        "title": "Zoho crosses $1.4 Billion in annual recurring revenue with 30% profit margin",
        "summary": "Bootstrapped software giant plans further expansion into semiconductor design tools and cloud datacenters."
      },
      {
        "source": "Economic Times",
        "date": "May 2026",
        "title": "Indian SaaS ecosystem on track to reach $35 Billion ARR milestone by FY27",
        "summary": "Over 75% of Indian enterprise SaaS vendors now ship native Generative AI capabilities."
      }
    ],
    "dealTimeline": [
      {
        "date": "Jul 2026",
        "company": "Wiz Cloud Security",
        "value": "$32.0B Mega Deal",
        "buyer": "Alphabet (Google)"
      },
      {
        "date": "Feb 2026",
        "company": "Postman",
        "value": "API Hub Expansion",
        "buyer": "Internal Product Launch"
      },
      {
        "date": "Aug 2025",
        "company": "Freshworks",
        "value": "$230M Share Buyback",
        "buyer": "Freshworks Inc"
      }
    ],
    "interviewAngles": [
      "A SaaS company has $100M in ARR, growing at 30% YoY with a 15% Free Cash Flow margin. Does it satisfy the 'Rule of 40', and how would public markets price its EV/Revenue multiple?",
      "If Customer Acquisition Cost (CAC) is $12,000, Average Revenue Per Account (ARPA) is $6,000/year, and gross margin is 80%, calculate the CAC payback period in months.",
      "Analyze how the transition from seat-based pricing to outcome/usage-based pricing alters a SaaS company's Net Revenue Retention (NRR) dynamics."
    ],
    "glossary": [
      {
        "term": "ARR",
        "definition": "Annual Recurring Revenue \u2014 the annualized value of a customer's active recurring software subscription contracts."
      },
      {
        "term": "NRR (Net Revenue Retention)",
        "definition": "The percentage of recurring revenue retained from existing customers over a period, including expansions, upgrades, and minus downgrades and churn."
      },
      {
        "term": "Rule of 40",
        "definition": "A benchmark principle stating that a software company's combined annual revenue growth rate and profit margin should exceed 40%."
      }
    ],
    "sourceFile": "Individual Industry Decks/SaaS_industry.pdf",
    "sourcePath": "Individual Industry Decks/SaaS_industry.pdf",
    "sourceDoc": "SaaS_industry.pdf"
  },
  {
    "id": "steel",
    "numId": 22,
    "name": "Steel & Metals",
    "sector": "Manufacturing & Materials",
    "icon": "precision_manufacturing",
    "color": "#475569",
    "description": "India is the 2nd largest crude steel producer in the world after China. In FY26 (Apr-Feb), crude steel output reached 153.6 MT, finished steel production touched 146.8 MT, and domestic consumption reached 147.7 MT. Total installed capacity reached 218.29 MTPA in FY26 (up from 200.33 MT in FY25), powered by central infrastructure projects, automotive demand, and industrial capex.",
    "size": "153.6 MT Crude Steel Output / 218.3 MT Capacity",
    "marketSize": "153.6 MT (FY26 Apr-Feb)",
    "cagr": "7.2% CAGR",
    "cagrValue": 7.2,
    "players": [
      "Tata Steel",
      "JSW Steel",
      "Steel Authority of India (SAIL)",
      "Jindal Steel & Power (JSPL)",
      "AM/NS India"
    ],
    "majorPlayers": [
      "Tata Steel",
      "JSW Steel",
      "SAIL",
      "JSPL",
      "AM/NS India"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "Medium",
      "supplierPower": "High",
      "substitutes": "Low",
      "rivalry": "High"
    },
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
    "forcesReasoning": {
      "newEntrants": "Massive capital expenditure of $900-1,000 per tonne of integrated capacity, iron ore captive mining auctions, and rail freight logistics.",
      "buyerPower": "Automotive OEMs and white goods manufacturers negotiate annual fixed contracts; retail construction buyers absorb market steel prices.",
      "supplierPower": "Domestic iron ore is abundant (India produces ~700 MT p.a.), but high supplier power exists among imported metallurgical coking coal miners in Australia.",
      "substitutes": "Aluminum and carbon fiber substitute steel in specialized aerospace and high-end automotive, but structural steel remains irreplaceable in heavy construction.",
      "rivalry": "Intense competition between private efficiency champions (JSW Steel, Tata Steel) and state giant SAIL on hot-rolled coil pricing and value-added alloy steel."
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "Steel_industry.pdf",
    "uploadedDate": "2026-08-01",
    "valueChain": {
      "inputs": "Iron Ore Fines/Lumps, Imported Metallurgical Coking Coal (Australia), Limestone & Dolomite",
      "operations": "Blast Furnace Ironmaking (BF-BOF) or DRI-EAF, Secondary Ladle Refining, Continuous Slab/Billet Casting & Rolling Mills",
      "distribution": "Dedicated Railway Rakes, Port Stockyards, Steel Service Centers & Multi-Brand TMT Rebar Distributors",
      "endMarkets": "Infrastructure & Building Construction (64%), Automotive Components (12%), Capital Goods & Heavy Engineering (10%), Pipes & Consumer Durables (14%)",
      "marginDriver": "Value-Added Special Steels (Automotive Cold-Rolled, Electrical Steel, API Linepipes) & Captive Iron Ore Self-Sufficiency",
      "bottleneck": "Heavy Coking Coal Import Dependence, Volatile Global Freight Tariffs & Carbon Border Taxes (EU CBAM)"
    },
    "regulatoryTimeline": [
      {
        "year": "2017",
        "title": "National Steel Policy (NSP)",
        "detail": "Sets strategic roadmap to expand India's total crude steel capacity to 300 MTPA by 2030."
      },
      {
        "year": "2021",
        "title": "PLI Scheme for Specialty Steel",
        "detail": "\u20b96,322 crore incentive program to build domestic capability in coated steel, electrical steel, and alloy tool steels."
      },
      {
        "year": "2023",
        "title": "Green Steel Decarbonization Task Force",
        "detail": "Policy roadmap mandating scrap-based Electric Arc Furnaces (EAF) and hydrogen direct reduction (DRI) pilot plants."
      },
      {
        "year": "2026-27",
        "title": "European Union CBAM Enforcement",
        "detail": "Carbon Border Adjustment Mechanism imposing carbon tariffs on steel exports into Europe, accelerating green steel investments."
      }
    ],
    "budgetHighlights": "Continuity in the 30% export duty on raw iron ore to preserve domestic supply, waiver of basic customs duty on coking coal and ferronickel imports, and capital allocations for National Infrastructure Pipeline projects.",
    "marketContext": "India's per capita steel consumption stands at ~90 kg against the global average of 220 kg, offering decades of structural expansion. In FY26, domestic steel consumption grew 11.5% YoY, outperforming all major global steel markets as infrastructure investments converted into record rebar and flat steel demand.",
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
    "globalBenchmarking": {
      "metricLabel": "Crude Steel Production (Million Tonnes, 2025)",
      "labels": [
        "China",
        "India",
        "Japan",
        "USA",
        "Russia"
      ],
      "values": [
        1015,
        154,
        87,
        80,
        75
      ]
    },
    "costStructure": {
      "labels": [
        "Gross Revenue",
        "Coking Coal & Fuel",
        "Iron Ore Mining / Purchase",
        "Power & Plant Conversion",
        "Rail Freight & Logistics",
        "EBITDA",
        "PAT"
      ],
      "values": [
        100,
        32,
        18,
        16,
        12,
        14,
        8
      ]
    },
    "workingCapital": {
      "inventoryDays": 58,
      "receivableDays": 22,
      "payableDays": 64,
      "cashConversionCycle": 16
    },
    "creditProfile": {
      "netDebtToEbitda": "2.2x (JSW / Tata Steel Consolidated)",
      "creditRating": "AA / Stable",
      "costOfDebt": "8.1%",
      "liquidityBuffer": "\u20b926,000 Cr Cash & Committed Bank Lines"
    },
    "stockPerformance": {
      "labels": [
        "Q1 24",
        "Q2 24",
        "Q3 24",
        "Q4 24",
        "Q1 25",
        "Q2 25",
        "Q3 25",
        "Q4 25"
      ],
      "sectorIndex": [
        100,
        112,
        126,
        142,
        160,
        180,
        204,
        230
      ],
      "benchmarkNifty": [
        100,
        106,
        114,
        121,
        127,
        134,
        140,
        146
      ],
      "return1Yr": "+34.5%",
      "return3Yr": "+130.0%",
      "volatilityBeta": "1.28x"
    },
    "customerSegmentation": {
      "labels": [
        "Infrastructure & Civil Construction",
        "Automotive & Auto Components",
        "Capital Goods & Heavy Machinery",
        "Pipes, Tubes & Packaging"
      ],
      "values": [
        64,
        12,
        12,
        12
      ],
      "incomeCohort": "Long steel (TMT bars/wire rods) represents 54% of domestic demand; Flat steel (HR/CR coils) represents 46%."
    },
    "demandSupplyGap": {
      "labels": [
        "2023",
        "2024",
        "2025",
        "2026E",
        "2027E"
      ],
      "demand": [
        120,
        133,
        148,
        164,
        182
      ],
      "supply": [
        160,
        178,
        200,
        218,
        240
      ],
      "utilizationRate": "78.5% Crude Steel Melting Capacity"
    },
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "High",
      "d2cOmnichannel": "Low",
      "platformEcosystem": "Medium"
    },
    "swot": {
      "strengths": [
        "Abundant domestic high-grade iron ore reserves (India produces ~700 MT p.a.) ensuring self-sufficiency for integrated mills",
        "Modern, highly automated rolling mills with world-class operating conversion costs (\u20b928,000-32,000/tonne)",
        "Strong domestic consumption growth insulating Indian mills from global trade slowdowns"
      ],
      "weaknesses": [
        "Severe structural dependency on imported coking coal creating permanent raw material margin exposure",
        "High carbon intensity of blast furnace operations (approx 2.2 tonnes of CO2 per tonne of crude steel)",
        "Vulnerability to Chinese export dumping during periods of Chinese domestic real estate contraction"
      ],
      "opportunities": [
        "Scaling specialized automotive and electrical CRGO steel production under the \u20b96,322 Cr PLI scheme",
        "Transitioning to scrap-based Electric Arc Furnaces and Hydrogen Direct Reduced Iron (DRI) for green steel certification",
        "Supplying mega infrastructure projects along the India-Middle East-Europe Economic Corridor (IMEC)"
      ],
      "threats": [
        "EU CBAM carbon taxes eroding export competitiveness for Indian steel in European markets",
        "Sudden spikes in Australian coking coal prices compressing per-tonne EBITDA",
        "Freight rate increases and rake allocation bottlenecks on busy railway freight corridors"
      ]
    },
    "news": [
      {
        "source": "Economic Times",
        "date": "Jul 2026",
        "title": "JSW Steel approves \u20b919,000 Cr expansion to take Vijayanagar capacity to 30 MTPA",
        "summary": "Mega project will add advanced hot strip mills and low-carbon gas cleaning plants."
      },
      {
        "source": "Mint",
        "date": "Jun 2026",
        "title": "Crude steel output reaches 153.6 MT in FY26 as domestic consumption climbs 11.5%",
        "summary": "India remains the standout growth bright spot across global steel manufacturing markets."
      },
      {
        "source": "Business Standard",
        "date": "May 2026",
        "title": "Tata Steel commences trial runs for hydrogen injection in Blast Furnace at Jamshedpur",
        "summary": "Groundbreaking green steel trial reduces coal consumption and carbon emissions by 10-12%."
      }
    ],
    "dealTimeline": [
      {
        "date": "Jan 2026",
        "company": "Bhushan Power & Steel",
        "value": "Capacity Integration",
        "buyer": "JSW Steel Ltd"
      },
      {
        "date": "Aug 2025",
        "company": "Tata Steel UK Port Talbot",
        "value": "\u00a31.25B Green EAF Deal",
        "buyer": "UK Govt Grant & Tata Steel"
      },
      {
        "date": "Mar 2025",
        "company": "NMDC Steel Ltd",
        "value": "3 MTPA Nagarnar Plant Listing",
        "buyer": "Public Listing & Strategic Divestment"
      }
    ],
    "interviewAngles": [
      "If international coking coal prices rise from $250/t to $320/t and it takes 0.8 tonnes of coking coal to produce 1 tonne of crude steel, calculate the required price increase on hot-rolled coil to protect EBITDA/tonne.",
      "Compare the economics and carbon footprint of the Blast Furnace-Basic Oxygen Furnace (BF-BOF) route vs the Direct Reduced Iron-Electric Arc Furnace (DRI-EAF) route.",
      "How will the European Union's Carbon Border Adjustment Mechanism (CBAM) impact the export realization of an Indian steel mill producing 2.2 tonnes of CO2 per tonne of steel?"
    ],
    "glossary": [
      {
        "term": "BF-BOF",
        "definition": "Blast Furnace-Basic Oxygen Furnace \u2014 the traditional integrated steelmaking route utilizing iron ore, coke, and limestone to produce liquid hot metal."
      },
      {
        "term": "EBITDA per Tonne",
        "definition": "Operating profit divided by metric tonnes of steel sold \u2014 the universal efficiency benchmark in the global steel industry."
      },
      {
        "term": "CBAM",
        "definition": "Carbon Border Adjustment Mechanism \u2014 EU tariff on carbon-intensive imports (steel, cement, aluminum) based on embedded carbon emissions during production."
      }
    ],
    "sourceFile": "Individual Industry Decks/Steel_industry.pdf",
    "sourcePath": "Individual Industry Decks/Steel_industry.pdf",
    "sourceDoc": "Steel_industry.pdf"
  }
];

const DEFAULT_UPLOAD_HISTORY = [
  {
    "id": "master_deck_2026_27",
    "fileName": "IndustryDecks 2026-27.json",
    "filePath": "IndustryDecks 2026-27.json",
    "industryName": "All 22 Sector Intelligence Primers",
    "date": "2026-08-01",
    "status": "Processed",
    "dataPoints": 4840,
    "isBaseline": true
  },
  {
    "id": "deck_food-delivery",
    "fileName": "Food Delivery_industry.pdf",
    "filePath": "Individual Industry Decks/Food Delivery_industry.pdf",
    "industryName": "Food Delivery",
    "date": "2026-08-01",
    "status": "Processed",
    "dataPoints": 220,
    "isBaseline": true
  },
  {
    "id": "deck_healthcare-hospitals",
    "fileName": "Healthcare_industry.pdf",
    "filePath": "Individual Industry Decks/Healthcare_industry.pdf",
    "industryName": "Healthcare & Hospitals",
    "date": "2026-08-01",
    "status": "Processed",
    "dataPoints": 220,
    "isBaseline": true
  },
  {
    "id": "deck_hotels-hospitality",
    "fileName": "Hotels & Hospitality_industry.pdf",
    "filePath": "Individual Industry Decks/Hotels & Hospitality_industry.pdf",
    "industryName": "Hotels & Hospitality",
    "date": "2026-08-01",
    "status": "Processed",
    "dataPoints": 220,
    "isBaseline": true
  },
  {
    "id": "deck_it-industry",
    "fileName": "IT_industry.pdf",
    "filePath": "Individual Industry Decks/IT_industry.pdf",
    "industryName": "Information Technology (IT)",
    "date": "2026-08-01",
    "status": "Processed",
    "dataPoints": 220,
    "isBaseline": true
  },
  {
    "id": "deck_pharmaceuticals",
    "fileName": "Pharmaceuticals_industry.pdf",
    "filePath": "Individual Industry Decks/Pharmaceuticals_industry.pdf",
    "industryName": "Pharmaceuticals",
    "date": "2026-08-01",
    "status": "Processed",
    "dataPoints": 220,
    "isBaseline": true
  },
  {
    "id": "deck_telecom",
    "fileName": "Telecom_industry.pdf",
    "filePath": "Individual Industry Decks/Telecom_industry.pdf",
    "industryName": "Telecommunications",
    "date": "2026-08-01",
    "status": "Processed",
    "dataPoints": 220,
    "isBaseline": true
  },
  {
    "id": "deck_artificial-intelligence",
    "fileName": "AI_industry.pdf",
    "filePath": "Individual Industry Decks/AI_industry.pdf",
    "industryName": "Artificial Intelligence (AI)",
    "date": "2026-08-01",
    "status": "Processed",
    "dataPoints": 220,
    "isBaseline": true
  },
  {
    "id": "deck_aviation",
    "fileName": "Airlines_industry.pdf",
    "filePath": "Individual Industry Decks/Airlines_industry.pdf",
    "industryName": "Airlines & Aviation",
    "date": "2026-08-01",
    "status": "Processed",
    "dataPoints": 220,
    "isBaseline": true
  },
  {
    "id": "deck_asset-management",
    "fileName": "Asset Management_industry.pdf",
    "filePath": "Individual Industry Decks/Asset Management_industry.pdf",
    "industryName": "Asset Management",
    "date": "2026-08-01",
    "status": "Processed",
    "dataPoints": 220,
    "isBaseline": true
  },
  {
    "id": "deck_automobile",
    "fileName": "Automobile_industry.pdf",
    "filePath": "Individual Industry Decks/Automobile_industry.pdf",
    "industryName": "Automobile",
    "date": "2026-08-01",
    "status": "Processed",
    "dataPoints": 220,
    "isBaseline": true
  },
  {
    "id": "deck_banking",
    "fileName": "Banking_industry.pdf",
    "filePath": "Individual Industry Decks/Banking_industry.pdf",
    "industryName": "Banking",
    "date": "2026-08-01",
    "status": "Processed",
    "dataPoints": 220,
    "isBaseline": true
  },
  {
    "id": "deck_cement",
    "fileName": "Cement_industry.pdf",
    "filePath": "Individual Industry Decks/Cement_industry.pdf",
    "industryName": "Cement & Building Materials",
    "date": "2026-08-01",
    "status": "Processed",
    "dataPoints": 220,
    "isBaseline": true
  },
  {
    "id": "deck_consumer-durables",
    "fileName": "Consumer Durables_industry.pdf",
    "filePath": "Individual Industry Decks/Consumer Durables_industry.pdf",
    "industryName": "Consumer Durables",
    "date": "2026-08-01",
    "status": "Processed",
    "dataPoints": 220,
    "isBaseline": true
  },
  {
    "id": "deck_diagnostics",
    "fileName": "Diagnostics_industry.pdf",
    "filePath": "Individual Industry Decks/Diagnostics_industry.pdf",
    "industryName": "Diagnostics",
    "date": "2026-08-01",
    "status": "Processed",
    "dataPoints": 220,
    "isBaseline": true
  },
  {
    "id": "deck_ecommerce",
    "fileName": "eCommerce_industry.pdf",
    "filePath": "Individual Industry Decks/eCommerce_industry.pdf",
    "industryName": "E-Commerce",
    "date": "2026-08-01",
    "status": "Processed",
    "dataPoints": 220,
    "isBaseline": true
  },
  {
    "id": "deck_electric-vehicles",
    "fileName": "EV_industry.pdf",
    "filePath": "Individual Industry Decks/EV_industry.pdf",
    "industryName": "Electric Vehicles (EV)",
    "date": "2026-08-01",
    "status": "Processed",
    "dataPoints": 220,
    "isBaseline": true
  },
  {
    "id": "deck_fmcg",
    "fileName": "FMCG_industry.pdf",
    "filePath": "Individual Industry Decks/FMCG_industry.pdf",
    "industryName": "FMCG (Fast-Moving Consumer Goods)",
    "date": "2026-08-01",
    "status": "Processed",
    "dataPoints": 220,
    "isBaseline": true
  },
  {
    "id": "deck_insurance",
    "fileName": "Insurance_industry.pdf",
    "filePath": "Individual Industry Decks/Insurance_industry.pdf",
    "industryName": "Insurance",
    "date": "2026-08-01",
    "status": "Processed",
    "dataPoints": 220,
    "isBaseline": true
  },
  {
    "id": "deck_oil-and-gas",
    "fileName": "Oil & Gas_industry.pdf",
    "filePath": "Individual Industry Decks/Oil & Gas_industry.pdf",
    "industryName": "Oil & Gas",
    "date": "2026-08-01",
    "status": "Processed",
    "dataPoints": 220,
    "isBaseline": true
  },
  {
    "id": "deck_real-estate",
    "fileName": "Real Estate_industry.pdf",
    "filePath": "Individual Industry Decks/Real Estate_industry.pdf",
    "industryName": "Real Estate",
    "date": "2026-08-01",
    "status": "Processed",
    "dataPoints": 220,
    "isBaseline": true
  },
  {
    "id": "deck_saas",
    "fileName": "SaaS_industry.pdf",
    "filePath": "Individual Industry Decks/SaaS_industry.pdf",
    "industryName": "Cloud & SaaS",
    "date": "2026-08-01",
    "status": "Processed",
    "dataPoints": 220,
    "isBaseline": true
  },
  {
    "id": "deck_steel",
    "fileName": "Steel_industry.pdf",
    "filePath": "Individual Industry Decks/Steel_industry.pdf",
    "industryName": "Steel & Metals",
    "date": "2026-08-01",
    "status": "Processed",
    "dataPoints": 220,
    "isBaseline": true
  }
];

const PRESET_UPLOADS = [
  {
    "title": "Comprehensive 2026-27 Industry Intelligence Primer (94 Decks)",
    "desc": "Verified multi-sector decks covering 22 core Indian industries with complete Five Forces, value chain flows, financial benchmarks, and placement prep intelligence.",
    "size": "33.5 MB",
    "date": "2026-08-01",
    "fileName": "IndustryDecks 2026-27.json",
    "badge": "Full Ingestion"
  },
  {
    "title": "Food Delivery \u2014 Sector Intelligence Deck",
    "desc": "Executive briefing deck and competitive dynamics primer for Food Delivery.",
    "size": "PDF Report",
    "date": "2026-08-01",
    "fileName": "Food Delivery_industry.pdf",
    "badge": "Consumer & Digital"
  },
  {
    "title": "Healthcare & Hospitals \u2014 Sector Intelligence Deck",
    "desc": "Executive briefing deck and competitive dynamics primer for Healthcare & Hospitals.",
    "size": "PDF Report",
    "date": "2026-08-01",
    "fileName": "Healthcare_industry.pdf",
    "badge": "Healthcare"
  },
  {
    "title": "Hotels & Hospitality \u2014 Sector Intelligence Deck",
    "desc": "Executive briefing deck and competitive dynamics primer for Hotels & Hospitality.",
    "size": "PDF Report",
    "date": "2026-08-01",
    "fileName": "Hotels & Hospitality_industry.pdf",
    "badge": "Consumer & Hospitality"
  },
  {
    "title": "Information Technology (IT) \u2014 Sector Intelligence Deck",
    "desc": "Executive briefing deck and competitive dynamics primer for Information Technology (IT).",
    "size": "PDF Report",
    "date": "2026-08-01",
    "fileName": "IT_industry.pdf",
    "badge": "Technology"
  },
  {
    "title": "Pharmaceuticals \u2014 Sector Intelligence Deck",
    "desc": "Executive briefing deck and competitive dynamics primer for Pharmaceuticals.",
    "size": "PDF Report",
    "date": "2026-08-01",
    "fileName": "Pharmaceuticals_industry.pdf",
    "badge": "Healthcare"
  },
  {
    "title": "Telecommunications \u2014 Sector Intelligence Deck",
    "desc": "Executive briefing deck and competitive dynamics primer for Telecommunications.",
    "size": "PDF Report",
    "date": "2026-08-01",
    "fileName": "Telecom_industry.pdf",
    "badge": "Telecommunications"
  },
  {
    "title": "Artificial Intelligence (AI) \u2014 Sector Intelligence Deck",
    "desc": "Executive briefing deck and competitive dynamics primer for Artificial Intelligence (AI).",
    "size": "PDF Report",
    "date": "2026-08-01",
    "fileName": "AI_industry.pdf",
    "badge": "Technology"
  },
  {
    "title": "Airlines & Aviation \u2014 Sector Intelligence Deck",
    "desc": "Executive briefing deck and competitive dynamics primer for Airlines & Aviation.",
    "size": "PDF Report",
    "date": "2026-08-01",
    "fileName": "Airlines_industry.pdf",
    "badge": "Transportation & Logistics"
  },
  {
    "title": "Asset Management \u2014 Sector Intelligence Deck",
    "desc": "Executive briefing deck and competitive dynamics primer for Asset Management.",
    "size": "PDF Report",
    "date": "2026-08-01",
    "fileName": "Asset Management_industry.pdf",
    "badge": "Financial Services"
  },
  {
    "title": "Automobile \u2014 Sector Intelligence Deck",
    "desc": "Executive briefing deck and competitive dynamics primer for Automobile.",
    "size": "PDF Report",
    "date": "2026-08-01",
    "fileName": "Automobile_industry.pdf",
    "badge": "Automotive"
  },
  {
    "title": "Banking \u2014 Sector Intelligence Deck",
    "desc": "Executive briefing deck and competitive dynamics primer for Banking.",
    "size": "PDF Report",
    "date": "2026-08-01",
    "fileName": "Banking_industry.pdf",
    "badge": "Financial Services"
  },
  {
    "title": "Cement & Building Materials \u2014 Sector Intelligence Deck",
    "desc": "Executive briefing deck and competitive dynamics primer for Cement & Building Materials.",
    "size": "PDF Report",
    "date": "2026-08-01",
    "fileName": "Cement_industry.pdf",
    "badge": "Manufacturing & Materials"
  },
  {
    "title": "Consumer Durables \u2014 Sector Intelligence Deck",
    "desc": "Executive briefing deck and competitive dynamics primer for Consumer Durables.",
    "size": "PDF Report",
    "date": "2026-08-01",
    "fileName": "Consumer Durables_industry.pdf",
    "badge": "Consumer"
  },
  {
    "title": "Diagnostics \u2014 Sector Intelligence Deck",
    "desc": "Executive briefing deck and competitive dynamics primer for Diagnostics.",
    "size": "PDF Report",
    "date": "2026-08-01",
    "fileName": "Diagnostics_industry.pdf",
    "badge": "Healthcare"
  },
  {
    "title": "E-Commerce \u2014 Sector Intelligence Deck",
    "desc": "Executive briefing deck and competitive dynamics primer for E-Commerce.",
    "size": "PDF Report",
    "date": "2026-08-01",
    "fileName": "eCommerce_industry.pdf",
    "badge": "Consumer & Digital"
  },
  {
    "title": "Electric Vehicles (EV) \u2014 Sector Intelligence Deck",
    "desc": "Executive briefing deck and competitive dynamics primer for Electric Vehicles (EV).",
    "size": "PDF Report",
    "date": "2026-08-01",
    "fileName": "EV_industry.pdf",
    "badge": "Automotive"
  },
  {
    "title": "FMCG (Fast-Moving Consumer Goods) \u2014 Sector Intelligence Deck",
    "desc": "Executive briefing deck and competitive dynamics primer for FMCG (Fast-Moving Consumer Goods).",
    "size": "PDF Report",
    "date": "2026-08-01",
    "fileName": "FMCG_industry.pdf",
    "badge": "Consumer"
  },
  {
    "title": "Insurance \u2014 Sector Intelligence Deck",
    "desc": "Executive briefing deck and competitive dynamics primer for Insurance.",
    "size": "PDF Report",
    "date": "2026-08-01",
    "fileName": "Insurance_industry.pdf",
    "badge": "Financial Services"
  },
  {
    "title": "Oil & Gas \u2014 Sector Intelligence Deck",
    "desc": "Executive briefing deck and competitive dynamics primer for Oil & Gas.",
    "size": "PDF Report",
    "date": "2026-08-01",
    "fileName": "Oil & Gas_industry.pdf",
    "badge": "Energy"
  },
  {
    "title": "Real Estate \u2014 Sector Intelligence Deck",
    "desc": "Executive briefing deck and competitive dynamics primer for Real Estate.",
    "size": "PDF Report",
    "date": "2026-08-01",
    "fileName": "Real Estate_industry.pdf",
    "badge": "Infrastructure & Real Estate"
  },
  {
    "title": "Cloud & SaaS \u2014 Sector Intelligence Deck",
    "desc": "Executive briefing deck and competitive dynamics primer for Cloud & SaaS.",
    "size": "PDF Report",
    "date": "2026-08-01",
    "fileName": "SaaS_industry.pdf",
    "badge": "Technology"
  },
  {
    "title": "Steel & Metals \u2014 Sector Intelligence Deck",
    "desc": "Executive briefing deck and competitive dynamics primer for Steel & Metals.",
    "size": "PDF Report",
    "date": "2026-08-01",
    "fileName": "Steel_industry.pdf",
    "badge": "Manufacturing & Materials"
  }
];

const SECTOR_COLORS = {
  "Consumer & Digital": "#e11d48",
  "Healthcare": "#0284c7",
  "Consumer & Hospitality": "#d97706",
  "Technology": "#6366f1",
  "Telecommunications": "#7c3aed",
  "Transportation & Logistics": "#0284c7",
  "Financial Services": "#1e3a8a",
  "Automotive": "#0f766e",
  "Manufacturing & Materials": "#64748b",
  "Consumer": "#ea580c",
  "Energy": "#3f6212",
  "Infrastructure & Real Estate": "#b45309"
};
