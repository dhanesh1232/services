/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "randomuser.me",
      "images.unsplash.com",
      "images.pexels.com",
      "res.cloudinary.com",
    ],
  },
};

export default nextConfig;
