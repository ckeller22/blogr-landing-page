import backgroundImage from "../images/bg-pattern-intro.svg";
import Nav from "./Nav";

const Showcase = () => {
  return (
    <section className="showcase">
      <Nav />
      <div className="overlay px-5 -mt-10 flex flex-col items-center justify-center text-center ">
        <h1 className="font-bold text-4xl text-white">
          A modern publishing platform
        </h1>
        <p className="text-white">
          Grow your audience and build your online brand
        </p>
        <div className="flex items-center">
          <button
            type="button"
            className="text-center bg-white rounded-full mx-1 my-5 py-2 px-4 text-light-red font-bold hover:bg-very-light-red hover:text-white transition duration-200"
          >
            Start for Free
          </button>
          <button
            type="button"
            className="text-center bg-transparent mx-1 my-5 py-2 px-4 text-rounded text-white font-bold border border-white rounded-full hover:bg-white hover:text-light-red transition duration-200"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
