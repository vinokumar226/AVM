import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  webpack: (config) => {
    config.ignoreWarnings = [
      {
        message: /Sass's behavior for declarations that appear after nested/,
      },
    ];

    return config;
  },
  sassOptions: {
    quietDeps: true,
  },
  
};

export default nextConfig;
