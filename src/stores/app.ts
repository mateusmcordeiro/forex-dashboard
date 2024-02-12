import { CurrencyTypes } from '@/core/entities/Currency'
import type { Currency } from '@/core/entities/Currency'
import type { Ref } from 'vue'
import type { ResultTuple } from '@/core/helpers/result'

import { whenever } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const currencies = ref<Currency[]>([])
  const usingCurrencyType = ref<CurrencyTypes>(CurrencyTypes.FIAT)
  const usingCurrencyCode = ref<string>('BRL')

  const setupCurrencies = (currenciesRequestRef: Ref<ResultTuple<Currency[]>>) => {
    whenever(currenciesRequestRef, ([currenciesFromRequest]) => {
      currencies.value = currenciesFromRequest as Currency[]
    })
  }

  return {
    currencies,
    usingCurrencyType,
    usingCurrencyCode,
    setupCurrencies
  }
})
