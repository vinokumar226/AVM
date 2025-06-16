"use client";
import React from 'react';
import { Grid, Column, Tile, Button  } from '@carbon/react';
import { Calendar, Document, Home, Upgrade } from '@carbon/icons-react';


const SummaryCards = () => {
  return (
    <Grid fullWidth className="dashboard-summary">
      <Column lg={16} md={8} sm={4} className="summary-row">
        <Tile className="summary-tile">
          <div className="tile-icon calendar"><Calendar size={20} /></div>
          <div className="tile-label">Plan: <strong>Corporate</strong></div>
          <div className="tile-main-row">
          <div className="tile-value">June 30, 2025</div>
            <Button className="custom-upgrade-button" kind="ghost" size="sm">
                Upgrade
                <Upgrade className="button-icon" />
            </Button>
          </div>
          
          <div className="tile-subtext">Expiry Date</div>
          
        </Tile>

        <Tile className="summary-tile">
          <div className="tile-icon document"><Document size={20} /></div>
          <div className="tile-label">Reports Generated</div>

          <div className="tile-value-blocks">
            <div className="value-column">
              <div className="tile-value">300 <span className="muted">/400</span></div>
              <div className="tile-subtext">Search</div>
            </div>

            <div className="vertical-divider"></div>

            <div className="value-column">
              <div className="tile-value">700 <span className="muted">/1000</span></div>
              <div className="tile-subtext">Batch</div>
            </div>
          </div>
        </Tile>

        <Tile className="summary-tile">
          <div className="tile-icon home"><Home size={20} /></div>
          <div className="tile-label">Public Records</div>
          <div className="tile-main-row">
            <div className="tile-value">120.5 M</div>
             {/* <div className="tile-subtext">Properties</div> */}
            <div className="region-row">
              <div className="region-item">
                <div className="region-value"><strong>1.5 M</strong></div>
                <div className="region-label">Texas</div>
              </div>
              <div className="region-item">
                <div className="region-value"><strong>2.5 M</strong></div>
                <div className="region-label">Florida</div>
              </div>
              <div className="region-item">
                <div className="region-value"><strong>7.5 M</strong></div>
                <div className="region-label">NJ</div>
              </div>
            </div>
            
        </div>
        
        </Tile>
      </Column>
    </Grid>
  );
};

export default SummaryCards;
