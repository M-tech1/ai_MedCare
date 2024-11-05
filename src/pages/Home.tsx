import NavBar from "@/components/NavBar";
//import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import "./Styles.css";
import img from "../assets/images/mdDOc.png";
import About from "./About";
import { ChevronRight } from "lucide-react";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { FaNotesMedical } from "react-icons/fa";
import { FaCommentMedical } from "react-icons/fa6";
import kite from "../assets/images/kite.png";
import DonwloadSection from "@/components/webSections/DonwloadSection";
import GuideSteps from "@/components/webSections/GuideSteps";
import BookSection from "@/components/webSections/BookSection";
import AiDocSection from "@/components/webSections/AiDocSection";
import Pricing from "@/components/webSections/Pricing";
import Contact from "../pages/Contact";
import Services from "@/components/webSections/Services";
import ChatSection from "@/components/webSections/ChatSection";
import DailyHealthTips from "@/components/webSections/DailyHealthTips";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="h-[100vh] w-[5/6] ">
        <div className="flex flex-row mt-[2.5rem] relative top-[2rem] sm:container">
          <div className="w-[100rem] h-[20rem] flex items-start flex-col ">
            <div className="w-[8rem]  rotate-90 sm:flex sm:w-[10rem] ">
              <img src={kite} />
            </div>
            {/* <div> calenda</div> */}
          </div>
          <div className="w-[100rem] h-[27rem flex items-start my-5">
            <div className="w-[25rem] h-full flex ml-10 justify-center flex-col items-start gap-7 align-middle">
              <div className="text-[1.5rem] text-primary flex md:text-base lg:text-lg">
                Get Quick
              </div>
              <div className="text-[1rem] font-bold text-primary">
                <div className="typewriter text-primary">Medical Attention</div>
              </div>
              <p className="flex justify-start text-primary text-left">
                Employ the best AI health diagnostic system to help diagnose
                your health and wellness. Stay healthy today!
              </p>
              <div className="flex flex-row justify-between gap-5">
                <Button className="bg-primary  hover:bg-secondary hover:text-white">
                  Get started
                </Button>
                <Button
                  className="bg-transparent text-primary hover:bg-secondary hover:text-white border-solid border-2 border-secondary"
                  variant="outline"
                >
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[21rem] mt-[1rem] flex align-middle justify-center relative top-[2rem] ">
          <div className="w-6/7 h-full bg-secondary  rounded-3xl flex flex-row justify-between items-center align-middle p-10 bg-gradient-to-r from-primary from-20% to-secondary">
            <div className="w-[35rem] h-[20rem] flex items-center justify-center  ">
              <img
                className="h-[80%] sm:h-[200%] sm:left-[7rem] left-[15rem] button-[0rem] relative sm:bottom-[10rem] "
                src={img}
              />
            </div>
            <div className=" w-[32rem] h-[18rem] mt-5 relative left-[3rem] flex flex-col align-middle justify-center ">
              <div className="w-[20rem] h-full flex flex-col align-middle justify-center">
                <div className="text-white mb-5 text-xl font-semibold">
                  Martins, how're you feeling?
                </div>
                <p className="text-white text-[13px] flex justify-center text-left align-middle ml-7">
                  {" "}
                  Your well-being is of utmost importance, and we're here to
                  assist you. Please feel comfortable sharing your thoughts and
                  concerns with us.
                </p>
                <div className="flex flex-row m-5 mt-8 justify-between">
                  <div className="bg-secondary shadow-md w-[5rem] h-[5rem] rounded-2xl flex justify-center items-center">
                    <FaHandHoldingMedical size={30} color="white" />
                  </div>
                  <div className="bg-secondary shadow-md w-[5rem] h-[5rem] rounded-2xl flex justify-center items-center">
                    <FaNotesMedical size={30} color="white" />
                  </div>
                  <div className="bg-secondary shadow-md w-[5rem] h-[5rem] rounded-2xl flex justify-center items-center">
                    <FaCommentMedical size={30} color="white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[7rem] h-[15rem] bg-primary rounded-3xl flex flex-col align-middle items-center justify-center text-white hover:bg-transparent hover:text-primary hover:border-solid scroll-smooth hover:border-solid border-2 border-primary ">
              <ChevronRight className="h-5 w-5" />
              <div>Check</div>
            </div>
          </div>
        </div>
      </div>
      <GuideSteps />
      <Services />
      <AiDocSection />
      <ChatSection />
      <DailyHealthTips />
      <BookSection />
      <Pricing />
      <About />
      <DonwloadSection />
      <Contact />
    </>
  );
};

export default Home;
