/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.imgur.com'],
    unoptimized: false,
  },
  // Disabling experimental features that might cause build issues
  experimental: {
    optimizeCss: false,
  },
  // Disable ESLint during build as we're handling it separately
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;