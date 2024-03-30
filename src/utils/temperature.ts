import { CurrentWeatherInfo } from "types/weather.types";

export const showTemperature = (data: CurrentWeatherInfo): string => {
  return `${data.current?.temperature_2m}${data.current_units?.temperature_2m}`;
};
