// components/BarChart.tsx
'use client';

import React from 'react';
import { SimpleBarChart } from '@carbon/charts-react';
import '@carbon/charts-react/styles.css';

import data from './data';
import options from './options';

const SquareFootage: React.FC = () => {
  return (
    <div className='chart-border'>
        <SimpleBarChart data={data} options={options} />
    </div>
  );
};

export default SquareFootage;
