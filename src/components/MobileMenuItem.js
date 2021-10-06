import dropDownArrowDark from "../images/icon-arrow-dark.svg";

const MobileMenuItem = (props) => {
  return (
    <div className="flex justify-center">
      <li className="flex my-4 items-center ">
        <a href="/" className="flex items-center">
          {props.item.title}
          <img className="ml-2" src={dropDownArrowDark} alt="dropdown arrow" />
        </a>
      </li>
    </div>
  );
};

export default MobileMenuItem;
