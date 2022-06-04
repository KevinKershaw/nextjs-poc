import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { isLoggedIn } from 'lib/auth'
import { Box, Button, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import classes from './Home.module.css'

const BlueBand = () => {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null)

  useEffect(() => {
    setLoggedIn(isLoggedIn())
  }, [])

  return (
    <Box className={classes.blueGradient} sx={{ p: 5 }}>
      <Container maxWidth={false}>
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='center' spacing={4}>
          <Box>
            <Typography variant='h1' color='white' gutterBottom>
              The Official Source for Municipal Securities Data and Documents
            </Typography>
            <Typography variant='h3' color='white' gutterBottom>
              Provided by the Municipal Securities Rulemaking Board
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent='left' mt={3}>
              <Button size='large' variant='text' sx={{ backgroundColor: 'white', '&:hover': { backgroundColor: 'rgba(222, 222, 222, 0.94)' }, px: 8 }}>
                Find Issuer
              </Button>
              <Button size='large' variant='text' sx={{ backgroundColor: 'white', '&:hover': { backgroundColor: 'rgba(222, 222, 222, 0.94)' }, px: 8 }}>
                Find Securities
              </Button>
            </Stack>
          </Box>
          <Box>
            <Card sx={{ width: {xs: '100%', sm: 350}, p: 2, textAlign: 'center', margin: 'auto' }}>
              <CardContent>
                <Typography variant='h3' sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                  Welcome to EMMA
                </Typography>
                <Box p={1}>
                  <Image src='/images/user-names-dashboard.png' height={158} width={276} alt='Fake User Dashboard' />
                </Box>
                <Typography variant='body1'>
                  Submit disclosures, monitor securities and manage portfolios all in one place. Login now for full access to customizable features like dashboards and alerts.
                </Typography>
                <Stack direction={'row'} spacing={3} mt={2} justifyContent='center'>
                  {loggedIn === false && (
                    <>
                      <Button variant='outlined'>Sign Up</Button>
                      <Button variant='contained'>Sign In</Button>
                    </>
                  )}
                  {loggedIn === true && <Button variant='outlined'>My Account</Button>}
                  {loggedIn === null && <Button>&nbsp;</Button>}
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default BlueBand
