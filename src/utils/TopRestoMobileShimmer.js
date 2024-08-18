const TopRestoMobileShimmer = () => {
  return (
    <div className="mt-6 py-2">
      <div className="flex gap-x-4 animate-pulse items-center">
        <div className="w-36 rounded-xl h-28 bg-gray-200"></div>
        <div className="space-y-2">
          <div className="w-28 bg-gray-200 h-5 rounded-xl"></div>
          <div className="w-36 bg-gray-200 h-5 rounded-xl"></div>
          <div className="w-24 bg-gray-200 h-5 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default TopRestoMobileShimmer;
