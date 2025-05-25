<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="space-y-5">
    <h1>{{ msg }}</h1>
    <!-- tailwindCSS -->
    <div class="flex justify-center space-x-4">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg"
        class="h-16 w-auto"
        alt="Vite"
        title="Vite"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
        class="h-16 w-auto"
        alt="Vue.js"
        title="Vue.js"
      />
      <img
        src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
        class="h-16 w-auto"
        alt="Tailwind CSS"
        title="Tailwind CSS"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg"
        class="h-16 w-auto"
        alt="ESLint"
        title="ESLint"
      />
      <img
        src="https://icons.duckduckgo.com/ip3/prettier.io.ico"
        class="h-16 w-auto"
        alt="Prettier"
        title="Prettier"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        class="h-16 w-auto"
        alt="JavaScript"
        title="Auto Import"
      />
      <img src="https://vitest.dev/logo.svg" class="h-16 w-auto" alt="Vitest" title="Vitest" />
    </div>

    <h3>Vite + Vue 3 + Tailwind CSS + ESLint + Prettier + Auto Import + Vitest</h3>
    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the
      official Vue + Vite starter
    </p>
    <p>
      Learn more about IDE Support for Vue in the
      <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank"
        >Vue Docs Scaling up Guide</a
      >.
    </p>
    <p class="read-the-docs">Click on the bean logo to visit Github</p>
  </div class="spce-y-3">
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
