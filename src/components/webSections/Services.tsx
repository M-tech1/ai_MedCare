import { Button } from "../ui/button";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full h-[40rem] bg-secondary text-white flex flex-col justify-center align-bottom items-center"
    >
      <div className="w-[90%] h-[80%]  flex flex-col gap-10 mt-10 ">
        <div className="w-full flex flex-row justify-center align-middle items-center ">
          {" "}
          <div className="w-[30%] text-3xl font-bold">Services we provide</div>
          <div className="w-[70%]">
            <p className="text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              doloribus cupiditate, repudiandae possimus unde distinctio, quis
              accusantium facilis omnis accusamus illum ullam molestiae eaque
              molestias quasi officia, expedita temporibus ipsum. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>{" "}
        </div>

        <div className="w-full h-[20rem]  flex flex-row p-5 justify-between">
          <div className="w-[15rem] h-[17rem] shadow-md bg-white rounded-xl mt-[5rem]"></div>
          <div className="w-[15rem] h-[17rem] shadow-md bg-white rounded-xl"></div>
          <div className="w-[15rem] h-[17rem] shadow-md bg-white rounded-xl"></div>
          <div className="w-[15rem] h-[17rem] shadow-md bg-white rounded-xl mt-[5rem]"></div>
        </div>
        <div className=" ">
          <Button className="w-[10rem] h-[3rem] hover:bg-white hover:text-primary">
            {" "}
            See all services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
