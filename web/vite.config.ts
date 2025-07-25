import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-repo',
      configureServer(server) {
        server.middlewares.use('/repo', (req, res, next) => {
          const repoPath = path.join(path.resolve(), '..', 'arche-linux', 'repo');
          const url = (req as { url: string }).url || '';
          const filePath = path.join(repoPath, url);
          
          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            res.setHeader('Content-Type', 'application/octet-stream');
            fs.createReadStream(filePath).pipe(res);
          } else {
            next();
          }
        });
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  appType: 'spa',
});
