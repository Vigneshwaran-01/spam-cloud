/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true, // Enable gzip compression for production

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "no-referrer-when-downgrade" },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=(), payment=()",
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      // Redirect HTTP to HTTPS
      {
        source: "/:path*",
        has: [{ type: "header", key: "x-forwarded-proto", value: "http" }],
        destination: "https://spamcloud.in/:path*",
        permanent: true,
      },
      // Redirect from www to non-www, preserving paths
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.spamcloud.in" }],
        destination: "https://spamcloud.in/:path*",
        permanent: true,
      },
      // Other specific redirects
      { source: "/about.php", destination: "/about", permanent: true },
      { source: "/incoming-filter.php", destination: "/incoming-filter", permanent: true },
      { source: "/outgoing-filter.php", destination: "/outgoing-filter", permanent: true },
      { source: "/client.php", destination: "/client", permanent: true },
      { source: "/contact.php", destination: "/contact", permanent: true },
    ];
  },
};

module.exports = nextConfig;