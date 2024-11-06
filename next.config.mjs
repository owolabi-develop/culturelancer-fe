/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['127.0.0.1'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'career-app-vopqo.ondigitalocean.app',
          port: '',
          pathname: '**',
        },
      ],
    },
};

export default nextConfig;
