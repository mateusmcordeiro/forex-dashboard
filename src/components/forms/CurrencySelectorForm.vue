<template>
  <Vueform
    :sync="false"
    :default="formData"
    :model-value="formData"
    @update:modelValue="changeItens"
  >
    <SelectElement
      name="currencyType"
      placeholder="Currency type"
      :items="currentTypes"
      :columns="6"
    />
    <SelectElement
      name="currency"
      placeholder="Currency"
      :native="false"
      :items="options"
      :columns="6"
      search
      :loading="loadingCurrencies"
    />
  </Vueform>
</template>

<script setup lang="ts">
import { CurrencyTypesEnum } from '@/core/entities/Currency'
import type { Currency, CurrencyTypes } from '@/core/entities/Currency'
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
    type: Array as PropType<Currency[]>
  },
  loadingCurrencies: {
    type: Boolean,
    default: true
  }
})

const options = computed(
  () =>
    props.currencies?.map((currency) => ({
      value: currency.shortCode,
      label: currency.name
    })) || []
)

const currentTypes = Object.keys(CurrencyTypesEnum).map((key) => ({
  value: CurrencyTypesEnum[key as keyof typeof CurrencyTypesEnum],
  label: key
}))
const changeItens = ({ currencyType: localCurrencyType, currency: localCurrency }) => {
  if (currencyType.value !== localCurrencyType) currencyType.value = localCurrencyType
  if (currency.value !== localCurrency) currency.value = localCurrency
}
</script>
