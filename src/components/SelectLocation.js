import { SelectLocationContext } from "../utils/LocationContext";

const SelectLocation = (props) => {
  const { setDisplaySelectLocation, displaySelectLocation, setSelectArea } =
    props;
  //   console.log(displaySelectLocation);
  return (
    <div className="fixed flex items-center min-h-screen  z-50  w-6/12  h-auto  ml-80">
      {displaySelectLocation == true && (
        <>
          <div className="bg-slate-100 w-full  rounded-3xl shadow-md  ">
            <div className="p-11">
              <div className="font-bold text-xl py-3 flex justify-between">
                <div>Choose Your Location</div>
                <div>
                  <i
                    class="fa-regular fa-circle-xmark fa-lg cursor-pointer"
                    onClick={() => {
                      setDisplaySelectLocation(false);
                    }}
                  ></i>
                </div>
              </div>
              <ul className="text-lg font-semibold grid-cols-1 space-y-1 px-2">
                <li
                  className="cursor-pointer"
                  onClick={(e) => {
                    setSelectArea(e.target.textContent);
                    setDisplaySelectLocation(false);
                  }}
                >
                  Kochi
                </li>
                <hr className="text-black"></hr>
                <li
                  className="cursor-pointer"
                  onClick={(e) => {
                    setSelectArea(e.target.textContent);
                    setDisplaySelectLocation(false);
                  }}
                >
                  Bangalore
                </li>
                <hr className="text-black"></hr>
                <li
                  className="cursor-pointer"
                  onClick={(e) => {
                    setSelectArea(e.target.textContent);
                    setDisplaySelectLocation(false);
                  }}
                >
                  Kozhikode
                </li>
                <hr className="text-black"></hr>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SelectLocation;
