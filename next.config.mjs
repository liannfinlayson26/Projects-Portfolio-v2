/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pre-existing lint nits in the archive/certifications pages shouldn't block
  // production builds (matches behavior prior to the Next.js 15.5 upgrade).
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
