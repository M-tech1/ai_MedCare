import { MdOutlineMedicalInformation } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";
import { MdContactEmergency } from "react-icons/md";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full h-[full] py-5 bg-secondary rounded-t-3xl text-white flex flex-col justify-center align-bottom items-center mt-20"
    >
      <div className="w-[90%] h-[80%]  flex flex-col gap-5 content-center mt-14 ">
        <div className="w-full grid sm:grid-col-2 grid-col-2 justify-center align-middle items-center ">
          <div className=" text-3xl font-bold mb-6">
            About Us & Services we provide
          </div>
        </div>

        <div className="w-full grid sm:grid-cols-4 grid-cols-1  gap-5">
          <div className="w-full  shadow-md bg-slate-100 rounded-xl  text-primary">
            <div className="w-full h-[full] p-5 rounded-lg  flex flex-col items-start  mt-2 p-2">
              <div className="text-secondary mb-3 flex flex-row gap-5">
                <MdOutlineMedicalInformation size="30px" />{" "}
                <div className="font-bold"> General Medical Information</div>
              </div>

              <div className="text-sm  ">
                AiMedCare provides general medical information, such as
                explanations of medical terms, descriptions of illnesses, and
                first aid guidance.
              </div>
            </div>
          </div>
          <div className="w-full  shadow-md bg-slate-100 rounded-xl  text-primary">
            <div className="w-full h-[full] p-5 rounded-lg  flex flex-col items-start  mt-2 p-2">
              <div className="text-secondary mb-3 flex flex-row gap-5">
                <MdSupportAgent size="30px" />{" "}
                <div className="font-bold"> Preliminary Health Assessment</div>
              </div>

              <div className="text-sm  ">
                Based on the symptoms provided, our Artificial Intelligence
                offers a preliminary health assessment or suggests possible
                conditions.
              </div>
            </div>
          </div>
          <div className="w-full shadow-md bg-slate-100 rounded-xl  text-primary">
            <div className="w-full h-[full] p-5 rounded-lg  flex flex-col items-start  mt-2 p-2">
              <div className="text-secondary mb-3 flex flex-row gap-5">
                <CiBookmarkCheck size="30px" />{" "}
                <div className="font-bold">Symptom Explanation</div>
              </div>

              <div className="text-sm  ">
                We provide information about common symptoms associated with the
                suggested conditions to help users better understand their
                potential health issues.
              </div>
            </div>
          </div>
          <div className="w-full  shadow-md bg-slate-100 rounded-xl  text-primary">
            <div className="w-full h-[full] p-5 rounded-lg  flex flex-col items-start  mt-2">
              <div className="text-secondary mb-3 flex flex-row gap-5">
                <MdContactEmergency size="30px" />{" "}
                <div className="font-bold">Emergency Response Guidance</div>
              </div>

              <div className="text-sm  ">
                f a user describes symptoms that indicate a potentially
                life-threatening situation, we emphasize seeking immediate
                medical attention by booking an urgent session with a
                professional.
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-[3rem]">
          {/* <Button className="flex justify-self-center w-[full]  hover:bg-white hover:text-primary">
            {" "}
            Get Started
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
