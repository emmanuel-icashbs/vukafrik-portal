import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/home-three", destination: "/", permanent: true }];
  },
};

export default nextConfig;
