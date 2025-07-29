import React from "react";
import TileComponent from "./TileComponent";
import {
  Home,
  UserProfileAlt,
  RulerAlt,
  Crop,
  Calendar,
  BuildingInsights_1
} from "@carbon/icons-react";

const tileData = [
  { icon: <Home />, label: "Bedroom", value: "4 Beds" },
  { icon: <UserProfileAlt />, label: "Bathroom", value: "3 Baths" },
  // { icon: <RulerAlt />, label: "Sq Footage", value: "2,450 sq ft" },
  { icon: <Crop />, label: "Lot Size", value: "6,550 sq ft" },
  { icon: <Calendar />, label: "Year Built", value: "2015" },
  // { icon: <BuildingInsights_1 />, label: "Property Type", value: "Single Family Home" },
  { icon: <Crop />, label: "Flood Determination", value: "Yes" },
  { icon: <Calendar />, label: "Actively Listed", value: "No" },
  // { icon: <BuildingInsights_1 />, label: "Distressed Indicator", value: "Yes" }
];

const TileGrid: React.FC = () => {
  return (
    <div className="tile-section">
      <h3 className="tile-title">Property Characteristics</h3>
      <div className="tile-grid">
        {tileData.map((tile, index) => (
          <div className="tile-column" key={index}>
            <TileComponent {...tile} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TileGrid;
