'use client';

import React, { useState } from 'react';
import { LoadScript, GoogleMap, Marker, Polygon } from '@react-google-maps/api';
import { InfoWindow } from '@react-google-maps/api'; // Import at top

interface MapContainerProps {
  apiKey: string;
  viewType: 'roadmap' | 'satellite' | 'streetview';
  width: string;
  height: string;
}

// const center = { lat: 34.0522, lng: -118.2437 };

// const redComparables = [
//   { lat: 34.0524, lng: -118.2439 },
//   { lat: 34.0518, lng: -118.2435 },
//   { lat: 34.0521, lng: -118.2442 },
//   { lat: 34.0523, lng: -118.2446 },
//   { lat: 34.0528, lng: -118.2448 },
//   { lat: 34.0526, lng: -118.2436 },
//   { lat: 34.0527, lng: -118.2433 },
//   { lat: 34.0530, lng: -118.2445 },
//   { lat: 34.0532, lng: -118.2449 },
// ];





const center = { lat: 34.7986, lng: -86.6037 };

const redComparables = [
  { lat: 34.7696, lng: -86.6058 },
  { lat: 34.7831, lng: -86.6186 },
  { lat: 34.0521, lng: -86.5931 },
  { lat: 34.0523, lng: -86.5763 },
  { lat: 34.0528, lng: -86.6250 },
  { lat: 34.0526, lng: -86.5872 },
  { lat: 34.0527, lng: -86.5899 },
  { lat: 34.0530, lng: -86.5957 },
  { lat: 34.0532, lng: -86.6078 },
];


const MapContainer: React.FC<MapContainerProps> = ({ apiKey, viewType, width, height }) => {
  const [mapsLoaded, setMapsLoaded] = useState(false);

  const [hoveredMarker, setHoveredMarker] = useState<google.maps.LatLngLiteral | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerStyle = {
    width,
    height,
  };

  const mapTypeId: 'roadmap' | 'satellite' = viewType === 'streetview' ? 'roadmap' : viewType;

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
        mapTypeId={mapTypeId}
        onLoad={(map) => {
          map.setMapTypeId(mapTypeId);
          setMapsLoaded(true);
        }}
        options={{
          styles: mapStyles,
          gestureHandling: 'greedy',
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          zoomControl: false,
        }}
      >
        {mapsLoaded && (
            <>
                {/* Subject Marker */}
                {(viewType === 'roadmap' || viewType === 'streetview') && (
                    <Marker
                        position={center}
                        icon={{
                        url:
                            viewType === 'roadmap'
                            ? 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
                            : 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                        scaledSize:
                            viewType === 'roadmap'
                            ? new window.google.maps.Size(56, 56)
                            : new window.google.maps.Size(40, 40),
                        }}
                        onMouseOver={() => {
                        setHoveredMarker(center);
                        setHoveredIndex(null);
                        }}
                        onMouseOut={() => {
                        setHoveredMarker(null);
                        }}
                        >
                        {hoveredMarker && (
                        <InfoWindow
                            position={center}
                            options={{ pixelOffset: new window.google.maps.Size(0, -40) }}
                        >
                            <div>
                            <strong>Subject Property</strong>
                            <br />
                            Lat: {center.lat.toFixed(4)}
                            <br />
                            Lng: {center.lng.toFixed(4)}
                            </div>
                        </InfoWindow>
                        )}
                    </Marker>
                )}


                {/* Comparable Markers for Roadmap Only */}
                {viewType === 'roadmap' &&
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
                        onMouseOver={() => setHoveredIndex(index)}
                        onMouseOut={() => setHoveredIndex(null)}
                        >
                        {hoveredIndex === index && (
                            <InfoWindow
                            position={pos}
                            options={{ pixelOffset: new window.google.maps.Size(0, -40) }}
                            >
                            <div>
                                <strong>Comparable {index + 1}</strong>
                                <br />
                                Lat: {pos.lat.toFixed(4)}
                                <br />
                                Lng: {pos.lng.toFixed(4)}
                            </div>
                            </InfoWindow>
                        )}
                        </Marker>
                ))}

               


                {/* Satellite Polygon (unchanged) */}
                {viewType === 'satellite' && (
                <Polygon
                    paths={(() => {
                    const originalPolygon = [
                        { lat: 34.0520, lng: -118.2440 },
                        { lat: 34.0520, lng: -118.2434 },
                        { lat: 34.0526, lng: -118.2432 },
                        { lat: 34.0526, lng: -118.2438 },
                    ];

                    const centroid = originalPolygon.reduce(
                        (acc, point) => ({
                        lat: acc.lat + point.lat / originalPolygon.length,
                        lng: acc.lng + point.lng / originalPolygon.length,
                        }),
                        { lat: 0, lng: 0 }
                    );

                    const latShift = center.lat - centroid.lat;
                    const lngShift = center.lng - centroid.lng;

                    return originalPolygon.map((point) => ({
                        lat: point.lat + latShift,
                        lng: point.lng + lngShift,
                    }));
                    })()}
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
