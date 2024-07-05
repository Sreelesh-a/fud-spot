import { useState, useEffect } from "react";
import { SWIGGY_API_LINK } from "./constants";

const useSwiggyApi = () => {
  const [swiggyApi, setSwiggyApi] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_LINK);
    const json = await data.json();
    setSwiggyApi(json?.data);
  };

  return swiggyApi;
};

export default useSwiggyApi;
