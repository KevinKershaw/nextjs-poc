import React from 'react'
import router from 'next/router'
import { Box, IconButton, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const HamburgerMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<(EventTarget & HTMLButtonElement) | null>(null)

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

  const open = Boolean(anchorEl)

  return (
    <Box>
    <IconButton id='nav-button' color='primary' onClick={handleClick}>
      <MenuIcon fontSize='large' />
    </IconButton>
    <Menu id='nav-menu' anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'nav-button' }}>
      <MenuItem onClick={() => handleMenuClick('/market-data')} sx={{fontSize: '1.7rem'}}>Market Data</MenuItem>
      <MenuItem onClick={() => handleMenuClick('/market-intelligence')} sx={{fontSize: '1.7rem'}}>Market Intelligence</MenuItem>
      <MenuItem onClick={() => handleMenuClick('/about')} sx={{fontSize: '1.7rem'}}>About</MenuItem>
      <MenuItem onClick={() => handleMenuClick('/support')} sx={{fontSize: '1.7rem'}}>Support</MenuItem>
    </Menu>
  </Box>
  )
}

export default HamburgerMenu