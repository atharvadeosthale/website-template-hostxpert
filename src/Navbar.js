import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navBar bg-white z-50 fixed w-screen h-14 md:h-16 p-5 md:pl-36 md:pr-36 flex items-center place-content-between">
      <div className="navbar__leftContainer flex items-center">
        <div className="navBar__branding font-semibold text-xl">HostXpert</div>
        <ul className="navBar__links flex pointer-events-none opacity-0 md:pointer-events-auto md:opacity-100 md:ml-20">
          <li>
            <a href="#" className="navBar__link">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="navBar__link">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="navBar__link">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar__rightContainer">
        <a href="#" className="">
          Login
        </a>
      </div>
    </div>
  );
}

export default Navbar;
