import type { ProjectDetail } from "./types";

export const mindiaProject: ProjectDetail = {
  id: "mindia",
  name: "Video streaming app",
  accent: "#a5b4fc",
  stack: [
    "TypeScript",
    "React",
    "Video.js",
    "HLS",
    "WebVTT",
    "WebRTC / getUserMedia",
    "ONNX Runtime",
    "WebSocket",
    "JWT",
    "OpenAPI / Swagger",
  ],
  headline:
    "A clinical platform for recording, anonymizing, and reviewing therapy sessions.",
  intro: [
    "A web app for psychologists to capture sessions, review anonymized media, tag symptoms, and correct AI-translated dialogue. The frontend is a full media pipeline (custom editor, speech gating, unified auth), not a data-entry screen.",
    "An **Active** session opens recording; later statuses unlock the review workbench with **HLS** playback, editable captions, and behavioral annotations as structured data.",
  ],
  highlight:
    "Recording starts only when both audio and video streams are ready, as a fail-safe against incomplete clinical capture.",
  sections: [
    {
      title: "Custom Video Editor & Clinical Annotation",
      paragraphs: [
        "A **custom video editor** on **Video.js**, **HLS**, and dynamic **WebVTT** lets specialists split sessions into **fragments or frames** with millisecond precision. Each segment carries **tags and descriptions** for **mental health symptoms and behaviors**, with point and range annotations on a **dual timeline**, persisted as structured records tied to exact timestamps.",
      ],
    },
    {
      title: "AI Translation & Transcript Editing",
      paragraphs: [
        "**AI models** auto-translate session dialogue into synchronized captions. Clinicians correct mistranslations and timing in the same editor without losing sync; corrected text saves back as structured **WebVTT** data.",
      ],
    },
    {
      title: "Client-side Voice Activity Detection",
      paragraphs: [
        "**Voice activity detection** via **ONNX Runtime** (`@ricky0123/vad-web`) gates microphone input in the browser. Only speech segments ship as timestamped PCM, which cuts silence, bandwidth, and load on downstream **speech-to-text** services.",
      ],
    },
    {
      title: "Live Capture & Media Pipelining",
      paragraphs: [
        "Video (~15 FPS JPEG via **Canvas**) and audio stream on **separate WebSockets** from **getUserMedia**. Recording begins only when **both** channels report ready, preventing half-recorded sessions.",
      ],
    },
    {
      title: "Security & Data Anonymization",
      paragraphs: [
        "**Privacy-by-design**: bearer **JWT** on **REST** and **WebSocket**, token query params on **HLS**/**VTT** (since **Video.js** cannot set headers). A **Swagger**-generated typed client unifies auth from capture through review.",
      ],
    },
  ],
  closing: [
    "**TypeScript** and **React** clinical media tool: **WebRTC** capture, on-device **VAD**, **Video.js** annotation workspace, **JWT**-secured streaming across every transport channel.",
  ],
  backHref: "/#doswiadczenie",
  backLabel: "Commercial experience",
};
