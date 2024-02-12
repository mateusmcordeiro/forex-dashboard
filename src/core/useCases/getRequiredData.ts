import type { CBRequestRepository } from '@/core/ports/repositories/CBRequestRepository'
import type { QueryFunctionContext } from '@tanstack/vue-query'

import { getApiClient } from '@/core/helpers/getApiClient'
import { Result } from '@/core/helpers/result'

export async function getRequiredData({ queryKey, signal }: Partial<QueryFunctionContext>) {
  const [_, type] = queryKey as string[]
  try {
    const apiClient = await getApiClient<CBRequestRepository>([
      'CBRequestClientProvider',
      'ofetch',
      'CBRequestRepository'
    ])

    return await apiClient.getCurrencies({ type }, signal)
  } catch (error) {
    return Result.error({
      message: `Error while fetching getRequiredData for base ${type}`,
      source: 'getRequiredData',
      originalErrorObject: error as Error
    })
  }
}
