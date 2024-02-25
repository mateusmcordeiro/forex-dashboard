<template>
  <div>
    <Vueform class="mb-4" :model-value="data" @update:model-value="data = $event" :sync="true">
      <TextElement
        name="currencyAmount"
        placeholder="Currency amount"
        :rules="['max:3']"
        :columns="6"
      />
      <TextElement
        name="search"
        placeholder="Search for a currency code on table"
        :rules="['max:3']"
        :columns="6"
      />
    </Vueform>
    <fwb-table striped-columns hoverable>
      <fwb-table-head>
        <fwb-table-head-cell v-for="column in tableColumns">{{ column.title }}</fwb-table-head-cell>
      </fwb-table-head>
      <fwb-table-body>
        <fwb-table-row v-for="columnsInRow in filteredTableData">
          <fwb-table-cell v-for="column in columnsInRow">{{ column }}</fwb-table-cell>
        </fwb-table-row>
      </fwb-table-body>
    </fwb-table>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'

import {
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow
} from 'flowbite-vue'

export type TableColumns = { title: string }[]

const props = defineProps<{
  tableColumns: TableColumns
  tableData: string[][]
}>()

const data = defineModel<{ currencyAmount: Number; search: string }>({
  default: {
    currencyAmount: 1,
    search: ''
  }
})

const filteredTableData = computed(() =>
  props.tableData
    .map(([column, value]) => [
      column,
      new Intl.NumberFormat('id').format(Number(value) * Number(data.value.currencyAmount))
    ])
    .filter(([column]) => column.toLowerCase?.().includes(data.value.search.toLowerCase()))
)
</script>
