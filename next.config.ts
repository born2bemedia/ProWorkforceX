import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    GOOGLE_TRANSLATION_CONFIG: JSON.stringify({
      languages: [
        { title: 'English', name: 'en' },
        { title: 'Deutsch', name: 'de' },
        { title: 'Italiano', name: 'it' },
      ],
      defaultLanguage: 'en',
    }),
  },
};

export default nextConfig;
