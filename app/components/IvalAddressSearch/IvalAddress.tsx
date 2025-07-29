'use client';

import React, { useState } from "react";
import {
  FlexGrid,
  Row,
  Column,
  TextInput,
  Button,
  Theme,
  Form,
  FormGroup,
  Tooltip
} from "@carbon/react";
import { Help } from '@carbon/icons-react';
import IValReport from './IvalReport';

const AddressSearchForm = () => {
  const [formData, setFormData] = useState({
    address: "",
    zip: "",
    unit: "",
    owner: "",
    apn: "",
    loan: "",
    reference: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleReset = () => {
    setFormData({
      address: "",
      zip: "",
      unit: "",
      owner: "",
      apn: "",
      loan: "",
      reference: "",
    });
    setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Submit logic here (e.g., API call)
    setIsSubmitted(true);
  };

  const isSubmitDisabled = formData.address.trim() === "";

  return (
    <Theme theme="white">
      <div className="ivalavm-form-container">
        <Form className="form-legend" onSubmit={handleSubmit}>
          <FormGroup legendText="i-Val® AVM" legendId="avm-legend" className="custom-legend">
            <div className="help-icon"><Tooltip label="Help" align="left"><Help size="24"/></Tooltip> </div>
          <FlexGrid fullWidth className="custom-grid">
            <Row className="form-row">
              <Column lg={8} md={8} sm={16}>
                <TextInput
                  id="address"
                  labelText="Address *"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </Column>
              <Column lg={4} md={4} sm={16}>
                <TextInput
                  id="unit"
                  labelText="Unit"
                  placeholder="Unit"
                  value={formData.unit}
                  onChange={handleChange}
                />
              </Column>
              <Column lg={4} md={4} sm={16}>
                <TextInput
                  id="zip"
                  labelText="ZIP"
                  placeholder="Zip"
                  value={formData.zip}
                  onChange={handleChange}
                />
              </Column>
            </Row>
            <Row className="form-row">
              <Column lg={4} md={4} sm={16}>
                <TextInput
                  id="owner"
                  labelText="Owner Name"
                  placeholder="Owner Name"
                  value={formData.owner}
                  onChange={handleChange}
                />
              </Column>
              <Column lg={4} md={4} sm={16}>
                <TextInput
                  id="apn"
                  labelText="APN"
                  placeholder="APN"
                  value={formData.apn}
                  onChange={handleChange}
                />
              </Column>
              <Column lg={4} md={4} sm={16}>
                <TextInput
                  id="loan"
                  labelText="Loan #"
                  placeholder="Loan"
                  value={formData.loan}
                  onChange={handleChange}
                />
              </Column>
              <Column lg={4} md={4} sm={16}>
                <TextInput
                  id="reference"
                  labelText="Reference #"
                  placeholder="Reference"
                  value={formData.reference}
                  onChange={handleChange}
                />
              </Column>
            </Row>
          </FlexGrid>

          <div className="form-actions">
            <Button
              kind="secondary"
              type="button"
              className="btn-reset"
              onClick={handleReset}
              size="md"
            >
              Reset
            </Button>
            <Button kind="primary" size="md" type="submit" className="btn-submit" disabled={isSubmitDisabled}>
              Submit
            </Button>
          </div>
          </FormGroup>
        </Form>
      </div>

      {isSubmitted && (
        <div>
          <IValReport />
        </div>
      )}
    </Theme>
  );
};

export default AddressSearchForm;
