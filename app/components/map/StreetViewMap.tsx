// StreetViewMap.tsx
'use client';

// StreetViewMap.tsx
import React, { useCallback, useRef } from "react";
import { GoogleMap } from "@react-google-maps/api";

const center = { lat: 43.540116, lng: -123.536855 };

const containerStyle = {
  width: "100%",
  height: "364px",
};

const StreetViewMap = () => {
  const mapRef = useRef<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
    map.setZoom(15);
    map.setMapTypeId(google.maps.MapTypeId.ROADMAP);

    //const { AdvancedMarkerElement } = google.maps.marker;

    //pin image URL
    // const img = document.createElement("img");
    // img.src = "/union.png";
    // img.alt = "Subject Property";
    // img.style.width = "24.04px";
    // img.style.height = "41.72px";

    // const marker = new AdvancedMarkerElement({
    //   map,
    //   position: center,
    //   title: "Subject Property",
    //   content: img,
    // });

    // Create wrapper
    const wrapper = document.createElement("div");
    wrapper.style.position = "relative";
    wrapper.style.width = "22.04px";
    wrapper.style.height = "41.72px";

    // Main pin icon
    const pinImg = document.createElement("img");
    pinImg.src = "/union.png";
    pinImg.alt = "Subject Property";
    pinImg.style.width = "22px";
    pinImg.style.height = "34px";
    pinImg.style.display = "block";

    // Ellipse image
    const ellipseImg = document.createElement("img");
    ellipseImg.src = "/ellipse.png"; // your actual ellipse image path
    ellipseImg.alt = "Pin Ellipse";
    ellipseImg.style.position = "absolute";
    ellipseImg.style.top = "11px"; // adjust based on Figma layout
    ellipseImg.style.left = "50%";
    ellipseImg.style.transform = "translate(-50%, -30%)";
    ellipseImg.style.width = "8px";  // adjust based on Figma
    ellipseImg.style.height = "8px";
    ellipseImg.style.pointerEvents = "none"; // optional

    // Assemble
    wrapper.appendChild(pinImg);
    wrapper.appendChild(ellipseImg);

    // Add to map
    new google.maps.marker.AdvancedMarkerElement({
      map,
      position: center,
      title: "Subject Property",
      content: wrapper,
    });


  }, []);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      options={{
        mapTypeId: 'roadmap',
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        disableDefaultUI: false,
        mapId: 'd6bb96ee61a1b1a42ef563be',
        gestureHandling: "none", 
      }}
    />
  );
};

export default StreetViewMap;
