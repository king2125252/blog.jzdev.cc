import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  assetPrefix: "https://blog.jzdev.cc/",
  trailingSlash: false,
    images: {
    unoptimized: true, // 只有前端無法使用圖片優化
  },
};

export default nextConfig;
