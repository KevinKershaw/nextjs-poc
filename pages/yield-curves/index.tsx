import { Stack } from '@mui/material'
import SelectProvider from 'components/Bands/yield-curve/SelectProvider'
import TopBand from 'components/Bands/yield-curve/TopBand'
import React from 'react'

const index = () => {
  return (
    <Stack>
      <TopBand />
      <SelectProvider />
    </Stack>
  )
}

export default index