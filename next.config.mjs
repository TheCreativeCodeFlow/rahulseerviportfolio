/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Uncomment the lines below for GitHub Pages deployment
  // output: 'export',
  // trailingSlash: true,
  // basePath: '/rahul-seervi-portfolio',
}

export default nextConfig
