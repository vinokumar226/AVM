//import averageMedianPriceSqrFtBarData from './data';

// const manualColors = [
//   '#8C4A1D',
//   '#951F4F',
//   '#16659C',
//   '#3BAF2B',
//   '#D9B03E',
//   '#6E44FF'
// ];

// 👇 Now use item.group instead of item.date
// const colorScale = averageMedianPriceSqrFtBarData.reduce((acc, item, index) => {
//   acc[item.group] = manualColors[index];
//   return acc;
// }, {} as Record<string, string>);

export default {
  title: 'Average or Median Price Per Square Feet',
  axes: {
    left: {
      title: 'Avg price/Sq Ft',
      mapsTo: 'price',
      domain: [385, 415],
      ticks: {
        values: [385, 395, 405, 415, 425, 360, 380], // Exact tick values
         // Format each tick with a dollar sign
        formatter: (tickValue: number) => `$${tickValue}`
      },
    },
    bottom: {
      scaleType: 'time',
      mapsTo: 'date',
      title: 'Month',
        ticks: {
          time: {
            interval: 'month',       // Force monthly ticks
            format: '%b %Y'          // e.g., Jan 2024, Jan 2025
          }
        }
    }
  },
  color: {
    scale: {
      PriceSqrFeet: '#33b1ff' // ← set your preferred line color
    }
  },
   style: {
    lines: {
      strokeWidth: 3
    }
  },
   legend: {
    enabled: false
  },
  height: '400px'
 
}