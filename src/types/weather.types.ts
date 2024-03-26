
interface CurrentWeatherUnits {
  time: string;
  interval: string;
  temperature_2m: string;
  is_day: string;
  rain: string;
  snowfall: string;
}

interface CurrentWeather {
  time: string;
  interval: number;
  temperature_2m: number;
  is_day: number;
  rain: number;
  snowfall: number;
}

export interface CurrentWeatherInfo {
  current: CurrentWeather;
  current_units: CurrentWeatherUnits;
}
