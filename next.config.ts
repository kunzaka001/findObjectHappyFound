import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.1.102', 'localhost'],
  output: 'export'
};

export default nextConfig;
