import type { FetchClient } from '@/core/ports/FetchClient'

export type Repository<T> = (FetchClient: FetchClient) => T
