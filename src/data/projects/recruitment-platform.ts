import type { ProjectDetail } from "./types";

export const recruitmentPlatformProject: ProjectDetail = {
  id: "recruitment-platform",
  name: "Data management and analytics SPA",
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
    "A large-scale internal SPA for managing operational data, running advanced searches, and generating analytics across the full worker placement lifecycle.",
  intro: [
    "This is an internal **data management and analytics** application built for an international recruitment agency. Consultants use it daily to register, search, edit, and report on candidates, orders, contracts, transport, and correspondence — every stage of placing workers abroad flows through the same system.",
    "The application spans **~70 routed views** across six main areas: **Candidates**, **Orders & clients**, **Advanced search**, **Reports**, **Administration**, and a **Dashboard** — backed by **90+ form screens** and **70+ data tables** that power day-to-day operations.",
  ],
  highlight:
    "New forms and filter panels are defined as configuration objects — not hand-written templates — so validation, error display, and field types stay consistent across the entire app.",
  sections: [
    {
      paragraphs: [
        "The biggest frontend challenge was the sheer number of forms — candidate registration, employment editing, transport booking, contract setup, dictionary CRUD, report filters, and more — each with different field types, validations, and async lookup data. Writing a separate template for every screen would have been unmaintainable.",
        "The solution is a **declarative form factory**: each form is defined as a plain reactive object where every key represents a field and its value describes the configuration — type, label, validation rules, select options, disabled state, hints, and error messages. A single generic renderer iterates over this object and mounts the correct input based on the declared type.",
        "Supported field types include text, number, email, textarea, date, time, phone with international formatting, single and multi-select with async search, checkbox, radio, rich-text editor, read-only info rows, and repeatable language-level pairs. The same factory powers **table filter panels** — adding filters to a new list view is just defining another config object. A shared error handler maps server-side validation back onto field keys, and utility helpers expose reset and a single **`validate()`** method for programmatic checks before submit.",
      ],
    },
    {
      paragraphs: [
        "Most list views follow the same pattern: a filter panel, a paginated sortable table, and one or more modal forms for create/edit actions. A **shared table component** handles server-side pagination, sorting, **virtual scrolling** for large datasets, and sticky columns — dozens of list views reuse it with different column definitions and API endpoints.",
        "Across the app, tables cover candidate registries, job demands, departures, returns, contracts, applications, tickets, tax refunds, complaints, and more. Each screen wires the same building blocks rather than rebuilding list UI from scratch.",
      ],
    },
    {
      paragraphs: [
        "Recruiters compose multi-criteria candidate searches through a **visual query builder** — field selection, operators, column visibility — then save queries as private or global and run them from a results page or directly within the order workflow.",
        "The **multi-tab candidate profile** spans contact details, employment history, qualifications, documents, transport, and tax records — each section with its own nested forms, tables, file uploads, and PDF downloads. A **side-by-side duplicate comparison** view helps consultants merge overlapping registrations without losing data.",
      ],
    },
    {
      paragraphs: [
        "A persistent **SignalR** connection in the main layout delivers live order alerts, task reminders, and background-job completion notices as toast notifications and badge counter updates — without polling.",
        "The UI is fully translated into **five languages** (Polish, English, Croatian, Romanian, Slovak) with locale-aware date formatting, enum labels, and API requests carrying the user's language preference. **Permission-scoped UI** reads roles from the auth token to control which routes, menu items, and action buttons each consultant sees.",
        "PDF contracts, inquiries, and Excel reports are fetched as **blobs** from the API and triggered as browser downloads, with loading states on the triggering buttons during generation. The reporting dashboard defines available filters and table actions per report type in **configuration objects** — new report types extend config rather than requiring new page layouts.",
      ],
    },
  ],
  closing: [
    "At this scale, consistency beats customization: a **declarative form factory**, a **shared server-driven table**, **SignalR** for live updates, and **config-driven** reports and filters let the frontend grow with the business without multiplying one-off screen implementations.",
  ],
  backHref: "/#doswiadczenie",
  backLabel: "Commercial experience",
};
