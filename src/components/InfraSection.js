import phonesIllustration from "../images/illustration-phones.svg";

const InfraSection = () => {
  return (
    <section className="mt-56 dark-section md:background-resize relative md:mt-10 md:mb-10">
      <div className="flex flex-col md:grid md:grid-cols-2 md:grid-flow md:items-center">
        <div className="relative">
          <img
            className="absolute mx-auto left-0 right-0 phone-image md:phone-image-reset"
            src={phonesIllustration}
            alt="phone illustration"
          />
        </div>

        <div className="md:my-20">
          <h2 className="md:mt-4  mt-48 md:text-left md:mx-0 text-white text-center font-semibold text-4xl mx-10  mb-2 leading-normal">
            State of the Art Infrastructure
          </h2>
          <p className="mx-auto md:mx-0 md:max-w-xl max-w-md tracking-wide font-light md:text-left md:px-0 text-white text-center mb-10 px-8 ">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfraSection;
