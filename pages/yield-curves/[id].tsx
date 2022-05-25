import React from 'react'
import type { NextPage } from 'next'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getTxs, TxData } from 'lib/getTxs'
import type { YieldCurveData } from 'lib/model'
import YieldCurveLayout from 'components/YieldCurveLayout3'
import { getYieldCurveData } from 'lib/yieldCurveRepo'

const providers = ['bloomberg', 'bondwave', 'ice', 'ihs', 'mbis', 'snp', 'treasury']

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = providers.map((p) => `/yield-curves/${p}`)
  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string
  const data = await getYieldCurveData()
  const list1 = await getTxs(`pg-yc-${id}-head:`)
  const list2 = await getTxs(`pg-yc-${id}-ref:`)
  const list3 = await getTxs(`pg-yc-${id}-detail:`)
  return {
    props: {
      id: id,
      data,
      list1,
      list2,
      list3,
    },
  }
}

const ProviderData: NextPage<{ id: string; data: YieldCurveData; list1: TxData[]; list2: TxData[]; list3: TxData[] }> = ({ id, data, list1, list2, list3 }) => {
  return <YieldCurveLayout data={data} list1={list1} list2={list2} list3={list3} />
}

export default ProviderData
