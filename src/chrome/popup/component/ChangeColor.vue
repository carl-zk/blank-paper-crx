<script setup lang="ts">
import { onMounted, reactive, computed, ref } from 'vue';
import { useLogger } from 'vue-logger-plugin';
import { defineStore } from 'pinia'

const log = useLogger()
const useColorStore = defineStore('color', () => {
  const myColor = ref('#3aa757')
  function changeColor(color: string) {
    myColor.value = color
    localStorage.setItem('color', color)
  }
  return { myColor, changeColor }
})

const colorStore = useColorStore()

async function changeBackgroundColor() {
  log.info('enter changeBackgroundColor');
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  log.info('changeBackgroundColor tab is ..', tab)
  if (tab.url?.startsWith('chrome:')) {
    log.info('ignore', tab.url)
    return
  }
  try {
    log.info('start')
    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: setPageBackgroundColor
    });
  } catch (error) {
    log.error('executeScript err {}', error);
  }
  log.info('end')
}

function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    // can't use `log` here
    console.info('enter setBackgroundColor');
    document.body.style.backgroundColor = color;
  });
}

onMounted(() => {
  chrome.storage.sync.get("color", ({ color }) => {
    colorStore.changeColor(color)
  })
})
</script>

<template>
  <div class="content">
    <p>click this to change a web background color</p>
    <button id="changeColor" :style="{ 'background-color': colorStore.myColor }" @click="changeBackgroundColor" />
    <p>this is chrome extension demo <a href="https://developer.chrome.com/docs/extensions/mv3/getstarted/">Getting
        started</a> </p>
  </div>
</template>

<style scoped lang="scss">
#changeColor {
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

.content {
  min-width: 700px;
  min-height: 400px;
}
</style>