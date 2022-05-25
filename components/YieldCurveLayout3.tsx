import React from 'react'
import router from 'next/router'
import type { YieldCurveData } from 'lib/model'
import { Box, Button, Card, Container, Grid, Stack, Tab, Tabs, Typography } from '@mui/material'
import SimpleTable from './SimpleTable'
import { TxData } from 'lib/getTxs'
import { TxList } from 'components/Tx'
import { foldTable } from 'lib/foldTable'
import YieldCurveChart from './Organisms/Charts/YieldCurveChart2'

const YieldCurveLayout = ({ data, list1, list2, list3 }: { data: YieldCurveData; list1: TxData[]; list2: TxData[]; list3: TxData[] }) => {
  var adjData = foldTable(
    ['Years', 'Yield'],
    data.items.map((i) => [i.yearstomaturity.toString(), `${i.yield}%`]),
    6,
  )

  return (
    <>
      <Box sx={{ minHeight: 500, mb: 3, mt: 1 }}>
        <Card sx={{ mx: 4, py: 2, px:4, border: '1px lightgray solid' }} elevation={2}>
          <Box>
            <Button variant='text' onClick={() => { router.push('/yield-curves') }} > &#8592; Back </Button>
            <TxList txs={list1} />
          </Box>
          <Stack spacing={8} sx={{ mx: 10, mt: 4, mb: 10 }}>
            <YieldCurveChart data={data} />
            <SimpleTable rows={adjData.rows} headers={adjData.headers} width={1100} />
          </Stack>
          <Grid container direction={'row'} gridTemplateColumns={'1fr 2fr'} wrap={'nowrap'} sx={{ borderTop: '1px solid lightgray', marginTop: 0.5, backgroundColor: '#ccecfc', px: 4, py: 2 }}>
            <Grid item minWidth={400}>
              <TxList txs={list2} />
            </Grid>
            <Grid>
              <TxList txs={list3} />
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  )
}

export default YieldCurveLayout
