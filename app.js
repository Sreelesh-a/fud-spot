import React from "react";
import ReactDOM from "react-dom/client";
import logoHeaderImg from "./img/fud-spot-log.png";
// import restData from "./restuarant";
const restDatas = require("./restuarant");

const Header = () => {
  return (
    <div className="header ">
      <div className="logoHeader">
        <img src={logoHeaderImg} className="logoHeaderImg"></img>
        <span className="LocationHeader">Kochi, Kerala, India</span>
      </div>
      <div className="navItems">
        <ul>
          <li>FudSpot Corporate</li>
          <li>Search</li>
          <li>Offers</li>
          <li>Help</li>
          <li>Sign in</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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
        <span className="resto-name">
          {avgRating}
          <span className="center-dot">•</span>
          {sla.slaString}
        </span>
        <br />
        <span className="resto-location">{areaName}</span>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="carouselHome">
        <div className="sectionTitle">What's on your mind?</div>
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
const AppLayout = () => {
  return (
    <div className="AppLayout">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
