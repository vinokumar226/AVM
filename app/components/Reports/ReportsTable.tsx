'use client';
import React from 'react';
import { 
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Column,
  Link,
  Button,
  Grid
} from '@carbon/react';

import { DocumentPdf } from '@carbon/icons-react';
import Image from 'next/image';

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


// const rows = []; // Simulate empty state here

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
        <Image src="/house.jpg" alt="House" width={50} />
      </TableCell>
      <TableCell>
        838 HOUSTON RD
      </TableCell>
      <TableCell>
        12345
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
<<<<<<< HEAD:app/components/Reports/ReportsTable.tsx
        <Link href="/path/to/document.pdf"><DocumentPdf size={20} /></Link>
      </TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <Image src="/house.jpg" alt="House" width={50} />
      </TableCell>
      <TableCell>
        838 HOUSTON RD
      </TableCell>
      <TableCell>
        12345
      </TableCell>
      <TableCell>
        12345
=======
        97%
>>>>>>> main:app/dashboard/components/ReportsTable.tsx
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
        <Image src="/house.jpg" alt="House" width={50} />
      </TableCell>
      <TableCell>
        838 HOUSTON RD
      </TableCell>
      <TableCell>
        12345
      </TableCell>
      <TableCell>
        12345
      </TableCell>
       <TableCell>
        $245,000
      </TableCell>
      <TableCell>
        88
      </TableCell>
      <TableCell>
<<<<<<< HEAD:app/components/Reports/ReportsTable.tsx
        <Link href="/path/to/document.pdf"><DocumentPdf size={20} /></Link>
      </TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <Image src="/house.jpg" alt="House" width={50} />
      </TableCell>
      <TableCell>
        838 HOUSTON RD
      </TableCell>
      <TableCell>
        12345
      </TableCell>
      <TableCell>
        12345
=======
        95%
>>>>>>> main:app/dashboard/components/ReportsTable.tsx
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
        <Image src="/house.jpg" alt="House" width={50} />
      </TableCell>
      <TableCell>
        838 HOUSTON RD
      </TableCell>
      <TableCell>
        12345
      </TableCell>
      <TableCell>
        12345
      </TableCell>
       <TableCell>
        $365,000
      </TableCell>
      <TableCell>
        88
      </TableCell>
      <TableCell>
<<<<<<< HEAD:app/components/Reports/ReportsTable.tsx
        <Link href="/path/to/document.pdf"><DocumentPdf size={20} /></Link>
      </TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <Image src="/house.jpg" alt="House" width={50} />
      </TableCell>
      <TableCell>
        838 HOUSTON RD
      </TableCell>
      <TableCell>
        12345
      </TableCell>
      <TableCell>
        12345
=======
        98%
>>>>>>> main:app/dashboard/components/ReportsTable.tsx
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
        <Image src="/house.jpg" alt="House" width={50} />
      </TableCell>
      <TableCell>
        838 HOUSTON RD
      </TableCell>
      <TableCell>
        12345
      </TableCell>
      <TableCell>
        12345
      </TableCell>
       <TableCell>
        $545,000
      </TableCell>
      <TableCell>
        95
      </TableCell>
      <TableCell>
<<<<<<< HEAD:app/components/Reports/ReportsTable.tsx
        <Link href="/path/to/document.pdf"><DocumentPdf size={20} /></Link>
      </TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <Image src="/house.jpg" alt="House" width={50} />
      </TableCell>
      <TableCell>
        838 HOUSTON RD
      </TableCell>
      <TableCell>
        12345
      </TableCell>
      <TableCell>
        12345
=======
        72%
>>>>>>> main:app/dashboard/components/ReportsTable.tsx
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
        <Image src="/house.jpg" alt="House" width={50} />
      </TableCell>
      <TableCell>
        838 HOUSTON RD
      </TableCell>
      <TableCell>
        12345
      </TableCell>
      <TableCell>
        12345
      </TableCell>
       <TableCell>
        $435,000
      </TableCell>
      <TableCell>
        95
      </TableCell>
      <TableCell>
        78%
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
        <Image src="/house.jpg" alt="House" width={50} />
      </TableCell>
      <TableCell>
        838 HOUSTON RD
      </TableCell>
      <TableCell>
        12345
      </TableCell>
      <TableCell>
        12345
      </TableCell>
       <TableCell>
        $325,000
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

    <TableRow>
      <TableCell>
        <img src="/house.jpg" alt="House" width={50} />
      </TableCell>
      <TableCell>
        838 HOUSTON RD
      </TableCell>
      <TableCell>
        12345
      </TableCell>
      <TableCell>
        12345
      </TableCell>
       <TableCell>
        $344,000
      </TableCell>
      <TableCell>
        91
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
        <img src="/house.jpg" alt="House" width={50} />
      </TableCell>
      <TableCell>
        838 HOUSTON RD
      </TableCell>
      <TableCell>
        12345
      </TableCell>
      <TableCell>
        12345
      </TableCell>
       <TableCell>
        $334,000
      </TableCell>
      <TableCell>
        94
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
        <img src="/house.jpg" alt="House" width={50} />
      </TableCell>
      <TableCell>
        838 HOUSTON RD
      </TableCell>
      <TableCell>
        12345
      </TableCell>
      <TableCell>
        12345
      </TableCell>
       <TableCell>
        $346,000
      </TableCell>
      <TableCell>
        95
      </TableCell>
      <TableCell>
        71%
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
        <img src="/house.jpg" alt="House" width={50} />
      </TableCell>
      <TableCell>
        838 HOUSTON RD
      </TableCell>
      <TableCell>
        12345
      </TableCell>
      <TableCell>
        12345
      </TableCell>
       <TableCell>
        $645,000
      </TableCell>
      <TableCell>
        96
      </TableCell>
      <TableCell>
        92%
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
            Start by selecting the <strong>New search</strong> button and create your first report.
          </p>
          {/* <img className="no-reports-found" src="no_reports_found.png" alt="No reports" /> */}
          <Image src="/no_reports_found.png" alt="No reports" width={120} height={40} className="no-reports-found" />
          <h1>No reports found !</h1>
        </div>
      )}
  
</div>
);
};

export default RecentlyGeneratedTable;
