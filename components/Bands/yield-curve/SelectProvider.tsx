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
import SelectableButton from 'components/Atoms/SelectableButton'

const SelectProvider = ({externalSelectHandler}: {externalSelectHandler?: (sel: string) => void}) => {

  const handleSelect = (id: string)  => {
    if(externalSelectHandler){
      externalSelectHandler(id)
   return 
    }
    router.push(`/yield-curves/${id}`)
  }

  return (
    <Box sx={{ p: 8, mb: 2 }}>
      <Typography variant='h3' gutterBottom mb={2.5} pl={0}>
        Select a Provider
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <SelectableButton sx={{ height: 60, width: 200 }} onClicked={() => handleSelect('bloomberg')}>
            <Image src={bloombergImage} height={38} width={175} style={{marginTop: 3}} alt='Bloomberg' />
          </SelectableButton>
        </Grid>
        <Grid item>
          <SelectableButton sx={{ height: 60, width: 200 }} onClicked={() => handleSelect('bondwave')}>
            <Image src={bondwaveImage} height={38} width={161} alt='BondWave' />
          </SelectableButton>
        </Grid>
        <Grid item>
          <SelectableButton sx={{ height: 60, width: 200 }} onClicked={() => handleSelect('ice')}>
            <Image src={iceImage} height={51} width={60} alt='ICE' />
          </SelectableButton>
        </Grid>
        <Grid item>
          <SelectableButton sx={{ height: 60, width: 200 }} onClicked={() => handleSelect('ihs')}>
            <Image src={ihsMarkitImage} height={39} width={144} alt='IHS' />
          </SelectableButton>
        </Grid>
        <Grid item>
          <SelectableButton sx={{ height: 60, width: 200 }} onClicked={() => handleSelect('mbis')}>
            <Image src={mbisImage} height={38} width={111}  style={{marginTop: 3}} alt='MBIS'/>
          </SelectableButton>
        </Grid>
        <Grid item>
          <SelectableButton sx={{ height: 60, width: 200 }} onClicked={() => handleSelect('snp')}>
            <Image src={snpImage} height={40} width={113} alt='SNP' />
          </SelectableButton>
        </Grid>
        <Grid item>
          <SelectableButton sx={{ height: 60, width: 200 }} onClicked={() => handleSelect('treasury')}>
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>US Treasury</Typography>
          </SelectableButton>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SelectProvider
