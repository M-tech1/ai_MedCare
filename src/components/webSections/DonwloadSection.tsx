// import React from "react";
import kite from "../../assets/images/kite.png";
import devices from "../../assets/images/devices.png";

const DonwloadSection = () => {
  return (
    <div className="w-full h-[40rem]  flex flex-row justify-between">
      <div className="w-1/2 h-full  flex items-center justify-center align-middle ">
        <div className="w-[30rem] h-[30rem] rounded-full bg-blue-50 ">
          <div className="relative bottom-[3rem] w-[20rem] ">
            <img src={kite} />
          </div>
          <div className="size-fit">
            <img src={devices} />
          </div>
        </div>
      </div>

      {/* ********* right div ********* */}
      <div className="w-1/2 h-full bg-primary-100">
        <div className="p-10 flex flex-col text-left justify-start mt-[7rem]">
          <div className="text-xl"> Download App</div>
          <div className="text-5xl font-bold mt-2">
            We are available on all devices
          </div>
          <div className="mt-5 ">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus reprehenderit sunt odit ipsum non dignissimos
              veritatis, mollitia, iusto, voluptatum excepturi debitis
              cupiditate aliquid atque distinctio incidunt explicabo officia
              magnam laborum.
            </p>
          </div>
          <div className="flex flex-row w-[10rem] mt-10 gap-5 ">
            <img
              className="size-50"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/800px-Download_on_the_App_Store_Badge.svg.png"
            />
            <img
              className="size-70"
              src="https://static.snapchat.com/images/snapchatdotcom/native-download-images/android/en-US.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonwloadSection;
