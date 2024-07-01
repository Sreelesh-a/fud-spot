import React from "react";
import { AVATAR_IMG } from "../utils/constants";

class SearchClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 109,
      count2: 9,
      follow: "Follow",
    };
  }
  render() {
    const { count, count2 } = this.state;
    const { name, position, place } = this.props;
    return (
      <div className="body">
        <div className="user-cards">
          <div className="user-card-items">
            <div className="user-img-div">
              <img className="user-img" alt="user image" src={AVATAR_IMG}></img>
            </div>

            <div className="user-details">
              <div className="resto-name">{name}</div>
              <span>{position}</span>
              <span>{place}</span>
              <div className="user-follow-items">
                <div className="user-followers">{count} Followers</div>
                <button
                  onClick={() => {
                    this.setState({
                      count: this.state.count + 1,
                      follow: "Following",
                    });
                  }}
                  className="follow-btn"
                >
                  {this.state.follow}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchClass;
