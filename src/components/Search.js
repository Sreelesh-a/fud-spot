import { AVATAR_IMG } from "../utils/constants";
const Search = () => {
  return (
    <div className="body">
      <div className="user-cards">
        <div className="user-card-items">
          <div className="user-img-div">
            <img className="user-img" alt="user image" src={AVATAR_IMG}></img>
          </div>

          <div className="user-details">
            <div className="resto-name">Sreelesh</div>
            <span>Location</span>
            <span>Username</span>
          </div>
        </div>
        <div className="user-card-items">
          <div className="user-img-div">
            <img className="user-img" alt="user image" src={AVATAR_IMG}></img>
          </div>

          <div className="user-details">
            <div className="resto-name">Sreelesh</div>
            <span>Location</span>
            <span>Username</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
