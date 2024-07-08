import ListOfRestMenuCategory from "./ListOfRestMenuCategory";

const RestoMenuCategory = ({ restData }) => {
  // console.log(restData?.card?.card?.categories);
  const { categories } = restData?.card?.card;
  // console.log(categories);
  const { title } = restData?.card?.card;
  return (
    <div className="py-2  px-5">
      <div className="flex justify-between  items-center ">
        <div className="font-bold py-4 text-lg">{title}</div>
        {/* <i class="fa-solid fa-chevron-up "></i> */}
      </div>
      <div className="">
        <ListOfRestMenuCategory categories={categories} />
      </div>
    </div>
  );
};

export default RestoMenuCategory;
