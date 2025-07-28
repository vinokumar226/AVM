import { ScaleTypes } from '@carbon/charts';

const allGroups = [
  "120-129", "130-139", "140-149", "150-159",
  "160-169", "180-189"
];

const colorScale = Object.fromEntries(
  allGroups.map(label => [label, label === "170-179" ? "#0072c3" : "#4DA5F5"])
);

const SquareFootageOption = {
  title: 'Square Footage Distribution',
  axes: {
    left: {
      mapsTo: 'value',
      title: 'Number of Properties',
      domain: [0, 16],
      ticks: {
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16 ]
      },
      tickFormat: (d: number) => d.toString(), // No decimals, "K" suffix
    },
    bottom: {
      mapsTo: 'group',
      scaleType: ScaleTypes.LABELS,
      title: 'Price per Sq. Ft',
    }
  },
  color: { scale: colorScale },
  legend: {
    enabled: false
  },
  height: '400px',
  accessibility: {
    svgAriaLabel: 'Simple bar chart'
  }
};

export default SquareFootageOption;
