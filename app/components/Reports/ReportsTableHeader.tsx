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

// filter content into a custom component
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

const originalRows = [
  {
    id: 'a',
    image: <img src="/house.jpg" width="40" />,
    address: '838 HOUSTON RD',
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
    image: <img src="/house.jpg" width="40" />,
    address: '754 GRAY FOX RUN',
    loan: '12345',
    reference: '12345',
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

  const filteredRows = useMemo(() => {
    return originalRows.filter((row) => {
      const matchesSearch = Object.values(row).some((value: any) =>
        typeof value === 'string' &&
        value.toLowerCase().includes(searchText.toLowerCase())
      );

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
        marginTop: '1rem'
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
            onChange={(e: any) => setSearchText(e.target.value)}
            placeholder="Search table..."
          />

          <TableToolbarMenu
            renderIcon={Filter}
            iconDescription="Filter status"
          >
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
