import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
        return [
            {
                source: '/resume',
                destination: 'https://drive.google.com/file/d/1nhT4R10S0efEC-pCMQmoQopAfjkWSTve/view',
                permanent: false,
            }
           ] 
    },
};

export default nextConfig;
