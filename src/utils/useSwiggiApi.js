import { useState, useEffect, useContext } from "react";
import { SWIGGY_API_LINK3 } from "./constants";
import axios from "axios";
import LocationContext from "./LocationContext";
import { SelectLocation } from "./LocationContext";
import { SelectLocationContext } from "./LocationContext";

const useSwiggyApi = () => {
  const locationData = useContext(LocationContext);
  const { location } = useContext(SelectLocationContext);
  const [locationSelect, setLocationSelect] = useState("Kochi");

  const payloads = useContext(LocationContext);
  const Kochi = new URLSearchParams(payloads?.[location]).toString();
  const Bangalore = new URLSearchParams(payloads?.Bangalore).toString();
  const [getLocation, setGetLocation] = useState(Kochi);

  // console.log(getLocation);

  const [swiggyApi, setSwiggyApi] = useState(null);
  const url = `${SWIGGY_API_LINK3}${getLocation}`;

  // useEffect(() => {
  //   setLocationSelect(location);
  // }, []);

  useEffect(() => {
    fetchData();
  }, []);

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
