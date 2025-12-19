import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: "standalone",
  serverExternalPackages: ['bcrypt', 'postgres'],  // Ohne "Components"!
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...(config.externals || []), 'bcrypt', 'postgres'];
    }
    return config;
  },
};

export default nextConfig;
