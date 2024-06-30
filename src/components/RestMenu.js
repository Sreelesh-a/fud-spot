import { useEffect, useState } from "react";
import { SWIGGY_MENU_API } from "../utils/constants";
import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";

const RestMenu = () => {
  const [restinfo, setRestInfo] = useState(null);
  const { resid } = useParams();
  console.log(SWIGGY_MENU_API + resid);

  //   if (restinfo === null) return <ShimmerCard />;

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(SWIGGY_MENU_API + resid);
    const json = await data.json();
    console.log(json?.data);
    setRestInfo(json?.data);
  };

  if (restinfo === null) return <ShimmerCard />;

  const { itemCards } =
    restinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const { name } = restinfo?.cards[2]?.card?.card?.info;

  return (
    <div>
      <div>
        <div>{name}</div>
        <div>Cuisines</div>
        <div className="menulist">
          <ul>
            {itemCards.map((item) => (
              <li key="item?.card?.info?.id">{item?.card?.info?.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestMenu;
