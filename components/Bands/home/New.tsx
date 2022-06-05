import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const New = () => {
  return (
    <Stack direction='row' px={8} py={2} gap={4}>
      <Box>
        <Typography variant='h2' color='#71bb42'>New!</Typography>
      </Box>
      <Box>
        <Typography variant='h5' gutterBottom>Try navigating Market Intelligence &gt; Yield Curves &amp; Indices &gt; BondWave</Typography>
        <Typography variant='body1'>On mobile devices, start with the hamburger menu in the top left corner</Typography>
      </Box>
    </Stack>
  )
}

export default New
