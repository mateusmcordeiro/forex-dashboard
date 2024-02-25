<template>
  <main class="w-full h-full p-4">
    <FContainer>
      <CurrencySelectorForm
        :currencies="currencies"
        v-model:currency="usingCurrencyCode"
        v-model:currency-type="usingCurrencyType"
        :loading-currencies="isPending"
      />
      <currency-rate-table
        class="mt-4"
        v-model="currencyRateObj"
        :table-columns="tableColumns"
        :table-data="tableData"
      />
    </FContainer>
  </main>
</template>
<script setup lang="ts">
import { getLatestCurrenciesRatesResponse } from '@/core/ports/repositories/CBRequestRepository'

import type { Currency } from '@/core/entities/Currency'
import { computed, reactive, ref, Ref, watch } from 'vue'
import type { ResultTuple } from '@/core/helpers/result'

import { useQuery } from '@tanstack/vue-query'
import { storeToRefs } from 'pinia'

import { useAppStore } from '@/stores/app'
import { getFirstPageData } from '@/core/useCases/getFirstPageData'
import { getRequiredData } from '@/core/useCases/getRequiredData'

import CurrencySelectorForm from '@/components/forms/CurrencySelectorForm.vue'
import CurrencyRateTable from '@/components/CurrencyRateTable.vue'
import FContainer from '@/components/FContainer.vue'

const appStore = useAppStore()
const { setupCurrencies } = appStore
const { usingCurrencyType, usingCurrencyCode, currencies, usingCurrencyObject } =
  storeToRefs(appStore)

const { data: currenciesData, isPending } = useQuery({
  queryKey: ['currencies', usingCurrencyType],
  queryFn: getRequiredData
})
setupCurrencies(currenciesData as Ref<ResultTuple<Currency[]>>)

const { data: firstPageData } = useQuery({
  queryKey: ['firstPageData', usingCurrencyCode],
  queryFn: getFirstPageData
})

const tableData = computed(() => {
  const rates = (firstPageData?.value?.[0] as getLatestCurrenciesRatesResponse)?.rates ?? {}

  return Object.entries(rates).map(([key, value]) => [key, value]) || []
})

const currencyRateObj = reactive({
  currencyAmount: 1,
  search: ''
})

const tableColumns = computed(() => [
  { title: 'Currency code' },
  {
    title: `${usingCurrencyObject.value?.symbol || ''} ${new Intl.NumberFormat('id').format(currencyRateObj.currencyAmount)} ${usingCurrencyCode.value} is equals to:`
  }
])
</script>
