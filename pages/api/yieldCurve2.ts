
import type { NextApiRequest, NextApiResponse } from 'next'
import {getYieldCurveData, YieldCurveData} from 'lib/yieldCurveRepo'
import { getTxs, TxData } from 'lib/getTxs'

export interface YieldCurveProviderData {
  providerName?: string
  data: YieldCurveData
  list1: TxData[]
  list2: TxData[]
  list3: TxData[]
  list4: TxData[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<YieldCurveProviderData>) {
  const providerName = req.query['provider'] as string
  const data = await getYieldCurveData()
  const list1 = await getTxs(`pg-yc-${providerName}-head:`)
  const list2 = await getTxs(`pg-yc-${providerName}-detail:`)
  const list3 = await getTxs(`pg-yc-${providerName}-ref:`)
  const list4 = await getTxs(`pg-yc-${providerName}-legal:`)
  const ret: YieldCurveProviderData = {
    providerName: providerName,
    data: data,
    list1: list1,
    list2: list2,
    list3: list3,
    list4: list4
  }
  res.status(200).json(ret)  
}
