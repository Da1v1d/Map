import { WeatherService } from "./weather.service";

export class WeatherApi {
  static getCurrentWeatherInfo(lat: number, long: number) {
    return WeatherService.getCurrentWeatherInfo(lat, long);
  }
}
