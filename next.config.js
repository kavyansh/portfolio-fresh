/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    RESEND_API_KEY: "re_TCzY7Tyq_5B9KwsJs3b7WXwK33PZo9KAk",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
