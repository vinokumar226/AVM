'use client';

import React from 'react';
import { FlexGrid, Row, Column } from '@carbon/react';
import MapContainer from './MapContainer';

const GOOGLE_API_KEY = 'AIzaSyAk5qxKi8pzdCZPJ0f3NvgVGzpRxQTqy5M'; // Use .env for security

const MapSection: React.FC = () => {
  return (
    <FlexGrid fullWidth className="map-section">
      {/* Roadmap with pins */}
      <Row className="map-row">
        <Column lg={16}>
          <h5 style={{ marginBottom: '0.5rem' }}>Comparable Map</h5>
          <MapContainer viewType="roadmap" apiKey={GOOGLE_API_KEY} width="100%" height="820px" />
        </Column>
      </Row>

      {/* Satellite + Street view */}
      <Row className="map-row" style={{ marginBottom: '0', padding: '0' }}>
        <Column lg={8} style={{ paddingRight: '0.5rem' }}>
          <h5 style={{ marginBottom: '0.5rem' }}>Satellite Plot</h5>
          <MapContainer viewType="satellite" apiKey={GOOGLE_API_KEY} width="100%" height="363px"  />
        </Column>
        <Column lg={8} style={{ paddingLeft: '0.5rem' }}>
          <h5 style={{ marginBottom: '0.5rem' }}>Street View</h5>
          <MapContainer viewType="streetview" apiKey={GOOGLE_API_KEY} width="100" height="363px"/>
        </Column>
      </Row>
    </FlexGrid>
  );
};

export default MapSection;
