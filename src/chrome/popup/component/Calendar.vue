<script setup lang="ts">
import { onBeforeMount, onMounted } from 'vue';
import { useLoadingBar } from 'naive-ui'

const loadingBar = useLoadingBar()

onBeforeMount(() => {
  loadingBar.start()
})

onMounted(() => {
  let frame = (document.getElementById('frame_calendar') as HTMLIFrameElement)!
  frame.onload = () => {
    loadingBar.finish()
  }
})
</script>

<template>
  <div :style="{ width: '700px', display: 'flex' }">
    <iframe id='frame_calendar' src="https://wannianrili.bmcx.com/" scrolling="no" frameborder="0" onerror=""
      class="trend-container2"></iframe>
    <div class="green">
      TODO<br>
      put some reminder here
    </div>
  </div>
</template>

<style scoped lang="scss">
.trend-container2 {
  position: relative;
  width: 500px;
  min-height: 700px;
  padding-bottom: 16px;
}

.green {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 700px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>