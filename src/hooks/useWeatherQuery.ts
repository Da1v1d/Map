import { useQuery } from "@tanstack/react-query";
import { LatLong } from "../types/map.types";
import { getCurrentWeatherInfo } from "../api/weather/weather";
import { QUERY_KEYS } from "constant";

export const useWeatherQuery = (position: LatLong, clicked: boolean) => {

  return useQuery({
    queryKey: [QUERY_KEYS.weather, position],
    queryFn: () => getCurrentWeatherInfo(position[0], position[1]),
    enabled: !!position && clicked,
  });
};
