import logoHeaderImg from "/img/fud-spot-log-w.png";
import useSwiggyApi from "../utils/useSwiggiApi";
import LinkedinFollow from "../utils/icons/LinkedinFollow";
import { LINKEDIN_IMG } from "../utils/constants";

const Footer = () => {
  const swiggyData = useSwiggyApi();
  // console.log(swiggyData);

  return (
    <div>
      <div className="w-full h-auto bg-[#02060C] text-white">
        <div className="px-48 py-9">
          <div className="flex items-start justify-between">
            <div className="space-y-4">
              <div className=" flex items-center gap-x-5">
                <img className=" w-10" src={logoHeaderImg} />
                <span className="font-bold text-white text-2xl">FudSpot</span>
              </div>
              <div className="space-y-4">
                <div className="text-sm text-gray-400">
                  Designed and Developed by
                  <br />
                  <span className="font-bold">Sreelesh A</span>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/sreelesha/"
                    target="_blank"
                  >
                    <div className="  border-[.01rem] p-3 rounded-md flex gap-3   border-gray-400">
                      <div className="text-md text-gray-200">
                        Let's connect!
                      </div>
                      <div className="w-20">
                        <img src={LINKEDIN_IMG} />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-40">
              <div className="space-y-3">
                <span className="font-bold">Company</span>
                <ul className="text-gray-400 space-y-3">
                  <li>About</li>
                  <li>Careers</li>
                  <li>Team</li>
                  <li>FudSpot One</li>
                  <li>FudSpot Instamart</li>
                  <li>FudSpot Genie</li>
                </ul>
              </div>
              <div className="space-y-3">
                <span className="font-bold">Contact Us</span>
                <ul className="text-gray-400 space-y-3">
                  <li>Help & Support</li>
                  <li>Partner with us</li>
                  <li>Ride with us</li>
                </ul>
              </div>
              <div className="space-y-3">
                <span className="font-bold">Legal</span>
                <ul className="text-gray-400 space-y-3">
                  <li>Terms & Conditions</li>
                  <li>Cookie Policy</li>
                  <li>Privacy policy</li>
                  <li>Investor Relations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
