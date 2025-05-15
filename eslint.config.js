import prettierPlugin from 'eslint-plugin-prettier'
import configPrettier from 'eslint-config-prettier'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
    languageOptions: {
      parser: require('vue-eslint-parser'),
      parserOptions: {
        parser: require('@babel/eslint-parser'), // 또는 'espree', 'babel-eslint', 상황에 맞게
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      vue: pluginVue,
      prettier: prettierPlugin,
    },
    rules: {
      'vue/no-unused-vars': 'warn',
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'prettier/prettier': 'warn',
    },
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  skipFormatting,
  configPrettier,
])
