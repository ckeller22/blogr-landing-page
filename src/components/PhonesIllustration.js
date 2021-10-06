import phonesIllustration from "../images/illustration-phones.svg";

const PhonesIllustration = () => {
  return (
    <div className="mx-auto relative h-40 z-10">
      <img
        className="absolute mx-auto h-96 right-0 left-0"
        src={phonesIllustration}
        alt="phone illustration"
      />
    </div>
  );
};

export default PhonesIllustration;
