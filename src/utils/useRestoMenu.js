import { useEffect, useState } from "react";
import { SWIGGY_MENU_API } from "../utils/constants";
const useRestoMenu = (resid) => {
  const [restInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(SWIGGY_MENU_API + resid);
    const json = await data.json();
    // console.log(json?.data);
    setRestInfo(json?.data);
  };
  return restInfo;
};

export default useRestoMenu;
