import React from "react";
import { Outlet } from "react-router-dom";
import LeftContainer from "./component/LeftContainer";
import ProfileContainer from "./component/ProfileContainer";
import "./layouts.css";

interface LayoutProps {
  leftPanelOnly?: boolean;
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ leftPanelOnly = false, children }) => {
  return (
    <div className="main-container grid">
      <LeftContainer />
      {leftPanelOnly ? children : <Outlet />}
      {!leftPanelOnly && <ProfileContainer />}
    </div>
  );
};

export default Layout;
