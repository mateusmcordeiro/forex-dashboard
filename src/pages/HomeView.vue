<template>
  <main class="w-full h-full">
    <span class="h-44 w-44 bg-black text-white">
      {{ isPending }}
      {{ isError }}
      {{ data }}
      {{ error }}
    </span>
  </main>
</template>
<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { getFirstPageData } from '@/core/useCases/getFirstPageData'
import { useQuery } from '@tanstack/vue-query'
import { storeToRefs } from 'pinia'

const { usingCurrencyCode } = storeToRefs(useAppStore())

const { isPending, isError, data, error } = useQuery({
  queryKey: [usingCurrencyCode],
  queryFn: getFirstPageData
})
</script>
