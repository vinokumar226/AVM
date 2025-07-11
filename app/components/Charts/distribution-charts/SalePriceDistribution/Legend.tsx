'use client';

import React from 'react';
import data from './data';

const COLORS = [
  '#8C4A1D',
  '#951F4F',
  '#16659C',
  '#3BAF2B',
  '#D9B03E'
];

const Legend = () => {
  return (
    <div style={{ paddingTop: '0.5rem' }}>
      {data.map((item, index) => (
        <div key={item.group} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <span
            style={{
              width: '14px',
              height: '14px',
              backgroundColor: COLORS[index % COLORS.length],
              display: 'inline-block',
              marginRight: '8px',
              borderRadius: '2px'
            }}
          />
          <span style={{ fontSize: '0.875rem' }}>{item.group}</span>
        </div>
      ))}
    </div>
  );
};


export default Legend;
