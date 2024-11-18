/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol:'http',
          hostname:'127.0.0.1',
          port:'8000',
          pathname:'**'
        },
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
