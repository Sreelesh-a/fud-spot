import { RESTO_IMG_LINK } from "../utils/constants";
import { Link } from "react-router-dom";
import { Ratingicon } from "./RestMenu";
import { Ratingicon } from "./Ratingicon";
const RestaurantCard = (res) => {
  const { restData } = res;
  const { name, cloudinaryImageId, avgRating, sla, areaName } = restData?.info;

  return (
    <div className="">
      <div className="justify-between mt-9 ">
        <div className="space-y-2 grid grid-cols-2 items-center sm:grid-cols-1">
          <div className="rounded-xl overflow-hidden w-10 h-28 sm:w-64 sm:h-36 ">
            <img
              src={RESTO_IMG_LINK + cloudinaryImageId}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="resto-details   ">
            <div className="font-bold truncate ...">{name}</div>

            <div className="resto-rating ">
              <div className="flex grid-cols-1  text-sm items-center gap-1 font-bold">
                <Ratingicon />
                {avgRating}
                <div className="center-dot">•</div>
                {sla.slaString}
              </div>
            </div>

            <div className=" truncate ...">{areaName}</div>

            {/* <button className="order-now-mb">Order Now</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export const WithItemLabel = (RestaurantCard) => {
  return (props) => {
    const { restData, discountInfo } = props;
    return (
      <div className="relative">
        <RestaurantCard restData={restData} />
        {discountInfo && (
          <div className="absolute bottom-20 left-2 bg-black bg-opacity-70 text-white px-2  py-1 rounded-md text-sm font-semibold">
            {discountInfo.header} {discountInfo.subHeader}
          </div>
        )}
      </div>
    );
  };
};
export default RestaurantCard;
