import "./styles/leftcontainer.css";
import { GoHome } from "react-icons/go";
import { GoInfo } from "react-icons/go";
import { FiSend } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";

const LeftContainer = () => {
  return (
    <>
      <div className="d-flex columns j-space-between a-center p-y-10">
        <div className="logo ">
          <img src="logo.png" alt="" />
        </div>
        <div className="gap-25 d-flex columns">
          <GoHome className="logo" size={30} color="#636A7E" />
          <GoInfo className="logo" size={30} color="#636A7E" />
          <FiSend className="logo" size={30} color="#636A7E" />
        </div>
        <div>
          <FaBars className="logo" size={30} color="#636A7E" />
        </div>
      </div>
    </>
  );
};

export default LeftContainer;
