import { useState, useEffect, useContext } from "react";
import { SWIGGY_API_LINK, SWIGGY_CORS_API } from "./constants";
import axios from "axios";
import LocationContext from "./LocationContext";
import { SelectLocation } from "./LocationContext";
import { SelectLocationContext } from "./LocationContext";
// import { useSwiggyContext } from "./swiggyContext";

const useSwiggyApi = () => {
  const locationData = useContext(LocationContext);
  // const { coordinates } = useSwiggyContext();
  const { location } = useContext(SelectLocationContext);
  const [locationSelect, setLocationSelect] = useState("Kochi");
  console.log();

  const payloads = useContext(LocationContext);
  const Kochi = new URLSearchParams(payloads?.[location]).toString();
  const Bangalore = new URLSearchParams(payloads?.Bangalore).toString();

  const [getLocation, setGetLocation] = useState(Kochi);
  // console.log();
  // lat%3D9.9312328%26lng%3D76.26730409999999

  // console.log(getLocation);

  const [swiggyApi, setSwiggyApi] = useState(null);
  const url = `${SWIGGY_API_LINK}${getLocation}`;
  // console.log(url);

  // useEffect(() => {
  //   setLocationSelect(location);
  // }, []);

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network Respone is not ok");
      }
      const json = await response.json();

      setSwiggyApi(json?.data);
    } catch (err) {
      console.error("error", err);
    }
  };

  return swiggyApi;
};

export default useSwiggyApi;
