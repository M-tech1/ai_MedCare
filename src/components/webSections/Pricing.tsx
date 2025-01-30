// import { BiToggleLeft } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
// import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";

import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Pricing = () => {
  return (
    <div
      id="price"
      className="w-full h-full rounded-2xl bg-lite p-2 container  "
    >
      <div className="mt-14">
        <div className="flex flex-col justify-center items-center">
          <div className="m-3 text-3xl text-primary font-bold"> Pricing</div>
        </div>

        <Tabs defaultValue="month" className=" ">
          <TabsList className="flex flex-row ">
            <TabsTrigger value="month">Monthly</TabsTrigger>
            <TabsTrigger value="year">Yearly</TabsTrigger>
          </TabsList>

          <TabsContent value="month" className="w-full">
            <div className="  sm:p-6 grid sm:grid-cols-3 grid-cols-1 w-full gap-6">
              <div className=" w-[25rem] h-[28rem] rounded-xl shadow-2xl text-left p-7 flex flex-col gap-5  ">
                <div className="font-bold">Basic</div>
                <div className="text-5xl font-bold">Fee</div>
                <div>Free plan for all users</div>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-3 items-center">
                    <FaCheckCircle />

                    <div>free access to basics health tips</div>
                  </div>

                  <div className="flex flex-row gap-3 items-center">
                    <FaCheckCircle />

                    <div>free access to basics health tips</div>
                  </div>

                  <div className="flex flex-row gap-3 items-center">
                    <FaCheckCircle />

                    <div>free access to basics health tips</div>
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <FaCheckCircle />

                    <div>free access to basics health tips</div>
                  </div>
                </div>
                <div className="mt-10">
                  <Button>Get Start Free</Button>
                </div>
              </div>

              <div className="w-[25rem] h-[28rem] border border-solid text-white bg-primary  rounded-xl shadow-xl text-left p-7 flex flex-col gap-5  bg-gradient-to-t from-primary from-20% to-secondary hidden sm:block">
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

              <div className="w-[25rem] h-[28rem] rounded-xl shadow-2xl text-left p-7 flex flex-col gap-5 hidden sm:block">
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
          </TabsContent>
          <TabsContent value="year">
            <div className="  sm:p-6 grid sm:grid-cols-3 grid-cols-1 w-full gap-6">
              <div className="w-[25rem] h-[28rem] text-white rounded-xl shadow-2xl shadow-black text-left p-7 flex flex-col gap-5 bg-gradient-to-t from-primary from-20% to-secondary">
                <div className="font-bold">Basic</div>
                <div className="text-5xl font-bold">Fee</div>
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
                  <Button className="border border-solid border-white">
                    Get Start Free
                  </Button>
                </div>
              </div>

              <div className="w-[25rem] h-[28rem]  text-primary shadow-2xl rounded-xl text-left p-7 flex flex-col gap-5 hidden sm:block ">
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

              <div className="w-[25rem] h-[28rem]   bg-primary  rounded-xl text-white text-left p-7 flex flex-col gap-5  bg-gradient-to-t from-primary from-20% to-secondary hidden sm:block">
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
                  <Button className="border border-solid border-white">
                    Get Start Free
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Pricing;
