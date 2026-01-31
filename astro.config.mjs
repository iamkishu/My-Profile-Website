import { defineConfig } from 'astro/config';

export default defineConfig({
  // UPDATE: Replace with your GitHub username and repo name for GitHub Pages
  // For Vercel/Netlify, you can use your custom domain or leave as-is
  site: 'https://iamkishu.github.io',
  base: '/',
  integrations: [],
  vite: {
    css: {
      transformer: 'lightningcss'
    }
  }
});
