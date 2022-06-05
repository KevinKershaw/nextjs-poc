import React from 'react'
import router from 'next/router'
import { Box, Button, Grid } from '@mui/material'

const DesktopMenu = () => {
  return (
    <Box justifyContent='space-evenly' sx={{ display: { xs: 'none', md: 'flex' } }}>
      <Button variant='text' onClick={() => router.push('/market-data')}>
        Market Data
      </Button>
      <Button variant='text' onClick={() => router.push('/market-intelligence')}>
        Market Intelligence
      </Button>
      <Button variant='text' onClick={() => router.push('/about')}>
        About
      </Button>
      <Button variant='text' onClick={() => router.push('/support')}>
        Support
      </Button>
    </Box>
  )
}

export default DesktopMenu
