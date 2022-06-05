import { Box, Button, Stack, Typography } from '@mui/material'

const Band = () => {
  return (
    <Box sx={{ p: 8, backgroundColor: '#ccecfc' }} pt={4}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems='center'>
        <Box>
          <Typography variant='h2' gutterBottom>
            Compare Municipal Bonds
          </Typography>
          <Typography variant='h5'>Use the Price Discovery Tool to find and compare trade prices and yields for municipal bonds with similar characteristics.</Typography>
        </Box>
        <Box>
          <Button variant='contained' sx={{ width: 300 }}>
            Compare Municipal Bonds
          </Button>
        </Box>
      </Stack>
    </Box>
  )
}

export default Band
