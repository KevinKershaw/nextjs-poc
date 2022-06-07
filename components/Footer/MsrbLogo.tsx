import React from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'

const MsrbLogo = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Image src='/images/msrb-logo.png' width={182} height={50} alt='MSRB Logo' />
    </Box>
  )
}

export default MsrbLogo
