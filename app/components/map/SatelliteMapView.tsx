// SatelliteMapView.tsx
import React, { useCallback } from "react";
import { GoogleMap, Polygon } from "@react-google-maps/api";

const center = { lat: 43.540116, lng: -123.536855 };

// Generate a rotated rectangle around the center
const getRotatedRectangle = (
  center: { lat: number; lng: number },
  widthMeters: number,
  heightMeters: number,
  angleDegrees: number
) => {
  const angleRad = (Math.PI / 180) * angleDegrees;
  const earthRadius = 6378137; // in meters

  const latOffset = (dy: number) =>
    (dy / earthRadius) * (180 / Math.PI);
  const lngOffset = (dx: number, lat: number) =>
    (dx / (earthRadius * Math.cos(Math.PI * lat / 180))) * (180 / Math.PI);

  const halfW = widthMeters / 2;
  const halfH = heightMeters / 2;

  const corners = [
    { x: -halfW, y: -halfH }, // bottom-left
    { x: halfW, y: -halfH },  // bottom-right
    { x: halfW, y: halfH },   // top-right
    { x: -halfW, y: halfH },  // top-left
  ];

  return corners.map(({ x, y }) => {
    const xRot = x * Math.cos(angleRad) - y * Math.sin(angleRad);
    const yRot = x * Math.sin(angleRad) + y * Math.cos(angleRad);
    return {
      lat: center.lat + latOffset(yRot),
      lng: center.lng + lngOffset(xRot, center.lat),
    };
  });
};

const subjectPolygon = getRotatedRectangle(center, 20, 15, 40); 
// width = 20m, height = 15m, rotated 40°

const SatelliteMapView = () => {
  const onLoad = useCallback((map: google.maps.Map) => {
    map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
    const { AdvancedMarkerElement } = google.maps.marker;

    new AdvancedMarkerElement({
      map,
      position: center,
      title: "Subject Property",
      content: createLabeledPin("S", "red"),
    });
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "400px" }}
      center={center}
      zoom={20}
      mapTypeId="satellite"
      options={{
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        disableDefaultUI: false,
        mapId: "d6bb96ee61a1b1a42ef563be", // Keep your existing mapId
      }}
      onLoad={onLoad}
    >
      <Polygon
        path={subjectPolygon}
        options={{
          strokeColor: "#FFD700",
          strokeOpacity: 1.0,
          strokeWeight: 2,
          fillOpacity: 0,
        }}
      />
    </GoogleMap>
  );
};

function createLabeledPin(label: string, color: string) {
  const pin = document.createElement("div");
  pin.style.width = "24px";
  pin.style.height = "24px";
  pin.style.borderRadius = "50%";
  pin.style.background = color;
  pin.style.color = "white";
  pin.style.display = "flex";
  pin.style.alignItems = "center";
  pin.style.justifyContent = "center";
  pin.style.fontSize = "14px";
  pin.style.fontWeight = "bold";
  pin.style.boxShadow = "0 0 4px rgba(0,0,0,0.6)";
  pin.innerText = label;
  return pin;
}

export default SatelliteMapView;
