"use client";
import { useState } from "react";
import {
  Theme,
  Button,
  Form,
  Stack,
  TextInput,
  Link,
  ToastNotification
} from "@carbon/react";

import { ArrowRight } from '@carbon/icons-react';
import { useToast } from '@/lib/hooks/useToast';
// import { useRouter } from 'next/navigation';
import Logo from '../Common/Logo';

export default function ForgotPasswordClient() {
  // const router = useRouter();
  const [email, setEmail] = useState('');

  const {
    isVisibleToast,
    message,
    title,
    kind,
    showToast,
    hideToast,
  } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate forgot password logic
    console.log("Password reset requested for:", email);

    showToast('success', 'Email Sent', 'Check your inbox to reset your password.');
  };

  return (
    <Theme theme="white">
      {isVisibleToast && (
        <ToastNotification
          kind={kind}
          title={title}
          subtitle={message}
          onClose={hideToast}
          timeout={5000}
          lowContrast
          style={{
            position: "fixed",
            top: "1rem",
            right: "1rem",
            zIndex: 10,
          }}
        />
      )}

      <div className="login-page login-background-image">
        <div className="login-centered-container">
          <Stack gap={4}>
            <div className="logo-wrapper">
              <Logo />
            </div>

            <h2 className="login-title">Forgot Password</h2>

            <Form aria-label="forgot password form" onSubmit={handleSubmit}>
              <Stack gap={6}>
                <TextInput
                  id="email"
                  labelText="Email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <div className="login-button-wrapper">
                  <Button type="submit" size="md" className="login-button" renderIcon={ArrowRight}>
                    Reset Password
                  </Button>
                </div>

                <div className="signup-text">
                  Remembered your password? <Link href="/login">Log in</Link>
                </div>
              </Stack>
            </Form>
          </Stack>
        </div>
      </div>
    </Theme>
  );
}
