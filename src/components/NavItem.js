import dropDownArrow from "../images/icon-arrow-light.svg";

const NavItem = (props) => {
  return (
    <li className=" opacity-75 hover:opacity-100">
      <button className="text-white font-bold  flex items-center" href="/">
        {props.title}
        <img className="ml-1 " src={dropDownArrow}></img>
      </button>
    </li>
  );
};

export default NavItem;
