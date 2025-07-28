'use client';
import React from 'react';
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Column,
  Link,
  Button,
  FlexGrid, Row , Grid
} from '@carbon/react';

import { Download, DocumentPdf } from '@carbon/icons-react';

const headers = [
  { key: 'image', header: 'Image' },
  { key: 'address', header: 'Address' },
  { key: 'loan', header: 'Loan No.' },
  { key: 'ref', header: 'Reference #' },
  { key: 'status', header: 'Status' },
  { key: 'date', header: 'Date Generated' },
  { key: 'action', header: 'Action' },
];

const rows = [
  {
    id: '1',
    image: '/house1.jpg',
    address: '838 HOUSTON RD',
    loan: '12345',
    ref: '12345',
    status: 'Active',
    date: 'May 18, 2025',
    action: <Download size={20} />
  }
];


//const rows = []; // Simulate empty state here

const ComparableSalesTable = () => {
  const hasData = rows.length > 0;

return (
<div>
    {hasData ? (
  <Table aria-label="sample table">
  <TableHead>
    <TableRow className="table-head-color">
      <TableHeader>
        Image
      </TableHeader>
      <TableHeader>
        Address
      </TableHeader>
       <TableHeader>
        Similarity
      </TableHeader>
       <TableHeader>
        Distance
      </TableHeader>
       <TableHeader>
        Year Built
      </TableHeader>
      <TableHeader>
        Beds
      </TableHeader>
      <TableHeader>
        Home Sq Ft
      </TableHeader>
      <TableHeader>
        Lot Sq Ft
      </TableHeader>
      <TableHeader>
        Property Type
      </TableHeader>
      <TableHeader>
       Sale Price
      </TableHeader>
      <TableHeader>
        Sale Date
      </TableHeader>
       <TableHeader>
        List Price
      </TableHeader>
       <TableHeader>
        List Date
      </TableHeader>
      <TableHeader>
        Status
      </TableHeader>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
       <TableCell>
              <img src="/ian-macdonald--dcznEJPmsk-unsplash 1.png" alt="House" width={50} />
            </TableCell>
            <TableCell>
              838 HOUSTON RD, 90024
            </TableCell>
      <TableCell>
        98%
      </TableCell>
      <TableCell>
       N/A
      </TableCell>
      <TableCell>
        2002
      </TableCell>
      <TableCell>
        4/2.1
      </TableCell>
      <TableCell>
        2,138
      </TableCell>
      <TableCell>
        29,185
      </TableCell>
      <TableCell>
        Colonial
      </TableCell>
      <TableCell>
        $254,000
      </TableCell>
      <TableCell>
        01/10/2019
      </TableCell>
       <TableCell>
        $254,000
      </TableCell>
      <TableCell>
        01/10/2019
      </TableCell>
      <TableCell>
       Active
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
              <img src="/i-do-nothing-but-love-mDdXR_tTq3U-unsplash 1.png" alt="House" width={50} />
            </TableCell>
            <TableCell>
              754 GRAY FOX RUN, 90024
            </TableCell>
      <TableCell>
        95%
      </TableCell>
      <TableCell>
       N/A
      </TableCell>
      <TableCell>
        2002
      </TableCell>
      <TableCell>
        4/2.1
      </TableCell>
      <TableCell>
        2,138
      </TableCell>
      <TableCell>
        29,185
      </TableCell>
      <TableCell>
        Colonial
      </TableCell>
      <TableCell>
        $254,000
      </TableCell>
      <TableCell>
        01/10/2019
      </TableCell>
       <TableCell>
        $254,000
      </TableCell>
      <TableCell>
        01/10/2019
      </TableCell>
      <TableCell>
       Sold
      </TableCell>
    </TableRow>
    <TableRow>
     <TableCell>
             <img src="/dillon-kydd-3Ignkeds3w8-unsplash 1.png" alt="House" width={50} />
           </TableCell>
           <TableCell>
             755 SOMERSET DR, 90024
           </TableCell>
      <TableCell>
        93%
      </TableCell>
      <TableCell>
       0.50
      </TableCell>
      <TableCell>
        1980
      </TableCell>
      <TableCell>
        4/2.1
      </TableCell>
      <TableCell>
        2,138
      </TableCell>
      <TableCell>
        29,185
      </TableCell>
      <TableCell>
        Colonial
      </TableCell>
      <TableCell>
        $254,000
      </TableCell>
      <TableCell>
        01/10/2019
      </TableCell>
       <TableCell>
        $254,000
      </TableCell>
      <TableCell>
        01/10/2019
      </TableCell>
      <TableCell>
       Sold
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
              <img src="/property1.jpg" alt="House" width={50} />
            </TableCell>
            <TableCell>
              610 GALBRO CIR, 90024
            </TableCell>
      <TableCell>
        93%
      </TableCell>
      <TableCell>
       0.38
      </TableCell>
      <TableCell>
        1999
      </TableCell>
      <TableCell>
        4/2.1
      </TableCell>
      <TableCell>
        2,138
      </TableCell>
      <TableCell>
        29,185
      </TableCell>
      <TableCell>
        Colonial
      </TableCell>
      <TableCell>
        $254,000
      </TableCell>
      <TableCell>
        01/10/2019
      </TableCell>
       <TableCell>
        $254,000
      </TableCell>
      <TableCell>
        01/10/2019
      </TableCell>
      <TableCell>
       Active
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
              <img src="/property2.jpg" alt="House" width={50} />
            </TableCell>
            <TableCell>
              755 SOMERSET DR, 90024
            </TableCell>
      <TableCell>
        95%
      </TableCell>
      <TableCell>
       0.63
      </TableCell>
      <TableCell>
        2000
      </TableCell>
      <TableCell>
        4/2.1
      </TableCell>
      <TableCell>
        2,138
      </TableCell>
      <TableCell>
        29,185
      </TableCell>
      <TableCell>
        Colonial
      </TableCell>
      <TableCell>
        $254,000
      </TableCell>
      <TableCell>
        01/10/2019
      </TableCell>
       <TableCell>
        $254,000
      </TableCell>
      <TableCell>
        01/10/2019
      </TableCell>
      <TableCell>
       Sold
      </TableCell>
    </TableRow>
    <TableRow>
     <TableCell>
             <img src="/property3.jpg" alt="House" width={50} />
           </TableCell>
           <TableCell>
             754 GRAY FOX RUN, 90024
           </TableCell>
      <TableCell>
        97%
      </TableCell>
      <TableCell>
       N/A
      </TableCell>
      <TableCell>
        2005
      </TableCell>
      <TableCell>
        4/2.1
      </TableCell>
      <TableCell>
        2,138
      </TableCell>
      <TableCell>
        29,185
      </TableCell>
      <TableCell>
        Colonial
      </TableCell>
      <TableCell>
        $254,000
      </TableCell>
      <TableCell>
        01/10/2019
      </TableCell>
       <TableCell>
        $254,000
      </TableCell>
      <TableCell>
        01/10/2019
      </TableCell>
      <TableCell>
       Active
      </TableCell>
    </TableRow>
    <TableRow>
       <TableCell>
              <img src="/property4.jpg" alt="House" width={50} />
            </TableCell>
            <TableCell>
              755 SOMERSET DR, 90024
            </TableCell>
      <TableCell>
        96%
      </TableCell>
      <TableCell>
      0.56
      </TableCell>
      <TableCell>
        2012
      </TableCell>
      <TableCell>
        4/2.1
      </TableCell>
      <TableCell>
        2,138
      </TableCell>
      <TableCell>
        29,185
      </TableCell>
      <TableCell>
        Colonial
      </TableCell>
      <TableCell>
        $254,000
      </TableCell>
      <TableCell>
        01/10/2019
      </TableCell>
       <TableCell>
        $254,000
      </TableCell>
      <TableCell>
        01/10/2019
      </TableCell>
      <TableCell>
       Active
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
              <img src="/property5.jpg" alt="House" width={50} />
            </TableCell>
            <TableCell>
              754 GRAY FOX RUN, 90024
            </TableCell>
      <TableCell>
        98%
      </TableCell>
      <TableCell>
       N/A
      </TableCell>
      <TableCell>
        2002
      </TableCell>
      <TableCell>
        4/2.1
      </TableCell>
      <TableCell>
        2,138
      </TableCell>
      <TableCell>
        29,185
      </TableCell>
      <TableCell>
        Colonial
      </TableCell>
      <TableCell>
        $254,000
      </TableCell>
      <TableCell>
        01/10/2019
      </TableCell>
       <TableCell>
        $254,000
      </TableCell>
      <TableCell>
        01/10/2019
      </TableCell>
      <TableCell>
       Sold
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
              <img src="/property6.jpg" alt="House" width={50} />
            </TableCell>
            <TableCell>
              755 SOMERSET DR, 90024
            </TableCell>
      <TableCell>
        98%
      </TableCell>
      <TableCell>
       N/A
      </TableCell>
      <TableCell>
        2002
      </TableCell>
      <TableCell>
        4/2.1
      </TableCell>
      <TableCell>
        2,138
      </TableCell>
      <TableCell>
        29,185
      </TableCell>
      <TableCell>
        Colonial
      </TableCell>
      <TableCell>
        $254,000
      </TableCell>
      <TableCell>
        01/10/2019
      </TableCell>
       <TableCell>
        $254,000
      </TableCell>
      <TableCell>
        01/10/2019
      </TableCell>
      <TableCell>
       Active
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
              <img src="/property7.jpg" alt="House" width={50} />
            </TableCell>
            <TableCell>
              838 HOUSTON RD10, 90024
            </TableCell>
      <TableCell>
        98%
      </TableCell>
      <TableCell>
       N/A
      </TableCell>
      <TableCell>
        2002
      </TableCell>
      <TableCell>
        4/2.1
      </TableCell>
      <TableCell>
        2,138
      </TableCell>
      <TableCell>
        29,185
      </TableCell>
      <TableCell>
        Colonial
      </TableCell>
      <TableCell>
        $254,000
      </TableCell>
      <TableCell>
        01/10/2019
      </TableCell>
       <TableCell>
        $254,000
      </TableCell>
      <TableCell>
        01/10/2019
      </TableCell>
      <TableCell>
       Active
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
) : (
  <div className="empty-state">
    {/* <div ><Button kind="primary">New Search</Button></div> */}
         
          <p className="empty-text">You haven’t created any reports yet.</p>
          <p className="empty-text">
            You currently have <strong>400</strong> records available to generate new reports.<br />
            Start by selecting the <strong>New search</strong> button and create your first report.
          </p>
          <img className="no-reports-found" src="no_reports_found.png" alt="No reports" />
          <h1>No reports found !</h1>
        </div>
      )}
  
</div>
);
};

export default ComparableSalesTable;
