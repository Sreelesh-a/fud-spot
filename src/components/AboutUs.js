import {
  WIP_ICON,
  SWIGGY_DEVELERY_BOY_VECTOR,
  SWIGGY_GROCERY_VECTOR,
  SWIGGY_APP_DOWNLOAD_FOOTER,
} from "../utils/constants";
import fudspotLogo from "../../img/fud-spot-log-w.png";
import { Link } from "react-router-dom";
import MissionVision from "./MisssionVision";
import { motion } from "framer-motion";
import IndustryPioneer from "./IndustryPioneer";
import Footer from "./Footer";
const AboutUs = () => {
  return (
    <div>
      <div className="bg-[#FE4F05]  text-center text-white my-auto  ">
        <div className="flex items-center gap-x-9 px-32 py-4 justify-between">
          <div className=" flex">
            <Link to="/">
              <img className="w-10" src={fudspotLogo} />
            </Link>
          </div>
          <div className="">
            <ul className="flex gap-x-9 ">
              <Link to="/">
                <li>Back to Home</li>
              </Link>
              <li>Order Now</li>
              <li>Restaurants</li>
              <li>What's On Your Mind</li>
            </ul>
          </div>
        </div>
        <div className="relative flex justify-center flex-wrap my-auto py-40 gap-y-4">
          <div className="absolute left-0 bottom-0">
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img className=" " src={SWIGGY_DEVELERY_BOY_VECTOR} />
            </motion.div>
          </div>
          <div className="absolute right-0 bottom-0 ">
            <motion.div
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img className="" src={SWIGGY_GROCERY_VECTOR} />
            </motion.div>
          </div>
          <div className="w-full font-bold text-5xl">About FudSpot</div>
          <div className="w-[40%]">
            FudSpot is a new-age consumer-first organization offering an
            easy-to-use convenience platform, accessible through a unified app.
          </div>
        </div>
      </div>
      <div className="py-5">
        <MissionVision />
      </div>
      <div className="py-5">
        <IndustryPioneer />
      </div>
      <div className="bg-[#04080E] flex justify-center my-[.02rem]">
        <img
          className="object-cover w-[80%] py-1"
          src={SWIGGY_APP_DOWNLOAD_FOOTER}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default AboutUs;
