import { useState, useCallback } from "react";

const useTheLocation = (initialLocation) => {
  const [locationGet, setLocationGet] = useState(initialLocation);

  const updateLocationGet = useCallback(
    (newLocation) => {
      setLocation(newLocation);
    },
    [locationGet]
  );
  return [location, updateLocationGet];
};

export default useTheLocation;
