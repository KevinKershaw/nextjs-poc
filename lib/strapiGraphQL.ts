import { ApolloClient, InMemoryCache, NormalizedCacheObject, gql } from '@apollo/client'

let client: ApolloClient<NormalizedCacheObject> | undefined = undefined

const strapiClient = (): ApolloClient<NormalizedCacheObject> => {
  if (client === undefined) {
    client = new ApolloClient({
      uri: process.env.STRAPI_GRAPHQL,
      cache: new InMemoryCache(),
    })
  }
  return client
}

export { strapiClient, gql }
