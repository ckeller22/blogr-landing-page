const NavMenu = ({ links }) => {
  const items = links.map((link) => {
    return (
      <li className="ml-6 pr-2 mr-10 my-2 ">
        <a className="font-normal hover:font-bold text-very-dark-blue" href="/">
          {link}
        </a>
      </li>
    );
  });

  return (
    <div className="absolute bg-white rounded-md filter drop-shadow-xl mt-3 w-52">
      <ul className="flex flex-col my-6">{items}</ul>
    </div>
  );
};

export default NavMenu;
