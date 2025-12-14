// lib/content.ts

/* =========================
   Brand & Navigation
========================= */

export const brand = {
  name: "Onestep Holdings Corp",
  tagline: "Asset-driven holding company",
};

export const nav = [
  { label: "Asset Portfolio", href: "/#portfolio" },
  { label: "Platforms", href: "/#platforms" },
  { label: "Collaborate", href: "/#collaboration" },
];

/* =========================
   Asset Domains
========================= */

export const assetDomains = [
  {
    title: "Environmental & Chemical Signal Systems",
    desc:
      "Environment-facing chemical signal pathways designed for real-world deployment, regulatory workflows, and instrument integration.",
    bullets: [
      "Water quality and chlorine analysis as anchor measurement domains",
      "Alternative chromogenic pathways emphasizing stability and low background",
      "Designed for manual workflows, analyzers, and instrument OEM integration",
    ],
  },
  {
    title: "Immunoassay & Chromogenic Signal Systems",
    desc:
      "Proprietary chromogenic signal architectures enabling sensitive, stable, and reproducible enzymatic readouts.",
    bullets: [
      "TMB–HRP chromogenic signal generation and background control",
      "Stability-centric formulation for consistency and shelf robustness",
      "Benchmark-ready validation including comparative curves and profiling",
    ],
  },
  {
    title: "Cellular & Imaging Signal Systems",
    desc:
      "Reagents and methods translating cellular structure into interpretable optical signals for research and diagnostics.",
    bullets: [
      "Nucleus staining systems with specificity and co-localization evidence",
      "Cytoskeletal visualization methods (actin-focused workflows)",
      "Optimized for high contrast and biological compatibility",
    ],
  },
];

/* =========================
   Software Platforms (External)
========================= */

export const externalPlatforms = [
  {
    name: "SmartMSDS",
    href: "https://smartmsds.com",
    tagline:
      "Compliance intelligence layer for SDS workflows — structured extraction, QA, and generation-ready pipelines.",
    points: [
      "Structured parsing and normalization of SDS content",
      "QA workflows designed for regulatory and audit-readiness",
      "Built for integration into enterprise compliance systems",
    ],
  },
  {
    name: "Onestep Alpha",
    href: "https://onestepalpha.com",
    tagline:
      "Quantitative signal intelligence platform for biological, chemical, and regulated-technology equities.",
    points: [
      "Institutional-style signal validation and risk filtering",
      "Pattern + scoring engine with reproducible rules",
      "Designed for systematic research and decision support",
    ],
  },
];

/* =========================
   Collaboration Strategy
========================= */

export const collaborationModes = [
  {
    title: "Licensing",
    desc:
      "Upstream signal systems and method-level IP licensed to manufacturers, platform owners, or integrators.",
  },
  {
    title: "Integration & Co-development",
    desc:
      "Joint development of instrument-ready or workflow-integrated solutions with strategic partners.",
  },
  {
    title: "Strategic Investment",
    desc:
      "Selective capital partnerships aligned with long-horizon asset development and platform scaling.",
  },
];

/* =========================
   Validation Notes
========================= */

export const validationNotes = [
  "Validation is presented at the method and system level, not as retail product claims.",
  "Representative figures include sensitivity curves, stability profiling, and specificity checks.",
  "Full validation packages are available under NDA for qualified partners.",
];

/* =========================
   Contact
========================= */

export const contact = {
  headline: "Licensing & Strategic Collaboration",
  desc:
    "We engage with qualified partners interested in licensing, integration, co-development, or strategic investment.",
  email: "business@onestepholdings.com",
};