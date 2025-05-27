'use client';
import React from 'react';
import { Grid } from '@carbon/react';
import HeaderNav from './DashboardHeader';
import SummaryCards from './SummaryTiles';
import RecentlyGenerated from './ReportsTable';

export default function DashboardPage() {
  return (
      <>
      <HeaderNav />
      <main style={{ padding: '2rem' }}>
         <SummaryCards />
        <RecentlyGenerated />
       </main>
   </>

  );
}
