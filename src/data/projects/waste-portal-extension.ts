import type { ProjectDetail } from "./types";

export const wastePortalExtensionProject: ProjectDetail = {
  id: "waste-portal-extension",
  name: "Waste management portal Chrome extension",
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
    "A production Chrome extension that augments Poland's official BDO waste management portal with bulk actions, custom forms, and workflow shortcuts — without modifying the host codebase.",
  intro: [
    "This is a production **Chrome extension** that layers a rich front-end on top of an existing government portal built with ASP.NET, jQuery, and React islands. It adds bulk actions, custom forms, table enhancements, and workflow shortcuts by injecting UI directly into live pages — **100+ components** mounted across **50+ page-specific content script bundles**.",
    "The front-end follows a three-layer injection model: **content scripts** observe the host DOM and mount components into injected containers; **application islands** render each feature as a self-contained instance sharing global state; and an **injected page script** runs in the page's JavaScript context to read host state and communicate back over **`window.postMessage`**.",
  ],
  highlight:
    "Extension users have accelerated the handling of **over 4.8 million processes** in the official BDO system — saving companies **more than 52,000 hours** of manual work to date.",
  sections: [
    {
      paragraphs: [
        "The government portal was not designed for third-party extensions. Pages mix server-rendered HTML, jQuery widgets, and React islands. Rather than replacing page markup, the extension surgically inserts UI — new table columns, action buttons pulled out of dropdown menus, collapsible search panels — using a **`MutationObserver`** to react when the host re-renders sections asynchronously.",
        "Styling blends with the host application's Bootstrap-based layout so the extension feels native rather than overlaid. Content scripts load dynamically based on the current URL and user authorization — only bundles relevant to the open page are injected, keeping the footprint minimal elsewhere.",
      ],
    },
    {
      paragraphs: [
        "Content scripts run in an isolated world and cannot access the host page's JavaScript objects. Critical features — template auto-fill, waste record generation — depend on data held only in component state or custom form prototypes.",
      ],
    },
    {
      paragraphs: [
        "The extension ships a full component library: configurable data tables with selectable columns, multi-card confirmation modals with inline validation, template editors with autocomplete (**uFuzzy**-powered waste code search), CSV import/export bars (**PapaParse**), onboarding tours (**Driver.js**), and a personalization settings panel.",
        "Users work across multiple BDO tabs simultaneously. A store plugin broadcasts mutations through the extension's messaging layer so settings changes — column visibility, PDF merge preference, theme — propagate instantly to every open tab without a page reload.",
      ],
    },
    {
      paragraphs: [
        "Downloading dozens or hundreds of card PDFs requires client-side orchestration: concurrent fetches throttled in batches, per-file retry with progress feedback in a loader overlay, and two output modes — a **ZIP** archive (**JSZip**) or a single merged PDF (**pdf-lib**). Each response is consumed as a binary stream so large batches do not exhaust memory before the download trigger fires.",
        "Multi-step bulk flows — duplicating planned cards, confirming received waste — combine row selection via injected checkboxes, progress overlays during sequential API calls, and status-aware retry when the host API returns intermediate states. The UI reflects partial success with created / confirmed / failed counts throughout long-running batches.",
      ],
    },
    {
      paragraphs: [
        "In production on the Chrome Web Store, the extension has measurably changed how companies work inside BDO. Users have accelerated **over 4.8 million processes** in the official system. Waste record transfers through the plugin grew from **282,057 in 2022** to **562,687 in 2023** — a **99% year-over-year increase**. Based on internal calculations, the automation has saved companies **more than 52,000 hours** of manual work to date.",
      ],
    },
  ],
  closing: [
    "Building on someone else's live application means working with constraints, not against them: **content scripts** and **`MutationObserver`** for surgical DOM integration, a **`postMessage`** bridge for host state, and client-side **pdf-lib** + **JSZip** orchestration for bulk downloads — all delivered as a production **Chrome MV3** extension at scale.",
  ],
  backHref: "/#doswiadczenie",
  backLabel: "Doświadczenie komercyjne",
};
