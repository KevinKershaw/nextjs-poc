import { Stack } from '@mui/material'
import Graph from 'components/Bands/yield-curve/Graph'
import SelectProvider from 'components/Bands/yield-curve/SelectProvider'
import Table from 'components/Bands/yield-curve/Table'
import Text from 'components/Bands/yield-curve/Text'
import TopBand from 'components/Bands/yield-curve/TopBand'
import React from 'react'

const index = () => {
  return (
    <Stack>
      <TopBand />
      <SelectProvider />
      {/* <Graph />
      <Table />
      <Text /> */}
    </Stack>
  )
}

export default index