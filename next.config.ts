import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  assetPrefix: "https://blog.jzdev.cc/",
  // trailingSlash: true,
  // images: {
  //   loader: "imgix", // Other options include "default" and "akamai"
  // }
};

export default nextConfig;
