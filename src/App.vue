<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="logo-container">
    <a href="https://github.com/choosla" target="_blank">
      <img src="/choosla.svg" class="logo" alt="Choosla logo" />
    </a>
  </div>
  <HelloWorld msg="Vue Starter" />
</template>

<style scoped>
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  height: 10em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #0c52bb);
}
</style>
