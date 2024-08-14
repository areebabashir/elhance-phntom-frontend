import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import linkedin1 from "../../assets/linkedin1.png";
import twiter from "../../assets/twiter.png";
const Footer = () => {
  return (
    <footer
      className="p-4 flex h-60 w-full"
      style={{
        background:
          "linear-gradient(hsla(200, 80%, 69%, 1), hsla(269, 100%, 65%, 1))",
      }}
    >
      <div
        className="m-auto flex flex-col md:flex-row items-center justify-between text-black space-y-4 md:space-y-0 py-8"
        style={{ width: "80%" }}
      >
        <div className="flex flex-col items-start space-y-4 w-full md:w-1/2">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Elancephantoms@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>First Floor CPED, UET Taxila</span>
          </div>
          {/* Add Button Here */}
        </div>

        <div className="flex space-x-4 text-white w-full md:w-1/2 justify-center md:justify-end">
          <a href="https://www.facebook.com/ElancePhantoms05?mibextid=ZbWKwL">
            <img src={facebook} className="w-10 h-10" />
          </a>
          <a href="https://www.instagram.com/elancephantoms.uett?igsh=ejZxZHd5c3YzcjRr">
            <img src={instagram} className="w-10 h-10" />
          </a>
          <a href="/">
            <img src={linkedin1} className="w-10 h-10" />
          </a>
          <a href="https://x.com/ElancePhantoms?t=hLZiO6A4EDJPqq_EnZD_sw&s=09">
            <img src={twiter} className="w-10 h-10" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
