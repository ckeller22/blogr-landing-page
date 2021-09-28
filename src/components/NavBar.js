import { ReactComponent as Logo } from "../images/logo.svg";

const NavBar = () => {
  return (
    <nav className="container flex items-center bg-light-red font-ubuntu">
      <div className="flex">
        <Logo />
      </div>
      <div>
        <ul className="flex text-white text-lg font-bold">
          <li className="mr-6">
            <a href="/">Product</a>
          </li>
          <li className="mr-6">
            <a href="/">Company</a>
          </li>
          <li className="mr-6">
            <a href="/">Connect</a>
          </li>
        </ul>
      </div>
      <div className="float-right">
        <ul className="flex text-white text-lg font-bold ">
          <li className="mr-6">
            <a href="/">Login</a>
          </li>
          <li className="mr-6">
            <a href="/">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
