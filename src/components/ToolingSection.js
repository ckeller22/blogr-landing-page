import Info from "./Info";
import mobileLaptopIllustration from "../images/illustration-laptop-mobile.svg";
import desktopLaptopIllustration from "../images/illustration-laptop-desktop.svg";

const ToolingSection = () => {
  return (
    <section className="pb-20">
      <div className="flex flex-col md:grid md:grid-cols-2 md:grid-flow md:items-center">
        <div className="mx-auto md:mx-0 ">
          <picture className="">
            <source
              media="(min-width: 800px)"
              srcset={desktopLaptopIllustration}
            />
            <img
              className="pt-10 md:pt-10 "
              src={mobileLaptopIllustration}
              alt="editor illustration"
            />
          </picture>
        </div>
        <div className="mx-auto md:mx-0 md:mr-auto">
          <Info
            header="Introducing an extensible editor"
            text="Blogr features an exceedingly intuitive interface which lets you focus
        on one thing: creating content. The editor supports management of
        multiple blogs and allows easy manipulation of embeds such as images,
        videos, and Markdown. Extensibility with plugins and themes provide easy
        ways to add functionality or change the looks of a blog."
          />
          <Info
            header="Robust content management"
            text="Flexible content management enables users to easily move through posts.
        Increase the usability of your blog by adding customized categories,
        sections, format, or flow. With this functionality, you’re in full
        control."
          />
        </div>
      </div>
    </section>
  );
};

export default ToolingSection;
