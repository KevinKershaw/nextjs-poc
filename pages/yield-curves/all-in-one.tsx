import React, { useEffect, useState } from 'react'
import { Box, Stack } from '@mui/material'
import SelectProvider from 'components/Bands/yield-curve/SelectProvider'
import TopBand from 'components/Bands/yield-curve/TopBand'
import YieldCurveLayout from 'components/YieldCurveLayout3'
import type { YieldCurveProviderData } from 'pages/api/yieldCurve2'

const Combined = () => {
  const [showYcl, setShowYcl] = useState(false)
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null)
  const [providerData, setProviderData] = useState<YieldCurveProviderData>({ data: { curve_date: '', items: [] }, list1: [], list2: [], list3: [], list4: [] })

  const providerChangeHandler = (id: string) => {
    const newVal = id === selectedProvider ? null : id
    setSelectedProvider(newVal)
    if (newVal === null) {
      setShowYcl(false)
    }
  }

  useEffect(() => {
    let canceled = false
    const fn = async () => {
      const result = await fetch(`/api/yieldCurve2?provider=${selectedProvider}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await result.json()
      if (!canceled) {
        setProviderData(data)
        setShowYcl(true)
      }
    }
    if (selectedProvider && selectedProvider != providerData.providerName) {
      fn()
    }
    return () => {
      canceled = true
    }
  }, [selectedProvider, providerData.providerName])

  return (
    <Stack>
      <TopBand />
      <SelectProvider externalSelectHandler={providerChangeHandler} />
      <Box display={showYcl ? 'block' : 'none'}>
        <YieldCurveLayout data={providerData.data} list1={providerData.list1} list2={providerData.list2} list3={providerData.list3} list4={providerData.list4} />
      </Box>
    </Stack>
  )
}

export default Combined
