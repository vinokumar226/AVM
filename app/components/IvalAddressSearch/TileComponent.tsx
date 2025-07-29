import React from "react";
//import "./TileComponent.css";

interface TileProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const TileComponent: React.FC<TileProps> = ({ icon, label, value }) => {
  return (
    <div className="tile">
      <div className="tile-icon">
        {icon}
      </div>
      <div className="tile-content">
        <div className="tile-label">{label}</div>
        <div className="tile-value">{value}</div>
      </div>
    </div>
  );
};

export default TileComponent;
