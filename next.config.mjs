/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["randomuser.me", "images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
      },
    ],
  },
  onWarning: (warning) => {
    if (
      warning.code === "HYDRATION_MISMATCH" &&
      warning.message.includes("fdprocessedid")
    ) {
      return;
    }
    console.warn(warning.message);
  },
};

export default nextConfig;
