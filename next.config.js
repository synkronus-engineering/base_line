/** @type {import('next').NextConfig} */


const advancedHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
];


const nextConfig = {
  experimental: {
      serverActions: true
  },
  // transpilePackages: ["@mui/system", "@mui/material", "@mui/icons-material"],
  // modularizeImports: {
  //   "@mui/material/?(((\\w*)?/?)*)": {
  //     transform: "@mui/material/{{ matches.[1] }}/{{member}}",
  //   },
  //   "@mui/icons-material/?(((\\w*)?/?)*)": {
  //     transform: "@mui/icons-material/{{ matches.[1] }}/{{member}}",
  //   },
  // },
  // async headers() {
  //   return [
  //     {
  //       // Apply these headers to all routes in your application.
  //       source: "/:path*",
  //       headers: advancedHeaders,
  //     },
  //   ];
  // },
};

// const withPWA = require('next-pwa')({
//   dest: 'public'
//   // disable: process.env.NODE_ENV === 'import.metadevelopment',
//   // register: true,
//   // scope: '/app',
//   // sw: 'service-worker.js',
//   //...
// })

// module.exports = withPWA({
//   // next.js config
// })

// module.exports = (phase, defaultConfig) => {
//   return withBundleAnalyzer(defaultConfig)
// }

// module.exports = async (phase) => {
//   const plugins = ['@next/bundle-analyzer', 'next-pwa']; //All your plugins go into this array
//   return plugins.reduce((acc, next) => next(acc), nextConfig);
// };

module.exports = nextConfig
