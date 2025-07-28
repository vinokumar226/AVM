// RoadMapView.tsx
import React, { useCallback } from "react";
import { GoogleMap } from "@react-google-maps/api";

const center = { lat: 43.540116, lng: -123.536855 };

const redComparables = [
  // { lat: 43.539543, lng: -123.536348 },
  { lat: 43.539966, lng: -123.53907 },
  { lat: 43.542507, lng: -123.541893 },
  { lat: 43.544961, lng: -123.53942 },
  { lat: 43.547373, lng: -123.548116 },
  { lat: 43.550474, lng: -123.545581 },
  { lat: 43.55129, lng: -123.546802 }
];



const RoadMapView = () => {
  const onLoad = useCallback((map: google.maps.Map) => {
    const { AdvancedMarkerElement } = google.maps.marker;

    // Subject Property Marker (Blue Pin)
    new AdvancedMarkerElement({
      map,
      position: center,
      title: "Subject Property",
      content: createPinWithLabel("", "subject"),
    });

    // Comparable markers with numbers
      redComparables.forEach((pos, index) => {
      new google.maps.marker.AdvancedMarkerElement({
        map,
        position: pos,
        title: `Comparable ${index + 1}`,
        content: createPinWithLabel(String(index + 1), "comparable"),
      });
    });
    }, []);

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "820px" }}
      center={center}
      zoom={15}
      mapTypeId="roadmap"
      onLoad={onLoad}
      options={{
        mapId: "d6bb96ee61a1b1a42ef563be", // Update with your actual styled Map ID
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        gestureHandling: "none",           // disables scroll, drag, pinch gestures
        zoomControl: false,                // Optional: disables +/- zoom buttons
        disableDoubleClickZoom: true,      // Optional: disables double-click zoom
        scrollwheel: false,         
      }}
    />
  );
};

function createPinWithLabel(label: string, type: 'subject' | 'comparable') {
  const wrapper = document.createElement("div");
  const img = document.createElement("img");
  const span = document.createElement("span");

  // Subject pins are larger
  const isSubject = type === "subject";
  const iconSizeWidth = isSubject ? 75 : 49; // px
  const iconSizeHeight = isSubject ? 120 : 65; // px
  const fontSize = isSubject ? "18px" : "20px";
  const fontWeight = "700";

  img.src = isSubject
    ? "/spotlight_marker.png"       // blue subject pin icon
    : "/marker_pinlet.png";   // red comparable pin icon

  img.alt = type;
  img.style.width = `${iconSizeWidth}px`;
  img.style.height = `${iconSizeHeight}px`;
  img.style.position = "absolute";
  img.style.top = "0";
  img.style.left = "0";

  span.innerText = label;
  span.style.position = "absolute";
  span.style.top = "40%";
  span.style.left = "50%";
  span.style.transform = "translate(-50%, -50%)";
  span.style.fontSize = fontSize;
  span.style.fontWeight = fontWeight;
  span.style.color = "white";
  span.style.pointerEvents = "none";
  span.style.textShadow = "0 0 3px rgba(0,0,0,0.6)";

  wrapper.style.position = "relative";
  wrapper.style.width = `${iconSizeWidth}px`;
  wrapper.style.height = `${iconSizeHeight}px`;
  wrapper.style.cursor = "pointer";
  wrapper.appendChild(img);
  wrapper.appendChild(span);

  return wrapper;
}

export default RoadMapView;
