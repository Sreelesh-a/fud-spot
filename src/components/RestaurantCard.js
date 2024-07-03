import { RESTO_IMG_LINK } from "../utils/constants";
import { Link } from "react-router-dom";
import { Ratingicon } from "./RestMenu";
import { Ratingicon } from "./Ratingicon";
const RestaurantCard = (res) => {
  const { restData } = res;
  const { name, cloudinaryImageId, avgRating, sla, areaName } = restData?.info;

  return (
    <div className="res-card-main">
      <div className="res-card ">
        <div className="res-card-img">
          <img
            src={RESTO_IMG_LINK + cloudinaryImageId}
            className="masked-image"
          />
        </div>
        <div className="resto-details">
          <span className="resto-name">{name}</span>

          <div className="resto-rating">
            <div className="avg-rating">
              <Ratingicon />
              {avgRating}
              <span className="center-dot">•</span>
              {sla.slaString}
            </div>
          </div>
          <br />
          <span className="resto-location">{areaName}</span>
          <br />
          <button className="order-now-mb">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
