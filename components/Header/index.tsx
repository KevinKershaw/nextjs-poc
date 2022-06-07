import React, { useState, useEffect } from 'react'
import { AppBar, Grid, Toolbar, useScrollTrigger } from '@mui/material'
import Head from 'next/head'
import HamburgerMenu from './HamburgerMenu'
import EmmaLogo from './EmmaLogo'
import DesktopMenu from './DesktopMenu'
import Search from './Search'
import AccountButtons from './AccountButtons'

// NOTE: as of 6/3, doesn't seem to do much
// This is used to make the header stick to the top
function ElevationScroll({ children, setElevationEffect }: { children: React.ReactElement<any>; setElevationEffect: (val: boolean) => void }) {
  // const trigger = useScrollTrigger({
  //   disableHysteresis: true,
  //   threshold: 0,
  // })
  // setElevationEffect(trigger)
  // return React.cloneElement(children, {
  //   //elevation: trigger ? 8 : 4,
  // })
  return children
}

const EmmaHeader = () => {
  const [elevationEffect, setElevationEffect] = useState(false)

  const bodyScrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  useEffect(() => {
    setElevationEffect(bodyScrolled)
  }, [bodyScrolled])

  return (
    <>
      <Head>
        <title>Municipal Securities Rulemaking Board::EMMA</title>
      </Head>
      <AppBar sx={{ backgroundColor: 'white' }} position='sticky' elevation={elevationEffect ? 4 : 0}>
        <Toolbar sx={{ width: '100%', mx: 'auto', p: 0 }}>
          <Grid container alignItems='center'>
            <Grid item sx={{ display: { xs: 'block', md: 'none' } }}>
              <HamburgerMenu />
            </Grid>
            <Grid item>
              <EmmaLogo />
            </Grid>
            <Grid item sx={{ flexGrow: 1 }}>
              <DesktopMenu />
            </Grid>
            <Grid item>
              <Search />
            </Grid>
            <Grid item>
              <AccountButtons />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default EmmaHeader
