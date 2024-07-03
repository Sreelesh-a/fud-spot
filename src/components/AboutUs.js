import { WIP_ICON } from "../utils/constants";
const AboutUs = () => {
  return (
    <div>
      <div className="offer-page">
        {/* <div className="wip">Work in Progress</div>
        <div>Choose another path 😛</div> */}
        <img className="wip-icon" src={WIP_ICON}></img>
      </div>
    </div>
  );
};
export default AboutUs;
