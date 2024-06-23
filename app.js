import React from "react";
import ReactDOM from "react-dom/client";
import logoHeaderImg from "./img/fud-spot-log.png";
import restData from "./restuarant";

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
  return (
    <div className="res-card">
      <div class="res-card-img">
        <img src={res.img} class="masked-image" />
      </div>
      <div className="resto-details">
        <span className="resto-name">{res.name}</span>
        <br />
        <span className="resto-name">
          {res.rating}
          <span class="center-dot">•</span>
          {res.time}
        </span>
        <br />
        <span class="resto-location">{res.location}</span>
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
          {/* <div className="flex-item">
            <RestaurantCard
              location="MG Road"
              rating="4.2"
              time="25-30 mins"
              name="Pizza Hut"
              img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"
            />
          </div>
          <div className="flex-item">
            <RestaurantCard
              location="Kacherippadi"
              rating="4.3"
              time="15-30 mins"
              name="Chinese WOrk"
              img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
            />
          </div>
          <div className="flex-item">
            <RestaurantCard
              location="Elamkulam"
              rating="4.0"
              time="05-30 mins"
              name="McDonald's"
              img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/a87f58ea-72b1-4f3d-9ffe-ae74effb1073_57240.jpg"
            />
          </div> */}
          <div className="flex-item">
            <RestaurantCard restDatas={restData} />
          </div>
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
