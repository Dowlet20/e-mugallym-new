/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: false,
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

    domains: ['10.10.73.31','10.20.7.41','10.20.8.41','127.0.0.1', '216.250.14.39']
  },

  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

export default nextConfig;
