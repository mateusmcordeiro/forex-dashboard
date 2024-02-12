import type { Currency } from '@/core/entities/Currency'
import type { ResultTuple } from '@/core/helpers/result'

type getCurrenciesResponse = Currency[]
type getCurrenciesOptions = [{ type: string }, AbortSignal | undefined]

type CurrencyRates = Record<string, number>

type getLatestCurrenciesRatesResponse = {
  base: string
  date: string
  rates: CurrencyRates
}
type getLatestCurrenciesRatesOptions = [{ base: string }, AbortSignal | undefined]

type getCurrencyConversionOptions = [
  { from: string; to?: string; amount: string },
  AbortSignal | undefined
]
type getCurrencyConversionResponse = {
  timestamp: number
  from: string
  to: string
  amount: number
  value: number
}

type getCurrencyHistoricalOptions = [
  {
    base: string
    date: string
    symbols?: string[]
  },
  AbortSignal | undefined
]
type getCurrencyHistoricalResponse = {
  date: string
  base: string
  rates: CurrencyRates
}

export type CBRequestRepository = {
  getCurrencies(...options: getCurrenciesOptions): Promise<ResultTuple<getCurrenciesResponse>>
  getLatestCurrenciesRates(
    ...options: getLatestCurrenciesRatesOptions
  ): Promise<ResultTuple<getLatestCurrenciesRatesResponse>>
  getCurrencyConversion(
    ...options: getCurrencyConversionOptions
  ): Promise<ResultTuple<getCurrencyConversionResponse>>
  getCurrencyHistorical(
    ...options: getCurrencyHistoricalOptions
  ): Promise<ResultTuple<getCurrencyHistoricalResponse>>
}
