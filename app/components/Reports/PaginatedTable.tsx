'use client';

import React, { useState } from 'react';
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Pagination
} from '@carbon/react';

interface PaginatedTableProps<T> {
  headers: { header: string; key: string }[];
  rows: T[];
  pageSizes?: number[];
}

export default function PaginatedTable<T extends { id: string }>({
  headers,
  rows,
  pageSizes = [10, 20]
}: PaginatedTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(pageSizes[0]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedRows = rows.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
    <DataTable rows={paginatedRows} headers={headers}>
      {({ rows, headers, getHeaderProps, getRowProps, getTableProps }) => (
        <Table {...getTableProps()}>
          <TableHead>
            <TableRow>
              {headers.map((header) => {
                const { key, ...rest } = getHeaderProps({ header, isSortable: true });
                return (
                  <TableHeader key={key} {...rest} className="custom-header-cell">
                    {header.header}
                  </TableHeader>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              const { key, ...restRow } = getRowProps({ row });
              return (
                <TableRow key={key} {...restRow}>
                  {row.cells.map((cell) => (
                    <TableCell key={cell.id}>{cell.value}</TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </DataTable>

    <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
      <Pagination
        page={currentPage}
        pageSize={itemsPerPage}
        pageSizes={pageSizes}
        totalItems={rows.length}
        onChange={({ page, pageSize }) => {
          setCurrentPage(page);
          setItemsPerPage(pageSize);
        }}
      />
    </div>
    </>
  );
}
