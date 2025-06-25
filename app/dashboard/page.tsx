"use client";
import { Grid,Column } from '@carbon/react';
import HeaderNav from '../components/Common/Header';
import SummaryCards from '../components/Cards/SummaryTiles';
import RecentlyGenerated from '../components/Reports/ReportsTable';
import './dashboard.scss'

export default function Page() {
   return (
    <>       
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
    </>
  );
}

