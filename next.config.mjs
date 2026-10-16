/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit a fully static site into ./out so it deploys on any Vercel
  // framework preset — no server runtime required for a portfolio.
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
