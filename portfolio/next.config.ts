import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All images are local (served from /public), no external domains needed
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
