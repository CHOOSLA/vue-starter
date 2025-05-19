// 공식 ESLint Flat Config 방식의 구성
import fs from 'node:fs'

import { defineConfig, globalIgnores } from 'eslint/config'

// JavaScript 기본 권장 규칙 셋
import js from '@eslint/js'

// Vue 파일용 ESLint 플러그인
import pluginVue from 'eslint-plugin-vue'

// 코드 스타일 자동 정렬을 위한 Prettier 플러그인
import pluginPrettier from 'eslint-plugin-prettier'

// window, document 등 브라우저 내장 전역 변수 목록
import globals from 'globals'

// import 구문 정리 (순서/중복 검사)용 플러그인
import pluginImport from 'eslint-plugin-import'

// Tailwind 클래스 순서 및 오타 검사용 플러그인
import pluginTailwind from 'eslint-plugin-tailwindcss'

// ESM 환경에서는 JSON을 동적으로 로드해야 함
import vueParser from 'vue-eslint-parser'
const autoImportGlobals = JSON.parse(fs.readFileSync('./.eslintrc-auto-import.json', 'utf-8'))

export default defineConfig([
  {
    name: 'vue-app',
    // 검사할 파일 대상: JS + Vue 파일 포함
    files: ['**/*.{js,mjs,jsx,vue}'],

    languageOptions: {
      // Vue 파일을 위한 전용 파서
      parser: vueParser,

      parserOptions: {
        ecmaVersion: 2020, // 최신 JS 문법 지원
        sourceType: 'module', // import/export 사용 허용
        ecmaFeatures: {
          jsx: true, // Vue JSX 지원 가능하도록 설정 (옵션)
        },
      },

      globals: {
        ...globals.browser, // window, console, etc
        ...autoImportGlobals.globals, // auto-import된 전역 변수들 (ref, computed 등)
      },
    },

    // 사용할 플러그인 목록
    plugins: {
      vue: pluginVue, // Vue 전용 규칙 (template 검사 포함)
      prettier: pluginPrettier, // Prettier 기반 포맷팅 검사
      import: pluginImport, // import 순서, 중복 검사
      tailwindcss: pluginTailwind, // Tailwind class 관련 검사
    },

    // 실제 린트 규칙 정의
    rules: {
      // Vue 관련 경고 및 예외
      'vue/no-unused-vars': 'warn', // template 내에서 선언만 하고 사용하지 않은 변수
      'vue/no-undef-components': 'off', // 전역 등록 컴포넌트 감지 문제로 off (ex: auto-import)

      // JS 기본 규칙
      'no-unused-vars': 'warn', // 변수 선언 후 사용하지 않으면 경고
      'no-undef': 'error', // 정의되지 않은 전역 사용 시 오류

      // import 구문 정렬 규칙
      'import/order': ['warn', { 'newlines-between': 'always' }], // 그룹 간 개행

      // Tailwind 규칙 (클래스명이 자동 생성되는 경우 off)
      'tailwindcss/no-custom-classname': 'off',

      // Prettier와 포맷이 불일치할 경우 경고
      'prettier/prettier': 'warn',
    },
  },

  // 검사 제외할 경로 설정 (빌드 결과물 등)
  globalIgnores(['**/dist/**', '**/coverage/**', '**/.output/**']),

  // JavaScript 기본 권장 설정 추가 (no-unused-vars 등) ESLint 기본구성
  js.configs.recommended,
])
