'use client';

import { Grid,Column } from '@carbon/react';
import HeaderNav from '../components/Common/Header';
import IvalAdress from '../components/IvalAddressSearch/IvalAddress';
import '../dashboard/dashboard.scss';
import './ival-avm.scss';


export default function Page() {
   return (
    <>       
      <Grid fullWidth>
      <Column lg={16} md={8} sm={4}>  
       <HeaderNav /> 
      {/* <main style={{ padding: '1rem'}}> */}
        {/* <h3 className="section-avm-dashboard">i-Val@ AVM</h3> */}
        <IvalAdress />
       {/* </main> */}
       </Column>
       </Grid>
    </>
  );
}

