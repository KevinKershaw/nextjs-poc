import React, { useEffect, useState } from 'react'
import router from 'next/router'
import { isLoggedIn } from 'lib/auth'
import { Box, Button } from '@mui/material'

const AccountButtons = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null)
  const loggedIn = isLoggedIn()

  useEffect(() => {
    setIsSignedIn(loggedIn)
  }, [loggedIn])

  return (
    <Box display='flex' gap={1} ml={1}>
      {isSignedIn === true && (
        <Button
          variant='outlined'
          onClick={() => {
            router.push('/dashboard/profile')
          }}
        >
          My Account
        </Button>
      )}
      {isSignedIn === false && (
        <>
          <Button variant='outlined' sx={{ display: { xs: 'none', lg: 'block' } }}>
            Sign up
          </Button>
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
      {isSignedIn === null && <Box>&nbsp;</Box>}
    </Box>
  )
}

export default AccountButtons
