import logoHeaderImg from "/img/fud-spot-log-b.png";
import React from "react";
const MobMenu = () => {
  return (
    <div className="menu-bar">
      <div className="menu-item">
        <img alt="logo" className="nav-logo" src={logoHeaderImg}></img>
        <span className="nav-label">FudSpot</span>
      </div>
      <div className="menu-item">
        <ion-icon name="fast-food-outline"></ion-icon>
        <span className="nav-label">Food</span>
      </div>
      <div className="menu-item">
        <ion-icon name="scale-outline"></ion-icon>
        <span className="nav-label">Genie</span>
      </div>
      <div className="menu-item">
        <ion-icon name="search-outline"></ion-icon>
        <span className="nav-label">Genie</span>
      </div>
    </div>
  );
};

export default MobMenu;
