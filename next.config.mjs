/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ['en', 'fa'],
    defaultLocale: 'fa',
    localeDetection: false,
  },
};

export default nextConfig;