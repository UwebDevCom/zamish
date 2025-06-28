import type { NextConfig } from "next";

console.log(process.env.NODE_ENV);
const nextConfig: NextConfig = {
    env: {
        CUSTOM_BACK_URL:
            process.env.NODE_ENV === "production"
                ? "https://back.zamish.co.il/wp-json/wp/v2"
                : "http://leadr.local/wp-json/wp/v2",
        CUSTOM_BASE_URL:
            process.env.NODE_ENV === "production"
                ? "https://zamish.co.il"
                : "http://localhost:3000",
    },
    /* config options here */
    images: {
        // disableStaticImages: true,
        // dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: "https", // Or 'http' if applicable
                hostname: "back.zamish.co.il", // Replace with the actual hostname of your external image URL
                pathname: "/**", // Optional: restrict to a specific path
            },
            {
                protocol: "https",
                hostname: "zamish.co.il",
                pathname: "/**",
            },
            {
                protocol: "http",
                hostname: "leadr.local",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
