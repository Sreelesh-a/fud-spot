import { useState, useEffect } from "react";
import { SWIGGY_API_LINK3 } from "./constants";
import axios from "axios";

const useSwiggyApi = () => {
  const [latANdLng, setLatAndLng] = useState(
    "lat=9.9312328&lng=76.26730409999999"
  );

  // calicut : "lat=11.2587531&lng=75.78041";

  // setLatAndLng("");
  // lat: 11.2587531;
  // lng: 75.78041;

  const [swiggyApi, setSwiggyApi] = useState(null);
  const [swiggyfect, setSwiggyFetch] = useState([]);
  useEffect(() => {
    // axios
    //   .get(SWIGGY_API_LINK3)
    //   .then((res) => {
    //     setSwiggyApi(res?.data?.data);
    //   })
    //   .catch((Err) => console.log(Err));
    fetchData();
  }, []);

  // console.log(swiggyApi);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_LINK3 + latANdLng);
    const json = await data.json();
    setSwiggyApi(json?.data);
  };

  return swiggyApi;
};

export default useSwiggyApi;
