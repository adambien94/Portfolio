import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/projects/**",
      },
      {
        pathname: "/avatar.webp",
      },
    ],
  },
};

export default nextConfig;
