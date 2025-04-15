/// <reference types="vite/client" />

declare global {
    interface Window {
      google: typeof google;
    }
  }
  
  declare namespace google.maps {
    interface MarkerLibrary {
      AdvancedMarkerElement: typeof google.maps.marker.AdvancedMarkerElement;
    }
  }