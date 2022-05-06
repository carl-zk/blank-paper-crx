<script setup lang="ts" >
import { onMounted, reactive, computed, ref } from 'vue';
import type { MenuOption } from 'naive-ui'
import { menus } from './data'
import { RouterView } from 'vue-router';

const activeKey = ref<string | null>(null)
const collapsed = ref(true)
const menuOptions: MenuOption[] = menus
</script>

<template>
  <n-space vertical size="large">
    <n-layout has-sider>
      <n-layout-sider bordered collapse-mode="width" :collapsed-width="64" :width="240" :collapsed="collapsed"
        show-trigger @collapse="collapsed = true" @expand="collapsed = false">
        <n-menu v-model:value="activeKey" :collapsed="collapsed" :collapsed-width="64" :collapsed-icon-size="22"
          :options="menuOptions" :default-expanded-keys="['dance-dance-dance']" />
      </n-layout-sider>
      <n-layout content-style="padding: 10px">
        <router-view></router-view>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<style scoped lang="scss">
</style>