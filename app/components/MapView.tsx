'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import type { LatLngExpression } from 'leaflet';

export default function MapView() {
  const position: LatLngExpression = [40.7128, -74.006];

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>New York City Property</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
