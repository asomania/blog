import "./styles/leftcontainer.css";
import { useState } from "react";
import { GoHome } from "react-icons/go";
import { GoInfo } from "react-icons/go";
import { FiSend } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdModeNight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setTheme, setTab } from "../../state/theme";

const LeftContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tab = useSelector(
    (state: {
      tabPick: {
        tab: string;
      };
    }) => state.tabPick.tab
  );

  const theme = useSelector(
    (state: {
      themePick: {
        theme: boolean;
      };
    }) => state.themePick.theme
  );
  const [animate, setAnimate] = useState(false);
  const handleTab = (value: string) => {
    if (value === "home") {
      dispatch(setTab(value));
      navigate("/");
    } else {
      dispatch(setTab(value));
      navigate("/aboutme");
    }
  };
  const handleClick = (value: boolean) => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 100);
    dispatch(setTheme(value));
  };
  return (
    <>
      <div className="d-flex columns j-space-between a-center p-y-20">
        <div className="logo ">
          {theme ? (
            <MdOutlineWbSunny
              className={`icon ${animate ? "spin" : ""}`}
              size={30}
              onClick={() => handleClick(false)}
            />
          ) : (
            <MdModeNight
              className={`icon ${animate ? "spin" : ""}`}
              size={30}
              onClick={() => handleClick(true)}
            />
          )}
        </div>
        <div className="gap-25 d-flex columns">
          <GoHome
            className={`logo ${tab === "home" ? "icon-selected" : ""}`}
            size={30}
            color="#636A7E"
            onClick={() => handleTab("home")}
            style={{ cursor: "pointer" }}
          />
          <GoInfo
            className={`logo ${tab === "info" ? "icon-selected" : ""}`}
            size={30}
            color="#636A7E"
            onClick={() => handleTab("info")}
          />
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
