import React from 'react'
import NLink from 'next/link'
import { Link, Stack, Typography } from '@mui/material'

const Band = () => {
  return (
    <Stack spacing={4} px={8} py={4}>
      <Typography variant='h4'>About this POC</Typography>
      <Typography variant='h6' gutterBottom>
          <NLink href='/about/tech' passHref>
            <Link>
              About the technology explored in this demo
            </Link>
          </NLink>
        </Typography>
    </Stack>
  )
}

export default Band
