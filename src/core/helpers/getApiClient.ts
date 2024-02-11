import type { Repository } from '@/core/ports/Repository'

export const getApiClient = async <T>([providerName, adapterName, repositoryName]: [
  string,
  string,
  string
]): Promise<T> => {
  const FetchClientProvider = (await import(`@/core/providers/${providerName}.ts`)).default
  const FetchClientAdapter = (await import(`@/core/adapters/${adapterName}.ts`)).default
  const FetchRepositoryModule = await import(`@/core/repositories/${repositoryName}.ts`)
  const FetchRepository = FetchRepositoryModule[repositoryName]
  const fetchClient = FetchClientProvider(FetchClientAdapter)
  const requestRepository = FetchRepository(fetchClient)

  return requestRepository
}
