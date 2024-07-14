import { useContext, createContext } from "react";

const LocationContext = createContext({
  Kochi: {
    lat: 9.9312328,
    lng: 76.26730409999999,
  },
  Bangalore: {
    lat: 12.9715987,
    lng: 77.5945627,
  },
});

export const SelectLocationContext = createContext({
  location: "Kochi",
});
export default LocationContext;
