'use client';

import { Grid, Column } from '@carbon/react';
import HeaderNav from '../components/Common/Header';
import ReportsTableHeader from '../components/Reports/ReportsTableHeader';
import '../dashboard/dashboard.scss';
import './report-header.scss';

export default function Page() {
  return (
    <>
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4}>
        <div style={{ paddingTop: '3rem' }}>
          <HeaderNav />
          <ReportsTableHeader />
          </div>
        </Column>
      </Grid>
    </>
  );
}
