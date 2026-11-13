import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
        return [
            {
                source: '/resume',
                destination: 'https://drive.google.com/file/d/1hp7wPrxsZy76En91QHUZqFZQP2KdKXjK/view',
                permanent: false,
            }
           ] 
    },
};

export default nextConfig;
