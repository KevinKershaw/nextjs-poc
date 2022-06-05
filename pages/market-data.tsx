import React from 'react'
import type { NextPage } from 'next'
import { Stack } from '@mui/material'
import BrowseSecurities from 'components/Bands/market-data/BrowseSecurities'
import BrowseIssuers from 'components/Bands/market-data/BrowseIssuers'
import CompareMunicipalBonds from 'components/Bands/market-data/CompareMunicipalBonds'
import RecentlyTradedSecurities from 'components/Bands/market-data/RecentlyTradedSecurities'
import SetUpSecurityAlerts from 'components/Bands/SetUpSecurityAlerts'

const MarketData: NextPage = () => {
  return (
    <Stack>
      <BrowseSecurities />
      <BrowseIssuers />
      <CompareMunicipalBonds />
      <RecentlyTradedSecurities />
      <SetUpSecurityAlerts />
    </Stack>
  )
}

export default MarketData
