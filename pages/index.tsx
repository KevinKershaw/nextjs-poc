import type { NextPage } from 'next'
import { Stack } from '@mui/material'
import TopBand from 'components/Bands/home/TopBand'
import New from 'components/Bands/home/New'
import AboutTech from 'components/Bands/home/AboutTech'

const Home: NextPage = () => {
  return (
    <>
      <Stack spacing={3}>
        <TopBand />
        <New />
        <AboutTech />
      </Stack>
    </>
  )
}

export default Home
