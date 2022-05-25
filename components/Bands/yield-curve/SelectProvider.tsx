import Image from 'next/image'
import router from 'next/router'
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import bloombergImage from 'assets/yc/logos/bloomberg.png'
import bondwaveImage from 'assets/yc/logos/bondwave.png'
import iceImage from 'assets/yc/logos/ice.png'
import ihsMarkitImage from 'assets/yc/logos/ihs-markit.png'
import mbisImage from 'assets/yc/logos/mbis.png'
import snpImage from 'assets/yc/logos/snp.png'

const SelectProvider = () => {

  const handleSelect = (id: string)  => {
    router.push(`/yield-curves/${id}`)
  }

  return (
    <Box sx={{ p: 8, mb: 2 }}>
      <Typography variant='h3' gutterBottom mb={2.5} pl={0} sx={{fontSize: 34}} >Select a Provider</Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Button sx={{ height: 60, width: 200 }} variant='outlined' onClick={() => handleSelect('bloomberg')}>
            <Image src={bloombergImage} height={38} width={175} style={{marginTop: 3}} />
          </Button>
        </Grid>
        <Grid item>
          <Button sx={{ height: 60, width: 200 }} variant='outlined' onClick={() => handleSelect('bondwave')}>
            <Image src={bondwaveImage} height={38} width={161} />
          </Button>
        </Grid>
        <Grid item>
          <Button sx={{ height: 60, width: 200 }} variant='outlined' onClick={() => handleSelect('ice')}>
            <Image src={iceImage} height={51} width={60} />
          </Button>
        </Grid>
        <Grid item>
          <Button sx={{ height: 60, width: 200 }} variant='outlined' onClick={() => handleSelect('ihs')}>
            <Image src={ihsMarkitImage} height={39} width={144} />
          </Button>
        </Grid>
        <Grid item>
          <Button sx={{ height: 60, width: 200 }} variant='outlined' onClick={() => handleSelect('mbis')}>
            <Image src={mbisImage} height={38} width={111}  style={{marginTop: 3}}/>
          </Button>
        </Grid>
        <Grid item>
          <Button sx={{ height: 60, width: 200 }} variant='outlined' onClick={() => handleSelect('snp')}>
            <Image src={snpImage} height={40} width={113} />
          </Button>
        </Grid>
        <Grid item>
          <Button sx={{ height: 60, width: 200 }} variant='outlined' onClick={() => handleSelect('treasury')}>
            {/* <Image src={snpImage} height={40} width={113} /> */}
            <Typography variant='h3'>US Treasury</Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SelectProvider
