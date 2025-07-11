import { ScaleTypes } from '@carbon/charts';

export default {
  title: 'Average or Median Sales Price',
  axes: {
    left: {
      mapsTo: 'value',
      title: 'Number of Properties',
    },
    bottom: {
      mapsTo: 'group',
      scaleType: ScaleTypes.LABELS,
      title: 'Year Built Range',
    }
  },
  legend: {
    enabled: false
  },
  height: '400px',
  accessibility: {
    svgAriaLabel: 'Average or Median sale price bar chart'
  }
}