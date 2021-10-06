import { useState } from "react";
import dropDownArrow from "../images/icon-arrow-light.svg";
import NavMenu from "./NavMenu";
import navigation from "../data/navigation";

const NavItem = ({ id, title }) => {
  const [open, setOpen] = useState(false);

  return (
    <li
      className=""
      onFocus={() => {
        setOpen(!open);
      }}
      onBlur={() => {
        setOpen(!open);
      }}
    >
      <button className="btn-nav flex items-center 0 relative py-2" href="/">
        {title}
        <img
          className={`transform transition-transform duration-200 ml-1 ${
            open ? "rotate-180" : ""
          }`}
          src={dropDownArrow}
          alt="dropdown arrow"
        ></img>
      </button>
      {open && <NavMenu links={navigation[id].links} />}
    </li>
  );
};

export default NavItem;
