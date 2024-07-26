import { AppLayout } from "../app";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="p-56">
      <div className="text-center space-y-4">
        <div className=" font-semibold text-4xl ">We'll be back shortly</div>

        <div className="text-gray-500">
          We are fixing a temporary glitch. Sorry for the inconvenience.
        </div>
        <Link to={"/"}>
          <div className="bg-orange-400 w-32 h-11 mx-auto my-4 text-white  content-center font-bold">
            Go Back
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Error;
