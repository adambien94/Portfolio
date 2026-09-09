import type { ProjectDetail } from "./types";

export const wastePortalExtensionProject: ProjectDetail = {
  id: "waste-portal-extension",
  name: "Waste portal extension",
  accent: "#6ee7b7",
  stack: [
    "Chrome MV3",
    "Content scripts",
    "Webpack",
    "MutationObserver",
    "postMessage",
    "pdf-lib",
    "JSZip",
    "PapaParse",
    "uFuzzy",
    "Driver.js",
  ],
  headline:
    "A Chrome extension with bulk actions and shortcuts for a government waste portal.",
  intro: [
    "Continued front-end development on a live **Chrome Web Store** extension: bulk actions, custom forms, and workflow shortcuts injected into a government **ASP.NET** / **jQuery** portal.",
    "**100+ components** across **50+ page-specific content script bundles**: content scripts mount UI islands; an injected page script reads host state via **`postMessage`**.",
  ],
  highlight:
    "Users have accelerated **4.8M+ processes** in the official system; waste record transfers grew **99% YoY** (2022→2023), saving an estimated **52,000+ hours** of manual work.",
  sections: [
    {
      title: "DOM Injection on a Host Portal",
      paragraphs: [
        "The portal wasn't built for extensions. **MutationObserver**-driven injection adds table columns, action buttons, and search panels without replacing host markup. Scripts load per URL and authorization so only relevant bundles run; styling matches the host **Bootstrap** layout.",
      ],
    },
    {
      title: "postMessage Bridge to Host State",
      paragraphs: [
        "Content scripts can't access host JS objects. An injected script traverses internal component trees, patches form prototypes to observe changes, and exposes a typed **`postMessage`** protocol to drive auto-fill and record generation without DOM scraping.",
      ],
    },
    {
      title: "Component Library & Cross-Tab Sync",
      paragraphs: [
        "A full component library: configurable tables, validation modals, template editors with **uFuzzy** waste-code search, **PapaParse** CSV import/export, and **Driver.js** onboarding. A store plugin broadcasts settings across open tabs instantly, without a reload.",
      ],
    },
    {
      title: "Bulk PDF Download Orchestration",
      paragraphs: [
        "Batch PDF downloads with throttled concurrent fetches, per-file retry, and progress overlays, output as **ZIP** (**JSZip**) or merged PDF (**pdf-lib**). Multi-step bulk flows (duplicate cards, confirm waste) track partial success with created / confirmed / failed counts.",
      ],
    },
    {
      title: "Production Impact",
      paragraphs: [
        "In daily production use on the Chrome Web Store: **4.8M+ accelerated processes**, waste transfers up from **282K to 563K** year over year, and **52,000+ hours** of manual work eliminated by internal estimates.",
      ],
    },
  ],
  closing: [
    "Production **Chrome MV3** extension: **content scripts**, **`MutationObserver`**, **`postMessage`** host bridge, and client-side **pdf-lib** + **JSZip** bulk orchestration on a live government portal.",
  ],
  backHref: "/#doswiadczenie",
  backLabel: "Commercial experience",
};
