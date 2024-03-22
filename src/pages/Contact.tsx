import { Button } from "@/components/ui/button";
import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-[100vh] bg-lite flex flex-row gap-5 p-10 m-10"
    >
      <div className="w-1/2 h-[40rem] bg-primary rounded-xl text-white text-left p-10 flex flex-col gap-5 mt-10 bg-gradient-to-t from-primary from-20% to-secondary">
        <div className="text-sm">Contact us</div>
        <div className="text-3xl font-bold">You have anything to ask?</div>
        <div className=" w-full flex flex-col gap-2 ">
          <input
            className="w-full h-[2rem] rounded-md text-primary align-middle items-center p-5"
            type="text"
            placeholder="Your name"
          />
          <input
            className="w-full h-[2rem] rounded-md text-primary align-middle items-center p-5"
            type="email"
            placeholder="Your Email"
          />
          <input
            className="w-full h-[2rem] rounded-md text-primary align-middle items-center p-5"
            type="text"
            placeholder="Subject"
          />

          <textarea
            className="w-full h-[10rem] rounded-md text-primary align-middle items-center p-5"
            placeholder="Add your comments and questions here..."
          />
        </div>

        <div>
          <Button className="bg-white text-primary hover:bg-secondary hover:text-white w-full h-[3rem] ">
            Submit
          </Button>
        </div>
      </div>
      <div className="w-1/2 h-[40rem] shadow-2xl p-10 text-left mt-10">
        <div className="flex flex-col gap-5">
          <div className="font-bold">FAQs</div>
          <div className="text-3xl font-bold">
            Our Frequently asked question
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            quisquam fugit assumenda corrupti suscipit obcaecati rem iure earum
            illo illum ipsum quis id ipsam provident, mollitia aspernatur vero
            hic delectus!
          </div>
        </div>
        <div className="w-fill bg-primary h-1 my-5"></div>
        <div className="">How does it mean to fix the following</div>
      </div>
    </div>
  );
};

export default Contact;
