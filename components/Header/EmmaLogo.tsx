import React from 'react'
import NLink from 'next/link'
import Image from 'next/image'
import { Box, Link } from '@mui/material'

const EmmaLogo = () => {
  return (
    <Box>
      <NLink href='/' passHref>
        <Link>
          <Image priority src='/images/emma-logo-sm.png' width={130} height={66} alt='EMMA Logo' />
        </Link>
      </NLink>
    </Box>
  )
}

export default EmmaLogo
