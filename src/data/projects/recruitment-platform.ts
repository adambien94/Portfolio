import type { ProjectDetail } from "./types";

export const recruitmentPlatformProject: ProjectDetail = {
  id: "recruitment-platform",
  name: "Data management SPA",
  accent: "#fcd34d",
  stack: [
    "SignalR",
    "REST",
    "JWT",
    "i18n",
    "Virtual scrolling",
    "PDF / Excel exports",
  ],
  headline:
    "An internal SPA for recruitment data, search, and operational reporting.",
  intro: [
    "An internal **data management SPA** for an international recruitment agency, covering candidates, orders, contracts, transport, and reports in one system.",
    "**~70 views**, **90+ forms**, and **70+ tables** across **Candidates**, **Orders**, **Search**, **Reports**, **Administration**, and **Dashboard**.",
  ],
  highlight:
    "Forms and filter panels are **config objects**, not hand-written templates, so validation and field types stay consistent app-wide.",
  sections: [
    {
      title: "Declarative Form Factory",
      paragraphs: [
        "A **declarative form factory** renders **90+ screens** from config objects: field type, validation, async lookups, hints, and errors. One generic renderer covers text, dates, phones, rich text, multi-select, and repeatable pairs. The same pattern powers **table filter panels**, with server errors mapped back to field keys.",
      ],
    },
    {
      title: "Shared Server-Driven Tables",
      paragraphs: [
        "A **shared table component** drives **70+ list views** with server-side pagination, sorting, **virtual scrolling**, and sticky columns. Each screen wires the same filter + table + modal pattern with different columns and endpoints: candidates, contracts, departures, complaints, and more.",
      ],
    },
    {
      title: "Advanced Search & Candidate Profiles",
      paragraphs: [
        "A **visual query builder** lets recruiters compose multi-criteria searches, save them as private or global, and run from results or the order workflow. The **multi-tab candidate profile** spans employment, documents, transport, and tax records, with a **duplicate comparison** view for merging overlapping registrations.",
      ],
    },
    {
      title: "Real-Time Updates & Permissions",
      paragraphs: [
        "**SignalR** pushes order alerts, tasks, and job completions as toasts and badge counts, with no polling. UI in **five languages** with **permission-scoped** routes and actions from the auth token. PDF and Excel exports stream as **blobs**; new report types extend via **config objects**, not new page layouts.",
      ],
    },
  ],
  closing: [
    "**Declarative forms**, **shared tables**, **SignalR** live updates, and **config-driven** reports: consistency at scale without one-off screens.",
  ],
  backHref: "/#doswiadczenie",
  backLabel: "Commercial experience",
};
