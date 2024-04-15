import { DivIcon } from "leaflet";
import { Marker } from "react-leaflet";

import { WeatherPopup } from "components/Popup/WeatherPopup/WeatherPopup";

import { usePositionInfoQuery } from "hooks/usePositionInfoQuery";
import { useWeatherMarker } from "hooks/useWeatherMarker";

const markerIcon = new DivIcon({
  iconSize: [22, 22],
  iconAnchor: [11, 25],
});

export const WeatherMarker = () => {
  const { position, clicked, setClicked } = useWeatherMarker();

  const { data, isLoading } = usePositionInfoQuery(position!, clicked);

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
