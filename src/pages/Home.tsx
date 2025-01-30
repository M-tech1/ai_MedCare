import "./Styles.css";
import About from "./About";
import DonwloadSection from "@/components/webSections/DonwloadSection";
import GuideSteps from "@/components/webSections/GuideSteps";
import BookSection from "@/components/webSections/BookSection";
import AiDocSection from "@/components/webSections/AiDocSection";
import Pricing from "@/components/webSections/Pricing";
import Contact from "../pages/Contact";
import Services from "@/components/webSections/Services";
import ChatSection from "@/components/webSections/ChatSection";
import DailyHealthTips from "@/components/webSections/DailyHealthTips";
import Hero from "@/components/webSections/hero";

const Home = () => {
  return (
    <>
      <Hero />
      <GuideSteps />
      <Services />
      <AiDocSection />
      <DailyHealthTips />
      <ChatSection />
      <BookSection />
      <Pricing />
      {/* <About /> */}
      <DonwloadSection />
      <Contact />
    </>
  );
};

export default Home;
