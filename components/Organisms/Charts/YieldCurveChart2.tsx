import { Container, styled, Typography } from '@mui/material'
import { Chart as ChartJS, ChartOptions } from 'chart.js'
import {
  ChartData,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  SubTitle,
  Tooltip,
  Legend,
  CoreChartOptions,
  DatasetChartOptions,
  ElementChartOptions,
  PluginChartOptions,
  ScatterDataPoint,
  LegendOptions,
  LinearScaleOptions,
  ScaleOptions,
} from 'chart.js'
import { _DeepPartialObject } from 'chart.js/types/utils'
import { YieldCurveData } from 'lib/model'
import React from 'react'
import { Line as LineChart } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, SubTitle)

const YieldCurveChart: React.FunctionComponent<{ data: YieldCurveData }> = ({ data }) => {
  const lineChartOptions: ChartOptions<'line'> = {
    plugins: {
      // title: {
      //   display: true,
      //   text: 'Chart Title',
      // },
      // subtitle: {
      //   display: true,
      //   text: 'Chart Subtitle',
      //   color: 'blue',
      // },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Years to Maturity',
          color: 'black',
          font: {
            weight: 'bold',
          },
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Yield',
          color: 'black',
          font: {
            weight: 'bold',
          },
        },
      },
    },
    maintainAspectRatio: false,
  }

  let chartCfg: ChartData<'line', (number | ScatterDataPoint)[], unknown> = {
    labels: data.items.map((p) => p.yearstomaturity),
    datasets: [
      {
        label: 'Yield Curve',
        data: data.items.map((p) => p.yield),
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  }

  return (
    <Container maxWidth={false} sx={{ height: 300, px: '0 !important' }}>
      <LineChart data={chartCfg} options={lineChartOptions} />
    </Container>
  )
}

export default YieldCurveChart
