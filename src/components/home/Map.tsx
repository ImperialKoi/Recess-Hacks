import React, { useEffect, useRef } from 'react';

interface MapProps {
  center: { lat: number; lng: number };
  zoom: number;
}

declare global {
  interface Window {
    google: typeof google;
  }
}

const Map: React.FC<MapProps> = ({ center, zoom }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(null);

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current || mapInstanceRef.current || !window.google?.maps) return;

      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
        styles: [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [{ color: "#242f3e" }]
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#242f3e" }]
          },
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#746855" }]
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }]
          }
        ]
      });

      markerRef.current = new window.google.maps.marker.AdvancedMarkerElement({
        position: center,
        map: mapInstanceRef.current,
        title: "Engineering 7 (E7)",
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div class="p-4">
            <h3 class="font-bold text-lg">Engineering 7 (E7)</h3>
            <p>University of Waterloo</p>
            <p>200 University Ave W</p>
            <p>Waterloo, ON N2L 3G1</p>
          </div>
        `
      });

      markerRef.current.addListener("click", () => {
        infoWindow.open(mapInstanceRef.current, markerRef.current);
      });
    };

    initMap();
  }, [center, zoom]);

  return <div ref={mapRef} className="w-full h-[500px] rounded-lg shadow-lg" />;
};

export default Map;