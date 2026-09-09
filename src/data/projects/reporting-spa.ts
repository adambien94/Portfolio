import type { ProjectDetail } from "./types";

export const reportingSpaProject: ProjectDetail = {
  id: "reporting-spa",
  name: "Reporting SPA",
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
    "A reporting SPA for filtering, charting, and exporting large datasets.",
  intro: [
    "A company-scoped reporting **SPA** where multiple report pages share the same table, filter, and chart building blocks wired through reusable composables.",
    "The **TypeScript** client is **auto-generated from OpenAPI** on every build (**NSwag**), so DTOs, enums, and endpoints stay typed end to end.",
  ],
  highlight:
    "Tables and charts render from generic API DTOs. New report types need page-level wiring, not new implementations.",
  screenshotIntro:
    "Resident waste collection reporting with shared filters, charts, and tables:",
  heroImage: {
    src: "/projects/reporting-spa/Reporting-1.png",
    alt: "Reporting SPA dashboard with filter sidebar, stacked bar chart, three doughnut charts, and paginated data table for BDO waste records",
    caption:
      "Resident collection report: filter drawer, stacked bar chart, doughnut breakdowns, and schema-driven table in one view.",
  },
  sections: [
    {
      title: "Extension-Based Authentication",
      paragraphs: [
        "Auth via a companion **browser extension** on the government portal: a **`useToken`** composable requests a **JWT** through **`postMessage`**, caches it in **`sessionStorage`**, and gates routes. Every API call injects Bearer token and company ID automatically.",
      ],
    },
    {
      title: "Schema-Driven Tables",
      paragraphs: [
        "One **schema-driven table** renders any `TableDto`. Column metadata drives formatting, sticky summary rows, server-side pagination and sorting. Column visibility persists in **`localStorage`** per route so consultants keep their layout.",
      ],
    },
    {
      title: "Filter Drawer & Saved Templates",
      paragraphs: [
        "A reusable side drawer with expandable filters, date ranges, and saved templates. Large option sets use search, select-all with indeterminate state, and scroll-triggered lazy rendering, staying responsive with **thousands of filter values**.",
      ],
    },
    {
      title: "CSV Export & Chart Components",
      paragraphs: [
        "**CSV** exports stream as binary responses without loading data into the DOM, enabling memory-safe exports beyond paginated limits. **Chart.js** wrappers add custom tooltips, HSL color scales, and scrollable legends; the heaviest page syncs six doughnut charts, a stacked bar, and dual tables through shared filter state.",
      ],
    },
    {
      title: "Deployment Version Checking",
      paragraphs: [
        "A **`useVersionCheck`** composable polls `/version.json` against a compile-time build timestamp and prompts users to reload when a new deployment lands, so long-lived sessions avoid stale bundles.",
      ],
    },
  ],
  closing: [
    "Reusable auth, tables, filters, and charts from generic DTOs. Adding a report means wiring building blocks, not rebuilding export or filter logic.",
  ],
  backHref: "/#doswiadczenie",
  backLabel: "Commercial experience",
};
