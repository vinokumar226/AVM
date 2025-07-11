import { ScaleTypes } from '@carbon/charts';

export default {
  title: 'Historical Sales For Neighborhood',
  axes: {
    left: {
      mapsTo: 'value',
      title: 'Number of Sales',
      domain: [18, 25],
      ticks: {
        values: [18,20,22,25]
      },
      tickFormat: (d: number) => d.toString(), // No decimals, "K" suffix
    },
    bottom: {
      mapsTo: 'group',
      scaleType: ScaleTypes.LABELS,
      title: 'Months',
    }
  },
  color: {
    // Colors will be applied in order to each 'group'
    
    scale: {
    'Jan 2025': '#8C4A1D',
    'Feb 2025': '#951F4F',
    'Mar 2025': '#16659C',
    'Apr 2025': '#3BAF2B',
    'May 2025': '#D9B03E',
  },
  },
  legend: {
    enabled: false
  },
  height: '400px',
  accessibility: {
    svgAriaLabel: 'Bar chart of monthly historical sales'
  }
}
