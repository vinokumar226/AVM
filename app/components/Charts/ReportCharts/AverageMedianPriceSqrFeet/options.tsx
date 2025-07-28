const averageMedianPriceOptions = {
  title: 'Average Price Per Square Feet',
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
 
};

export default averageMedianPriceOptions;