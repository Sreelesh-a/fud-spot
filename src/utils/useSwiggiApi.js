import { useState, useEffect } from "react";
import { SWIGGY_API_LINK3 } from "./constants";
import axios from "axios";

const useSwiggyApi = () => {
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
    const data = await fetch(SWIGGY_API_LINK3);
    const json = await data.json();
    setSwiggyApi(json?.data);
  };

  return swiggyApi;
};

export default useSwiggyApi;
