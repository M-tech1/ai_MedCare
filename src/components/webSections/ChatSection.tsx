
import botchat from "../../assets/images/botchat.jpeg";
// import { Button } from "../ui/button";
import QuickChat from "@/Functionalities/QuickChat";

const ChatSection = () => {
  return (
    <div className="w-full h-[100vh] mt-[10rem]">
      <div className="w-full h-[90%]  flex flex-row justify-center items-center justify-between gap-10">
        <div className="w-1/3 h-full flex flex-col justify-center items-center justify-between">
          <div className="text-sm mt-10">Welcome to</div>
          <div className="text-2xl font-bold">Quick chat section</div>
          <div>
            report Medical issues let's see how we can help...
            <br />
            <small>try and be procised as possible</small>
          </div>
          <div className="mb-[10rem] ">
            <img src={botchat} />
          </div>
        </div>

        <div className="w-4/5 h-full bg-lite border shadow-lg rounded-md flex justify-self align-middle">
          <div className="w-[90%]  h-[90%] m-auto shadow-md bg-white  rounded-sm">
            <QuickChat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
