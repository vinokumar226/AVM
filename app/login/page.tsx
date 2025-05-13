"use client";
import React from "react";
import {
  Button,
  Form,
  Stack,
  TextInput,
  PasswordInput,
} from "@carbon/react";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f4f4f4",
        padding: "1rem",
      }}
    >
      <div style={{ width: 400, background: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        <Stack gap={4}>
          {/* Logo */}
          <div style={{ textAlign: "center" }}>
            <img
              src="/loan_dna.png"
              alt="Company Logo"
              style={{ maxWidth: 180, height: "auto", marginBottom: "1rem" }}
            />
          </div>

          {/* Title */}
          <h2
            style={{
              textAlign: "center",
              color: "#1fa4dd",
              margin: 0,
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            Global Login
          </h2>

          {/* Subtitle */}
          <p style={{ textAlign: "center", fontSize: "0.9rem", color: "#525252", margin: 0 }}>
            Please enter your email and password below to login
          </p>

          {/* Form */}
          <Form aria-label="login form">
            <Stack gap={6}>
              <TextInput
                id="email"
                labelText="Email"
                placeholder="Email address"
                type="text"
                onChange={() => {}}
              />
              <PasswordInput
                id="password"
                labelText="Password"
                placeholder="Password"
                onChange={() => {}}
              />
              <Button type="submit">Submit</Button>
            </Stack>
          </Form>
        </Stack>
      </div>
    </div>
  );
}
