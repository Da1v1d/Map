import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./style.css";
import { WeatherMarker } from "../Marker/WeatherMarker/WeatherMarker";
import { Tyle } from "./Tyle";

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
