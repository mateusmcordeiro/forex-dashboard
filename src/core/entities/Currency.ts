export enum CurrencyTypesEnum {
  FIAT = 'fiat',
  CRYPTO = 'crypto'
}

export type CurrencyTypes = (typeof CurrencyTypesEnum)[keyof typeof CurrencyTypesEnum]

export type Currency = {
  id: number
  name: string
  code: string
  precision: number
  shortCode: string
  subunit: number
  symbol: string
  symbolFirst: boolean
  decimalMark: string
  thousandsSeparator: string
}
