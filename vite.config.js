import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// 👉 자동 import + 컴포넌트 + 아이콘
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// // 👉 TailwindCSS 플러그인
// import tailwindcss from '@tailwindcss/vite'

// 👉 테스트를 위한 설정 (Vitest)
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    // tailwindcss(),

    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia', // ✅ Pinia 자동 import
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),

    Components({
      dts: 'src/components.d.ts',
      resolvers: [
        IconsResolver({
          prefix: 'Icon',
          enabledCollections: ['mdi', 'tabler'],
        }),
      ],
    }),

    Icons({
      autoInstall: true,
    }),
  ],

  // 👉 경로 별칭
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  // ✅ Vitest 테스트 환경 구성
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      reporter: ['text', 'html'],
    },
  },
})
