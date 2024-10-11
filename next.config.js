/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/Nextjs-page-template", //insert own repo name after slash
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
};

module.exports = nextConfig;