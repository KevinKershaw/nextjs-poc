export type TxVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button'
  | 'overline'
  | 'inherit'
  | undefined

export interface TxData {
  id?: string
  attributes: {
    name?: string
    order?: number
    variant: TxVariant
    text: string
    gutterBottom?: boolean
    href?: string
    html?: string
  }
}

export async function getTxs(pgName: string): Promise<TxData[]> {
  switch (pgName) {
    case 'pg-yc-bondwave-head:':
      return [{ attributes: { variant: 'h3', text: 'BondWave AA QCurve' } }]
    case 'pg-yc-bondwave-detail:':
      return [
        { attributes: { variant: 'h3', text: 'BondWave AA QCurve', gutterBottom: true } },
        {
          attributes: {
            variant: 'body1',
            text: 'The BondWave AA QCurve is a quantitatively derived yield curve built from executed trades offering full data transparency. Data are available from 03/01/2017 through today.',
            gutterBottom: true,
          },
        },
      ]
    case 'pg-yc-bondwave-ref:':
      return [
        {
          attributes: {
            variant: 'body1',
            text: 'Access additional information about this provider and its methodology here.',
            href: 'https://www.msrb.org/~/media/Files/EMMA/BondWave-Methodology.ashx',
            gutterBottom: true,
          },
        },
        {
          attributes: {
            variant: 'body1',
            text: 'More information on understanding yield curves and indices.',
            href: 'https://emma.msrb.org/EmmaHelp/UnderstandingYieldCurvesandIndices',
            gutterBottom: true,
          },
        },
      ]
    case 'pg-yc-bondwave-legal:':
      return [
        {
          attributes: {
            variant: 'body2',
            text: 'QCurves™ © BondWave LLC 2018-2025. All rights reserved. QCurves™ powered by Effi™. All rights reserved.',
            gutterBottom: true,
          },
        },
        {
          attributes: {
            variant: 'body2',
            text: 'The MSRB does not review or independently verify the accuracy, completeness, timeliness, methodology used in or other aspects of the index values, indices or other data or information provided by third-party providers. The products or services displayed on EMMA are among those available in the marketplace. The display of any particular third-party product or service on the EMMA website by trade name, trademark, manufacturer, or otherwise does not constitute or imply the MSRB’s sponsorship, approval, affiliation, endorsement, recommendation, or favoring of such product or service.',
            gutterBottom: true,
          },
        },
      ]
    case 'pg-yc-bw:':
      return [
        { attributes: { variant: 'subtitle1', text: 'Yield Curves and Indices', gutterBottom: false } },
        { attributes: { variant: 'h5', text: 'BondWave AA QCurve', gutterBottom: false } },
        {
          attributes: {
            variant: 'body2',
            text: 'The BondWave AA QCurve is a quantitatively derived yield curve built from executed trades offering full data transparency. Data are available from 03/01/2017 through today.',
            gutterBottom: true,
          },
        },
        {
          attributes: {
            variant: 'body2',
            text: 'Access additional information about this provider and its methodology here.',
            href: 'https://www.msrb.org/~/media/Files/EMMA/BondWave-Methodology.ashx',
            gutterBottom: true,
          },
        },
        {
          attributes: {
            variant: 'body2',
            text: 'More information on understanding yield curves and indices.',
            href: 'https://emma.msrb.org/EmmaHelp/UnderstandingYieldCurvesandIndices',
            gutterBottom: true,
          },
        },
      ]
    case 'pg-yc-bw-2:':
      return [
        {
          attributes: {
            variant: 'body2',
            text: 'QCurves™ © BondWave LLC 2018-2025. All rights reserved. QCurves™ powered by Effi™. All rights reserved.',
            gutterBottom: true,
          },
        },
        {
          attributes: {
            variant: 'body2',
            text: 'The MSRB does not review or independently verify the accuracy, completeness, timeliness, methodology used in or other aspects of the index values, indices or other data or information provided by third-party providers. The products or services displayed on EMMA are among those available in the marketplace. The display of any particular third-party product or service on the EMMA website by trade name, trademark, manufacturer, or otherwise does not constitute or imply the MSRB’s sponsorship, approval, affiliation, endorsement, recommendation, or favoring of such product or service.',
            gutterBottom: true,
          },
        },
      ]
    default:
      return []
  }
}
