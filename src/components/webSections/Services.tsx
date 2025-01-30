import { FaRocketchat } from "react-icons/fa";
import { Button } from "../ui/button";

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
          <div>
            <ul className="text-left text-sm">
              <li>
                AiMedCare provides general medical information, such as
                explanations of medical terms, descriptions of illnesses, and
                first aid guidance Based on the symptoms provided,{" "}
              </li>
              <li>
                Our Artificial Intelligent is able to offers a preliminary
                health assessment or suggests possible conditions.
              </li>
              <li>
                we provides information about common symptoms associated with
                those conditions. If a user describes symptoms that indicate a
                potentially life-threatening situation, we would emphasize
                seeking immediate medical attention by booking an urgent session
                with a professional
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full grid sm:grid-cols-4 grid-cols-1  gap-5">
          <div className="w-full  shadow-md bg-slate-100 rounded-xl  text-primary">
            <div className="w-full h-[full] p-5 rounded-lg  flex flex-col items-start  mt-2 p-2">
              <div className="text-secondary mb-3 flex flex-row gap-5">
                <FaRocketchat size="30px" />{" "}
                <div className="font-bold">Start Chat</div>
              </div>

              <div className="text-sm  ">
                Quickly start a conversation with expact AI Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Doloremque eum voluptas
              </div>
            </div>
          </div>
          <div className="w-full  shadow-md bg-slate-100 rounded-xl  text-primary">
            <div className="w-full h-[full] p-5 rounded-lg  flex flex-col items-start  mt-2 p-2">
              <div className="text-secondary mb-3 flex flex-row gap-5">
                <FaRocketchat size="30px" />{" "}
                <div className="font-bold">Start Chat</div>
              </div>

              <div className="text-sm  ">
                Quickly start a conversation with expact AI Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Doloremque eum voluptas
              </div>
            </div>
          </div>
          <div className="w-full shadow-md bg-slate-100 rounded-xl  text-primary">
            <div className="w-full h-[full] p-5 rounded-lg  flex flex-col items-start  mt-2 p-2">
              <div className="text-secondary mb-3 flex flex-row gap-5">
                <FaRocketchat size="30px" />{" "}
                <div className="font-bold">Start Chat</div>
              </div>

              <div className="text-sm  ">
                Quickly start a conversation with expact AI Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Doloremque eum voluptas
              </div>
            </div>
          </div>
          <div className="w-full  shadow-md bg-slate-100 rounded-xl  text-primary">
            <div className="w-full h-[full] p-5 rounded-lg  flex flex-col items-start  mt-2 p-2">
              <div className="text-secondary mb-3 flex flex-row gap-5">
                <FaRocketchat size="30px" />{" "}
                <div className="font-bold">Start Chat</div>
              </div>

              <div className="text-sm  ">
                Quickly start a conversation with expact AI Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Doloremque eum voluptas
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full ">
          <Button className="flex justify-self-center w-[full] h-[3rem] hover:bg-white hover:text-primary">
            {" "}
            See all services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
