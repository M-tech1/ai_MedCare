// import React from "react";
import { Button } from "../ui/button/button";
import aidoc from "../../assets/images/aichatdoctor.png";
import { ChevronRight } from "lucide-react";

const BookSection = () => {
  return (
    <div className="w-full h-full flex sm:flex-row flex-col mt-[10rem] container  sm:px-20">
      <div className=" h-full  flex justify-center items-center rounded-l-2xl">
        <div className=" sm:w-[70%] w-full flex flex-col text-left gap-5">
          <h1 className="text-2xl font-bold ">
            Get started with aiMedcare today
          </h1>
          <p>
            Discover a smarter way to manage healthcare. With aiMedcare, you get
            access to advanced AI-driven tools that simplify patient care,
            streamline operations, and support better health outcomes. Whether
            you're a provider or a healthcare facility, aiMedcare is here to
            help you work more efficiently and care more effectively
          </p>
          <div className="">
            <Button className=" hover:bg-secondary hover:text-white ">
              Book now
              <ChevronRight className="ml-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className=" h-full ">
        <div className="mt-10 left-[6rem] size-[19rem]">
          <img src={aidoc} />
        </div>
      </div>
    </div>
  );
};

export default BookSection;
