/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/board',
        destination: '/pages/board',
      },
      {
        source: '/ticket/new',
        destination: '/pages/ticket/new',
      },
      {
        source: '/ticket/:id',
        destination: '/pages/ticket/:id',
      },
      {
        source: '/search',
        destination: '/pages/search',
      },
      {
        source: '/analysis',
        destination: '/pages/analysis',
      },
    ];
  },
};

module.exports = nextConfig;
