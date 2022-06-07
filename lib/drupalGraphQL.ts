import { ApolloClient, InMemoryCache, NormalizedCacheObject, gql } from '@apollo/client'

let client: ApolloClient<NormalizedCacheObject> | undefined = undefined

const drupalClient = (): ApolloClient<NormalizedCacheObject> => {
  if (client === undefined) {
    client = new ApolloClient({
      uri: process.env.DRUPAL_GRAPHQL,
      cache: new InMemoryCache(),
    })
  }
  return client
}

export { drupalClient, gql }
