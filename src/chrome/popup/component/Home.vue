<script setup lang="ts">
import { ref } from 'vue';
import TodoListVue from './TodoList.vue';

const active = ref(false)
const remainSeconds = ref(3600 * 1000)
const value = ref(40)
const count = ref(0)

</script>

<template>
  <div>
    <n-card title="" size="medium" hoverable>
      <n-space>
        <n-button strong secondary type="success">
          Start
        </n-button>
        <n-button strong secondary type="warning">
          Reset
        </n-button>
        <n-gradient-text :size="18" type="success">
          专注次数达成：{{ count }}
        </n-gradient-text>
      </n-space>
      <n-slider v-model:value="value" :max="120" :step="10" :format-tooltip="(value) => `${value}分钟`" />
    </n-card>

  </div>
  <TodoListVue />
</template>

<style scoped>
.n-card {
  max-width: 700px;
}

.n-gradient-text {
  font-size: 36px;
}
</style>