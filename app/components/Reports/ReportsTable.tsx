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

const RecentlyGeneratedTable = () => {
  const hasData = rows.length > 0;

return (
<div className="dashboard-table-container">
     <Grid>
      <Column lg={12} md={8} sm={4} className="section-title"> Recently Generated </Column >
      {!hasData && ( 
        <Column lg={4} md={8} sm={4} className="report-button"> <Button>New Search</Button></Column>
      )}
    </Grid>
    
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
        Loan No
      </TableHeader>
      <TableHeader>
        Reference#
      </TableHeader>
       <TableHeader>
        Estimated Value
      </TableHeader>
       <TableHeader>
        Confidence Score
      </TableHeader>
      <TableHeader>
        FSD
      </TableHeader>
       <TableHeader>
        Status
      </TableHeader>
       <TableHeader>
        Date Generated
      </TableHeader>
       <TableHeader>
        Action
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
        123451
      </TableCell>
      <TableCell>
        12345
      </TableCell>
      <TableCell>
        $345,000
      </TableCell>
      <TableCell>
        92
      </TableCell>
      <TableCell>
        97%
      </TableCell>
      <TableCell>
        Active
      </TableCell>
      <TableCell>
        May 27, 2025
      </TableCell>
      <TableCell>
        <Link href="/path/to/document.pdf"><DocumentPdf size={20} /></Link>
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
        145232
      </TableCell>
      <TableCell>
        14523
      </TableCell>
      <TableCell>
        $278,500
      </TableCell>
      <TableCell>
        88
      </TableCell>
      <TableCell>
        89%
      </TableCell>
      <TableCell>
        Active
      </TableCell>
      <TableCell>
        May 27, 2025
      </TableCell>
      <TableCell>
        <Link href="/path/to/document.pdf"><DocumentPdf size={20} /></Link>
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
        125334
      </TableCell>
      <TableCell>
        12534
      </TableCell>
      <TableCell>
        $412,000
      </TableCell>
      <TableCell>
        95
      </TableCell>
      <TableCell>
        98%
      </TableCell>
      <TableCell>
        Active
      </TableCell>
      <TableCell>
        May 27, 2025
      </TableCell>
      <TableCell>
        <Link href="/path/to/document.pdf"><DocumentPdf size={20} /></Link>
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
        145423
      </TableCell>
      <TableCell>
        14523
      </TableCell>
      <TableCell>
        $189,000
      </TableCell>
      <TableCell>
        75
      </TableCell>
      <TableCell>
        72%
      </TableCell>
      <TableCell>
        Sold
      </TableCell>
      <TableCell>
        May 27, 2025
      </TableCell>
      <TableCell>
        <Link href="/path/to/document.pdf"><DocumentPdf size={20} /></Link>
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
        345512
      </TableCell>
      <TableCell>
        34512
      </TableCell>
      <TableCell>
        $385,000
      </TableCell>
      <TableCell>
        91
      </TableCell>
      <TableCell>
        93%
      </TableCell>
      <TableCell>
        Sold
      </TableCell>
      <TableCell>
        May 27, 2025
      </TableCell>
      <TableCell>
        <Link href="/path/to/document.pdf"><DocumentPdf size={20} /></Link>
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
        156234
      </TableCell>
      <TableCell>
        15234
      </TableCell>
      <TableCell>
        $385,000
      </TableCell>
      <TableCell>
        91
      </TableCell>
      <TableCell>
        93%
      </TableCell>
      <TableCell>
        Active
      </TableCell>
      <TableCell>
        May 27, 2025
      </TableCell>
      <TableCell>
        <Link href="/path/to/document.pdf"><DocumentPdf size={20} /></Link>
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
        457123
      </TableCell>
      <TableCell>
        45123
      </TableCell>
       <TableCell>
        $385,000
      </TableCell>
      <TableCell>
        91
      </TableCell>
      <TableCell>
        93%
      </TableCell>
      <TableCell>
        Active
      </TableCell>
      <TableCell>
        May 27, 2025
      </TableCell>
      <TableCell>
        <Link href="/path/to/document.pdf"><DocumentPdf size={20} /></Link>
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
        124583
      </TableCell>
      <TableCell>
        12453
      </TableCell>
       <TableCell>
        $222,000
      </TableCell>
      <TableCell>
        82
      </TableCell>
      <TableCell>
        85%
      </TableCell>
      <TableCell>
        Active
      </TableCell>
      <TableCell>
        May 27, 2025
      </TableCell>
      <TableCell>
        <Link href="/path/to/document.pdf"><DocumentPdf size={20} /></Link>
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
        124593
      </TableCell>
      <TableCell>
        12453
      </TableCell>
       <TableCell>
        $385,000
      </TableCell>
      <TableCell>
        91
      </TableCell>
      <TableCell>
        93%
      </TableCell>
      <TableCell>
        Sold
      </TableCell>
      <TableCell>
        May 27, 2025
      </TableCell>
      <TableCell>
        <Link href="/path/to/document.pdf"><DocumentPdf size={20} /></Link>
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
        145237
      </TableCell>
      <TableCell>
        14235
      </TableCell>
       <TableCell>
        $222,000
      </TableCell>
      <TableCell>
        82
      </TableCell>
      <TableCell>
        85%
      </TableCell>
      <TableCell>
        Sold
      </TableCell>
      <TableCell>
        May 27, 2025
      </TableCell>
      <TableCell>
        <Link href="/path/to/document.pdf"><DocumentPdf size={20} /></Link>
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

export default RecentlyGeneratedTable;