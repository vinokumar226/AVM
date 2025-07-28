const averageMedianSalePriceBarOptions =  {
  title: 'Average Sales Price',
  axes: {
    left: {
      title: 'Median Time',
      mapsTo: 'price',
      domain: [420000, 465000],
      ticks: {
        values: [420000, 430000, 435000, 440000, 445000, 450000, 455000], // Exact tick values
         // Format each tick with a dollar sign
        formatter: (tickValue: number) => `$${tickValue}`
      },
    },
    bottom: {
      scaleType: 'time',
      mapsTo: 'date',
      title: 'Time',
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
      SalePrice: '#33b1ff' // ← set your preferred line color
    }
  },
  legend: {
    enabled: false
  },
  height: '400px'
};

export default averageMedianSalePriceBarOptions;