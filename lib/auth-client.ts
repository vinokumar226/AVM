"use client";

export async function loginUser(username: string, password: string): Promise<string | null> {
  if (process.env.NODE_ENV === 'development') {
    if (username === 'admin' && password === 'admin') {
      return 'dev-static-token';
    }
    return null;
  } else {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        return null;
      }

      const data = await res.json();
      return data.access_token;
    } catch (error) {
      console.error('Login failed:', error);
      return null;
    }
  }
}
