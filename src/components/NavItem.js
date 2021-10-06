import dropDownArrow from "../images/icon-arrow-light.svg";

const NavItem = (props) => {
  return (
    <li className="">
      <button
        className="btn-nav flex items-center transition duration-200 relative"
        href="/"
      >
        {props.title}
        <img className="ml-1 " src={dropDownArrow} alt="dropdown arrow"></img>
      </button>
    </li>
  );
};

export default NavItem;
