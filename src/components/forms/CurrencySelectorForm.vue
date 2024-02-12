<template>
  <Vueform
    :sync="false"
    :default="formData"
    :model-value="formData"
    @update:modelValue="changeItens"
  >
    <SelectElement name="currencyType" placeholder="CurrencyType" :items="currentTypes" />
    <SelectElement name="currency" placeholder="Currency" :native="false" :items="options" />
  </Vueform>
</template>

<script setup lang="ts">
import { CurrencyTypes } from '@/core/entities/Currency'
import type { Currency } from '@/core/entities/Currency'
import type { PropType } from 'vue'

import { computed } from 'vue'

const currency = defineModel<CurrencyTypes>('currency')

const currencyType = defineModel<Currency['shortCode']>('currencyType')

const formData = computed(() => ({
  currency: currency.value,
  currencyType: currencyType.value
}))

const props = defineProps({
  currencies: {
    type: Array as PropType<Currency[]>,
    required: true
  }
})

const options = computed(() =>
  props.currencies.map((currency) => ({
    value: currency.shortCode,
    label: currency.name
  }))
)

const currentTypes = Object.keys(CurrencyTypes).map((key) => ({
  value: CurrencyTypes[key as keyof typeof CurrencyTypes],
  label: key
}))
const changeItens = ({ currencyType: localCurrencyType, currency: localCurrency }) => {
  if (currencyType.value !== localCurrencyType) currencyType.value = localCurrencyType
  if (currency.value !== localCurrency) currency.value = localCurrency
}
</script>
