/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['127.0.0.1'],
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '127.0.0.1',
          port: '',
          pathname: '',
        },
      ],
    },
};

export default nextConfig;
