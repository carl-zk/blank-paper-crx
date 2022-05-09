<script setup lang="ts">
import { h, defineComponent } from 'vue'
import { NButton, useMessage, DataTableColumns, NDataTable } from 'naive-ui'

type Song = {
  no: number
  title: string
  length: string
}

const data: Song[] = [
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' }
]

const createColumns = ({
  play
}: {
  play: (row: Song) => void
}): DataTableColumns<Song> => {
  return [
    {
      title: 'No',
      key: 'no'
    },
    {
      title: 'Title',
      key: 'title'
    },
    {
      title: 'Length',
      key: 'length'
    },
    {
      title: 'Action',
      key: 'actions',
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: 'small',
            onClick: () => play(row)
          },
          { default: () => 'Play' }
        )
      }
    }
  ]
}

const message = useMessage()
const columns = createColumns({
  play(row: Song) {
    message.info(`Play ${row.title}`)
  }
})
const pagination = false as const

</script>

<template>
  <n-data-table :columns="columns" :data="data" :pagination="pagination" :bordered="false" class="table" />
</template>

<style scoped>
.table {
  width: 700px;
}
</style>