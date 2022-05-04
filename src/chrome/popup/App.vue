<script setup >
import { onMounted, reactive, computed, ref } from 'vue';
import { useLogger } from 'vue-logger-plugin';

const log = useLogger()
const myColor = ref('#3aa757')

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
      target: { tabId: tab.id },
      function: setPageBackgroundColor
    });
  } catch (error) {
    log.error(error)
    // log.error('executeScript err {}', error);
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
    myColor.value = color
  })
})
</script>

<template>
  <button id="changeColor" :style="{ 'background-color': myColor }" @click="changeBackgroundColor" />
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