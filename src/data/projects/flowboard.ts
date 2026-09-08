import type { ProjectDetail } from "./types";

export const flowboardProject: ProjectDetail = {
  id: "flowboard",
  name: "Flowboard",
  stack: ["React", "TypeScript", "Zustand", "Supabase", "Vercel", "Jest"],
  accent: "#c4b5fd",
  headline:
    "A personal kanban with your own boards, columns, and AI that breaks tasks into concrete steps.",
  intro: [
    "Flowboard is a kanban app with user registration. Everyone gets their own boards. After logging in, you create a board for a project, school, or homework list and work in Kanban or table mode.",
    "A board has columns you define yourself, from the classic Todo → In progress → Done to a custom workflow with Test or Prod stages. You add tasks with a click, set priority and description, then drag them between columns.",
  ],
  highlight:
    "You don't have to break tasks down yourself. AI generates a list of steps from the card title and description, so you know where to start.",
  screenshotIntro:
    "What working with the board looks like, from the kanban view to card details with AI steps:",
  heroImage: {
    src: "/projects/flowboard/Flowboard-1.png",
    alt: "Flowboard kanban view with sidebar of boards, Todo, In progress, Test, Done, and Prod columns, and task cards",
  },
  sections: [
    {
      paragraphs: [
        "The sidebar lists all of your boards: **Example Project**, **Personal Tasks**, **School**, and others you create with **New board**. Each board has its own columns and tasks, so projects don't mix.",
        "You add columns on the fly. Cards show priority (HIGH, MEDIUM, LOW), title, short description, and time logged. The **Kanban Mode** / **Table Mode** toggle lets you switch how you work with the same data.",
      ],
    },
    {
      paragraphs: [
        "Clicking a card opens a details panel with title, full description, priority, and time log. This is where AI comes in: **Generate AI steps** analyzes the task and returns a numbered list of concrete action steps.",
      ],
      image: {
        src: "/projects/flowboard/Flowboard-2.png",
        alt: "Flowboard card details panel with task description, Generate AI steps button, and generated action steps",
      },
    },
    {
      paragraphs: [
        "Generated steps land in **ACTION STEPS (AI)**, a ready-made checklist you can work through in order. Useful for bugs, features, and tasks that feel too broad to start coding right away.",
      ],
    },
  ],
  closing: [
    "**React**, **TypeScript**, and **Zustand** on the front end, **Supabase** for users and board data. A kanban where registration, personal boards, flexible columns, and AI support everyday planning.",
  ],
};
