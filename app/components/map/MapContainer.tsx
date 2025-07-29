'use client';

import React from 'react';
import { FlexGrid, Row, Column } from '@carbon/react';
import RoadMapView from './RoadMapView';
import SatelliteMapView from './SatelliteMapView';
import StreetViewMap from './StreetViewMap';

const MapContainer: React.FC = () => {
  return (
    <FlexGrid fullWidth className="map-section custom-grid">
      <Row className="map-row">
        <Column lg={16}>
          <RoadMapView />
        </Column>
      </Row>

      <Row className="map-row" style={{ marginBottom: '0', padding: '0' }}>
        <Column lg={8} style={{ paddingRight: '0.5rem' }}>
          <SatelliteMapView />
        </Column>
        <Column lg={8} style={{ paddingLeft: '0.5rem' }}>
          <StreetViewMap />
        </Column>
      </Row>
    </FlexGrid>
  );
};

export default MapContainer;
