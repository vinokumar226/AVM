'use client';
import React from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell
} from '@carbon/react';

import { Download } from '@carbon/icons-react';
import Image from 'next/image';

// const headers = [
//   { key: 'image', header: 'Image' },
//   { key: 'address', header: 'Address' },
//   { key: 'loan', header: 'Loan No.' },
//   { key: 'ref', header: 'Reference #' },
//   { key: 'status', header: 'Status' },
//   { key: 'date', header: 'Date Generated' },
//   { key: 'action', header: 'Action' },
// ];

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
    <div className="dashboard-table-container">
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
                <Image
                  src="/house.jpg"
                  alt="House"
                  width={70}
                  height={48}
                />
              </TableCell>
              <TableCell>
                838 HOUSTON RD
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
                <Image
                  src="/house.jpg"
                  alt="House"
                  width={70}
                  height={48}
                />
              </TableCell>
              <TableCell>
                838 HOUSTON RD
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
                <Image
                  src="/house.jpg"
                  alt="House"
                  width={70}
                  height={48}
                />
              </TableCell>
              <TableCell>
                838 HOUSTON RD
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
                <Image
                  src="/house.jpg"
                  alt="House"
                  width={70}
                  height={48}
                />
              </TableCell>
              <TableCell>
                838 HOUSTON RD
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
                <Image
                  src="/house.jpg"
                  alt="House"
                  width={70}
                  height={48}
                />
              </TableCell>
              <TableCell>
                838 HOUSTON RD
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
                <Image
                  src="/house.jpg"
                  alt="House"
                  width={70}
                  height={48}
                />
              </TableCell>
              <TableCell>
                838 HOUSTON RD
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
                <Image
                  src="/house.jpg"
                  alt="House"
                  width={70}
                  height={48}
                />
              </TableCell>
              <TableCell>
                838 HOUSTON RD
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
                <Image
                  src="/house.jpg"
                  alt="House"
                  width={70}
                  height={48}
                />
              </TableCell>
              <TableCell>
                838 HOUSTON RD
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
                <Image
                  src="/house.jpg"
                  alt="House"
                  width={70}
                  height={48}
                />
              </TableCell>
              <TableCell>
                838 HOUSTON RD
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
                <Image
                  src="/house.jpg"
                  alt="House"
                  width={70}
                  height={48}
                />
              </TableCell>
              <TableCell>
                838 HOUSTON RD
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
          <Image
            src="/no_reports_found.png"
            alt="No reports"
            width={179}
            height={159}
            className="no-reports-found"
          />
          <h1>No reports found !</h1>
        </div>
      )}

    </div>
  );
};

export default ComparableSalesTable;
