'use client';
import React from 'react';
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
// import Legend from '../Charts/distribution-charts/SalePriceDistribution/Legend';
import AverageMedianSalePrice from '../Charts/ReportCharts/AverageMedianSalePrice/AverageMedianSaleprice';
import AverageMedianPriceSqrFeet from '../Charts/ReportCharts/AverageMedianPriceSqrFeet/AverageMedianPriceSqrFeet';
import HistoricalSales from '../Charts/ReportCharts/HistoricalSalesForNeighborhood/HistoricalSalesForNeighborhood';
import ComparableSalesTable from '../Reports/ComparableSales';
import TwoTablesRow from '../Reports/AssessorHistoricalTable';
import MapSection from '../map/MapSection';


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

  return (
    <Grid fullWidth className="ival-report">
      {/* Header */}
      <Column lg={16}>
      <div className="ival-header-wrapper">
        <div className="ival-header-center">
          <Heading style={{ fontWeight: '400' }} className="main-title">i‑Val® Report</Heading>
          <Heading className="sub-title">
            Automated Valuation Model (AVM)
          </Heading>
        </div>
        <div className="ival-download-button">
          <IconButton  className="custom-download-btn" size="lg" label="Download PDF" kind="ghost">
            <GeneratePdf />
          </IconButton>
          <IconButton  className="custom-download-btn" size="lg" label="Download Excel" kind="ghost">
            <DocumentDownload />
          </IconButton>
          <IconButton  className="custom-download-btn" size="lg" label="Download UAD XML" kind="ghost">
            <DocumentDownload />
          </IconButton>
          <IconButton  className="custom-download-btn" size="lg" label="Download JSON" kind="ghost">
            <Json />
          </IconButton>
        </div>
        </div>
      </Column>

      {/* Estimated Values and Scoring in 1 Row */}
      {/* <Column lg={16}>
        <Grid condensed>
          <Column lg={8}>
            <div className="section-heading">Estimated Values</div>
            <Tile>
              <div className="value-row">
                <div className="value-block">
                  <p>Estimated Price Point</p>
                  <Heading>$ {formatUSD(data.estimate.mid)}</Heading>
                </div>
                <div className="divider" />
                <div className="value-block">
                  <p style={{ color: '#da1e28' }}>High Range</p>
                  <Heading style={{ color: '#da1e28' }}>
                    $ {formatUSD(data.estimate.high)}
                  </Heading>
                </div>
                <div className="divider" />
                <div className="value-block">
                  <p style={{ color: '#198038' }}>Low Range</p>
                  <Heading style={{ color: '#198038' }}>
                    $ {formatUSD(data.estimate.low)}
                  </Heading>
                </div>
              </div>
            </Tile>
          </Column>

          <Column lg={8}>
            <div className="section-heading">Scoring</div>
            <Tile>
              <div className="value-row">
                <div className="value-block">
                  <p>Confidence Score</p>
                  <Heading>{data.scoring.confidence} <span style={{ fontWeight: 400 }}>/ 100</span></Heading>
                </div>
                <div className="divider" />
                <div className="value-block">
                  <p>FSD</p>
                  <Heading>{data.scoring.fsd}</Heading>
                </div>
              </div>
            </Tile>
          </Column>
        </Grid>
      </Column> */}

      <Column lg={16}>
      <div className="flex-estimate-scoring-wrapper">
        {/* Estimated Values */}
        <div className="estimate-box">
          <div className="section-heading">Estimated Values</div>
          <Tile className="custom-tile">
            <div className="value-row">
              <div className="value-block">
                <p>Estimated Price Point</p>
                <Heading className="highlight-value">$ {formatUSD(data.estimate.mid)}</Heading>
              </div>
              <div className="divider" />
              <div className="value-block">
                <p style={{ color: '#da1e28' }}>High Range</p>
                <Heading className="highlight-value">$ {formatUSD(data.estimate.high)}
                </Heading>
              </div>
              <div className="value-block">
                <p style={{ color: '#198038' }}>Low Range</p>
                <Heading className="highlight-value">$ {formatUSD(data.estimate.low)}
                </Heading>
              </div>
            </div>
          </Tile>
        </div>

        {/* Scoring */}
        <div className="estimate-box">
          <div className="section-heading">Scoring</div>
          <Tile className="custom-tile">
            <div className="value-row">
              <div className="value-block">
                <p>Confidence Score</p>
                <Heading className="highlight-value">
                  {data.scoring.confidence}{' '} <span>/ 100</span>
                </Heading> 
              </div>
              <div className="divider" />
              <div className="value-block">
                <p>FSD</p>
                <Heading className="highlight-value">{data.scoring.fsd}</Heading>
              </div>
            </div>
          </Tile>
        </div>
      </div>
    </Column>



      {/* Property Details */}
      <Column lg={16}>
        <div className="section-heading">Property Details</div>
        <Grid>
          <Column lg={6}>
            <img
            className='property-image'
              src="/house.jpg"
              alt="Property"
            />
          </Column>
          <Column lg={10}>
            <div className="property-meta">
              <p>Address: <strong>1245 Elmwood Ave</strong></p>
              <p>City/State: <strong>Los Angeles, CA</strong></p>
              <p>ZIP Code: <strong>90024</strong></p>
              <p>Neighborhood: <strong></strong>Westwood Village</p>
            </div>
            <Heading className="characteristics-title">Property Characteristics</Heading>
            <FlexGrid fullWidth className="char-grid">
              <Row className="row-spacing">
                <Column lg={4} md={4} sm={6}>
                  <div className="tile-box">
                    <div className="icon-wrapper">
                      <Home size={20} className="tile-icon" />
                    </div>
                    <div className="tile-text">
                      <p className="tile-label">Bedroom</p>
                      <strong className="tile-value">4 Beds</strong>
                    </div>
                  </div>
                </Column>

                <Column lg={4} md={4} sm={6}>
                  <div className="tile-box">
                    <div className="icon-wrapper"><UserProfileAlt size={20} className="tile-icon" /></div>
                    <div className="tile-text">
                      <p className="tile-label">Bathroom</p>
                      <strong className="tile-value">3 Baths</strong>
                    </div>
                  </div>
                </Column>

                <Column lg={4} md={4} sm={6}>
                  <div className="tile-box">
                    <div className="icon-wrapper"><RulerAlt size={20} className="tile-icon" /></div>
                    <div className="tile-text">
                      <p className="tile-label">Sq Footage</p>
                      <strong className="tile-value">2,450 sq ft</strong>
                    </div>
                  </div>
                </Column>
              </Row>

              <Row className="row-spacing">
                <Column lg={4} md={4} sm={6}>
                  <div className="tile-box">
                    <div className="icon-wrapper"><Crop size={20} className="tile-icon" /></div>
                    <div className="tile-text">
                      <p className="tile-label">Lot Size</p>
                      <strong className="tile-value">6,500 sq ft</strong>
                    </div>
                  </div>
                </Column>

                <Column lg={4} md={4} sm={6}>
                  <div className="tile-box">
                    <div className="icon-wrapper"><Calendar size={20} className="tile-icon" /></div>
                    <div className="tile-text">
                      <p className="tile-label">Year Built</p>
                      <strong className="tile-value">2015</strong>
                    </div>
                  </div>
                </Column>

                <Column lg={4} md={4} sm={6}>
                  <div className="tile-box">
                    <div className="icon-wrapper"><BuildingInsights_1 size={20} className="tile-icon" /></div>
                    <div className="tile-text">
                      <p className="tile-label">Property Type</p>
                      <strong className="tile-value">Single Family Home</strong>
                    </div>
                  </div>
                </Column>
              </Row>
            </FlexGrid>

          </Column>
        </Grid>
      </Column>

      {/* Charts */}
      
        {/* <div className="section-heading">Assessor / Public Record</div>
        
        <div className="section-heading">Historical Information</div> */}

      {/* Assessor & Historical */}
      <Column lg={16}>
        <TwoTablesRow />
      </Column>

      {/* Charts */}
      {/* <Column lg={8}>
        <div className="section-heading">Sale Price Distribution</div>
        <Tile>
          <img src="/pie_chart.png" alt="Pie Chart" style={{ width: '100%' }} />
        </Tile>
      </Column>
      <Column lg={8}>
        <div className="section-heading">Average or Median Sales Price</div>
        <Tile>
          <img src="/line_chart.png" alt="Line Chart" style={{ width: '100%' }} />
        </Tile>
      </Column> */}

      {/* Tables Placeholders */}
      <Column lg={16}>
        <div className="section-heading">Map Identifying</div>
        <MapSection />
      </Column>
      <Column lg={16}>
        <div className="section-heading">Comparable Sales</div>
        <ComparableSalesTable />
      </Column>
       <Column lg={16}>
        <div className="section-heading">Charts</div>
          <FlexGrid fullWidth>
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

      <Column lg={16}>
        <div className="section-heading">Distribution Charts</div>
        <Grid>
          <Column lg={8} md={4} sm={2}>
            <AverageSalePrice />
          </Column>
          <Column lg={8} md={4} sm={2}>
            <SquareFootage />
          </Column>
        </Grid>
        {/* <FlexGrid>
          <Row>
              <Column lg={16} md={8} sm={4}>
              <SalePrice />
              </Column>
          </Row>
        </FlexGrid> */}
         <Grid>
            <Column lg={16} md={8} sm={4}>
              <div>
                <SalePrice />
              </div>
            </Column>
          </Grid>
      </Column>

      {/* Disclaimer */}
      <Column lg={16}>
        <div className="disclaimer-tile">
          <p>
            <b>Disclaimer:</b> This estimate of market value is computer generated by the application of various mathematical formulas and techniques proprietary to LoanDNA to available public record, local market and proprietary data. This report has not been prepared by a licensed appraiser nor does it constitute an appraisal of the subject property and should not be relied upon as such. The data used to generate this report does not include information that could be derived from an inspection of the subject property and its surroundings. The condition of the property could greatly affect the accuracy of the estimate of value. The data and the information derived from the data in this report is provided as available and “AS IS” and is intended for internal asset valuation use only. All uses are at the user’s sole risk. LoanDNA is not liable for the accuracy of the data or information provided in this report. The accuracy of the data and methodologies used are deemed reliable but are not warranted or guaranteed. The charts and graphs contained herein are computer generated by the application of various mathematical formulas and techniques proprietary to LoanDNA to available public record, local market and proprietary data compiled by LoanDNA. Such data is deemed reliable but may not be complete or accurate in all cases and is not guaranteed. LoanDNA is not liable for the accuracy of the information provided. The information displayed in these graphics is provided “AS IS” and is intended for internal asset valuation use only. All uses are at the user’s sole risk.
          </p>
        </div>
      </Column>
      
    </Grid>

    
  );
}
