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
    "An internal **data management and analytics** application for an international recruitment agency. Consultants use it daily to register, search, edit, and report on candidates, orders, contracts, transport, and correspondence. Every stage of placing workers abroad goes through the same system.",
    "The app has **~70 routed views** across six main areas: **Candidates**, **Orders & clients**, **Advanced search**, **Reports**, **Administration**, and a **Dashboard**, backed by **90+ form screens** and **70+ data tables**.",
  ],
  highlight:
    "New forms and filter panels are defined as configuration objects, not hand-written templates. Validation, error display, and field types stay consistent across the entire app.",
  sections: [
    {
      paragraphs: [
        "The biggest frontend challenge was the number of forms: candidate registration, employment editing, transport booking, contract setup, dictionary CRUD, report filters, and more. Each with different field types, validations, and async lookup data. A separate template per screen would not scale.",
        "The answer was a **declarative form factory**. Each form is a plain reactive object where every key is a field and its value is the configuration: type, label, validation rules, select options, disabled state, hints, and error messages. One generic renderer iterates over this object and mounts the correct input.",
        "Field types include text, number, email, textarea, date, time, phone with international formatting, single and multi-select with async search, checkbox, radio, rich-text editor, read-only info rows, and repeatable language-level pairs. The same factory powers **table filter panels**. Adding filters to a new list view is just another config object. A shared error handler maps server-side validation back onto field keys, and utility helpers expose reset and a single **`validate()`** method for checks before submit.",
      ],
    },
    {
      paragraphs: [
        "Most list views follow the same pattern: a filter panel, a paginated sortable table, and one or more modal forms for create/edit actions. A **shared table component** handles server-side pagination, sorting, **virtual scrolling** for large datasets, and sticky columns. Dozens of list views reuse it with different column definitions and API endpoints.",
        "Tables cover candidate registries, job demands, departures, returns, contracts, applications, tickets, tax refunds, complaints, and more. Each screen wires the same building blocks instead of rebuilding list UI from scratch.",
      ],
    },
    {
      paragraphs: [
        "Recruiters compose multi-criteria candidate searches through a **visual query builder** (field selection, operators, column visibility), then save queries as private or global and run them from a results page or directly within the order workflow.",
        "The **multi-tab candidate profile** spans contact details, employment history, qualifications, documents, transport, and tax records. Each section has its own nested forms, tables, file uploads, and PDF downloads. A **side-by-side duplicate comparison** view helps consultants merge overlapping registrations without losing data.",
      ],
    },
    {
      paragraphs: [
        "A persistent **SignalR** connection in the main layout delivers live order alerts, task reminders, and background-job completion notices as toast notifications and badge counter updates, without polling.",
        "The UI is fully translated into **five languages** (Polish, English, Croatian, Romanian, Slovak) with locale-aware date formatting, enum labels, and API requests carrying the user's language preference. **Permission-scoped UI** reads roles from the auth token to control which routes, menu items, and action buttons each consultant sees.",
        "PDF contracts, inquiries, and Excel reports are fetched as **blobs** from the API and triggered as browser downloads, with loading states on the triggering buttons during generation. The reporting dashboard defines available filters and table actions per report type in **configuration objects**. New report types extend config rather than needing new page layouts.",
      ],
    },
  ],
  closing: [
    "At this scale, consistency beats customization. A **declarative form factory**, a **shared server-driven table**, **SignalR** for live updates, and **config-driven** reports and filters let the frontend grow with the business without multiplying one-off screen implementations.",
  ],
  backHref: "/#doswiadczenie",
  backLabel: "Commercial experience",
};
