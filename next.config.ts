import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === 'production' ? '/prgbgroup' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
