
'use client';

import React from 'react';
import { LoadScript } from '@react-google-maps/api';
import MapContainer from './MapContainer';

const GOOGLE_API_KEY = 'AIzaSyAk5qxKi8pzdCZPJ0f3NvgVGzpRxQTqy5M';

const libraries: ('marker' | 'maps')[] = ['marker', 'maps'];

const MapSection: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey={GOOGLE_API_KEY} libraries={libraries}>
      <MapContainer />
    </LoadScript>
  );
};

export default MapSection;
