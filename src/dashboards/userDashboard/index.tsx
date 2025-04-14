import Card from "@/components/ui/cards/card";
import img from "../../assets/images/aichatdoctor.png";
import { Button } from "@/components/ui/button/button";
import { FaHeartbeat } from "react-icons/fa";
import { FcBearish } from "react-icons/fc";
import { FcBiohazard } from "react-icons/fc";
import AreaChart from "@/components/ui/charts/areaChart/areaChart";
import { IoNotificationsCircleOutline } from "react-icons/io5";
// import { cardData } from "./data";

export default function UserDashboard() {
  return (
    <>
      <div className="flex flex-col gap-2 p-2 ">
        <div className="flex flex-row justify-between px-5">
          <h2>Dashboard</h2>
          <div className="text-red-500">
            <IoNotificationsCircleOutline size={30} />
          </div>
        </div>
        <div className="w-full h-64 flex flex-row justify-between rounded-lg p-5 mt-5 shadow-xl bg-secondary bg-gradient-to-r from-secondary to-lite">
          <div className="w-1/2 h-full justify-between ">
            <h2 className="text-l text-lite font-san">Hi, Martins</h2>

            <div className="sm:w-[60%] w-full flex flex-col justify-between ">
              <div className="sm:text-3xl text-xl  font-yrsa sm:w-[18rem] mt-3 text-slate-200 ">
                Have You had a Routine Health Check this month?
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 sm:mt-5 mt-2">
                <Button className="bg-primary  hover:bg-secondary hover:text-primary text-white hover:border hover:border-solid hover: border-white">
                  Quick insight
                </Button>
                <Button
                  className="bg-transparent text-lite hover:bg-primary hover:text-white border-solid border-secondary border-white"
                  variant="outline"
                >
                  View reports
                </Button>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full ">
            <img className="h-[14rem] " src={img} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {/* {cardData.map((data) => (
            <Card
              icon={data.icon}
              title={data.title}
              description={data.description}
              color={data.color}
            />
          ))} */}

          <Card
            icon={<FaHeartbeat size={30} className="text-red-500" />}
            title="Heart Conditions"
            description={"testing card content "}
            color="#e5f8fa"
          />
          <Card
            icon={<FcBearish size={30} />}
            title="Health Stats"
            description={"testing card 2"}
            color="#eae0fc"
          />
          <Card
            icon={<FcBiohazard size={30} />}
            title="Card 2"
            description={"testing card 3"}
            color="#fcf8e0"
          />
        </div>

        <div className="w-full h-full flex flex-row justify-between mt-1 p-2">
          {/* <Chart1 /> */}
          <AreaChart />
        </div>
      </div>
    </>
  );
}
