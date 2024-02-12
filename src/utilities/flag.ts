import type { flagObject } from './currencyFlags'

import { currenciesFlags } from './currencyFlags'

export const flagByCurrencyCode = currenciesFlags.reduce(
  (acc, currency) => ({ ...acc, [currency.code]: currency }),
  {}
)

export function getFlagBy(key: string, value: string): flagObject | undefined {
  return currenciesFlags.find((currency) => currency[key as keyof flagObject] === value)
}
