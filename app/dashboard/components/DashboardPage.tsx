'use client';
import React from 'react';
import { Grid,Column } from '@carbon/react';
import HeaderNav from './DashboardHeader';
import SummaryCards from './SummaryTiles';
import RecentlyGenerated from './ReportsTable';

export default function DashboardPage() {
  return (
      <Grid fullWidth>
      <Column lg={16} md={8} sm={4}>
      <HeaderNav />
      
      {/* <main style={{ padding: '1rem'}}> */}
        <h3 className="section-avm-dashboard">AVM Dashboard</h3>
        <SummaryCards />
        <RecentlyGenerated />
       {/* </main> */}
   </Column>
    </Grid>

  );
}
