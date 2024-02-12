import type { FetchClient, FetchClientOptions } from '@/core/ports/FetchClient'
import { deepCamelCaseKeys } from '@/utilities/camelise'

const fetchClientOptions: Partial<FetchClientOptions> = {
  baseURL: import.meta.env.VITE_CURRENCYBEACON_API_URL,
  async onRequest({ options }) {
    options.query = {
      ...options.query,
      api_key: import.meta.env.VITE_CURRENCYBEACON_API_KEY
    }
  },
  async onResponse(responseContext) {
    responseContext.response._data = deepCamelCaseKeys(responseContext.response._data.response) // this is a specific thing from this API, by some reason they send the response inside a response object
  }
}

export default (RequestClient: FetchClient) =>
  RequestClient.create({
    ...fetchClientOptions
  }) as FetchClient
