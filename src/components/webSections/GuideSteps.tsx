import { FaRocketchat } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { AiOutlineSchedule } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";

const GuideSteps = () => {
  return (
    <div className="mt-10 rounded-md p-5 container text-center ">
      <div> fastest health solution </div>
      <div className="text-3xl text-primary font-bold">
        {" "}
        4 easy steps to your solution
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-2 justify-self-center align-middle items-center mt-10 content-center ">
        <div className="w-[10rem] h-[10rem] rounded-lg  flex flex-col text-center justify-center items-center  m-3 p-2 bg-slate-100 ">
          <div className="text-secondary mb-3">
            <FaRocketchat size="30px" />{" "}
          </div>
          <div className="font-bold">Start Chat</div>
          <div className="text-sm  ">
            Quickly start a conversation with expact AI
          </div>
        </div>

        <div className="w-[10rem] h-[10rem] rounded-lg  flex flex-col text-center justify-center items-center  m-3 p-2 bg-slate-100 ">
          <div className="text-secondary mb-3">
            <FaUserDoctor size="30px" />{" "}
          </div>
          <div className="font-bold">Your Doctor</div>
          <div className="text-sm  ">
            Quickly connect with a specialized Doctor
          </div>
        </div>

        <div className="w-[10rem] h-[10rem] rounded-lg  flex flex-col text-center justify-center items-center  m-3 p-2 bg-slate-100 ">
          <div className="text-secondary mb-3">
            <AiOutlineSchedule size="30px" />{" "}
          </div>
          <div className="font-bold">Get Scheduled</div>
          <div className="text-sm  ">
            Quickly get scheduled with a professional
          </div>
        </div>

        <div className="w-[10rem] h-[10rem] rounded-lg  flex flex-col text-center justify-center items-center  m-3 p-2 bg-slate-100 ">
          <div className="text-secondary mb-3">
            <HiOutlineLightBulb size="30px" />{" "}
          </div>
          <div className="font-bold">Get Solution</div>
          <div className="text-sm  ">
            The fastest home solution you can get anywhere
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideSteps;
