import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./style.css";
import { WeatherMarker } from "../Marker/WeatherMarker/WeatherMarker";

export const Map = () => {
  return (
    <MapContainer
      center={[40.1872, 44.5152]}
      zoom={15}
      scrollWheelZoom={true}
      minZoom={2}
    >
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
        url="https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png"
        // url="https://api.maptiler.com/maps/toner-v2/{z}/{x}/{y}.png?key=6nBcZGIRJd9mnh9QVMkY"
      />
      <WeatherMarker />
    </MapContainer>
  );
};
