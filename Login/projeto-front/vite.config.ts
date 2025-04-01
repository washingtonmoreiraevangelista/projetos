import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return{
  plugins: [react()],
    server: {
    proxy: {
      '/api': {
        target: env.VITE_PROJETO_BACK,
          changeOrigin: true,
            secure: false,
              rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
}
})
