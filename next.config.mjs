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

    domains: ['216.250.13.53','216.250.12.100','216.250.14.38','216.250.14.39', '10.10.73.21','10.20.7.41','10.20.8.41']
  },

  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

export default nextConfig;
