import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";

export default function SideBar() {
  return (
    <>
      <aside className=" sidebar vh-100">
        <div className="container">
          <div className="logo mb-4">
            <h4 className="text-center py-3 position-relative">Elbana</h4>
          </div>
          <ul className="lists list-unstyled">

            <li className="p-2 mb-1 rounded-3 active">
              <i className=" me-2 fa-regular fa-chart-bar fa-fw"></i>
              <Link className=" text-decoration-none text-black">
                Dashboard
              </Link>
            </li>

            <li className="p-2 mb-1 rounded-3 ">
              <i className=" me-2 fa-solid fa-gear fa-fw"></i>
              <Link className=" text-decoration-none text-black">Settings</Link>
            </li>

            <li className="p-2 mb-1 rounded-3">
              <i className=" me-2 fa-regular fa-user fa-fw"></i>
              <Link className=" text-decoration-none text-black">Profile</Link>
            </li>

            <li className="p-2 mb-1 rounded-3">
              <i className=" me-2 fa-solid fa-diagram-project fa-fw"></i>
              <Link className=" text-decoration-none text-black">Projects</Link>
            </li>

            <li className="p-2 mb-1 rounded-3">
              <i className=" me-2 fa-solid fa-graduation-cap fa-fw"></i>
              <Link className=" text-decoration-none text-black">Courses</Link>
            </li>

            <li className="p-2 mb-1 rounded-3">
              <i className=" me-2 fa-regular fa-circle-user fa-fw"></i>
              <Link className=" text-decoration-none text-black">Friends</Link>
            </li>

            <li className="p-2 mb-1 rounded-3">
              <i className=" me-2 fa-regular fa-file fa-fw"></i>
              <Link className=" text-decoration-none text-black">Files</Link>
            </li>

            <li className="p-2 rounded-3">
              <i className=" me-2 fa-regular fa-credit-card fa-fw"></i>
              <Link className=" text-decoration-none text-black">Plans</Link>
            </li>

          </ul>
        </div>
      </aside>
    </>
  );
}
