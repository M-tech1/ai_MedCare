import React from "react";
import img from "../../assets/images/aitreat.jpeg";
import { Button } from "../ui/button";
import { FaCheckCircle } from "react-icons/fa";
const aiDocSection = () => {
  return (
    <div className="w-full h-[35rem] flex flex-row justify-between p-5 mt-[1rem]">
      <div className="w-1/2 h-full  shadow-2xl">
        <div className="w-2/3 p-2 flex flex-col text-left justify-start m-[4rem] gap-5">
          <div>Find a doctor</div>
          <div className="text-3xl font-bold">
            {" "}
            Consult a doctor my Search From anywhere
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto odio
            assumenda iure ipsam repellat accusantium quos asperiores voluptate
            voluptatum nobis illum hic veniam totam, aspernatur consequuntur
            magni provident delectus corporis.
          </div>
          <div>
            {" "}
            <div className="flex flex-row  items-center  text-primary gap-3">
              <FaCheckCircle /> <div>List one</div>
            </div>
            <div className="flex flex-row  items-center  text-primary gap-3">
              <FaCheckCircle /> <div>List one</div>
            </div>
          </div>

          <div>
            <Button className="w-1/2 h-[3rem] rounded-tl-1 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl  hover:bg-secondary hover:text-white">
              {" "}
              Check here
            </Button>
          </div>
        </div>
      </div>
      <div className="w-10/123 h-full align-middle justify-center">
        <div className="w-full h-full flex align-middle justify-center">
          <img className="w-full rounded-tl-3xl shadow-md" src={img} />
        </div>
      </div>
    </div>
  );
};

export default aiDocSection;
