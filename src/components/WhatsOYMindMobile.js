import { useState, useEffect } from "react";
import useSwiggyApi from "../utils/useSwiggiApi";
import { ShimmerWhatsOnYourMind } from "./ShimmerCard";
import { SWIGGY_CAROUSEL_API } from "../utils/constants";
import { Link } from "react-router-dom";
import WhatsOYMindShimmer from "../utils/WhatsOYMindShimmer";

const WhatsOYMindMobile = () => {
  const [swiggyInfo, setSwiggyInfo] = useState([]);
  let swiggyApi = useSwiggyApi();

  const handleClickTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (swiggyApi) {
      setSwiggyInfo(
        (swiggyApi && swiggyApi?.cards[0]?.card?.card?.imageGridCards?.info) ||
          []
      );
    }
  }, [swiggyApi]);

  // const ShimmerUi = () => {
  //   if (swiggyInfo.length == 0) {
  //     return <WhatsOYMindShimmer />;
  //   }
  // };

  const regex = /collections\/(\d+)\?/i;

  //   console.log(swiggyInfo[0].id);
  return (
    <div>
      <div className="">
        <div className="">
          <div className=" flex justify-between ">
            <div className="font-bold lg:text-2xl sm:text-sm">
              What's on your mind?
            </div>
          </div>
          {/* <ShimmerUi /> */}
          {swiggyInfo.length == 0 ? (
            <WhatsOYMindShimmer />
          ) : (
            <div className="">
              <div className=" relative h-52 w-screen   overflow-x-auto  ">
                <div className="  ">
                  <div className="flex flex-wrap ">
                    {swiggyInfo &&
                      swiggyInfo?.map((d) => (
                        <div key={d?.id} className="">
                          <Link
                            onClick={handleClickTop}
                            to={
                              "/collections/" +
                              regex.exec(d?.action?.link)[1] +
                              d?.description
                            }
                          >
                            <img
                              className="w-20  flex-shrink-0"
                              src={SWIGGY_CAROUSEL_API + d?.imageId}
                            />
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhatsOYMindMobile;
