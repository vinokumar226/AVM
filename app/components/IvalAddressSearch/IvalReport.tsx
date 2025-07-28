'use client';
import React from 'react';
import { ReactNode } from "react";

import {
  Grid,
  Column,
  Heading,
  IconButton,
  Tile,FlexGrid,Row,Table,TableHead,TableRow,TableHeader,TableBody,TableCell
} from '@carbon/react';
import {
  GeneratePdf,
  Json,
  DocumentDownload,
  Home,
  UserProfileAlt,
  RulerAlt,
  Crop,
  Calendar,
  BuildingInsights_1,
} from '@carbon/icons-react';

import '../../ival-avm/ival-avm.scss';
import  AverageSalePrice from '../Charts/distribution-charts/Average-Sale-Price/average-sale-price';
import SquareFootage from '../Charts/distribution-charts/Square-Footage-Distribution/square-footage-distribution';
import SalePrice from '../Charts/distribution-charts/SalePriceDistribution/SalePriceDistribution';
import AverageMedianSalePrice from '../Charts/ReportCharts/AverageMedianSalePrice/AverageMedianSaleprice';
import AverageMedianPriceSqrFeet from '../Charts/ReportCharts/AverageMedianPriceSqrFeet/AverageMedianPriceSqrFeet';
import HistoricalSales from '../Charts/ReportCharts/HistoricalSalesForNeighborhood/HistoricalSalesForNeighborhood';
import ComparableSalesTable from '../Reports/ComparableSales';
import AssessorHistoricalTable from '../Reports/AssessorHistoricalTable';
import MapSection from '../map/MapSection'
import TileGrid from './TileGrid';

interface TileComponentProps {
  icon: ReactNode;
  label: string;
  value: string;
}

export default function IValReport() {
  const formatUSD = (val: number) => val.toLocaleString('en-US');

  const data = {
    estimate: {
      mid: 1450000,
      high: 1520000,
      low: 1380000,
    },
    scoring: {
      confidence: 92,
      fsd: '7.4%',
    },
  };

  // TileComponent.tsx
  const TileComponent: React.FC<TileComponentProps> = ({ icon, label, value }) => (
  <div className="custom-tile_property">
    <div className="tile-icon-section">
      {icon}
    </div>
    <div className="tile-text-section">
      <p className="tile-label">{label}</p>
      <strong className="tile-value">{value}</strong>
    </div>
  </div>
);

  return (
    <FlexGrid fullWidth className="ival-report">
      {/* Header */}
      <Row>
        <Column lg={16} sm={16} md={8}>
          <div className="ival-header-wrapper">
            <div className="ival-header-center">
              <Heading style={{ fontWeight: '400' }} className="main-title">
                i-Val® AVM Report
              </Heading>
              <Heading className="sub-title">Automated Valuation Model (AVM)</Heading>
            </div>
            <div className="ival-download-button">
              <IconButton className="custom-download-btn" size="lg" label="Download PDF" kind="ghost" align="bottom">
                <GeneratePdf />
              </IconButton>
              <IconButton className="custom-download-btn" size="lg" label="Download Excel" kind="ghost" align="bottom">
                <DocumentDownload />
              </IconButton>
              <IconButton className="custom-download-btn" size="lg" label="Download UAD XML" kind="ghost" align="bottom">
                <DocumentDownload />
              </IconButton>
              <IconButton className="custom-download-btn" size="lg" label="Download JSON" kind="ghost" align="bottom">
                <Json />
              </IconButton>
            </div>
          </div>
        </Column>
      </Row>

      {/* Estimated Values and Scoring */}
      <FlexGrid fullWidth className='custom-grid'>
        <Row>
          <Column lg={11} md={8} sm={16}>
            <div className="section-heading">Estimated Values</div>
            <Tile className="custom-tile">
              <div className="value-row">
                <div className="value-block">
                  <p>Estimated Price Point</p>
                  <Heading className="highlight-value">${formatUSD(data.estimate.mid)}</Heading>
                </div>
                <div className="divider" />
                <div className="value-block">
                  <p style={{ color: '#da1e28' }}>High Range</p>
                  <Heading className="highlight-value">${formatUSD(data.estimate.high)}</Heading>
                </div>
                <div className="value-block">
                  <p style={{ color: '#198038' }}>Low Range</p>
                  <Heading className="highlight-value">${formatUSD(data.estimate.low)}</Heading>
                </div>
              </div>
            </Tile>
          </Column>


          <Column lg={5} md={8} sm={16}>
            <div className="section-heading">Scoring</div>
            <Tile className="custom-tile">
              <div className="value-row">
                <div className="value-block">
                  <p>Confidence Score</p>
                  <Heading className="highlight-value">{data.scoring.confidence} <span>/ 100</span></Heading>
                </div>
                <div className="divider" />
                <div className="value-block">
                  <p>FSD</p>
                  <Heading className="highlight-value">{data.scoring.fsd}</Heading>
                </div>
              </div>
            </Tile>
          </Column>
        </Row>
      </FlexGrid>


      {/* Property Details */}
        <div className="section-heading">Property Details</div>
            <FlexGrid fullWidth className="property-details-grid custom-grid">
              <div className="property-content-row">
                {/* Left Image */}
                <div className="property-image-column">
                  <img
                    className="property-image"
                    src="/house.jpg"
                    alt="Property"
                  />
                </div>

                {/* Right Tile Section */}
                <div className="property-details-column">
                  <div className="property-meta">
                    <p><span>Address:</span> <strong>1245 Elmwood Ave</strong></p>
                    <p><span>City/State:</span> <strong>Los Angeles, CA</strong></p>
                    <p><span>ZIP Code:</span> <strong>90024</strong></p>
                    <p><span>Neighborhood:</span> <strong>Westwood Village</strong></p>
                  </div>

                  <Heading className="characteristics-title">Property Characteristics</Heading>

                  <div className="tile-grid">
                    <TileComponent icon={<Home />} label="Bedroom" value="4 Beds" />
                    <TileComponent icon={<UserProfileAlt />} label="Bathroom" value="3 Baths" />
                    <TileComponent icon={<RulerAlt />} label="Sq Footage" value="2,450 sq ft" />
                    <TileComponent icon={<Crop />} label="Lot Size" value="6,550 sq ft" />
                    <TileComponent icon={<Calendar />} label="Year Built" value="2015" />
                    <TileComponent icon={<BuildingInsights_1 />} label="Property Type" value="Single Family Home" />
                    <TileComponent icon={<Crop />} label="Flood Determination" value="Yes" />
                    <TileComponent icon={<Calendar />} label="Actively Listed" value="No" />
                    {/* <TileComponent icon={<BuildingInsights_1 />} label="Distressed Indicator" value="Yes" /> */}
                  </div>
                </div>
              </div>
            </FlexGrid>

      {/* </Column> */}

      {/* Assessor & Historical */}
      <Column lg={16} sm={4} md={8}>
        <AssessorHistoricalTable />
      </Column>

      {/* Map Identifying  */}
      <Column lg={16} sm={4} md={8} className='nopadding'>
        <div className="section-heading">Map Identifying</div>
        <MapSection />
      </Column>

      {/* Comparable Tables */}
      <Column lg={16} sm={4} md={8} className='nopadding'>
        <div className="section-heading">Comparable Sales</div>
        <ComparableSalesTable />
      </Column>

      {/* Charts */}
       <Column lg={16} sm={4} md={8} className='nopadding'>
        <div className="section-heading">Charts</div>
          <FlexGrid fullWidth className='custom-grid'>
            <Row>
              <Column sm={4} md={8} lg={16}>
              <AverageMedianSalePrice />
              </Column>
            </Row>
            <Row>
              <Column sm={4} md={8} lg={16}>
              <AverageMedianPriceSqrFeet />
              </Column>
            </Row>
            <Row>
              <Column sm={4} md={8} lg={16}>
              <HistoricalSales />
              </Column>
            </Row>
          </FlexGrid>

      </Column>

      <Column lg={16} sm={4} md={8} className='nopadding'>
        <div className="section-heading">Distribution Charts</div>
        <FlexGrid fullWidth className='custom-grid'>
          <Column lg={16} md={8} sm={16} className='nopadding'>
            <AverageSalePrice />
          </Column>
        </FlexGrid>

         <FlexGrid fullWidth className='custom-grid'>
          <Row>
            <Column lg={8} md={8} sm={4}>
              <div>
                <SalePrice />
              </div>
            </Column>
            <Column lg={8} md={8} sm={4}>
                <SquareFootage />
            </Column>
            </Row>
          </FlexGrid>
      </Column>

      {/* Disclaimer */}
      <FlexGrid fullWidth className='custom-grid'>
        <Column lg={16} className='nopadding'>
        <div className="disclaimer-tile">
          <p>
            <strong>Disclaimer:</strong> This estimate of market value is computer generated by the application of various mathematical formulas and techniques proprietary to LoanDNA to available public record, local market and proprietary data. This report has not been prepared by a licensed appraiser nor does it constitute an appraisal of the subject property and should not be relied upon as such. The data used to generate this report does not include information that could be derived from an inspection of the subject property and its surroundings. The condition of the property could greatly affect the accuracy of the estimate of value. The data and the information derived from the data in this report is provided as available and “AS IS” and is intended for internal asset valuation use only. All uses are at the user’s sole risk. LoanDNA is not liable for the accuracy of the data or information provided in this report. The accuracy of the data and methodologies used are deemed reliable but are not warranted or guaranteed. The charts and graphs contained herein are computer generated by the application of various mathematical formulas and techniques proprietary to LoanDNA to available public record, local market and proprietary data compiled by LoanDNA. Such data is deemed reliable but may not be complete or accurate in all cases and is not guaranteed. LoanDNA is not liable for the accuracy of the information provided. The information displayed in these graphics is provided “AS IS” and is intended for internal asset valuation use only. All uses are at the user’s sole risk.
          </p>
        </div>
        </Column>
        </FlexGrid>
    </FlexGrid>
  );
}
