import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { YieldCurveData } from 'lib/model'

interface TableData {
  yearstomaturity: number
  yield: number
  id: number
}

export const YieldCurveTable: React.FunctionComponent<{ data: YieldCurveData }> = ({ data }) => {
  const tdata: TableData[] = data.rows
    ? data.rows?.map((item) => {
        return { yearstomaturity: item.yearsToMaturity, yield: item.yield, id: item.yearsToMaturity }
      })
    : []
  const columns = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    {
      field: 'yearstomaturity',
      headerName: 'Years',
      width: 80,
      editable: false,
    },
    {
      field: 'yield',
      headerName: 'Yield',
      width: 80,
      editable: false,
    },
  ]

  const count = 4
  const rows = [data.rows?.map((p) => p.yearsToMaturity)]
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={tdata} columns={columns} pageSize={10} rowsPerPageOptions={[5]} rowHeight={32} />
    </div>
  )
}

export default YieldCurveTable
