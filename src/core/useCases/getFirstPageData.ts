import type { CBRequestRepository } from '@/core/ports/repositories/CBRequestRepository'
import type { QueryFunctionContext } from '@tanstack/vue-query'

import { getApiClient } from '@/core/helpers/getApiClient'
import { Result } from '@/core/helpers/result'

export async function getFirstPageData({ queryKey, signal }: Partial<QueryFunctionContext>) {
  const [base] = queryKey as [string]
  try {
    const apiClient = await getApiClient<CBRequestRepository>([
      'CBRequestClientProvider',
      'ofetch',
      'CBRequestRepository'
    ])

    return await apiClient.getLatestCurrenciesRates({ base }, signal)
  } catch (error) {
    return Result.error({
      message: `Error while fetching fistPageData for base ${base}`,
      source: 'getFirstPageData',
      originalErrorObject: error as Error
    })
  }
}
