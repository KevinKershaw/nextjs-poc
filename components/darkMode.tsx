import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { darkTheme } from './emmaTheme'

export function DarkMode({children}: {children: React.ReactNode}) {
  console.log('dark mode', darkTheme)
  return (<ThemeProvider theme={darkTheme}>{children}</ThemeProvider>)
}
