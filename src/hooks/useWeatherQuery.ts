import { useQuery } from "@tanstack/react-query";
import { LatLong } from "../types/map.types";
import { getCurrentWeatherInfo } from "../api/weather/weather";

export const useWeatherQuery = (position: LatLong) => {
  return useQuery({
    queryKey: ["weather", position],
    queryFn: () => getCurrentWeatherInfo(position[0], position[1]),
    enabled: !!position,
  });
};
