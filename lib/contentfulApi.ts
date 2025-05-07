import { YieldCurveTypes } from './models/contentful'

export async function getYieldCurveByType(type: YieldCurveTypes) {
  return {
    id: type,
    title: 'BVAL® AAA Municipal Curves',
    summary:
      "The BVAL® AAA Municipal Curves use dynamic real-time trades and contributed sources to reflect movement in the municipal market. Production of these curves rely heavily on sophisticated modeling techniques that normalize credit differences of eligible AAA-rated credits, remove outlier data, intelligently seek corroboration within the data sources and leverage BVAL's proprietary curve-building technique. BVAL® produces two AAA curves for reference of overall market movement: AAA non-callable curve and AAA callable curve. The callable curve reflects the traditional new issues structure of the municipal market assuming a par call after 10 years.",
    disclaimer:
      "Sourced from BVAL®, Bloomberg's evaluated pricing service. All rights reserved. The MSRB does not review or independently verify the accuracy, completeness, timeliness, methodology used in or other aspects of the index values, indices or other data or information provided by third-party providers. The products or services displayed on EMMA are among those available in the marketplace. The display of any particular third-party product or service on the EMMA website by trade name, trademark, manufacturer, or otherwise does not constitute or imply the MSRB’s sponsorship, approval, affiliation, endorsement, recommendation, or favoring of such product or service.",
    // logo: { url: '?' },
  }
}
