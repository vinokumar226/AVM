'use client';

import React, { useState } from 'react';
import { LoadScript, GoogleMap, Marker, Polygon } from '@react-google-maps/api';
import { LocationFilled } from '@carbon/icons-react';
import ReactDOMServer from 'react-dom/server';

interface MapContainerProps {
  apiKey: string;
  viewType: 'roadmap' | 'satellite' | 'streetview';
  width: string;
  height: string;
}

const center = { lat: 34.0522, lng: -118.2437 };

const redComparables = [
  { lat: 34.0524, lng: -118.2439 },
  { lat: 34.0518, lng: -118.2435 },
  { lat: 34.0521, lng: -118.2442 },
  { lat: 34.0523, lng: -118.2446 },
  { lat: 34.0528, lng: -118.2448 },
  { lat: 34.0526, lng: -118.2436 },
  { lat: 34.0527, lng: -118.2433 },
  { lat: 34.0530, lng: -118.2445 },
  { lat: 34.0532, lng: -118.2449 },
];

const MapContainer: React.FC<MapContainerProps> = ({ apiKey, viewType, width, height }) => {
  const [mapsLoaded, setMapsLoaded] = useState(false);

  const containerStyle = {
    width,
    height,
  };

  // Normalize mapTypeId
  const mapTypeId: 'roadmap' | 'satellite' = viewType === 'streetview' ? 'roadmap' : viewType;

  //Carbon pinned icon
  const carbonIconSVG = encodeURIComponent(
    ReactDOMServer.renderToStaticMarkup(<LocationFilled size={32} fill="#0f62fe" />)
    );

    const carbonIconURL = `data:image/svg+xml,${carbonIconSVG}`;


  // Only apply map styles to 'roadmap' or 'streetview', not 'satellite'
  const mapStyles =
    viewType === 'roadmap'
      ? [
          {
            featureType: 'all',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }],
          },
          {
            featureType: 'poi',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'transit',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'administrative',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'water',
            stylers: [{ visibility: 'off' }],
          },
        ]
      : undefined;

  return (
    <LoadScript googleMapsApiKey={apiKey} libraries={['marker']}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={19}
        mapTypeId={mapTypeId} // 🚀 ensures correct satellite mode
        onLoad={() => setMapsLoaded(true)}
        options={{
          styles: mapStyles,
            // Hides the "Ctrl + scroll to zoom" hint
            gestureHandling: 'greedy',

            // Hides map controls like Map/Satellite
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            // Optional: hide zoom controls too
            zoomControl: false,
        }}
      >
        {mapsLoaded && (
          <>
            {/* Subject Property Marker */}
            <Marker
              position={center}
              label={{ text: 'S', color: 'white', fontSize: '14px' }}
              icon={{
                url: carbonIconURL,
                scaledSize: new window.google.maps.Size(48, 48),
              }}
            />

            {/* Comparable Markers for roadmap/streetview */}
            {(viewType === 'roadmap' || viewType === 'streetview') &&
              redComparables.map((pos, index) => (
                <Marker
                  key={index}
                  position={pos}
                  label={{
                    text: `${index + 1}`,
                    color: 'white',
                    fontSize: '14px',
                  }}
                  icon={{
                    url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                    scaledSize: new window.google.maps.Size(48, 48),
                  }}
                />
              ))}

            {/* Yellow polygon for satellite only */}
            {viewType === 'satellite' && (
              <Polygon
                paths={[
                  { lat: 34.0520, lng: -118.2440 },
                  { lat: 34.0520, lng: -118.2434 },
                  { lat: 34.0526, lng: -118.2432 },
                  { lat: 34.0526, lng: -118.2438 },
                ]}
                options={{
                  fillColor: '#FFED25',
                  fillOpacity: 0,
                  strokeColor: '#FFED25',
                  strokeOpacity: 1,
                  strokeWeight: 6,
                }}
              />
            )}
          </>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
