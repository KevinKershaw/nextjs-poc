import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import YieldCurveLayout from './YieldCurveLayout'

export default {
  title: 'YieldCurveLayout',
  component: YieldCurveLayout,
} as ComponentMeta<typeof YieldCurveLayout>

export const H1: ComponentStory<typeof YieldCurveLayout> = () => {
  return (
    <YieldCurveLayout
      data={{
        curve_date: 'date',
        items: [
          { yearstomaturity: 1, yield: 0.52 },
          { yearstomaturity: 2, yield: 0.61 },
          { yearstomaturity: 3, yield: 0.66 },
          { yearstomaturity: 4, yield: 0.71 },
          { yearstomaturity: 5, yield: 0.72 },
        ],
      }}
    />
  )
}
