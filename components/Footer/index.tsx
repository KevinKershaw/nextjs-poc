import React from 'react'
import { Box, Grid, Link, Typography } from '@mui/material'
import LinkGrid from './LinkGrid'
import MsrbLogo from './MsrbLogo'

const EmmaFooter = () => {
  return (
    <Box sx={{ bgcolor: '#eeeeee', borderTop: '1px solid lightgray', px: 4, py: 2 }}>
      <Grid container spacing={0} pb={2}>
        <Grid item xs={12} sm={9}>
          <LinkGrid />
        </Grid>
        <Grid item xs={12} sm={3}>
          <MsrbLogo />
        </Grid>
      </Grid>

      <Typography variant='body2' sx={{ pb: 2 }}>
        © 2022{' '}
        <Link href='https://www.msrb.org' target='_blank' rel='noreferrer'>
          Municipal Securities Rulemaking Board
        </Link>{' '}
        (MSRB)
      </Typography>
      <Typography variant='body2' sx={{ pb: 2 }}>
        EMMA is a service of the Municipal Securities Rulemaking Board, which protects investors, state and local governments, and the public interest. Portions of EMMA data provided by ICE Data
        Pricing &amp; Reference Data, LLC., CUSIP Global Services &amp; American Bankers Association.
      </Typography>
      <Typography variant='body2'>
        Ratings data are provided by the following and are reprinted with permission, and copyright notices for the respective owners are as follows: Copyright © 2022, Fitch, Inc. All rights reserved.
        Copyright © 2022, Kroll Bond Rating Agency, Inc., and/or its licensors and affiliates (together, &quot;KBRA&quot;). All rights reserved. Copyright © 2022, Moody&apos;s Corporation,
        Moody&apos;s Investors Service, Inc., Moody&apos;s Analytics, Inc. and/or their licensors and affiliates (collectively, &quot;MOODY&apos;S&quot;). All rights reserved. Copyright © 2022,
        Standard and Poor&apos;s Financial Services LLC. All rights reserved.
      </Typography>
    </Box>
  )
}

export default EmmaFooter
