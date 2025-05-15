import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// 👇 추가된 import
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),

    // ✅ Vue API 자동 임포트
    AutoImport({
      imports: [
        'vue',         // ref, reactive, watch 등
        'vue-router',  // useRoute, useRouter 등
        '@vueuse/core' // optional: VueUse 사용 시
      ],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),

    // ✅ Vue 컴포넌트 자동 임포트 + 아이콘 컴포넌트 지원
    Components({
      dts: 'src/components.d.ts',
      resolvers: [
        IconsResolver({
          prefix: 'Icon', // ex: <IconMdiAccount />
          enabledCollections: ['mdi', 'tabler'], // 원하는 컬렉션만 사용
        }),
      ],
    }),

    // ✅ 아이콘 SVG 자동 컴포넌트화
    Icons({
      autoInstall: true,
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
