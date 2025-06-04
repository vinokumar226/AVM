'use client';

import dynamic from 'next/dynamic';

// ✅ dynamic import WITH ssr: false is valid HERE (in client component)
const MapView = dynamic(() => import('./MapView'), {
  ssr: false,
});

export default function ClientMapWrapper() {
  return <MapView />;
}
