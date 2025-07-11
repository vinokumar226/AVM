// import { format } from 'date-fns';

// const rawData = [
//   { date: '2025-01-01', price: 389 },
//   { date: '2025-02-01', price: 415 },
//   { date: '2025-03-01', price: 399 },
//   { date: '2025-04-01', price: 390 },
//   { date: '2025-05-01', price: 426 },
//   { date: '2025-06-01', price: 394 }
// ];


const averageMedianPriceSqrFtBarData = [
  { group: 'PriceSqrFeet', date: '2025-01-01', price: 389 },
  { group: 'PriceSqrFeet', date: '2025-02-01', price: 415 },
  { group: 'PriceSqrFeet', date: '2025-03-01', price: 399 },
  { group: 'PriceSqrFeet', date: '2025-04-01', price: 390 },
  { group: 'PriceSqrFeet', date: '2025-05-01', price: 426 },
  { group: 'PriceSqrFeet', date: '2025-06-01', price: 394 }
]

export default averageMedianPriceSqrFtBarData;

// Convert date string to readable month group like "Jan 2025"
// const averageMedianPriceSqrFtBarData = rawData.map((item) => ({
//   ...item,
//   group: format(new Date(item.date), 'MMM yyyy') // 👈 Jan 2025 format
// }));

// export default averageMedianPriceSqrFtBarData;
