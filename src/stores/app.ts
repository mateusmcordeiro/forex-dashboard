import type { Currency, CurrencyTypes } from '@/core/entities/Currency'
import type { Ref } from 'vue'
import type { ResultTuple } from '@/core/helpers/result'

import { CurrencyTypesEnum } from '@/core/entities/Currency'
import { whenever } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  const currencies = ref<Currency[]>([])
  const usingCurrencyType = ref<CurrencyTypes>(CurrencyTypesEnum.FIAT)
  const usingCurrencyCode = ref<string>('BRL')

  const usingCurrencyObject = computed<Currency>(() =>
    currencies.value.find((currency) => currency.shortCode === usingCurrencyCode.value)
  )

  const setupCurrencies = (currenciesRequestRef: Ref<ResultTuple<Currency[]>>) => {
    whenever(currenciesRequestRef, ([currenciesFromRequest]) => {
      currencies.value = currenciesFromRequest as Currency[]
    })
  }

  return {
    currencies,
    usingCurrencyType,
    usingCurrencyCode,
    usingCurrencyObject,
    setupCurrencies
  }
})
