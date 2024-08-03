import { useState, useEffect } from "react";
import useSwiggyApi from "../utils/useSwiggiApi";

const WhatsOnYourMindMobile = () => {
  const [swiggyInfo, setSwiggyInfo] = useState([]);
  let swiggyApi = useSwiggyApi();

  useEffect(() => {
    if (swiggyApi) {
      setSwiggyInfo(
        (swiggyApi && swiggyApi?.cards[0]?.card?.card?.imageGridCards?.info) ||
          []
      );
    }
  }, [swiggyApi]);

  console.log("swiggyApi");
  const regex = /collections\/(\d+)\?/i;

  return (
    <div>
      <div></div>
    </div>
  );
};

export default WhatsOnYourMindMobile;
