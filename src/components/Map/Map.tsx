import { MapContainer } from "react-leaflet";

import { WeatherMarker } from "../Marker/WeatherMarker/WeatherMarker";
import { Tyle } from "./Tyle";
import "./style.css";
import "leaflet/dist/leaflet.css";

export const Map = () => {
  return (
    <MapContainer
      center={[40.1872, 44.5152]}
      zoom={15}
      scrollWheelZoom={true}
      minZoom={2}
    >
      <Tyle />
      <WeatherMarker />
    </MapContainer>
  );
};
