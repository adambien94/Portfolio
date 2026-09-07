import type { ProjectDetail } from "./types";

export const lerniProject: ProjectDetail = {
  id: "lerni",
  name: "Lerni",
  stack: ["React", "TypeScript", "Shadcn", "Supabase", "Vercel", "Gemini API"],
  accent: "#86efac",
  headline:
    "A personal learning space where online sources, AI, and review sessions live in one place.",
  intro: [
    "Lerni is an AI-powered learning app I built, inspired by NotebookLM. You add articles, blogs, and other materials from the web, then work with them in a notebook without jumping between tabs or drowning in bookmarks.",
    "The Gemini API summarizes knowledge from your sources, answers questions in that context, and generates flashcards and quizzes to help you remember what you read.",
  ],
  highlight:
    "You learn from your own materials. Summaries, chat, and review tools sit in one view instead of scattered tabs.",
  screenshotIntro:
    "What the notebook looks like in practice, from login to flashcards and quizzes:",
  heroImage: {
    src: "/projects/lerni/Lerni-3.png",
    alt: "Lerni notebook workspace with source panels, AI summary, and study studio",
  },
  sections: [
    {
      paragraphs: [
        "The interface is dark and calm on purpose. Login and the start screen make it clear this is a tool for focused learning, not another bulletin board.",
      ],
      image: {
        src: "/projects/lerni/Lerni-1.png",
        alt: "Lerni login screen split between form and product description",
      },
    },
    {
      paragraphs: [
        "Notebooks group topics: React, design patterns, interview prep. Each has its own sources, summary history, and generated study materials.",
      ],
      image: {
        src: "/projects/lerni/Lerni-2.png",
        alt: "Lerni notebook list with topic cards and create-new option",
      },
    },
    {
      paragraphs: [
        "The workspace has three columns for three stages of learning: **sources** on the left, **summary and AI chat** in the center, **studio** on the right with flashcards and quizzes generated from what you've read.",
      ],
    },
    {
      paragraphs: [
        "Quizzes test understanding based on the summary, with hints, navigation between questions, and clear feedback. Flashcards work like classic cards: flip, reset, move to the next one.",
      ],
      image: {
        src: "/projects/lerni/Lerni-4.png",
        alt: "Lerni quiz with a Singleton pattern question and source panel",
      },
    },
    {
      paragraphs: [
        "Flashcards are generated from selected sources and can be reviewed right away in the Studio panel. No export to another app required.",
      ],
      image: {
        src: "/projects/lerni/Lerni-5.png",
        alt: "Lerni flashcards with the Singleton pattern definition",
      },
    },
  ],
  closing: [
    "Built with **React**, **TypeScript**, **Shadcn**, and **Supabase**, with the **Gemini API** handling the AI layer. The idea was simple: go from gathering materials to exam review without switching context.",
  ],
};
