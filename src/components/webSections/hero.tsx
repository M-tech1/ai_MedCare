import { ChevronRight } from "lucide-react";
import {
  FaHandHoldingMedical,
  FaNotesMedical,
  FaCommentMedical,
} from "react-icons/fa";
import kite from "../../assets/images/kite.png";
import img from "../../assets/images/mdDOc.png";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <>
      <div className="h-[full] w-[full] sm:p-5">
        <div className="flex sm:flex-row flex-col max-w-[80vw] justify-self-center ">
          <div className=" flex items-start flex-col ">
            <div className=" rotate-90 sm:flex w-[12rem] sm:absolute left-[20rem]">
              <img src={kite} />
            </div>
            {/* <div> calenda</div> */}
          </div>
          <div className="sm:w-[50rem] w-full flex  h-[27rem] sm:items-start sm:my-5 sm:ml-[35rem]  ">
            <div className="sm:w-[25rem] sm:mt-10 sm:mr-20 w-full h-full flex justify-center items-center flex-col gap-7 ">
              <div className="text-[1.5rem] text-primary flex md:text-base lg:text-lg">
                Get Quick
              </div>
              <div className="text-[1rem]  font-bold text-primary">
                <div className="typewriter text-primary">Medical Attention</div>
              </div>
              <p className="flex justify-start text-primary text-center">
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

        <div className="sm:w-full sm:h-[21rem] sm:mt-[1rem] m-0 flex align-middle justify-center w-[100vw] ">
          <div className="sm:w-[80rem] w-[100vw] h-full m-2 rounded-3xl flex flex-row gap-2 items-center align-middle sm:p-10 p-0  bg-gradient-to-r from-primary from-20% to-secondary ">
            <div className="w-[35rem] h-[20rem] flex items-center justify-center hidden sm:block ">
              <img
                src={img}
                className="absolute top-[14rem] left-[18%] h-[40rem] "
              />
            </div>
            <div className=" sm:w-[32rem] sm:h-[18rem] w-full mt-5 p-5 flex flex-col align-middle sm:items-stretch items-center  justify-center">
              <div className="w-[20rem] h-full flex flex-col ">
                <div className="text-white mb-5 text-xl font-semibold">
                  Martins, how're you feeling?
                </div>
                <p className="text-white text-[13px] flex justify-center text-left align-middle">
                  {" "}
                  Your well-being is of utmost importance, and we're here to
                  assist you. Please feel comfortable sharing your thoughts and
                  concerns with us.
                </p>
                <div className="flex flex-row mt-8 justify-between">
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
            <div className="w-[7rem] h-[15rem] text-center bg-primary rounded-3xl flex flex-col content-center text-white hover:bg-transparent hover:text-primary  scroll-smooth hover:border-solid border-2 border-primary hidden sm:block">
              <ChevronRight className="h-5 w-5 justify-self-center" />
              <div>Check</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
