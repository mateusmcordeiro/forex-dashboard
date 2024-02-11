import type { Repository } from '@/core/ports/Repository'
import type { CBRequestRepository as CBRRepository } from '@/core/ports/repositories/CBRequestRepository'

import { Result } from '@/core/helpers/result'

export const CBRequestRepository: Repository<CBRRepository> = (FetchClient) => ({
  getLatestCurrenciesRates: async ({ base }, signal) => {
    try {
      const query = {
        base
      }

      const latestRates = await FetchClient(`/latest`, {
        query,
        signal
      })

      return Result.ok(latestRates)
    } catch (error) {
      return Result.error({
        message: `Error while fetching latest currencies rates`,
        source: 'CBRequestRepository.getLatestCurrenciesRates',
        originalErrorObject: error as Error
      })
    }
  }
})
