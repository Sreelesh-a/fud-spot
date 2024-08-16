import { SWIGGY_AERO_DELIVERY_VECTOR } from "../utils/constants";

const IndustryPioneer = () => {
  return (
    <div className="px-56 ">
      <div className="flex items-center gap-x-32 justify-center px-4">
        <div className="w-1/2 flex flex-wrap gap-y-5 ">
          <span className="text-2xl w-full font-semibold">
            Industry pioneer
          </span>
          <span className="text-gray-500">
            Being among the first few entrants, Swiggy has successfully
            pioneered the hyperlocal commerce industry in India, launching Food
            Delivery in 2014 and Quick Commerce in 2020. Due to the pioneering
            status of Swiggy, it is well-recognised as a leader in innovation in
            hyperlocal commerce and as a brand synonymous with the categories it
            is present in.
          </span>
        </div>
        <div className="w-1/2">
          <img src={SWIGGY_AERO_DELIVERY_VECTOR} />
        </div>
      </div>
      <div className="py-36 ">
        <div className="flex justify-center">
          <div className="flex flex-wrap text-center">
            <span className="w-full text-5xl text-[#19A672] font-bold ">
              3bn+
            </span>
            <span className="w-full">orders</span>
          </div>
          <div className="w-[.1rem] h-24 bg-gray-300"></div>
          <div className="flex flex-wrap text-center">
            <span className="w-full text-5xl text-[#19A672] font-bold ">
              ~200k+
            </span>
            <span className="w-full">restaurant partners</span>
          </div>
          <div className="w-[.1rem] h-24 bg-gray-300"></div>
          <div className="flex flex-wrap text-center">
            <span className="w-full text-5xl text-[#19A672] font-bold ">
              380k+
            </span>
            <span className="w-full">delivery partners</span>
          </div>
          <div className="w-[.1rem] h-24 bg-gray-300"></div>
          <div className="flex flex-wrap text-center">
            <span className="w-full text-5xl text-[#19A672] font-bold ">
              650+
            </span>
            <span className="w-full">cities in India</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryPioneer;
