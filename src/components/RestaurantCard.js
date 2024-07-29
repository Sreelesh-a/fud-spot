import { RESTO_IMG_LINK } from "../utils/constants";
import { Link } from "react-router-dom";
import { Ratingicon } from "./RestMenu";
import { Ratingicon } from "./Ratingicon";
import ShimmerCard from "./ShimmerCard";

const RestaurantCard = (res) => {
  const { discountCheck } = res;

  const { restData } = res;
  const { name, cloudinaryImageId, avgRating, sla, areaName } = restData?.info;
  // const ShimmerUi = () => {
  //   if (!res.length === 0) {
  //     return <ShimmerCard />;
  //   }
  // };

  return (
    <div className="justify-between mt-9 ">
      <div className="space-y-2 grid grid-cols-2 items-center sm:grid-cols-1  ">
        {/* <ShimmerUi /> */}
        <div className="relative rounded-xl overflow-hidden w-36 h-28 sm:w-60 sm:h-40  ">
          <img
            src={RESTO_IMG_LINK + cloudinaryImageId}
            className="object-cover w-full h-full "
          />
          {discountCheck && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent from-10%"></div>
          )}
        </div>

        <div className="resto-details   ">
          <div className="font-bold truncate ...">{name}</div>

          <div className="resto-rating ">
            <div className="flex   text-sm items-center gap-1 font-bold">
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
  );
};

export const WithItemLabel = (RestaurantCard) => {
  return (props) => {
    const { restData, discountInfo } = props;
    const discountCheck = null;
    return (
      <div className="relative ">
        <RestaurantCard restData={restData} discountCheck={true} />
        {discountInfo && (
          <div className="absolute bottom-0  sm:bottom-20 sm:left-2  text-white px-2 font-[oswald] py-1 text-sm sm:text-xl font-bold">
            {discountInfo.header} {discountInfo.subHeader}
          </div>
        )}
      </div>
    );
  };
};
export default RestaurantCard;
