export enum CurrencyTypes {
  FIAT = 'fiat',
  CRYPTO = 'crypto'
}

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
