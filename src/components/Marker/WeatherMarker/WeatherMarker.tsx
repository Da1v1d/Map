import { Marker, useMapEvent } from "react-leaflet";
import { useEffect, useState } from "react";
import { DivIcon } from "leaflet";

import { usePositionInfoQuery } from "hooks/usePositionInfoQuery";
import { LatLong } from "types/map.types";
import { WeatherPopup } from "components/Popup/WeatherPopup/WeatherPopup";

const markerIcon = new DivIcon({
  iconSize: [24, 24],
  iconAnchor: [11, 25],
});

export const WeatherMarker = () => {
  const [position, setPosition] = useState<LatLong | null>(null);
  const [clicked, setClicked] = useState(false);

  const { data, isLoading } = usePositionInfoQuery(position as LatLong, clicked);

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
    // ! Got A problem somethimes eventlistener removed
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useMapEvent("click", async (e) => {
    const { lat, lng } = e.latlng;
    if (!clicked) {
      setPosition([lat, lng]);
    } else {
      closePopup();
    }
  });

  return (
    <>
      {position && (
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
      )}
    </>
  );
};
