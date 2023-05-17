/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "projectblog.azdigi.shop",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
