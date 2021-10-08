import { useState } from "react";
import dropDownArrowDark from "../images/icon-arrow-dark.svg";
import MobileLinkMenu from "./MobileLinkMenu";

const MobileMenuItem = (props) => {
  const [menuOpen, setOpen] = useState(false);

  return (
    <div className=" flex justify-center text-very-dark-blue opacity-8 ">
      <li className=" flex flex-col my-4 items-center w-full mx-6 ">
        <button
          className=" font-medium flex items-center "
          onClick={() => setOpen(!menuOpen)}
        >
          {props.item.title}
          <img className="ml-2" src={dropDownArrowDark} alt="dropdown arrow" />
        </button>
        {menuOpen && <MobileLinkMenu links={props.item.links} />}
      </li>
    </div>
  );
};

export default MobileMenuItem;
