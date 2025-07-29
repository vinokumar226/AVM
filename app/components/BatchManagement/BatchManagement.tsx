'use client';

import React, { useState } from 'react';
import {
  Button,
  FormItem,
  FileUploaderDropContainer,
  TextInput,
  InlineLoading, 
  Tag,
  FileUploaderItem 
} from '@carbon/react';
import { Download, IbmCloudGateKeeper, DocumentPdf } from '@carbon/icons-react';
import PaginatedTable from '../Reports/PaginatedTable';

const FILE_ACCEPT_FORMAT = ['.csv', '.xlsx'];

const headers = [
  { header: 'Batch Name', key: 'batch' },
  { header: 'Uploaded By', key: 'uploader' },
  { header: 'Uploaded Date', key: 'date' },
  { header: 'Approximate Time', key: 'time' },
  { header: 'Status', key: 'status' },
  { header: 'Actions', key: 'actions' },
];

const rows = [
  {
    id: '1',
    batch: 'AVM-Batch-001',
    uploader: 'John Smith',
    date: '06/07/2025',
    time: '24 Hours',
    status: <Tag type="red">Processing</Tag>,
    actions: (
      <Button kind="ghost" size="sm" iconDescription="Download">
        <DocumentPdf />
      </Button>
    ),
  },
  {
    id: '2',
    batch: 'AVM-Batch-002',
    uploader: 'Maya Lee',
    date: '07/07/2025',
    time: '48 Hours',
    status: <Tag type="green">Completed</Tag>,
    actions: (
      <Button kind="ghost" size="sm" iconDescription="Download">
        <DocumentPdf />
      </Button>
    ),
  },
  {
    id: '3',
    batch: 'AVM-Batch-003',
    uploader: 'George William',
    date: '08/07/2025',
    time: '24 Hours',
    status: <Tag type="green">Completed</Tag>,
    actions: (
      <Button kind="ghost" size="sm" iconDescription="Download">
        <DocumentPdf />
      </Button>
    ),
  },
  {
    id: '4',
    batch: 'AVM-Batch-004',
    uploader: 'John David',
    date: '06/07/2025',
    time: '48 Hours',
    status: <Tag type="green">Completed</Tag>,
    actions: (
      <Button kind="ghost" size="sm" iconDescription="Download">
        <DocumentPdf />
      </Button>
    ),
  },
  {
    id: '5',
    batch: 'AVM-Batch-005',
    uploader: 'Maya Lee',
    date: '06/09/2025',
    time: '24 Hours',
    status: <Tag type="green">Completed</Tag>,
    actions: (
      <Button kind="ghost" size="sm" iconDescription="Download">
        <DocumentPdf />
      </Button>
    ),
  },
];

export default function BatchManagement() {
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [batchName, setBatchName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleUpload = () => {
    if (!fileNames) return;
    setIsProcessing(true);
    //setTimeout(() => setIsProcessing(false), 3000);
  };

  return (
    <div style={{ maxWidth: '100%' }}>
      <div
        style={{
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.06)',
          padding: '1.5rem',
          margin: '1rem',
        }}
      >
        <h3 style={{ marginBottom: '1.5rem' }}>Batch Management</h3>

        <div
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          {/* LEFT SIDE */}
          <div style={{ flex: '1 1 50%' }}>
            <FormItem>
              <p className="cds--file--label">Upload files</p>
              <FileUploaderDropContainer
                labelText="Drag and drop files here or click to upload"
                accept={FILE_ACCEPT_FORMAT}
                multiple={false}

                onAddFiles={(e) => {
                    const input = e.target as HTMLInputElement;
                    const files = Array.from(input.files || []);
                    if (files.length > 0) {
                        const names = files.map((file) => file.name);
                        setFileNames(names);
                    }
                }}
              />
              <div className="cds--file-container cds--file-container--drop" />
            </FormItem>

            {/* Reserved space for file name display */}
            <div style={{ marginTop: '1rem', minHeight: '2rem' }}>
                {fileNames.map((name, idx) => (
                    <FileUploaderItem
                    key={idx}
                    name={name}
                    status="edit"
                    onDelete={() =>
                        setFileNames((prev) => prev.filter((_, i) => i !== idx))
                    }
                    />
                ))}
            </div>

            {/* TextInput + Upload Button */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                marginTop: '1rem',
                alignItems: 'flex-end',
              }}
            >
              <TextInput
                id="batch-name"
                labelText="Batch Name"
                placeholder="(Optional)"
                value={batchName}
                onChange={(e) => setBatchName(e.target.value)}
                style={{ flexGrow: 1, height: '3rem' }}
              />
              <Button
                disabled={!fileNames}
                onClick={handleUpload}
                style={{
                  height: '3rem',
                  lineHeight: '3rem',
                  padding: '0 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius:'0.25rem'
                }}
              >
                Upload
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            style={{
              flex: '1 1 35%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              minHeight: '14rem',
              gap: '1rem',
            }}
          >
            {/* Encrypted info */}
            <p
              style={{
                color: 'green',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <IbmCloudGateKeeper /> All uploads are encrypted and securely handled.
            </p>

            {/* File Requirements */}
            <div style={{ marginTop: '0.5rem' }}>
              <p style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}><strong>File Requirements:</strong></p>
              <p style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}><b>Accepted Format:</b> .csv, .xlsx</p>
              <p style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}><b>Max File Size:</b> 50mb</p>
              <p style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}><b>Required Columns:</b> <i>Street Address, City, State and Zip</i></p>
              <p style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}><b>Optional:</b> <i>Owner Name</i> (improves matching accuracy)</p>
            </div>

            {/* Figma-style Sample File box */}
            <div
              style={{
                border: '1px solid #e0e0e0',
                padding: '0.75rem',
                borderRadius: '4px',
                maxWidth: '400px',
              }}
            >
              <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Sample File:</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.875rem' }}>Download Sample.csv</span>
                <Download />
              </div>
            </div>
          </div>
        </div>

        {/* Loading */}
        {isProcessing && (
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <InlineLoading description="We are processing the uploaded file and will validate and append the updated values within 24 hours." />
          </div>
        )}

        {/* Table */}
        <div style={{ marginTop: '2rem' }}>
          <h4>Generated Batch List</h4>
          <PaginatedTable headers={headers} rows={rows} />
        </div>
      </div>
    </div>
  );
}
