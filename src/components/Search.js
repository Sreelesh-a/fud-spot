import { AVATAR_IMG } from "../utils/constants";
import WhatsOnYourMind from "./WhatsOnYourMind";
import WhatsOYMindMobile from "./WhatsOYMindMobile";
import TopRestoChains from "./TopRestoChains";
import { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import useSwiggyApi from "../utils/useSwiggiApi";
import WhatsOYMindFull from "./WhatsOYMindFull";
import { Link } from "react-router-dom";
const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [seachInput, setSearchInput] = useState(
    "Search for restaurants and foods"
  );
  const [searchingResult, setSearchingResult] = useState([]);
  const [listofResto, setListOfRest0] = useState([]);

  const swiggyApi = useSwiggyApi();
  const restoInfo =
    swiggyApi?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  useEffect(() => {
    if (restoInfo) {
      setListOfRest0(restoInfo || []);
    }
  }, [restoInfo]);

  //   console.log(restData);

  return (
    <div className=" px-7 md:px-20 lg:px-80 sm:mb-0 mb-32 sm:py-9 space-y-6 mt-28">
      <div className=" w-full  h-12 border border-gray-400 rounded-sm flex items-center justify-between ">
        <input
          className="w-11/12 h-full text-gray-400 p-4"
          placeholder={seachInput}
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            let filteredList = listofResto.filter((res) =>
              res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );
            // console.log(searchText);

            setSearchingResult(filteredList);
          }}
        ></input>
        <i className="fa-solid fa-magnifying-glass text-gray-500 p-4"></i>
      </div>
      <div className="space-y-4 sm:mb-0 mb-20">
        {searchingResult.length == 0 ? (
          <div>
            <div className="hidden sm:block">
              <WhatsOnYourMind />
            </div>
            <div className="sm:hidden">
              <WhatsOnYourMind />
            </div>
          </div>
        ) : (
          searchingResult &&
          searchingResult.map((res) => (
            <Link
              to={"/resto-menu/" + res?.info.id}
              key={res?.info?.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="mb-3">
                <SearchResult data={res?.info} />
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
