import { Outlet } from "react-router-dom";
import LeftContainer from "./component/LeftContainer";
import ProfileContainer from "./component/ProfileContainer";
import "./layouts.css";
const Layout = () => {
  return (
    <>
      <div className="main-container grid ">
        <LeftContainer />
        <Outlet />
        <ProfileContainer />
      </div>
    </>
  );
};

export default Layout;
