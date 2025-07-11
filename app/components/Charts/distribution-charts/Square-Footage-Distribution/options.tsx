import { ScaleTypes } from '@carbon/charts';

export default {
  title: 'Square Footage Distribution',
  axes: {
    left: {
      mapsTo: 'value',
      title: 'Number of Properties',
    },
    bottom: {
      mapsTo: 'group',
      scaleType: ScaleTypes.LABELS,
      title: 'Sq Ft Range',
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