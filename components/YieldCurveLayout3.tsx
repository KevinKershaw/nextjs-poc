import Image from 'next/image'
import React from 'react'
import router from 'next/router'
import type { YieldCurveData } from 'lib/model'
import { Box, Button, Card, Container, Grid, Stack, Tab, Tabs, Typography } from '@mui/material'
import FoldedTable from './FoldedTable'
import { TxData } from 'lib/getTxs'
import { TxList } from 'components/Tx'
import YieldCurveChart from './Organisms/Charts/YieldCurveChart2'
import bondwaveImage from 'assets/yc/logos/bondwave.png'

const YieldCurveLayout = ({ data, list1, list2, list3, list4 }: { data: YieldCurveData; list1: TxData[]; list2: TxData[]; list3: TxData[]; list4: TxData[] }) => {
  return (
    <>
      {/* <Button sx={{ height: 60, width: 200 }} variant='outlined' onClick={() => {}}> */}
      {/* </Button> */}
      <Box sx={{ minHeight: 500 }}>
        <Box sx={{ mx: 5 }}>
          <Button
            variant='text'
            onClick={() => {
              router.push('/yield-curves')
            }}
          >
            &#8592; Back
          </Button>
          <Box sx={{ pl: 0.5 }}>
            <Image src={bondwaveImage} height={38} width={161} alt='BondWave' />
          </Box>
          <TxList txs={list1} />
        </Box>
        <Stack spacing={8} sx={{ mx: 5, mt: 4, mb: 6 }}>
          <YieldCurveChart data={data} />
          <Box sx={{ minHeight: 203 }}>
            <FoldedTable data={data} />
          </Box>
        </Stack>
        <Box display={'flex'} sx={{ borderTop: '1px solid lightgray', backgroundColor: '#ccecfc', px: 5, py: 3, gap: 4, flexDirection: { lg: 'row', xs: 'column' } }}>
          <Box minWidth={{ lg: 350, xs: 'unset' }}>
            <TxList txs={list2} />
          </Box>
          <Box minWidth={{ lg: 425, xs: 'unset' }}>
            <TxList txs={list3} />
          </Box>
        </Box>
        <Box sx={{ marginTop: 0.5, px: 5, py: 2 }}>
          <TxList txs={list4} />
        </Box>
      </Box>
    </>
  )
}

export default YieldCurveLayout
