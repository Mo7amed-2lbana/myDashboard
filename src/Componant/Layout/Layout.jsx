import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./../navBar/NavBar";
import SideBar from "./../SideBar/SideBar";

export default function Layout() {
  return (
    <>
      <div className=" ps-0">
        <div className="d-flex">
            <div className="bg-white">
              <SideBar />
          </div>
            <div className=" pt-2 flex-grow-1">
              <NavBar />
              <Outlet></Outlet>
            </div>
        </div>
      </div>
    </>
  );
}
