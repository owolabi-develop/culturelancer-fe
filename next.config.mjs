/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'career-app-vopqo.ondigitalocean.app',
          port: '',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'nyc3.digitaloceanspaces.com',
          port: '',
          pathname: '**',
        },
      ],
    },
};

export default nextConfig;
