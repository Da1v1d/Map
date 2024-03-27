import { useEffect, useState } from "react";
import { LatLong } from "types/map.types";

export const useGeoLocation = () => {
  const [userPosition, setUserPosition] = useState<LatLong | null>();
  const [userSpeed, setUserSpeed] = useState(0);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log(pos);
        setUserPosition([pos.coords.latitude, pos.coords.longitude]);
      },
      (error) => console.log(error.message)
    );
    const speed = window.navigator.geolocation.watchPosition((pos) => {
      setUserSpeed(pos.coords.speed as number);
      setUserPosition([pos.coords.latitude, pos.coords.longitude]);
    });
    return () => {
      window.navigator.geolocation.clearWatch(speed);
    };
  }, []);

  return { userPosition, userSpeed };
};
