import MobileMenuItem from "./MobileMenuItem";
import navigation from "../data/navigation";

const MobileMenu = () => {
  const primaryLinks = navigation.map((item) => {
    return <MobileMenuItem item={item} />;
  });

  return (
    <div className="absolute filter drop-shadow-2xl bg-white rounded-md font-semibold  w-5/6 font-overpass mx-auto mt-5 right-0 left-0 text-very-dark-blue transform-all duration-300 z-10">
      <ul className="flex flex-col mx-auto pt-2">{primaryLinks}</ul>
      <hr className="mx-6"></hr>
      <div className="flex flex-col mx-auto my-3">
        <a href="/" className="flex justify-center mx-auto my-2 ">
          Login
        </a>
        <button
          type="button"
          className=" mx-auto filter drop-shadow-xl bg-background-gradient text-white font-bold px-8 py-2 rounded-full my-2 hover:bg-very-light-red hover:text-white transition duration-300"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
