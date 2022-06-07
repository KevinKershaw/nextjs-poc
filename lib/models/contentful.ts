export interface Item {
  id: string
  title: string
  summary: string
  disclaimer: string
  logo?: Logo
}

export interface YieldCurveCollection {
  items: Item[]
}

export interface Data {
  yieldCurveCollection: YieldCurveCollection
}

export interface YieldCurveResponse {
  data: Data
}
export interface Logo {
  url: string
}

export type YieldCurveTypes = 'yc-bloomberg'
