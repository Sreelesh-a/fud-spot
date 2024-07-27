import { title } from "process";

import { useState } from "react";
import ItemsUnderNestedCategories from "./ItemsUnderNestedCategories";

const ListOfRestMenuCategory = ({ categories }) => {
  // console.log(categories);
  return (
    <div className="">
      <div className=" ">
        {categories &&
          categories.map((res) => (
            <NestedCategories key={res?.card?.info?.id} data={res} />
          ))}
      </div>
      <div className=""></div>
    </div>
  );
};

export const NestedCategories = ({ data }) => {
  const [caretIcon, setCaretIcon] = useState("fa-solid fa-chevron-down");
  const [showSubCategoryList, setShowSubCategoryList] = useState(false);

  const clickHandle = () => {
    setShowSubCategoryList(!showSubCategoryList);
  };

  return (
    <div className="w-full ">
      <div
        className=" justify-between flex flex-wrap w-full cursor-pointer   items-center "
        onClick={clickHandle}
      >
        <div className="font-semibold text-gray-700 ">
          {data.title} ({data.itemCards.length})
        </div>
        <i
          class={
            showSubCategoryList
              ? "fa-solid fa-chevron-up"
              : "fa-solid fa-chevron-down"
          }
        ></i>
      </div>
      {!showSubCategoryList && <hr className="my-3" />}
      <div>
        {data?.itemCards &&
          data?.itemCards.map(
            (res, index) =>
              showSubCategoryList && (
                <ItemsUnderNestedCategories
                  data={res}
                  f
                  key={res?.card?.info?.id}
                />
              )
          )}
      </div>
    </div>
  );
};

export default ListOfRestMenuCategory;
