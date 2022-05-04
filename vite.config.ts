import { defineConfig, loadEnv, LogLevel, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { ViteAliases } from 'vite-aliases'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const enableSourcemap = mode === 'development'
  const prod = mode === 'production'
  const env = loadEnv(mode, process.cwd(), '')

  const entries = {
    option: resolve(__dirname, 'src/chrome/option', 'index.html'),
    popup: resolve(__dirname, 'src/chrome/popup', 'index.html'),
    background: resolve(__dirname, 'src/chrome/background.js'),
  }

  if (mode === 'development') {
    entries['index'] = resolve(__dirname, 'src/index.html')
  }

  return {
    define: {
      APP_ENV: JSON.stringify(mode),
      prod: prod
    },
    root,
    base: env.BASE_URL,
    plugins: [vue(), ViteAliases(), splitVendorChunkPlugin()],
    build: {
      outDir,
      emptyOutDir: true,
      minify: prod,
      rollupOptions: {
        input: entries,
        // external: ['@popup/App.vue', '/src/main.ts'],
        // plugins: [ViteAliases()],
        output: [{
          assetFileNames: "assets/[name]-[hash].[ext]",
          chunkFileNames: "assets/[name]-[hash].js",
          entryFileNames: "chrome/[name].js",
          preserveModules: false,
          compact: prod,
        }],
      },
      sourcemap: enableSourcemap,
      manifest: false,
      watch: {
        include: '/src/**/*'
      }
    },
    publicDir: 'assets',
    json: {
      stringify: true
    },
    esbuild: {
      target: [
        "chrome64",
      ]
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: '/src'
        },
        {
          find: '@popup',
          replacement: '/src/chrome/popup'
        },
        {
          find: '@option',
          replacement: '/src/chrome/option'
        },
        {
          find: '@components',
          replacement: '/src/components'
        }
      ]
    },
    // assetsInclude: ['/src/env.d.ts']
    server: {
      watch: {

      }
    }
  }
})