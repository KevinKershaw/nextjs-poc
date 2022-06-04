import { Box, Link, Stack, Typography } from '@mui/material'
import NLink from 'next/link'
import React from 'react'

const AboutTech = () => {
  return (
    <Stack px={8} pb={4}>
      <Box>
        <Typography variant='h4' gutterBottom>
          <NLink href='/about/tech' passHref>
            <Link>
              About the technology explored in this demo
            </Link>
          </NLink>
        </Typography>
      </Box>
    </Stack>
  )
}

export default AboutTech
