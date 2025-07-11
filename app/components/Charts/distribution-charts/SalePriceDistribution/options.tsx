import { ScaleTypes } from '@carbon/charts';

export default {
  title: 'Sale price Distribution',
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
    svgAriaLabel: 'Simple bar chart'
  }
}