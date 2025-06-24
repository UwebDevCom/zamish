import type { NextConfig } from "next";

console.log(process.env.NODE_ENV);
const nextConfig: NextConfig = {
    env: {
        CUSTOM_BASE_URL:
            process.env.NODE_ENV === "production"
                ? "back.zamish.co.il"
                : "http://localhost:3000",
    },
    /* config options here */
    images: {
        // disableStaticImages: true,
        // dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: "http", // Or 'http' if applicable
                hostname: "leadr.local", // Replace with the actual hostname of your external image URL
                port: "", // Leave empty if no specific port is required
                pathname: "/**", // Optional: restrict to a specific path
            },
        ],
    },
};

export default nextConfig;
