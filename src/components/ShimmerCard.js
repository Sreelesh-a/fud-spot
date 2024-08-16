const ShimmerCard = () => {
  return (
    <div className="grid grid-cols-4 justify-between mt-9 animate-pulse">
      <div className="grid grid-cols-1 space-y-1">
        <div className="w-56 h-40 bg-gray-200 rounded-xl"></div>
        <div className="w-24 h-4 bg-gray-200 rounded-md "></div>
        <div className="flex gap-2">
          <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
          <div className="w-32 h-4 bg-gray-100 rounded-md"></div>
        </div>

        <div className="w-24 h-4 bg-gray-200 rounded-md"></div>
      </div>
      <div className="grid grid-cols-1 space-y-1">
        <div className="w-56 h-40 bg-gray-200 rounded-xl"></div>
        <div className="w-24 h-4 bg-gray-200 rounded-md "></div>
        <div className="flex gap-2">
          <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
          <div className="w-32 h-4 bg-gray-100 rounded-md"></div>
        </div>

        <div className="w-24 h-4 bg-gray-200 rounded-md"></div>
      </div>
      <div className="grid grid-cols-1 space-y-1">
        <div className="w-56 h-40 bg-gray-200 rounded-xl"></div>
        <div className="w-24 h-4 bg-gray-200 rounded-md "></div>
        <div className="flex gap-2">
          <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
          <div className="w-32 h-4 bg-gray-100 rounded-md"></div>
        </div>

        <div className="w-24 h-4 bg-gray-200 rounded-md"></div>
      </div>
      <div className="grid grid-cols-1 space-y-1">
        <div className="w-56 h-40 bg-gray-200 rounded-xl"></div>
        <div className="w-24 h-4 bg-gray-200 rounded-md "></div>
        <div className="flex gap-2">
          <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
          <div className="w-32 h-4 bg-gray-100 rounded-md"></div>
        </div>

        <div className="w-24 h-4 bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );
};

export const ShimmerWhatsOnYourMind = () => {
  return (
    <div className="animate-pulse">
      <div className="grid grid-cols-6 px-1 sm:px-9 mt-5 justify-between sm:mt-8">
        <div className="bg-gray-300 size-11  sm:size-28 rounded-full"></div>
        <div className="bg-gray-300 size-11 sm:size-28 rounded-full"></div>
        <div className="bg-gray-300 size-11 sm:size-28 rounded-full"></div>
        <div className="bg-gray-300 size-11 sm:size-28 rounded-full"></div>
        <div className="bg-gray-300 size-11 sm:size-28 rounded-full"></div>
        <div className="bg-gray-300 size-11 sm:size-28 rounded-full"></div>
      </div>
    </div>
  );
};

export default ShimmerCard;
