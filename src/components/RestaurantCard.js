import { RESTO_IMG_LINK } from "../utils/constants";
import { RESTO_IMG_LINK2 } from "../utils/constants";
import { Link } from "react-router-dom";
// import { Ratingicon } from "./RestMenu";
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
        <div className="relative rounded-xl overflow-hidden w-36 h-28 md:w-36 lg:w-60 lg:h-40  ">
          <img
            src={RESTO_IMG_LINK2 + cloudinaryImageId}
            className="object-cover w-full h-full "
          />
          {discountCheck && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent from-10%"></div>
          )}
        </div>

        <div className="resto-details   ">
          <div className="font-bold truncate ...">{name}</div>

          <div className="resto-rating ">
            <div className="flex  truncate lg:text-sm md:text-xs text-sm   items-center gap-1 font-bold">
              <div className="sm:scale-100   lg:scale-100 md:scale-75">
                <Ratingicon />
              </div>
              {avgRating}
              <div className="center-dot">•</div>
              <span className="">{sla.slaString}</span>
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
          <div className="absolute bottom-0  lg:bottom-20 md:bottom-20 lg:left-2 truncate  text-white px-2 font-[oswald] py-1 text-sm md:text-sm lg:text-xl font-bold">
            {discountInfo.header} {discountInfo.subHeader}
          </div>
        )}
      </div>
    );
  };
};
export default RestaurantCard;
