'use client';
import React from 'react';
import { Column, Tile, Button,Link } from '@carbon/react';
import { Document, Home } from '@carbon/icons-react';

const SummaryCards = () => (
  <>
    <Column sm={4} md={8} lg={16}>
      <h3 className="dashboard-title">AVM Dashboard</h3>
    </Column>

    <Tile id="tile-1">
      Default tile
      <br />
      <br />
      <Link href="https://www.carbondesignsystem.com">Link</Link>
    </Tile>

    <Tile id="tile-1">
      Default tile
      <br />
      <br />
      <Link href="https://www.carbondesignsystem.com">Link</Link>
    </Tile>
    <Tile id="tile-1">
      Default tile
      <br />
      <br />
      <Link href="https://www.carbondesignsystem.com">Link</Link>
    </Tile>
  </>
);

export default SummaryCards;
