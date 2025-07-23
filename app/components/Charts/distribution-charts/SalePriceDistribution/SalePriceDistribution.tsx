// // app/components/PieChartComponent.tsx or any component path
// 'use client';

// import React from 'react';
// import { PieChart } from '@carbon/charts-react';
// import type { PieChartOptions } from '@carbon/charts';
// import '@carbon/charts-react/styles.css';

// import data from './data';
// import options from './options';
// import Legend from './Legend';

// const SalePrice: React.FC = () => {
//   return (
    
//     <div className="chart-border">
//       <div style={{ display: 'flex', alignItems: 'flex-start', gap: '32px' }}>
//         <div style={{ width: '600px' }}> {/* ⬅ constrain PieChart width */}
//           <PieChart data={data} options={options as PieChartOptions} />
//         </div>
//         <div>
//           <Legend />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SalePrice;


'use client';

import React from 'react';
import { SimpleBarChart } from '@carbon/charts-react';
import '@carbon/charts-react/styles.css';

import data from './data';
import options from './options';

const SalePrice: React.FC = () => {
  return (
      <div className='chart-border'>
        <SimpleBarChart data={data} options={options} />
      </div>
  );
};

export default SalePrice;