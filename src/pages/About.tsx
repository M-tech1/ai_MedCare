import { Button } from "@/components/ui/button";
import img2 from "../assets/images/Medinjection.png";
import { FaClinicMedical } from "react-icons/fa";
import { FaTruckMedical } from "react-icons/fa6";

const about = () => {
  return (
    <div id="about" className="w-full h-[90vh] p-10">
      <div className="w-full h-full flex flex-row justify-between p-10 mt-10 ">
        <div className="ml-[5rem] w-[30rem]  border-solid  rounded-2xl flex flex-col items-center justify-between">
          <div className="w-[20rem] h-[90rem] border-2 board-primary rounded-2xl flex align-middle items-center justify-center">
            <img className="size-[28rem]" src={img2} />
          </div>
          <div className="flex align-middle justify-center items-center w-[20rem] h-[6rem] m-2">
            <Button className="w-[20rem] h-full">Register now</Button>
          </div>
        </div>
        <div className="w-[35rem] h-[33rem] border-2 rounded-2xl ">
          <div className="ml-5 w-[30rem] h-full  border-2 rounded-2xl shadow-2xl">
            <div className="w-full h-10 bg-primary rounded-t-lg flex  items-center p-4 text-white text-2xl">
              About Our services
            </div>
            <div className="ml-4 flex text-xl">top notch deliverables</div>
            <div className="m-4 text-primary gap-4 flex flex-col justify-start items-start text-left">
              <p className="">
                aiMedCare can provide general medical information, such as
                explanations of medical terms, descriptions of illnesses, and
                first aid guidance
              </p>

              <p className="">
                Based on the symptoms provided, aiMedCare is able to offers a
                preliminary health assessment or suggests possible conditions.
                It provides information about common symptoms associated with
                those conditions.
              </p>

              <p className="">
                If a user describes symptoms that indicate a potentially
                life-threatening situation, the chatbot should emphasize seeking
                immediate medical attention
              </p>
            </div>
            <div className="w-full h-1  bg-secondary"></div>
            <div className="flex flex-row justify-center items-center justify-between">
              <div className="w-[8rem] h-[8rem] rounded-lg border border-solid border-secondary text-left justify-center gap-10 m-3 p-2">
                <FaClinicMedical size="30px" className="text-secondary" />
                <div className="font-bold">Home Sevices</div>
                <div className="text-sm text-left">
                  The fasting home solution u can get anywhere
                </div>
              </div>

              <div className="w-[8rem] h-[8rem] rounded-lg border border-solid border-secondary text-left justify-center gap-10 m-3 p-2">
                <FaTruckMedical size="30px" className="text-secondary" />
                <div className="font-bold">Home Sevices</div>
                <div className="text-sm text-left">
                  The fasting home solution u can get anywhere
                </div>
              </div>

              <div className="w-[8rem] h-[8rem] rounded-lg border border-solid border-secondary text-left justify-center gap-10 m-3 p-2">
                <FaClinicMedical size="30px" className="text-secondary" />
                <div className="font-bold">Home Sevices</div>
                <div className="text-sm text-left">
                  The fasting home solution u can get anywhere
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
