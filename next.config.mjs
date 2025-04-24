/** @type {import('next').NextConfig} */

const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)', 
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin', 
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'unsafe-none', 
          },
          { 
            key: 'Access-Control-Allow-Origin', 
            value: '*' 
          },
          { 
            key: 'Access-Control-Allow-Methods', 
            value: 'GET, POST, PUT, DELETE' 
          },
          { 
            key: 'Access-Control-Allow-Headers', 
            value: 'Content-Type' 
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
    domains:['emugallym.edu.tm']
  },

  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

export default nextConfig;
