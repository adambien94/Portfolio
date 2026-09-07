import type { ProjectDetail } from "./types";

export const flowboardProject: ProjectDetail = {
  id: "flowboard",
  name: "Flowboard",
  stack: ["React", "TypeScript", "Zustand", "Supabase", "Vercel", "Jest"],
  accent: "#f9a8d4",
  headline:
    "A personal kanban with your own boards, columns, and AI that breaks tasks down into concrete action steps.",
  intro: [
    "Flowboard is a kanban app with user registration — everyone gets their own boards, independent of other accounts. After logging in, you create a board for a project, school, or homework list and work in Kanban or table mode.",
    "A board consists of columns you define yourself — from the classic Todo → In progress → Done to a custom workflow with Test or Prod stages. You add tasks with a single click, set priority and description, then drag them between columns.",
  ],
  highlight:
    "You don't have to break tasks down yourself — AI generates a list of steps based on the card title and description, so you know where to start right away.",
  screenshotIntro:
    "See what working with the board looks like — from the kanban view to card details with AI steps:",
  heroImage: {
    src: "/projects/flowboard/Flowboard-1.png",
    alt: "Flowboard kanban view with sidebar of boards, Todo, In progress, Test, Done, and Prod columns, and task cards",
  },
  sections: [
    {
      paragraphs: [
        "The sidebar groups all of the user's boards — **Example Project**, **Personal Tasks**, **School**, and others you create with the **New board** button. Each board has its own set of columns and tasks, so projects don't mix together.",
        "You add columns dynamically, and cards show priority (HIGH, MEDIUM, LOW), title, short description, and time logged. The **Kanban Mode** / **Table Mode** toggle lets you change how you work with the same dataset.",
      ],
    },
    {
      paragraphs: [
        "Clicking a card opens a details panel — title, full description, priority, and time log. This is where the AI integration kicks in: the **Generate AI steps** button analyzes the task and returns a numbered list of concrete action steps.",
      ],
      image: {
        src: "/projects/flowboard/Flowboard-2.png",
        alt: "Flowboard card details panel with task description, Generate AI steps button, and generated action steps",
      },
    },
    {
      paragraphs: [
        "Generated steps land in the **ACTION STEPS (AI)** section — a ready-made checklist you can work through in order. It comes in handy for bugs, features, and tasks that seem too broad to sit down and code right away.",
      ],
    },
  ],
  closing: [
    "Flowboard combines **React**, **TypeScript**, and **Zustand** on the interface side with **Supabase** as the backend for users and board data. The result is a kanban where registration, personal boards, flexible columns, and AI support everyday work — from planning to breaking a task into actionable steps.",
  ],
};
