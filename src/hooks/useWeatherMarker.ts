import { useEffect, useState } from "react";
import { useMapEvent } from "react-leaflet";

import { LatLong } from "types/map.types";

export const useWeatherMarker = () => {
  const [position, setPosition] = useState<LatLong | null>(null);
  const [clicked, setClicked] = useState(false);

  const closePopup = () => {
    setClicked(false);
    setPosition(null);
  };

  const closeOnEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closePopup();
    }
  };

  useEffect(() => {
    // ! Got A problem eventlistener removed, FIX IT
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useMapEvent("click", async e => {
    const { lat, lng } = e.latlng;
    if (!clicked) {
      setPosition([lat, lng]);
    } else {
      closePopup();
    }
  });

  return { position, clicked, setClicked };
};
