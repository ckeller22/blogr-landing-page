import Showcase from "./components/Showcase";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import Footer from "./components/Footer";
import PhonesIllustration from "./components/PhonesIllustration";
import DesignSection from "./components/DesignSection";
import ToolingSection from "./components/ToolingSection";
import InfraSection from "./components/InfraSection";

function App() {
  return (
    <div className="">
      <Showcase />
      <DesignSection />
      <InfraSection />
      <ToolingSection />
      <Footer />
    </div>
  );
}

export default App;
