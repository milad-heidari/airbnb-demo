/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['links.papareact.com','a0.muscache.com','jsonkeeper.com']
  }
}

module.exports = nextConfig
