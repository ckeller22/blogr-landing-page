import React, { useState } from "react";
import brandLogo from "../images/logo.svg";
import { navigation } from "../data/navigation";

const Nav = () => {
  const [navLinks, setNavLinks] = useState(navigation);

  return (
    <nav className="absolute flex items-center bg-red-500">
      <div className="flex"></div>
    </nav>
  );
};

export default Nav;
