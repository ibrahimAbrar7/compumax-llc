import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        // ANY /api/placeholder/400/300 -> /placeholder.png
        source: "/api/placeholder/:w/:h",
        destination: "/placeholder.png",
      },
    ];
  },
};

export default nextConfig;
