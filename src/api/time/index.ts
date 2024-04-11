import { TimeService } from "./time.service";

export class TimeApi {
  static getCurrentTime(lat: number, long: number) {
    return TimeService.getCurrentTime(lat, long);
  }
}
