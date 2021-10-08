import MobileMenuItem from "./MobileMenuItem";
import navigation from "../data/navigation";
import classNames from "classnames";

const MobileMenu = ({ open }) => {
  const primaryLinks = navigation.map((item) => {
    return <MobileMenuItem item={item} />;
  });

  const tailwindClasses =
    " filter drop-shadow-2xl bg-white rounded-md font-semibold w-5/6 font-overpass mx-auto mt-5 right-0 left-0 text-very-dark-blue z-10 ";

  const displayMobileNavLinks = classNames(
    `${tailwindClasses} mobile-nav-menu`,
    {
      open: open,
    }
  );

  return (
    <div className={displayMobileNavLinks}>
      <ul className="flex flex-col mx-auto pt-2">{primaryLinks}</ul>
      <hr className="mx-6"></hr>
      <div className="flex flex-col mx-auto my-3">
        <a
          href="/"
          className="flex justify-center mx-auto my-2 transition duration-300 transform hover:scale-105"
        >
          Login
        </a>
        <button
          type="button"
          className=" mx-auto filter drop-shadow-xl bg-background-gradient text-white font-bold px-8 py-2 rounded-full my-2 hover:bg-very-light-red hover:text-white transition duration-300 transform hover:scale-105"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
