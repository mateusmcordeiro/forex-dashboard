<template>
  <main class="w-full h-full p-4">
    <FContainer>
      <CurrencySelectorForm
        :currencies="currencies"
        v-model:currency="usingCurrencyCode"
        v-model:currency-type="usingCurrencyType"
        :loading-currencies="isPending"
      />
    </FContainer>
  </main>
</template>
<script setup lang="ts">
import type { Currency } from '@/core/entities/Currency'
import type { Ref } from 'vue'
import type { ResultTuple } from '@/core/helpers/result'

import { useQuery } from '@tanstack/vue-query'
import { storeToRefs } from 'pinia'

import { useAppStore } from '@/stores/app'
import { getFirstPageData } from '@/core/useCases/getFirstPageData'
import { getRequiredData } from '@/core/useCases/getRequiredData'
import CurrencySelectorForm from '@/components/forms/CurrencySelectorForm.vue'
import FContainer from '@/components/FContainer.vue'

const appStore = useAppStore()
const { setupCurrencies } = appStore
const { usingCurrencyType, usingCurrencyCode, currencies } = storeToRefs(appStore)

const { data: currenciesData, isPending } = useQuery({
  queryKey: ['currencies', usingCurrencyType],
  queryFn: getRequiredData
})
setupCurrencies(currenciesData as Ref<ResultTuple<Currency[]>>)

const { data: firstPageData } = useQuery({
  queryKey: ['firstPageData', usingCurrencyCode],
  queryFn: getFirstPageData
})
</script>
