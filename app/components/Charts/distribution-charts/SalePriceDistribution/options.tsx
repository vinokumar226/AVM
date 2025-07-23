// import { ScaleTypes } from '@carbon/charts';

// export default {
//   title: 'Sale price Distribution',
//   axes: {
//     left: {
//       mapsTo: 'value',
//       title: 'Number of Properties',
//     },
//     bottom: {
//       mapsTo: 'group',
//       scaleType: ScaleTypes.LABELS,
//       title: 'Year Built Range',
//     }
//   },
//    legend: {
//     enabled: false
//   },
//   height: '400px',
//   accessibility: {
//     svgAriaLabel: 'Simple bar chart'
//   }
// }
// const blueScale = {
//   "360000": "#0056CC"
// };

const allGroups = [
  "180000", "220000", "240000", "280000",
  "300000", "320000", "420000", "480000",
  "500000", "540000", "600000"
];

const colorScale = Object.fromEntries(
  allGroups.map(label => [label, label === "360000" ? "#0072c3" : "#4DA5F5"])
);

import { ScaleTypes } from '@carbon/charts';

export default {
  title: 'Sale price Distribution',
  axes: {
    left: {
      mapsTo: 'value',
      title: 'Frequency',
       domain: [0, 16],
      ticks: {
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16 ]
      },
      tickFormat: (d: number) => d.toString(), // No decimals, "K" suffix
    },
    bottom: {
      mapsTo: 'group',
      scaleType: ScaleTypes.LABELS,
      title: 'Sale price',
    }
  },
  color: { scale: colorScale },
  legend: {
    enabled: false
  },
  height: '400px',
  accessibility: {
    svgAriaLabel: 'Sale price bar chart'
  }
}