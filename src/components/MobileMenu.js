import MobileMenuItem from "./MobileMenuItem";
import navigation from "../data/navigation";

const MobileMenu = () => {
  const primaryLinks = navigation.map((item) => {
    return <MobileMenuItem item={item} />;
  });

  return (
    <div className="absolute filter drop-shadow-xl bg-white rounded-md  w-5/6 font-semibold font-overpass mx-auto transition-all duration-200">
      <ul className="flex flex-col  pt-2">{primaryLinks}</ul>
      <hr></hr>
      <div className="flex flex-col my-3">
        <a href="/" className="flex justify-center mx-auto my-2">
          Login
        </a>
        <button
          type="button"
          className=" mx-auto bg-background-gradient text-white font-bold px-8 py-2 rounded-full my-2"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
