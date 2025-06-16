'use client';

import { useState, useCallback } from 'react';

type ToastType = 'error' | 'success' | 'warning' | 'info';

export function useToast() {
  const [isVisibleToast, setIsVisibleToast] = useState(false);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const [kind, setKind] = useState<ToastType>('info');

  const showToast = useCallback((kind: ToastType, title: string, message: string) => {
    setKind(kind);
    setTitle(title);
    setMessage(message);
    setIsVisibleToast(true);
  }, []);

  const hideToast = useCallback(() => {
    setIsVisibleToast(false);
    setMessage('');
    setTitle('');
  }, []);

  return {
    isVisibleToast,
    message,
    title,
    kind,
    showToast,
    hideToast,
  };
}
