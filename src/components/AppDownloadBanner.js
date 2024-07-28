import { APPSTORE_IMG, PLAYSTORE_IMG } from "../utils/constants";

const AppDownloadBanner = () => {
  return (
    <div>
      <div className="w-full h-auto bg-[#F0F0F5]">
        <div className=" py-5 px-48 flex items-center justify-between">
          <div className="font-bold text-2xl text-[#3D4046] p-1 font-[poppins]">
            For better experience,
            <br />
            Download the FudSpot app now
          </div>
          <div className="flex items-center gap-9">
            <img className="w-56" src={PLAYSTORE_IMG} />
            <img className="w-56" src={APPSTORE_IMG} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadBanner;
