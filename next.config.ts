import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.tsx'
        }
      }
    }
  }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
