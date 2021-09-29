import Info from "./Info";
import mobileLaptopIllustration from "../images/illustration-laptop-mobile.svg";

const SectionThree = () => {
  return (
    <section className="container mx-auto">
      <img src={mobileLaptopIllustration} alt="laptop illustration" />
      <Info
        header="Free, open, simple"
        text="Blogr is a free and open source application backed by a large community
        of helpful developers. It supports features such as code syntax
        highlighting, RSS feeds, social media integration, third-party
        commenting tools, and works seamlessly with Google Analytics. The
        architecture is clean and is relatively easy to learn."
      />
      <Info
        header="Powerful tooling"
        text="Batteries included. We built a simple and straightforward CLI tool that makes customization
        and deployment a breeze, but capable of producing even the most
        complicated sites."
      />
    </section>
  );
};

export default SectionThree;
