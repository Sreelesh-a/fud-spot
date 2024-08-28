import { RESTO_IMG_LINK2, SWIGGY_OFFER_LOGO_IMG } from "../utils/constants";

const DealsForYou = (props) => {
  const { description, header, logoBottom, offerLogo } = props.dealsList?.info;

  return (
    <div className="py-8">
      <div className="flex w-full ">
        <div className="w-72 border-[.1rem]  rounded-3xl h-20 flex items-center px-3 gap-x-2 justify-center">
          <div className="w-1/4">
            <img className="w-14" src={SWIGGY_OFFER_LOGO_IMG + offerLogo} />
          </div>
          <div className="3/4">
            <div className="font-bold text-lg">{header}</div>
            <div className=" text-xs font-semibold text-gray-500 truncate w-40">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsForYou;
