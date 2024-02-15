import { QueryClient } from '@tanstack/react-query'

export const invalidateCustomersQueries = async (queryClient: QueryClient) => {
  const queryCache = queryClient.getQueryCache()
  queryCache.getAll()
    .map(cache => cache.queryKey)
    .filter((queryKey) => queryKey[0] === 'customers')
    .forEach((queryKey) => {
      queryClient.invalidateQueries({
        queryKey: queryKey
      })
    })
}
