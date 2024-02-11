import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const usingCurrencyCode = ref<string>('BRL')

  return {
    usingCurrencyCode
  }
})
