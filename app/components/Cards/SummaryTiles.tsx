"use client";
import React from 'react';
import { Grid, Column, Tile, Button  } from '@carbon/react';
import { Upgrade, EventSchedule, DocumentTasks,Certificate,Notebook } from '@carbon/icons-react';


const SummaryCards = () => {
  return (
    <Grid fullWidth className="dashboard-summary">
      <Column lg={16} md={8} sm={4} className="summary-row">
        <Tile className="summary-tile">
          <div className="tile-icon calendar"><EventSchedule size={20} /></div>
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
          <div className="tile-icon document"><DocumentTasks size={20} /></div>
          <div className="tile-label">Reports Generated</div>

          <div className="tile-value-blocks">
            <div className="value-column">
              <div className="tile-value">300 </div>
              <div className="tile-subtext">Search</div>
            </div>

            <div className="vertical-divider"></div>

            <div className="value-column">
              <div className="tile-value">700</div>
              <div className="tile-subtext">Batch</div>
            </div>
          </div>
        </Tile>

        {/* <Tile className="summary-tile">
          <div className="tile-icon notebook"><Notebook size={20} /></div>
          <div className="tile-label">MLS</div>
          <div className="value-column">
            <div className="tile-value">120.5 M</div>
            <div className="tile-subtext">Properties</div>
        </div>
        </Tile> */}

        <Tile className="summary-tile">
          <div className="tile-icon home"><Certificate size={20} /></div>
          <div className="tile-label">Public Records</div>
          <div className="value-column">
            <div className="tile-value">120.5 M</div>
            <div className="tile-subtext">Properties</div>
        </div>
        </Tile>
      </Column>
    </Grid>
  );
};

export default SummaryCards;
