import React, { useEffect, useState } from 'react'
import type { YieldCurveData } from 'lib/model'
import { foldTable } from 'lib/foldTable'
import SimpleTable from './SimpleTable'
import { useWindowSize } from 'lib/useWindowSize'

function getColCount(ww: number | undefined) {
  if (ww === undefined) {
    return 1
  }
  if (ww >= 1000) return 6
  if (ww >= 850) return 5
  if (ww >= 700) return 4
  if (ww >= 550) return 3
  if (ww >= 400) return 2
  return 1
}

const Component = ({ data }: { data: YieldCurveData }) => {
  const [numCols, setNumCols] = useState(2)
  const { width } = useWindowSize()

  useEffect(() => {
    setNumCols(getColCount(width))
  }, [width])

  var adjData = foldTable(['Years', 'Yield'], data.rows ? data.rows?.map((i) => [i.yearsToMaturity.toString(), `${i.yield}%`]) : [], numCols)

  if (width === undefined) {
    return null
  }
  return <SimpleTable rows={adjData.rows} headers={adjData.headers} width={'100%'} />
}

export default Component
