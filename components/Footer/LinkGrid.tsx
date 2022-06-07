import React from 'react'
import { Box, Button, Container, Grid, Link, Stack, Typography } from '@mui/material'
import NLink from 'next/link'

const LinkGrid = () => {
  return (
    <Grid container direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      <Grid item xs={12} sm={4}>
        <Typography variant='body1' fontWeight={500}>
          Get started
        </Typography>
        <NLink href='/' passHref>
          <Link>Find Issuers</Link>
        </NLink>
        <br />
        <NLink href='/' passHref>
          <Link>Find Securities</Link>
        </NLink>
        <br />
        <NLink href='/market-data' passHref>
          <Link>Market Data</Link>
        </NLink>
        <br />
        <NLink href='/market-intelligence' passHref>
          <Link>Market Intelligence</Link>
        </NLink>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant='body1' fontWeight={500}>
          Get help
        </Typography>
        <NLink href='/support' passHref>
          <Link>Support</Link>
        </NLink>
        <br />
        <NLink href='/about/contact' passHref>
          <Link>Contact</Link>
        </NLink>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant='body1' fontWeight={500}>
          About
        </Typography>
        <NLink href='/about' passHref>
          <Link>About EMMA</Link>
        </NLink>
        <br />
        <Link href='https://msrb.org/About-MSRB.aspx' target='_blank' rel='noreferrer'>
          About MSRB
        </Link>
        <br />
        <Link href='https://msrb.org/Careers' target='_blank' rel='noreferrer'>
          Careers
        </Link>
      </Grid>
    </Grid>
  )
}

export default LinkGrid
