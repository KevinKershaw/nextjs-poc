import React, { ReactNode } from 'react'
import { Box, Container, Paper } from '@mui/material'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container maxWidth={false} sx={{ width: '100%', maxWidth: '1440px !important', px: '0 !important' }}>
      <Paper elevation={4} sx={{ px: 0 }}>
        <Header />
        <Box sx={{ minHeight: '600px' }}>{children}</Box>
        <Footer />
      </Paper>
    </Container>
  )
}

export default Layout
