import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";
import { Ratingicon } from "./Ratingicon";
import useRestoMenu from "../utils/useRestoMenu";
import RestoMenuCategory from "./RestoMenuCategory";
import { CYCLE_DELIVERY_ICON } from "../utils/constants";

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
  const {
    name,
    avgRating,
    sla,
    costForTwoMessage,
    totalRatingsString,
    areaName,
    expectationNotifiers,
    feeDetails,
  } = restInfo?.cards[2]?.card?.card?.info;

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
  const recommendMenu =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2];
  console.log(restInfo?.cards[2]?.card?.card?.info);
  return (
    <div className="px-80">
      <div className="menu-main my-12">
        <div className="resto-menu-header">
          <div className="font-bold text-xl">{name}</div>
          <div className="flex items-center justify-center py-6">
            <div className=" relative border-black  bg-gradient-to-t from-gray-200 h-52 w-full   rounded-3xl ">
              <div className="absolute border-gray-200 border-[.1rem]   bg-white w-[47rem] h-48    left-4 rounded-3xl ">
                <div className="py-6 px-6 ">
                  <div className="resto-rating flex gap-2 font-bold items-center">
                    <Ratingicon />
                    {avgRating} ({totalRatingsString})
                    <span className="text-gray-400 px-1">•</span>
                    {costForTwoMessage}
                  </div>
                  <div className="py-3">
                    <div className="flex gap-4 ">
                      <div className="relative w-1 h-11  bg-gray-100 mt-[.20rem]">
                        <div className="absolute top-0 left-0 flex flex-col justify-between h-full">
                          <div className="size-2 rounded-full bg-gray-300"></div>
                          <div className="size-2 rounded-full bg-gray-300"></div>
                        </div>
                      </div>

                      <div className="font-semibold text-sm space-y-2">
                        <div className="flex gap-x-3">
                          Outlet{" "}
                          <span className="text-gray-500 font-normal">
                            {areaName}
                          </span>
                        </div>
                        <div>{sla.slaString}</div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-1" />
                  <div className="py-2">
                    <div className="text-sm text-gray-500">
                      <div className="flex gap-2 items-center">
                        <img className="w-5" src={CYCLE_DELIVERY_ICON} />
                        <span>{sla.lastMileTravel} kms</span> |{" "}
                        <span>
                          ₹{feeDetails.totalFee / 100} Delivery fee will apply
                        </span>
                        {/* <span>{expectationNotifiers[0].text}</span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menulist">
          {recommendMenu && (
            <RestoMenuCategory
              restData={recommendMenu}
              recommend={recommendMenu?.card?.card}
            />
          )}
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
