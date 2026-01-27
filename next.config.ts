import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rebays-website.s3.ap-southeast-2.amazonaws.com', // Replace with your actual S3 URL
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
