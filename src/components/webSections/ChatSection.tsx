import botchat from "../../assets/images/botchat.jpeg";
// import { Button } from "../ui/button";
import QuickChat from "@/Functionalities/QuickChat";

const ChatSection = () => {
  return (
    <div className="w-full flex flex-col" id="quick-chat">
      <div className=" h-full flex flex-col items-center justify-between ">
        <div className="text-sm">Welcome to</div>
        <div className="text-2xl font-bold my-5">Quick chat section</div>
        <div>
          report Medical issues let's see how we can help...
          <br />
          <small>try and be procised as possible</small>
        </div>
        <div className="w-full flex justify-center mt-5">
          <img
            src={botchat}
            alt="Profile"
            className="w-64 h-64  object-contain justify-self-center"
          />
        </div>
      </div>

      <div className="sm:mx-5 mx-2 bg-lite border shadow-lg rounded-md flex justify-self align-middle">
        <div className="sm:w-[60rem] w-full h-full m-auto shadow-md bg-white rounded-sm ">
          <QuickChat />
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
