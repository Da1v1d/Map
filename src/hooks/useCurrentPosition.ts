import { useEffect, useState } from "react";

import { LatLong } from "types/map.types";

import { useToastContext } from "providers/ToastProvider";

export const useCurrentPosition = () => {
  const [userPosition, setUserPosition] = useState<LatLong | null>();
  const [userSpeed, setUserSpeed] = useState(0);
  const { showToast } = useToastContext();

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      pos => {
        const {
          coords: { latitude, longitude },
        } = pos;
        setUserPosition([latitude, longitude]);
      },
      error => showToast("error", error.message),
    );

    const speed = window.navigator.geolocation.watchPosition(pos => {
      const {
        coords: { speed, latitude, longitude },
      } = pos;
      setUserSpeed(speed as number);
      setUserPosition([latitude, longitude]);
    });
    return () => {
      window.navigator.geolocation.clearWatch(speed);
    };
  }, []);

  return { userPosition, userSpeed };
};
