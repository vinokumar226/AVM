import { redirect } from 'next/navigation';
import { getTokenFromCookies, validateToken } from '@/lib/auth-server';
import LoginClient from '../components/Login/Client';
import './login.scss';

export default async function LoginPage() {
  const token = getTokenFromCookies();
  const isValid = token ? await validateToken(token) : false;

  if (isValid) {
    redirect('/dashboard');
  }

  // Render client login page if no valid token
  return <LoginClient />;
}
