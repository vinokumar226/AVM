// RoadMapView.tsx
import React, { useCallback } from "react";
import { GoogleMap } from "@react-google-maps/api";

const center = { lat: 43.540116, lng: -123.536855 };

const redComparables = [
  { lat: 43.539543, lng: -123.536348 },
  { lat: 43.539966, lng: -123.53907 },
  { lat: 43.542507, lng: -123.541893 },
  { lat: 43.544961, lng: -123.53942 },
  { lat: 43.547373, lng: -123.548116 },
  { lat: 43.550474, lng: -123.545581 },
];

const RoadMapView = () => {
  const onLoad = useCallback((map: google.maps.Map) => {
    const { AdvancedMarkerElement } = google.maps.marker;

    new AdvancedMarkerElement({
      map,
      position: center,
      title: "Subject Property",
      content: createLabeledPin("S", "blue"),
    });

    redComparables.forEach((pos, index) => {
      new AdvancedMarkerElement({
        map,
        position: pos,
        title: `Comparable ${index + 1}`,
        content: createLabeledPin(`${index + 1}`, "red"),
      });
    });
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "400px" }}
      center={center}
      zoom={17}
      mapTypeId="roadmap"
      onLoad={onLoad}
      options={{
        mapId: "d6bb96ee61a1b1a42ef563be", // Update with your actual styled Map ID
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
    />
  );
};

function createLabeledPin(label: string, color: "blue" | "red") {
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

export default RoadMapView;
