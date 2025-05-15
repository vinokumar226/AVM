"use client"
import React from 'react';
  
import { Grid, Column } from '@carbon/react';
  
  export default function App() {

  return  <> <Grid as="div" style = {{ backgroundColor:'green', fontSize:'40px' ,marginTop: '20px',marginBottom: '20px' }}>
    <Column sm={4}>Column 1 Text</Column>
    <Column sm={4}>Column 2 Text</Column>
    <Column sm={4}>Column 3 Text</Column>
    <Column sm={4}>Column 4 Text</Column>
    </Grid>

    <Grid as="div" style = {{ backgroundColor:'green', fontSize:'40px'  }}>
    <Column sm={4}>Column 1 Text</Column>
    <Column sm={4}>Column 2 Text</Column>
    <Column sm={4}>Column 3 Text</Column>
    <Column sm={4}>Column 4 Text</Column>
    </Grid>
    </>
  }