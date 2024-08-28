import { useState } from "react";
import { SWIGGY_DELEVERY_VECTOR_STAND } from "../utils/constants";

const MissionVision = () => {
  const [handleMissionVision, setHandleMissionVision] = useState({
    mission: true,
    vision: false,
    values: false,
    walkthrough: false,
  });

  return (
    <div className="sm:px-56 sm:py-10 ">
      <div className="text-2xl items-center justify-center flex gap-7">
        {handleMissionVision.mission ? (
          <div className=" bg-[#fe4f05] text-white border-[.1rem] w-52 h-12 flex items-center justify-center rounded-xl">
            Mission
          </div>
        ) : (
          <div
            onClick={() =>
              setHandleMissionVision((prevState) => ({
                mission: true,
              }))
            }
            className=" hover:bg-[#fe4f05] hover:text-white border-[.1rem] w-52 h-12 flex items-center justify-center rounded-xl"
          >
            Mission
          </div>
        )}

        {handleMissionVision.vision ? (
          <div className=" bg-[#fe4f05] text-white border-[.1rem] w-52 h-12 flex items-center justify-center rounded-xl">
            Vision
          </div>
        ) : (
          <div
            onClick={() =>
              setHandleMissionVision((prevState) => ({
                vision: true,
              }))
            }
            className=" hover:bg-[#fe4f05] hover:text-white border-[.1rem] w-52 h-12 flex items-center justify-center rounded-xl"
          >
            Vision
          </div>
        )}

        {handleMissionVision.values ? (
          <div className=" bg-[#fe4f05] text-white border-[.1rem] w-52 h-12 flex items-center justify-center rounded-xl">
            Values
          </div>
        ) : (
          <div
            onClick={() =>
              setHandleMissionVision((prevState) => ({
                values: true,
              }))
            }
            className=" hover:bg-[#fe4f05] hover:text-white border-[.1rem] w-52 h-12 flex items-center justify-center rounded-xl"
          >
            Values
          </div>
        )}
        {handleMissionVision.walkthrough ? (
          <div className=" bg-[#fe4f05] text-white border-[.1rem] w-52 h-12 flex items-center justify-center rounded-xl">
            Walkthrough
          </div>
        ) : (
          <div
            onClick={() =>
              setHandleMissionVision((prevState) => ({
                walkthrough: true,
              }))
            }
            className=" hover:bg-[#fe4f05] hover:text-white border-[.1rem] w-52 h-12 flex items-center justify-center rounded-xl"
          >
            Walkthrough
          </div>
        )}
      </div>
      <div>
        {handleMissionVision.mission && (
          <div className="flex items-center justify-center gap-x-16 py-14">
            <div className="w-1/2 ">
              <img className="scale-125" src={SWIGGY_DELEVERY_VECTOR_STAND} />
            </div>
            <div className="flex flex-wrap gap-y-3 w-1/2">
              <span className="w-full text-3xl font-semibold">Mission</span>
              <span className=" w-[90%] text-gray-500">
                Our mission is to elevate the quality of life of the urban
                consumer by offering unparalleled convenience. Convenience is
                what makes us tick. It’s what makes us get out of bed and say,
                “Let’s do this.”
              </span>
            </div>
          </div>
        )}

        {handleMissionVision.vision && (
          <div>
            <div className="flex items-center justify-center py-24 ">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/fLz2fgU_x1Q?si=BmSX3rzRdGJHijMC"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        )}

        {handleMissionVision.values && (
          <div className="flex gap-x-8 py-24 px-4 items-center">
            <div className="w-1/2 flex flex-wrap  p-3 ">
              <div className="text-2xl w-full font-bold mb-5">Values</div>
              <div className="w-full text-gray-500">
                Our actions are strongly defined by the Swiggy values. Through
                ups, downs, and everything in between; Swiggsters put these
                values into practice in their everyday ways of working. Read on
                to get a taste of how Swiggsters live and breathe these values
                and how it forms the backbone of our culture.
              </div>
              <div className="bg-[#fe4f05] px-4 py-2 rounded-lg text-white font-semibold mt-5">
                Know more
              </div>
            </div>
            <div className="w-1/2">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/TjEK0MbJUz4?si=Xp3mxw10C1HByKgI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        )}

        {handleMissionVision.walkthrough && (
          <div className="flex gap-x-8 py-24 px-4 items-center">
            <div className="w-1/2 flex flex-wrap  p-3 gap-y-6">
              <div className="text-2xl w-full font-bold ">Walkthrough</div>
              <div className="w-full text-gray-500">
                Old love with young love feels. Watch the story of two empty
                nesters, Shailja and Pradeep, as they navigate through love,
                life, food, and a badminton court
              </div>
            </div>
            <div className="w-1/2">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/aTikx7ivKmg?si=AT5x0wJTxPyOM9RN"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        )}
      </div>

      <div></div>
    </div>
  );
};

export default MissionVision;
