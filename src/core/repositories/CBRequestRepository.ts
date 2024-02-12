import type { Repository } from '@/core/ports/Repository'
import type { CBRequestRepository as CBRRepository } from '@/core/ports/repositories/CBRequestRepository'

import { Result } from '@/core/helpers/result'

export const CBRequestRepository: Repository<CBRRepository> = (FetchClient) => ({
  getCurrencies: async ({ type }, signal) => {
    try {
      const query = {
        type
      }

      const currencies = await FetchClient('/currencies', {
        query,
        signal
      })

      return Result.ok(currencies)
    } catch (error) {
      return Result.error({
        message: 'Error while fetching currencies currencies',
        source: 'CBRequestRepository.getCurrencies',
        originalErrorObject: error as Error
      })
    }
  },
  getLatestCurrenciesRates: async ({ base }, signal) => {
    try {
      const query = {
        base
      }

      const latestRates = await FetchClient('/latest', {
        query,
        signal
      })

      return Result.ok(latestRates)
    } catch (error) {
      return Result.error({
        message: 'Error while fetching latest currencies rates',
        source: 'CBRequestRepository.getLatestCurrenciesRates',
        originalErrorObject: error as Error
      })
    }
  },
  getCurrencyConversion: async ({ from, to, amount }, signal) => {
    try {
      const query = {
        from,
        to,
        amount
      }

      const conversion = await FetchClient('/convert', {
        query,
        signal
      })

      return Result.ok(conversion)
    } catch (error) {
      return Result.error({
        message: 'Error while fetching currency conversion',
        source: 'CBRequestRepository.getCurrencyConversion',
        originalErrorObject: error as Error
      })
    }
  },
  getCurrencyHistorical: async ({ base, date, symbols }, signal) => {
    try {
      const query = {
        base,
        date,
        symbols
      }

      const historical = await FetchClient('/historical', {
        query,
        signal
      })

      return Result.ok(historical)
    } catch (error) {
      return Result.error({
        message: 'Error while fetching currency historical',
        source: 'CBRequestRepository.getCurrencyHistorical',
        originalErrorObject: error as Error
      })
    }
  }
})
