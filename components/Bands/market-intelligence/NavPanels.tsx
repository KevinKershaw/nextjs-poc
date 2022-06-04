import React from 'react'
import router from 'next/router'
import { Box, Button, Card, Grid, Typography } from '@mui/material'

const NavPanels = () => {
  const NavTo = (dest: string) => {
    router.push(dest)
  }

  return (
    <Grid container spacing={4} sx={{ p: 8, mb: 2 }}>
      <Grid item>
        <Button onClick={() => NavTo('/yield-curves')}>
          <Card elevation={2} sx={{ minWidth: 200, maxWidth: 400 }}>
            <Box sx={{ height: 120, backgroundColor: '#00263a', color: 'white' }}>a picture perhaps</Box>
            <Box p={2} sx={{ textAlign: 'left' }}>
              <Typography variant='h4' gutterBottom>
                Yield Curves &amp; Indices
              </Typography>
              <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
            </Box>
          </Card>
        </Button>
      </Grid>

      <Grid item>
        <Button onClick={() => NavTo('/market-statistics')}>
          <Card elevation={2} sx={{ minWidth: 200, maxWidth: 400 }}>
            <Box sx={{ height: 120, backgroundColor: '#00263a', color: 'white' }}>a picture perhaps</Box>
            <Box p={2} sx={{ textAlign: 'left' }}>
              <Typography variant='h4' gutterBottom>
                Market Statistics
              </Typography>
              <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
            </Box>
          </Card>
        </Button>
      </Grid>

      <Grid item>
        <Button onClick={() => NavTo('/new-issue-calendar')}>
          <Card elevation={2} sx={{ minWidth: 200, maxWidth: 400 }}>
            <Box sx={{ height: 120, backgroundColor: '#00263a', color: 'white' }}>a picture perhaps</Box>
            <Box p={2} sx={{ textAlign: 'left' }}>
              <Typography variant='h4' gutterBottom>
                New Issue Calendar
              </Typography>
              <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
            </Box>
          </Card>
        </Button>
      </Grid>

      <Grid item>
        <Button onClick={() => NavTo('market-research-reports')}>
          <Card elevation={2} sx={{ minWidth: 200, maxWidth: 400 }}>
            <Box sx={{ height: 120, backgroundColor: '#00263a', color: 'white' }}>a picture perhaps</Box>
            <Box p={2} sx={{ textAlign: 'left' }}>
              <Typography variant='h4' gutterBottom>
                Market Research Reports
              </Typography>
              <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
            </Box>
          </Card>
        </Button>
      </Grid>
    </Grid>
  )
}

export default NavPanels
