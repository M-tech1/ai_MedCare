// import React from "react";
import { Button } from "../ui/button";
import aidoc from "../../assets/images/aichatdoctor.png";
import { ChevronRight } from "lucide-react";

const BookSection = () => {
  return (
    <div className="w-full h-[20rem] flex flex-row justify-between mt-[10rem] mb-[10rem]">
      <div className="w-1/2 h-full bg-lite flex justify-center items-center rounded-l-2xl">
        <div className=" w-[25rem] flex flex-col text-left gap-5">
          <h1 className="text-5xl font-bold ">
            Get started with aiMedcare today
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nulla
            quae dignissimos veniam! Repudiandae dolor ex repellat animi?
            Ducimus quis illum eligendi tempora error hic optio atque laudantium
            ab doloribus!
          </p>
          <div className="">
            <Button className="w-1/2 h-[3.5rem] rounded-tl-1 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl hover:bg-secondary hover:text-white ">
              Book now
              <ChevronRight className="ml-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full bg-lite">
        <div className="relative bottom-[6.3rem]  size-[50rem]">
          <img src={aidoc} />
        </div>
      </div>
    </div>
  );
};

export default BookSection;
