import { useState } from "react";
import dropDownArrowDark from "../images/icon-arrow-dark.svg";
import MobileLinkMenu from "./MobileLinkMenu";

const MobileMenuItem = (props) => {
  const [slideOutOpen, setSlideOutOpen] = useState(false);

  const handleCategoryClicked = () => {
    setSlideOutOpen(!slideOutOpen);
  };

  return (
    <div className=" flex justify-center text-very-dark-blue opacity-8 ">
      <li className=" flex flex-col my-4 items-center w-full mx-6 transition duration-300 transform hover:scale-105">
        <button
          className=" font-medium flex items-center "
          onClick={handleCategoryClicked}
        >
          {props.item.title}
          <img
            className={`transform transition-transform duration-200 ease-in ml-2 ${
              slideOutOpen ? "rotate-180" : ""
            }`}
            src={dropDownArrowDark}
            alt="dropdown arrow"
          />
        </button>
        <MobileLinkMenu open={slideOutOpen} links={props.item.links} />
      </li>
    </div>
  );
};

export default MobileMenuItem;
