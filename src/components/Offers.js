const Offers = () => {
  return (
    <>
      {/* <ShimmerCard /> */}
      <div className="text-center mt-32">
        <h1>Offer Closes Soon...</h1>
        <div className="text-2xl font-bold">New Offers</div>
        <div className="flex justify-center gap-6 p-6 animate-pulse">
          <div className="w-44 h-32  bg-gray-200 rounded-xl"></div>
          <div className="w-44 h-32  bg-gray-200 rounded-xl"></div>
          <div className="w-44 h-32  bg-gray-200 rounded-xl"></div>
          <div className="w-44 h-32  bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    </>
  );
};

export default Offers;
