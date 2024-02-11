import type { ResultTuple } from '@/core/helpers/result'

type getLatestCurrenciesRatesResponse = {
  base: string
  date: string
  rates: Record<string, number>
}

type getLatestCurrenciesRatesOptions = [{ base: string }, AbortSignal | undefined]

export type CBRequestRepository = {
  getLatestCurrenciesRates(
    ...options: getLatestCurrenciesRatesOptions
  ): Promise<ResultTuple<getLatestCurrenciesRatesResponse>>
}
