/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/", //insert repo name after slash
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
};

module.exports = nextConfig;