import type { ProjectDetail } from "./types";

export const reportingSpaProject: ProjectDetail = {
  id: "reporting-spa",
  name: "Reporting and visualization SPA",
  accent: "#38bdf8",
  stack: [
    "Chart.js",
    "NSwag",
    "REST",
    "JWT",
    "postMessage",
    "downloadjs",
    "localStorage",
    "CSV streaming",
  ],
  headline:
    "A multi-tenant reporting SPA for filtering, visualizing, and exporting large operational datasets through a typed REST API.",
  intro: [
    "A reporting application scoped by company ID in the URL. Multiple report pages share the same table, filter, and chart building blocks, wired to typed API methods through reusable composables instead of duplicated page logic.",
    "Auth, API configuration, and error handling live in composable modules. The TypeScript client is **auto-generated from the backend OpenAPI spec** on every dev start and build, so DTOs, enums, and endpoints stay typed end to end.",
  ],
  highlight:
    "Tables and charts render from generic API DTOs. New report types need page-level wiring, not new table or chart implementations.",
  sections: [
    {
      paragraphs: [
        "Instead of a traditional login form, the app integrates with a companion **browser extension** on the official government portal. A **`useToken`** composable requests a **JWT** via **`window.postMessage`**, caches it in **`sessionStorage`**, and handles timeouts and extension availability checks.",
        "The root layout acts as an auth gate with router guards, pending route storage, and a dev fallback for manual token input. Every API call goes through a custom authorized base class that injects the Bearer token and company ID header automatically.",
      ],
    },
    {
      paragraphs: [
        "One **schema-driven table component** renders any `TableDto` from the API instead of building a separate table per report. Column metadata drives cell formatting (Polish decimal notation, dates, truncated strings) and a sticky summary row.",
        "Server-side pagination and sorting emit page and sort changes upward; the parent fetches the next slice. Column visibility persists in **`localStorage`** per route and table, so consultants return to the same layout without reconfiguring.",
      ],
    },
    {
      paragraphs: [
        "A side drawer provides expandable filter sections, date range picking, reset/save actions, and visual indicators for partial selections. For large option sets, the filter list implements search, select-all with indeterminate state, and scroll-triggered lazy rendering to stay responsive with **thousands of filter values**.",
        "Users can save and reload named filter templates across sessions. The same drawer pattern is reused on every report page.",
      ],
    },
    {
      paragraphs: [
        "Filtered datasets export as **CSV** without loading them into the DOM. The **NSwag** client requests binary responses (`application/octet-stream`) and returns a typed file response with filename and data. Downloads trigger via **downloadjs** with loading states on export buttons, keeping memory low while supporting exports that far exceed paginated table limits.",
        "Chart components wrap **Chart.js** with domain-specific behavior: stacked bar charts use programmatic HSL color scales and a fully custom external DOM tooltip for precise formatting and hover persistence; doughnut charts use data labels and external scrollable legends. The most complex page combines hash-routed sub-views, six doughnut charts, a stacked bar chart, and dual paginated tables, all synchronized through shared filter state.",
      ],
    },
    {
      paragraphs: [
        "A **`useVersionCheck`** composable embeds a build timestamp at compile time and polls `/version.json` periodically. When a new deployment is detected, users get a persistent notification to reload, so long-lived sessions pick up fresh builds without stale cached bundles.",
      ],
    },
  ],
  closing: [
    "Auth, column parsing, and version checking in reusable modules; global components shared across report pages; tables and charts that render from generic DTOs. Adding a new report means wiring existing building blocks, not rebuilding filters, tables, or export logic from scratch.",
  ],
  backHref: "/#doswiadczenie",
  backLabel: "Commercial experience",
};
