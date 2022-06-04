import React, { useState, useEffect } from 'react'
import router from 'next/router'
import { isLoggedIn } from 'lib/auth'
import { AppBar, Box, Button, Container, Grid, IconButton, InputAdornment, Menu, MenuItem, TextField, Toolbar, useScrollTrigger, Link, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import MenuIcon from '@mui/icons-material/Menu'
import Image from 'next/image'
import NLink from 'next/link'
import Head from 'next/head'

// NOTE: as of 6/3, doesn't seem to do much
// This is used to make the header stick to the top
function ElevationScroll({ children, setElevationEffect }: { children: React.ReactElement<any>, setElevationEffect: (val: boolean) => void }) {
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
  const [anchorEl, setAnchorEl] = React.useState<(EventTarget & HTMLButtonElement) | null>(null)
  const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null)
  const [elevationEffect, setElevationEffect] = useState(false)
  const open = Boolean(anchorEl)

  const bodyScrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  useEffect(() => {
    setElevationEffect(bodyScrolled)
  }, [bodyScrolled])

  const loggedIn = isLoggedIn()
  useEffect(() => {
    setIsSignedIn(loggedIn)
  }, [loggedIn])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleMenuClick = (location: string) => {
    setAnchorEl(null)
    router.push(location)
  }

  return (
    <>
      <Head>
        <title>Municipal Securities Rulemaking Board::EMMA</title>
      </Head>
      <>
          <AppBar sx={{ backgroundColor: 'white' }} position='sticky' elevation={elevationEffect ? 4 : 0}>
            <Toolbar
              sx={{
                width: '100%',
                mx: 'auto',
                py: 1,
              }}
            >
              <>
                <Grid container columns={3} justifyContent='space-between' alignItems='center'>
                  {/* <Grid item>hi mom</Grid> */}
                  <Grid item>
                    <Grid container alignItems='center' spacing={1}>
                      <Grid
                        item
                        sx={{
                          flexGrow: 1,
                          display: {
                            xs: 'block',
                            sm: 'block',
                            md: 'block',
                            lg: 'none',
                            xl: 'none',
                          },
                        }}
                      >
                        <Box>
                          <IconButton id='nav-button' color='primary' onClick={handleClick}>
                            <MenuIcon fontSize='large' />
                          </IconButton>
                          <Menu
                            id='nav-menu'
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{ 'aria-labelledby': 'nav-button', }}
                          >
                            <MenuItem onClick={() => handleMenuClick('/market-data')} >Market Data</MenuItem>
                            <MenuItem onClick={() => handleMenuClick('/market-intelligence')} >Market Intelligence</MenuItem>
                            <MenuItem onClick={() => handleMenuClick('/about')} >About</MenuItem>
                            <MenuItem onClick={() => handleMenuClick('/support')} >Support</MenuItem>
                          </Menu>
                        </Box>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems='center'>
                          <Grid
                            item
                            sx={{
                              flexGrow: 1,
                              mt: 1,
                              display: {
                                xs: 'none',
                                sm: 'none',
                                md: 'none',
                                lg: 'block',
                                xl: 'block',
                              },
                            }}
                          >
                            <NLink href='/' passHref>
                              <Link>
                                <Image priority src='/images/emma-logo-sm.png' width={130} height={66} alt='EMMA Logo' />
                              </Link>
                            </NLink>
                          </Grid>
                          <Grid
                            item
                            sx={{
                              flexGrow: 1,
                              mt: 1,
                              display: {
                                xs: 'block',
                                sm: 'block',
                                md: 'block',
                                lg: 'none',
                                xl: 'none',
                              },
                            }}
                          >
                            <NLink href='/' passHref>
                              <Link>
                                <Image priority src='/images/emma-logo-sm.png' width={130} height={66} alt='EMMA Logo' />
                              </Link>
                            </NLink>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    sx={{
                      flexGrow: 1,
                      display: {
                        xs: 'none',
                        sm: 'none',
                        md: 'none',
                        lg: 'block',
                        xl: 'block',
                      },
                    }}
                  >
                    <Grid container justifyContent='space-evenly' alignItems='center' columns={4}>
                      <Grid item>
                        <Button variant='text' onClick={() => router.push('/market-data')}>Market Data</Button>
                      </Grid>
                      <Grid item>
                        <Button variant='text' onClick={() => router.push('/market-intelligence')}>Market Intelligence</Button>
                      </Grid>
                      <Grid item>
                        <Button variant='text' onClick={() => router.push('/about')}>About</Button>
                      </Grid>
                      <Grid item>
                        <Button variant='text' onClick={() => router.push('/support')}>Support</Button>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Grid container alignItems='center' columns={3} spacing={1}>
                      <Grid
                        item
                        sx={{
                          flexGrow: 1,
                          display: {
                            xs: 'none',
                            sm: 'block',
                            md: 'block',
                            lg: 'block',
                            xl: 'block',
                          },
                        }}
                      >
                        <TextField
                          color='primary'
                          size='small'
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <IconButton>
                                  <SearchIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        ></TextField>
                      </Grid>

                      <Grid
                        item
                        sx={{
                          flexGrow: 1,
                          display: {
                            xs: 'none',
                            sm: 'none',
                            md: 'block',
                            lg: 'block',
                            xl: 'block',
                          },
                        }}
                      >
                        {isSignedIn === false && (
                          <>
                            <Button variant='outlined'>Sign up</Button>
                          </>
                        )}
                      </Grid>

                      <Grid item>
                        {isSignedIn === true && (
                          <>
                            <Button
                              variant='outlined'
                              onClick={() => {
                                router.push('/dashboard/profile')
                              }}
                            >
                              My Account
                            </Button>
                          </>
                        )}
                        {isSignedIn === false && (
                          <>
                            <Button
                              variant='contained'
                              onClick={() => {
                                router.push('/dashboard/login')
                              }}
                            >
                              Sign In
                            </Button>
                          </>
                        )}
                        {isSignedIn === null && (<div>&nbsp;</div>)}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            </Toolbar>
          </AppBar>
      </>
    </>
  )
}

export default EmmaHeader
