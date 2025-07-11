'use client';

import React, { useState } from 'react';
import {
  Button,
  Form,
  TextInput,
  Dropdown,
  ToastNotification,
  Theme,
  Stack,
  FormGroup
} from '@carbon/react';
import { useToast } from '@/lib/hooks/useToast';
import { Help,Add } from '@carbon/icons-react';
import IValReport from './IvalReport';

export default function IValAVMForm() {
  const [formData, setFormData] = useState({
    address: '',
    state: null,
    firstName: '',
    apn: '',
    city: null,
    zip: '',
    lastName: '',
    loan: '',
    reference: '',
  });

  const {
    isVisibleToast,
    message,
    title,
    kind,
    showToast,
    hideToast,
  } = useToast();

  const handleChange = (key: string) => (value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('success', 'Submitted', 'Form submitted successfully!');
  };

  const handleReset = () => {
    setFormData({
      address: '',
      state: null,
      firstName: '',
      apn: '',
      city: null,
      zip: '',
      lastName: '',
      loan: '',
      reference: '',
    });
  };

  const stateItems = [
    { id: 'ca', text: 'California' },
    { id: 'ny', text: 'New York' },
    { id: 'tx', text: 'Texas' },
  ];

  const cityItems = [
    { id: 'la', text: 'Los Angeles' },
    { id: 'sf', text: 'San Francisco' },
    { id: 'nyc', text: 'New York' },
  ];

  return (
    <Theme theme="white">
      {isVisibleToast && (
        <div className="toast-container">
          <ToastNotification
            kind={kind}
            title={title}
            subtitle={message}
            onClose={hideToast}
            timeout={5000}
            lowContrast
          />
        </div>
      )}
    <div className='ivalavm-form-container'>
        <Form>
            <FormGroup legendText="i-Val® AVM" legendId="avm-legend" className="custom-legend">
                <div className="help-icon"><Help size="24"/> </div>
                <div className="form-grid">
                <TextInput id="address" labelText="Address" />
                <Dropdown
                    id="city"
                    titleText="City"
                    label="Select City"
                    items={cityItems}
                    itemToString={(item) => item?.text ?? ''}
                />
                <Dropdown
                    id="state"
                    titleText="State"
                    label="Select State"
                    items={stateItems}
                    itemToString={(item) => item?.text ?? ''}
                />
                <TextInput id="zip" labelText="ZIP" />
                <TextInput id="firstName" labelText="Owner Name (Last Nmae, First Name)" />
                <TextInput id="apn" labelText="APN" />
                <TextInput id="loan" labelText="Loan #" />
                <TextInput id="lastName" labelText="Reference #" />
                </div>

                <div className="form-actions">
                <Button className='btn-reset'>Reset</Button>
                <Button className='btn-submit'>Submit</Button>
                </div>
            </FormGroup>
        </Form>
        </div>

        <div>
            <IValReport />
        </div>
    </Theme>
  );
}
