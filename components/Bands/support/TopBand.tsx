import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const Band = () => {
  return (
    <Stack spacing={4} px={8} py={4}>
      <Box>
        <Typography variant='h4' gutterBottom>
          Support
        </Typography>
        <Typography variant='body1' gutterBottom>
          If you are happy please contact Adam Cusson
        </Typography>
        <Typography variant='body1' gutterBottom>
          If you have problems, suggestions, or complaints, please contact Kevin Kershaw at kkershaw@msrb.org
        </Typography>
      </Box>
    </Stack>
  )
}

export default Band
