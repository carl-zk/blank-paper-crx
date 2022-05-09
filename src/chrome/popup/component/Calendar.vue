<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';
import { useLoadingBar, DrawerPlacement } from 'naive-ui'

const loadingBar = useLoadingBar()
const clicked_date = ref('')
const active = ref(false)
const placement = ref<DrawerPlacement>('right')
const activate = (place: DrawerPlacement) => {
  active.value = true
  placement.value = place
}
onBeforeMount(() => {
  loadingBar.start()
})

onMounted(() => {
  let frame = (document.getElementById('frame_calendar') as HTMLIFrameElement)!
  frame.onload = () => {
    loadingBar.finish()
  }
  chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
      console.log(sender.tab ?
        "from a content script:" + sender.tab.url :
        "from the extension");
      console.log('clicked date is ', request.clicked_date)
      clicked_date.value = request.clicked_date
      sendResponse({ farewell: "goodbye" })
    }
  )
})
</script>

<template>
  <div :style="{ width: '700px', display: 'flex' }">
    <iframe id='frame_calendar' src="https://wannianrili.bmcx.com/" scrolling="no" frameborder="0" onerror=""
      class="trend-container2"></iframe>
    <n-drawer v-model:show="active" :width="502" :placement="placement">
      <n-drawer-content title="斯通纳">
        《斯通纳》是美国作家约翰·威廉姆斯在 1965 年出版的小说。
      </n-drawer-content>
    </n-drawer>
    <div class="green">
      <n-button type="primary" @click="activate('right')">
        备忘录
      </n-button>
      <br>
      TODO<br>
      put some reminder here<br>
      {{ clicked_date }}
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