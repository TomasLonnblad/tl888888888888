import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

module.exports = {
  images: {
    remotePatterns: [
      new URL('https://tomaslonnblad.github.io/2.jpg'),
      new URL('https://tomaslonnblad.github.io/3.jpg'),
      new URL('https://tomaslonnblad.github.io/22.jpg'),
    ],
  },
}




export default nextConfig;