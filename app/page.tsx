import { redirect } from 'next/navigation';
import { getTokenFromCookies, validateToken } from '@/lib/auth-server';

export default async function Home() {
  const token = getTokenFromCookies();
  const isValid = token ? await validateToken(token) : false;

  if (isValid) {
    redirect('/dashboard');
  } else {
    redirect('/login');
  }
}
