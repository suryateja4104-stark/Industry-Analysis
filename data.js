// data.js — Industry intelligence data & default datasets for Industry Tracker

const DEFAULT_INDUSTRIES = [
  {
    "id": "asset-management",
    "name": "Asset Management",
    "sector": "Financial Services",
    "description": "Asset Management is a key sector in the Indian economy. Market size: Open banking revenue forecast to grow at 15% CAGR (AUM) at 3x over the next 10 years.",
    "size": "Open banking revenue forecast (AUM)",
    "cagr": "15% CAGR",
    "players": [
      "HDFC AMC",
      "SBI MF",
      "ICICI Pru MF",
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
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "Industry_Primer_Q3_2024.pdf",
    "uploadedDate": "2024-07-15",
    "valueChain": {
      "inputs": "Investor Capital, Banking Licenses, Market Data Feeds, Core Banking APIs",
      "operations": "Underwriting, Portfolio Management, Risk Modeling, Asset Allocation",
      "distribution": "Bank Branches, Mutual Fund Distributors, Fintech Apps, Institutional Sales",
      "endMarkets": "Retail Investors, High Net-Worth Individuals (HNIs), Corporate Treasuries",
      "marginDriver": "Asset Management Fees (AUM %), Net Interest Margin (NIM)",
      "bottleneck": "Regulatory Approvals (SEBI/RBI) & Customer Acquisition Cost (CAC)"
    },
    "regulatoryTimeline": [
      {
        "year": "2018",
        "title": "Insolvency Code (IBC)",
        "detail": "NCLT resolution framework & NPA cleanup"
      },
      {
        "year": "2020",
        "title": "UPI & Account Aggregator",
        "detail": "Open banking API & real-time payment protocol"
      },
      {
        "year": "2022",
        "title": "Digital Lending Norms",
        "detail": "RBI guidelines on FLDG & customer data privacy"
      },
      {
        "year": "2024+",
        "title": "Sovereign Bond Inclusions",
        "detail": "JPMorgan GBI-EM index inclusion & capital inflows"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Credit / AUM to GDP Ratio (%)",
      "labels": [
        "India",
        "China",
        "USA",
        "UK",
        "Global Avg"
      ],
      "values": [
        58,
        185,
        216,
        165,
        140
      ]
    },
    "costStructure": {
      "labels": [
        "Total Revenue",
        "Interest Cost",
        "Employee Cost",
        "Other Opex",
        "EBITDA/PPOP",
        "D&A / Prov",
        "PAT"
      ],
      "values": [
        100,
        42,
        16,
        14,
        28,
        8,
        20
      ]
    },
    "workingCapital": {
      "inventoryDays": 0,
      "receivableDays": 15,
      "payableDays": 12,
      "cashConversionCycle": 3
    },
    "creditProfile": {
      "netDebtToEbitda": "N/A (Capital Adequacy: 16.8%)",
      "creditRating": "AAA / Stable",
      "costOfDebt": "6.8%",
      "liquidityBuffer": "CRAR 17.2% vs 11.5% Min"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        109,
        118,
        126,
        134,
        148
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+26.8%",
      "return3Yr": "+68.4%",
      "volatilityBeta": "1.08x (Low Volatility)"
    },
    "customerSegmentation": {
      "labels": [
        "Retail Individual",
        "HNI & Family Offices",
        "Corporate Treasuries"
      ],
      "values": [
        52,
        28,
        20
      ],
      "incomeCohort": "Tier-1 Metros (50%), Tier-2 Cities (35%), Rural/Semi-Urban (15%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        112,
        128,
        145,
        168
      ],
      "actualDemand": [
        92,
        105,
        122,
        140,
        162
      ],
      "utilizationRate": "94.2% Credit Growth Rate"
    },
    "swot": {
      "strengths": [
        "High Net Interest Margins (NIM) & low-cost CASA deposit base",
        "Accelerating UPI digital transaction scale & credit underwriting APIs"
      ],
      "weaknesses": [
        "Unsecured retail credit default risks during macro slowdowns",
        "Regulatory capital lock-in & stringent CRR/SLR reserve ratios"
      ],
      "opportunities": [
        "Financial inclusion expansion across Tier-2/3 wealth management",
        "Co-lending partnerships between Banks, NBFCs & Fintechs"
      ],
      "threats": [
        "Cybersecurity breaches & fraudulent digital transaction vectors",
        "Rising deposit rate competition reducing spread margins"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "HDFC Ltd & HDFC Bank Merger",
        "value": "$40.0B",
        "buyer": "HDFC Group Mega Merger"
      },
      {
        "date": "Q4 2023",
        "company": "Suvidhaa NBFC Acquisition",
        "value": "$320M",
        "buyer": "Fintech Global Holdings"
      },
      {
        "date": "Q1 2024",
        "company": "Wealth Management Private Buyout",
        "value": "$550M",
        "buyer": "Global Private Equity"
      }
    ],
    "techRadar": {
      "aiIntegration": "High",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "High"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the annual credit demand for small business (MSME) loans in India.",
      "Financial Valuation: How do you value a commercial bank using Price-to-Book (P/B) and ROE?",
      "Credit Risk Analysis: Explain how Net Interest Margin (NIM) and Cost of Risk impact ROA.",
      "Fintech Disruption: How does UPI Account Aggregator threaten legacy retail banking fee income?"
    ],
    "glossary": [
      {
        "term": "NIM",
        "definition": "Net Interest Margin — Difference between interest earned and interest paid relative to assets."
      },
      {
        "term": "CASA",
        "definition": "Current Account Savings Account — Low-cost deposit ratio driving bank profitability."
      },
      {
        "term": "GNPA",
        "definition": "Gross Non-Performing Assets — Percentage of total loans overdue >90 days."
      },
      {
        "term": "CRAR",
        "definition": "Capital to Risk-Weighted Assets Ratio — Regulatory capital cushion enforced by RBI."
      }
    ]
  },
  {
    "id": "automobile",
    "name": "Automobile",
    "sector": "Automotive",
    "description": "Automobile is a key sector in the Indian economy. Market size: India is the 3rd largest auto market globally. CAGR: ~5%, driven by EV transition and rising disposable incomes.",
    "size": "India 3rd largest auto market globally",
    "cagr": "~5% CAGR",
    "players": [
      "Maruti Suzuki",
      "Tata Motors",
      "Hyundai India",
      "Mahindra",
      "Honda Cars"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "Medium",
      "supplierPower": "Medium",
      "substitutes": "Medium",
      "rivalry": "High"
    },
    "trend": "up",
    "outlook": "Stable",
    "uploadedDoc": "Industry_Primer_Q3_2024.pdf",
    "uploadedDate": "2024-07-15",
    "valueChain": {
      "inputs": "Steel, Aluminum, Battery Cells, Microcontrollers & Rubber Component Tier-1s",
      "operations": "Vehicle Stamping, Engine/Motor Assembly, Robotic Painting, Quality Inspection",
      "distribution": "Authorized Dealer Networks, Franchise Outlets, Direct Fleets & Export Docks",
      "endMarkets": "Urban & Rural Commuters, Commercial Logistics Fleets, Ride-Hailing Platforms",
      "marginDriver": "High-margin SUVs, After-sales Spare Parts & Battery Software Upgrades",
      "bottleneck": "Semiconductor Chip Supply & Lithium-Ion Cell Import Dependencies"
    },
    "regulatoryTimeline": [
      {
        "year": "2019",
        "title": "FAME II Scheme",
        "detail": "₹10,000 Cr subsidies for EV two-wheelers & public transport"
      },
      {
        "year": "2020",
        "title": "BS-VI Emission Norms",
        "detail": "Mandatory transition to ultra-low sulfur emission standards"
      },
      {
        "year": "2022",
        "title": "Auto PLI Incentive",
        "detail": "₹25,938 Cr budget for advanced automotive technologies"
      },
      {
        "year": "2024+",
        "title": "New EV Policy & FAME III",
        "detail": "Concessional import duties for localized EV manufacturing"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Car Ownership per 1,000 People",
      "labels": [
        "India",
        "China",
        "Japan",
        "USA",
        "Global Avg"
      ],
      "values": [
        34,
        210,
        620,
        840,
        180
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "Raw Materials",
        "Employee Cost",
        "R&D & Royalty",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        68,
        8,
        5,
        13,
        4,
        8
      ]
    },
    "workingCapital": {
      "inventoryDays": 38,
      "receivableDays": 22,
      "payableDays": 54,
      "cashConversionCycle": 6
    },
    "creditProfile": {
      "netDebtToEbitda": "0.9x",
      "creditRating": "AA+ / Positive",
      "costOfDebt": "7.5%",
      "liquidityBuffer": "₹14,500 Cr Cash Reserves"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        114,
        132,
        145,
        162,
        184
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+42.5%",
      "return3Yr": "+112.0%",
      "volatilityBeta": "1.24x (High Growth)"
    },
    "customerSegmentation": {
      "labels": [
        "Passenger SUV/Cars",
        "Two-Wheelers",
        "Commercial & Logistics Fleets"
      ],
      "values": [
        42,
        45,
        13
      ],
      "incomeCohort": "Middle-Income Households (55%), High-Net-Worth (25%), Rural Commuters (20%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        110,
        125,
        140,
        160
      ],
      "actualDemand": [
        84,
        96,
        112,
        128,
        148
      ],
      "utilizationRate": "81.2% Factory Capacity"
    },
    "swot": {
      "strengths": [
        "Rapid premiumization trend towards high-margin SUVs",
        "Strong domestic Tier-1 component manufacturing ecosystem"
      ],
      "weaknesses": [
        "Heavy import dependency on lithium-ion cells & magnet motors",
        "Cyclical sensitivity to monsoon & rural disposable income"
      ],
      "opportunities": [
        "Export hub for EV two-wheelers & compact SUVs to ASEAN & Africa",
        "Government PLI incentives driving localization of EV drivetrains"
      ],
      "threats": [
        "Global semiconductor supply disruptions & raw material inflation",
        "Aggressive price cuts by international EV entrants"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q1 2023",
        "company": "TPG Investment in Tata Passenger EV",
        "value": "$1.0B",
        "buyer": "TPG Rise Climate"
      },
      {
        "date": "Q3 2023",
        "company": "Ather Energy Sovereign Funding",
        "value": "$128M",
        "buyer": "NIIF & Hero MotoCorp"
      },
      {
        "date": "Q1 2024",
        "company": "Commercial Fleet EV Acquisition",
        "value": "$210M",
        "buyer": "Logistics Infra Fund"
      }
    ],
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "High",
      "d2cOmnichannel": "Medium",
      "platformEcosystem": "High"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the annual volume of electric two-wheelers sold in India in 2026.",
      "Profitability Case: How can an OEM offset raw material price inflation through localization?",
      "Strategic Shift: Evaluate whether a traditional ICE automaker should spin off its EV division.",
      "Supply Chain Guesstimate: Calculate the required battery gigafactory capacity for 1 million EVs."
    ],
    "glossary": [
      {
        "term": "OEM",
        "definition": "Original Equipment Manufacturer — Company producing final vehicles."
      },
      {
        "term": "FAME",
        "definition": "Faster Adoption and Manufacturing of Hybrid & Electric Vehicles scheme."
      },
      {
        "term": "BS-VI",
        "definition": "Bharat Stage VI — Stringent national vehicle emission control standard."
      },
      {
        "term": "BMS",
        "definition": "Battery Management System — Electronic unit regulating lithium cell packs."
      }
    ]
  },
  {
    "id": "aviation",
    "name": "Aviation",
    "sector": "Transportation & Logistics",
    "description": "Aviation is a key sector in the Indian economy. Market size: India to become 3rd largest aviation market by 2030. Strong post-COVID recovery with record passenger volumes.",
    "size": "India to become 3rd largest by 2030",
    "cagr": "~8% CAGR",
    "players": [
      "IndiGo",
      "Air India",
      "SpiceJet",
      "Akasa Air",
      "Vistara"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "High",
      "supplierPower": "High",
      "substitutes": "Medium",
      "rivalry": "High"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "Industry_Primer_Q3_2024.pdf",
    "uploadedDate": "2024-07-15",
    "valueChain": {
      "inputs": "Aviation Turbine Fuel (ATF) / Diesel, Aircraft Fleets / Trucks, Warehouses",
      "operations": "Route Scheduling, Fleet Maintenance, Hub Sorting, Cold Chain Storage",
      "distribution": "Travel Portals (OTAs), Air Cargo Terminal Gates, Express Delivery Hubs",
      "endMarkets": "Domestic & Global Travelers, E-commerce Platforms, Export Freight Clients",
      "marginDriver": "Fleet Capacity Utilization (Passenger Load Factor) & Dynamic Pricing",
      "bottleneck": "Fuel Price Volatility & Airport/Port Infrastructure Bottlenecks"
    },
    "regulatoryTimeline": [
      {
        "year": "2017",
        "title": "GST Implementation",
        "detail": "Unified national tax regime eliminating interstate logistics bottlenecks"
      },
      {
        "year": "2020",
        "title": "Atmanirbhar Bharat Push",
        "detail": "Import substitution & localized supply chain mandates"
      },
      {
        "year": "2022",
        "title": "PLI Scheme Expansion",
        "detail": "Sectoral manufacturing incentives for high-value exports"
      },
      {
        "year": "2024+",
        "title": "ESG & Sustainability Norms",
        "detail": "Mandatory BRSR disclosures & green transition targets"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Per Capita Consumption / Market Spend ($)",
      "labels": [
        "India",
        "China",
        "Brazil",
        "USA",
        "Global Avg"
      ],
      "values": [
        42,
        145,
        95,
        310,
        120
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "Raw Materials",
        "Employee Cost",
        "Marketing & Dist",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        52,
        14,
        14,
        20,
        5,
        15
      ]
    },
    "workingCapital": {
      "inventoryDays": 36,
      "receivableDays": 28,
      "payableDays": 42,
      "cashConversionCycle": 22
    },
    "creditProfile": {
      "netDebtToEbitda": "1.4x",
      "creditRating": "AA / Stable",
      "costOfDebt": "7.8%",
      "liquidityBuffer": "Healthy Cash Conversion & Reserves"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        108,
        120,
        130,
        142,
        158
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+29.5%",
      "return3Yr": "+72.0%",
      "volatilityBeta": "1.10x"
    },
    "customerSegmentation": {
      "labels": [
        "B2C Urban Consumers",
        "B2C Rural Households",
        "B2B Enterprise Clients"
      ],
      "values": [
        45,
        35,
        20
      ],
      "incomeCohort": "Tier-1 Metros (45%), Tier-2/3 Cities (35%), Rural Markets (20%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        112,
        126,
        142,
        160
      ],
      "actualDemand": [
        86,
        98,
        114,
        130,
        150
      ],
      "utilizationRate": "82.5% Factory Utilization"
    },
    "swot": {
      "strengths": [
        "Massive domestic demographic dividend & rising disposable income",
        "Established distribution networks spanning urban & rural retail channels"
      ],
      "weaknesses": [
        "Sensitivity to raw material price volatility (agricultural/chemical inputs)",
        "Margin pressure in unorganized traditional trade segments"
      ],
      "opportunities": [
        "Omnichannel digital commerce expansion & premium product adoption",
        "Government PLI schemes driving export manufacturing competitiveness"
      ],
      "threats": [
        "Hyperlocal quick-commerce disruption altering brand loyalty",
        "Global supply chain disruptions & freight rate inflation"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "Brand Portfolio Acquisition",
        "value": "$420M",
        "buyer": "Consumer Conglomerate A"
      },
      {
        "date": "Q4 2023",
        "company": "D2C Strategic Stake Buyout",
        "value": "$190M",
        "buyer": "Private Equity Growth Fund"
      },
      {
        "date": "Q1 2024",
        "company": "Manufacturing Asset Deal",
        "value": "$350M",
        "buyer": "Global Industrial Group"
      }
    ],
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "Medium"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the total addressable market (TAM) for premium D2C products in India.",
      "Profitability Case: How can a consumer company optimize trade discounts vs direct channel margins?",
      "M&A Evaluation: What metrics would you assess when acquiring an online-first D2C brand?",
      "Supply Chain: Calculate the cost trade-off between centralized warehousing vs dark stores."
    ],
    "glossary": [
      {
        "term": "D2C",
        "definition": "Direct-to-Consumer channel bypassing traditional distributors."
      },
      {
        "term": "SKU",
        "definition": "Stock Keeping Unit — Individual distinct product item identifier."
      },
      {
        "term": "TAM",
        "definition": "Total Addressable Market — Overall revenue opportunity for a product."
      },
      {
        "term": "LTV/CAC",
        "definition": "Ratio of Customer Lifetime Value to Customer Acquisition Cost."
      }
    ]
  },
  {
    "id": "banking",
    "name": "Banking",
    "sector": "Financial Services",
    "description": "Banking is a cornerstone of the Indian economy. India's banking sector is on a growth trajectory with digital transformation, UPI proliferation, and financial inclusion drives.",
    "size": "$2 Trillion+ banking assets",
    "cagr": "~12% CAGR",
    "players": [
      "HDFC Bank",
      "ICICI Bank",
      "SBI",
      "Axis Bank",
      "Kotak Mahindra"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "Medium",
      "supplierPower": "Low",
      "substitutes": "High",
      "rivalry": "High"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "Industry_Primer_Q3_2024.pdf",
    "uploadedDate": "2024-07-15",
    "valueChain": {
      "inputs": "Investor Capital, Banking Licenses, Market Data Feeds, Core Banking APIs",
      "operations": "Underwriting, Portfolio Management, Risk Modeling, Asset Allocation",
      "distribution": "Bank Branches, Mutual Fund Distributors, Fintech Apps, Institutional Sales",
      "endMarkets": "Retail Investors, High Net-Worth Individuals (HNIs), Corporate Treasuries",
      "marginDriver": "Asset Management Fees (AUM %), Net Interest Margin (NIM)",
      "bottleneck": "Regulatory Approvals (SEBI/RBI) & Customer Acquisition Cost (CAC)"
    },
    "regulatoryTimeline": [
      {
        "year": "2018",
        "title": "Insolvency Code (IBC)",
        "detail": "NCLT resolution framework & NPA cleanup"
      },
      {
        "year": "2020",
        "title": "UPI & Account Aggregator",
        "detail": "Open banking API & real-time payment protocol"
      },
      {
        "year": "2022",
        "title": "Digital Lending Norms",
        "detail": "RBI guidelines on FLDG & customer data privacy"
      },
      {
        "year": "2024+",
        "title": "Sovereign Bond Inclusions",
        "detail": "JPMorgan GBI-EM index inclusion & capital inflows"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Credit / AUM to GDP Ratio (%)",
      "labels": [
        "India",
        "China",
        "USA",
        "UK",
        "Global Avg"
      ],
      "values": [
        58,
        185,
        216,
        165,
        140
      ]
    },
    "costStructure": {
      "labels": [
        "Total Revenue",
        "Interest Cost",
        "Employee Cost",
        "Other Opex",
        "EBITDA/PPOP",
        "D&A / Prov",
        "PAT"
      ],
      "values": [
        100,
        42,
        16,
        14,
        28,
        8,
        20
      ]
    },
    "workingCapital": {
      "inventoryDays": 0,
      "receivableDays": 15,
      "payableDays": 12,
      "cashConversionCycle": 3
    },
    "creditProfile": {
      "netDebtToEbitda": "N/A (Capital Adequacy: 16.8%)",
      "creditRating": "AAA / Stable",
      "costOfDebt": "6.8%",
      "liquidityBuffer": "CRAR 17.2% vs 11.5% Min"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        109,
        118,
        126,
        134,
        148
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+26.8%",
      "return3Yr": "+68.4%",
      "volatilityBeta": "1.08x (Low Volatility)"
    },
    "customerSegmentation": {
      "labels": [
        "Retail Individual",
        "HNI & Family Offices",
        "Corporate Treasuries"
      ],
      "values": [
        52,
        28,
        20
      ],
      "incomeCohort": "Tier-1 Metros (50%), Tier-2 Cities (35%), Rural/Semi-Urban (15%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        112,
        128,
        145,
        168
      ],
      "actualDemand": [
        92,
        105,
        122,
        140,
        162
      ],
      "utilizationRate": "94.2% Credit Growth Rate"
    },
    "swot": {
      "strengths": [
        "High Net Interest Margins (NIM) & low-cost CASA deposit base",
        "Accelerating UPI digital transaction scale & credit underwriting APIs"
      ],
      "weaknesses": [
        "Unsecured retail credit default risks during macro slowdowns",
        "Regulatory capital lock-in & stringent CRR/SLR reserve ratios"
      ],
      "opportunities": [
        "Financial inclusion expansion across Tier-2/3 wealth management",
        "Co-lending partnerships between Banks, NBFCs & Fintechs"
      ],
      "threats": [
        "Cybersecurity breaches & fraudulent digital transaction vectors",
        "Rising deposit rate competition reducing spread margins"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "HDFC Ltd & HDFC Bank Merger",
        "value": "$40.0B",
        "buyer": "HDFC Group Mega Merger"
      },
      {
        "date": "Q4 2023",
        "company": "Suvidhaa NBFC Acquisition",
        "value": "$320M",
        "buyer": "Fintech Global Holdings"
      },
      {
        "date": "Q1 2024",
        "company": "Wealth Management Private Buyout",
        "value": "$550M",
        "buyer": "Global Private Equity"
      }
    ],
    "techRadar": {
      "aiIntegration": "High",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "High"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the annual credit demand for small business (MSME) loans in India.",
      "Financial Valuation: How do you value a commercial bank using Price-to-Book (P/B) and ROE?",
      "Credit Risk Analysis: Explain how Net Interest Margin (NIM) and Cost of Risk impact ROA.",
      "Fintech Disruption: How does UPI Account Aggregator threaten legacy retail banking fee income?"
    ],
    "glossary": [
      {
        "term": "NIM",
        "definition": "Net Interest Margin — Difference between interest earned and interest paid relative to assets."
      },
      {
        "term": "CASA",
        "definition": "Current Account Savings Account — Low-cost deposit ratio driving bank profitability."
      },
      {
        "term": "GNPA",
        "definition": "Gross Non-Performing Assets — Percentage of total loans overdue >90 days."
      },
      {
        "term": "CRAR",
        "definition": "Capital to Risk-Weighted Assets Ratio — Regulatory capital cushion enforced by RBI."
      }
    ]
  },
  {
    "id": "cement",
    "name": "Cement",
    "sector": "Infrastructure",
    "description": "Cement is a vital sector in India's infrastructure story. Driven by government's infra push, housing demand, and urbanization, India is the 2nd largest cement producer globally.",
    "size": "India 2nd largest producer globally",
    "cagr": "~7% CAGR",
    "players": [
      "UltraTech",
      "Shree Cement",
      "Ambuja",
      "ACC",
      "Dalmia Bharat"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "Medium",
      "supplierPower": "Medium",
      "substitutes": "Low",
      "rivalry": "High"
    },
    "trend": "stable",
    "outlook": "Stable",
    "uploadedDoc": "Industry_Primer_Q3_2024.pdf",
    "uploadedDate": "2024-07-15",
    "valueChain": {
      "inputs": "Limestone, Coal, Fly Ash, Steel Rebar, Heavy Machinery & Land Parcels",
      "operations": "Clinker Kiln Processing, Structural Engineering, Site Excavation & Construction",
      "distribution": "Dealer Networks, Institutional Infra Contractors, Direct B2B Site Delivery",
      "endMarkets": "National Highways, High-Rise Residential Projects, Industrial Parks, Smart Cities",
      "marginDriver": "Operating Scale Economies, Freight Cost Optimization & Premium Brand Cement",
      "bottleneck": "High Thermal Energy (Coal) Costs & Environmental Clearance Delays"
    },
    "regulatoryTimeline": [
      {
        "year": "2016",
        "title": "RERA Act Enactment",
        "detail": "Real Estate Regulation & buyer protection framework"
      },
      {
        "year": "2019",
        "title": "National Infrastructure Pipeline",
        "detail": "₹111 Lakh Cr master plan for roads, rail & ports"
      },
      {
        "year": "2021",
        "title": "PM Gati Shakti Master Plan",
        "detail": "Multimodal transport infrastructure integration"
      },
      {
        "year": "2024+",
        "title": "Record Capex Outlay",
        "detail": "₹11.11 Lakh Cr central government infrastructure capex"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Per Capita Cement / Infra Consumption (kg)",
      "labels": [
        "India",
        "China",
        "Vietnam",
        "Turkey",
        "Global Avg"
      ],
      "values": [
        260,
        1650,
        780,
        620,
        530
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "Power & Fuel (Coal)",
        "Freight & Logistics",
        "Raw Materials",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        28,
        24,
        18,
        18,
        6,
        12
      ]
    },
    "workingCapital": {
      "inventoryDays": 45,
      "receivableDays": 42,
      "payableDays": 68,
      "cashConversionCycle": 19
    },
    "creditProfile": {
      "netDebtToEbitda": "2.2x",
      "creditRating": "AA / Stable",
      "costOfDebt": "8.5%",
      "liquidityBuffer": "Strong Order Book Coverage (3.2x Revenue)"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        115,
        130,
        148,
        165,
        188
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+45.2%",
      "return3Yr": "+118.5%",
      "volatilityBeta": "1.32x (High Beta Infra)"
    },
    "customerSegmentation": {
      "labels": [
        "Government Roads & Rail",
        "Commercial & Residential",
        "Industrial Factories"
      ],
      "values": [
        50,
        35,
        15
      ],
      "incomeCohort": "State & Central Contracts (50%), Tier-1 Developers (35%), SME B2B (15%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        108,
        118,
        132,
        150
      ],
      "actualDemand": [
        78,
        88,
        102,
        118,
        138
      ],
      "utilizationRate": "78.6% Kiln Utilization"
    },
    "swot": {
      "strengths": [
        "Record central government capex allocation (₹11.11 Lakh Cr)",
        "High entry barriers due to limestone reserves & logistics freight networks"
      ],
      "weaknesses": [
        "High sensitivity to imported coal & diesel freight costs",
        "Working capital delays in state government project receivables"
      ],
      "opportunities": [
        "Dedicated Freight Corridors & High-speed Rail Expansion",
        "Green Cement & Waste Heat Recovery Systems (WHRS) reducing power cost"
      ],
      "threats": [
        "Environmental clearance bottlenecks & land acquisition delays",
        "Monsoon seasonal construction slowdowns"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "Ambuja Cement Sanghi Acquisition",
        "value": "$600M",
        "buyer": "Adani Cement Group"
      },
      {
        "date": "Q4 2023",
        "company": "Kesoram Cement Asset Buyout",
        "value": "$640M",
        "buyer": "UltraTech Cement"
      },
      {
        "date": "Q1 2024",
        "company": "Highway InvIT Concession Buyout",
        "value": "$1.1B",
        "buyer": "CPP Investments"
      }
    ],
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "Low",
      "platformEcosystem": "Medium"
    },
    "interviewAngles": [
      "Market Sizing: Estimate total cement demand generated by affordable housing in India.",
      "Valuation Case: How do you value an EPC contractor using EV/EBITDA vs Price/Book?",
      "Profitability Case: How does freight optimization impact EBITDA per ton for a cement producer?",
      "Project Finance: Explain Debt Service Coverage Ratio (DSCR) in toll road InvITs."
    ],
    "glossary": [
      {
        "term": "EPC",
        "definition": "Engineering, Procurement, and Construction contract model."
      },
      {
        "term": "WHRS",
        "definition": "Waste Heat Recovery System — Capturing kiln exhaust heat for cheap power."
      },
      {
        "term": "InvIT",
        "definition": "Infrastructure Investment Trust — Vehicle pooling operational toll assets."
      },
      {
        "term": "Clinker",
        "definition": "Nodule raw material produced by heating limestone in cement kilns."
      }
    ]
  },
  {
    "id": "chemicals",
    "name": "Chemicals",
    "sector": "Manufacturing",
    "description": "The Indian chemicals sector is transforming with speciality chemicals growth. China+1 strategy is accelerating capacity expansion in India, particularly in agrochemicals and dyes.",
    "size": "$220 Billion+",
    "cagr": "~10% CAGR",
    "players": [
      "Reliance Industries",
      "Aarti Industries",
      "PI Industries",
      "Navin Fluorine",
      "Deepak Nitrite"
    ],
    "forces": {
      "newEntrants": "Medium",
      "buyerPower": "Medium",
      "supplierPower": "Medium",
      "substitutes": "Medium",
      "rivalry": "Medium"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "Industry_Primer_Q3_2024.pdf",
    "uploadedDate": "2024-07-15",
    "valueChain": {
      "inputs": "Iron Ore, Scrap Metal, Crude Oil Derivatives, Specialty Catalyst Chemicals",
      "operations": "Blast Furnace Smelting, Chemical Synthesis, Precision Machining, Tooling Assembly",
      "distribution": "Industrial B2B Sales Teams, OEM Suppliers, Global Export Traders",
      "endMarkets": "Heavy Engineering Plants, Defense Contractors, Automotive OEMs, Infra Developers",
      "marginDriver": "Specialty High-Purity Chemicals, Customized OEM Assemblies & Value-Added Steel",
      "bottleneck": "Raw Material Price Cyclicality & High Capital Expenditure Requirements"
    },
    "regulatoryTimeline": [
      {
        "year": "2017",
        "title": "GST Implementation",
        "detail": "Unified national tax regime eliminating interstate logistics bottlenecks"
      },
      {
        "year": "2020",
        "title": "Atmanirbhar Bharat Push",
        "detail": "Import substitution & localized supply chain mandates"
      },
      {
        "year": "2022",
        "title": "PLI Scheme Expansion",
        "detail": "Sectoral manufacturing incentives for high-value exports"
      },
      {
        "year": "2024+",
        "title": "ESG & Sustainability Norms",
        "detail": "Mandatory BRSR disclosures & green transition targets"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Per Capita Consumption / Market Spend ($)",
      "labels": [
        "India",
        "China",
        "Brazil",
        "USA",
        "Global Avg"
      ],
      "values": [
        42,
        145,
        95,
        310,
        120
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "Raw Materials",
        "Employee Cost",
        "Marketing & Dist",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        52,
        14,
        14,
        20,
        5,
        15
      ]
    },
    "workingCapital": {
      "inventoryDays": 36,
      "receivableDays": 28,
      "payableDays": 42,
      "cashConversionCycle": 22
    },
    "creditProfile": {
      "netDebtToEbitda": "1.4x",
      "creditRating": "AA / Stable",
      "costOfDebt": "7.8%",
      "liquidityBuffer": "Healthy Cash Conversion & Reserves"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        108,
        120,
        130,
        142,
        158
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+29.5%",
      "return3Yr": "+72.0%",
      "volatilityBeta": "1.10x"
    },
    "customerSegmentation": {
      "labels": [
        "B2C Urban Consumers",
        "B2C Rural Households",
        "B2B Enterprise Clients"
      ],
      "values": [
        45,
        35,
        20
      ],
      "incomeCohort": "Tier-1 Metros (45%), Tier-2/3 Cities (35%), Rural Markets (20%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        112,
        126,
        142,
        160
      ],
      "actualDemand": [
        86,
        98,
        114,
        130,
        150
      ],
      "utilizationRate": "82.5% Factory Utilization"
    },
    "swot": {
      "strengths": [
        "Massive domestic demographic dividend & rising disposable income",
        "Established distribution networks spanning urban & rural retail channels"
      ],
      "weaknesses": [
        "Sensitivity to raw material price volatility (agricultural/chemical inputs)",
        "Margin pressure in unorganized traditional trade segments"
      ],
      "opportunities": [
        "Omnichannel digital commerce expansion & premium product adoption",
        "Government PLI schemes driving export manufacturing competitiveness"
      ],
      "threats": [
        "Hyperlocal quick-commerce disruption altering brand loyalty",
        "Global supply chain disruptions & freight rate inflation"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "Brand Portfolio Acquisition",
        "value": "$420M",
        "buyer": "Consumer Conglomerate A"
      },
      {
        "date": "Q4 2023",
        "company": "D2C Strategic Stake Buyout",
        "value": "$190M",
        "buyer": "Private Equity Growth Fund"
      },
      {
        "date": "Q1 2024",
        "company": "Manufacturing Asset Deal",
        "value": "$350M",
        "buyer": "Global Industrial Group"
      }
    ],
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "Medium"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the total addressable market (TAM) for premium D2C products in India.",
      "Profitability Case: How can a consumer company optimize trade discounts vs direct channel margins?",
      "M&A Evaluation: What metrics would you assess when acquiring an online-first D2C brand?",
      "Supply Chain: Calculate the cost trade-off between centralized warehousing vs dark stores."
    ],
    "glossary": [
      {
        "term": "D2C",
        "definition": "Direct-to-Consumer channel bypassing traditional distributors."
      },
      {
        "term": "SKU",
        "definition": "Stock Keeping Unit — Individual distinct product item identifier."
      },
      {
        "term": "TAM",
        "definition": "Total Addressable Market — Overall revenue opportunity for a product."
      },
      {
        "term": "LTV/CAC",
        "definition": "Ratio of Customer Lifetime Value to Customer Acquisition Cost."
      }
    ]
  },
  {
    "id": "consumer-goods",
    "name": "Consumer Goods (FMCG)",
    "sector": "Consumer",
    "description": "India's FMCG sector is one of the largest in the world. Rising rural consumption, premiumization, and direct-to-consumer channels are shaping the sector.",
    "size": "$110 Billion market",
    "cagr": "~11% CAGR",
    "players": [
      "HUL",
      "ITC",
      "Nestle India",
      "Dabur",
      "Marico"
    ],
    "forces": {
      "newEntrants": "Medium",
      "buyerPower": "High",
      "supplierPower": "Low",
      "substitutes": "High",
      "rivalry": "High"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "Industry_Primer_Q3_2024.pdf",
    "uploadedDate": "2024-07-15",
    "valueChain": {
      "inputs": "Agricultural Produce, Packaging Materials, Oils, Fibers & Fragrance Chemicals",
      "operations": "Blending, High-Speed Bottling/Packaging, Quality Assurance, Batch Processing",
      "distribution": "Kirana Store Distribution Network, Modern Trade Supermarkets, Quick-Commerce Dark Stores",
      "endMarkets": "Household Consumers across Tier 1, Tier 2 & Rural Indian Markets",
      "marginDriver": "Premium Brand Products, Direct-to-Consumer (D2C) Margins & Supply Chain Scale",
      "bottleneck": "Raw Material Price Volatility (Palm Oil/Cotton) & Hyperlocal Logistics Costs"
    },
    "regulatoryTimeline": [
      {
        "year": "2017",
        "title": "GST Implementation",
        "detail": "Unified national tax regime eliminating interstate logistics bottlenecks"
      },
      {
        "year": "2020",
        "title": "Atmanirbhar Bharat Push",
        "detail": "Import substitution & localized supply chain mandates"
      },
      {
        "year": "2022",
        "title": "PLI Scheme Expansion",
        "detail": "Sectoral manufacturing incentives for high-value exports"
      },
      {
        "year": "2024+",
        "title": "ESG & Sustainability Norms",
        "detail": "Mandatory BRSR disclosures & green transition targets"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Per Capita Consumption / Market Spend ($)",
      "labels": [
        "India",
        "China",
        "Brazil",
        "USA",
        "Global Avg"
      ],
      "values": [
        42,
        145,
        95,
        310,
        120
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "Raw Materials",
        "Employee Cost",
        "Marketing & Dist",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        52,
        14,
        14,
        20,
        5,
        15
      ]
    },
    "workingCapital": {
      "inventoryDays": 36,
      "receivableDays": 28,
      "payableDays": 42,
      "cashConversionCycle": 22
    },
    "creditProfile": {
      "netDebtToEbitda": "1.4x",
      "creditRating": "AA / Stable",
      "costOfDebt": "7.8%",
      "liquidityBuffer": "Healthy Cash Conversion & Reserves"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        108,
        120,
        130,
        142,
        158
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+29.5%",
      "return3Yr": "+72.0%",
      "volatilityBeta": "1.10x"
    },
    "customerSegmentation": {
      "labels": [
        "B2C Urban Consumers",
        "B2C Rural Households",
        "B2B Enterprise Clients"
      ],
      "values": [
        45,
        35,
        20
      ],
      "incomeCohort": "Tier-1 Metros (45%), Tier-2/3 Cities (35%), Rural Markets (20%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        112,
        126,
        142,
        160
      ],
      "actualDemand": [
        86,
        98,
        114,
        130,
        150
      ],
      "utilizationRate": "82.5% Factory Utilization"
    },
    "swot": {
      "strengths": [
        "Massive domestic demographic dividend & rising disposable income",
        "Established distribution networks spanning urban & rural retail channels"
      ],
      "weaknesses": [
        "Sensitivity to raw material price volatility (agricultural/chemical inputs)",
        "Margin pressure in unorganized traditional trade segments"
      ],
      "opportunities": [
        "Omnichannel digital commerce expansion & premium product adoption",
        "Government PLI schemes driving export manufacturing competitiveness"
      ],
      "threats": [
        "Hyperlocal quick-commerce disruption altering brand loyalty",
        "Global supply chain disruptions & freight rate inflation"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "Brand Portfolio Acquisition",
        "value": "$420M",
        "buyer": "Consumer Conglomerate A"
      },
      {
        "date": "Q4 2023",
        "company": "D2C Strategic Stake Buyout",
        "value": "$190M",
        "buyer": "Private Equity Growth Fund"
      },
      {
        "date": "Q1 2024",
        "company": "Manufacturing Asset Deal",
        "value": "$350M",
        "buyer": "Global Industrial Group"
      }
    ],
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "Medium"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the total addressable market (TAM) for premium D2C products in India.",
      "Profitability Case: How can a consumer company optimize trade discounts vs direct channel margins?",
      "M&A Evaluation: What metrics would you assess when acquiring an online-first D2C brand?",
      "Supply Chain: Calculate the cost trade-off between centralized warehousing vs dark stores."
    ],
    "glossary": [
      {
        "term": "D2C",
        "definition": "Direct-to-Consumer channel bypassing traditional distributors."
      },
      {
        "term": "SKU",
        "definition": "Stock Keeping Unit — Individual distinct product item identifier."
      },
      {
        "term": "TAM",
        "definition": "Total Addressable Market — Overall revenue opportunity for a product."
      },
      {
        "term": "LTV/CAC",
        "definition": "Ratio of Customer Lifetime Value to Customer Acquisition Cost."
      }
    ]
  },
  {
    "id": "defense",
    "name": "Defense & Aerospace",
    "sector": "Government & Defense",
    "description": "India's defense sector is undergoing a strategic transformation with Atmanirbhar Bharat initiative pushing indigenous defense production and record-high defense budgets.",
    "size": "$72 Billion defense budget",
    "cagr": "~15% CAGR",
    "players": [
      "HAL",
      "BEL",
      "DRDO",
      "Bharat Forge",
      "L&T Defence"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "Low",
      "supplierPower": "Medium",
      "substitutes": "Low",
      "rivalry": "Low"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "Industry_Primer_Q3_2024.pdf",
    "uploadedDate": "2024-07-15",
    "valueChain": {
      "inputs": "Titanium Alloys, Composite Materials, Avionics Chips, Precision Sensors",
      "operations": "Systems Engineering, Precision Weapon Fabrication, Satellite Integration, Range Testing",
      "distribution": "Direct Government Procurement (MoD), Defense PSUs, Global Strategic Defense Exports",
      "endMarkets": "Indian Armed Forces (Army/Navy/Air Force), Space Research Organizations (ISRO)",
      "marginDriver": "High-Value Indigenous Defense Production Contracts & Long-Term AMC Contracts",
      "bottleneck": "Long Procurement Cycles & High Technological R&D Risk"
    },
    "regulatoryTimeline": [
      {
        "year": "2017",
        "title": "GST Implementation",
        "detail": "Unified national tax regime eliminating interstate logistics bottlenecks"
      },
      {
        "year": "2020",
        "title": "Atmanirbhar Bharat Push",
        "detail": "Import substitution & localized supply chain mandates"
      },
      {
        "year": "2022",
        "title": "PLI Scheme Expansion",
        "detail": "Sectoral manufacturing incentives for high-value exports"
      },
      {
        "year": "2024+",
        "title": "ESG & Sustainability Norms",
        "detail": "Mandatory BRSR disclosures & green transition targets"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Per Capita Consumption / Market Spend ($)",
      "labels": [
        "India",
        "China",
        "Brazil",
        "USA",
        "Global Avg"
      ],
      "values": [
        42,
        145,
        95,
        310,
        120
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "Raw Materials",
        "Employee Cost",
        "Marketing & Dist",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        52,
        14,
        14,
        20,
        5,
        15
      ]
    },
    "workingCapital": {
      "inventoryDays": 36,
      "receivableDays": 28,
      "payableDays": 42,
      "cashConversionCycle": 22
    },
    "creditProfile": {
      "netDebtToEbitda": "1.4x",
      "creditRating": "AA / Stable",
      "costOfDebt": "7.8%",
      "liquidityBuffer": "Healthy Cash Conversion & Reserves"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        108,
        120,
        130,
        142,
        158
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+29.5%",
      "return3Yr": "+72.0%",
      "volatilityBeta": "1.10x"
    },
    "customerSegmentation": {
      "labels": [
        "B2C Urban Consumers",
        "B2C Rural Households",
        "B2B Enterprise Clients"
      ],
      "values": [
        45,
        35,
        20
      ],
      "incomeCohort": "Tier-1 Metros (45%), Tier-2/3 Cities (35%), Rural Markets (20%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        112,
        126,
        142,
        160
      ],
      "actualDemand": [
        86,
        98,
        114,
        130,
        150
      ],
      "utilizationRate": "82.5% Factory Utilization"
    },
    "swot": {
      "strengths": [
        "Massive domestic demographic dividend & rising disposable income",
        "Established distribution networks spanning urban & rural retail channels"
      ],
      "weaknesses": [
        "Sensitivity to raw material price volatility (agricultural/chemical inputs)",
        "Margin pressure in unorganized traditional trade segments"
      ],
      "opportunities": [
        "Omnichannel digital commerce expansion & premium product adoption",
        "Government PLI schemes driving export manufacturing competitiveness"
      ],
      "threats": [
        "Hyperlocal quick-commerce disruption altering brand loyalty",
        "Global supply chain disruptions & freight rate inflation"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "Brand Portfolio Acquisition",
        "value": "$420M",
        "buyer": "Consumer Conglomerate A"
      },
      {
        "date": "Q4 2023",
        "company": "D2C Strategic Stake Buyout",
        "value": "$190M",
        "buyer": "Private Equity Growth Fund"
      },
      {
        "date": "Q1 2024",
        "company": "Manufacturing Asset Deal",
        "value": "$350M",
        "buyer": "Global Industrial Group"
      }
    ],
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "Medium"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the total addressable market (TAM) for premium D2C products in India.",
      "Profitability Case: How can a consumer company optimize trade discounts vs direct channel margins?",
      "M&A Evaluation: What metrics would you assess when acquiring an online-first D2C brand?",
      "Supply Chain: Calculate the cost trade-off between centralized warehousing vs dark stores."
    ],
    "glossary": [
      {
        "term": "D2C",
        "definition": "Direct-to-Consumer channel bypassing traditional distributors."
      },
      {
        "term": "SKU",
        "definition": "Stock Keeping Unit — Individual distinct product item identifier."
      },
      {
        "term": "TAM",
        "definition": "Total Addressable Market — Overall revenue opportunity for a product."
      },
      {
        "term": "LTV/CAC",
        "definition": "Ratio of Customer Lifetime Value to Customer Acquisition Cost."
      }
    ]
  },
  {
    "id": "edtech",
    "name": "EdTech",
    "sector": "Technology",
    "description": "India's EdTech market is among the largest globally following the pandemic-driven digital adoption. K-12, test preparation, and upskilling are the dominant verticals.",
    "size": "$10 Billion market",
    "cagr": "~20% CAGR",
    "players": [
      "BYJU'S",
      "Unacademy",
      "upGrad",
      "Vedantu",
      "Simplilearn"
    ],
    "forces": {
      "newEntrants": "High",
      "buyerPower": "High",
      "supplierPower": "Low",
      "substitutes": "High",
      "rivalry": "High"
    },
    "trend": "stable",
    "outlook": "Volatile",
    "uploadedDoc": "Industry_Primer_Q3_2024.pdf",
    "uploadedDate": "2024-07-15",
    "valueChain": {
      "inputs": "Cloud Server Infrastructure (AWS/GCP), Silicon Wafers, Engineering Talent",
      "operations": "Software Development, Algorithmic Training, QA Testing, API Integration",
      "distribution": "SaaS Web Portals, Mobile App Stores (Google/Apple), Enterprise System Integrators",
      "endMarkets": "Global Fortune 500 Enterprises, SMEs, Mobile Consumers & Gaming Enthusiasts",
      "marginDriver": "Recurring Software Licenses (ARR), High Gross Margin Code IP",
      "bottleneck": "High Senior Tech Talent Attrition & Specialized Hardware Availability"
    },
    "regulatoryTimeline": [
      {
        "year": "2020",
        "title": "OSP Liberalization",
        "detail": "Simplified IT/ITeS remote working & telecom regulations"
      },
      {
        "year": "2021",
        "title": "Semiconductor Mission",
        "detail": "76,000 Cr PLI for silicon fab & chip packaging units"
      },
      {
        "year": "2023",
        "title": "DPDP Act Enactment",
        "detail": "Digital Personal Data Protection framework compliance"
      },
      {
        "year": "2024+",
        "title": "IndiaAI Mission",
        "detail": "₹10,372 Cr allocated for GPU supercomputing clusters"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "IT & Software Export Market Share (%)",
      "labels": [
        "India",
        "USA",
        "Ireland",
        "China",
        "Global Avg"
      ],
      "values": [
        56,
        18,
        9,
        7,
        10
      ]
    },
    "costStructure": {
      "labels": [
        "Total Revenue",
        "Employee Cost",
        "Subcontracting",
        "Facility & Cloud",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        56,
        12,
        8,
        24,
        4,
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
      "netDebtToEbitda": "0.1x (Net Cash Positive)",
      "creditRating": "AAA / Stable",
      "costOfDebt": "6.2%",
      "liquidityBuffer": "$8.5 Billion Net Cash"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        104,
        110,
        116,
        122,
        134
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+18.2%",
      "return3Yr": "+46.5%",
      "volatilityBeta": "1.02x (Defensive Growth)"
    },
    "customerSegmentation": {
      "labels": [
        "BFSI (Banking & Finance)",
        "Retail & Consumer",
        "Healthcare & High-Tech"
      ],
      "values": [
        40,
        32,
        28
      ],
      "incomeCohort": "North America (55%), Europe (30%), Rest of World (15%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        115,
        132,
        150,
        172
      ],
      "actualDemand": [
        96,
        112,
        128,
        146,
        168
      ],
      "utilizationRate": "84.5% Employee Utilization"
    },
    "swot": {
      "strengths": [
        "Unrivaled scale of 5M+ English-speaking engineering talent",
        "High recurring revenue share with Fortune 500 enterprise clients"
      ],
      "weaknesses": [
        "Exposure to US/Europe enterprise IT budget cuts",
        "High senior tech talent attrition during tech expansion cycles"
      ],
      "opportunities": [
        "Generative AI migration, cloud transformation & cyber defense",
        "India Semiconductor Mission fab & chip design incentives"
      ],
      "threats": [
        "Automated AI code generation compressing billable hours",
        "Protectionist visa policies & currency volatility"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q1 2023",
        "company": "Infosys InSemi Silicon Acquisition",
        "value": "$340M",
        "buyer": "Infosys Tech"
      },
      {
        "date": "Q3 2023",
        "company": "Freshworks SaaS Buyback",
        "value": "$500M",
        "buyer": "Public Shareholder Buyback"
      },
      {
        "date": "Q1 2024",
        "company": "GenAI Enterprise Startup Deal",
        "value": "$180M",
        "buyer": "Tech Mahindra VC"
      }
    ],
    "techRadar": {
      "aiIntegration": "High",
      "roboticsAutomation": "High",
      "d2cOmnichannel": "High",
      "platformEcosystem": "High"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the revenue impact of GenAI adoption on Indian IT services by 2028.",
      "Profitability Case: How does a SaaS company optimize Customer Acquisition Cost (CAC) vs LTV?",
      "M&A Due Diligence: Evaluate an acquisition target in cloud-native application modernization.",
      "Operational Metric: Explain how Employee Attrition & Utilization Rate drive operating margins."
    ],
    "glossary": [
      {
        "term": "TCV",
        "definition": "Total Contract Value — Total revenue from signed enterprise deals."
      },
      {
        "term": "ARR",
        "definition": "Annual Recurring Revenue — Key SaaS subscription metric."
      },
      {
        "term": "Utilization",
        "definition": "Percentage of billable employee time assigned to client projects."
      },
      {
        "term": "FTE",
        "definition": "Full-Time Equivalent — Standard measure of project staffing."
      }
    ]
  },
  {
    "id": "energy",
    "name": "Energy & Renewables",
    "sector": "Energy",
    "description": "India targets 500 GW of renewable energy by 2030. Solar, wind, and green hydrogen are the focal areas with massive government investment and private capital flowing in.",
    "size": "$10 Trillion opportunity by 2040",
    "cagr": "~22% CAGR (renewables)",
    "players": [
      "Adani Green",
      "Tata Power",
      "ReNew Power",
      "NTPC",
      "JSW Energy"
    ],
    "forces": {
      "newEntrants": "Medium",
      "buyerPower": "Low",
      "supplierPower": "Medium",
      "substitutes": "Low",
      "rivalry": "Medium"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "Industry_Primer_Q3_2024.pdf",
    "uploadedDate": "2024-07-15",
    "valueChain": {
      "inputs": "Core Raw Materials, Skilled Workforce, Primary Energy & Specialized Capital Equipment",
      "operations": "Value-Add Processing, Operations Engineering, Quality Assurance, Packaging",
      "distribution": "Direct Sales Outlets, Authorized Distributors, B2B Channels & E-Commerce",
      "endMarkets": "Enterprise Buyers, Commercial Outlets & Individual Domestic Consumers",
      "marginDriver": "Product Differentiation, Scale Efficiency & Channel Partner Optimization",
      "bottleneck": "Supply Chain Disruption Risks & Regulatory Compliance Requirements"
    },
    "regulatoryTimeline": [
      {
        "year": "2017",
        "title": "GST Implementation",
        "detail": "Unified national tax regime eliminating interstate logistics bottlenecks"
      },
      {
        "year": "2020",
        "title": "Atmanirbhar Bharat Push",
        "detail": "Import substitution & localized supply chain mandates"
      },
      {
        "year": "2022",
        "title": "PLI Scheme Expansion",
        "detail": "Sectoral manufacturing incentives for high-value exports"
      },
      {
        "year": "2024+",
        "title": "ESG & Sustainability Norms",
        "detail": "Mandatory BRSR disclosures & green transition targets"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Per Capita Consumption / Market Spend ($)",
      "labels": [
        "India",
        "China",
        "Brazil",
        "USA",
        "Global Avg"
      ],
      "values": [
        42,
        145,
        95,
        310,
        120
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "Raw Materials",
        "Employee Cost",
        "Marketing & Dist",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        52,
        14,
        14,
        20,
        5,
        15
      ]
    },
    "workingCapital": {
      "inventoryDays": 36,
      "receivableDays": 28,
      "payableDays": 42,
      "cashConversionCycle": 22
    },
    "creditProfile": {
      "netDebtToEbitda": "1.4x",
      "creditRating": "AA / Stable",
      "costOfDebt": "7.8%",
      "liquidityBuffer": "Healthy Cash Conversion & Reserves"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        108,
        120,
        130,
        142,
        158
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+29.5%",
      "return3Yr": "+72.0%",
      "volatilityBeta": "1.10x"
    },
    "customerSegmentation": {
      "labels": [
        "B2C Urban Consumers",
        "B2C Rural Households",
        "B2B Enterprise Clients"
      ],
      "values": [
        45,
        35,
        20
      ],
      "incomeCohort": "Tier-1 Metros (45%), Tier-2/3 Cities (35%), Rural Markets (20%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        112,
        126,
        142,
        160
      ],
      "actualDemand": [
        86,
        98,
        114,
        130,
        150
      ],
      "utilizationRate": "82.5% Factory Utilization"
    },
    "swot": {
      "strengths": [
        "Massive domestic demographic dividend & rising disposable income",
        "Established distribution networks spanning urban & rural retail channels"
      ],
      "weaknesses": [
        "Sensitivity to raw material price volatility (agricultural/chemical inputs)",
        "Margin pressure in unorganized traditional trade segments"
      ],
      "opportunities": [
        "Omnichannel digital commerce expansion & premium product adoption",
        "Government PLI schemes driving export manufacturing competitiveness"
      ],
      "threats": [
        "Hyperlocal quick-commerce disruption altering brand loyalty",
        "Global supply chain disruptions & freight rate inflation"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "Brand Portfolio Acquisition",
        "value": "$420M",
        "buyer": "Consumer Conglomerate A"
      },
      {
        "date": "Q4 2023",
        "company": "D2C Strategic Stake Buyout",
        "value": "$190M",
        "buyer": "Private Equity Growth Fund"
      },
      {
        "date": "Q1 2024",
        "company": "Manufacturing Asset Deal",
        "value": "$350M",
        "buyer": "Global Industrial Group"
      }
    ],
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "Medium"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the total addressable market (TAM) for premium D2C products in India.",
      "Profitability Case: How can a consumer company optimize trade discounts vs direct channel margins?",
      "M&A Evaluation: What metrics would you assess when acquiring an online-first D2C brand?",
      "Supply Chain: Calculate the cost trade-off between centralized warehousing vs dark stores."
    ],
    "glossary": [
      {
        "term": "D2C",
        "definition": "Direct-to-Consumer channel bypassing traditional distributors."
      },
      {
        "term": "SKU",
        "definition": "Stock Keeping Unit — Individual distinct product item identifier."
      },
      {
        "term": "TAM",
        "definition": "Total Addressable Market — Overall revenue opportunity for a product."
      },
      {
        "term": "LTV/CAC",
        "definition": "Ratio of Customer Lifetime Value to Customer Acquisition Cost."
      }
    ]
  },
  {
    "id": "fintech",
    "name": "Fintech",
    "sector": "Technology",
    "description": "India's fintech ecosystem is one of the most vibrant globally. With UPI processing billions of transactions monthly and payments, lending, and insurtech emerging as strong verticals.",
    "size": "$150 Billion by 2025",
    "cagr": "~23% CAGR",
    "players": [
      "Paytm",
      "PhonePe",
      "Razorpay",
      "CRED",
      "BharatPe"
    ],
    "forces": {
      "newEntrants": "High",
      "buyerPower": "High",
      "supplierPower": "Low",
      "substitutes": "High",
      "rivalry": "High"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Investor Capital, Banking Licenses, Market Data Feeds, Core Banking APIs",
      "operations": "Underwriting, Portfolio Management, Risk Modeling, Asset Allocation",
      "distribution": "Bank Branches, Mutual Fund Distributors, Fintech Apps, Institutional Sales",
      "endMarkets": "Retail Investors, High Net-Worth Individuals (HNIs), Corporate Treasuries",
      "marginDriver": "Asset Management Fees (AUM %), Net Interest Margin (NIM)",
      "bottleneck": "Regulatory Approvals (SEBI/RBI) & Customer Acquisition Cost (CAC)"
    },
    "regulatoryTimeline": [
      {
        "year": "2018",
        "title": "Insolvency Code (IBC)",
        "detail": "NCLT resolution framework & NPA cleanup"
      },
      {
        "year": "2020",
        "title": "UPI & Account Aggregator",
        "detail": "Open banking API & real-time payment protocol"
      },
      {
        "year": "2022",
        "title": "Digital Lending Norms",
        "detail": "RBI guidelines on FLDG & customer data privacy"
      },
      {
        "year": "2024+",
        "title": "Sovereign Bond Inclusions",
        "detail": "JPMorgan GBI-EM index inclusion & capital inflows"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Credit / AUM to GDP Ratio (%)",
      "labels": [
        "India",
        "China",
        "USA",
        "UK",
        "Global Avg"
      ],
      "values": [
        58,
        185,
        216,
        165,
        140
      ]
    },
    "costStructure": {
      "labels": [
        "Total Revenue",
        "Interest Cost",
        "Employee Cost",
        "Other Opex",
        "EBITDA/PPOP",
        "D&A / Prov",
        "PAT"
      ],
      "values": [
        100,
        42,
        16,
        14,
        28,
        8,
        20
      ]
    },
    "workingCapital": {
      "inventoryDays": 0,
      "receivableDays": 15,
      "payableDays": 12,
      "cashConversionCycle": 3
    },
    "creditProfile": {
      "netDebtToEbitda": "N/A (Capital Adequacy: 16.8%)",
      "creditRating": "AAA / Stable",
      "costOfDebt": "6.8%",
      "liquidityBuffer": "CRAR 17.2% vs 11.5% Min"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        109,
        118,
        126,
        134,
        148
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+26.8%",
      "return3Yr": "+68.4%",
      "volatilityBeta": "1.08x (Low Volatility)"
    },
    "customerSegmentation": {
      "labels": [
        "Retail Individual",
        "HNI & Family Offices",
        "Corporate Treasuries"
      ],
      "values": [
        52,
        28,
        20
      ],
      "incomeCohort": "Tier-1 Metros (50%), Tier-2 Cities (35%), Rural/Semi-Urban (15%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        112,
        128,
        145,
        168
      ],
      "actualDemand": [
        92,
        105,
        122,
        140,
        162
      ],
      "utilizationRate": "94.2% Credit Growth Rate"
    },
    "swot": {
      "strengths": [
        "High Net Interest Margins (NIM) & low-cost CASA deposit base",
        "Accelerating UPI digital transaction scale & credit underwriting APIs"
      ],
      "weaknesses": [
        "Unsecured retail credit default risks during macro slowdowns",
        "Regulatory capital lock-in & stringent CRR/SLR reserve ratios"
      ],
      "opportunities": [
        "Financial inclusion expansion across Tier-2/3 wealth management",
        "Co-lending partnerships between Banks, NBFCs & Fintechs"
      ],
      "threats": [
        "Cybersecurity breaches & fraudulent digital transaction vectors",
        "Rising deposit rate competition reducing spread margins"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "HDFC Ltd & HDFC Bank Merger",
        "value": "$40.0B",
        "buyer": "HDFC Group Mega Merger"
      },
      {
        "date": "Q4 2023",
        "company": "Suvidhaa NBFC Acquisition",
        "value": "$320M",
        "buyer": "Fintech Global Holdings"
      },
      {
        "date": "Q1 2024",
        "company": "Wealth Management Private Buyout",
        "value": "$550M",
        "buyer": "Global Private Equity"
      }
    ],
    "techRadar": {
      "aiIntegration": "High",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "High"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the annual credit demand for small business (MSME) loans in India.",
      "Financial Valuation: How do you value a commercial bank using Price-to-Book (P/B) and ROE?",
      "Credit Risk Analysis: Explain how Net Interest Margin (NIM) and Cost of Risk impact ROA.",
      "Fintech Disruption: How does UPI Account Aggregator threaten legacy retail banking fee income?"
    ],
    "glossary": [
      {
        "term": "NIM",
        "definition": "Net Interest Margin — Difference between interest earned and interest paid relative to assets."
      },
      {
        "term": "CASA",
        "definition": "Current Account Savings Account — Low-cost deposit ratio driving bank profitability."
      },
      {
        "term": "GNPA",
        "definition": "Gross Non-Performing Assets — Percentage of total loans overdue >90 days."
      },
      {
        "term": "CRAR",
        "definition": "Capital to Risk-Weighted Assets Ratio — Regulatory capital cushion enforced by RBI."
      }
    ]
  },
  {
    "id": "healthcare",
    "name": "Healthcare & Pharma",
    "sector": "Healthcare",
    "description": "India's pharmaceutical industry is the world's pharmacy. With generics, vaccines, and biosimilars, India contributes over 20% of global medicine exports. Healthcare infra is expanding rapidly.",
    "size": "$50 Billion pharma market",
    "cagr": "~15% CAGR",
    "players": [
      "Sun Pharma",
      "Dr. Reddy's",
      "Cipla",
      "Biocon",
      "Lupin"
    ],
    "forces": {
      "newEntrants": "Medium",
      "buyerPower": "Medium",
      "supplierPower": "Low",
      "substitutes": "Medium",
      "rivalry": "High"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Active Pharmaceutical Ingredients (APIs), Reagents, Lab Equipment, Clinical Trial Data",
      "operations": "Chemical Synthesis, Biosimilar Cultivation, Formulation, Diagnostic Testing",
      "distribution": "Hospital Chains, Retail Pharmacy Networks, E-Pharmacy Platforms, Wholesalers",
      "endMarkets": "Patients, Diagnostic Clinics, Government Health Programs, Global Export Markets",
      "marginDriver": "Patented Specialty Drugs, High-volume Generics & Proprietary Formulations",
      "bottleneck": "API Raw Material Import Reliance & Stringent USFDA Regulatory Audits"
    },
    "regulatoryTimeline": [
      {
        "year": "2019",
        "title": "Ayushman Bharat (PM-JAY)",
        "detail": "Universal health coverage for 500M+ citizens"
      },
      {
        "year": "2021",
        "title": "Bulk Drug Parks PLI",
        "detail": "₹15,000 Cr incentives for active pharmaceutical ingredients"
      },
      {
        "year": "2023",
        "title": "Uniform Code for Pharma Practices",
        "detail": "Ethical marketing standards & R&D tax incentives"
      },
      {
        "year": "2024+",
        "title": "MedTech Regulatory Framework",
        "detail": "CDSCO medical device registration & ISO standards"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Healthcare Spend as % of GDP",
      "labels": [
        "India",
        "China",
        "Brazil",
        "USA",
        "Global Avg"
      ],
      "values": [
        3.8,
        5.4,
        9.6,
        17.8,
        10.2
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "API & Raw Materials",
        "Employee Cost",
        "R&D & Compliance",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        38,
        18,
        12,
        22,
        6,
        16
      ]
    },
    "workingCapital": {
      "inventoryDays": 72,
      "receivableDays": 58,
      "payableDays": 64,
      "cashConversionCycle": 66
    },
    "creditProfile": {
      "netDebtToEbitda": "1.2x",
      "creditRating": "AA / Stable",
      "costOfDebt": "7.4%",
      "liquidityBuffer": "₹8,200 Cr Cash & Investments"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        112,
        128,
        142,
        156,
        175
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+36.5%",
      "return3Yr": "+88.2%",
      "volatilityBeta": "0.85x (Defensive)"
    },
    "customerSegmentation": {
      "labels": [
        "Generics Exports (US/EU)",
        "Domestic Formulations",
        "Hospitals & Diagnostics"
      ],
      "values": [
        48,
        36,
        16
      ],
      "incomeCohort": "Domestic Hospitals (40%), Overseas Exports (48%), OTC Consumer (12%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        112,
        126,
        142,
        162
      ],
      "actualDemand": [
        88,
        102,
        118,
        136,
        156
      ],
      "utilizationRate": "83.8% Capacity Utilization"
    },
    "swot": {
      "strengths": [
        "World's pharmacy status with 20%+ global generic supply share",
        "Low-cost high-compliance FDA-approved manufacturing plants"
      ],
      "weaknesses": [
        "High import dependence on China for Active Pharma Ingredients (APIs)",
        "Stringent price controls (NLEM) on essential medicines"
      ],
      "opportunities": [
        "Patent cliff in US ($200B+ drugs expiring) opening biosimilar wave",
        "Expansion of private hospital chains into Tier-2/3 cities"
      ],
      "threats": [
        "USFDA regulatory import alerts & warning letters",
        "Geopolitical raw material price spikes & logistics delays"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q1 2023",
        "company": "Glenmark Life Sciences Buyout",
        "value": "$920M",
        "buyer": "Nirma Group"
      },
      {
        "date": "Q3 2023",
        "company": "Manipal Hospitals Stake Sale",
        "value": "$1.5B",
        "buyer": "Temasek Holdings"
      },
      {
        "date": "Q1 2024",
        "company": "Biocon Biologics Integration",
        "value": "$3.3B",
        "buyer": "Viatris Biosimilars Deal"
      }
    ],
    "techRadar": {
      "aiIntegration": "High",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "Medium"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the market size of hospital beds needed in India to meet WHO standards.",
      "Profitability Case: How can a domestic pharma company offset regulatory price caps (NLEM)?",
      "M&A Due Diligence: Evaluate an acquisition target specializing in complex biosimilars.",
      "Regulatory Risk: Explain the financial impact of a USFDA Form 483 warning letter on margins."
    ],
    "glossary": [
      {
        "term": "API",
        "definition": "Active Pharmaceutical Ingredient — Raw chemical substance producing therapeutic effect."
      },
      {
        "term": "ANDAS",
        "definition": "Abbreviated New Drug Application — USFDA filing for generic drug approvals."
      },
      {
        "term": "NLEM",
        "definition": "National List of Essential Medicines — Government price-controlled drugs."
      },
      {
        "term": "Biosimilar",
        "definition": "Biologic medical product almost identical to an original patented drug."
      }
    ]
  },
  {
    "id": "hospitality",
    "name": "Hospitality & Tourism",
    "sector": "Consumer",
    "description": "Indian hospitality is bouncing back with domestic tourism at record highs post-COVID. Government's 'Incredible India' campaigns and infra investment are key drivers.",
    "size": "$250 Billion by 2030",
    "cagr": "~13% CAGR",
    "players": [
      "Taj Hotels (IHCL)",
      "OYO",
      "MakeMyTrip",
      "Lemon Tree",
      "EIH"
    ],
    "forces": {
      "newEntrants": "Medium",
      "buyerPower": "High",
      "supplierPower": "Medium",
      "substitutes": "High",
      "rivalry": "High"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Agricultural Produce, Packaging Materials, Oils, Fibers & Fragrance Chemicals",
      "operations": "Blending, High-Speed Bottling/Packaging, Quality Assurance, Batch Processing",
      "distribution": "Kirana Store Distribution Network, Modern Trade Supermarkets, Quick-Commerce Dark Stores",
      "endMarkets": "Household Consumers across Tier 1, Tier 2 & Rural Indian Markets",
      "marginDriver": "Premium Brand Products, Direct-to-Consumer (D2C) Margins & Supply Chain Scale",
      "bottleneck": "Raw Material Price Volatility (Palm Oil/Cotton) & Hyperlocal Logistics Costs"
    },
    "regulatoryTimeline": [
      {
        "year": "2017",
        "title": "GST Implementation",
        "detail": "Unified national tax regime eliminating interstate logistics bottlenecks"
      },
      {
        "year": "2020",
        "title": "Atmanirbhar Bharat Push",
        "detail": "Import substitution & localized supply chain mandates"
      },
      {
        "year": "2022",
        "title": "PLI Scheme Expansion",
        "detail": "Sectoral manufacturing incentives for high-value exports"
      },
      {
        "year": "2024+",
        "title": "ESG & Sustainability Norms",
        "detail": "Mandatory BRSR disclosures & green transition targets"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Per Capita Consumption / Market Spend ($)",
      "labels": [
        "India",
        "China",
        "Brazil",
        "USA",
        "Global Avg"
      ],
      "values": [
        42,
        145,
        95,
        310,
        120
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "Raw Materials",
        "Employee Cost",
        "Marketing & Dist",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        52,
        14,
        14,
        20,
        5,
        15
      ]
    },
    "workingCapital": {
      "inventoryDays": 36,
      "receivableDays": 28,
      "payableDays": 42,
      "cashConversionCycle": 22
    },
    "creditProfile": {
      "netDebtToEbitda": "1.4x",
      "creditRating": "AA / Stable",
      "costOfDebt": "7.8%",
      "liquidityBuffer": "Healthy Cash Conversion & Reserves"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        108,
        120,
        130,
        142,
        158
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+29.5%",
      "return3Yr": "+72.0%",
      "volatilityBeta": "1.10x"
    },
    "customerSegmentation": {
      "labels": [
        "B2C Urban Consumers",
        "B2C Rural Households",
        "B2B Enterprise Clients"
      ],
      "values": [
        45,
        35,
        20
      ],
      "incomeCohort": "Tier-1 Metros (45%), Tier-2/3 Cities (35%), Rural Markets (20%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        112,
        126,
        142,
        160
      ],
      "actualDemand": [
        86,
        98,
        114,
        130,
        150
      ],
      "utilizationRate": "82.5% Factory Utilization"
    },
    "swot": {
      "strengths": [
        "Massive domestic demographic dividend & rising disposable income",
        "Established distribution networks spanning urban & rural retail channels"
      ],
      "weaknesses": [
        "Sensitivity to raw material price volatility (agricultural/chemical inputs)",
        "Margin pressure in unorganized traditional trade segments"
      ],
      "opportunities": [
        "Omnichannel digital commerce expansion & premium product adoption",
        "Government PLI schemes driving export manufacturing competitiveness"
      ],
      "threats": [
        "Hyperlocal quick-commerce disruption altering brand loyalty",
        "Global supply chain disruptions & freight rate inflation"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "Brand Portfolio Acquisition",
        "value": "$420M",
        "buyer": "Consumer Conglomerate A"
      },
      {
        "date": "Q4 2023",
        "company": "D2C Strategic Stake Buyout",
        "value": "$190M",
        "buyer": "Private Equity Growth Fund"
      },
      {
        "date": "Q1 2024",
        "company": "Manufacturing Asset Deal",
        "value": "$350M",
        "buyer": "Global Industrial Group"
      }
    ],
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "Medium"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the total addressable market (TAM) for premium D2C products in India.",
      "Profitability Case: How can a consumer company optimize trade discounts vs direct channel margins?",
      "M&A Evaluation: What metrics would you assess when acquiring an online-first D2C brand?",
      "Supply Chain: Calculate the cost trade-off between centralized warehousing vs dark stores."
    ],
    "glossary": [
      {
        "term": "D2C",
        "definition": "Direct-to-Consumer channel bypassing traditional distributors."
      },
      {
        "term": "SKU",
        "definition": "Stock Keeping Unit — Individual distinct product item identifier."
      },
      {
        "term": "TAM",
        "definition": "Total Addressable Market — Overall revenue opportunity for a product."
      },
      {
        "term": "LTV/CAC",
        "definition": "Ratio of Customer Lifetime Value to Customer Acquisition Cost."
      }
    ]
  },
  {
    "id": "infrastructure",
    "name": "Infrastructure",
    "sector": "Infrastructure",
    "description": "India's infra sector is in a massive capex cycle backed by PM Gati Shakti, NIP, and record government capex. Roads, railways, ports, and airports are key focus areas.",
    "size": "$1.4 Trillion NIP",
    "cagr": "~11% CAGR",
    "players": [
      "L&T",
      "GMR Group",
      "IRB Infra",
      "Ashoka Buildcon",
      "KNR Constructions"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "Low",
      "supplierPower": "Medium",
      "substitutes": "Low",
      "rivalry": "Medium"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Limestone, Coal, Fly Ash, Steel Rebar, Heavy Machinery & Land Parcels",
      "operations": "Clinker Kiln Processing, Structural Engineering, Site Excavation & Construction",
      "distribution": "Dealer Networks, Institutional Infra Contractors, Direct B2B Site Delivery",
      "endMarkets": "National Highways, High-Rise Residential Projects, Industrial Parks, Smart Cities",
      "marginDriver": "Operating Scale Economies, Freight Cost Optimization & Premium Brand Cement",
      "bottleneck": "High Thermal Energy (Coal) Costs & Environmental Clearance Delays"
    },
    "regulatoryTimeline": [
      {
        "year": "2016",
        "title": "RERA Act Enactment",
        "detail": "Real Estate Regulation & buyer protection framework"
      },
      {
        "year": "2019",
        "title": "National Infrastructure Pipeline",
        "detail": "₹111 Lakh Cr master plan for roads, rail & ports"
      },
      {
        "year": "2021",
        "title": "PM Gati Shakti Master Plan",
        "detail": "Multimodal transport infrastructure integration"
      },
      {
        "year": "2024+",
        "title": "Record Capex Outlay",
        "detail": "₹11.11 Lakh Cr central government infrastructure capex"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Per Capita Cement / Infra Consumption (kg)",
      "labels": [
        "India",
        "China",
        "Vietnam",
        "Turkey",
        "Global Avg"
      ],
      "values": [
        260,
        1650,
        780,
        620,
        530
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "Power & Fuel (Coal)",
        "Freight & Logistics",
        "Raw Materials",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        28,
        24,
        18,
        18,
        6,
        12
      ]
    },
    "workingCapital": {
      "inventoryDays": 45,
      "receivableDays": 42,
      "payableDays": 68,
      "cashConversionCycle": 19
    },
    "creditProfile": {
      "netDebtToEbitda": "2.2x",
      "creditRating": "AA / Stable",
      "costOfDebt": "8.5%",
      "liquidityBuffer": "Strong Order Book Coverage (3.2x Revenue)"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        115,
        130,
        148,
        165,
        188
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+45.2%",
      "return3Yr": "+118.5%",
      "volatilityBeta": "1.32x (High Beta Infra)"
    },
    "customerSegmentation": {
      "labels": [
        "Government Roads & Rail",
        "Commercial & Residential",
        "Industrial Factories"
      ],
      "values": [
        50,
        35,
        15
      ],
      "incomeCohort": "State & Central Contracts (50%), Tier-1 Developers (35%), SME B2B (15%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        108,
        118,
        132,
        150
      ],
      "actualDemand": [
        78,
        88,
        102,
        118,
        138
      ],
      "utilizationRate": "78.6% Kiln Utilization"
    },
    "swot": {
      "strengths": [
        "Record central government capex allocation (₹11.11 Lakh Cr)",
        "High entry barriers due to limestone reserves & logistics freight networks"
      ],
      "weaknesses": [
        "High sensitivity to imported coal & diesel freight costs",
        "Working capital delays in state government project receivables"
      ],
      "opportunities": [
        "Dedicated Freight Corridors & High-speed Rail Expansion",
        "Green Cement & Waste Heat Recovery Systems (WHRS) reducing power cost"
      ],
      "threats": [
        "Environmental clearance bottlenecks & land acquisition delays",
        "Monsoon seasonal construction slowdowns"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "Ambuja Cement Sanghi Acquisition",
        "value": "$600M",
        "buyer": "Adani Cement Group"
      },
      {
        "date": "Q4 2023",
        "company": "Kesoram Cement Asset Buyout",
        "value": "$640M",
        "buyer": "UltraTech Cement"
      },
      {
        "date": "Q1 2024",
        "company": "Highway InvIT Concession Buyout",
        "value": "$1.1B",
        "buyer": "CPP Investments"
      }
    ],
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "Low",
      "platformEcosystem": "Medium"
    },
    "interviewAngles": [
      "Market Sizing: Estimate total cement demand generated by affordable housing in India.",
      "Valuation Case: How do you value an EPC contractor using EV/EBITDA vs Price/Book?",
      "Profitability Case: How does freight optimization impact EBITDA per ton for a cement producer?",
      "Project Finance: Explain Debt Service Coverage Ratio (DSCR) in toll road InvITs."
    ],
    "glossary": [
      {
        "term": "EPC",
        "definition": "Engineering, Procurement, and Construction contract model."
      },
      {
        "term": "WHRS",
        "definition": "Waste Heat Recovery System — Capturing kiln exhaust heat for cheap power."
      },
      {
        "term": "InvIT",
        "definition": "Infrastructure Investment Trust — Vehicle pooling operational toll assets."
      },
      {
        "term": "Clinker",
        "definition": "Nodule raw material produced by heating limestone in cement kilns."
      }
    ]
  },
  {
    "id": "insurance",
    "name": "Insurance",
    "sector": "Financial Services",
    "description": "India's insurance sector remains highly underpenetrated at ~4% of GDP vs global avg of 7%, representing massive growth potential. Life, health, and motor insurance are key segments.",
    "size": "~4% GDP penetration",
    "cagr": "~14% CAGR",
    "players": [
      "LIC",
      "HDFC Life",
      "ICICI Prudential Life",
      "Star Health",
      "New India Assurance"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "Medium",
      "supplierPower": "Low",
      "substitutes": "Medium",
      "rivalry": "High"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Investor Capital, Banking Licenses, Market Data Feeds, Core Banking APIs",
      "operations": "Underwriting, Portfolio Management, Risk Modeling, Asset Allocation",
      "distribution": "Bank Branches, Mutual Fund Distributors, Fintech Apps, Institutional Sales",
      "endMarkets": "Retail Investors, High Net-Worth Individuals (HNIs), Corporate Treasuries",
      "marginDriver": "Asset Management Fees (AUM %), Net Interest Margin (NIM)",
      "bottleneck": "Regulatory Approvals (SEBI/RBI) & Customer Acquisition Cost (CAC)"
    },
    "regulatoryTimeline": [
      {
        "year": "2018",
        "title": "Insolvency Code (IBC)",
        "detail": "NCLT resolution framework & NPA cleanup"
      },
      {
        "year": "2020",
        "title": "UPI & Account Aggregator",
        "detail": "Open banking API & real-time payment protocol"
      },
      {
        "year": "2022",
        "title": "Digital Lending Norms",
        "detail": "RBI guidelines on FLDG & customer data privacy"
      },
      {
        "year": "2024+",
        "title": "Sovereign Bond Inclusions",
        "detail": "JPMorgan GBI-EM index inclusion & capital inflows"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Credit / AUM to GDP Ratio (%)",
      "labels": [
        "India",
        "China",
        "USA",
        "UK",
        "Global Avg"
      ],
      "values": [
        58,
        185,
        216,
        165,
        140
      ]
    },
    "costStructure": {
      "labels": [
        "Total Revenue",
        "Interest Cost",
        "Employee Cost",
        "Other Opex",
        "EBITDA/PPOP",
        "D&A / Prov",
        "PAT"
      ],
      "values": [
        100,
        42,
        16,
        14,
        28,
        8,
        20
      ]
    },
    "workingCapital": {
      "inventoryDays": 0,
      "receivableDays": 15,
      "payableDays": 12,
      "cashConversionCycle": 3
    },
    "creditProfile": {
      "netDebtToEbitda": "N/A (Capital Adequacy: 16.8%)",
      "creditRating": "AAA / Stable",
      "costOfDebt": "6.8%",
      "liquidityBuffer": "CRAR 17.2% vs 11.5% Min"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        109,
        118,
        126,
        134,
        148
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+26.8%",
      "return3Yr": "+68.4%",
      "volatilityBeta": "1.08x (Low Volatility)"
    },
    "customerSegmentation": {
      "labels": [
        "Retail Individual",
        "HNI & Family Offices",
        "Corporate Treasuries"
      ],
      "values": [
        52,
        28,
        20
      ],
      "incomeCohort": "Tier-1 Metros (50%), Tier-2 Cities (35%), Rural/Semi-Urban (15%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        112,
        128,
        145,
        168
      ],
      "actualDemand": [
        92,
        105,
        122,
        140,
        162
      ],
      "utilizationRate": "94.2% Credit Growth Rate"
    },
    "swot": {
      "strengths": [
        "High Net Interest Margins (NIM) & low-cost CASA deposit base",
        "Accelerating UPI digital transaction scale & credit underwriting APIs"
      ],
      "weaknesses": [
        "Unsecured retail credit default risks during macro slowdowns",
        "Regulatory capital lock-in & stringent CRR/SLR reserve ratios"
      ],
      "opportunities": [
        "Financial inclusion expansion across Tier-2/3 wealth management",
        "Co-lending partnerships between Banks, NBFCs & Fintechs"
      ],
      "threats": [
        "Cybersecurity breaches & fraudulent digital transaction vectors",
        "Rising deposit rate competition reducing spread margins"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "HDFC Ltd & HDFC Bank Merger",
        "value": "$40.0B",
        "buyer": "HDFC Group Mega Merger"
      },
      {
        "date": "Q4 2023",
        "company": "Suvidhaa NBFC Acquisition",
        "value": "$320M",
        "buyer": "Fintech Global Holdings"
      },
      {
        "date": "Q1 2024",
        "company": "Wealth Management Private Buyout",
        "value": "$550M",
        "buyer": "Global Private Equity"
      }
    ],
    "techRadar": {
      "aiIntegration": "High",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "High"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the annual credit demand for small business (MSME) loans in India.",
      "Financial Valuation: How do you value a commercial bank using Price-to-Book (P/B) and ROE?",
      "Credit Risk Analysis: Explain how Net Interest Margin (NIM) and Cost of Risk impact ROA.",
      "Fintech Disruption: How does UPI Account Aggregator threaten legacy retail banking fee income?"
    ],
    "glossary": [
      {
        "term": "NIM",
        "definition": "Net Interest Margin — Difference between interest earned and interest paid relative to assets."
      },
      {
        "term": "CASA",
        "definition": "Current Account Savings Account — Low-cost deposit ratio driving bank profitability."
      },
      {
        "term": "GNPA",
        "definition": "Gross Non-Performing Assets — Percentage of total loans overdue >90 days."
      },
      {
        "term": "CRAR",
        "definition": "Capital to Risk-Weighted Assets Ratio — Regulatory capital cushion enforced by RBI."
      }
    ]
  },
  {
    "id": "it-services",
    "name": "IT Services",
    "sector": "Technology",
    "description": "India's IT sector is the backbone of global technology delivery. With $250 Billion+ in revenue, Indian IT companies serve Fortune 500 clients across cloud, AI, and digital transformation.",
    "size": "$250 Billion+ revenue",
    "cagr": "~8% CAGR",
    "players": [
      "TCS",
      "Infosys",
      "Wipro",
      "HCLTech",
      "Tech Mahindra"
    ],
    "forces": {
      "newEntrants": "Medium",
      "buyerPower": "High",
      "supplierPower": "Low",
      "substitutes": "Medium",
      "rivalry": "High"
    },
    "trend": "stable",
    "outlook": "Stable",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Cloud Server Infrastructure (AWS/GCP), Silicon Wafers, Engineering Talent",
      "operations": "Software Development, Algorithmic Training, QA Testing, API Integration",
      "distribution": "SaaS Web Portals, Mobile App Stores (Google/Apple), Enterprise System Integrators",
      "endMarkets": "Global Fortune 500 Enterprises, SMEs, Mobile Consumers & Gaming Enthusiasts",
      "marginDriver": "Recurring Software Licenses (ARR), High Gross Margin Code IP",
      "bottleneck": "High Senior Tech Talent Attrition & Specialized Hardware Availability"
    },
    "regulatoryTimeline": [
      {
        "year": "2020",
        "title": "OSP Liberalization",
        "detail": "Simplified IT/ITeS remote working & telecom regulations"
      },
      {
        "year": "2021",
        "title": "Semiconductor Mission",
        "detail": "76,000 Cr PLI for silicon fab & chip packaging units"
      },
      {
        "year": "2023",
        "title": "DPDP Act Enactment",
        "detail": "Digital Personal Data Protection framework compliance"
      },
      {
        "year": "2024+",
        "title": "IndiaAI Mission",
        "detail": "₹10,372 Cr allocated for GPU supercomputing clusters"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "IT & Software Export Market Share (%)",
      "labels": [
        "India",
        "USA",
        "Ireland",
        "China",
        "Global Avg"
      ],
      "values": [
        56,
        18,
        9,
        7,
        10
      ]
    },
    "costStructure": {
      "labels": [
        "Total Revenue",
        "Employee Cost",
        "Subcontracting",
        "Facility & Cloud",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        56,
        12,
        8,
        24,
        4,
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
      "netDebtToEbitda": "0.1x (Net Cash Positive)",
      "creditRating": "AAA / Stable",
      "costOfDebt": "6.2%",
      "liquidityBuffer": "$8.5 Billion Net Cash"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        104,
        110,
        116,
        122,
        134
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+18.2%",
      "return3Yr": "+46.5%",
      "volatilityBeta": "1.02x (Defensive Growth)"
    },
    "customerSegmentation": {
      "labels": [
        "BFSI (Banking & Finance)",
        "Retail & Consumer",
        "Healthcare & High-Tech"
      ],
      "values": [
        40,
        32,
        28
      ],
      "incomeCohort": "North America (55%), Europe (30%), Rest of World (15%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        115,
        132,
        150,
        172
      ],
      "actualDemand": [
        96,
        112,
        128,
        146,
        168
      ],
      "utilizationRate": "84.5% Employee Utilization"
    },
    "swot": {
      "strengths": [
        "Unrivaled scale of 5M+ English-speaking engineering talent",
        "High recurring revenue share with Fortune 500 enterprise clients"
      ],
      "weaknesses": [
        "Exposure to US/Europe enterprise IT budget cuts",
        "High senior tech talent attrition during tech expansion cycles"
      ],
      "opportunities": [
        "Generative AI migration, cloud transformation & cyber defense",
        "India Semiconductor Mission fab & chip design incentives"
      ],
      "threats": [
        "Automated AI code generation compressing billable hours",
        "Protectionist visa policies & currency volatility"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q1 2023",
        "company": "Infosys InSemi Silicon Acquisition",
        "value": "$340M",
        "buyer": "Infosys Tech"
      },
      {
        "date": "Q3 2023",
        "company": "Freshworks SaaS Buyback",
        "value": "$500M",
        "buyer": "Public Shareholder Buyback"
      },
      {
        "date": "Q1 2024",
        "company": "GenAI Enterprise Startup Deal",
        "value": "$180M",
        "buyer": "Tech Mahindra VC"
      }
    ],
    "techRadar": {
      "aiIntegration": "High",
      "roboticsAutomation": "High",
      "d2cOmnichannel": "High",
      "platformEcosystem": "High"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the revenue impact of GenAI adoption on Indian IT services by 2028.",
      "Profitability Case: How does a SaaS company optimize Customer Acquisition Cost (CAC) vs LTV?",
      "M&A Due Diligence: Evaluate an acquisition target in cloud-native application modernization.",
      "Operational Metric: Explain how Employee Attrition & Utilization Rate drive operating margins."
    ],
    "glossary": [
      {
        "term": "TCV",
        "definition": "Total Contract Value — Total revenue from signed enterprise deals."
      },
      {
        "term": "ARR",
        "definition": "Annual Recurring Revenue — Key SaaS subscription metric."
      },
      {
        "term": "Utilization",
        "definition": "Percentage of billable employee time assigned to client projects."
      },
      {
        "term": "FTE",
        "definition": "Full-Time Equivalent — Standard measure of project staffing."
      }
    ]
  },
  {
    "id": "media",
    "name": "Media & Entertainment",
    "sector": "Consumer",
    "description": "India's M&E sector is experiencing a digital revolution with OTT platforms growing rapidly. Streaming wars, regional content, and gaming are transforming consumption patterns.",
    "size": "$28 Billion market",
    "cagr": "~12% CAGR",
    "players": [
      "Star India",
      "Sony Pictures",
      "Zee Entertainment",
      "Netflix India",
      "Amazon Prime India"
    ],
    "forces": {
      "newEntrants": "High",
      "buyerPower": "High",
      "supplierPower": "Medium",
      "substitutes": "High",
      "rivalry": "High"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Agricultural Produce, Packaging Materials, Oils, Fibers & Fragrance Chemicals",
      "operations": "Blending, High-Speed Bottling/Packaging, Quality Assurance, Batch Processing",
      "distribution": "Kirana Store Distribution Network, Modern Trade Supermarkets, Quick-Commerce Dark Stores",
      "endMarkets": "Household Consumers across Tier 1, Tier 2 & Rural Indian Markets",
      "marginDriver": "Premium Brand Products, Direct-to-Consumer (D2C) Margins & Supply Chain Scale",
      "bottleneck": "Raw Material Price Volatility (Palm Oil/Cotton) & Hyperlocal Logistics Costs"
    },
    "regulatoryTimeline": [
      {
        "year": "2017",
        "title": "GST Implementation",
        "detail": "Unified national tax regime eliminating interstate logistics bottlenecks"
      },
      {
        "year": "2020",
        "title": "Atmanirbhar Bharat Push",
        "detail": "Import substitution & localized supply chain mandates"
      },
      {
        "year": "2022",
        "title": "PLI Scheme Expansion",
        "detail": "Sectoral manufacturing incentives for high-value exports"
      },
      {
        "year": "2024+",
        "title": "ESG & Sustainability Norms",
        "detail": "Mandatory BRSR disclosures & green transition targets"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Per Capita Consumption / Market Spend ($)",
      "labels": [
        "India",
        "China",
        "Brazil",
        "USA",
        "Global Avg"
      ],
      "values": [
        42,
        145,
        95,
        310,
        120
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "Raw Materials",
        "Employee Cost",
        "Marketing & Dist",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        52,
        14,
        14,
        20,
        5,
        15
      ]
    },
    "workingCapital": {
      "inventoryDays": 36,
      "receivableDays": 28,
      "payableDays": 42,
      "cashConversionCycle": 22
    },
    "creditProfile": {
      "netDebtToEbitda": "1.4x",
      "creditRating": "AA / Stable",
      "costOfDebt": "7.8%",
      "liquidityBuffer": "Healthy Cash Conversion & Reserves"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        108,
        120,
        130,
        142,
        158
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+29.5%",
      "return3Yr": "+72.0%",
      "volatilityBeta": "1.10x"
    },
    "customerSegmentation": {
      "labels": [
        "B2C Urban Consumers",
        "B2C Rural Households",
        "B2B Enterprise Clients"
      ],
      "values": [
        45,
        35,
        20
      ],
      "incomeCohort": "Tier-1 Metros (45%), Tier-2/3 Cities (35%), Rural Markets (20%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        112,
        126,
        142,
        160
      ],
      "actualDemand": [
        86,
        98,
        114,
        130,
        150
      ],
      "utilizationRate": "82.5% Factory Utilization"
    },
    "swot": {
      "strengths": [
        "Massive domestic demographic dividend & rising disposable income",
        "Established distribution networks spanning urban & rural retail channels"
      ],
      "weaknesses": [
        "Sensitivity to raw material price volatility (agricultural/chemical inputs)",
        "Margin pressure in unorganized traditional trade segments"
      ],
      "opportunities": [
        "Omnichannel digital commerce expansion & premium product adoption",
        "Government PLI schemes driving export manufacturing competitiveness"
      ],
      "threats": [
        "Hyperlocal quick-commerce disruption altering brand loyalty",
        "Global supply chain disruptions & freight rate inflation"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "Brand Portfolio Acquisition",
        "value": "$420M",
        "buyer": "Consumer Conglomerate A"
      },
      {
        "date": "Q4 2023",
        "company": "D2C Strategic Stake Buyout",
        "value": "$190M",
        "buyer": "Private Equity Growth Fund"
      },
      {
        "date": "Q1 2024",
        "company": "Manufacturing Asset Deal",
        "value": "$350M",
        "buyer": "Global Industrial Group"
      }
    ],
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "Medium"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the total addressable market (TAM) for premium D2C products in India.",
      "Profitability Case: How can a consumer company optimize trade discounts vs direct channel margins?",
      "M&A Evaluation: What metrics would you assess when acquiring an online-first D2C brand?",
      "Supply Chain: Calculate the cost trade-off between centralized warehousing vs dark stores."
    ],
    "glossary": [
      {
        "term": "D2C",
        "definition": "Direct-to-Consumer channel bypassing traditional distributors."
      },
      {
        "term": "SKU",
        "definition": "Stock Keeping Unit — Individual distinct product item identifier."
      },
      {
        "term": "TAM",
        "definition": "Total Addressable Market — Overall revenue opportunity for a product."
      },
      {
        "term": "LTV/CAC",
        "definition": "Ratio of Customer Lifetime Value to Customer Acquisition Cost."
      }
    ]
  },
  {
    "id": "metals",
    "name": "Metals & Mining",
    "sector": "Manufacturing",
    "description": "India is among the top producers of steel, aluminum, and coal globally. Capacity expansion and infrastructure demand are driving strong growth. Sustainability is an increasing focus.",
    "size": "India 2nd largest steel producer",
    "cagr": "~6% CAGR",
    "players": [
      "Tata Steel",
      "JSW Steel",
      "SAIL",
      "Hindalco",
      "NMDC"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "Medium",
      "supplierPower": "Medium",
      "substitutes": "Low",
      "rivalry": "High"
    },
    "trend": "stable",
    "outlook": "Stable",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Iron Ore, Scrap Metal, Crude Oil Derivatives, Specialty Catalyst Chemicals",
      "operations": "Blast Furnace Smelting, Chemical Synthesis, Precision Machining, Tooling Assembly",
      "distribution": "Industrial B2B Sales Teams, OEM Suppliers, Global Export Traders",
      "endMarkets": "Heavy Engineering Plants, Defense Contractors, Automotive OEMs, Infra Developers",
      "marginDriver": "Specialty High-Purity Chemicals, Customized OEM Assemblies & Value-Added Steel",
      "bottleneck": "Raw Material Price Cyclicality & High Capital Expenditure Requirements"
    },
    "regulatoryTimeline": [
      {
        "year": "2017",
        "title": "GST Implementation",
        "detail": "Unified national tax regime eliminating interstate logistics bottlenecks"
      },
      {
        "year": "2020",
        "title": "Atmanirbhar Bharat Push",
        "detail": "Import substitution & localized supply chain mandates"
      },
      {
        "year": "2022",
        "title": "PLI Scheme Expansion",
        "detail": "Sectoral manufacturing incentives for high-value exports"
      },
      {
        "year": "2024+",
        "title": "ESG & Sustainability Norms",
        "detail": "Mandatory BRSR disclosures & green transition targets"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Per Capita Consumption / Market Spend ($)",
      "labels": [
        "India",
        "China",
        "Brazil",
        "USA",
        "Global Avg"
      ],
      "values": [
        42,
        145,
        95,
        310,
        120
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "Raw Materials",
        "Employee Cost",
        "Marketing & Dist",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        52,
        14,
        14,
        20,
        5,
        15
      ]
    },
    "workingCapital": {
      "inventoryDays": 36,
      "receivableDays": 28,
      "payableDays": 42,
      "cashConversionCycle": 22
    },
    "creditProfile": {
      "netDebtToEbitda": "1.4x",
      "creditRating": "AA / Stable",
      "costOfDebt": "7.8%",
      "liquidityBuffer": "Healthy Cash Conversion & Reserves"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        108,
        120,
        130,
        142,
        158
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+29.5%",
      "return3Yr": "+72.0%",
      "volatilityBeta": "1.10x"
    },
    "customerSegmentation": {
      "labels": [
        "B2C Urban Consumers",
        "B2C Rural Households",
        "B2B Enterprise Clients"
      ],
      "values": [
        45,
        35,
        20
      ],
      "incomeCohort": "Tier-1 Metros (45%), Tier-2/3 Cities (35%), Rural Markets (20%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        112,
        126,
        142,
        160
      ],
      "actualDemand": [
        86,
        98,
        114,
        130,
        150
      ],
      "utilizationRate": "82.5% Factory Utilization"
    },
    "swot": {
      "strengths": [
        "Massive domestic demographic dividend & rising disposable income",
        "Established distribution networks spanning urban & rural retail channels"
      ],
      "weaknesses": [
        "Sensitivity to raw material price volatility (agricultural/chemical inputs)",
        "Margin pressure in unorganized traditional trade segments"
      ],
      "opportunities": [
        "Omnichannel digital commerce expansion & premium product adoption",
        "Government PLI schemes driving export manufacturing competitiveness"
      ],
      "threats": [
        "Hyperlocal quick-commerce disruption altering brand loyalty",
        "Global supply chain disruptions & freight rate inflation"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "Brand Portfolio Acquisition",
        "value": "$420M",
        "buyer": "Consumer Conglomerate A"
      },
      {
        "date": "Q4 2023",
        "company": "D2C Strategic Stake Buyout",
        "value": "$190M",
        "buyer": "Private Equity Growth Fund"
      },
      {
        "date": "Q1 2024",
        "company": "Manufacturing Asset Deal",
        "value": "$350M",
        "buyer": "Global Industrial Group"
      }
    ],
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "Medium"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the total addressable market (TAM) for premium D2C products in India.",
      "Profitability Case: How can a consumer company optimize trade discounts vs direct channel margins?",
      "M&A Evaluation: What metrics would you assess when acquiring an online-first D2C brand?",
      "Supply Chain: Calculate the cost trade-off between centralized warehousing vs dark stores."
    ],
    "glossary": [
      {
        "term": "D2C",
        "definition": "Direct-to-Consumer channel bypassing traditional distributors."
      },
      {
        "term": "SKU",
        "definition": "Stock Keeping Unit — Individual distinct product item identifier."
      },
      {
        "term": "TAM",
        "definition": "Total Addressable Market — Overall revenue opportunity for a product."
      },
      {
        "term": "LTV/CAC",
        "definition": "Ratio of Customer Lifetime Value to Customer Acquisition Cost."
      }
    ]
  },
  {
    "id": "oil-gas",
    "name": "Oil & Gas",
    "sector": "Energy",
    "description": "India's oil and gas sector is undergoing transformation. Domestic exploration, downstream refining, and the transition to CNG and LNG are key themes. India is the 3rd largest oil consumer.",
    "size": "3rd largest oil consumer globally",
    "cagr": "~5% CAGR",
    "players": [
      "Reliance Industries",
      "ONGC",
      "BPCL",
      "IOC",
      "HPCL"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "Low",
      "supplierPower": "High",
      "substitutes": "Medium",
      "rivalry": "Medium"
    },
    "trend": "stable",
    "outlook": "Stable",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Core Raw Materials, Skilled Workforce, Primary Energy & Specialized Capital Equipment",
      "operations": "Value-Add Processing, Operations Engineering, Quality Assurance, Packaging",
      "distribution": "Direct Sales Outlets, Authorized Distributors, B2B Channels & E-Commerce",
      "endMarkets": "Enterprise Buyers, Commercial Outlets & Individual Domestic Consumers",
      "marginDriver": "Product Differentiation, Scale Efficiency & Channel Partner Optimization",
      "bottleneck": "Supply Chain Disruption Risks & Regulatory Compliance Requirements"
    },
    "regulatoryTimeline": [
      {
        "year": "2017",
        "title": "GST Implementation",
        "detail": "Unified national tax regime eliminating interstate logistics bottlenecks"
      },
      {
        "year": "2020",
        "title": "Atmanirbhar Bharat Push",
        "detail": "Import substitution & localized supply chain mandates"
      },
      {
        "year": "2022",
        "title": "PLI Scheme Expansion",
        "detail": "Sectoral manufacturing incentives for high-value exports"
      },
      {
        "year": "2024+",
        "title": "ESG & Sustainability Norms",
        "detail": "Mandatory BRSR disclosures & green transition targets"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Per Capita Consumption / Market Spend ($)",
      "labels": [
        "India",
        "China",
        "Brazil",
        "USA",
        "Global Avg"
      ],
      "values": [
        42,
        145,
        95,
        310,
        120
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "Raw Materials",
        "Employee Cost",
        "Marketing & Dist",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        52,
        14,
        14,
        20,
        5,
        15
      ]
    },
    "workingCapital": {
      "inventoryDays": 36,
      "receivableDays": 28,
      "payableDays": 42,
      "cashConversionCycle": 22
    },
    "creditProfile": {
      "netDebtToEbitda": "1.4x",
      "creditRating": "AA / Stable",
      "costOfDebt": "7.8%",
      "liquidityBuffer": "Healthy Cash Conversion & Reserves"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        108,
        120,
        130,
        142,
        158
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+29.5%",
      "return3Yr": "+72.0%",
      "volatilityBeta": "1.10x"
    },
    "customerSegmentation": {
      "labels": [
        "B2C Urban Consumers",
        "B2C Rural Households",
        "B2B Enterprise Clients"
      ],
      "values": [
        45,
        35,
        20
      ],
      "incomeCohort": "Tier-1 Metros (45%), Tier-2/3 Cities (35%), Rural Markets (20%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        112,
        126,
        142,
        160
      ],
      "actualDemand": [
        86,
        98,
        114,
        130,
        150
      ],
      "utilizationRate": "82.5% Factory Utilization"
    },
    "swot": {
      "strengths": [
        "Massive domestic demographic dividend & rising disposable income",
        "Established distribution networks spanning urban & rural retail channels"
      ],
      "weaknesses": [
        "Sensitivity to raw material price volatility (agricultural/chemical inputs)",
        "Margin pressure in unorganized traditional trade segments"
      ],
      "opportunities": [
        "Omnichannel digital commerce expansion & premium product adoption",
        "Government PLI schemes driving export manufacturing competitiveness"
      ],
      "threats": [
        "Hyperlocal quick-commerce disruption altering brand loyalty",
        "Global supply chain disruptions & freight rate inflation"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "Brand Portfolio Acquisition",
        "value": "$420M",
        "buyer": "Consumer Conglomerate A"
      },
      {
        "date": "Q4 2023",
        "company": "D2C Strategic Stake Buyout",
        "value": "$190M",
        "buyer": "Private Equity Growth Fund"
      },
      {
        "date": "Q1 2024",
        "company": "Manufacturing Asset Deal",
        "value": "$350M",
        "buyer": "Global Industrial Group"
      }
    ],
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "Medium"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the total addressable market (TAM) for premium D2C products in India.",
      "Profitability Case: How can a consumer company optimize trade discounts vs direct channel margins?",
      "M&A Evaluation: What metrics would you assess when acquiring an online-first D2C brand?",
      "Supply Chain: Calculate the cost trade-off between centralized warehousing vs dark stores."
    ],
    "glossary": [
      {
        "term": "D2C",
        "definition": "Direct-to-Consumer channel bypassing traditional distributors."
      },
      {
        "term": "SKU",
        "definition": "Stock Keeping Unit — Individual distinct product item identifier."
      },
      {
        "term": "TAM",
        "definition": "Total Addressable Market — Overall revenue opportunity for a product."
      },
      {
        "term": "LTV/CAC",
        "definition": "Ratio of Customer Lifetime Value to Customer Acquisition Cost."
      }
    ]
  },
  {
    "id": "real-estate",
    "name": "Real Estate",
    "sector": "Infrastructure",
    "description": "India's real estate market is in an upcycle with affordable housing, commercial real estate revival, and data center demand converging. REITs are enabling retail investor access.",
    "size": "$650 Billion by 2025",
    "cagr": "~10% CAGR",
    "players": [
      "DLF",
      "Godrej Properties",
      "Prestige Estates",
      "Brigade Group",
      "Sobha"
    ],
    "forces": {
      "newEntrants": "Medium",
      "buyerPower": "High",
      "supplierPower": "Medium",
      "substitutes": "Low",
      "rivalry": "High"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Limestone, Coal, Fly Ash, Steel Rebar, Heavy Machinery & Land Parcels",
      "operations": "Clinker Kiln Processing, Structural Engineering, Site Excavation & Construction",
      "distribution": "Dealer Networks, Institutional Infra Contractors, Direct B2B Site Delivery",
      "endMarkets": "National Highways, High-Rise Residential Projects, Industrial Parks, Smart Cities",
      "marginDriver": "Operating Scale Economies, Freight Cost Optimization & Premium Brand Cement",
      "bottleneck": "High Thermal Energy (Coal) Costs & Environmental Clearance Delays"
    },
    "regulatoryTimeline": [
      {
        "year": "2016",
        "title": "RERA Act Enactment",
        "detail": "Real Estate Regulation & buyer protection framework"
      },
      {
        "year": "2019",
        "title": "National Infrastructure Pipeline",
        "detail": "₹111 Lakh Cr master plan for roads, rail & ports"
      },
      {
        "year": "2021",
        "title": "PM Gati Shakti Master Plan",
        "detail": "Multimodal transport infrastructure integration"
      },
      {
        "year": "2024+",
        "title": "Record Capex Outlay",
        "detail": "₹11.11 Lakh Cr central government infrastructure capex"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Per Capita Cement / Infra Consumption (kg)",
      "labels": [
        "India",
        "China",
        "Vietnam",
        "Turkey",
        "Global Avg"
      ],
      "values": [
        260,
        1650,
        780,
        620,
        530
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "Power & Fuel (Coal)",
        "Freight & Logistics",
        "Raw Materials",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        28,
        24,
        18,
        18,
        6,
        12
      ]
    },
    "workingCapital": {
      "inventoryDays": 45,
      "receivableDays": 42,
      "payableDays": 68,
      "cashConversionCycle": 19
    },
    "creditProfile": {
      "netDebtToEbitda": "2.2x",
      "creditRating": "AA / Stable",
      "costOfDebt": "8.5%",
      "liquidityBuffer": "Strong Order Book Coverage (3.2x Revenue)"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        115,
        130,
        148,
        165,
        188
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+45.2%",
      "return3Yr": "+118.5%",
      "volatilityBeta": "1.32x (High Beta Infra)"
    },
    "customerSegmentation": {
      "labels": [
        "Government Roads & Rail",
        "Commercial & Residential",
        "Industrial Factories"
      ],
      "values": [
        50,
        35,
        15
      ],
      "incomeCohort": "State & Central Contracts (50%), Tier-1 Developers (35%), SME B2B (15%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        108,
        118,
        132,
        150
      ],
      "actualDemand": [
        78,
        88,
        102,
        118,
        138
      ],
      "utilizationRate": "78.6% Kiln Utilization"
    },
    "swot": {
      "strengths": [
        "Record central government capex allocation (₹11.11 Lakh Cr)",
        "High entry barriers due to limestone reserves & logistics freight networks"
      ],
      "weaknesses": [
        "High sensitivity to imported coal & diesel freight costs",
        "Working capital delays in state government project receivables"
      ],
      "opportunities": [
        "Dedicated Freight Corridors & High-speed Rail Expansion",
        "Green Cement & Waste Heat Recovery Systems (WHRS) reducing power cost"
      ],
      "threats": [
        "Environmental clearance bottlenecks & land acquisition delays",
        "Monsoon seasonal construction slowdowns"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "Ambuja Cement Sanghi Acquisition",
        "value": "$600M",
        "buyer": "Adani Cement Group"
      },
      {
        "date": "Q4 2023",
        "company": "Kesoram Cement Asset Buyout",
        "value": "$640M",
        "buyer": "UltraTech Cement"
      },
      {
        "date": "Q1 2024",
        "company": "Highway InvIT Concession Buyout",
        "value": "$1.1B",
        "buyer": "CPP Investments"
      }
    ],
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "Low",
      "platformEcosystem": "Medium"
    },
    "interviewAngles": [
      "Market Sizing: Estimate total cement demand generated by affordable housing in India.",
      "Valuation Case: How do you value an EPC contractor using EV/EBITDA vs Price/Book?",
      "Profitability Case: How does freight optimization impact EBITDA per ton for a cement producer?",
      "Project Finance: Explain Debt Service Coverage Ratio (DSCR) in toll road InvITs."
    ],
    "glossary": [
      {
        "term": "EPC",
        "definition": "Engineering, Procurement, and Construction contract model."
      },
      {
        "term": "WHRS",
        "definition": "Waste Heat Recovery System — Capturing kiln exhaust heat for cheap power."
      },
      {
        "term": "InvIT",
        "definition": "Infrastructure Investment Trust — Vehicle pooling operational toll assets."
      },
      {
        "term": "Clinker",
        "definition": "Nodule raw material produced by heating limestone in cement kilns."
      }
    ]
  },
  {
    "id": "retail",
    "name": "Retail",
    "sector": "Consumer",
    "description": "India's retail sector is the world's 5th largest. The unorganized to organized shift continues, fueled by modern trade expansion, e-commerce penetration, and brand proliferation.",
    "size": "$900 Billion+",
    "cagr": "~10% CAGR",
    "players": [
      "Reliance Retail",
      "D-Mart",
      "Future Group",
      "Tata Retail",
      "Shoppers Stop"
    ],
    "forces": {
      "newEntrants": "High",
      "buyerPower": "High",
      "supplierPower": "Medium",
      "substitutes": "High",
      "rivalry": "High"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Agricultural Produce, Packaging Materials, Oils, Fibers & Fragrance Chemicals",
      "operations": "Blending, High-Speed Bottling/Packaging, Quality Assurance, Batch Processing",
      "distribution": "Kirana Store Distribution Network, Modern Trade Supermarkets, Quick-Commerce Dark Stores",
      "endMarkets": "Household Consumers across Tier 1, Tier 2 & Rural Indian Markets",
      "marginDriver": "Premium Brand Products, Direct-to-Consumer (D2C) Margins & Supply Chain Scale",
      "bottleneck": "Raw Material Price Volatility (Palm Oil/Cotton) & Hyperlocal Logistics Costs"
    },
    "regulatoryTimeline": [
      {
        "year": "2017",
        "title": "GST Implementation",
        "detail": "Unified national tax regime eliminating interstate logistics bottlenecks"
      },
      {
        "year": "2020",
        "title": "Atmanirbhar Bharat Push",
        "detail": "Import substitution & localized supply chain mandates"
      },
      {
        "year": "2022",
        "title": "PLI Scheme Expansion",
        "detail": "Sectoral manufacturing incentives for high-value exports"
      },
      {
        "year": "2024+",
        "title": "ESG & Sustainability Norms",
        "detail": "Mandatory BRSR disclosures & green transition targets"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Per Capita Consumption / Market Spend ($)",
      "labels": [
        "India",
        "China",
        "Brazil",
        "USA",
        "Global Avg"
      ],
      "values": [
        42,
        145,
        95,
        310,
        120
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "Raw Materials",
        "Employee Cost",
        "Marketing & Dist",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        52,
        14,
        14,
        20,
        5,
        15
      ]
    },
    "workingCapital": {
      "inventoryDays": 36,
      "receivableDays": 28,
      "payableDays": 42,
      "cashConversionCycle": 22
    },
    "creditProfile": {
      "netDebtToEbitda": "1.4x",
      "creditRating": "AA / Stable",
      "costOfDebt": "7.8%",
      "liquidityBuffer": "Healthy Cash Conversion & Reserves"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        108,
        120,
        130,
        142,
        158
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+29.5%",
      "return3Yr": "+72.0%",
      "volatilityBeta": "1.10x"
    },
    "customerSegmentation": {
      "labels": [
        "B2C Urban Consumers",
        "B2C Rural Households",
        "B2B Enterprise Clients"
      ],
      "values": [
        45,
        35,
        20
      ],
      "incomeCohort": "Tier-1 Metros (45%), Tier-2/3 Cities (35%), Rural Markets (20%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        112,
        126,
        142,
        160
      ],
      "actualDemand": [
        86,
        98,
        114,
        130,
        150
      ],
      "utilizationRate": "82.5% Factory Utilization"
    },
    "swot": {
      "strengths": [
        "Massive domestic demographic dividend & rising disposable income",
        "Established distribution networks spanning urban & rural retail channels"
      ],
      "weaknesses": [
        "Sensitivity to raw material price volatility (agricultural/chemical inputs)",
        "Margin pressure in unorganized traditional trade segments"
      ],
      "opportunities": [
        "Omnichannel digital commerce expansion & premium product adoption",
        "Government PLI schemes driving export manufacturing competitiveness"
      ],
      "threats": [
        "Hyperlocal quick-commerce disruption altering brand loyalty",
        "Global supply chain disruptions & freight rate inflation"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "Brand Portfolio Acquisition",
        "value": "$420M",
        "buyer": "Consumer Conglomerate A"
      },
      {
        "date": "Q4 2023",
        "company": "D2C Strategic Stake Buyout",
        "value": "$190M",
        "buyer": "Private Equity Growth Fund"
      },
      {
        "date": "Q1 2024",
        "company": "Manufacturing Asset Deal",
        "value": "$350M",
        "buyer": "Global Industrial Group"
      }
    ],
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "Medium"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the total addressable market (TAM) for premium D2C products in India.",
      "Profitability Case: How can a consumer company optimize trade discounts vs direct channel margins?",
      "M&A Evaluation: What metrics would you assess when acquiring an online-first D2C brand?",
      "Supply Chain: Calculate the cost trade-off between centralized warehousing vs dark stores."
    ],
    "glossary": [
      {
        "term": "D2C",
        "definition": "Direct-to-Consumer channel bypassing traditional distributors."
      },
      {
        "term": "SKU",
        "definition": "Stock Keeping Unit — Individual distinct product item identifier."
      },
      {
        "term": "TAM",
        "definition": "Total Addressable Market — Overall revenue opportunity for a product."
      },
      {
        "term": "LTV/CAC",
        "definition": "Ratio of Customer Lifetime Value to Customer Acquisition Cost."
      }
    ]
  },
  {
    "id": "semiconductors",
    "name": "Semiconductors",
    "sector": "Technology",
    "description": "India is positioning itself as a global semiconductor hub with the India Semiconductor Mission. Major fabs are being set up and chip design is already a strong competency.",
    "size": "$100 Billion target by 2030",
    "cagr": "~25% CAGR",
    "players": [
      "Micron India",
      "Tata Electronics",
      "CG Power",
      "Intel India",
      "Qualcomm India"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "Medium",
      "supplierPower": "High",
      "substitutes": "Low",
      "rivalry": "Medium"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Cloud Server Infrastructure (AWS/GCP), Silicon Wafers, Engineering Talent",
      "operations": "Software Development, Algorithmic Training, QA Testing, API Integration",
      "distribution": "SaaS Web Portals, Mobile App Stores (Google/Apple), Enterprise System Integrators",
      "endMarkets": "Global Fortune 500 Enterprises, SMEs, Mobile Consumers & Gaming Enthusiasts",
      "marginDriver": "Recurring Software Licenses (ARR), High Gross Margin Code IP",
      "bottleneck": "High Senior Tech Talent Attrition & Specialized Hardware Availability"
    },
    "regulatoryTimeline": [
      {
        "year": "2020",
        "title": "OSP Liberalization",
        "detail": "Simplified IT/ITeS remote working & telecom regulations"
      },
      {
        "year": "2021",
        "title": "Semiconductor Mission",
        "detail": "76,000 Cr PLI for silicon fab & chip packaging units"
      },
      {
        "year": "2023",
        "title": "DPDP Act Enactment",
        "detail": "Digital Personal Data Protection framework compliance"
      },
      {
        "year": "2024+",
        "title": "IndiaAI Mission",
        "detail": "₹10,372 Cr allocated for GPU supercomputing clusters"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "IT & Software Export Market Share (%)",
      "labels": [
        "India",
        "USA",
        "Ireland",
        "China",
        "Global Avg"
      ],
      "values": [
        56,
        18,
        9,
        7,
        10
      ]
    },
    "costStructure": {
      "labels": [
        "Total Revenue",
        "Employee Cost",
        "Subcontracting",
        "Facility & Cloud",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        56,
        12,
        8,
        24,
        4,
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
      "netDebtToEbitda": "0.1x (Net Cash Positive)",
      "creditRating": "AAA / Stable",
      "costOfDebt": "6.2%",
      "liquidityBuffer": "$8.5 Billion Net Cash"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        104,
        110,
        116,
        122,
        134
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+18.2%",
      "return3Yr": "+46.5%",
      "volatilityBeta": "1.02x (Defensive Growth)"
    },
    "customerSegmentation": {
      "labels": [
        "BFSI (Banking & Finance)",
        "Retail & Consumer",
        "Healthcare & High-Tech"
      ],
      "values": [
        40,
        32,
        28
      ],
      "incomeCohort": "North America (55%), Europe (30%), Rest of World (15%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        115,
        132,
        150,
        172
      ],
      "actualDemand": [
        96,
        112,
        128,
        146,
        168
      ],
      "utilizationRate": "84.5% Employee Utilization"
    },
    "swot": {
      "strengths": [
        "Unrivaled scale of 5M+ English-speaking engineering talent",
        "High recurring revenue share with Fortune 500 enterprise clients"
      ],
      "weaknesses": [
        "Exposure to US/Europe enterprise IT budget cuts",
        "High senior tech talent attrition during tech expansion cycles"
      ],
      "opportunities": [
        "Generative AI migration, cloud transformation & cyber defense",
        "India Semiconductor Mission fab & chip design incentives"
      ],
      "threats": [
        "Automated AI code generation compressing billable hours",
        "Protectionist visa policies & currency volatility"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q1 2023",
        "company": "Infosys InSemi Silicon Acquisition",
        "value": "$340M",
        "buyer": "Infosys Tech"
      },
      {
        "date": "Q3 2023",
        "company": "Freshworks SaaS Buyback",
        "value": "$500M",
        "buyer": "Public Shareholder Buyback"
      },
      {
        "date": "Q1 2024",
        "company": "GenAI Enterprise Startup Deal",
        "value": "$180M",
        "buyer": "Tech Mahindra VC"
      }
    ],
    "techRadar": {
      "aiIntegration": "High",
      "roboticsAutomation": "High",
      "d2cOmnichannel": "High",
      "platformEcosystem": "High"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the revenue impact of GenAI adoption on Indian IT services by 2028.",
      "Profitability Case: How does a SaaS company optimize Customer Acquisition Cost (CAC) vs LTV?",
      "M&A Due Diligence: Evaluate an acquisition target in cloud-native application modernization.",
      "Operational Metric: Explain how Employee Attrition & Utilization Rate drive operating margins."
    ],
    "glossary": [
      {
        "term": "TCV",
        "definition": "Total Contract Value — Total revenue from signed enterprise deals."
      },
      {
        "term": "ARR",
        "definition": "Annual Recurring Revenue — Key SaaS subscription metric."
      },
      {
        "term": "Utilization",
        "definition": "Percentage of billable employee time assigned to client projects."
      },
      {
        "term": "FTE",
        "definition": "Full-Time Equivalent — Standard measure of project staffing."
      }
    ]
  },
  {
    "id": "telecom",
    "name": "Telecom",
    "sector": "Technology",
    "description": "India's telecom sector is consolidating around three major players. 5G rollout is accelerating, with India having one of the fastest 5G deployment globally. Data consumption is skyrocketing.",
    "size": "$28 Billion market",
    "cagr": "~7% CAGR",
    "players": [
      "Reliance Jio",
      "Airtel",
      "Vi",
      "BSNL",
      "Indus Towers"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "High",
      "supplierPower": "Medium",
      "substitutes": "Medium",
      "rivalry": "High"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Cloud Server Infrastructure (AWS/GCP), Silicon Wafers, Engineering Talent",
      "operations": "Software Development, Algorithmic Training, QA Testing, API Integration",
      "distribution": "SaaS Web Portals, Mobile App Stores (Google/Apple), Enterprise System Integrators",
      "endMarkets": "Global Fortune 500 Enterprises, SMEs, Mobile Consumers & Gaming Enthusiasts",
      "marginDriver": "Recurring Software Licenses (ARR), High Gross Margin Code IP",
      "bottleneck": "High Senior Tech Talent Attrition & Specialized Hardware Availability"
    },
    "regulatoryTimeline": [
      {
        "year": "2020",
        "title": "OSP Liberalization",
        "detail": "Simplified IT/ITeS remote working & telecom regulations"
      },
      {
        "year": "2021",
        "title": "Semiconductor Mission",
        "detail": "76,000 Cr PLI for silicon fab & chip packaging units"
      },
      {
        "year": "2023",
        "title": "DPDP Act Enactment",
        "detail": "Digital Personal Data Protection framework compliance"
      },
      {
        "year": "2024+",
        "title": "IndiaAI Mission",
        "detail": "₹10,372 Cr allocated for GPU supercomputing clusters"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "IT & Software Export Market Share (%)",
      "labels": [
        "India",
        "USA",
        "Ireland",
        "China",
        "Global Avg"
      ],
      "values": [
        56,
        18,
        9,
        7,
        10
      ]
    },
    "costStructure": {
      "labels": [
        "Total Revenue",
        "Employee Cost",
        "Subcontracting",
        "Facility & Cloud",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        56,
        12,
        8,
        24,
        4,
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
      "netDebtToEbitda": "0.1x (Net Cash Positive)",
      "creditRating": "AAA / Stable",
      "costOfDebt": "6.2%",
      "liquidityBuffer": "$8.5 Billion Net Cash"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        104,
        110,
        116,
        122,
        134
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+18.2%",
      "return3Yr": "+46.5%",
      "volatilityBeta": "1.02x (Defensive Growth)"
    },
    "customerSegmentation": {
      "labels": [
        "BFSI (Banking & Finance)",
        "Retail & Consumer",
        "Healthcare & High-Tech"
      ],
      "values": [
        40,
        32,
        28
      ],
      "incomeCohort": "North America (55%), Europe (30%), Rest of World (15%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        115,
        132,
        150,
        172
      ],
      "actualDemand": [
        96,
        112,
        128,
        146,
        168
      ],
      "utilizationRate": "84.5% Employee Utilization"
    },
    "swot": {
      "strengths": [
        "Unrivaled scale of 5M+ English-speaking engineering talent",
        "High recurring revenue share with Fortune 500 enterprise clients"
      ],
      "weaknesses": [
        "Exposure to US/Europe enterprise IT budget cuts",
        "High senior tech talent attrition during tech expansion cycles"
      ],
      "opportunities": [
        "Generative AI migration, cloud transformation & cyber defense",
        "India Semiconductor Mission fab & chip design incentives"
      ],
      "threats": [
        "Automated AI code generation compressing billable hours",
        "Protectionist visa policies & currency volatility"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q1 2023",
        "company": "Infosys InSemi Silicon Acquisition",
        "value": "$340M",
        "buyer": "Infosys Tech"
      },
      {
        "date": "Q3 2023",
        "company": "Freshworks SaaS Buyback",
        "value": "$500M",
        "buyer": "Public Shareholder Buyback"
      },
      {
        "date": "Q1 2024",
        "company": "GenAI Enterprise Startup Deal",
        "value": "$180M",
        "buyer": "Tech Mahindra VC"
      }
    ],
    "techRadar": {
      "aiIntegration": "High",
      "roboticsAutomation": "High",
      "d2cOmnichannel": "High",
      "platformEcosystem": "High"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the revenue impact of GenAI adoption on Indian IT services by 2028.",
      "Profitability Case: How does a SaaS company optimize Customer Acquisition Cost (CAC) vs LTV?",
      "M&A Due Diligence: Evaluate an acquisition target in cloud-native application modernization.",
      "Operational Metric: Explain how Employee Attrition & Utilization Rate drive operating margins."
    ],
    "glossary": [
      {
        "term": "TCV",
        "definition": "Total Contract Value — Total revenue from signed enterprise deals."
      },
      {
        "term": "ARR",
        "definition": "Annual Recurring Revenue — Key SaaS subscription metric."
      },
      {
        "term": "Utilization",
        "definition": "Percentage of billable employee time assigned to client projects."
      },
      {
        "term": "FTE",
        "definition": "Full-Time Equivalent — Standard measure of project staffing."
      }
    ]
  },
  {
    "id": "textiles",
    "name": "Textiles & Apparel",
    "sector": "Manufacturing",
    "description": "India's textiles sector is one of the oldest and largest. With PLI schemes boosting technical textiles and China+1 strategies benefiting Indian garment exporters, the sector is re-energizing.",
    "size": "$225 Billion market",
    "cagr": "~8% CAGR",
    "players": [
      "Arvind Mills",
      "Raymond",
      "Welspun India",
      "Trident Group",
      "Vardhman Textiles"
    ],
    "forces": {
      "newEntrants": "Medium",
      "buyerPower": "High",
      "supplierPower": "Low",
      "substitutes": "Medium",
      "rivalry": "High"
    },
    "trend": "stable",
    "outlook": "Stable",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Agricultural Produce, Packaging Materials, Oils, Fibers & Fragrance Chemicals",
      "operations": "Blending, High-Speed Bottling/Packaging, Quality Assurance, Batch Processing",
      "distribution": "Kirana Store Distribution Network, Modern Trade Supermarkets, Quick-Commerce Dark Stores",
      "endMarkets": "Household Consumers across Tier 1, Tier 2 & Rural Indian Markets",
      "marginDriver": "Premium Brand Products, Direct-to-Consumer (D2C) Margins & Supply Chain Scale",
      "bottleneck": "Raw Material Price Volatility (Palm Oil/Cotton) & Hyperlocal Logistics Costs"
    },
    "regulatoryTimeline": [
      {
        "year": "2017",
        "title": "GST Implementation",
        "detail": "Unified national tax regime eliminating interstate logistics bottlenecks"
      },
      {
        "year": "2020",
        "title": "Atmanirbhar Bharat Push",
        "detail": "Import substitution & localized supply chain mandates"
      },
      {
        "year": "2022",
        "title": "PLI Scheme Expansion",
        "detail": "Sectoral manufacturing incentives for high-value exports"
      },
      {
        "year": "2024+",
        "title": "ESG & Sustainability Norms",
        "detail": "Mandatory BRSR disclosures & green transition targets"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Per Capita Consumption / Market Spend ($)",
      "labels": [
        "India",
        "China",
        "Brazil",
        "USA",
        "Global Avg"
      ],
      "values": [
        42,
        145,
        95,
        310,
        120
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "Raw Materials",
        "Employee Cost",
        "Marketing & Dist",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        52,
        14,
        14,
        20,
        5,
        15
      ]
    },
    "workingCapital": {
      "inventoryDays": 36,
      "receivableDays": 28,
      "payableDays": 42,
      "cashConversionCycle": 22
    },
    "creditProfile": {
      "netDebtToEbitda": "1.4x",
      "creditRating": "AA / Stable",
      "costOfDebt": "7.8%",
      "liquidityBuffer": "Healthy Cash Conversion & Reserves"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        108,
        120,
        130,
        142,
        158
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+29.5%",
      "return3Yr": "+72.0%",
      "volatilityBeta": "1.10x"
    },
    "customerSegmentation": {
      "labels": [
        "B2C Urban Consumers",
        "B2C Rural Households",
        "B2B Enterprise Clients"
      ],
      "values": [
        45,
        35,
        20
      ],
      "incomeCohort": "Tier-1 Metros (45%), Tier-2/3 Cities (35%), Rural Markets (20%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        112,
        126,
        142,
        160
      ],
      "actualDemand": [
        86,
        98,
        114,
        130,
        150
      ],
      "utilizationRate": "82.5% Factory Utilization"
    },
    "swot": {
      "strengths": [
        "Massive domestic demographic dividend & rising disposable income",
        "Established distribution networks spanning urban & rural retail channels"
      ],
      "weaknesses": [
        "Sensitivity to raw material price volatility (agricultural/chemical inputs)",
        "Margin pressure in unorganized traditional trade segments"
      ],
      "opportunities": [
        "Omnichannel digital commerce expansion & premium product adoption",
        "Government PLI schemes driving export manufacturing competitiveness"
      ],
      "threats": [
        "Hyperlocal quick-commerce disruption altering brand loyalty",
        "Global supply chain disruptions & freight rate inflation"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "Brand Portfolio Acquisition",
        "value": "$420M",
        "buyer": "Consumer Conglomerate A"
      },
      {
        "date": "Q4 2023",
        "company": "D2C Strategic Stake Buyout",
        "value": "$190M",
        "buyer": "Private Equity Growth Fund"
      },
      {
        "date": "Q1 2024",
        "company": "Manufacturing Asset Deal",
        "value": "$350M",
        "buyer": "Global Industrial Group"
      }
    ],
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "Medium"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the total addressable market (TAM) for premium D2C products in India.",
      "Profitability Case: How can a consumer company optimize trade discounts vs direct channel margins?",
      "M&A Evaluation: What metrics would you assess when acquiring an online-first D2C brand?",
      "Supply Chain: Calculate the cost trade-off between centralized warehousing vs dark stores."
    ],
    "glossary": [
      {
        "term": "D2C",
        "definition": "Direct-to-Consumer channel bypassing traditional distributors."
      },
      {
        "term": "SKU",
        "definition": "Stock Keeping Unit — Individual distinct product item identifier."
      },
      {
        "term": "TAM",
        "definition": "Total Addressable Market — Overall revenue opportunity for a product."
      },
      {
        "term": "LTV/CAC",
        "definition": "Ratio of Customer Lifetime Value to Customer Acquisition Cost."
      }
    ]
  },
  {
    "id": "logistics",
    "name": "Logistics & Supply Chain",
    "sector": "Transportation & Logistics",
    "description": "India's logistics sector is being transformed by GST rationalization, dedicated freight corridors, and multimodal integration. E-commerce logistics is the fastest-growing segment.",
    "size": "$317 Billion market",
    "cagr": "~10% CAGR",
    "players": [
      "Blue Dart",
      "Delhivery",
      "Ecom Express",
      "Container Corp",
      "Gateway Distriparks"
    ],
    "forces": {
      "newEntrants": "Medium",
      "buyerPower": "High",
      "supplierPower": "Medium",
      "substitutes": "Medium",
      "rivalry": "High"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Aviation Turbine Fuel (ATF) / Diesel, Aircraft Fleets / Trucks, Warehouses",
      "operations": "Route Scheduling, Fleet Maintenance, Hub Sorting, Cold Chain Storage",
      "distribution": "Travel Portals (OTAs), Air Cargo Terminal Gates, Express Delivery Hubs",
      "endMarkets": "Domestic & Global Travelers, E-commerce Platforms, Export Freight Clients",
      "marginDriver": "Fleet Capacity Utilization (Passenger Load Factor) & Dynamic Pricing",
      "bottleneck": "Fuel Price Volatility & Airport/Port Infrastructure Bottlenecks"
    },
    "regulatoryTimeline": [
      {
        "year": "2017",
        "title": "GST Implementation",
        "detail": "Unified national tax regime eliminating interstate logistics bottlenecks"
      },
      {
        "year": "2020",
        "title": "Atmanirbhar Bharat Push",
        "detail": "Import substitution & localized supply chain mandates"
      },
      {
        "year": "2022",
        "title": "PLI Scheme Expansion",
        "detail": "Sectoral manufacturing incentives for high-value exports"
      },
      {
        "year": "2024+",
        "title": "ESG & Sustainability Norms",
        "detail": "Mandatory BRSR disclosures & green transition targets"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Per Capita Consumption / Market Spend ($)",
      "labels": [
        "India",
        "China",
        "Brazil",
        "USA",
        "Global Avg"
      ],
      "values": [
        42,
        145,
        95,
        310,
        120
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "Raw Materials",
        "Employee Cost",
        "Marketing & Dist",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        52,
        14,
        14,
        20,
        5,
        15
      ]
    },
    "workingCapital": {
      "inventoryDays": 36,
      "receivableDays": 28,
      "payableDays": 42,
      "cashConversionCycle": 22
    },
    "creditProfile": {
      "netDebtToEbitda": "1.4x",
      "creditRating": "AA / Stable",
      "costOfDebt": "7.8%",
      "liquidityBuffer": "Healthy Cash Conversion & Reserves"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        108,
        120,
        130,
        142,
        158
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+29.5%",
      "return3Yr": "+72.0%",
      "volatilityBeta": "1.10x"
    },
    "customerSegmentation": {
      "labels": [
        "B2C Urban Consumers",
        "B2C Rural Households",
        "B2B Enterprise Clients"
      ],
      "values": [
        45,
        35,
        20
      ],
      "incomeCohort": "Tier-1 Metros (45%), Tier-2/3 Cities (35%), Rural Markets (20%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        112,
        126,
        142,
        160
      ],
      "actualDemand": [
        86,
        98,
        114,
        130,
        150
      ],
      "utilizationRate": "82.5% Factory Utilization"
    },
    "swot": {
      "strengths": [
        "Massive domestic demographic dividend & rising disposable income",
        "Established distribution networks spanning urban & rural retail channels"
      ],
      "weaknesses": [
        "Sensitivity to raw material price volatility (agricultural/chemical inputs)",
        "Margin pressure in unorganized traditional trade segments"
      ],
      "opportunities": [
        "Omnichannel digital commerce expansion & premium product adoption",
        "Government PLI schemes driving export manufacturing competitiveness"
      ],
      "threats": [
        "Hyperlocal quick-commerce disruption altering brand loyalty",
        "Global supply chain disruptions & freight rate inflation"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "Brand Portfolio Acquisition",
        "value": "$420M",
        "buyer": "Consumer Conglomerate A"
      },
      {
        "date": "Q4 2023",
        "company": "D2C Strategic Stake Buyout",
        "value": "$190M",
        "buyer": "Private Equity Growth Fund"
      },
      {
        "date": "Q1 2024",
        "company": "Manufacturing Asset Deal",
        "value": "$350M",
        "buyer": "Global Industrial Group"
      }
    ],
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "Medium"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the total addressable market (TAM) for premium D2C products in India.",
      "Profitability Case: How can a consumer company optimize trade discounts vs direct channel margins?",
      "M&A Evaluation: What metrics would you assess when acquiring an online-first D2C brand?",
      "Supply Chain: Calculate the cost trade-off between centralized warehousing vs dark stores."
    ],
    "glossary": [
      {
        "term": "D2C",
        "definition": "Direct-to-Consumer channel bypassing traditional distributors."
      },
      {
        "term": "SKU",
        "definition": "Stock Keeping Unit — Individual distinct product item identifier."
      },
      {
        "term": "TAM",
        "definition": "Total Addressable Market — Overall revenue opportunity for a product."
      },
      {
        "term": "LTV/CAC",
        "definition": "Ratio of Customer Lifetime Value to Customer Acquisition Cost."
      }
    ]
  },
  {
    "id": "agriculture",
    "name": "Agriculture & Agritech",
    "sector": "Agriculture",
    "description": "Agriculture remains the backbone of the Indian economy, employing ~45% of the workforce. Agritech is transforming farm productivity, supply chains, and farmer incomes.",
    "size": "$600 Billion+ agricultural economy",
    "cagr": "~3% CAGR (traditional), ~25% (agritech)",
    "players": [
      "ITC Agri",
      "Ninjacart",
      "DeHaat",
      "Waycool",
      "AgroStar"
    ],
    "forces": {
      "newEntrants": "High",
      "buyerPower": "High",
      "supplierPower": "Low",
      "substitutes": "Low",
      "rivalry": "Medium"
    },
    "trend": "up",
    "outlook": "Stable",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Core Raw Materials, Skilled Workforce, Primary Energy & Specialized Capital Equipment",
      "operations": "Value-Add Processing, Operations Engineering, Quality Assurance, Packaging",
      "distribution": "Direct Sales Outlets, Authorized Distributors, B2B Channels & E-Commerce",
      "endMarkets": "Enterprise Buyers, Commercial Outlets & Individual Domestic Consumers",
      "marginDriver": "Product Differentiation, Scale Efficiency & Channel Partner Optimization",
      "bottleneck": "Supply Chain Disruption Risks & Regulatory Compliance Requirements"
    },
    "regulatoryTimeline": [
      {
        "year": "2017",
        "title": "GST Implementation",
        "detail": "Unified national tax regime eliminating interstate logistics bottlenecks"
      },
      {
        "year": "2020",
        "title": "Atmanirbhar Bharat Push",
        "detail": "Import substitution & localized supply chain mandates"
      },
      {
        "year": "2022",
        "title": "PLI Scheme Expansion",
        "detail": "Sectoral manufacturing incentives for high-value exports"
      },
      {
        "year": "2024+",
        "title": "ESG & Sustainability Norms",
        "detail": "Mandatory BRSR disclosures & green transition targets"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Per Capita Consumption / Market Spend ($)",
      "labels": [
        "India",
        "China",
        "Brazil",
        "USA",
        "Global Avg"
      ],
      "values": [
        42,
        145,
        95,
        310,
        120
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "Raw Materials",
        "Employee Cost",
        "Marketing & Dist",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        52,
        14,
        14,
        20,
        5,
        15
      ]
    },
    "workingCapital": {
      "inventoryDays": 36,
      "receivableDays": 28,
      "payableDays": 42,
      "cashConversionCycle": 22
    },
    "creditProfile": {
      "netDebtToEbitda": "1.4x",
      "creditRating": "AA / Stable",
      "costOfDebt": "7.8%",
      "liquidityBuffer": "Healthy Cash Conversion & Reserves"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        108,
        120,
        130,
        142,
        158
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+29.5%",
      "return3Yr": "+72.0%",
      "volatilityBeta": "1.10x"
    },
    "customerSegmentation": {
      "labels": [
        "B2C Urban Consumers",
        "B2C Rural Households",
        "B2B Enterprise Clients"
      ],
      "values": [
        45,
        35,
        20
      ],
      "incomeCohort": "Tier-1 Metros (45%), Tier-2/3 Cities (35%), Rural Markets (20%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        112,
        126,
        142,
        160
      ],
      "actualDemand": [
        86,
        98,
        114,
        130,
        150
      ],
      "utilizationRate": "82.5% Factory Utilization"
    },
    "swot": {
      "strengths": [
        "Massive domestic demographic dividend & rising disposable income",
        "Established distribution networks spanning urban & rural retail channels"
      ],
      "weaknesses": [
        "Sensitivity to raw material price volatility (agricultural/chemical inputs)",
        "Margin pressure in unorganized traditional trade segments"
      ],
      "opportunities": [
        "Omnichannel digital commerce expansion & premium product adoption",
        "Government PLI schemes driving export manufacturing competitiveness"
      ],
      "threats": [
        "Hyperlocal quick-commerce disruption altering brand loyalty",
        "Global supply chain disruptions & freight rate inflation"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "Brand Portfolio Acquisition",
        "value": "$420M",
        "buyer": "Consumer Conglomerate A"
      },
      {
        "date": "Q4 2023",
        "company": "D2C Strategic Stake Buyout",
        "value": "$190M",
        "buyer": "Private Equity Growth Fund"
      },
      {
        "date": "Q1 2024",
        "company": "Manufacturing Asset Deal",
        "value": "$350M",
        "buyer": "Global Industrial Group"
      }
    ],
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "Medium"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the total addressable market (TAM) for premium D2C products in India.",
      "Profitability Case: How can a consumer company optimize trade discounts vs direct channel margins?",
      "M&A Evaluation: What metrics would you assess when acquiring an online-first D2C brand?",
      "Supply Chain: Calculate the cost trade-off between centralized warehousing vs dark stores."
    ],
    "glossary": [
      {
        "term": "D2C",
        "definition": "Direct-to-Consumer channel bypassing traditional distributors."
      },
      {
        "term": "SKU",
        "definition": "Stock Keeping Unit — Individual distinct product item identifier."
      },
      {
        "term": "TAM",
        "definition": "Total Addressable Market — Overall revenue opportunity for a product."
      },
      {
        "term": "LTV/CAC",
        "definition": "Ratio of Customer Lifetime Value to Customer Acquisition Cost."
      }
    ]
  },
  {
    "id": "ev",
    "name": "Electric Vehicles",
    "sector": "Automotive",
    "description": "India's EV revolution is accelerating with policy push, falling battery costs, and rising fuel prices. Two-wheelers lead adoption, followed by EVs for fleets and commercial segments.",
    "size": "$100 Billion opportunity by 2030",
    "cagr": "~40%+ CAGR",
    "players": [
      "Tata Motors EV",
      "Ola Electric",
      "Ather Energy",
      "TVS iQube",
      "Hero Electric"
    ],
    "forces": {
      "newEntrants": "High",
      "buyerPower": "Medium",
      "supplierPower": "High",
      "substitutes": "Medium",
      "rivalry": "High"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Steel, Aluminum, Battery Cells, Microcontrollers & Rubber Component Tier-1s",
      "operations": "Vehicle Stamping, Engine/Motor Assembly, Robotic Painting, Quality Inspection",
      "distribution": "Authorized Dealer Networks, Franchise Outlets, Direct Fleets & Export Docks",
      "endMarkets": "Urban & Rural Commuters, Commercial Logistics Fleets, Ride-Hailing Platforms",
      "marginDriver": "High-margin SUVs, After-sales Spare Parts & Battery Software Upgrades",
      "bottleneck": "Semiconductor Chip Supply & Lithium-Ion Cell Import Dependencies"
    },
    "regulatoryTimeline": [
      {
        "year": "2019",
        "title": "FAME II Scheme",
        "detail": "₹10,000 Cr subsidies for EV two-wheelers & public transport"
      },
      {
        "year": "2020",
        "title": "BS-VI Emission Norms",
        "detail": "Mandatory transition to ultra-low sulfur emission standards"
      },
      {
        "year": "2022",
        "title": "Auto PLI Incentive",
        "detail": "₹25,938 Cr budget for advanced automotive technologies"
      },
      {
        "year": "2024+",
        "title": "New EV Policy & FAME III",
        "detail": "Concessional import duties for localized EV manufacturing"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Car Ownership per 1,000 People",
      "labels": [
        "India",
        "China",
        "Japan",
        "USA",
        "Global Avg"
      ],
      "values": [
        34,
        210,
        620,
        840,
        180
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "Raw Materials",
        "Employee Cost",
        "R&D & Royalty",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        68,
        8,
        5,
        13,
        4,
        8
      ]
    },
    "workingCapital": {
      "inventoryDays": 38,
      "receivableDays": 22,
      "payableDays": 54,
      "cashConversionCycle": 6
    },
    "creditProfile": {
      "netDebtToEbitda": "0.9x",
      "creditRating": "AA+ / Positive",
      "costOfDebt": "7.5%",
      "liquidityBuffer": "₹14,500 Cr Cash Reserves"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        114,
        132,
        145,
        162,
        184
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+42.5%",
      "return3Yr": "+112.0%",
      "volatilityBeta": "1.24x (High Growth)"
    },
    "customerSegmentation": {
      "labels": [
        "Passenger SUV/Cars",
        "Two-Wheelers",
        "Commercial & Logistics Fleets"
      ],
      "values": [
        42,
        45,
        13
      ],
      "incomeCohort": "Middle-Income Households (55%), High-Net-Worth (25%), Rural Commuters (20%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        110,
        125,
        140,
        160
      ],
      "actualDemand": [
        84,
        96,
        112,
        128,
        148
      ],
      "utilizationRate": "81.2% Factory Capacity"
    },
    "swot": {
      "strengths": [
        "Rapid premiumization trend towards high-margin SUVs",
        "Strong domestic Tier-1 component manufacturing ecosystem"
      ],
      "weaknesses": [
        "Heavy import dependency on lithium-ion cells & magnet motors",
        "Cyclical sensitivity to monsoon & rural disposable income"
      ],
      "opportunities": [
        "Export hub for EV two-wheelers & compact SUVs to ASEAN & Africa",
        "Government PLI incentives driving localization of EV drivetrains"
      ],
      "threats": [
        "Global semiconductor supply disruptions & raw material inflation",
        "Aggressive price cuts by international EV entrants"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q1 2023",
        "company": "TPG Investment in Tata Passenger EV",
        "value": "$1.0B",
        "buyer": "TPG Rise Climate"
      },
      {
        "date": "Q3 2023",
        "company": "Ather Energy Sovereign Funding",
        "value": "$128M",
        "buyer": "NIIF & Hero MotoCorp"
      },
      {
        "date": "Q1 2024",
        "company": "Commercial Fleet EV Acquisition",
        "value": "$210M",
        "buyer": "Logistics Infra Fund"
      }
    ],
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "High",
      "d2cOmnichannel": "Medium",
      "platformEcosystem": "High"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the annual volume of electric two-wheelers sold in India in 2026.",
      "Profitability Case: How can an OEM offset raw material price inflation through localization?",
      "Strategic Shift: Evaluate whether a traditional ICE automaker should spin off its EV division.",
      "Supply Chain Guesstimate: Calculate the required battery gigafactory capacity for 1 million EVs."
    ],
    "glossary": [
      {
        "term": "OEM",
        "definition": "Original Equipment Manufacturer — Company producing final vehicles."
      },
      {
        "term": "FAME",
        "definition": "Faster Adoption and Manufacturing of Hybrid & Electric Vehicles scheme."
      },
      {
        "term": "BS-VI",
        "definition": "Bharat Stage VI — Stringent national vehicle emission control standard."
      },
      {
        "term": "BMS",
        "definition": "Battery Management System — Electronic unit regulating lithium cell packs."
      }
    ]
  },
  {
    "id": "gaming",
    "name": "Gaming",
    "sector": "Technology",
    "description": "India has one of the fastest-growing mobile gaming markets globally. With 500 Million+ gamers and rising, real-money gaming, e-sports, and casual gaming are all expanding.",
    "size": "$5 Billion market",
    "cagr": "~30% CAGR",
    "players": [
      "Dream11",
      "Mobile Premier League",
      "Games24x7",
      "Nazara Technologies",
      "Winzo"
    ],
    "forces": {
      "newEntrants": "High",
      "buyerPower": "High",
      "supplierPower": "Low",
      "substitutes": "High",
      "rivalry": "High"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Cloud Server Infrastructure (AWS/GCP), Silicon Wafers, Engineering Talent",
      "operations": "Software Development, Algorithmic Training, QA Testing, API Integration",
      "distribution": "SaaS Web Portals, Mobile App Stores (Google/Apple), Enterprise System Integrators",
      "endMarkets": "Global Fortune 500 Enterprises, SMEs, Mobile Consumers & Gaming Enthusiasts",
      "marginDriver": "Recurring Software Licenses (ARR), High Gross Margin Code IP",
      "bottleneck": "High Senior Tech Talent Attrition & Specialized Hardware Availability"
    },
    "regulatoryTimeline": [
      {
        "year": "2020",
        "title": "OSP Liberalization",
        "detail": "Simplified IT/ITeS remote working & telecom regulations"
      },
      {
        "year": "2021",
        "title": "Semiconductor Mission",
        "detail": "76,000 Cr PLI for silicon fab & chip packaging units"
      },
      {
        "year": "2023",
        "title": "DPDP Act Enactment",
        "detail": "Digital Personal Data Protection framework compliance"
      },
      {
        "year": "2024+",
        "title": "IndiaAI Mission",
        "detail": "₹10,372 Cr allocated for GPU supercomputing clusters"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "IT & Software Export Market Share (%)",
      "labels": [
        "India",
        "USA",
        "Ireland",
        "China",
        "Global Avg"
      ],
      "values": [
        56,
        18,
        9,
        7,
        10
      ]
    },
    "costStructure": {
      "labels": [
        "Total Revenue",
        "Employee Cost",
        "Subcontracting",
        "Facility & Cloud",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        56,
        12,
        8,
        24,
        4,
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
      "netDebtToEbitda": "0.1x (Net Cash Positive)",
      "creditRating": "AAA / Stable",
      "costOfDebt": "6.2%",
      "liquidityBuffer": "$8.5 Billion Net Cash"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        104,
        110,
        116,
        122,
        134
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+18.2%",
      "return3Yr": "+46.5%",
      "volatilityBeta": "1.02x (Defensive Growth)"
    },
    "customerSegmentation": {
      "labels": [
        "BFSI (Banking & Finance)",
        "Retail & Consumer",
        "Healthcare & High-Tech"
      ],
      "values": [
        40,
        32,
        28
      ],
      "incomeCohort": "North America (55%), Europe (30%), Rest of World (15%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        115,
        132,
        150,
        172
      ],
      "actualDemand": [
        96,
        112,
        128,
        146,
        168
      ],
      "utilizationRate": "84.5% Employee Utilization"
    },
    "swot": {
      "strengths": [
        "Unrivaled scale of 5M+ English-speaking engineering talent",
        "High recurring revenue share with Fortune 500 enterprise clients"
      ],
      "weaknesses": [
        "Exposure to US/Europe enterprise IT budget cuts",
        "High senior tech talent attrition during tech expansion cycles"
      ],
      "opportunities": [
        "Generative AI migration, cloud transformation & cyber defense",
        "India Semiconductor Mission fab & chip design incentives"
      ],
      "threats": [
        "Automated AI code generation compressing billable hours",
        "Protectionist visa policies & currency volatility"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q1 2023",
        "company": "Infosys InSemi Silicon Acquisition",
        "value": "$340M",
        "buyer": "Infosys Tech"
      },
      {
        "date": "Q3 2023",
        "company": "Freshworks SaaS Buyback",
        "value": "$500M",
        "buyer": "Public Shareholder Buyback"
      },
      {
        "date": "Q1 2024",
        "company": "GenAI Enterprise Startup Deal",
        "value": "$180M",
        "buyer": "Tech Mahindra VC"
      }
    ],
    "techRadar": {
      "aiIntegration": "High",
      "roboticsAutomation": "High",
      "d2cOmnichannel": "High",
      "platformEcosystem": "High"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the revenue impact of GenAI adoption on Indian IT services by 2028.",
      "Profitability Case: How does a SaaS company optimize Customer Acquisition Cost (CAC) vs LTV?",
      "M&A Due Diligence: Evaluate an acquisition target in cloud-native application modernization.",
      "Operational Metric: Explain how Employee Attrition & Utilization Rate drive operating margins."
    ],
    "glossary": [
      {
        "term": "TCV",
        "definition": "Total Contract Value — Total revenue from signed enterprise deals."
      },
      {
        "term": "ARR",
        "definition": "Annual Recurring Revenue — Key SaaS subscription metric."
      },
      {
        "term": "Utilization",
        "definition": "Percentage of billable employee time assigned to client projects."
      },
      {
        "term": "FTE",
        "definition": "Full-Time Equivalent — Standard measure of project staffing."
      }
    ]
  },
  {
    "id": "cloud-saas",
    "name": "Cloud & SaaS",
    "sector": "Technology",
    "description": "India's cloud and SaaS market is booming, driven by digital transformation across SMEs and enterprises. Indian SaaS companies are gaining global traction with competitive pricing.",
    "size": "$26 Billion by 2026",
    "cagr": "~28% CAGR",
    "players": [
      "Freshworks",
      "Zoho",
      "Postman",
      "BrowserStack",
      "Chargebee"
    ],
    "forces": {
      "newEntrants": "High",
      "buyerPower": "High",
      "supplierPower": "Medium",
      "substitutes": "High",
      "rivalry": "High"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Cloud Server Infrastructure (AWS/GCP), Silicon Wafers, Engineering Talent",
      "operations": "Software Development, Algorithmic Training, QA Testing, API Integration",
      "distribution": "SaaS Web Portals, Mobile App Stores (Google/Apple), Enterprise System Integrators",
      "endMarkets": "Global Fortune 500 Enterprises, SMEs, Mobile Consumers & Gaming Enthusiasts",
      "marginDriver": "Recurring Software Licenses (ARR), High Gross Margin Code IP",
      "bottleneck": "High Senior Tech Talent Attrition & Specialized Hardware Availability"
    },
    "regulatoryTimeline": [
      {
        "year": "2020",
        "title": "OSP Liberalization",
        "detail": "Simplified IT/ITeS remote working & telecom regulations"
      },
      {
        "year": "2021",
        "title": "Semiconductor Mission",
        "detail": "76,000 Cr PLI for silicon fab & chip packaging units"
      },
      {
        "year": "2023",
        "title": "DPDP Act Enactment",
        "detail": "Digital Personal Data Protection framework compliance"
      },
      {
        "year": "2024+",
        "title": "IndiaAI Mission",
        "detail": "₹10,372 Cr allocated for GPU supercomputing clusters"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "IT & Software Export Market Share (%)",
      "labels": [
        "India",
        "USA",
        "Ireland",
        "China",
        "Global Avg"
      ],
      "values": [
        56,
        18,
        9,
        7,
        10
      ]
    },
    "costStructure": {
      "labels": [
        "Total Revenue",
        "Employee Cost",
        "Subcontracting",
        "Facility & Cloud",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        56,
        12,
        8,
        24,
        4,
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
      "netDebtToEbitda": "0.1x (Net Cash Positive)",
      "creditRating": "AAA / Stable",
      "costOfDebt": "6.2%",
      "liquidityBuffer": "$8.5 Billion Net Cash"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        104,
        110,
        116,
        122,
        134
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+18.2%",
      "return3Yr": "+46.5%",
      "volatilityBeta": "1.02x (Defensive Growth)"
    },
    "customerSegmentation": {
      "labels": [
        "BFSI (Banking & Finance)",
        "Retail & Consumer",
        "Healthcare & High-Tech"
      ],
      "values": [
        40,
        32,
        28
      ],
      "incomeCohort": "North America (55%), Europe (30%), Rest of World (15%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        115,
        132,
        150,
        172
      ],
      "actualDemand": [
        96,
        112,
        128,
        146,
        168
      ],
      "utilizationRate": "84.5% Employee Utilization"
    },
    "swot": {
      "strengths": [
        "Unrivaled scale of 5M+ English-speaking engineering talent",
        "High recurring revenue share with Fortune 500 enterprise clients"
      ],
      "weaknesses": [
        "Exposure to US/Europe enterprise IT budget cuts",
        "High senior tech talent attrition during tech expansion cycles"
      ],
      "opportunities": [
        "Generative AI migration, cloud transformation & cyber defense",
        "India Semiconductor Mission fab & chip design incentives"
      ],
      "threats": [
        "Automated AI code generation compressing billable hours",
        "Protectionist visa policies & currency volatility"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q1 2023",
        "company": "Infosys InSemi Silicon Acquisition",
        "value": "$340M",
        "buyer": "Infosys Tech"
      },
      {
        "date": "Q3 2023",
        "company": "Freshworks SaaS Buyback",
        "value": "$500M",
        "buyer": "Public Shareholder Buyback"
      },
      {
        "date": "Q1 2024",
        "company": "GenAI Enterprise Startup Deal",
        "value": "$180M",
        "buyer": "Tech Mahindra VC"
      }
    ],
    "techRadar": {
      "aiIntegration": "High",
      "roboticsAutomation": "High",
      "d2cOmnichannel": "High",
      "platformEcosystem": "High"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the revenue impact of GenAI adoption on Indian IT services by 2028.",
      "Profitability Case: How does a SaaS company optimize Customer Acquisition Cost (CAC) vs LTV?",
      "M&A Due Diligence: Evaluate an acquisition target in cloud-native application modernization.",
      "Operational Metric: Explain how Employee Attrition & Utilization Rate drive operating margins."
    ],
    "glossary": [
      {
        "term": "TCV",
        "definition": "Total Contract Value — Total revenue from signed enterprise deals."
      },
      {
        "term": "ARR",
        "definition": "Annual Recurring Revenue — Key SaaS subscription metric."
      },
      {
        "term": "Utilization",
        "definition": "Percentage of billable employee time assigned to client projects."
      },
      {
        "term": "FTE",
        "definition": "Full-Time Equivalent — Standard measure of project staffing."
      }
    ]
  },
  {
    "id": "space",
    "name": "Space & Deep Tech",
    "sector": "Government & Defense",
    "description": "With ISRO's success and liberalization of the Indian space sector, private players are flourishing. India is among the few nations with full-stack space capabilities from launch to satellite.",
    "size": "$8 Billion market",
    "cagr": "~25% CAGR",
    "players": [
      "ISRO",
      "Skyroot Aerospace",
      "Agnikul Cosmos",
      "Pixxel",
      "Dhruva Space"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "Low",
      "supplierPower": "Medium",
      "substitutes": "Low",
      "rivalry": "Low"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Titanium Alloys, Composite Materials, Avionics Chips, Precision Sensors",
      "operations": "Systems Engineering, Precision Weapon Fabrication, Satellite Integration, Range Testing",
      "distribution": "Direct Government Procurement (MoD), Defense PSUs, Global Strategic Defense Exports",
      "endMarkets": "Indian Armed Forces (Army/Navy/Air Force), Space Research Organizations (ISRO)",
      "marginDriver": "High-Value Indigenous Defense Production Contracts & Long-Term AMC Contracts",
      "bottleneck": "Long Procurement Cycles & High Technological R&D Risk"
    },
    "regulatoryTimeline": [
      {
        "year": "2017",
        "title": "GST Implementation",
        "detail": "Unified national tax regime eliminating interstate logistics bottlenecks"
      },
      {
        "year": "2020",
        "title": "Atmanirbhar Bharat Push",
        "detail": "Import substitution & localized supply chain mandates"
      },
      {
        "year": "2022",
        "title": "PLI Scheme Expansion",
        "detail": "Sectoral manufacturing incentives for high-value exports"
      },
      {
        "year": "2024+",
        "title": "ESG & Sustainability Norms",
        "detail": "Mandatory BRSR disclosures & green transition targets"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Per Capita Consumption / Market Spend ($)",
      "labels": [
        "India",
        "China",
        "Brazil",
        "USA",
        "Global Avg"
      ],
      "values": [
        42,
        145,
        95,
        310,
        120
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "Raw Materials",
        "Employee Cost",
        "Marketing & Dist",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        52,
        14,
        14,
        20,
        5,
        15
      ]
    },
    "workingCapital": {
      "inventoryDays": 36,
      "receivableDays": 28,
      "payableDays": 42,
      "cashConversionCycle": 22
    },
    "creditProfile": {
      "netDebtToEbitda": "1.4x",
      "creditRating": "AA / Stable",
      "costOfDebt": "7.8%",
      "liquidityBuffer": "Healthy Cash Conversion & Reserves"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        108,
        120,
        130,
        142,
        158
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+29.5%",
      "return3Yr": "+72.0%",
      "volatilityBeta": "1.10x"
    },
    "customerSegmentation": {
      "labels": [
        "B2C Urban Consumers",
        "B2C Rural Households",
        "B2B Enterprise Clients"
      ],
      "values": [
        45,
        35,
        20
      ],
      "incomeCohort": "Tier-1 Metros (45%), Tier-2/3 Cities (35%), Rural Markets (20%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        112,
        126,
        142,
        160
      ],
      "actualDemand": [
        86,
        98,
        114,
        130,
        150
      ],
      "utilizationRate": "82.5% Factory Utilization"
    },
    "swot": {
      "strengths": [
        "Massive domestic demographic dividend & rising disposable income",
        "Established distribution networks spanning urban & rural retail channels"
      ],
      "weaknesses": [
        "Sensitivity to raw material price volatility (agricultural/chemical inputs)",
        "Margin pressure in unorganized traditional trade segments"
      ],
      "opportunities": [
        "Omnichannel digital commerce expansion & premium product adoption",
        "Government PLI schemes driving export manufacturing competitiveness"
      ],
      "threats": [
        "Hyperlocal quick-commerce disruption altering brand loyalty",
        "Global supply chain disruptions & freight rate inflation"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "Brand Portfolio Acquisition",
        "value": "$420M",
        "buyer": "Consumer Conglomerate A"
      },
      {
        "date": "Q4 2023",
        "company": "D2C Strategic Stake Buyout",
        "value": "$190M",
        "buyer": "Private Equity Growth Fund"
      },
      {
        "date": "Q1 2024",
        "company": "Manufacturing Asset Deal",
        "value": "$350M",
        "buyer": "Global Industrial Group"
      }
    ],
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "Medium"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the total addressable market (TAM) for premium D2C products in India.",
      "Profitability Case: How can a consumer company optimize trade discounts vs direct channel margins?",
      "M&A Evaluation: What metrics would you assess when acquiring an online-first D2C brand?",
      "Supply Chain: Calculate the cost trade-off between centralized warehousing vs dark stores."
    ],
    "glossary": [
      {
        "term": "D2C",
        "definition": "Direct-to-Consumer channel bypassing traditional distributors."
      },
      {
        "term": "SKU",
        "definition": "Stock Keeping Unit — Individual distinct product item identifier."
      },
      {
        "term": "TAM",
        "definition": "Total Addressable Market — Overall revenue opportunity for a product."
      },
      {
        "term": "LTV/CAC",
        "definition": "Ratio of Customer Lifetime Value to Customer Acquisition Cost."
      }
    ]
  },
  {
    "id": "food-beverage",
    "name": "Food & Beverage",
    "sector": "Consumer",
    "description": "India's F&B sector is undergoing premiumization with health-conscious consumers driving demand for organic, functional, and branded foods. Food delivery platforms are expanding market access.",
    "size": "$900 Billion market",
    "cagr": "~11% CAGR",
    "players": [
      "Nestlé India",
      "Britannia",
      "ITC Foods",
      "Zomato",
      "Swiggy"
    ],
    "forces": {
      "newEntrants": "High",
      "buyerPower": "High",
      "supplierPower": "Medium",
      "substitutes": "High",
      "rivalry": "High"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Steel, Aluminum, Battery Cells, Microcontrollers & Rubber Component Tier-1s",
      "operations": "Vehicle Stamping, Engine/Motor Assembly, Robotic Painting, Quality Inspection",
      "distribution": "Authorized Dealer Networks, Franchise Outlets, Direct Fleets & Export Docks",
      "endMarkets": "Urban & Rural Commuters, Commercial Logistics Fleets, Ride-Hailing Platforms",
      "marginDriver": "High-margin SUVs, After-sales Spare Parts & Battery Software Upgrades",
      "bottleneck": "Semiconductor Chip Supply & Lithium-Ion Cell Import Dependencies"
    },
    "regulatoryTimeline": [
      {
        "year": "2019",
        "title": "FAME II Scheme",
        "detail": "₹10,000 Cr subsidies for EV two-wheelers & public transport"
      },
      {
        "year": "2020",
        "title": "BS-VI Emission Norms",
        "detail": "Mandatory transition to ultra-low sulfur emission standards"
      },
      {
        "year": "2022",
        "title": "Auto PLI Incentive",
        "detail": "₹25,938 Cr budget for advanced automotive technologies"
      },
      {
        "year": "2024+",
        "title": "New EV Policy & FAME III",
        "detail": "Concessional import duties for localized EV manufacturing"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Car Ownership per 1,000 People",
      "labels": [
        "India",
        "China",
        "Japan",
        "USA",
        "Global Avg"
      ],
      "values": [
        34,
        210,
        620,
        840,
        180
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "Raw Materials",
        "Employee Cost",
        "R&D & Royalty",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        68,
        8,
        5,
        13,
        4,
        8
      ]
    },
    "workingCapital": {
      "inventoryDays": 38,
      "receivableDays": 22,
      "payableDays": 54,
      "cashConversionCycle": 6
    },
    "creditProfile": {
      "netDebtToEbitda": "0.9x",
      "creditRating": "AA+ / Positive",
      "costOfDebt": "7.5%",
      "liquidityBuffer": "₹14,500 Cr Cash Reserves"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        114,
        132,
        145,
        162,
        184
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+42.5%",
      "return3Yr": "+112.0%",
      "volatilityBeta": "1.24x (High Growth)"
    },
    "customerSegmentation": {
      "labels": [
        "Passenger SUV/Cars",
        "Two-Wheelers",
        "Commercial & Logistics Fleets"
      ],
      "values": [
        42,
        45,
        13
      ],
      "incomeCohort": "Middle-Income Households (55%), High-Net-Worth (25%), Rural Commuters (20%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        110,
        125,
        140,
        160
      ],
      "actualDemand": [
        84,
        96,
        112,
        128,
        148
      ],
      "utilizationRate": "81.2% Factory Capacity"
    },
    "swot": {
      "strengths": [
        "Rapid premiumization trend towards high-margin SUVs",
        "Strong domestic Tier-1 component manufacturing ecosystem"
      ],
      "weaknesses": [
        "Heavy import dependency on lithium-ion cells & magnet motors",
        "Cyclical sensitivity to monsoon & rural disposable income"
      ],
      "opportunities": [
        "Export hub for EV two-wheelers & compact SUVs to ASEAN & Africa",
        "Government PLI incentives driving localization of EV drivetrains"
      ],
      "threats": [
        "Global semiconductor supply disruptions & raw material inflation",
        "Aggressive price cuts by international EV entrants"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q1 2023",
        "company": "TPG Investment in Tata Passenger EV",
        "value": "$1.0B",
        "buyer": "TPG Rise Climate"
      },
      {
        "date": "Q3 2023",
        "company": "Ather Energy Sovereign Funding",
        "value": "$128M",
        "buyer": "NIIF & Hero MotoCorp"
      },
      {
        "date": "Q1 2024",
        "company": "Commercial Fleet EV Acquisition",
        "value": "$210M",
        "buyer": "Logistics Infra Fund"
      }
    ],
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "High",
      "d2cOmnichannel": "Medium",
      "platformEcosystem": "High"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the annual volume of electric two-wheelers sold in India in 2026.",
      "Profitability Case: How can an OEM offset raw material price inflation through localization?",
      "Strategic Shift: Evaluate whether a traditional ICE automaker should spin off its EV division.",
      "Supply Chain Guesstimate: Calculate the required battery gigafactory capacity for 1 million EVs."
    ],
    "glossary": [
      {
        "term": "OEM",
        "definition": "Original Equipment Manufacturer — Company producing final vehicles."
      },
      {
        "term": "FAME",
        "definition": "Faster Adoption and Manufacturing of Hybrid & Electric Vehicles scheme."
      },
      {
        "term": "BS-VI",
        "definition": "Bharat Stage VI — Stringent national vehicle emission control standard."
      },
      {
        "term": "BMS",
        "definition": "Battery Management System — Electronic unit regulating lithium cell packs."
      }
    ]
  },
  {
    "id": "water-sanitation",
    "name": "Water & Sanitation",
    "sector": "Infrastructure",
    "description": "Jal Jeevan Mission is India's largest water infrastructure initiative, connecting every household. Water treatment, desalination, and smart metering are emerging segments.",
    "size": "$16 Billion opportunity",
    "cagr": "~11% CAGR",
    "players": [
      "VA Tech Wabag",
      "Praj Industries",
      "Thermax",
      "Ion Exchange",
      "Enviro Infra"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "Low",
      "supplierPower": "Medium",
      "substitutes": "Low",
      "rivalry": "Medium"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Limestone, Coal, Fly Ash, Steel Rebar, Heavy Machinery & Land Parcels",
      "operations": "Clinker Kiln Processing, Structural Engineering, Site Excavation & Construction",
      "distribution": "Dealer Networks, Institutional Infra Contractors, Direct B2B Site Delivery",
      "endMarkets": "National Highways, High-Rise Residential Projects, Industrial Parks, Smart Cities",
      "marginDriver": "Operating Scale Economies, Freight Cost Optimization & Premium Brand Cement",
      "bottleneck": "High Thermal Energy (Coal) Costs & Environmental Clearance Delays"
    },
    "regulatoryTimeline": [
      {
        "year": "2016",
        "title": "RERA Act Enactment",
        "detail": "Real Estate Regulation & buyer protection framework"
      },
      {
        "year": "2019",
        "title": "National Infrastructure Pipeline",
        "detail": "₹111 Lakh Cr master plan for roads, rail & ports"
      },
      {
        "year": "2021",
        "title": "PM Gati Shakti Master Plan",
        "detail": "Multimodal transport infrastructure integration"
      },
      {
        "year": "2024+",
        "title": "Record Capex Outlay",
        "detail": "₹11.11 Lakh Cr central government infrastructure capex"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Per Capita Cement / Infra Consumption (kg)",
      "labels": [
        "India",
        "China",
        "Vietnam",
        "Turkey",
        "Global Avg"
      ],
      "values": [
        260,
        1650,
        780,
        620,
        530
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "Power & Fuel (Coal)",
        "Freight & Logistics",
        "Raw Materials",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        28,
        24,
        18,
        18,
        6,
        12
      ]
    },
    "workingCapital": {
      "inventoryDays": 45,
      "receivableDays": 42,
      "payableDays": 68,
      "cashConversionCycle": 19
    },
    "creditProfile": {
      "netDebtToEbitda": "2.2x",
      "creditRating": "AA / Stable",
      "costOfDebt": "8.5%",
      "liquidityBuffer": "Strong Order Book Coverage (3.2x Revenue)"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        115,
        130,
        148,
        165,
        188
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+45.2%",
      "return3Yr": "+118.5%",
      "volatilityBeta": "1.32x (High Beta Infra)"
    },
    "customerSegmentation": {
      "labels": [
        "Government Roads & Rail",
        "Commercial & Residential",
        "Industrial Factories"
      ],
      "values": [
        50,
        35,
        15
      ],
      "incomeCohort": "State & Central Contracts (50%), Tier-1 Developers (35%), SME B2B (15%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        108,
        118,
        132,
        150
      ],
      "actualDemand": [
        78,
        88,
        102,
        118,
        138
      ],
      "utilizationRate": "78.6% Kiln Utilization"
    },
    "swot": {
      "strengths": [
        "Record central government capex allocation (₹11.11 Lakh Cr)",
        "High entry barriers due to limestone reserves & logistics freight networks"
      ],
      "weaknesses": [
        "High sensitivity to imported coal & diesel freight costs",
        "Working capital delays in state government project receivables"
      ],
      "opportunities": [
        "Dedicated Freight Corridors & High-speed Rail Expansion",
        "Green Cement & Waste Heat Recovery Systems (WHRS) reducing power cost"
      ],
      "threats": [
        "Environmental clearance bottlenecks & land acquisition delays",
        "Monsoon seasonal construction slowdowns"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "Ambuja Cement Sanghi Acquisition",
        "value": "$600M",
        "buyer": "Adani Cement Group"
      },
      {
        "date": "Q4 2023",
        "company": "Kesoram Cement Asset Buyout",
        "value": "$640M",
        "buyer": "UltraTech Cement"
      },
      {
        "date": "Q1 2024",
        "company": "Highway InvIT Concession Buyout",
        "value": "$1.1B",
        "buyer": "CPP Investments"
      }
    ],
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "Low",
      "platformEcosystem": "Medium"
    },
    "interviewAngles": [
      "Market Sizing: Estimate total cement demand generated by affordable housing in India.",
      "Valuation Case: How do you value an EPC contractor using EV/EBITDA vs Price/Book?",
      "Profitability Case: How does freight optimization impact EBITDA per ton for a cement producer?",
      "Project Finance: Explain Debt Service Coverage Ratio (DSCR) in toll road InvITs."
    ],
    "glossary": [
      {
        "term": "EPC",
        "definition": "Engineering, Procurement, and Construction contract model."
      },
      {
        "term": "WHRS",
        "definition": "Waste Heat Recovery System — Capturing kiln exhaust heat for cheap power."
      },
      {
        "term": "InvIT",
        "definition": "Infrastructure Investment Trust — Vehicle pooling operational toll assets."
      },
      {
        "term": "Clinker",
        "definition": "Nodule raw material produced by heating limestone in cement kilns."
      }
    ]
  },
  {
    "id": "ecommerce",
    "name": "E-Commerce",
    "sector": "Consumer",
    "description": "India's e-commerce market is the world's fastest growing, driven by smartphone penetration, cheap data, and logistics improvement. Quick commerce is the emerging mega-trend.",
    "size": "$200 Billion by 2027",
    "cagr": "~19% CAGR",
    "players": [
      "Flipkart",
      "Amazon India",
      "Meesho",
      "Nykaa",
      "Myntra"
    ],
    "forces": {
      "newEntrants": "Medium",
      "buyerPower": "High",
      "supplierPower": "Low",
      "substitutes": "High",
      "rivalry": "High"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Agricultural Produce, Packaging Materials, Oils, Fibers & Fragrance Chemicals",
      "operations": "Blending, High-Speed Bottling/Packaging, Quality Assurance, Batch Processing",
      "distribution": "Kirana Store Distribution Network, Modern Trade Supermarkets, Quick-Commerce Dark Stores",
      "endMarkets": "Household Consumers across Tier 1, Tier 2 & Rural Indian Markets",
      "marginDriver": "Premium Brand Products, Direct-to-Consumer (D2C) Margins & Supply Chain Scale",
      "bottleneck": "Raw Material Price Volatility (Palm Oil/Cotton) & Hyperlocal Logistics Costs"
    },
    "regulatoryTimeline": [
      {
        "year": "2017",
        "title": "GST Implementation",
        "detail": "Unified national tax regime eliminating interstate logistics bottlenecks"
      },
      {
        "year": "2020",
        "title": "Atmanirbhar Bharat Push",
        "detail": "Import substitution & localized supply chain mandates"
      },
      {
        "year": "2022",
        "title": "PLI Scheme Expansion",
        "detail": "Sectoral manufacturing incentives for high-value exports"
      },
      {
        "year": "2024+",
        "title": "ESG & Sustainability Norms",
        "detail": "Mandatory BRSR disclosures & green transition targets"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Per Capita Consumption / Market Spend ($)",
      "labels": [
        "India",
        "China",
        "Brazil",
        "USA",
        "Global Avg"
      ],
      "values": [
        42,
        145,
        95,
        310,
        120
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "Raw Materials",
        "Employee Cost",
        "Marketing & Dist",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        52,
        14,
        14,
        20,
        5,
        15
      ]
    },
    "workingCapital": {
      "inventoryDays": 36,
      "receivableDays": 28,
      "payableDays": 42,
      "cashConversionCycle": 22
    },
    "creditProfile": {
      "netDebtToEbitda": "1.4x",
      "creditRating": "AA / Stable",
      "costOfDebt": "7.8%",
      "liquidityBuffer": "Healthy Cash Conversion & Reserves"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        108,
        120,
        130,
        142,
        158
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+29.5%",
      "return3Yr": "+72.0%",
      "volatilityBeta": "1.10x"
    },
    "customerSegmentation": {
      "labels": [
        "B2C Urban Consumers",
        "B2C Rural Households",
        "B2B Enterprise Clients"
      ],
      "values": [
        45,
        35,
        20
      ],
      "incomeCohort": "Tier-1 Metros (45%), Tier-2/3 Cities (35%), Rural Markets (20%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        112,
        126,
        142,
        160
      ],
      "actualDemand": [
        86,
        98,
        114,
        130,
        150
      ],
      "utilizationRate": "82.5% Factory Utilization"
    },
    "swot": {
      "strengths": [
        "Massive domestic demographic dividend & rising disposable income",
        "Established distribution networks spanning urban & rural retail channels"
      ],
      "weaknesses": [
        "Sensitivity to raw material price volatility (agricultural/chemical inputs)",
        "Margin pressure in unorganized traditional trade segments"
      ],
      "opportunities": [
        "Omnichannel digital commerce expansion & premium product adoption",
        "Government PLI schemes driving export manufacturing competitiveness"
      ],
      "threats": [
        "Hyperlocal quick-commerce disruption altering brand loyalty",
        "Global supply chain disruptions & freight rate inflation"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "Brand Portfolio Acquisition",
        "value": "$420M",
        "buyer": "Consumer Conglomerate A"
      },
      {
        "date": "Q4 2023",
        "company": "D2C Strategic Stake Buyout",
        "value": "$190M",
        "buyer": "Private Equity Growth Fund"
      },
      {
        "date": "Q1 2024",
        "company": "Manufacturing Asset Deal",
        "value": "$350M",
        "buyer": "Global Industrial Group"
      }
    ],
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "Medium"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the total addressable market (TAM) for premium D2C products in India.",
      "Profitability Case: How can a consumer company optimize trade discounts vs direct channel margins?",
      "M&A Evaluation: What metrics would you assess when acquiring an online-first D2C brand?",
      "Supply Chain: Calculate the cost trade-off between centralized warehousing vs dark stores."
    ],
    "glossary": [
      {
        "term": "D2C",
        "definition": "Direct-to-Consumer channel bypassing traditional distributors."
      },
      {
        "term": "SKU",
        "definition": "Stock Keeping Unit — Individual distinct product item identifier."
      },
      {
        "term": "TAM",
        "definition": "Total Addressable Market — Overall revenue opportunity for a product."
      },
      {
        "term": "LTV/CAC",
        "definition": "Ratio of Customer Lifetime Value to Customer Acquisition Cost."
      }
    ]
  },
  {
    "id": "diagnostics",
    "name": "Diagnostics & Medtech",
    "sector": "Healthcare",
    "description": "India's diagnostics sector exploded post-COVID and is now maturing with home testing, AI-powered imaging, and point-of-care devices transforming access to early disease detection.",
    "size": "$16 Billion market",
    "cagr": "~13% CAGR",
    "players": [
      "Dr. Lal PathLabs",
      "Metropolis",
      "Thyrocare",
      "SRL Diagnostics",
      "Vijaya Diagnostics"
    ],
    "forces": {
      "newEntrants": "Medium",
      "buyerPower": "High",
      "supplierPower": "Medium",
      "substitutes": "Medium",
      "rivalry": "High"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Active Pharmaceutical Ingredients (APIs), Reagents, Lab Equipment, Clinical Trial Data",
      "operations": "Chemical Synthesis, Biosimilar Cultivation, Formulation, Diagnostic Testing",
      "distribution": "Hospital Chains, Retail Pharmacy Networks, E-Pharmacy Platforms, Wholesalers",
      "endMarkets": "Patients, Diagnostic Clinics, Government Health Programs, Global Export Markets",
      "marginDriver": "Patented Specialty Drugs, High-volume Generics & Proprietary Formulations",
      "bottleneck": "API Raw Material Import Reliance & Stringent USFDA Regulatory Audits"
    },
    "regulatoryTimeline": [
      {
        "year": "2019",
        "title": "Ayushman Bharat (PM-JAY)",
        "detail": "Universal health coverage for 500M+ citizens"
      },
      {
        "year": "2021",
        "title": "Bulk Drug Parks PLI",
        "detail": "₹15,000 Cr incentives for active pharmaceutical ingredients"
      },
      {
        "year": "2023",
        "title": "Uniform Code for Pharma Practices",
        "detail": "Ethical marketing standards & R&D tax incentives"
      },
      {
        "year": "2024+",
        "title": "MedTech Regulatory Framework",
        "detail": "CDSCO medical device registration & ISO standards"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Healthcare Spend as % of GDP",
      "labels": [
        "India",
        "China",
        "Brazil",
        "USA",
        "Global Avg"
      ],
      "values": [
        3.8,
        5.4,
        9.6,
        17.8,
        10.2
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "API & Raw Materials",
        "Employee Cost",
        "R&D & Compliance",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        38,
        18,
        12,
        22,
        6,
        16
      ]
    },
    "workingCapital": {
      "inventoryDays": 72,
      "receivableDays": 58,
      "payableDays": 64,
      "cashConversionCycle": 66
    },
    "creditProfile": {
      "netDebtToEbitda": "1.2x",
      "creditRating": "AA / Stable",
      "costOfDebt": "7.4%",
      "liquidityBuffer": "₹8,200 Cr Cash & Investments"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        112,
        128,
        142,
        156,
        175
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+36.5%",
      "return3Yr": "+88.2%",
      "volatilityBeta": "0.85x (Defensive)"
    },
    "customerSegmentation": {
      "labels": [
        "Generics Exports (US/EU)",
        "Domestic Formulations",
        "Hospitals & Diagnostics"
      ],
      "values": [
        48,
        36,
        16
      ],
      "incomeCohort": "Domestic Hospitals (40%), Overseas Exports (48%), OTC Consumer (12%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        112,
        126,
        142,
        162
      ],
      "actualDemand": [
        88,
        102,
        118,
        136,
        156
      ],
      "utilizationRate": "83.8% Capacity Utilization"
    },
    "swot": {
      "strengths": [
        "World's pharmacy status with 20%+ global generic supply share",
        "Low-cost high-compliance FDA-approved manufacturing plants"
      ],
      "weaknesses": [
        "High import dependence on China for Active Pharma Ingredients (APIs)",
        "Stringent price controls (NLEM) on essential medicines"
      ],
      "opportunities": [
        "Patent cliff in US ($200B+ drugs expiring) opening biosimilar wave",
        "Expansion of private hospital chains into Tier-2/3 cities"
      ],
      "threats": [
        "USFDA regulatory import alerts & warning letters",
        "Geopolitical raw material price spikes & logistics delays"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q1 2023",
        "company": "Glenmark Life Sciences Buyout",
        "value": "$920M",
        "buyer": "Nirma Group"
      },
      {
        "date": "Q3 2023",
        "company": "Manipal Hospitals Stake Sale",
        "value": "$1.5B",
        "buyer": "Temasek Holdings"
      },
      {
        "date": "Q1 2024",
        "company": "Biocon Biologics Integration",
        "value": "$3.3B",
        "buyer": "Viatris Biosimilars Deal"
      }
    ],
    "techRadar": {
      "aiIntegration": "High",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "Medium"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the market size of hospital beds needed in India to meet WHO standards.",
      "Profitability Case: How can a domestic pharma company offset regulatory price caps (NLEM)?",
      "M&A Due Diligence: Evaluate an acquisition target specializing in complex biosimilars.",
      "Regulatory Risk: Explain the financial impact of a USFDA Form 483 warning letter on margins."
    ],
    "glossary": [
      {
        "term": "API",
        "definition": "Active Pharmaceutical Ingredient — Raw chemical substance producing therapeutic effect."
      },
      {
        "term": "ANDAS",
        "definition": "Abbreviated New Drug Application — USFDA filing for generic drug approvals."
      },
      {
        "term": "NLEM",
        "definition": "National List of Essential Medicines — Government price-controlled drugs."
      },
      {
        "term": "Biosimilar",
        "definition": "Biologic medical product almost identical to an original patented drug."
      }
    ]
  },
  {
    "id": "animation-vfx",
    "name": "Animation & VFX",
    "sector": "Consumer",
    "description": "India is a global hub for animation, VFX, and post-production services. With OTT driving content demand and global studios outsourcing to India, the sector is in a sweet spot.",
    "size": "$4 Billion market",
    "cagr": "~17% CAGR",
    "players": [
      "Prime Focus",
      "DQ Entertainment",
      "Toonz Media",
      "DNEG India",
      "Reliance Entertainment"
    ],
    "forces": {
      "newEntrants": "Medium",
      "buyerPower": "High",
      "supplierPower": "Low",
      "substitutes": "Medium",
      "rivalry": "High"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Agricultural Produce, Packaging Materials, Oils, Fibers & Fragrance Chemicals",
      "operations": "Blending, High-Speed Bottling/Packaging, Quality Assurance, Batch Processing",
      "distribution": "Kirana Store Distribution Network, Modern Trade Supermarkets, Quick-Commerce Dark Stores",
      "endMarkets": "Household Consumers across Tier 1, Tier 2 & Rural Indian Markets",
      "marginDriver": "Premium Brand Products, Direct-to-Consumer (D2C) Margins & Supply Chain Scale",
      "bottleneck": "Raw Material Price Volatility (Palm Oil/Cotton) & Hyperlocal Logistics Costs"
    },
    "regulatoryTimeline": [
      {
        "year": "2017",
        "title": "GST Implementation",
        "detail": "Unified national tax regime eliminating interstate logistics bottlenecks"
      },
      {
        "year": "2020",
        "title": "Atmanirbhar Bharat Push",
        "detail": "Import substitution & localized supply chain mandates"
      },
      {
        "year": "2022",
        "title": "PLI Scheme Expansion",
        "detail": "Sectoral manufacturing incentives for high-value exports"
      },
      {
        "year": "2024+",
        "title": "ESG & Sustainability Norms",
        "detail": "Mandatory BRSR disclosures & green transition targets"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Per Capita Consumption / Market Spend ($)",
      "labels": [
        "India",
        "China",
        "Brazil",
        "USA",
        "Global Avg"
      ],
      "values": [
        42,
        145,
        95,
        310,
        120
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "Raw Materials",
        "Employee Cost",
        "Marketing & Dist",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        52,
        14,
        14,
        20,
        5,
        15
      ]
    },
    "workingCapital": {
      "inventoryDays": 36,
      "receivableDays": 28,
      "payableDays": 42,
      "cashConversionCycle": 22
    },
    "creditProfile": {
      "netDebtToEbitda": "1.4x",
      "creditRating": "AA / Stable",
      "costOfDebt": "7.8%",
      "liquidityBuffer": "Healthy Cash Conversion & Reserves"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        108,
        120,
        130,
        142,
        158
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+29.5%",
      "return3Yr": "+72.0%",
      "volatilityBeta": "1.10x"
    },
    "customerSegmentation": {
      "labels": [
        "B2C Urban Consumers",
        "B2C Rural Households",
        "B2B Enterprise Clients"
      ],
      "values": [
        45,
        35,
        20
      ],
      "incomeCohort": "Tier-1 Metros (45%), Tier-2/3 Cities (35%), Rural Markets (20%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        112,
        126,
        142,
        160
      ],
      "actualDemand": [
        86,
        98,
        114,
        130,
        150
      ],
      "utilizationRate": "82.5% Factory Utilization"
    },
    "swot": {
      "strengths": [
        "Massive domestic demographic dividend & rising disposable income",
        "Established distribution networks spanning urban & rural retail channels"
      ],
      "weaknesses": [
        "Sensitivity to raw material price volatility (agricultural/chemical inputs)",
        "Margin pressure in unorganized traditional trade segments"
      ],
      "opportunities": [
        "Omnichannel digital commerce expansion & premium product adoption",
        "Government PLI schemes driving export manufacturing competitiveness"
      ],
      "threats": [
        "Hyperlocal quick-commerce disruption altering brand loyalty",
        "Global supply chain disruptions & freight rate inflation"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "Brand Portfolio Acquisition",
        "value": "$420M",
        "buyer": "Consumer Conglomerate A"
      },
      {
        "date": "Q4 2023",
        "company": "D2C Strategic Stake Buyout",
        "value": "$190M",
        "buyer": "Private Equity Growth Fund"
      },
      {
        "date": "Q1 2024",
        "company": "Manufacturing Asset Deal",
        "value": "$350M",
        "buyer": "Global Industrial Group"
      }
    ],
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "Medium"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the total addressable market (TAM) for premium D2C products in India.",
      "Profitability Case: How can a consumer company optimize trade discounts vs direct channel margins?",
      "M&A Evaluation: What metrics would you assess when acquiring an online-first D2C brand?",
      "Supply Chain: Calculate the cost trade-off between centralized warehousing vs dark stores."
    ],
    "glossary": [
      {
        "term": "D2C",
        "definition": "Direct-to-Consumer channel bypassing traditional distributors."
      },
      {
        "term": "SKU",
        "definition": "Stock Keeping Unit — Individual distinct product item identifier."
      },
      {
        "term": "TAM",
        "definition": "Total Addressable Market — Overall revenue opportunity for a product."
      },
      {
        "term": "LTV/CAC",
        "definition": "Ratio of Customer Lifetime Value to Customer Acquisition Cost."
      }
    ]
  },
  {
    "id": "construction",
    "name": "Construction Materials",
    "sector": "Infrastructure",
    "description": "India's construction materials sector is riding the infrastructure and housing boom. Tiles, sanitaryware, paints, adhesives, and wires are seeing strong demand growth.",
    "size": "$70 Billion market",
    "cagr": "~9% CAGR",
    "players": [
      "Kajaria Ceramics",
      "Asian Paints",
      "Pidilite",
      "Havells India",
      "Astral Poly"
    ],
    "forces": {
      "newEntrants": "Medium",
      "buyerPower": "Medium",
      "supplierPower": "Medium",
      "substitutes": "Medium",
      "rivalry": "High"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Limestone, Coal, Fly Ash, Steel Rebar, Heavy Machinery & Land Parcels",
      "operations": "Clinker Kiln Processing, Structural Engineering, Site Excavation & Construction",
      "distribution": "Dealer Networks, Institutional Infra Contractors, Direct B2B Site Delivery",
      "endMarkets": "National Highways, High-Rise Residential Projects, Industrial Parks, Smart Cities",
      "marginDriver": "Operating Scale Economies, Freight Cost Optimization & Premium Brand Cement",
      "bottleneck": "High Thermal Energy (Coal) Costs & Environmental Clearance Delays"
    },
    "regulatoryTimeline": [
      {
        "year": "2016",
        "title": "RERA Act Enactment",
        "detail": "Real Estate Regulation & buyer protection framework"
      },
      {
        "year": "2019",
        "title": "National Infrastructure Pipeline",
        "detail": "₹111 Lakh Cr master plan for roads, rail & ports"
      },
      {
        "year": "2021",
        "title": "PM Gati Shakti Master Plan",
        "detail": "Multimodal transport infrastructure integration"
      },
      {
        "year": "2024+",
        "title": "Record Capex Outlay",
        "detail": "₹11.11 Lakh Cr central government infrastructure capex"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Per Capita Cement / Infra Consumption (kg)",
      "labels": [
        "India",
        "China",
        "Vietnam",
        "Turkey",
        "Global Avg"
      ],
      "values": [
        260,
        1650,
        780,
        620,
        530
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "Power & Fuel (Coal)",
        "Freight & Logistics",
        "Raw Materials",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        28,
        24,
        18,
        18,
        6,
        12
      ]
    },
    "workingCapital": {
      "inventoryDays": 45,
      "receivableDays": 42,
      "payableDays": 68,
      "cashConversionCycle": 19
    },
    "creditProfile": {
      "netDebtToEbitda": "2.2x",
      "creditRating": "AA / Stable",
      "costOfDebt": "8.5%",
      "liquidityBuffer": "Strong Order Book Coverage (3.2x Revenue)"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        115,
        130,
        148,
        165,
        188
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+45.2%",
      "return3Yr": "+118.5%",
      "volatilityBeta": "1.32x (High Beta Infra)"
    },
    "customerSegmentation": {
      "labels": [
        "Government Roads & Rail",
        "Commercial & Residential",
        "Industrial Factories"
      ],
      "values": [
        50,
        35,
        15
      ],
      "incomeCohort": "State & Central Contracts (50%), Tier-1 Developers (35%), SME B2B (15%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        108,
        118,
        132,
        150
      ],
      "actualDemand": [
        78,
        88,
        102,
        118,
        138
      ],
      "utilizationRate": "78.6% Kiln Utilization"
    },
    "swot": {
      "strengths": [
        "Record central government capex allocation (₹11.11 Lakh Cr)",
        "High entry barriers due to limestone reserves & logistics freight networks"
      ],
      "weaknesses": [
        "High sensitivity to imported coal & diesel freight costs",
        "Working capital delays in state government project receivables"
      ],
      "opportunities": [
        "Dedicated Freight Corridors & High-speed Rail Expansion",
        "Green Cement & Waste Heat Recovery Systems (WHRS) reducing power cost"
      ],
      "threats": [
        "Environmental clearance bottlenecks & land acquisition delays",
        "Monsoon seasonal construction slowdowns"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "Ambuja Cement Sanghi Acquisition",
        "value": "$600M",
        "buyer": "Adani Cement Group"
      },
      {
        "date": "Q4 2023",
        "company": "Kesoram Cement Asset Buyout",
        "value": "$640M",
        "buyer": "UltraTech Cement"
      },
      {
        "date": "Q1 2024",
        "company": "Highway InvIT Concession Buyout",
        "value": "$1.1B",
        "buyer": "CPP Investments"
      }
    ],
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "Low",
      "platformEcosystem": "Medium"
    },
    "interviewAngles": [
      "Market Sizing: Estimate total cement demand generated by affordable housing in India.",
      "Valuation Case: How do you value an EPC contractor using EV/EBITDA vs Price/Book?",
      "Profitability Case: How does freight optimization impact EBITDA per ton for a cement producer?",
      "Project Finance: Explain Debt Service Coverage Ratio (DSCR) in toll road InvITs."
    ],
    "glossary": [
      {
        "term": "EPC",
        "definition": "Engineering, Procurement, and Construction contract model."
      },
      {
        "term": "WHRS",
        "definition": "Waste Heat Recovery System — Capturing kiln exhaust heat for cheap power."
      },
      {
        "term": "InvIT",
        "definition": "Infrastructure Investment Trust — Vehicle pooling operational toll assets."
      },
      {
        "term": "Clinker",
        "definition": "Nodule raw material produced by heating limestone in cement kilns."
      }
    ]
  },
  {
    "id": "biotech",
    "name": "Biotechnology",
    "sector": "Healthcare",
    "description": "India's biotech sector is a global leader in biosimilars and vaccines. The country is expanding into gene therapy, precision medicine, and bioinformatics with significant R&D investment.",
    "size": "$150 Billion by 2025",
    "cagr": "~17% CAGR",
    "players": [
      "Biocon",
      "Serum Institute",
      "Bharat Biotech",
      "Panacea Biotec",
      "Zydus Lifesciences"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "Medium",
      "supplierPower": "Low",
      "substitutes": "Medium",
      "rivalry": "Medium"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Active Pharmaceutical Ingredients (APIs), Reagents, Lab Equipment, Clinical Trial Data",
      "operations": "Chemical Synthesis, Biosimilar Cultivation, Formulation, Diagnostic Testing",
      "distribution": "Hospital Chains, Retail Pharmacy Networks, E-Pharmacy Platforms, Wholesalers",
      "endMarkets": "Patients, Diagnostic Clinics, Government Health Programs, Global Export Markets",
      "marginDriver": "Patented Specialty Drugs, High-volume Generics & Proprietary Formulations",
      "bottleneck": "API Raw Material Import Reliance & Stringent USFDA Regulatory Audits"
    },
    "regulatoryTimeline": [
      {
        "year": "2019",
        "title": "Ayushman Bharat (PM-JAY)",
        "detail": "Universal health coverage for 500M+ citizens"
      },
      {
        "year": "2021",
        "title": "Bulk Drug Parks PLI",
        "detail": "₹15,000 Cr incentives for active pharmaceutical ingredients"
      },
      {
        "year": "2023",
        "title": "Uniform Code for Pharma Practices",
        "detail": "Ethical marketing standards & R&D tax incentives"
      },
      {
        "year": "2024+",
        "title": "MedTech Regulatory Framework",
        "detail": "CDSCO medical device registration & ISO standards"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Healthcare Spend as % of GDP",
      "labels": [
        "India",
        "China",
        "Brazil",
        "USA",
        "Global Avg"
      ],
      "values": [
        3.8,
        5.4,
        9.6,
        17.8,
        10.2
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "API & Raw Materials",
        "Employee Cost",
        "R&D & Compliance",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        38,
        18,
        12,
        22,
        6,
        16
      ]
    },
    "workingCapital": {
      "inventoryDays": 72,
      "receivableDays": 58,
      "payableDays": 64,
      "cashConversionCycle": 66
    },
    "creditProfile": {
      "netDebtToEbitda": "1.2x",
      "creditRating": "AA / Stable",
      "costOfDebt": "7.4%",
      "liquidityBuffer": "₹8,200 Cr Cash & Investments"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        112,
        128,
        142,
        156,
        175
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+36.5%",
      "return3Yr": "+88.2%",
      "volatilityBeta": "0.85x (Defensive)"
    },
    "customerSegmentation": {
      "labels": [
        "Generics Exports (US/EU)",
        "Domestic Formulations",
        "Hospitals & Diagnostics"
      ],
      "values": [
        48,
        36,
        16
      ],
      "incomeCohort": "Domestic Hospitals (40%), Overseas Exports (48%), OTC Consumer (12%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        112,
        126,
        142,
        162
      ],
      "actualDemand": [
        88,
        102,
        118,
        136,
        156
      ],
      "utilizationRate": "83.8% Capacity Utilization"
    },
    "swot": {
      "strengths": [
        "World's pharmacy status with 20%+ global generic supply share",
        "Low-cost high-compliance FDA-approved manufacturing plants"
      ],
      "weaknesses": [
        "High import dependence on China for Active Pharma Ingredients (APIs)",
        "Stringent price controls (NLEM) on essential medicines"
      ],
      "opportunities": [
        "Patent cliff in US ($200B+ drugs expiring) opening biosimilar wave",
        "Expansion of private hospital chains into Tier-2/3 cities"
      ],
      "threats": [
        "USFDA regulatory import alerts & warning letters",
        "Geopolitical raw material price spikes & logistics delays"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q1 2023",
        "company": "Glenmark Life Sciences Buyout",
        "value": "$920M",
        "buyer": "Nirma Group"
      },
      {
        "date": "Q3 2023",
        "company": "Manipal Hospitals Stake Sale",
        "value": "$1.5B",
        "buyer": "Temasek Holdings"
      },
      {
        "date": "Q1 2024",
        "company": "Biocon Biologics Integration",
        "value": "$3.3B",
        "buyer": "Viatris Biosimilars Deal"
      }
    ],
    "techRadar": {
      "aiIntegration": "High",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "Medium"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the market size of hospital beds needed in India to meet WHO standards.",
      "Profitability Case: How can a domestic pharma company offset regulatory price caps (NLEM)?",
      "M&A Due Diligence: Evaluate an acquisition target specializing in complex biosimilars.",
      "Regulatory Risk: Explain the financial impact of a USFDA Form 483 warning letter on margins."
    ],
    "glossary": [
      {
        "term": "API",
        "definition": "Active Pharmaceutical Ingredient — Raw chemical substance producing therapeutic effect."
      },
      {
        "term": "ANDAS",
        "definition": "Abbreviated New Drug Application — USFDA filing for generic drug approvals."
      },
      {
        "term": "NLEM",
        "definition": "National List of Essential Medicines — Government price-controlled drugs."
      },
      {
        "term": "Biosimilar",
        "definition": "Biologic medical product almost identical to an original patented drug."
      }
    ]
  },
  {
    "id": "capital-goods",
    "name": "Capital Goods & Engineering",
    "sector": "Manufacturing",
    "description": "India's capital goods sector is booming on the back of infrastructure investments, PLI schemes, and manufacturing capex. Power equipment, railways, and defense equipment are key drivers.",
    "size": "$100 Billion+ market",
    "cagr": "~13% CAGR",
    "players": [
      "L&T",
      "Bharat Electronics",
      "ABB India",
      "Siemens India",
      "Thermax"
    ],
    "forces": {
      "newEntrants": "Low",
      "buyerPower": "Medium",
      "supplierPower": "Medium",
      "substitutes": "Low",
      "rivalry": "High"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Iron Ore, Scrap Metal, Crude Oil Derivatives, Specialty Catalyst Chemicals",
      "operations": "Blast Furnace Smelting, Chemical Synthesis, Precision Machining, Tooling Assembly",
      "distribution": "Industrial B2B Sales Teams, OEM Suppliers, Global Export Traders",
      "endMarkets": "Heavy Engineering Plants, Defense Contractors, Automotive OEMs, Infra Developers",
      "marginDriver": "Specialty High-Purity Chemicals, Customized OEM Assemblies & Value-Added Steel",
      "bottleneck": "Raw Material Price Cyclicality & High Capital Expenditure Requirements"
    },
    "regulatoryTimeline": [
      {
        "year": "2017",
        "title": "GST Implementation",
        "detail": "Unified national tax regime eliminating interstate logistics bottlenecks"
      },
      {
        "year": "2020",
        "title": "Atmanirbhar Bharat Push",
        "detail": "Import substitution & localized supply chain mandates"
      },
      {
        "year": "2022",
        "title": "PLI Scheme Expansion",
        "detail": "Sectoral manufacturing incentives for high-value exports"
      },
      {
        "year": "2024+",
        "title": "ESG & Sustainability Norms",
        "detail": "Mandatory BRSR disclosures & green transition targets"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Per Capita Consumption / Market Spend ($)",
      "labels": [
        "India",
        "China",
        "Brazil",
        "USA",
        "Global Avg"
      ],
      "values": [
        42,
        145,
        95,
        310,
        120
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "Raw Materials",
        "Employee Cost",
        "Marketing & Dist",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        52,
        14,
        14,
        20,
        5,
        15
      ]
    },
    "workingCapital": {
      "inventoryDays": 36,
      "receivableDays": 28,
      "payableDays": 42,
      "cashConversionCycle": 22
    },
    "creditProfile": {
      "netDebtToEbitda": "1.4x",
      "creditRating": "AA / Stable",
      "costOfDebt": "7.8%",
      "liquidityBuffer": "Healthy Cash Conversion & Reserves"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        108,
        120,
        130,
        142,
        158
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+29.5%",
      "return3Yr": "+72.0%",
      "volatilityBeta": "1.10x"
    },
    "customerSegmentation": {
      "labels": [
        "B2C Urban Consumers",
        "B2C Rural Households",
        "B2B Enterprise Clients"
      ],
      "values": [
        45,
        35,
        20
      ],
      "incomeCohort": "Tier-1 Metros (45%), Tier-2/3 Cities (35%), Rural Markets (20%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        112,
        126,
        142,
        160
      ],
      "actualDemand": [
        86,
        98,
        114,
        130,
        150
      ],
      "utilizationRate": "82.5% Factory Utilization"
    },
    "swot": {
      "strengths": [
        "Massive domestic demographic dividend & rising disposable income",
        "Established distribution networks spanning urban & rural retail channels"
      ],
      "weaknesses": [
        "Sensitivity to raw material price volatility (agricultural/chemical inputs)",
        "Margin pressure in unorganized traditional trade segments"
      ],
      "opportunities": [
        "Omnichannel digital commerce expansion & premium product adoption",
        "Government PLI schemes driving export manufacturing competitiveness"
      ],
      "threats": [
        "Hyperlocal quick-commerce disruption altering brand loyalty",
        "Global supply chain disruptions & freight rate inflation"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "Brand Portfolio Acquisition",
        "value": "$420M",
        "buyer": "Consumer Conglomerate A"
      },
      {
        "date": "Q4 2023",
        "company": "D2C Strategic Stake Buyout",
        "value": "$190M",
        "buyer": "Private Equity Growth Fund"
      },
      {
        "date": "Q1 2024",
        "company": "Manufacturing Asset Deal",
        "value": "$350M",
        "buyer": "Global Industrial Group"
      }
    ],
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "Medium"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the total addressable market (TAM) for premium D2C products in India.",
      "Profitability Case: How can a consumer company optimize trade discounts vs direct channel margins?",
      "M&A Evaluation: What metrics would you assess when acquiring an online-first D2C brand?",
      "Supply Chain: Calculate the cost trade-off between centralized warehousing vs dark stores."
    ],
    "glossary": [
      {
        "term": "D2C",
        "definition": "Direct-to-Consumer channel bypassing traditional distributors."
      },
      {
        "term": "SKU",
        "definition": "Stock Keeping Unit — Individual distinct product item identifier."
      },
      {
        "term": "TAM",
        "definition": "Total Addressable Market — Overall revenue opportunity for a product."
      },
      {
        "term": "LTV/CAC",
        "definition": "Ratio of Customer Lifetime Value to Customer Acquisition Cost."
      }
    ]
  },
  {
    "id": "quick-commerce",
    "name": "Quick Commerce",
    "sector": "Consumer",
    "description": "India's quick commerce segment is one of the fastest evolving globally. 10-minute delivery is reshaping urban retail with dark stores and hyperlocal supply chains transforming consumer behavior.",
    "size": "$5 Billion market (growing 70%+ YoY)",
    "cagr": "~70% CAGR",
    "players": [
      "Blinkit (Zomato)",
      "Swiggy Instamart",
      "Zepto",
      "BigBasket Now",
      "Amazon Fresh"
    ],
    "forces": {
      "newEntrants": "Medium",
      "buyerPower": "High",
      "supplierPower": "Medium",
      "substitutes": "High",
      "rivalry": "High"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Agricultural Produce, Packaging Materials, Oils, Fibers & Fragrance Chemicals",
      "operations": "Blending, High-Speed Bottling/Packaging, Quality Assurance, Batch Processing",
      "distribution": "Kirana Store Distribution Network, Modern Trade Supermarkets, Quick-Commerce Dark Stores",
      "endMarkets": "Household Consumers across Tier 1, Tier 2 & Rural Indian Markets",
      "marginDriver": "Premium Brand Products, Direct-to-Consumer (D2C) Margins & Supply Chain Scale",
      "bottleneck": "Raw Material Price Volatility (Palm Oil/Cotton) & Hyperlocal Logistics Costs"
    },
    "regulatoryTimeline": [
      {
        "year": "2017",
        "title": "GST Implementation",
        "detail": "Unified national tax regime eliminating interstate logistics bottlenecks"
      },
      {
        "year": "2020",
        "title": "Atmanirbhar Bharat Push",
        "detail": "Import substitution & localized supply chain mandates"
      },
      {
        "year": "2022",
        "title": "PLI Scheme Expansion",
        "detail": "Sectoral manufacturing incentives for high-value exports"
      },
      {
        "year": "2024+",
        "title": "ESG & Sustainability Norms",
        "detail": "Mandatory BRSR disclosures & green transition targets"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Per Capita Consumption / Market Spend ($)",
      "labels": [
        "India",
        "China",
        "Brazil",
        "USA",
        "Global Avg"
      ],
      "values": [
        42,
        145,
        95,
        310,
        120
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "Raw Materials",
        "Employee Cost",
        "Marketing & Dist",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        52,
        14,
        14,
        20,
        5,
        15
      ]
    },
    "workingCapital": {
      "inventoryDays": 36,
      "receivableDays": 28,
      "payableDays": 42,
      "cashConversionCycle": 22
    },
    "creditProfile": {
      "netDebtToEbitda": "1.4x",
      "creditRating": "AA / Stable",
      "costOfDebt": "7.8%",
      "liquidityBuffer": "Healthy Cash Conversion & Reserves"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        108,
        120,
        130,
        142,
        158
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+29.5%",
      "return3Yr": "+72.0%",
      "volatilityBeta": "1.10x"
    },
    "customerSegmentation": {
      "labels": [
        "B2C Urban Consumers",
        "B2C Rural Households",
        "B2B Enterprise Clients"
      ],
      "values": [
        45,
        35,
        20
      ],
      "incomeCohort": "Tier-1 Metros (45%), Tier-2/3 Cities (35%), Rural Markets (20%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        112,
        126,
        142,
        160
      ],
      "actualDemand": [
        86,
        98,
        114,
        130,
        150
      ],
      "utilizationRate": "82.5% Factory Utilization"
    },
    "swot": {
      "strengths": [
        "Massive domestic demographic dividend & rising disposable income",
        "Established distribution networks spanning urban & rural retail channels"
      ],
      "weaknesses": [
        "Sensitivity to raw material price volatility (agricultural/chemical inputs)",
        "Margin pressure in unorganized traditional trade segments"
      ],
      "opportunities": [
        "Omnichannel digital commerce expansion & premium product adoption",
        "Government PLI schemes driving export manufacturing competitiveness"
      ],
      "threats": [
        "Hyperlocal quick-commerce disruption altering brand loyalty",
        "Global supply chain disruptions & freight rate inflation"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "Brand Portfolio Acquisition",
        "value": "$420M",
        "buyer": "Consumer Conglomerate A"
      },
      {
        "date": "Q4 2023",
        "company": "D2C Strategic Stake Buyout",
        "value": "$190M",
        "buyer": "Private Equity Growth Fund"
      },
      {
        "date": "Q1 2024",
        "company": "Manufacturing Asset Deal",
        "value": "$350M",
        "buyer": "Global Industrial Group"
      }
    ],
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "Medium"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the total addressable market (TAM) for premium D2C products in India.",
      "Profitability Case: How can a consumer company optimize trade discounts vs direct channel margins?",
      "M&A Evaluation: What metrics would you assess when acquiring an online-first D2C brand?",
      "Supply Chain: Calculate the cost trade-off between centralized warehousing vs dark stores."
    ],
    "glossary": [
      {
        "term": "D2C",
        "definition": "Direct-to-Consumer channel bypassing traditional distributors."
      },
      {
        "term": "SKU",
        "definition": "Stock Keeping Unit — Individual distinct product item identifier."
      },
      {
        "term": "TAM",
        "definition": "Total Addressable Market — Overall revenue opportunity for a product."
      },
      {
        "term": "LTV/CAC",
        "definition": "Ratio of Customer Lifetime Value to Customer Acquisition Cost."
      }
    ]
  },
  {
    "id": "apparel",
    "name": "Apparel & Fashion",
    "sector": "Consumer",
    "description": "India's apparel market is undergoing premiumization driven by rising aspirations, D2C brands, and influencer-driven fashion. Work-from-home reversal is driving formals and occasion wear.",
    "size": "$110 Billion market",
    "cagr": "~12% CAGR",
    "players": [
      "Tata Trent",
      "Aditya Birla Fashion",
      "Manyavar",
      "TCNS Clothing",
      "V-Mart Retail"
    ],
    "forces": {
      "newEntrants": "High",
      "buyerPower": "High",
      "supplierPower": "Low",
      "substitutes": "High",
      "rivalry": "High"
    },
    "trend": "up",
    "outlook": "Positive",
    "uploadedDoc": "India_Decks_Sector_Report.pdf",
    "uploadedDate": "2024-07-20",
    "valueChain": {
      "inputs": "Agricultural Produce, Packaging Materials, Oils, Fibers & Fragrance Chemicals",
      "operations": "Blending, High-Speed Bottling/Packaging, Quality Assurance, Batch Processing",
      "distribution": "Kirana Store Distribution Network, Modern Trade Supermarkets, Quick-Commerce Dark Stores",
      "endMarkets": "Household Consumers across Tier 1, Tier 2 & Rural Indian Markets",
      "marginDriver": "Premium Brand Products, Direct-to-Consumer (D2C) Margins & Supply Chain Scale",
      "bottleneck": "Raw Material Price Volatility (Palm Oil/Cotton) & Hyperlocal Logistics Costs"
    },
    "regulatoryTimeline": [
      {
        "year": "2017",
        "title": "GST Implementation",
        "detail": "Unified national tax regime eliminating interstate logistics bottlenecks"
      },
      {
        "year": "2020",
        "title": "Atmanirbhar Bharat Push",
        "detail": "Import substitution & localized supply chain mandates"
      },
      {
        "year": "2022",
        "title": "PLI Scheme Expansion",
        "detail": "Sectoral manufacturing incentives for high-value exports"
      },
      {
        "year": "2024+",
        "title": "ESG & Sustainability Norms",
        "detail": "Mandatory BRSR disclosures & green transition targets"
      }
    ],
    "globalBenchmarking": {
      "metricLabel": "Per Capita Consumption / Market Spend ($)",
      "labels": [
        "India",
        "China",
        "Brazil",
        "USA",
        "Global Avg"
      ],
      "values": [
        42,
        145,
        95,
        310,
        120
      ]
    },
    "costStructure": {
      "labels": [
        "Net Revenue",
        "Raw Materials",
        "Employee Cost",
        "Marketing & Dist",
        "EBITDA",
        "D&A",
        "PAT"
      ],
      "values": [
        100,
        52,
        14,
        14,
        20,
        5,
        15
      ]
    },
    "workingCapital": {
      "inventoryDays": 36,
      "receivableDays": 28,
      "payableDays": 42,
      "cashConversionCycle": 22
    },
    "creditProfile": {
      "netDebtToEbitda": "1.4x",
      "creditRating": "AA / Stable",
      "costOfDebt": "7.8%",
      "liquidityBuffer": "Healthy Cash Conversion & Reserves"
    },
    "stockPerformance": {
      "labels": [
        "Q1 23",
        "Q2 23",
        "Q3 23",
        "Q4 23",
        "Q1 24",
        "Q2 24"
      ],
      "sectorIndex": [
        100,
        108,
        120,
        130,
        142,
        158
      ],
      "benchmarkNifty": [
        100,
        105,
        112,
        116,
        122,
        130
      ],
      "return1Yr": "+29.5%",
      "return3Yr": "+72.0%",
      "volatilityBeta": "1.10x"
    },
    "customerSegmentation": {
      "labels": [
        "B2C Urban Consumers",
        "B2C Rural Households",
        "B2B Enterprise Clients"
      ],
      "values": [
        45,
        35,
        20
      ],
      "incomeCohort": "Tier-1 Metros (45%), Tier-2/3 Cities (35%), Rural Markets (20%)"
    },
    "demandSupplyGap": {
      "labels": [
        "2021",
        "2022",
        "2023",
        "2024E",
        "2025F"
      ],
      "installedCapacity": [
        100,
        112,
        126,
        142,
        160
      ],
      "actualDemand": [
        86,
        98,
        114,
        130,
        150
      ],
      "utilizationRate": "82.5% Factory Utilization"
    },
    "swot": {
      "strengths": [
        "Massive domestic demographic dividend & rising disposable income",
        "Established distribution networks spanning urban & rural retail channels"
      ],
      "weaknesses": [
        "Sensitivity to raw material price volatility (agricultural/chemical inputs)",
        "Margin pressure in unorganized traditional trade segments"
      ],
      "opportunities": [
        "Omnichannel digital commerce expansion & premium product adoption",
        "Government PLI schemes driving export manufacturing competitiveness"
      ],
      "threats": [
        "Hyperlocal quick-commerce disruption altering brand loyalty",
        "Global supply chain disruptions & freight rate inflation"
      ]
    },
    "dealTimeline": [
      {
        "date": "Q2 2023",
        "company": "Brand Portfolio Acquisition",
        "value": "$420M",
        "buyer": "Consumer Conglomerate A"
      },
      {
        "date": "Q4 2023",
        "company": "D2C Strategic Stake Buyout",
        "value": "$190M",
        "buyer": "Private Equity Growth Fund"
      },
      {
        "date": "Q1 2024",
        "company": "Manufacturing Asset Deal",
        "value": "$350M",
        "buyer": "Global Industrial Group"
      }
    ],
    "techRadar": {
      "aiIntegration": "Medium",
      "roboticsAutomation": "Medium",
      "d2cOmnichannel": "High",
      "platformEcosystem": "Medium"
    },
    "interviewAngles": [
      "Market Sizing: Estimate the total addressable market (TAM) for premium D2C products in India.",
      "Profitability Case: How can a consumer company optimize trade discounts vs direct channel margins?",
      "M&A Evaluation: What metrics would you assess when acquiring an online-first D2C brand?",
      "Supply Chain: Calculate the cost trade-off between centralized warehousing vs dark stores."
    ],
    "glossary": [
      {
        "term": "D2C",
        "definition": "Direct-to-Consumer channel bypassing traditional distributors."
      },
      {
        "term": "SKU",
        "definition": "Stock Keeping Unit — Individual distinct product item identifier."
      },
      {
        "term": "TAM",
        "definition": "Total Addressable Market — Overall revenue opportunity for a product."
      },
      {
        "term": "LTV/CAC",
        "definition": "Ratio of Customer Lifetime Value to Customer Acquisition Cost."
      }
    ]
  }
];

const DEFAULT_UPLOAD_HISTORY = [
  {
    "id": "doc-1",
    "name": "Industry_Primer_Q3_2024.pdf",
    "date": "2024-07-15",
    "industries": 10,
    "status": "Processed"
  },
  {
    "id": "doc-2",
    "name": "India_Decks_Sector_Report.pdf",
    "date": "2024-07-20",
    "industries": 30,
    "status": "Processed"
  }
];

const PRESET_UPLOADS = [
  {
    "name": "Tech_AI_Frontier_Report_2026.pdf",
    "industries": [
      {
        "id": "genai-llm",
        "name": "GenAI & LLM Infrastructure",
        "sector": "Technology",
        "description": "India's generative AI ecosystem is expanding into sovereign LLMs, GPU cluster hosting, and local language AI models for enterprise deployment.",
        "size": "$14 Billion forecast by 2028",
        "cagr": "~45% CAGR",
        "players": [
          "Sarvam AI",
          "Krutrim",
          "Krutrim Cloud",
          "Tata Communications AI",
          "Reliance Jio Brain"
        ],
        "forces": {
          "newEntrants": "High",
          "buyerPower": "High",
          "supplierPower": "High",
          "substitutes": "Low",
          "rivalry": "High"
        },
        "valueChain": {
          "inputs": "High-Performance H100/A100 GPUs, Training Datasets & Cloud Datacenters",
          "operations": "LLM Pre-training, Fine-tuning, Quantization, Guardrail Engineering & Inference APIs",
          "distribution": "Cloud APIs, Enterprise SaaS Integrations, Developer SDKs & Telco Bundles",
          "endMarkets": "Global Enterprise IT, FinServ Automation, Telecom AI Operations & Consumers",
          "marginDriver": "Proprietary Model Weights IP & API Token Ingestion Volume",
          "bottleneck": "Global GPU Supply Constraints & High Datacenter Power Costs"
        },
        "trend": "up",
        "outlook": "Positive",
        "regulatoryTimeline": [
          {
            "year": "2020",
            "title": "OSP Liberalization",
            "detail": "Simplified IT/ITeS remote working & telecom regulations"
          },
          {
            "year": "2021",
            "title": "Semiconductor Mission",
            "detail": "76,000 Cr PLI for silicon fab & chip packaging units"
          },
          {
            "year": "2023",
            "title": "DPDP Act Enactment",
            "detail": "Digital Personal Data Protection framework compliance"
          },
          {
            "year": "2024+",
            "title": "IndiaAI Mission",
            "detail": "₹10,372 Cr allocated for GPU supercomputing clusters"
          }
        ],
        "globalBenchmarking": {
          "metricLabel": "IT & Software Export Market Share (%)",
          "labels": [
            "India",
            "USA",
            "Ireland",
            "China",
            "Global Avg"
          ],
          "values": [
            56,
            18,
            9,
            7,
            10
          ]
        },
        "costStructure": {
          "labels": [
            "Total Revenue",
            "Employee Cost",
            "Subcontracting",
            "Facility & Cloud",
            "EBITDA",
            "D&A",
            "PAT"
          ],
          "values": [
            100,
            56,
            12,
            8,
            24,
            4,
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
          "netDebtToEbitda": "0.1x (Net Cash Positive)",
          "creditRating": "AAA / Stable",
          "costOfDebt": "6.2%",
          "liquidityBuffer": "$8.5 Billion Net Cash"
        },
        "stockPerformance": {
          "labels": [
            "Q1 23",
            "Q2 23",
            "Q3 23",
            "Q4 23",
            "Q1 24",
            "Q2 24"
          ],
          "sectorIndex": [
            100,
            104,
            110,
            116,
            122,
            134
          ],
          "benchmarkNifty": [
            100,
            105,
            112,
            116,
            122,
            130
          ],
          "return1Yr": "+18.2%",
          "return3Yr": "+46.5%",
          "volatilityBeta": "1.02x (Defensive Growth)"
        },
        "customerSegmentation": {
          "labels": [
            "BFSI (Banking & Finance)",
            "Retail & Consumer",
            "Healthcare & High-Tech"
          ],
          "values": [
            40,
            32,
            28
          ],
          "incomeCohort": "North America (55%), Europe (30%), Rest of World (15%)"
        },
        "demandSupplyGap": {
          "labels": [
            "2021",
            "2022",
            "2023",
            "2024E",
            "2025F"
          ],
          "installedCapacity": [
            100,
            115,
            132,
            150,
            172
          ],
          "actualDemand": [
            96,
            112,
            128,
            146,
            168
          ],
          "utilizationRate": "84.5% Employee Utilization"
        },
        "swot": {
          "strengths": [
            "Unrivaled scale of 5M+ English-speaking engineering talent",
            "High recurring revenue share with Fortune 500 enterprise clients"
          ],
          "weaknesses": [
            "Exposure to US/Europe enterprise IT budget cuts",
            "High senior tech talent attrition during tech expansion cycles"
          ],
          "opportunities": [
            "Generative AI migration, cloud transformation & cyber defense",
            "India Semiconductor Mission fab & chip design incentives"
          ],
          "threats": [
            "Automated AI code generation compressing billable hours",
            "Protectionist visa policies & currency volatility"
          ]
        },
        "dealTimeline": [
          {
            "date": "Q1 2023",
            "company": "Infosys InSemi Silicon Acquisition",
            "value": "$340M",
            "buyer": "Infosys Tech"
          },
          {
            "date": "Q3 2023",
            "company": "Freshworks SaaS Buyback",
            "value": "$500M",
            "buyer": "Public Shareholder Buyback"
          },
          {
            "date": "Q1 2024",
            "company": "GenAI Enterprise Startup Deal",
            "value": "$180M",
            "buyer": "Tech Mahindra VC"
          }
        ],
        "techRadar": {
          "aiIntegration": "High",
          "roboticsAutomation": "High",
          "d2cOmnichannel": "High",
          "platformEcosystem": "High"
        },
        "interviewAngles": [
          "Market Sizing: Estimate the revenue impact of GenAI adoption on Indian IT services by 2028.",
          "Profitability Case: How does a SaaS company optimize Customer Acquisition Cost (CAC) vs LTV?",
          "M&A Due Diligence: Evaluate an acquisition target in cloud-native application modernization.",
          "Operational Metric: Explain how Employee Attrition & Utilization Rate drive operating margins."
        ],
        "glossary": [
          {
            "term": "TCV",
            "definition": "Total Contract Value — Total revenue from signed enterprise deals."
          },
          {
            "term": "ARR",
            "definition": "Annual Recurring Revenue — Key SaaS subscription metric."
          },
          {
            "term": "Utilization",
            "definition": "Percentage of billable employee time assigned to client projects."
          },
          {
            "term": "FTE",
            "definition": "Full-Time Equivalent — Standard measure of project staffing."
          }
        ]
      },
      {
        "id": "autonomous-robotics",
        "name": "Industrial Robotics & Automation",
        "sector": "Manufacturing",
        "description": "Robotics and smart factory automation adoption in Indian automotive and electronics assembly lines is accelerating post-PLI incentives.",
        "size": "$6.5 Billion market",
        "cagr": "~22% CAGR",
        "players": [
          "Addverb Technologies",
          "Systemantic",
          "Hi-Tech Robotic Systemz",
          "TAL Manufacturing"
        ],
        "forces": {
          "newEntrants": "Medium",
          "buyerPower": "Medium",
          "supplierPower": "High",
          "substitutes": "Low",
          "rivalry": "Medium"
        },
        "valueChain": {
          "inputs": "Servo Motors, Precision Actuators, Vision Sensors & Industrial Microcontrollers",
          "operations": "Arm Fabrication, Motion Control Programming, PLC Integration & Safety Auditing",
          "distribution": "System Integrators, Direct Industrial B2B Sales & Turnkey Factory Contracts",
          "endMarkets": "Automotive Assembly Plants, Electronics Contract Manufacturers & Warehouses",
          "marginDriver": "Custom Warehouse Fleet Software & Turnkey Factory Automation Contracts",
          "bottleneck": "Imported High-Precision Actuator & Servo Motor Components"
        },
        "trend": "up",
        "outlook": "Positive",
        "regulatoryTimeline": [
          {
            "year": "2017",
            "title": "GST Implementation",
            "detail": "Unified national tax regime eliminating interstate logistics bottlenecks"
          },
          {
            "year": "2020",
            "title": "Atmanirbhar Bharat Push",
            "detail": "Import substitution & localized supply chain mandates"
          },
          {
            "year": "2022",
            "title": "PLI Scheme Expansion",
            "detail": "Sectoral manufacturing incentives for high-value exports"
          },
          {
            "year": "2024+",
            "title": "ESG & Sustainability Norms",
            "detail": "Mandatory BRSR disclosures & green transition targets"
          }
        ],
        "globalBenchmarking": {
          "metricLabel": "Per Capita Consumption / Market Spend ($)",
          "labels": [
            "India",
            "China",
            "Brazil",
            "USA",
            "Global Avg"
          ],
          "values": [
            42,
            145,
            95,
            310,
            120
          ]
        },
        "costStructure": {
          "labels": [
            "Net Revenue",
            "Raw Materials",
            "Employee Cost",
            "Marketing & Dist",
            "EBITDA",
            "D&A",
            "PAT"
          ],
          "values": [
            100,
            52,
            14,
            14,
            20,
            5,
            15
          ]
        },
        "workingCapital": {
          "inventoryDays": 36,
          "receivableDays": 28,
          "payableDays": 42,
          "cashConversionCycle": 22
        },
        "creditProfile": {
          "netDebtToEbitda": "1.4x",
          "creditRating": "AA / Stable",
          "costOfDebt": "7.8%",
          "liquidityBuffer": "Healthy Cash Conversion & Reserves"
        },
        "stockPerformance": {
          "labels": [
            "Q1 23",
            "Q2 23",
            "Q3 23",
            "Q4 23",
            "Q1 24",
            "Q2 24"
          ],
          "sectorIndex": [
            100,
            108,
            120,
            130,
            142,
            158
          ],
          "benchmarkNifty": [
            100,
            105,
            112,
            116,
            122,
            130
          ],
          "return1Yr": "+29.5%",
          "return3Yr": "+72.0%",
          "volatilityBeta": "1.10x"
        },
        "customerSegmentation": {
          "labels": [
            "B2C Urban Consumers",
            "B2C Rural Households",
            "B2B Enterprise Clients"
          ],
          "values": [
            45,
            35,
            20
          ],
          "incomeCohort": "Tier-1 Metros (45%), Tier-2/3 Cities (35%), Rural Markets (20%)"
        },
        "demandSupplyGap": {
          "labels": [
            "2021",
            "2022",
            "2023",
            "2024E",
            "2025F"
          ],
          "installedCapacity": [
            100,
            112,
            126,
            142,
            160
          ],
          "actualDemand": [
            86,
            98,
            114,
            130,
            150
          ],
          "utilizationRate": "82.5% Factory Utilization"
        },
        "swot": {
          "strengths": [
            "Massive domestic demographic dividend & rising disposable income",
            "Established distribution networks spanning urban & rural retail channels"
          ],
          "weaknesses": [
            "Sensitivity to raw material price volatility (agricultural/chemical inputs)",
            "Margin pressure in unorganized traditional trade segments"
          ],
          "opportunities": [
            "Omnichannel digital commerce expansion & premium product adoption",
            "Government PLI schemes driving export manufacturing competitiveness"
          ],
          "threats": [
            "Hyperlocal quick-commerce disruption altering brand loyalty",
            "Global supply chain disruptions & freight rate inflation"
          ]
        },
        "dealTimeline": [
          {
            "date": "Q2 2023",
            "company": "Brand Portfolio Acquisition",
            "value": "$420M",
            "buyer": "Consumer Conglomerate A"
          },
          {
            "date": "Q4 2023",
            "company": "D2C Strategic Stake Buyout",
            "value": "$190M",
            "buyer": "Private Equity Growth Fund"
          },
          {
            "date": "Q1 2024",
            "company": "Manufacturing Asset Deal",
            "value": "$350M",
            "buyer": "Global Industrial Group"
          }
        ],
        "techRadar": {
          "aiIntegration": "Medium",
          "roboticsAutomation": "Medium",
          "d2cOmnichannel": "High",
          "platformEcosystem": "Medium"
        },
        "interviewAngles": [
          "Market Sizing: Estimate the total addressable market (TAM) for premium D2C products in India.",
          "Profitability Case: How can a consumer company optimize trade discounts vs direct channel margins?",
          "M&A Evaluation: What metrics would you assess when acquiring an online-first D2C brand?",
          "Supply Chain: Calculate the cost trade-off between centralized warehousing vs dark stores."
        ],
        "glossary": [
          {
            "term": "D2C",
            "definition": "Direct-to-Consumer channel bypassing traditional distributors."
          },
          {
            "term": "SKU",
            "definition": "Stock Keeping Unit — Individual distinct product item identifier."
          },
          {
            "term": "TAM",
            "definition": "Total Addressable Market — Overall revenue opportunity for a product."
          },
          {
            "term": "LTV/CAC",
            "definition": "Ratio of Customer Lifetime Value to Customer Acquisition Cost."
          }
        ]
      },
      {
        "id": "quantum-tech",
        "name": "Quantum Computing Solutions",
        "sector": "Technology",
        "description": "National Quantum Mission backing deep tech startups building quantum cryptography, sensing, and hardware simulation for banking & defense.",
        "size": "$1.2 Billion by 2030",
        "cagr": "~35% CAGR",
        "players": [
          "QNu Labs",
          "Boson Q Psi",
          "QuNu Technologies",
          "TCS Quantum Lab"
        ],
        "forces": {
          "newEntrants": "Low",
          "buyerPower": "Low",
          "supplierPower": "High",
          "substitutes": "Low",
          "rivalry": "Low"
        },
        "valueChain": {
          "inputs": "Cryogenic Dilution Refrigerators, Single-Photon Sources & Quantum Optics",
          "operations": "Qubit Calibration, Quantum Key Distribution (QKD) & Quantum Software Algorithms",
          "distribution": "Government Defense Contracts, Cloud Quantum Simulators & BFSI Security Trials",
          "endMarkets": "Defense Communication Networks, Strategic Banking Encryption & Pharma Research",
          "marginDriver": "Patented Quantum Key Distribution Hardware & Specialized Algorithm IP",
          "bottleneck": "Cryogenic Hardware Costs & Quantum Error Rate Tolerances"
        },
        "trend": "up",
        "outlook": "Positive",
        "regulatoryTimeline": [
          {
            "year": "2020",
            "title": "OSP Liberalization",
            "detail": "Simplified IT/ITeS remote working & telecom regulations"
          },
          {
            "year": "2021",
            "title": "Semiconductor Mission",
            "detail": "76,000 Cr PLI for silicon fab & chip packaging units"
          },
          {
            "year": "2023",
            "title": "DPDP Act Enactment",
            "detail": "Digital Personal Data Protection framework compliance"
          },
          {
            "year": "2024+",
            "title": "IndiaAI Mission",
            "detail": "₹10,372 Cr allocated for GPU supercomputing clusters"
          }
        ],
        "globalBenchmarking": {
          "metricLabel": "IT & Software Export Market Share (%)",
          "labels": [
            "India",
            "USA",
            "Ireland",
            "China",
            "Global Avg"
          ],
          "values": [
            56,
            18,
            9,
            7,
            10
          ]
        },
        "costStructure": {
          "labels": [
            "Total Revenue",
            "Employee Cost",
            "Subcontracting",
            "Facility & Cloud",
            "EBITDA",
            "D&A",
            "PAT"
          ],
          "values": [
            100,
            56,
            12,
            8,
            24,
            4,
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
          "netDebtToEbitda": "0.1x (Net Cash Positive)",
          "creditRating": "AAA / Stable",
          "costOfDebt": "6.2%",
          "liquidityBuffer": "$8.5 Billion Net Cash"
        },
        "stockPerformance": {
          "labels": [
            "Q1 23",
            "Q2 23",
            "Q3 23",
            "Q4 23",
            "Q1 24",
            "Q2 24"
          ],
          "sectorIndex": [
            100,
            104,
            110,
            116,
            122,
            134
          ],
          "benchmarkNifty": [
            100,
            105,
            112,
            116,
            122,
            130
          ],
          "return1Yr": "+18.2%",
          "return3Yr": "+46.5%",
          "volatilityBeta": "1.02x (Defensive Growth)"
        },
        "customerSegmentation": {
          "labels": [
            "BFSI (Banking & Finance)",
            "Retail & Consumer",
            "Healthcare & High-Tech"
          ],
          "values": [
            40,
            32,
            28
          ],
          "incomeCohort": "North America (55%), Europe (30%), Rest of World (15%)"
        },
        "demandSupplyGap": {
          "labels": [
            "2021",
            "2022",
            "2023",
            "2024E",
            "2025F"
          ],
          "installedCapacity": [
            100,
            115,
            132,
            150,
            172
          ],
          "actualDemand": [
            96,
            112,
            128,
            146,
            168
          ],
          "utilizationRate": "84.5% Employee Utilization"
        },
        "swot": {
          "strengths": [
            "Unrivaled scale of 5M+ English-speaking engineering talent",
            "High recurring revenue share with Fortune 500 enterprise clients"
          ],
          "weaknesses": [
            "Exposure to US/Europe enterprise IT budget cuts",
            "High senior tech talent attrition during tech expansion cycles"
          ],
          "opportunities": [
            "Generative AI migration, cloud transformation & cyber defense",
            "India Semiconductor Mission fab & chip design incentives"
          ],
          "threats": [
            "Automated AI code generation compressing billable hours",
            "Protectionist visa policies & currency volatility"
          ]
        },
        "dealTimeline": [
          {
            "date": "Q1 2023",
            "company": "Infosys InSemi Silicon Acquisition",
            "value": "$340M",
            "buyer": "Infosys Tech"
          },
          {
            "date": "Q3 2023",
            "company": "Freshworks SaaS Buyback",
            "value": "$500M",
            "buyer": "Public Shareholder Buyback"
          },
          {
            "date": "Q1 2024",
            "company": "GenAI Enterprise Startup Deal",
            "value": "$180M",
            "buyer": "Tech Mahindra VC"
          }
        ],
        "techRadar": {
          "aiIntegration": "High",
          "roboticsAutomation": "High",
          "d2cOmnichannel": "High",
          "platformEcosystem": "High"
        },
        "interviewAngles": [
          "Market Sizing: Estimate the revenue impact of GenAI adoption on Indian IT services by 2028.",
          "Profitability Case: How does a SaaS company optimize Customer Acquisition Cost (CAC) vs LTV?",
          "M&A Due Diligence: Evaluate an acquisition target in cloud-native application modernization.",
          "Operational Metric: Explain how Employee Attrition & Utilization Rate drive operating margins."
        ],
        "glossary": [
          {
            "term": "TCV",
            "definition": "Total Contract Value — Total revenue from signed enterprise deals."
          },
          {
            "term": "ARR",
            "definition": "Annual Recurring Revenue — Key SaaS subscription metric."
          },
          {
            "term": "Utilization",
            "definition": "Percentage of billable employee time assigned to client projects."
          },
          {
            "term": "FTE",
            "definition": "Full-Time Equivalent — Standard measure of project staffing."
          }
        ]
      }
    ]
  },
  {
    "name": "Green_CleanTech_Energy_Brief.pdf",
    "industries": [
      {
        "id": "battery-gigafactories",
        "name": "Battery Energy Storage & Gigafactories",
        "sector": "Energy",
        "description": "Lithium-ion cell manufacturing and grid-scale battery storage infrastructure expanding under ACC PLI scheme to support 24x7 renewables.",
        "size": "$18 Billion requirement by 2030",
        "cagr": "~38% CAGR",
        "players": [
          "Ola Cell Technologies",
          "Exide Energy",
          "Amara Raja",
          "Reliance Energy Storage",
          "Lucas TVS"
        ],
        "forces": {
          "newEntrants": "Low",
          "buyerPower": "Medium",
          "supplierPower": "High",
          "substitutes": "Medium",
          "rivalry": "High"
        },
        "valueChain": {
          "inputs": "Lithium, Nickel, Cobalt, Cathode Active Materials (CAM) & Electrolytes",
          "operations": "Slurry Mixing, Electrode Coating, Cell Stacking & Battery Management System (BMS) Assembly",
          "distribution": "Direct Supply Agreements to EV OEMs, BESS Grid Contractors & Telecom Towers",
          "endMarkets": "EV Two-Wheelers/Cars, Renewable Microgrids & Data Center Backup Power",
          "marginDriver": "Cell Energy Density IP & Vertical Integration from Refining to Pack Assembly",
          "bottleneck": "Raw Mineral Lithium Refining & Cathode Material Import Reliance"
        },
        "trend": "up",
        "outlook": "Positive",
        "regulatoryTimeline": [
          {
            "year": "2017",
            "title": "GST Implementation",
            "detail": "Unified national tax regime eliminating interstate logistics bottlenecks"
          },
          {
            "year": "2020",
            "title": "Atmanirbhar Bharat Push",
            "detail": "Import substitution & localized supply chain mandates"
          },
          {
            "year": "2022",
            "title": "PLI Scheme Expansion",
            "detail": "Sectoral manufacturing incentives for high-value exports"
          },
          {
            "year": "2024+",
            "title": "ESG & Sustainability Norms",
            "detail": "Mandatory BRSR disclosures & green transition targets"
          }
        ],
        "globalBenchmarking": {
          "metricLabel": "Per Capita Consumption / Market Spend ($)",
          "labels": [
            "India",
            "China",
            "Brazil",
            "USA",
            "Global Avg"
          ],
          "values": [
            42,
            145,
            95,
            310,
            120
          ]
        },
        "costStructure": {
          "labels": [
            "Net Revenue",
            "Raw Materials",
            "Employee Cost",
            "Marketing & Dist",
            "EBITDA",
            "D&A",
            "PAT"
          ],
          "values": [
            100,
            52,
            14,
            14,
            20,
            5,
            15
          ]
        },
        "workingCapital": {
          "inventoryDays": 36,
          "receivableDays": 28,
          "payableDays": 42,
          "cashConversionCycle": 22
        },
        "creditProfile": {
          "netDebtToEbitda": "1.4x",
          "creditRating": "AA / Stable",
          "costOfDebt": "7.8%",
          "liquidityBuffer": "Healthy Cash Conversion & Reserves"
        },
        "stockPerformance": {
          "labels": [
            "Q1 23",
            "Q2 23",
            "Q3 23",
            "Q4 23",
            "Q1 24",
            "Q2 24"
          ],
          "sectorIndex": [
            100,
            108,
            120,
            130,
            142,
            158
          ],
          "benchmarkNifty": [
            100,
            105,
            112,
            116,
            122,
            130
          ],
          "return1Yr": "+29.5%",
          "return3Yr": "+72.0%",
          "volatilityBeta": "1.10x"
        },
        "customerSegmentation": {
          "labels": [
            "B2C Urban Consumers",
            "B2C Rural Households",
            "B2B Enterprise Clients"
          ],
          "values": [
            45,
            35,
            20
          ],
          "incomeCohort": "Tier-1 Metros (45%), Tier-2/3 Cities (35%), Rural Markets (20%)"
        },
        "demandSupplyGap": {
          "labels": [
            "2021",
            "2022",
            "2023",
            "2024E",
            "2025F"
          ],
          "installedCapacity": [
            100,
            112,
            126,
            142,
            160
          ],
          "actualDemand": [
            86,
            98,
            114,
            130,
            150
          ],
          "utilizationRate": "82.5% Factory Utilization"
        },
        "swot": {
          "strengths": [
            "Massive domestic demographic dividend & rising disposable income",
            "Established distribution networks spanning urban & rural retail channels"
          ],
          "weaknesses": [
            "Sensitivity to raw material price volatility (agricultural/chemical inputs)",
            "Margin pressure in unorganized traditional trade segments"
          ],
          "opportunities": [
            "Omnichannel digital commerce expansion & premium product adoption",
            "Government PLI schemes driving export manufacturing competitiveness"
          ],
          "threats": [
            "Hyperlocal quick-commerce disruption altering brand loyalty",
            "Global supply chain disruptions & freight rate inflation"
          ]
        },
        "dealTimeline": [
          {
            "date": "Q2 2023",
            "company": "Brand Portfolio Acquisition",
            "value": "$420M",
            "buyer": "Consumer Conglomerate A"
          },
          {
            "date": "Q4 2023",
            "company": "D2C Strategic Stake Buyout",
            "value": "$190M",
            "buyer": "Private Equity Growth Fund"
          },
          {
            "date": "Q1 2024",
            "company": "Manufacturing Asset Deal",
            "value": "$350M",
            "buyer": "Global Industrial Group"
          }
        ],
        "techRadar": {
          "aiIntegration": "Medium",
          "roboticsAutomation": "Medium",
          "d2cOmnichannel": "High",
          "platformEcosystem": "Medium"
        },
        "interviewAngles": [
          "Market Sizing: Estimate the total addressable market (TAM) for premium D2C products in India.",
          "Profitability Case: How can a consumer company optimize trade discounts vs direct channel margins?",
          "M&A Evaluation: What metrics would you assess when acquiring an online-first D2C brand?",
          "Supply Chain: Calculate the cost trade-off between centralized warehousing vs dark stores."
        ],
        "glossary": [
          {
            "term": "D2C",
            "definition": "Direct-to-Consumer channel bypassing traditional distributors."
          },
          {
            "term": "SKU",
            "definition": "Stock Keeping Unit — Individual distinct product item identifier."
          },
          {
            "term": "TAM",
            "definition": "Total Addressable Market — Overall revenue opportunity for a product."
          },
          {
            "term": "LTV/CAC",
            "definition": "Ratio of Customer Lifetime Value to Customer Acquisition Cost."
          }
        ]
      },
      {
        "id": "green-hydrogen",
        "name": "Green Hydrogen & Ammonia",
        "sector": "Energy",
        "description": "National Green Hydrogen Mission targeting 5 MMT annual production by 2030 to decarbonize steel, fertilizers, and heavy transport.",
        "size": "$8 Billion initial capital commit",
        "cagr": "~50% CAGR",
        "players": [
          "L&T Electrolysers",
          "Adani New Industries",
          "RIL Green Hydrogen",
          "ACME Group",
          "Greenko"
        ],
        "forces": {
          "newEntrants": "Low",
          "buyerPower": "Low",
          "supplierPower": "High",
          "substitutes": "Low",
          "rivalry": "Low"
        },
        "valueChain": {
          "inputs": "Solar/Wind Renewable Power, De-mineralized Water & PEM/Alkaline Electrolysers",
          "operations": "Electrolysis Water Splitting, Hydrogen Compression, Liquefaction & Ammonia Synthesis",
          "distribution": "Specialized Cryogenic Pipelines, Ammonia Tankers & Port Bunkering Terminals",
          "endMarkets": "Fertilizer Refineries, Green Steel Mills, Heavy Shipping & Export Off-takers",
          "marginDriver": "Ultra-low Renewable Tariff Integration & Scale Electrolyser Fabrication",
          "bottleneck": "High Electrolyser Capex & Storage/Pipeline Compression Safety Standards"
        },
        "trend": "up",
        "outlook": "Positive",
        "regulatoryTimeline": [
          {
            "year": "2017",
            "title": "GST Implementation",
            "detail": "Unified national tax regime eliminating interstate logistics bottlenecks"
          },
          {
            "year": "2020",
            "title": "Atmanirbhar Bharat Push",
            "detail": "Import substitution & localized supply chain mandates"
          },
          {
            "year": "2022",
            "title": "PLI Scheme Expansion",
            "detail": "Sectoral manufacturing incentives for high-value exports"
          },
          {
            "year": "2024+",
            "title": "ESG & Sustainability Norms",
            "detail": "Mandatory BRSR disclosures & green transition targets"
          }
        ],
        "globalBenchmarking": {
          "metricLabel": "Per Capita Consumption / Market Spend ($)",
          "labels": [
            "India",
            "China",
            "Brazil",
            "USA",
            "Global Avg"
          ],
          "values": [
            42,
            145,
            95,
            310,
            120
          ]
        },
        "costStructure": {
          "labels": [
            "Net Revenue",
            "Raw Materials",
            "Employee Cost",
            "Marketing & Dist",
            "EBITDA",
            "D&A",
            "PAT"
          ],
          "values": [
            100,
            52,
            14,
            14,
            20,
            5,
            15
          ]
        },
        "workingCapital": {
          "inventoryDays": 36,
          "receivableDays": 28,
          "payableDays": 42,
          "cashConversionCycle": 22
        },
        "creditProfile": {
          "netDebtToEbitda": "1.4x",
          "creditRating": "AA / Stable",
          "costOfDebt": "7.8%",
          "liquidityBuffer": "Healthy Cash Conversion & Reserves"
        },
        "stockPerformance": {
          "labels": [
            "Q1 23",
            "Q2 23",
            "Q3 23",
            "Q4 23",
            "Q1 24",
            "Q2 24"
          ],
          "sectorIndex": [
            100,
            108,
            120,
            130,
            142,
            158
          ],
          "benchmarkNifty": [
            100,
            105,
            112,
            116,
            122,
            130
          ],
          "return1Yr": "+29.5%",
          "return3Yr": "+72.0%",
          "volatilityBeta": "1.10x"
        },
        "customerSegmentation": {
          "labels": [
            "B2C Urban Consumers",
            "B2C Rural Households",
            "B2B Enterprise Clients"
          ],
          "values": [
            45,
            35,
            20
          ],
          "incomeCohort": "Tier-1 Metros (45%), Tier-2/3 Cities (35%), Rural Markets (20%)"
        },
        "demandSupplyGap": {
          "labels": [
            "2021",
            "2022",
            "2023",
            "2024E",
            "2025F"
          ],
          "installedCapacity": [
            100,
            112,
            126,
            142,
            160
          ],
          "actualDemand": [
            86,
            98,
            114,
            130,
            150
          ],
          "utilizationRate": "82.5% Factory Utilization"
        },
        "swot": {
          "strengths": [
            "Massive domestic demographic dividend & rising disposable income",
            "Established distribution networks spanning urban & rural retail channels"
          ],
          "weaknesses": [
            "Sensitivity to raw material price volatility (agricultural/chemical inputs)",
            "Margin pressure in unorganized traditional trade segments"
          ],
          "opportunities": [
            "Omnichannel digital commerce expansion & premium product adoption",
            "Government PLI schemes driving export manufacturing competitiveness"
          ],
          "threats": [
            "Hyperlocal quick-commerce disruption altering brand loyalty",
            "Global supply chain disruptions & freight rate inflation"
          ]
        },
        "dealTimeline": [
          {
            "date": "Q2 2023",
            "company": "Brand Portfolio Acquisition",
            "value": "$420M",
            "buyer": "Consumer Conglomerate A"
          },
          {
            "date": "Q4 2023",
            "company": "D2C Strategic Stake Buyout",
            "value": "$190M",
            "buyer": "Private Equity Growth Fund"
          },
          {
            "date": "Q1 2024",
            "company": "Manufacturing Asset Deal",
            "value": "$350M",
            "buyer": "Global Industrial Group"
          }
        ],
        "techRadar": {
          "aiIntegration": "Medium",
          "roboticsAutomation": "Medium",
          "d2cOmnichannel": "High",
          "platformEcosystem": "Medium"
        },
        "interviewAngles": [
          "Market Sizing: Estimate the total addressable market (TAM) for premium D2C products in India.",
          "Profitability Case: How can a consumer company optimize trade discounts vs direct channel margins?",
          "M&A Evaluation: What metrics would you assess when acquiring an online-first D2C brand?",
          "Supply Chain: Calculate the cost trade-off between centralized warehousing vs dark stores."
        ],
        "glossary": [
          {
            "term": "D2C",
            "definition": "Direct-to-Consumer channel bypassing traditional distributors."
          },
          {
            "term": "SKU",
            "definition": "Stock Keeping Unit — Individual distinct product item identifier."
          },
          {
            "term": "TAM",
            "definition": "Total Addressable Market — Overall revenue opportunity for a product."
          },
          {
            "term": "LTV/CAC",
            "definition": "Ratio of Customer Lifetime Value to Customer Acquisition Cost."
          }
        ]
      }
    ]
  },
  {
    "name": "D2C_Hyperlocal_Consumer_Pulse.pdf",
    "industries": [
      {
        "id": "d2c-ecosystem",
        "name": "D2C Brands & Digital Commerce",
        "sector": "Consumer",
        "description": "Digital-first consumer brands scaling across beauty, personal care, apparel, and healthy foods, backed by omni-channel expansion.",
        "size": "$100 Billion market by 2027",
        "cagr": "~27% CAGR",
        "players": [
          "Mamaearth",
          "Sugar Cosmetics",
          "Boat",
          "Licious",
          "Wakefit"
        ],
        "forces": {
          "newEntrants": "High",
          "buyerPower": "High",
          "supplierPower": "Low",
          "substitutes": "High",
          "rivalry": "High"
        },
        "valueChain": {
          "inputs": "Contract Formulation Manufacturers, Eco-Packaging & Performance Marketing Ads",
          "operations": "Product R&D, Brand Storytelling, E-commerce Order Management & Inventory Fulfillment",
          "distribution": "Brand D2C Websites, Marketplaces (Amazon/Flipkart), Quick Commerce & Retail Stores",
          "endMarkets": "Gen-Z & Millennial Consumers across Metros & Tier 2/3 Cities",
          "marginDriver": "Repeat Customer Lifetime Value (LTV) & High-margin Omni-channel Expansion",
          "bottleneck": "Rising Performance Marketing Customer Acquisition Costs (CAC)"
        },
        "trend": "up",
        "outlook": "Positive",
        "regulatoryTimeline": [
          {
            "year": "2017",
            "title": "GST Implementation",
            "detail": "Unified national tax regime eliminating interstate logistics bottlenecks"
          },
          {
            "year": "2020",
            "title": "Atmanirbhar Bharat Push",
            "detail": "Import substitution & localized supply chain mandates"
          },
          {
            "year": "2022",
            "title": "PLI Scheme Expansion",
            "detail": "Sectoral manufacturing incentives for high-value exports"
          },
          {
            "year": "2024+",
            "title": "ESG & Sustainability Norms",
            "detail": "Mandatory BRSR disclosures & green transition targets"
          }
        ],
        "globalBenchmarking": {
          "metricLabel": "Per Capita Consumption / Market Spend ($)",
          "labels": [
            "India",
            "China",
            "Brazil",
            "USA",
            "Global Avg"
          ],
          "values": [
            42,
            145,
            95,
            310,
            120
          ]
        },
        "costStructure": {
          "labels": [
            "Net Revenue",
            "Raw Materials",
            "Employee Cost",
            "Marketing & Dist",
            "EBITDA",
            "D&A",
            "PAT"
          ],
          "values": [
            100,
            52,
            14,
            14,
            20,
            5,
            15
          ]
        },
        "workingCapital": {
          "inventoryDays": 36,
          "receivableDays": 28,
          "payableDays": 42,
          "cashConversionCycle": 22
        },
        "creditProfile": {
          "netDebtToEbitda": "1.4x",
          "creditRating": "AA / Stable",
          "costOfDebt": "7.8%",
          "liquidityBuffer": "Healthy Cash Conversion & Reserves"
        },
        "stockPerformance": {
          "labels": [
            "Q1 23",
            "Q2 23",
            "Q3 23",
            "Q4 23",
            "Q1 24",
            "Q2 24"
          ],
          "sectorIndex": [
            100,
            108,
            120,
            130,
            142,
            158
          ],
          "benchmarkNifty": [
            100,
            105,
            112,
            116,
            122,
            130
          ],
          "return1Yr": "+29.5%",
          "return3Yr": "+72.0%",
          "volatilityBeta": "1.10x"
        },
        "customerSegmentation": {
          "labels": [
            "B2C Urban Consumers",
            "B2C Rural Households",
            "B2B Enterprise Clients"
          ],
          "values": [
            45,
            35,
            20
          ],
          "incomeCohort": "Tier-1 Metros (45%), Tier-2/3 Cities (35%), Rural Markets (20%)"
        },
        "demandSupplyGap": {
          "labels": [
            "2021",
            "2022",
            "2023",
            "2024E",
            "2025F"
          ],
          "installedCapacity": [
            100,
            112,
            126,
            142,
            160
          ],
          "actualDemand": [
            86,
            98,
            114,
            130,
            150
          ],
          "utilizationRate": "82.5% Factory Utilization"
        },
        "swot": {
          "strengths": [
            "Massive domestic demographic dividend & rising disposable income",
            "Established distribution networks spanning urban & rural retail channels"
          ],
          "weaknesses": [
            "Sensitivity to raw material price volatility (agricultural/chemical inputs)",
            "Margin pressure in unorganized traditional trade segments"
          ],
          "opportunities": [
            "Omnichannel digital commerce expansion & premium product adoption",
            "Government PLI schemes driving export manufacturing competitiveness"
          ],
          "threats": [
            "Hyperlocal quick-commerce disruption altering brand loyalty",
            "Global supply chain disruptions & freight rate inflation"
          ]
        },
        "dealTimeline": [
          {
            "date": "Q2 2023",
            "company": "Brand Portfolio Acquisition",
            "value": "$420M",
            "buyer": "Consumer Conglomerate A"
          },
          {
            "date": "Q4 2023",
            "company": "D2C Strategic Stake Buyout",
            "value": "$190M",
            "buyer": "Private Equity Growth Fund"
          },
          {
            "date": "Q1 2024",
            "company": "Manufacturing Asset Deal",
            "value": "$350M",
            "buyer": "Global Industrial Group"
          }
        ],
        "techRadar": {
          "aiIntegration": "Medium",
          "roboticsAutomation": "Medium",
          "d2cOmnichannel": "High",
          "platformEcosystem": "Medium"
        },
        "interviewAngles": [
          "Market Sizing: Estimate the total addressable market (TAM) for premium D2C products in India.",
          "Profitability Case: How can a consumer company optimize trade discounts vs direct channel margins?",
          "M&A Evaluation: What metrics would you assess when acquiring an online-first D2C brand?",
          "Supply Chain: Calculate the cost trade-off between centralized warehousing vs dark stores."
        ],
        "glossary": [
          {
            "term": "D2C",
            "definition": "Direct-to-Consumer channel bypassing traditional distributors."
          },
          {
            "term": "SKU",
            "definition": "Stock Keeping Unit — Individual distinct product item identifier."
          },
          {
            "term": "TAM",
            "definition": "Total Addressable Market — Overall revenue opportunity for a product."
          },
          {
            "term": "LTV/CAC",
            "definition": "Ratio of Customer Lifetime Value to Customer Acquisition Cost."
          }
        ]
      }
    ]
  }
];

const SECTOR_COLORS = {
  "Financial Services": "#2563eb",
  "Automotive": "#0891b2",
  "Transportation & Logistics": "#7c3aed",
  "Technology": "#059669",
  "Healthcare": "#d97706",
  "Infrastructure": "#dc2626",
  "Manufacturing": "#db2777",
  "Consumer": "#ea580c",
  "Energy": "#65a30d",
  "Government & Defense": "#4f46e5",
  "Agriculture": "#0d9488"
};
