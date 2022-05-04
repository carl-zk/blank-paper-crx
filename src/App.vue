<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import HelloWorld from '@components/HelloWorld.vue'
// import Popup from '/src/chrome/popup/App.vue'
let baseUrl = import.meta.env.BASE_URL
let app = APP_ENV 
</script>

<template>
  <a href="/chrome/popup/index.html">popup</a>
  <br />
  <a href="/chrome/option/index.html">option</a>
  <br />
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <!-- <Popup /> -->
<a>{{ baseUrl }}, {{ app }}, 'aaa'</a>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
