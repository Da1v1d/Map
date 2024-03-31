import { CircularProgress } from "@mui/material";
import { FC } from "react";
import { Popup } from "react-leaflet";
import { CurrentWeatherInfo } from "types/weather.types";
import { PopupBackdrop, PopupContent, PopupTypography } from "./styled";
import { showTemperature } from "utils/temperature";
import { convertToHours } from "utils/date";
import ThunderstormRoundedIcon from "@mui/icons-material/ThunderstormRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";

type WeatherPopup = {
  data: any | CurrentWeatherInfo | undefined;
  isLoading: boolean;
};

export const WeatherPopup: FC<WeatherPopup> = ({ data, isLoading }) => {
  return (
    <Popup>
      <>
        <PopupBackdrop open={isLoading}>
          <CircularProgress size={64} />
        </PopupBackdrop>
        // ? beter way of handling beside data[0].blablabla
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
              {convertToHours(data[1].response.ctime)}
            </PopupTypography>
          </PopupContent>
        )}
      </>
    </Popup>
  );
};
