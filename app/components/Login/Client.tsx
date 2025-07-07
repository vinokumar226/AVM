"use client";
import { useState } from "react";
import {
  Theme,
  Button,
  Form,
  Stack,
  TextInput,
  PasswordInput,
  Link,
  ToastNotification
} from "@carbon/react";

import { ArrowRight } from '@carbon/icons-react';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/lib/auth-client';
import { useToast } from '@/lib/hooks/useToast';
import Image from 'next/image';

export default function LoginClient() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');  

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
    const token = await loginUser(username, password);

    if (token) {
      // Save token in cookie
      document.cookie = `app_token=${token}; path=/;`;

      router.push('/dashboard');
    } else {
      showToast('error', 'Login failed', 'Invalid username or password. Please try again.');
    }
  };  

  return (
    <Theme theme='white'>
    
    {/* <div className="bx--toast-notification__container"> */}
    {isVisibleToast && (
      <div
        style={{
          position: "fixed",
          top: "1rem",
          right: "1rem",
          zIndex: 10,
        }}
      >
      <ToastNotification
          kind={kind}
          title={title}
          subtitle={message}
          onClose={hideToast}
          onCloseButtonClick={hideToast}
          role="status"          
          timeout={5000}
          lowContrast
          className="mb-4"
        />
        </div>
        )
    }
    
    <div className="login-page login-background-image">
      <div className="login-centered-container">
        <Stack gap={4}>
          {/* Logo */}
          <div className="logo-wrapper">
            <Image
              src="/avm_logo.png"
              alt="Company Logo"              
              className="login-logo"
              width={260}
              height={60}
            />
          </div>

          {/* Title */}
          <h2 className="login-title">Log in</h2>

          {/* Form */}
          <Form aria-label="login form" onSubmit={handleSubmit}>
            <Stack gap={6}>
              <TextInput
                id="username"
                labelText="Username"
                placeholder="Username"
                type="text"
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="off"
              />
              <PasswordInput
                id="password"
                labelText="Password"
                placeholder="Password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="off"
              />

              {/* Forgot Password */}
              <div className="forgot-password">
                <Link href="#">Forgot Password?</Link>
              </div>

              {/* Login Button */}
              <div className="login-button-wrapper">
                <Button kind="ghost" className="login-button" type="submit" renderIcon={ArrowRight} iconDescription="Login">
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
    </Theme>
  );
}
