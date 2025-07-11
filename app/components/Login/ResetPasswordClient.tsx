'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  Theme,
  Form,
  Stack,
  PasswordInput,
  Button,
  ToastNotification,
} from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      setError('Invalid or missing token.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const res = await fetch('/api/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, newPassword }),
      });

      if (res.ok) {
        setSuccess(true);
        setTimeout(() => {
          router.push('/login');
        }, 3000);
      } else {
        const data = await res.json();
        setError(data.message || 'Something went wrong.');
      }
    } catch (err) {
      setError('Network error.');
    }
  };

  return (
    <Theme theme="white">
      <div className="login-page login-background-image">
        <div className="login-centered-container">
          <Stack gap={4}>
            <div className="logo-wrapper">
              <img src="/avm_logo.png" alt="Company Logo" className="login-logo" />
            </div>
            <h2 className="login-title">Reset Password</h2>

            {error && (
              <ToastNotification
                kind="error"
                title="Error"
                subtitle={error}
                onClose={() => setError('')}
                timeout={5000}
                lowContrast
              />
            )}

            {success && (
              <ToastNotification
                kind="success"
                title="Success"
                subtitle="Your password has been reset. Redirecting to login..."
                timeout={5000}
                lowContrast
              />
            )}

            <Form onSubmit={handleSubmit}>
              <Stack gap={6}>
                <PasswordInput
                  id="new-password"
                  labelText="New Password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />

                <PasswordInput
                  id="confirm-password"
                  labelText="Confirm Password"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />

                <div className="login-button-wrapper">
                  <Button className="login-button" type="submit" size="md" renderIcon={ArrowRight}>
                    Reset Password
                  </Button>
                </div>
              </Stack>
            </Form>
          </Stack>
        </div>
      </div>
    </Theme>
  );
}
