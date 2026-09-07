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
    "I joined an already live **Chrome extension** on the Chrome Web Store and kept building the front end: bulk actions, custom forms, table enhancements, and workflow shortcuts injected into a government portal built with ASP.NET and jQuery. The codebase I worked on has **100+ components** mounted across **50+ page-specific content script bundles**.",
    "The front end follows a three-layer injection model. **Content scripts** observe the host DOM and mount components into injected containers. **Application islands** render each feature as a self-contained instance sharing global state. An **injected page script** runs in the page's JavaScript context to read host state and communicate back over **`window.postMessage`**.",
  ],
  sections: [
    {
      paragraphs: [
        "The government portal was not designed for third-party extensions. Pages mix server-rendered HTML, jQuery widgets, and client-rendered islands. Instead of replacing page markup, the extension surgically inserts UI: new table columns, action buttons pulled out of dropdown menus, collapsible search panels. A **`MutationObserver`** reacts when the host re-renders sections asynchronously.",
        "Styling blends with the host application's Bootstrap-based layout so the extension feels native rather than overlaid. Content scripts load dynamically based on the current URL and user authorization. Only bundles relevant to the open page are injected, keeping the footprint minimal elsewhere.",
      ],
    },
    {
      paragraphs: [
        "Content scripts run in an isolated world and cannot access the host page's JavaScript objects. Critical features like template auto-fill and waste record generation depend on data held only in component state or custom form prototypes.",
        "An injected script traverses internal component trees on DOM nodes to extract state, monkey-patches `setValue` on form prototypes to observe changes, and exposes a typed request/response protocol over **`postMessage`**. Content scripts consume this bridge to drive custom forms without scraping the DOM for values that are not rendered as text.",
      ],
    },
    {
      paragraphs: [
        "The extension ships a full component library: configurable data tables with selectable columns, multi-card confirmation modals with inline validation, template editors with autocomplete (**uFuzzy**-powered waste code search), CSV import/export bars (**PapaParse**), onboarding tours (**Driver.js**), and a personalization settings panel.",
        "Users work across multiple portal tabs simultaneously. A store plugin broadcasts mutations through the extension's messaging layer so settings changes (column visibility, PDF merge preference, theme) propagate instantly to every open tab without a page reload.",
      ],
    },
    {
      paragraphs: [
        "Downloading dozens or hundreds of card PDFs requires client-side orchestration: concurrent fetches throttled in batches, per-file retry with progress feedback in a loader overlay, and two output modes: a **ZIP** archive (**JSZip**) or a single merged PDF (**pdf-lib**). Each response is consumed as a binary stream so large batches do not exhaust memory before the download trigger fires.",
        "Multi-step bulk flows (duplicating planned cards, confirming received waste) combine row selection via injected checkboxes, progress overlays during sequential API calls, and status-aware retry when the host API returns intermediate states. The UI reflects partial success with created / confirmed / failed counts throughout long-running batches.",
      ],
    },
    {
      paragraphs: [
        "In production on the Chrome Web Store, the extension has measurably changed how companies work inside the portal. Users have accelerated **over 4.8 million processes** in the official system. Waste record transfers through the plugin grew from **282,057 in 2022** to **562,687 in 2023**, a **99% year-over-year increase**. Based on internal calculations, the automation has saved companies **more than 52,000 hours** of manual work to date.",
      ],
    },
  ],
  closing: [
    "Continuing an existing extension on a live government portal means working with constraints, not against them: extending **content scripts** and **`MutationObserver`** integrations, improving the **`postMessage`** bridge for host state, and shipping client-side **pdf-lib** + **JSZip** orchestration for bulk downloads, all within a production **Chrome MV3** codebase already in daily use.",
  ],
  backHref: "/#doswiadczenie",
  backLabel: "Commercial experience",
};
