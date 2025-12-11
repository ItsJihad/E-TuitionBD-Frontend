import React from "react";
import { Outlet } from "react-router";
import Headerbar from "../components/header/Headerbar";
import Footerbar from "../components/footer/Footerbar";

function HomeLayout() {
  return (
    <div className="font-[montserrat]">
      <Headerbar></Headerbar>
      <Outlet></Outlet>
      <Footerbar></Footerbar>
    </div>
  );
}

export default HomeLayout;
