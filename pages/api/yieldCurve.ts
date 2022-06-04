import type { NextApiRequest, NextApiResponse } from 'next'
import { getYieldCurveData, YieldCurveData } from 'lib/yieldCurveRepo'

export default async function handler(req: NextApiRequest, res: NextApiResponse<YieldCurveData | undefined>) {
  var data = await getYieldCurveData()
  res.status(200).json(data)
}
