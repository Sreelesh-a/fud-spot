import { RESTO_IMG_LINK } from "../utils/constants";
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
          <br />
          <span className="resto-rating">
            {avgRating}
            <span className="center-dot">•</span>
            {sla.slaString}
          </span>
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
