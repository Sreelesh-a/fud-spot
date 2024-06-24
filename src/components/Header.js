import logoHeaderImg from "/img/fud-spot-log.png";
const Header = () => {
  return (
    <div className="header ">
      <div className="logoHeader">
        <img src={logoHeaderImg} className="logoHeaderImg"></img>
        <span className="LocationHeader">Kochi, Kerala, India</span>
      </div>
      <div className="navItems hide-on-mob">
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

export default Header;
