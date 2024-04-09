import { DivIcon } from "leaflet";
import { useEffect, useState } from "react";
import { Marker, useMapEvent } from "react-leaflet";

import { WeatherPopup } from "components/Popup/WeatherPopup/WeatherPopup";

import { usePositionInfoQuery } from "hooks/usePositionInfoQuery";

import { LatLong } from "types/map.types";

const markerIcon = new DivIcon({
  iconSize: [22, 22],
  iconAnchor: [11, 25],
});

export const WeatherMarker = () => {
  const [position, setPosition] = useState<LatLong | null>(null);
  const [clicked, setClicked] = useState(false);

  const { data, isLoading } = usePositionInfoQuery(position!, clicked);

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
    // ! Got A problem eventlistener removed
    // Todo need to fix it
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

  return (
    position && (
      <Marker
        eventHandlers={{
          click: () => {
            setClicked(true);
          },
        }}
        icon={markerIcon}
        position={[...position]}
      >
        <WeatherPopup data={data} isLoading={isLoading} />
      </Marker>
    )
  );
};
