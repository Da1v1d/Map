import { Marker, Popup, useMapEvent } from "react-leaflet";
import { useEffect, useState } from "react";
import { Icon, DivIcon } from "leaflet";
import marker from "assets/icons/marker.png";

import { Box, CircularProgress, Typography } from "@mui/material";
import ThunderstormRoundedIcon from "@mui/icons-material/ThunderstormRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";
import { useWeatherQuery } from "hooks/useWeatherQuery";
import { LatLong } from "types/map.types";
import { useGeoLocation } from "hooks/useGeoLocation";
import { useToast } from "providers/ToastProvider";
import { showHour } from "utils/date";

const markerIcon = new DivIcon({
  iconSize: [24, 24],
  iconAnchor: [11, 25],
});

export const WeatherMarker = () => {
  const [position, setPosition] = useState<LatLong | null>(null);
  const { data, isLoading } = useWeatherQuery(position as LatLong);
  const { userPosition } = useGeoLocation();
  const { showToast } = useToast();
  const [clicked, setClicked] = useState(false);
  const closePopup = () => {
    setClicked(false);
    setPosition(null);
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closePopup();
      }
    });

    return () =>
      window.removeEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          closePopup();
        }
      });
  }, []);

  useMapEvent("click", async (e) => {
    const { lat, lng } = e.latlng;
    if (!clicked) {
      setClicked(true);
      setPosition([lat, lng]);
    } else {
      closePopup();
    }
  });

  return (
    <>
      {position && (
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
                    {showHour()}
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
