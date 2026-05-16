import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  experimental: {
    optimizePackageImports: [
      'react-icons',
      'react-hook-form',
      '@hookform/resolvers',
      'zod',
      'react-number-format',
    ],
    webpackMemoryOptimizations: true,
  },
};

export default nextConfig;
