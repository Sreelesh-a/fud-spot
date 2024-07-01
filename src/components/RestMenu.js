import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";
import { Ratingicon } from "./Ratingicon";
import useRestoMenu from "../utils/useRestoMenu";

const RestMenu = () => {
  const { resid } = useParams();

  const restInfo = useRestoMenu(resid);

  if (restInfo === null) return <ShimmerCard />;

  const { itemCardss } =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const itemCards =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || [];
  const { name, avgRating, sla, costForTwoMessage } =
    restInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="body-menu">
      <div className="menu-main">
        <div className="resto-menu-header">
          <div className="resto-menu-name">{name}</div>
          <div className="resto-menu-box">
            <div className="resto-menu-details">
              <div className="resto-rating">
                <Ratingicon />
                {avgRating}
                <span className="center-dot">•</span>
                {costForTwoMessage}
              </div>
              {/* <div>{sla.slaString}</div> */}
            </div>
          </div>
        </div>
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
