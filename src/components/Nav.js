import React, { useState } from "react";
import brandLogo from "../images/logo.svg";
import hamburgerMenu from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";
import navigation from "../data/navigation";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";

const Nav = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const primaryLinks = navigation.map((category) => {
    return (
      <NavItem key={category.id} id={category.id} title={category.title} />
    );
  });

  const handleMobileMenuClick = () => {
    setMobileNavOpen(!mobileNavOpen);

    // Changes image for menu button
    var icon = document.getElementById("menu-icon");
    if (!mobileNavOpen) {
      icon.src = closeIcon;
    } else {
      icon.src = hamburgerMenu;
    }
  };

  return (
    <nav className="">
      <div className="container px-8 max-w-6xl mx-auto pt-10">
        <div className="flex justify-between">
          {/* Logo */}
          <div className="flex space-x-4">
            <div className="flex items-center">
              <a href="/" className="">
                <img
                  className="w-18 h-auto hover:opacity-80 transition duration-300"
                  src={brandLogo}
                  alt="Brand Logo"
                />
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
            <button type="button" className="btn-nav transition duration-200">
              Login
            </button>
            <button type="button" className="btn-white">
              Sign Up
            </button>
          </div>
          {/* Mobile Button*/}
          <div className="md:hidden flex items-center">
            <button type="button" onClick={handleMobileMenuClick}>
              <img
                id="menu-icon"
                src={hamburgerMenu}
                alt="mobile menu button"
              />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <MobileMenu open={mobileNavOpen} />
    </nav>
  );
};

export default Nav;

// {/* Mobile Menu */}
// <div className="">
//   <div className=" ">

//   </div>
// </div>
