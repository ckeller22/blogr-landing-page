import phonesIllustration from "../images/illustration-phones.svg";

const PhonesIllustration = () => {
  return (
    <div className="md:hidden mx-auto relative h-40 z-10">
      <img
        className="absolute md:hidden mx-auto h-96 right-0 left-0"
        src={phonesIllustration}
        alt="phone illustration"
      />
    </div>
  );
};

export default PhonesIllustration;
