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
  Column
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

const RecentlyGeneratedTable = () => (
  <Table aria-label="sample table">
  <TableHead>
    <TableRow>
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
        <img src="Null" alt="House" width={50} />
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
        Active
      </TableCell>
      <TableCell>
        May 27, 2025
      </TableCell>
      <TableCell>
        <DocumentPdf size={20} />
      </TableCell>
    </TableRow>
  </TableBody>
</Table>

);

export default RecentlyGeneratedTable;
