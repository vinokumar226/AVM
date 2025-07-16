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
} from "@carbon/react";
//import "./YourFormStyles.scss"; // Update this to your actual SCSS file name

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
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Submit logic here (e.g., API call)
  };

  return (
    <Theme theme="white">
      <div className="ivalavm-form-container">
        <Form onSubmit={handleSubmit}>
          <FlexGrid fullWidth>
            <Row className="form-row">
              <Column lg={8} md={8} sm={16}>
                <TextInput
                  id="address"
                  labelText="Address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </Column>
              <Column lg={4} md={4} sm={16}>
                <TextInput
                  id="zip"
                  labelText="ZIP"
                  value={formData.zip}
                  onChange={handleChange}
                />
              </Column>
              <Column lg={4} md={4} sm={16}>
                <TextInput
                  id="unit"
                  labelText="Unit"
                  value={formData.unit}
                  onChange={handleChange}
                />
              </Column>
            </Row>
            <Row form-row>
              <Column lg={4} md={4} sm={16}>
                <TextInput
                  id="owner"
                  labelText="Owner Name"
                  value={formData.owner}
                  onChange={handleChange}
                />
              </Column>
              <Column lg={4} md={4} sm={16}>
                <TextInput
                  id="apn"
                  labelText="APN"
                  value={formData.apn}
                  onChange={handleChange}
                />
              </Column>
              <Column lg={4} md={4} sm={16}>
                <TextInput
                  id="loan"
                  labelText="Loan #"
                  value={formData.loan}
                  onChange={handleChange}
                />
              </Column>
              <Column lg={4} md={4} sm={16}>
                <TextInput
                  id="reference"
                  labelText="Reference #"
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
            >
              Reset
            </Button>
            <Button kind="primary" type="submit" className="btn-submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </Theme>
  );
};

export default AddressSearchForm;
