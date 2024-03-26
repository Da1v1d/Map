import { Marker, Popup, useMapEvent } from "react-leaflet";
import { useEffect, useState } from "react";
import { Icon } from "leaflet";
import marker from "../../../assets/icons/marker.png";

import { Box, CircularProgress, Typography } from "@mui/material";
import ThunderstormRoundedIcon from "@mui/icons-material/ThunderstormRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";
import "./style.css";
import { useCurrentWeather } from "hooks/useCurrentWeather";
import { LatLong } from "types/map.types";

const markerIcon = new Icon({
  iconUrl: marker,
  iconSize: [35, 40],
  iconAnchor: [17, 30],
});

export const WeatherMarker = () => {
  const [position, setPosition] = useState<LatLong | null>(null);
  const { data, isLoading } = useCurrentWeather(position as LatLong);
  // const [data, setData] = useState<CurrentWeatherInfo | null>(null);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        // setData(null);
        setPosition(null);
      }
    });

    return () =>
      window.removeEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          // setData(null);
          setPosition(null);
        }
      });
  }, []);

  useMapEvent("click", async (e) => {
    const { lat, lng } = e.latlng;
    setPosition([lat, lng]);
  });

  return (
    <>
      {position?.length && (
        <Marker icon={markerIcon} position={[...position]}>
          <Popup>
            {isLoading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  height: "100%",
                  alignItems: "center",
                }}
              >
                <CircularProgress size={64} />
              </Box>
            ) : (
              !!data && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  {data.current.rain ? (
                    <ThunderstormRoundedIcon fontSize="large" />
                  ) : data.current.is_day ? (
                    <WbSunnyRoundedIcon fontSize="large" />
                  ) : (
                    <ModeNightRoundedIcon fontSize="large" />
                  )}
                  <Typography variant="h4" fontWeight="700">
                    {data.current?.temperature_2m}
                    {data.current_units?.temperature_2m}
                  </Typography>
                  <Typography variant="overline" fontWeight="700">
                    {new Date().getHours() + ":" + new Date().getMinutes()}
                  </Typography>
                </Box>
              )
            )}
          </Popup>
        </Marker>
      )}
    </>
  );
};
