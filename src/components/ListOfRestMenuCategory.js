import { title } from "process";
import { RESTO_IMG_LINK } from "../utils/constants";
import { useState } from "react";

const ListOfRestMenuCategory = ({ categories }) => {
  //   console.log(categories);
  return (
    <div className="">
      <div className=" ">
        {categories && categories.map((res) => <NestedCategories data={res} />)}
      </div>
      <div className=""></div>
    </div>
  );
};

const NestedCategories = ({ data }) => {
  const [caretIcon, setCaretIcon] = useState("fa-solid fa-chevron-up");
  const [showSubCategoryList, setShowSubCategoryList] = useState(true);
  //   console.log(data);
  const showListOfMenu = () => {
    // setCaretIcon("fa-solid fa-chevron-down");
  };

  return (
    <div className="w-full ">
      <div
        className=" justify-between flex flex-wrap w-full   items-center "
        onClick={showListOfMenu()}
      >
        <div className="font-semibold text-sm">{data.title}</div>
        <i class={caretIcon}></i>
      </div>
      <div>
        <ItemsUnderNestedCategories data={data} />
      </div>
    </div>
  );
};

const ItemsUnderNestedCategories = ({ data }) => {
  const info = data?.itemCards;
  console.log(info);
  return (
    <div>
      <div>
        {info &&
          info.map((res) => (
            <div className="my-5" key="res?.card?.info?.id">
              <div className=" flex justify-between items-center my-10">
                <div className="w-8/12 space-y-2">
                  <div></div>
                  <div className=" flex font-semibold text-lg text-gray-600">
                    {res?.card?.info?.name}
                  </div>
                  <div className=" flex font-medium ">
                    ₹
                    {res?.card?.info?.finalPrice
                      ? res?.card?.info?.finalPrice / 100
                      : res?.card?.info?.defaultPrice
                      ? res?.card?.info?.defaultPrice / 100
                      : res?.card?.info?.price / 100}
                  </div>

                  {res?.card?.info?.ratings?.aggregatedRating?.rating && (
                    <div className=" flex  text-sm">
                      <span className="text-green-600  items-center flex mr-[.2rem]">
                        <i class="fa-solid fa-star text-green-600 fa-xs"></i>
                        {res?.card?.info?.ratings?.aggregatedRating?.rating}
                      </span>
                      <span className="text-gray-500">
                        (
                        {
                          res?.card?.info?.ratings?.aggregatedRating
                            ?.ratingCountV2
                        }
                        )
                      </span>
                    </div>
                  )}
                  <div>
                    <p className="text-gray-500 text-xs">
                      {res?.card?.info?.description}
                    </p>
                  </div>
                </div>

                <div className="relative ">
                  {res?.card?.info?.imageId ? (
                    <img
                      className="w-36 h-36 rounded-2xl"
                      src={RESTO_IMG_LINK + res?.card?.info?.imageId}
                      alt=""
                    />
                  ) : (
                    <div className="w-36 h-36 rounded-2xl bg-gray-100"></div>
                  )}
                  <div className="absolute bg-white cursor-pointer hover:bg-gray-100  font-bold text-green-600 bottom-[-1rem] shadow-md mx-6 py-1  px-7 w-24 h-8 rounded-lg items-center ">
                    ADD
                  </div>
                </div>
              </div>
              <hr className="my-10" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListOfRestMenuCategory;
