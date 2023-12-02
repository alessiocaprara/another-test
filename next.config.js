/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: "lh3.googleusercontent.com" },
            { hostname: "tailwindui.com" },
            { hostname: "localhost" },
        ]
    }
}

module.exports = nextConfig
