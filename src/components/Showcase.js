import Nav from "./Nav";

const Showcase = () => {
  return (
    <section className="showcase bg-fixed bg-top md:showcase-desktop">
      <Nav />
      <div className="overlay -mt-10 flex flex-col items-center justify-center text-center ">
        <h1 className="font-bold text-4xl text-white max-w-sm md:max-w-none md:text-6xl">
          A modern publishing platform
        </h1>
        <p className="text-white max-w-sm md:text-xl md:max-w-none">
          Grow your audience and build your online brand
        </p>
        <div className="flex items-center">
          <button type="button" className="btn-white mx-1 my-5 ">
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
