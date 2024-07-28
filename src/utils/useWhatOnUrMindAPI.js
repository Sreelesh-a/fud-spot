import { useState, useEffect } from "react";
import useSwiggyApi from "./useSwiggiApi";
import { SWIGGY_WHATSONYOURMIND_API } from "./constants";

const useWhatsOnUrMindAPI = (props) => {
  // console.log(props);
  const [apiData, setApiData] = useState([]);
  // console.log(`${SWIGGY_WHATSONYOURMIND_API}${props}`);

  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const response = await fetch(`${SWIGGY_WHATSONYOURMIND_API}${props}`);
    if (!response.ok) {
      throw new Error("WhatsOUMind Network Respone is not ok");
    }
    const json = await response.json();
    // console.log(json?.data);
    setApiData(json?.data);
  };
  return apiData;
};

export default useWhatsOnUrMindAPI;
