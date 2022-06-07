import axios, { AxiosRequestConfig } from 'axios'
import { YieldCurveCollection, YieldCurveResponse, YieldCurveTypes } from './models/contentful'

const url = `${process.env.CONTENTFUL_GRAPH_BASE_URL}${process.env.CONTENTFUL_SPACE_ID}?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`

const allQuery = `query {
  yieldCurveCollection {
    items {
      id
      title
      summary
      disclaimer
      logo {
          url
      }
    }
  }
}`

const config: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export async function getAllYieldCurves(): Promise<YieldCurveCollection> {
  let body = JSON.stringify({ allQuery })
  let resp = await axios.post(url, body, config)
  let data = (await resp.data) as YieldCurveResponse
  return data.data.yieldCurveCollection
}

export async function getYieldCurveByType(type: YieldCurveTypes) {
  const query = `query {
    yieldCurveCollection(where: {
        id: "${type}"
    }) {
        items  {
        id
        title
        summary
        disclaimer
        logo {
            url
            }
        }
    }
}`
  let body = JSON.stringify({ query })
  let resp = await axios.post(url, body, config)
  let data = (await resp.data) as YieldCurveResponse
  return data.data.yieldCurveCollection.items[0]
}
