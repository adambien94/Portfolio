export type OtherCommercialProject = {
  id: string;
  name: string;
  description: string;
  period?: string;
  stack: string[];
};

export const profile = {
  name: "Adam Bień",
  domain: "adambien",
  firstName: "Adam",
  role: "Frontend Developer",
  location: "Wroclove, Poland",
  email: "adam.bien94@gmail.com",
  github: "https://github.com/adambien94",
  linkedin: "https://www.linkedin.com/in/adam-bie%C5%84-342bb7182/",
  headline: "How do you build products\nthat feel right?",
  subheadline:
    "I design and code interfaces where detail, motion, and clarity matter from the first interaction.",
};

export const about = {
  title: `${profile.name}`,
  paragraphs: [
    "Hi! I'm a **Frontend Developer**. I like building interfaces that feel polished and intentional.",
    "I've been programming for **8 years**, and for over **five** I've been building commercial software with real users. I went from early experiments with code to full-scale platforms in **TypeScript**, **Vue**, and **React**.",
    "What I enjoy most is when code, UI, and micro-interactions click together into something that just works. I care about the whole process: **Figma** mockups, **API** integrations, accessibility, and performance once the app is live.",
  ],
};

export const projects = [
  {
    id: "weseleo",
    name: "Invite",
    description: "SaaS platform for online wedding invitations.",
    inProgress: true,
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Tailwind",
      "Shadcn",
      "React Hook Form",
      "Zod",
    ],
    href: "/projects/weseleo",
    accent: "#d8a7ca",
  },
  {
    id: "lerni",
    name: "Lerni",
    description: "an AI-powered learning app.",
    stack: [
      "React",
      "TypeScript",
      "Shadcn",
      "Supabase",
      "Tailwind",
      "Vercel",
      "Gemini API",
    ],
    href: "/projects/lerni",
    accent: "#86efac",
  },
  {
    id: "flowboard",
    name: "Flowboard",
    description: "a kanban board with AI feature and real-time sync.",
    stack: ["React", "TypeScript", "Zustand", "Supabase", "Vercel", "Jest"],
    href: "/projects/flowboard",
    accent: "#FCB07E",
  },
  {
    id: "TvShow",
    name: "Tv shows",
    description: "a TV series library.",
    stack: ["Vue 3", "TypeScript", "Tailwind", "Jest", "RWD", "PWA"],
    href: "/projects/TvShow",
    accent: "#c4b5fd",
  },
  // {
  //   id: "doors",
  //   name: "Door configurator",
  //   description: "a 3D door configurator.",
  //   stack: ["Vue 2", "Canvas", "Three.js"],
  //   href: "/projects/doors",
  //   accent: "#FA824C",
  // },
];

export const otherCommercialProjects: OtherCommercialProject[] = [
  {
    id: "loreal-training",
    name: "L'Oréal employee training platform",
    description:
      "Training app with quizzes, concept puzzles, and image annotation exercises.",
    stack: ["Vue 3", "Quasar", "TypeScript"],
  },
  {
    id: "twojebdo-driver-app",
    name: "Driver mobile app",
    description:
      "Mobile app for drivers extending twojeBDO service capabilities.",
    stack: ["Vue 3", "TypeScript", "Quasar"],
  },
  {
    id: "spa-hotel-booking",
    name: "Internal hotel booking app",
    description:
      "Employee self-service for booking company hotel stays at SPA.",
    stack: ["Vue 3", "Nuxt.js", "TypeScript", "FormKit"],
  },
  {
    id: "furniture-ecommerce",
    name: "Furniture e-commerce store",
    description:
      "Online furniture shop with catalog, cart, and checkout flows.",
    stack: ["Shopware", "Twig", "JS", "Docker"],
  },
  {
    id: "nokia-server-config",
    name: "Server configuration system for Nokia",
    description: "Developing complex app for configuring and managing servers.",
    stack: ["Vue 2", "Nuxt.js", "TypeScript"],
  },
  {
    id: "atos-workforce",
    name: "Atos workforce management app",
    description:
      "Internal tool for employee data, work statistics, and leave management.",
    stack: ["Vue 2", "TypeScript", "Jest", "Cypress"],
  },
];

export const commercialExperience = {
  title: "Commercial experience",
  subtitle:
    "Over five years as a frontend developer, from internal tools to full products.",
  paragraphs: [
    "I've built and maintained modern web apps, from internal business tools to full **SPA** and **PWA** products. Most of my work has been in **Vue** (2 and 3, **Nuxt.js**, **Quasar**), with **React** and **Next.js** on recent projects. **TypeScript** is my default.",
    "I've designed interfaces, wired up application logic, and integrated **APIs**. State management with **Pinia**, **Zustand**, and **Vuex**; routing and auth; performance, responsiveness, accessibility, and cross-browser quirks. Styling in **CSS**, **SCSS**, **Tailwind**, and **Bootstrap**, usually from **Figma** designs.",
    "I've written unit tests (**Jest**), deployed applications to staging and production (**Docker**), and collaborated with product and backend teams. I've participated in technology choices and toolchain configuration (**Vite**, **Webpack**, **Git**).",
  ],
  projects: [
    {
      id: "mindia",
      name: "Video streaming app",
      description:
        "A platform for recording, anonymizing, and reviewing therapy sessions.",
      href: "/projects/mindia",
    },
    {
      id: "recruitment-platform",
      name: "Data management SPA",
      description:
        "An internal SPA for data management, search, and operational reporting.",
      href: "/projects/recruitment-platform",
    },
    {
      id: "waste-portal-extension",
      name: "Government website Chrome extension",
      description:
        "Development of a Chrome extension that speeds up reports handling in a government portal.",
      href: "/projects/waste-portal-extension",
    },
    {
      id: "reporting-spa",
      name: "Data reports dashboard",
      description:
        "An SPA for filtering, visualizing, and exporting large operational datasets.",
      href: "/projects/reporting-spa",
    },
    {
      id: "clinic-platform",
      name: "Medical clinics web platform",
      description:
        "A multilingual SSR platform for a clinic group, with content from a headless CMS.",
      href: "/projects/clinic-platform",
    },
  ],
  otherProjects: otherCommercialProjects,
  stack: [
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Vue.js",
    "Nuxt.js",
    "Quasar",
    "React",
    "Next.js",
    "Pinia",
    "Vuex",
    "Zustand",
    "Redux",
    "RxJS",
    "Tailwind",
    "Bootstrap",
    "SASS",
    "shadcn/ui",
    "Three.js",
    "Chart.js",
    "Video.js",
    "Jest",
    "REST",
    "GraphQL",
    "Swagger",
    "Twig",
    "Webpack",
    "Vite",
    "Git",
    "Docker",
    "Supabase",
    "Figma",
    "BEM",
    "RWD",
    "SPA",
    "SSR",
    "WordPress",
  ],
};

export const navLinks = [
  { label: "About", href: "#o-mnie" },
  { label: "Projects", href: "#projekty" },
  { label: "Experience", href: "#doswiadczenie" },
];
