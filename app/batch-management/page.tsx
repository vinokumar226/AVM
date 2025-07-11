'use client';

import { Grid, Column } from '@carbon/react';
import HeaderNav from '../components/Common/Header';
import BatchManagement from '../components/BatchManagement/BatchManagement';
import '../dashboard/dashboard.scss';
import '../reports/report-header.scss';

export default function Page() {
  return (
    <>
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4}>
        <div style={{ paddingTop: '3rem' }}>
          <HeaderNav />
          <BatchManagement />
          </div>
        </Column>
      </Grid>
    </>
  );
}
