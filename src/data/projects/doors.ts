import type { ProjectDetail } from "./types";

export const doorsProject: ProjectDetail = {
  id: "doors",
  name: "Door configurator",
  stack: ["Vue 2", "Canvas", "Three.js"],
  accent: "#fde68a",
  headline:
    "A three-step glass door configurator: type and dimensions, frame division, finish color, with 2D and 3D preview.",
  intro: [
    "Door configurator is a web app for designing interior doors with frames and glazing. The user goes through three steps: **Choose door**, **Choose door division**, and **Choose color**. Every parameter change instantly updates the product preview.",
    "The interface is a wizard with a progress bar at the top, a large preview on the left, and a configuration panel on the right. The **3D / 2D** toggle shows the same model as a technical diagram with dimensions or as a realistic scene in a room.",
  ],
  highlight:
    "Dimensions, glass division, and frame color change live. No page reload, no guessing how the doors will look after installation.",
  screenshotIntro:
    "Configuration step by step, from choosing the door type to the 3D preview:",
  heroImage: {
    src: "/projects/doors/Doors-4.png",
    alt: "Door configurator in 3D view - realistic double door render in a room with frame color selection and camera controls",
  },
  sections: [
    {
      paragraphs: [
        "In **Choose door**, the user picks a door type (**Single door**, **Double door**, or **Triple door**) and enters **Width** and **Height** in centimeters. The 2D preview draws a diagram with dimension lines so proportions and individual leaf widths are visible right away.",
        "The **3D / 2D** toggle in the corner of the preview lets you switch between the technical view and the spatial render at any time without losing the current configuration.",
      ],
      images: [
        {
          src: "/projects/doors/Doors-1.png",
          alt: "First step of the door configurator - type selection (Single, Double, Triple) and dimensions with 2D preview showing width 145 and height 270",
        },
        {
          src: "/projects/doors/Doors-2.png",
          alt: "Second configurator step - door division with adjustable mullions, posts, and frame thickness on a double door 290×270 diagram",
        },
        {
          src: "/projects/doors/Doors-3.png",
          alt: "Third configurator step in 2D view - frame color selection from palette and color wheel, double door with glazing grid",
        },
      ],
    },
  ],
  closing: [
    "Built with **Vue 2**, **Canvas** for 2D diagrams and dimensions, and **Three.js** for 3D rendering in a room. A client or sales rep can assemble custom doors step by step and see what they're ordering right away.",
  ],
};
