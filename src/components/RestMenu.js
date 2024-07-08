import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";
import { Ratingicon } from "./Ratingicon";
import useRestoMenu from "../utils/useRestoMenu";
import RestoMenuCategory from "./RestoMenuCategory";

const RestMenu = () => {
  const { resid } = useParams();

  const restInfo = useRestoMenu(resid);

  if (restInfo === null) return <ShimmerCard />;

  // const { itemCardss } =
  //   restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card;

  const itemCards =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || [];
  const { name, avgRating, sla, costForTwoMessage } =
    restInfo?.cards[2]?.card?.card?.info;

  const filteredNestedCategories =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (res) =>
        res?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  const filteredCategories =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (res) =>
        res?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(filteredCategories);
  // console.log(filteredNestedCategories);
  return (
    <div className="px-80">
      <div className="menu-main mt-3">
        <div className="resto-menu-header">
          <div className="font-bold text-xl">{name}</div>
          <div className="border-black  bg-gray-100 py-6 px-6 rounded-2xl my-3">
            <div className="resto-menu-details">
              <div className="resto-rating flex gap-1 font-semibold">
                <Ratingicon />
                {avgRating}
                <span className="center-dot">•</span>
                {costForTwoMessage}
              </div>
              <div>{sla.slaString}</div>
            </div>
          </div>
        </div>
        <div className="menulist">
          {filteredNestedCategories &&
            filteredNestedCategories.map((item, index) => (
              <RestoMenuCategory key={index} restData={item} />
            ))}
          {/* <li>{item?.card?.info?.name}</li> */}
        </div>
      </div>
    </div>
  );
};

export default RestMenu;
