import React from 'react'
import type { NextPage } from 'next'
import { Stack } from '@mui/material'
import TopBand from 'components/Bands/market-intelligence/TopBand'
import NavPanels from 'components/Bands/market-intelligence/NavPanels'

const Page: NextPage = () => {
  return (
    <Stack>
      <TopBand />
      <NavPanels />
    </Stack>
  )
}

export default Page
