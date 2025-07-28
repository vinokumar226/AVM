import { ScaleTypes } from '@carbon/charts';

const historicalSalesBarData = {
  title: 'Historical Sales For ZIP (90024)',
  bar: {
    maxWidth: 22,
    width: 4,
  },
  axes: {
    left: {
      mapsTo: 'value',
      title: 'Number of Sales',
      domain: [0, 16],
      ticks: {
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16 ]
      },
      tickFormat: (d: number) => d.toString(), // No decimals, "K" suffix
    },
    bottom: {
      mapsTo: 'group',
      scaleType: ScaleTypes.LABELS,
      title: 'Months',
      //spacingFactor: 0.1,
    }
  },
  color: {
    // Colors will be applied in order to each 'group'
    
    scale: {
    'Jan 2025': '#0072c3',
    'Feb 2025': '#0072c3',
    'Mar 2025': '#0072c3',
    'Apr 2025': '#0072c3',
    'May 2025': '#0072c3',
    'Jun 2025': '#0072c3'
  },
  },
   
  legend: {
    enabled: false
  },
  height: '400px',
  accessibility: {
    svgAriaLabel: 'Bar chart of monthly historical sales'
  }
};

export default historicalSalesBarData;
