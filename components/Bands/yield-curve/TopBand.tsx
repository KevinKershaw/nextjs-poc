import { Box, Link, Stack, Typography } from '@mui/material'
import React from 'react'

const TopBand = () => {
  return (
    <Stack direction={'row'} spacing={8} p={8} sx={{ backgroundColor: '#00263a', backgroundImage: 'url(/images/yc-top-band.png)', backgroundPosition: 'right' }}>
      <Box maxWidth={700}>
        <Typography variant='h1' color='white' gutterBottom>
          Yield Curves and Indices
        </Typography>
        <Typography variant='body1' color='white' gutterBottom>
          View daily and historical yield curves and indices from third-party providers, and additional information, including methodology used by each provider.
        </Typography>
        <Typography variant='body1' color='white' gutterBottom>
          <Link color='inherit' href='/' target='_blank' rel='noreferrer'>
            For more information on yield curves and indices, visit EMMA Help
          </Link>
        </Typography>
      </Box>
    </Stack>
  )
}

export default TopBand
