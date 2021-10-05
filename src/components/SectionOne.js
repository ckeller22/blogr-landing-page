import Info from "./Info";
import mobileEditorIllustration from "../images/illustration-editor-mobile.svg";
import desktopEditorIllustration from "../images/illustration-editor-desktop.svg";

const SectionOne = () => {
  return (
    <section className="relative overflow-hidden">
      <img
        className="hidden md:block absolute md:desktop-background"
        src={desktopEditorIllustration}
        alt="editor illustration"
      />
      <div className="container max-w-6xl mx-auto">
        <h1 className="text-center font-bold text-3xl my-20">
          Designed for the future
        </h1>
        <div className="md:flex border-2 border-red-600">
          <img
            className="mx-auto md:hidden"
            src={mobileEditorIllustration}
            alt="editor illustration"
          />
          <div className="md:flex md:flex-col border-2 border-red-600">
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
      </div>
    </section>
  );
};

export default SectionOne;
