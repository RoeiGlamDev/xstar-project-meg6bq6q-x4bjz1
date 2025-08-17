import { createNextConfig } from 'next/dist/server/config-shared';

const nextConfig = createNextConfig({
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Replace with your image hosting domain
    formats: ['image/avif', 'image/webp']
},
  optimization: {
    images: {
      loader: 'default',
      path: '/'
}
},
  webpack: (config) => {
    config.module.rules.push({
      test: /\.glb$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
}
}
});
    return config;
  },
  experimental: {
    optimizeCss: true
}
});

export default nextConfig;