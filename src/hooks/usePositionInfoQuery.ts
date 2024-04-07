import { QUERY_KEYS } from "constant";

import { getCurrentTimeZone } from "api/timezone";

import { getCurrentWeatherInfo } from "../api/weather/weather";
import { LatLong } from "../types/map.types";
import { useQuery } from "@tanstack/react-query";

export const usePositionInfoQuery = (position: LatLong, clicked: boolean) => {
  const [lat, long] = position;

  return useQuery({
    // ? Why 3 key do you need it Davo :)
    queryKey: [
      QUERY_KEYS.TIMEZONE,
      QUERY_KEYS.WEATHER,
      QUERY_KEYS.POSITION_INFO,
      position,
    ],
    queryFn: () => {
      return Promise.all([
        getCurrentWeatherInfo(lat, long),
        getCurrentTimeZone(lat, long),
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
