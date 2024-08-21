const MenuPageShimmerUI = () => {
  return (
    <div className="px-6 md:px-20 lg:px-80 mt-32 animate-pulse">
      <div className="my-12">
        <div className="flex items-center justify-center py-6">
          <div className=" relative border-black  bg-gradient-to-t from-gray-200 h-52 w-full   rounded-3xl ">
            <div className="absolute border-gray-200 border-[.1rem]   bg-white w-[97%] h-[93%]    left-[1.5%] rounded-3xl ">
              <div className="py-6 px-6 ">
                <div className="py-3">
                  <div className="flex gap-4 ">
                    <div className="relative w-1 h-11  bg-gray-100 mt-[.20rem]">
                      <div className="absolute top-0 left-0 flex flex-col justify-between h-full">
                        <div className="size-2 rounded-full bg-gray-300"></div>
                        <div className="size-2 rounded-full bg-gray-300"></div>
                      </div>
                    </div>

                    <div className="font-semibold text-sm space-y-2"></div>
                  </div>
                </div>
                <hr className="my-1" />
                <div className="py-2">
                  <div className="text-sm text-gray-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="bg-gray-100 w-full h-10 rounded-xl">
            <div className="py-5">
              <div className="flex items-center justify-between py-9">
                <div className="space-y-5">
                  <div className="bg-gray-100 rounded-xl w-40 h-5"></div>
                  <div className="bg-gray-100 rounded-xl  w-36 h-5"></div>
                  <div className="bg-gray-100 rounded-xl  w-32 h-5"></div>
                  <div className="bg-gray-100 rounded-xl   sm:w-96 h-5"></div>
                  <div className="bg-gray-100 rounded-xl  sm:w-96 h-5"></div>
                </div>
                <div className="relative">
                  <div className=" size-40 rounded-2xl bg-gray-100"></div>
                  <div className=" absolute top-32 left-6 rounded-md drop-shadow-sm bg-white w-28 h-9"></div>
                </div>
              </div>
              <div className="flex items-center justify-between py-9">
                <div className="space-y-5">
                  <div className="bg-gray-100 rounded-xl w-40 h-5"></div>
                  <div className="bg-gray-100 rounded-xl  w-36 h-5"></div>
                  <div className="bg-gray-100 rounded-xl  w-32 h-5"></div>
                  <div className="bg-gray-100 rounded-xl   sm:w-96 h-5"></div>
                  <div className="bg-gray-100 rounded-xl  sm:w-96 h-5"></div>
                </div>
                <div className="relative">
                  <div className=" size-40 rounded-2xl bg-gray-100"></div>
                  <div className=" absolute top-32 left-6 rounded-md drop-shadow-sm bg-white w-28 h-9"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPageShimmerUI;
