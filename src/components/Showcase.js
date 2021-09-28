const Showcase = () => {
  return (
    <section className="showcase">
      <div className="overlay px-5 flex flex-col items-center justify-center text-center">
        <h1 className="font-bold text-4xl text-white">
          A modern publishing platform
        </h1>
        <p className="text-white">
          Grow your audience and build your online brand
        </p>
        <div>
          <button className="bg-white rounded-full py-2 px-4 text-light-red font-bold hover:bg-very-light-red hover:text-white">
            Start for Free
          </button>
          <button className="bg-transparent py-2 px-4 text-rounded text-white font-bold border border-white rounded-full hover:bg-white hover:text-light-red">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
