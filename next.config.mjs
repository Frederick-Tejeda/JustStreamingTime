/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "m.media-amazon.com",
            },
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
            },
        ] // Set domains to an empty array to allow images from any website
  },
};

export default nextConfig;
