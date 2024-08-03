import { createContext, useContext, useState } from "react";

const SwiggyContext = createContext();

export const SwiggyProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState("Kochi");
  const [coordinates, setCoordinates] = useState({
    lat: 9.9312328,
    lng: 76.26730409999999,
  });

  const cityCoordinates = {
    Kochi: { late: 9.9312328, lng: 76.26730409999999 },
    Banagalore: { late: 12.9715987, lng: 77.5945627 },
  };

  const handleCityChange = (newCity) => {
    setSelectedCity(newCity);
    setCoordinates(cityCoordinates[newCity]);
  };

  const value = {
    selectedCity,
    coordinates,
    handleCityChange,
  };

  return (
    <SwiggyContext.Provider value={value}>{children}</SwiggyContext.Provider>
  );
};

export const useSwiggyContext = () => useContext(SwiggyContext);
