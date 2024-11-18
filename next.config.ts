import type { NextConfig } from "next";

const nextConfig =  {
  rewrites: () => [
    {
      source: "/usuarios",
      destination: "/users",
    }
  ]
};
export default nextConfig;
