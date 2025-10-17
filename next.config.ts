/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    disableStaticImages: true, // Suppress <img> tag warnings
  },
};

module.exports = nextConfig;