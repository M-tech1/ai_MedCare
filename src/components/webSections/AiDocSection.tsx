// import React from "react";
import img from "../../assets/images/aitreat.jpeg";
import { Button } from "../ui/button";
import { FaCheckCircle } from "react-icons/fa";
const aiDocSection = () => {
  return (
    <div className="w-full h-[] grid sm:grid-cols-2 grid-cols-1 p-5 mt-[1rem]">
      <div className="w-10/123 h-full align-middle justify-center">
        <div className="w-full h-full flex align-middle justify-center">
          <img className="w-full rounded-tl-3xl shadow-md" src={img} />
        </div>
      </div>
      <div className=" h-full shadow-2xl">
        <div className=" p-2 flex flex-col text-left justify-start sm:px-10  gap-5">
          <div>Find an available doctor for your issue</div>
          <div className="sm:text-3xl text-xl font-bold">
            Consult with a doctor by Searching from anywhere
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
              <FaCheckCircle /> <div>General Practitioner (GP)</div>
            </div>
            <div className="flex flex-row  items-center  text-primary gap-3">
              <FaCheckCircle /> <div>Neurosurgeon</div>
            </div>
            <div className="flex flex-row  items-center  text-primary gap-3">
              <FaCheckCircle /> <div>Orthopedic Surgeon</div>
            </div>
            <div className="flex flex-row  items-center  text-primary gap-3">
              <FaCheckCircle /> <div>Cardiothoracic Surgeon</div>
            </div>
            <div className="flex flex-row  items-center  text-primary gap-3">
              <FaCheckCircle /> <div>Ophthalmic Surgeon</div>
            </div>
            <div className="flex flex-row  items-center  text-primary gap-3">
              <FaCheckCircle /> <div>Cardiologist </div>
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
    </div>
  );
};

export default aiDocSection;
