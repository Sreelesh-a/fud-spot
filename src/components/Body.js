const restDatas = require("/restuarant.js");
const RestaurantCard = (res) => {
  const { restData } = res;
  const { name, cloudinaryImageId, avgRating, sla, areaName } = restData?.info;

  return (
    <div className="res-card ">
      <div className="res-card-img">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
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
  );
};
const MobCarousel = () => {
  return (
    <div className="mob-carousel">
      <div className="fav-rest-caro">
        <img
          className="img-fav-caro"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/ak4f9kufbxgb8fprancy"
        />
        <img
          className="img-fav-caro"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/9887a65f6a7e11c18965c02bbf255e79"
        />
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <MobCarousel />
      <div className="carouselHome">
        <div className="sectionTitle-carousel">What's on your mind?</div>
        <div className="carouselItems">
          <ul>
            <li>
              <img
                className="carouselImg"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/rng/md/carousel/production/e20c602ba8ed5d8ec2204e7a7b19d9f6"
              ></img>
            </li>
            <li>
              <img
                className="carouselImg"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png"
              ></img>
            </li>
            <li>
              <img
                className="carouselImg"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"
              ></img>
            </li>
            <li>
              <img
                className="carouselImg"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png"
              ></img>
            </li>
            <li>
              <img
                className="carouselImg"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png"
              ></img>
            </li>
            <li>
              <img
                className="carouselImg"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png"
              ></img>
            </li>
          </ul>
        </div>
      </div>
      <hr className="line-divider" />

      <div className="restaurantMain">
        <div className="sectionTitle">Top restaurant chains in Kochi</div>
        <div className="rest-container">
          {/* <RestaurantCard restData={restDatas[0]} /> */}
          {restDatas.map((rest) => (
            <RestaurantCard key={rest.info.id} restData={rest} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
