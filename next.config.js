/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'pokemon.ekuator.id'
      }
    ]
  }
}

module.exports = nextConfig
