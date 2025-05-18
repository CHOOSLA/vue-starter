<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://github.com/choosla" target="_blank">
      <img src="/choosla.svg" class="logo" alt="Choosla logo" />
    </a>
  </div>
  <HelloWorld msg="Choosla Vue Starter" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #0C52BB);
}
</style>
