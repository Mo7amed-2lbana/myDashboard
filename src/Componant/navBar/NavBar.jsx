import React from "react";
import "./navbar.scss";

export default function NavBar() {
  return (
    <>
      <nav className="px-3 mt-2">
        <div className="">

          <div className="parent d-flex justify-content-between  align-items-center ">

            <div className="search-inpt position-relative">
              <i className=" fa fa-search position-absolute top-50 translate-middle-y"></i>
              <input
                type="text"
                placeholder="Type A Keyword"
                className="ps-5 form-control"
              />
            </div>

            <div className="icons d-flex align-items-center">
              <div className="alarm position-relative">
                <i class="fa-regular fa-bell me-3 fa-lg "></i>
              </div>
              <div className="user">
                <img src={require("../../images/avatar.png")} alt="avatar" />
              </div>
            </div>

          </div>

        </div>

      </nav>
    </>
  );
}
