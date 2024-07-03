/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/pages',
      },
      {
        source: '/Item/new',
        destination: '/pages/Item/new',
      },
      {
        source: '/Item/:id',
        destination: '/pages/Item/:id',
      },
      {
        source: '/Search',
        destination: '/pages/Search',
      },
      {
        source: '/Analysis',
        destination: '/pages/Analysis',
      },
    ];
  },
};

module.exports = nextConfig;
