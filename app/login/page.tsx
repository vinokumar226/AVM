"use client";
import React from "react";
import {
  Button,
  Form,
  Stack,
  TextInput,
  PasswordInput,
  Link
} from "@carbon/react";

import { ArrowRight } from '@carbon/icons-react';

export default function App() {
  return (
    <div className="login-background-image">
      <div className="login-centered-container">
        <Stack gap={4}>
          {/* Logo */}
          <div className="logo-wrapper">
            <img
              src="/loan_dna.png"
              alt="Company Logo"
              className="login-logo"
            />
          </div>

          {/* Title */}
          <h2 className="login-title">Log in</h2>

          {/* Form */}
          <Form aria-label="login form">
            <Stack gap={6}>
              <TextInput
                id="email"
                labelText="Username"
                placeholder="Username"
                type="text"
              />
              <PasswordInput
                id="password"
                labelText="Password"
                placeholder="Password"
              />

              {/* Forgot Password */}
              <div className="forgot-password">
                <Link href="#">Forgot Password?</Link>
              </div>

              {/* Login Button */}
              <div className="login-button-wrapper">
                <Button className="login-button" type="submit" renderIcon={ArrowRight} iconDescription="Login">
                  Login
                </Button>
              </div>

              {/* Sign Up */}
              <div className="signup-text">
                Don’t have an account? <Link href="#">Sign Up</Link>
              </div>
            </Stack>
          </Form>
        </Stack>
      </div>
    </div>
  );
}
