import navigation from "../data/navigation";
import FooterBlock from "./FooterBlock";
import brandLogo from "../images/logo.svg";

const Footer = () => {
  const footerBlocks = navigation.map((item) => {
    return <FooterBlock item={item} />;
  });

  return (
    <footer className="footer flex flex-col text-center">
      {/* Logo */}
      <img className="mx-auto h-auto my-10" src={brandLogo} alt="brand logo" />
      {/* Footer Blocks */}
      {footerBlocks}
    </footer>
  );
};

export default Footer;
