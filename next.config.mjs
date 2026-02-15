/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
      { protocol: 'https', hostname: 'cdn.worldvectorlogo.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'img.icons8.com' },
      { protocol: 'https', hostname: 'www.dockhunt.com' },
      { protocol: 'https', hostname: 'iconlogovector.com' },
      { protocol: 'https', hostname: 'cdn.lafabriquedunet.fr' },
    ],
  },
}

export default nextConfig
