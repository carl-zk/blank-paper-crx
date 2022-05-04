<script setup>
import { onMounted, ref } from 'vue';

const current = ref(0)
const presetButtonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"];

function handleButtonClick(i) {
  current.value = i
  chrome.storage.sync.set({ color: presetButtonColors[i] });
}

onMounted(() => {
})
</script>

<template>
  <button v-for="(v, i) in presetButtonColors" :id=i :class="[i == current ? 'current' : '']"
    :style="{ 'background-color': v }" @click="handleButtonClick(i)"></button>
  <div>
    <p>Choose a different background color!</p>
  </div>
</template>

<style scoped lang="scss">
button {
  height: 30px;
  width: 30px;
  outline: none;
  margin: 10px;
  border: none;
  border-radius: 2px;
}

button.current {
  box-shadow: 0 0 0 2px white,
    0 0 0 4px black;
}
</style>