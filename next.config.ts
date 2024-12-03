import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // This allows for Google profile avatars to be used
      },
    ],
  },
};

export default nextConfig;
