import { loadEnv } from 'vite';
import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'PUBLIC_URL');
  const publicUrl = env.PUBLIC_URL || '/';

  return {
    base: publicUrl.endsWith('/') ? publicUrl : `${publicUrl}/`,
    server: {
      port: 3000,
    },
    build: {
      outDir: 'build',
    },
    test: {
      environment: 'jsdom',
      setupFiles: ['./src/setupTests.js'],
    },
  };
});
