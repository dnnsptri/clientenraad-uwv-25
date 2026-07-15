/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  async redirects() {
    return [
      {
        source: "/articles/:slug",
        destination: "/artikelen/:slug",
        permanent: true,
      },
      {
        source: "/foreword",
        destination: "/voorwoord",
        permanent: true,
      },
    ];
  },
}

export default nextConfig
