import { QUERY_KEYS } from "constant";

import { TimeApi } from "api/time";
import { WeatherApi } from "api/weather";

import { LatLong } from "../types/map.types";
import { useQuery } from "@tanstack/react-query";

export const usePositionInfoQuery = (position: LatLong, clicked: boolean) => {
  const [lat, long] = position;

  return useQuery({
    // Todo no need 3 keys
    queryKey: [
      QUERY_KEYS.TIMEZONE,
      QUERY_KEYS.WEATHER,
      QUERY_KEYS.POSITION_INFO,
      position,
    ],
    queryFn: () => {
      return Promise.all([
        WeatherApi.getCurrentWeatherInfo(lat, long),
        TimeApi.getCurrentTime(lat, long),
      ]);
    },
    enabled: !!position && clicked,
  });
};

// ? is only one useQuery with promise all better than useQueries
// export const useCurrentQuery = (position: LatLong, clicked: boolean) => {
//   return useQueries({
//     queries: [
//       {
//         queryKey: [QUERY_KEYS.weather, position],
//         queryFn: () => getCurrentWeatherInfo(position[0], position[1]),
//         enabled: !!position && clicked,
//       },
//       {
//         queryKey: [QUERY_KEYS.timezone, position],
//         queryFn: () => getCurrentTimeZone(position[0], position[1]),
//         enabled: !!position && clicked,
//       },
//     ],
//     combine: (results) => {
//       return {
//         data: results.map((result) => result.data),
//         isLoading: results.some((result) => result.isLoading),
//       };
//     },
//   });
// };
