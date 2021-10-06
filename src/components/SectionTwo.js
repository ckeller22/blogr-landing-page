import circlePattern from "../images/bg-pattern-circles.svg";

const SectionTwo = () => {
  return (
    <section className="dark-section">
      <div className="max-w-6xl mx-auto h-full">
        <div className="md:flex md:justify-end ">
          <div className="md:flex md:flex-col  md:max-w-md">
            <h2 className="pt-48 md:text-left md:mx-0 text-white text-center font-semibold text-4xl mx-10 mt-5 mb-2 leading-normal">
              State of the Art Infrastructure
            </h2>
            <p className="tracking-wide ont-light md:text-left md:px-0 text-white text-center mb-10 px-8 pb-20 ">
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
