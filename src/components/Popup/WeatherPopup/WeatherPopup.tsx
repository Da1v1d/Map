import { FC } from "react";
import { Popup } from "react-leaflet";

import { convertToHours } from "utils/date";
import { showTemperature } from "utils/temperature";

import { CurrentWeatherInfo } from "types/weather.types";

import { PopupBackdrop, PopupContent, PopupTypography } from "./styled";

import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";
import ThunderstormRoundedIcon from "@mui/icons-material/ThunderstormRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import { CircularProgress } from "@mui/material";

type WeatherPopup = {
  data: any | CurrentWeatherInfo | undefined;
  isLoading: boolean;
};

// ? beter way of handling beside data[0].blablabla
export const WeatherPopup: FC<WeatherPopup> = ({ data, isLoading }) => {
  return (
    <Popup>
      <>
        <PopupBackdrop open={isLoading}>
          <CircularProgress size={64} />
        </PopupBackdrop>
        {data?.length && (
          <PopupContent>
            {data[0].current.rain ? (
              <ThunderstormRoundedIcon sx={{ fontSize: "112px" }} />
            ) : data[0].current.is_day ? (
              <WbSunnyRoundedIcon sx={{ fontSize: "112px" }} />
            ) : (
              <ModeNightRoundedIcon sx={{ fontSize: "112px" }} />
            )}
            <PopupTypography variant="h4">
              {showTemperature(data[0])}
            </PopupTypography>

            <PopupTypography variant="h5">
              {!!data[1].response && convertToHours(data[1]?.response?.ctime)}
            </PopupTypography>
          </PopupContent>
        )}
      </>
    </Popup>
  );
};
