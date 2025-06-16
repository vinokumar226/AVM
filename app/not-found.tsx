// app/not-found.tsx
'use client';

import React from 'react';
import { Grid,Column, Button } from '@carbon/react';

import HeaderNav from './components/Common/Header';
// import { Error404 } from '@carbon/icons-react';
import { useRouter } from 'next/navigation';
// import './not-found.scss'; // optional custom styles

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <>       
      <Grid fullWidth>
      <Column lg={16} md={8} sm={4}>  
       <HeaderNav /> 
    <div className="not-found-container">
      <div className="not-found-content">
        {/* <Error404 size={64} className="not-found-icon" /> */}
        <h1 className="bx--type-expressive-heading-04">Page not found</h1>
        <p className="bx--type-body-long-02">
          Sorry, we can’t find the page you’re looking for.
        </p>
        <Button
          kind="primary"
          onClick={() => router.push('/')}
          className="not-found-button"
        >
          Back to homepage
        </Button>
      </div>
    </div>
    </Column>
       </Grid>
    </>
  );
}
