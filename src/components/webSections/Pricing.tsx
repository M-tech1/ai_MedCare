import React from "react";
import { Button } from "../ui/button";
import { BiToggleLeft } from "react-icons/bi";
import { ToggleLeftIcon } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";

const Pricing = () => {
  return (
    <div id="price" className="w-full h-[100vh] rounded-2xl bg-lite p-2 ">
      <div className="mt-14">
        <div className="flex flex-col justify-center items-center">
          <div className="m-3 text-3xl text-primary font-bold"> Pricing</div>
          <div className="flex flex-row items-center gap-2 font-bold">
            <div>Monthly</div>
            <Button> switch</Button>
            <div>Yearly</div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center p-6">
          <div className="w-1/3 h-[30rem]  rounded-xl shadow-2xl shadow-black text-left p-7 flex flex-col gap-5 m-5">
            <div className="font-bold">Basic</div>
            <div className="text-5xl font-bold">Free</div>
            <div>Free plan for all users</div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-3 items-center">
                <div>
                  <FaCheckCircle />
                </div>
                <div>free access to basics health tips</div>
              </div>

              <div className="flex flex-row gap-3 items-center">
                <div>
                  <FaCheckCircle />
                </div>
                <div>free access to basics health tips</div>
              </div>

              <div className="flex flex-row gap-3 items-center">
                <div>
                  <FaCheckCircle />
                </div>
                <div>free access to basics health tips</div>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div>
                  <FaCheckCircle />
                </div>
                <div>free access to basics health tips</div>
              </div>
            </div>
            <div className="mt-10">
              <Button>Get Start Free</Button>
            </div>
          </div>

          <div className="w-1/3 h-[30rem] border border-solid text-white bg-primary border-primary rounded-xl shadow-2xl text-left p-7 flex flex-col gap-5 m-5 bg-gradient-to-t from-primary from-20% to-secondary">
            <div className="font-bold">Professional</div>
            <div className="text-5xl font-bold">$2</div>
            <div>Free plan for all users</div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-3 items-center">
                <div>
                  <FaCheckCircle />
                </div>
                <div>free access to basics health tips</div>
              </div>

              <div className="flex flex-row gap-3 items-center">
                <div>
                  <FaCheckCircle />
                </div>
                <div>free access to basics health tips</div>
              </div>

              <div className="flex flex-row gap-3 items-center">
                <div>
                  <FaCheckCircle />
                </div>
                <div>free access to basics health tips</div>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div>
                  <FaCheckCircle />
                </div>
                <div>free access to basics health tips</div>
              </div>
            </div>
            <div className="mt-10 ">
              <Button className="border border-solid border-white ">
                Start Prefessonal
              </Button>
            </div>
          </div>

          <div className="w-1/3 h-[30rem] shadow-black rounded-xl shadow-2xl text-left p-7 flex flex-col gap-5 m-5">
            <div className="font-bold">Premium</div>
            <div className="text-5xl font-bold">$5</div>
            <div>Free plan for all users</div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-3 items-center">
                <div>
                  <FaCheckCircle />
                </div>
                <div>free access to basics health tips</div>
              </div>

              <div className="flex flex-row gap-3 items-center">
                <div>
                  <FaCheckCircle />
                </div>
                <div>free access to basics health tips</div>
              </div>

              <div className="flex flex-row gap-3 items-center">
                <div>
                  <FaCheckCircle />
                </div>
                <div>free access to basics health tips</div>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div>
                  <FaCheckCircle />
                </div>
                <div>free access to basics health tips</div>
              </div>
            </div>
            <div className="mt-10">
              <Button>Get Start Free</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;