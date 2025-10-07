/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // Set the limit to 500kB
        largePageDataBytes: 500 * 1000, 
      },
};

export default nextConfig;
