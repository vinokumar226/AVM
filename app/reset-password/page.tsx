'use client';

import { Suspense } from 'react';
import ResetPasswordClient from '../components/Login/ResetPasswordClient';
import '../login/login.scss';

export default function ForgotPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordClient />
    </Suspense>
  );
}
