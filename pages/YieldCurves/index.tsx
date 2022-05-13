import { Divider, Link, Typography } from '@mui/material'
import NLink from 'next/link'
import React from 'react'

const YieldCurves = () => {
  return (
    <>
      <Typography variant='h5'>Yield Curves and Indices</Typography>
      <Divider />
      <ul>
        <li>
          <NLink href='/ssg/YieldCurve' passHref>
            <Link>SSG - Static Site Generation</Link>
          </NLink>
        </li>
        <li>
          <NLink href='/ssr/YieldCurve' passHref>
            <Link>SSR - Server Side Rendering</Link>
          </NLink>
        </li>
        <li>
          <NLink href='/csr/YieldCurve' passHref>
            <Link>CSR - Client Side Rendering</Link>
          </NLink>
        </li>
      </ul>
    </>
  )
}

export default YieldCurves
