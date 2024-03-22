// import React from "react";
// import { FaTruckMedical } from "react-icons/fa6";
import { FaRocketchat } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { AiOutlineSchedule } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";

const GuideSteps = () => {
  return (
    <div className="w-full h-[20rem] mt-10">
      <div> fastest health solution </div>
      <div className="text-3xl text-primary font-bold">
        {" "}
        4 easy steps to your solution
      </div>
      <div className="flex flex-row justify-between align-middle items-center mt-10">
        <div className="w-[15rem] h-[10rem] rounded-lg  flex flex-col text-center justify-center items-center  m-3 p-2">
          <div className="text-secondary mb-3">
            <FaRocketchat size="30px" />{" "}
          </div>
          <div className="font-bold">Start Chat</div>
          <div className="text-sm  ">
            Quickly start a conversation with expact AI
          </div>
        </div>

        <div className="w-[15rem] h-[10rem] rounded-lg  flex flex-col text-center justify-center items-center  m-3 p-2">
          <div className="text-secondary mb-3">
            <FaUserDoctor size="30px" />{" "}
          </div>
          <div className="font-bold">Your Doctor</div>
          <div className="text-sm  ">
            Quickly connect with a specialized Doctor
          </div>
        </div>

        <div className="w-[15rem] h-[10rem] rounded-lg  flex flex-col text-center justify-center items-center  m-3 p-2">
          <div className="text-secondary mb-3">
            <AiOutlineSchedule size="30px" />{" "}
          </div>
          <div className="font-bold">Get Scheduled</div>
          <div className="text-sm  ">
            Quickly get scheduled with a professional
          </div>
        </div>

        <div className="w-[15rem] h-[10rem] rounded-lg  flex flex-col text-center justify-center items-center  m-3 p-2">
          <div className="text-secondary mb-3">
            <HiOutlineLightBulb size="30px" />{" "}
          </div>
          <div className="font-bold">Get Solution</div>
          <div className="text-sm  ">
            The fasting home solution u can get anywhere
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideSteps;
