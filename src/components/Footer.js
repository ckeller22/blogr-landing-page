import navigation from "../data/navigation";
import FooterBlock from "./FooterBlock";
import brandLogo from "../images/logo.svg";

const Footer = () => {
  const footerBlocks = navigation.map((item) => {
    return <FooterBlock item={item} />;
  });

  return (
    <footer className="footer">
      <div className="mx-auto container max-w-6xl flex flex-col lg:flex-row text-center lg:justify-between  lg:py-8">
        {/* Logo */}

        <img
          className="mx-auto h-auto my-10 lg:mx-0  lg:h-10 lg:my-5"
          src={brandLogo}
          alt="brand logo"
        />

        {/* Footer Blocks */}
        {footerBlocks}
      </div>
    </footer>
  );
};

export default Footer;
