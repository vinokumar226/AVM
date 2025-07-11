'use client';

import React from 'react';
import { LineChart } from '@carbon/charts-react';
import type { LineChartOptions } from '@carbon/charts';
import '@carbon/charts-react/styles.css';

import data from './data';
import options from './options';

const AverageMedianSalePrice: React.FC = () => {
  return (
    <div className='chart-border'>
      <LineChart data={data} options={options as LineChartOptions} />
    </div>
  );
};

export default AverageMedianSalePrice;
