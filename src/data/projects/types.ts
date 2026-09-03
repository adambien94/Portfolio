export type ProjectScreenshot = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectDetailSection = {
  paragraphs: string[];
  image?: ProjectScreenshot;
};

export type ProjectDetail = {
  id: string;
  name: string;
  stack: string[];
  accent: string;
  headline: string;
  intro: string[];
  highlight?: string;
  screenshotIntro?: string;
  heroImage: ProjectScreenshot;
  sections: ProjectDetailSection[];
  closing?: string[];
};
