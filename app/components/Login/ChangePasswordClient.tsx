'use client';
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
import Logo from '../Common/Logo';

export default function ChangePasswordPage() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match.');
      return;
    }

    try {
      const res = await fetch('/api/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ oldPassword, newPassword }),
      });

      if (res.ok) {
        setSuccess(true);
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        const data = await res.json();
        setError(data.message || 'Failed to change password.');
      }
    } catch {
      setError('Network error. Please try again.');
    }
  };

  return (
    <Theme theme="white">
      <div className="login-page login-background-image">
        <div className="login-centered-container">
          <Stack gap={4}>
            <div className="logo-wrapper">
              <Logo />
            </div>
            <h2 className="login-title">Change Password</h2>

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
                subtitle="Your password has been changed successfully."
                timeout={5000}
                lowContrast
              />
            )}

            <Form onSubmit={handleSubmit}>
              <Stack gap={6}>
                <PasswordInput
                  id="old-password"
                  labelText="Current Password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                />

                <PasswordInput
                  id="new-password"
                  labelText="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />

                <PasswordInput
                  id="confirm-password"
                  labelText="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />

                <div className="login-button-wrapper">
                  <Button type="submit" className="login-button" size="md" renderIcon={ArrowRight}>
                    Change Password
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
