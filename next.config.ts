// next.config.ts
import type { NextConfig } from "next";
const path = require("path");

const nextConfig: NextConfig = {
  distDir: "build",
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
