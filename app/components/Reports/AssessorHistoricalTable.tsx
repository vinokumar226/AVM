'use client';

import React from 'react';
import {
  FlexGrid,
  Row,
  Column,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from '@carbon/react';

const assessorData = [
  { label: 'Assessed Value:', value: '$485,000' },
  { label: 'Assessed Year:', value: '2024' },
  { label: 'Parcel/APN:', value: '123-456-789' },
  { label: 'Census Tract:', value: '06075060100' },
  {
    label: 'Brief Legal Description:',
    value: 'Lot 12, Block 3, Sunnyvale Heights Subdivision',
  },
  { label: 'Owner of Record:', value: 'John Doe' },
  { label: 'Last Sale:', value: '$470,000 on 05/10/2022' },
  { label: 'Last Refi:', value: '$400,000 on 01/15/2024' },
];

const historicalHeaders = [
  { key: 'date', header: 'Sale Date' },
  { key: 'price', header: 'Sale Price' },
  { key: 'type', header: 'Type' },
];

const historicalRows = [
  { id: '1', date: '05/10/2022', price: '$485,000', type: 'Sold' },
  { id: '2', date: '08/30/2021', price: '$550,000', type: 'Sold' },
  { id: '3', date: '07/28/2020', price: '$610,000', type: 'Sold' },
  { id: '4', date: '06/19/2019', price: '$875,000', type: 'Listed' },
  { id: '5', date: '10/08/2018', price: '$850,000', type: 'Sold' },
  { id: '6', date: '09/13/2028', price: '$980,000', type: 'Listed' },
  { id: '7', date: '07/19/2017', price: '$955,000', type: 'Expired' },
  { id: '8', date: '12/20/2016', price: '$990,000', type: 'Sold' },
  { id: '9', date: '12/27/2015', price: '$1,090,000', type: 'Sold' },
  { id: '10', date: '01/20/2017', price: '$1,200,000', type: 'Sold' },
];

const DualTableLayout = () => {
  return (
    <FlexGrid fullWidth className='custom-grid'>
      <Row>
        <Column lg={8} md={4} sm={4}>
          {/* <TableContainer title="Assessor/Public Record"> */}
          <div className="section-heading">Assessor/Public Record</div>
            <Table>
              <TableHead>
                <TableRow className="table-head-color">
                  <TableHeader>Assessor</TableHeader>
                  <TableHeader>Public Record Information</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {assessorData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.label}</TableCell>
                    <TableCell>{item.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          {/* </TableContainer> */}
        </Column>

        <Column lg={8} md={4} sm={4}>
          {/* <TableContainer title="Historical Information"> */}
          <div className="section-heading">Historical Information</div>
            <Table>
              <TableHead>
                <TableRow className="table-head-color">
                  {historicalHeaders.map((header) => (
                    <TableHeader key={header.key}>{header.header}</TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {historicalRows.map((row) => (
                  <TableRow key={row.id}>
                    {historicalHeaders.map((header) => (
                      <TableCell key={header.key}>{row[header.key as keyof typeof row]}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          {/* </TableContainer> */}
        </Column>
      </Row>
    </FlexGrid>
  );
};

export default DualTableLayout;
