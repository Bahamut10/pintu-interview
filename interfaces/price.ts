export interface PriceResponse {
  code: string
  message: string
  payload: CryptoPrice[]
}

export interface CryptoPrice {
  pair: string
  latestPrice: string
  day: null | string
  week: null | string
  month: null | string
  year: null | string
}
