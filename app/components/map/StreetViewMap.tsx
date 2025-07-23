// StreetViewMap.tsx
'use client';

// StreetViewMap.tsx
import React, { useCallback, useRef } from "react";
import { GoogleMap } from "@react-google-maps/api";

const center = { lat: 43.540116, lng: -123.536855 };

const containerStyle = {
  width: "100%",
  height: "400px",
};

const StreetViewMap = () => {
  const mapRef = useRef<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
    map.setZoom(20);
    map.setMapTypeId(google.maps.MapTypeId.ROADMAP);

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
      mapContainerStyle={containerStyle}
      center={center}
      zoom={20}
      onLoad={onLoad}
      options={{
        mapTypeId: 'roadmap',
        streetViewControl: false,
        mapTypeControl: true,      // Optional: lets user switch views
        fullscreenControl: false,
        disableDefaultUI: false,   // ✅ ensures labels/icons appear
        mapId: 'd6bb96ee61a1b1a42ef563be',
      }}
    />
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

export default StreetViewMap;
