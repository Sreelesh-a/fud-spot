import { useSelector, useDispatch } from "react-redux";
import { addUser, handleloginStatus } from "../utils/userSlice";
import { motion } from "framer-motion";
import { SWIGGY_LOGIN_VECTOR } from "../utils/constants";
import { useState } from "react";

const SignUp = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  const { handle } = props;
  console.log();

  const userData = useSelector((store) => store.user.userData);
  const loginStatusCheck = useSelector((store) => store.user.loginStatus);
  console.log(userData);
  console.log(loginStatusCheck);
  const dispatch = useDispatch();
  const formSubmit = (event) => {
    event.preventDefault();
    // console.log(formData);
    dispatch(addUser(formData));
    dispatch(handleloginStatus(true));
    props.handle(false);
  };

  const handleLogout = () => {
    dispatch(handleloginStatus(false));
    props.handle(false);
    // dispatch(addUser(null));
  };

  const handleChange = (event) => {
    dispatch(
      addUser({
        [event.target.name]: event.target.value,
      })
    );
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute right-0 top-0  w-[100%] sm:w-1/3   z-10 ">
          <div className="  bg-white shadow-2xl h-screen px-5 sm:px-11 py-9">
            <div
              className=""
              onClick={() => {
                props?.handle(false);
              }}
            >
              <i class="fa-solid fa-xmark text-xl text-gray-500  "></i>
            </div>
            <div className="flex items-center justify-between ">
              <div className="py-6 space-y-2">
                <div className="text-3xl font-m">
                  {loginStatusCheck ? "Update Profile" : "Login"}
                </div>
                {!loginStatusCheck && (
                  <div className="font-light text-sm">
                    or <span className="text-[#FF5200]">create an account</span>
                  </div>
                )}

                <div className="border-x-0 h-[.1rem] w-12 bg-gray-700"></div>
              </div>
              .
              <div>
                <img className="w-24" src={SWIGGY_LOGIN_VECTOR} />
              </div>
            </div>
            <div className="py-6">
              {loginStatusCheck ? (
                <div>
                  <form onSubmit={formSubmit} className="space-y-3">
                    <input
                      name="name"
                      value={userData?.name && userData.name}
                      onChange={handleChange}
                      type="text"
                      className=" border-[.1rem] w-full h-16 px-3 "
                      placeholder="Name"
                      required
                    />
                    <input
                      value={userData?.mobile && userData?.mobile}
                      onChange={handleChange}
                      name="mobile"
                      type="number"
                      className=" border-[.1rem] w-full h-16 px-3 "
                      placeholder="Phone Number"
                      required
                    />
                    <input
                      value={userData?.email && userData?.email}
                      onChange={handleChange}
                      name="email"
                      type="email"
                      className=" border-[.1rem] w-full h-16 px-3 "
                      placeholder="Email"
                      required
                    />
                    <div className="flex items-center gap-3 py-2">
                      <button
                        type="submit"
                        className="w-2/3 h-10 bg-[#FF5200] text-white font-semibold"
                      >
                        UPDATE PROFILE
                      </button>
                      <div
                        onClick={handleLogout}
                        className="w-1/3 h-10 border-[.1rem] border-gray-300 text-gray-500 font-semibold flex items-center justify-center cursor-pointer"
                      >
                        Logout
                      </div>
                    </div>
                  </form>
                </div>
              ) : (
                <div>
                  <form onSubmit={formSubmit} className="space-y-3">
                    <input
                      name="name"
                      value={userData?.name && userData.name}
                      onChange={handleChange}
                      type="text"
                      className=" border-[.1rem] w-full h-16 px-3 "
                      placeholder="Name"
                      required
                    />
                    <input
                      value={userData?.mobile && userData?.mobile}
                      onChange={handleChange}
                      name="mobile"
                      type="number"
                      className=" border-[.1rem] w-full h-16 px-3 "
                      placeholder="Phone Number"
                      required
                    />
                    <input
                      value={userData?.email && userData?.email}
                      onChange={handleChange}
                      name="email"
                      type="email"
                      className=" border-[.1rem] w-full h-16 px-3 "
                      placeholder="Email"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full h-10 bg-[#FF5200] text-white font-semibold cursor-pointer"
                    >
                      LOGIN
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;
