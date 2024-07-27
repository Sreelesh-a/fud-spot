import ListOfRestMenuCategory from "./ListOfRestMenuCategory";
import { NestedCategories } from "./ListOfRestMenuCategory";
import ItemsUnderNestedCategories from "./ItemsUnderNestedCategories";
import { useState } from "react";

const RestoMenuCategory = ({ restData, recommend }) => {
  const [handleOpenMenu, setHandleOpenMenu] = useState(true);
  const [arrowControl, setArrowControl] = useState(true);
  // const [iconHandleControl,seticonHandleControl]=useState(true)

  // console.log(restData?.card?.card?.categories);
  const { categories } = restData?.card?.card;

  // console.log(restData);
  const { title } = restData?.card?.card;
  return (
    <div className="py-2  px-5">
      <div className="flex justify-between  items-center ">
        <div className="font-bold py-4 text-lg">{title}</div>
        {recommend?.itemCards && (
          <i
            class={
              arrowControl
                ? "fa-solid  cursor-pointer fa-chevron-down"
                : "fa-solid  cursor-pointer fa-chevron-up"
            }
            onClick={() => {
              setHandleOpenMenu(!handleOpenMenu);
              setArrowControl(!arrowControl);
            }}
          ></i>
        )}
      </div>
      <div className="">
        {handleOpenMenu &&
          recommend?.itemCards &&
          recommend?.itemCards.map((res) => (
            <ItemsUnderNestedCategories key={res?.card?.info?.id} data={res} />
          ))}
        <ListOfRestMenuCategory categories={categories} />
      </div>
    </div>
  );
};

export default RestoMenuCategory;
