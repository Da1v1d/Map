export class TimeService {
  static async getCurrentTime(lat: number, long: number): Promise<any> {
    const fetchedData = await fetch(
      `https://location-and-time.p.rapidapi.com/datetime/bylocation?lon=${long}&lat=${lat}`,
      {
        headers: {
          "X-RapidAPI-Key": `${process.env.REACT_APP_TIMEZONE_API_KEY}`,
          "X-RapidAPI-Host": "location-and-time.p.rapidapi.com",
        },
      },
    );
    const response = await fetchedData.json();
    return response;
  }
}
