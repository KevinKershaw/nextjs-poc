import { Box, Button, Stack, Typography } from '@mui/material'
import FoldedTable from 'components/FoldedTable'
import YieldCurveChart from 'components/Organisms/Charts/YieldCurveChart'
import { getYieldCurveData, YieldCurveData } from 'lib/yieldCurveRepo'
import router from 'next/router'
import React from 'react'
import { getYieldCurveByType } from 'lib/contentfulApi'
import { GetStaticProps, NextPage } from 'next'
import { Item } from 'lib/models/contentful'
import Image from 'next/image'

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string
  const data = await getYieldCurveData()
  const cmsData = await getYieldCurveByType('yc-bloomberg')
  return {
    props: {
      data,
      cmsData,
    },
  }
}

const YieldCurveContentful: NextPage<{ data: YieldCurveData; cmsData: Item }> = ({ data, cmsData }) => {
  return (
    <>
      <Box sx={{ minHeight: 500 }}>
        <Box sx={{ mx: 5 }}>
          <Button
            variant='text'
            onClick={() => {
              router.push('/yield-curves')
            }}>
            &#8592; Back
          </Button>
          {cmsData.logo && (
            <Box sx={{ pl: 0.5 }}>
              <Image src={cmsData.logo.url} height={38} width={175} alt='Bloomberg' />
            </Box>
          )}
          <Typography variant='h5'>{cmsData.title}</Typography>
        </Box>
        <Stack spacing={8} sx={{ mx: 5, mt: 4, mb: 6 }}>
          <YieldCurveChart data={data} />
          <Box sx={{ minHeight: 203 }}>
            <FoldedTable data={data} />
          </Box>
        </Stack>
        <Box display={'flex'} sx={{ borderTop: '1px solid lightgray', backgroundColor: '#ccecfc', px: 5, py: 3, gap: 4, flexDirection: { lg: 'row', xs: 'column' } }}>
          <Box minWidth={{ lg: 350, xs: 'unset' }}>
            {cmsData.logo && (
              <Typography>
                <Image src={cmsData.logo.url} height={38} width={175} alt='Bloomberg' />
              </Typography>
            )}
            <Typography>{cmsData.summary}</Typography>
          </Box>
        </Box>
        <Box sx={{ padding: 4 }}>
          <Typography>{cmsData.disclaimer}</Typography>
        </Box>
      </Box>
    </>
  )
}

export default YieldCurveContentful
