import react, { useState } from "react";
import dropDownArrowDark from "../images/icon-arrow-dark.svg";
import navigation from "../data/navigation";
import MobileLinkMenu from "./MobileLinkMenu";

const MobileMenuItem = (props) => {
  const [menuOpen, setOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <li className="flex my-4 items-center ">
        <button
          className="flex items-center"
          onClick={() => setOpen(!menuOpen)}
        >
          {props.item.title}
          <img className="ml-2" src={dropDownArrowDark} alt="dropdown arrow" />
          {menuOpen && <MobileLinkMenu links={props.item.links} />}
        </button>
      </li>
    </div>
  );
};

export default MobileMenuItem;
