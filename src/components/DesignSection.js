import Info from "./Info";
import mobileEditorIllustration from "../images/illustration-editor-mobile.svg";
import desktopEditorIllustration from "../images/illustration-editor-desktop.svg";

const DesignSection = () => {
  return (
    <section className="mx-auto md:mx-0 relative md:pb-10">
      <h1 className="xl:absolute md:right-0 md:left-0 lg:text-4xl text-center font-bold text-3xl mt-20 mb-10 md:mb-0">
        Designed for the future
      </h1>
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:items-center ">
        <div className="mx-auto md:mx-0 md:ml-auto">
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
        <picture className="mx-auto md:mx-0 md:flex md:flex-row md:justify-end md:pt-10">
          <source
            media="(min-width: 800px)"
            srcset={desktopEditorIllustration}
          />
          <img
            className=""
            src={mobileEditorIllustration}
            alt="editor illustration"
          />
        </picture>
      </div>
    </section>
  );
};

export default DesignSection;
