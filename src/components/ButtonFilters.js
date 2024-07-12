const ButtonFilters = () => {
  return (
    <div className="button-filter flex gap-x-3  text-gray-500">
      <button
        className=" border border-gray-400 px-4 rounded-xl"
        onClick={topRatedResto}
      >
        Rating 4.2+
      </button>
      <button
        className="border border-gray-400 px-4 rounded-xl"
        onClick={mgRoadFilter}
      >
        Near M G Road
      </button>
      <button className="border border-gray-400 px-4 rounded-xl" onClick={""}>
        Pure Veg
      </button>
      <button className="border border-gray-400 px-4 rounded-xl" onClick={""}>
        Fast Delivery
      </button>
      <button className="border border-gray-400 px-4 rounded-xl" onClick={""}>
        Offers
      </button>
      <button className="border border-gray-400 px-4 rounded-xl" onClick={""}>
        ₹300-600
      </button>
      <button className="border border-gray-400 px-4 rounded-xl" onClick={""}>
        Less than ₹300
      </button>
    </div>
  );
};

export default ButtonFilters;
