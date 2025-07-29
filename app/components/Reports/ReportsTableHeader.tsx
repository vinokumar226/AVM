'use client';

import React, { useState, useMemo } from 'react';
import {
  Button,
  Link,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
  TableToolbarMenu,
} from '@carbon/react';
import { DocumentPdf, Filter } from '@carbon/icons-react';
import PaginatedTable from './PaginatedTable';
import Image from 'next/image';

// Define RowData type for each row in the table
interface RowData {
  id: string;
  image: React.ReactNode;
  address: string;
  loan: string;
  reference: string;
  value: string;
  confidence: string;
  fsd: string;
  status: string;
  date: string;
  action: React.ReactNode;
}

// Filter content into a custom component
const CustomFilterMenu = ({
  selectedStatuses,
  toggleStatusFilter,
  clearFilters,
}: {
  selectedStatuses: string[];
  toggleStatusFilter: (status: string) => void;
  clearFilters: () => void;
}) => {
  return (
    <div style={{ padding: '1rem', width: '160px' }}>
      {['Active', 'Sold', 'Inprocess'].map((status) => (
        <label
          key={status}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '0.5rem',
          }}
        >
          <input
            type="checkbox"
            checked={selectedStatuses.includes(status)}
            onChange={() => toggleStatusFilter(status)}
          />
          {status}
        </label>
      ))}
      <div
        style={{
          borderTop: '1px solid #ddd',
          marginTop: '0.75rem',
          paddingTop: '0.75rem',
        }}
      >
        <Button
          kind="tertiary"
          size="sm"
          onClick={clearFilters}
          style={{
            backgroundColor: '#000',
            color: '#fff',
            width: '100%',
            padding: '0.75rem',
          }}
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

const headers = [
  { header: 'Image', key: 'image' },
  { header: 'Address', key: 'address' },
  { header: 'Loan No.', key: 'loan' },
  { header: 'Reference #', key: 'reference' },
  { header: 'Estimated Value', key: 'value' },
  { header: 'Confidence Score', key: 'confidence' },
  { header: 'FSD', key: 'fsd' },
  { header: 'Status', key: 'status' },
  { header: 'Date Generated', key: 'date' },
  { header: 'Action', key: 'action' },
];

const originalRows: RowData[] = [
  {
    id: 'a',
    image: <Image src="/property1.jpg" alt="House" width={70} height={48} />,
    address: '838 HOUSTON RD, 90024',
    loan: '12345',
    reference: '12345',
    value: '$345,000',
    confidence: '92',
    fsd: '97%',
    status: 'Active',
    date: 'May 18, 2025',
    action: (
      <Link href="#">
        <DocumentPdf />
      </Link>
    ),
  },
  {
    id: 'b',
    image: <Image src="/property2.jpg" alt="House" width={70} height={48} />,
    address: '754 GRAY FOX RUN, 90024',
    loan: '145232',
    reference: '14523',
    value: '$278,500',
    confidence: '88',
    fsd: '89%',
    status: 'Sold',
    date: 'May 18, 2025',
    action: (
      <Link href="#">
        <DocumentPdf />
      </Link>
    ),
  },
  {
    id: 'c',
    image: <img src="/property3.jpg" width="40" />,
    address: '755 SOMERSET DR, 90024',
    loan: '125334',
    reference: '12534',
    value: '$412,000',
    confidence: '95',
    fsd: '98%',
    status: 'Active',
    date: 'May 18, 2025',
    action: (
      <Link href="#">
        <DocumentPdf />
      </Link>
    ),
  },
  {
    id: 'd',
    image: <img src="/property4.jpg" width="40" />,
    address: '610 GALBRO CIR, 90024',
    loan: '145423',
    reference: '14523',
    value: '$189,000',
    confidence: '75',
    fsd: '72%',
    status: 'Sold',
    date: 'May 18, 2025',
    action: (
      <Link href="#">
        <DocumentPdf />
      </Link>
    ),
  },
  {
    id: 'e',
    image: <img src="/property5.jpg" width="40" />,
    address: ' 755 SOMERSET DR, 90024',
    loan: '345512',
    reference: '34512',
    value: '$385,000',
    confidence: '91',
    fsd: '93%',
    status: 'Sold',
    date: 'May 18, 2025',
    action: (
      <Link href="#">
        <DocumentPdf />
      </Link>
    ),
  },
  {
    id: 'f',
    image: <img src="/property6.jpg" width="40" />,
    address: '754 GRAY FOX RUN, 90024',
    loan: '156234',
    reference: '15234',
    value: '$222,000',
    confidence: '82',
    fsd: '85%',
    status: 'Sold',
    date: 'May 18, 2025',
    action: (
      <Link href="#">
        <DocumentPdf />
      </Link>
    ),
  },
  {
    id: 'g',
    image: <img src="/property7.jpg" width="40" />,
    address: '755 SOMERSET DR, 90024',
    loan: '457123',
    reference: '45123',
    value: '$385,000',
    confidence: '91',
    fsd: '93%',
    status: 'Sold',
    date: 'May 18, 2025',
    action: (
      <Link href="#">
        <DocumentPdf />
      </Link>
    ),
  },
  {
    id: 'h',
    image: <img src="/house.jpg" width="40" />,
    address: '754 GRAY FOX RUN, 90024',
    loan: '124583',
    reference: '12453',
    value: '$222,000',
    confidence: '82',
    fsd: '85%',
    status: 'Sold',
    date: 'May 18, 2025',
    action: (
      <Link href="#">
        <DocumentPdf />
      </Link>
    ),
  },
  {
    id: 'i',
    image: <img src="/house.jpg" width="40" />,
    address: '755 SOMERSET DR, 90024',
    loan: '124593',
    reference: '12453',
    value: '$412,000',
    confidence: '95',
    fsd: '98%',
    status: 'Sold',
    date: 'May 18, 2025',
    action: (
      <Link href="#">
        <DocumentPdf />
      </Link>
    ),
  },
  {
    id: 'j',
    image: <img src="/house.jpg" width="40" />,
    address: '838 HOUSTON RD10, 90024',
    loan: '145237',
    reference: '14235',
    value: '$278,500',
    confidence: '88',
    fsd: '89%',
    status: 'Sold',
    date: 'May 18, 2025',
    action: (
      <Link href="#">
        <DocumentPdf />
      </Link>
    ),
  }
  // Add more rows as needed
];

export default function ReportsTable() {
  const [searchText, setSearchText] = useState('');
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const toggleStatusFilter = (status: string) => {
    setSelectedStatuses((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };

  const clearFilters = () => {
    setSelectedStatuses([]);
  };

  // Memoize filtered rows based on search text and selected statuses
  const filteredRows = useMemo(() => {
    return originalRows.filter((row) => {
      const matchesSearch = Object.values(row).some((value) => {
        if (typeof value === 'string') {
          return value.toLowerCase().includes(searchText.toLowerCase());
        }
        return false;
      });

      const matchesFilter =
        selectedStatuses.length === 0 || selectedStatuses.includes(row.status);

      return matchesSearch && matchesFilter;
    });
  }, [searchText, selectedStatuses]);

  return (
    <div
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        padding: '1.5rem',
        backgroundColor: '#fff',
        marginTop: '1rem',
      }}
    >
      {/* Header */}
      <div
        className="table-header-bar"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '1rem',
        }}
      >
        <h3>Searched Reports</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontWeight: 'bold' }}>
            Reports Generated:{' '}
            <span style={{ fontSize: '1.25rem' }}>300</span>
          </span>
          <Button kind="primary" size="sm" className="custom-blue-button">
            New Search
          </Button>
        </div>
      </div>

      {/* Table Toolbar */}
      <TableToolbar>
        <TableToolbarContent>
          <TableToolbarSearch
            value={searchText}
            onChange={(event) => {
              if (typeof event === 'string') {
                setSearchText(event); // when cleared
              } else {
                setSearchText(event.target.value); // typical input
              }
            }}
            placeholder="Search table..."
          />

          <TableToolbarMenu renderIcon={Filter} iconDescription="Filter status">
            <CustomFilterMenu
              selectedStatuses={selectedStatuses}
              toggleStatusFilter={toggleStatusFilter}
              clearFilters={clearFilters}
            />
          </TableToolbarMenu>
        </TableToolbarContent>
      </TableToolbar>

      {/* Paginated Table */}
      <PaginatedTable headers={headers} rows={filteredRows} />
    </div>
  );
}
