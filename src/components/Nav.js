import React, { useState } from "react";
import brandLogo from "../images/logo.svg";
import hamburgerMenu from "../images/icon-hamburger.svg";
import navigation from "../data/navigation";
import NavItem from "./NavItem";

const Nav = () => {
  const [navLinks, setNavLinks] = useState(navigation);

  const primaryLinks = navigation.map((link) => {
    return <NavItem title={link.title} />;
  });

  return (
    <nav className="">
      <div className="container px-8 max-w-6xl mx-auto pt-10">
        <div className="flex justify-between">
          {/* Logo */}
          <div className="flex space-x-4">
            <div>
              <a href="/" className="flex items-center">
                <img className="w-18 h-auto" src={brandLogo} alt="Brand Logo" />
              </a>
            </div>
            {/* Primary Nav*/}
            <div className="hidden md:flex items-center">
              <ul className="flex items-center space-x-10 ml-10">
                {primaryLinks}
              </ul>
            </div>
          </div>
          {/* Secondary Nav */}
          <div className="hidden md:flex items-center space-x-10">
            <button type="button">Login</button>
            <button type="button">Sign Up</button>
          </div>
          {/* Mobile Button*/}
          <div className="md:hidden flex items-center">
            <button type="button">
              <img src={hamburgerMenu} alt="Hamburger Menu" />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="hidden">Mobile menu goes here</div>
    </nav>
  );
};

export default Nav;

// {/* Mobile Menu */}
// <div className="">
//   <div className=" ">

//   </div>
// </div>
