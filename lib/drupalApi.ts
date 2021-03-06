import { DrupalNode } from 'next-drupal'
import { DrupalJsonApiParams } from 'drupal-jsonapi-params'
import { drupalClient, gql } from 'lib/drupalGraphQL'

export async function getAllArticles() {
  var resp = await fetch('https://dev-devtest00.pantheonsite.io/jsonapi/node/article/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  let json = await resp.json()
  let allArticles = json.data as DrupalNode[]
  return allArticles
}

export async function getRules() {
  testGraphQL()
  const drupalSite = process.env.DUPAL_SITE
  const apiParams = new DrupalJsonApiParams()
  apiParams.addFilter('title', 'Rule%20G', 'STARTS_WITH')
  apiParams.addFields('node--article', ['id', 'title']).addSort('title')
  let url = `${drupalSite}node/article/?${apiParams.getQueryString({ encode: false })}`
  var resp = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  let json = await resp.json()
  let allArticles = json.data as DrupalNode[]
  return allArticles
}

export async function getArticle(id: string) {
  var resp = await fetch(`${process.env.DUPAL_SITE}node/article/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  let json = await resp.json()

  let result = json.data as DrupalNode
  return result
}

async function testGraphQL() {
  const client = drupalClient()
  const { data } = await client.query({
    query: gql`
      query MyQuery {
        articles(limit: 10) {
          items {
            title
            id
          }
        }
      }
    `,
  })
}
