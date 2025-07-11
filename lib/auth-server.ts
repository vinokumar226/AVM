// lib/auth-server.ts
import { cookies } from 'next/headers';

export async function getTokenFromCookies(): Promise<string | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('app_token')?.value;
  return token || null;
}

export async function validateToken(token: string): Promise<boolean> {
  if (process.env.NODE_ENV === 'development') {
    return token === 'dev-static-token';
  } else {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/validate-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return res.ok;
  }
}
