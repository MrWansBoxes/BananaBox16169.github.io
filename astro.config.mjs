import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
  // Your live address. Because you use a custom domain (ftcbananabox.com),
  // this is the full domain and there is NO "base" setting.
  site: 'https://www.ftcbananabox.com',

  vite: {
    // Lets us import .yaml data files directly (the files in src/data/).
    plugins: [yaml()],
  },
});
