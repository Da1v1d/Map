import { CurrentWeatherInfo } from "types/weather.types";

export const getCurrentWeatherInfo: (
  lat: number,
  long: number
) => Promise<CurrentWeatherInfo> = async (lat, long) => {
  const fetchedData = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,is_day,rain`
  );
  const response = await fetchedData.json();
  return response;
};
