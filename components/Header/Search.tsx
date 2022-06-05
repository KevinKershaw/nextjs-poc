import React from 'react'
import { Box, IconButton, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Search = () => {
  return (
    <Box width={{xs: 100, md: 140, lg: 'unset'}} sx={{ display: { xs: 'none', sm: 'block' } }}>
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
    </Box>
  )
}

export default Search
