import { Button } from "@/components/ui/button";
import { TfiAngleDoubleRight } from "react-icons/tfi";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-full bg-lite grid sm:grid-cols-2 grid-cols-1 gap-5 sm:p-20 sm:my-10 m-0 m-2"
    >
      <div className="w-full h-full shadow-2xl p-10 text-left mt-10">
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
        <div className="w-full bg-primary h-1 my-5"></div>
        <div className="flex flex-rol items-center gap-4">
          <TfiAngleDoubleRight />{" "}
          <div className=" text-10 font-bold">Name of Commenter</div>
        </div>{" "}
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          quam, laboriosam eaque autem dolorem, !
        </div>
      </div>

      <div className="sm:w-[35rem] w-full h-full bg-primary rounded-xl text-white text-left sm:p-10 p-2 flex flex-col gap-5 mt-10 bg-gradient-to-t from-primary from-20% to-secondary">
        <div className="text-sm">Contact Us</div>
        <div className="text-3xl font-bold">You have anything to ask?</div>
        <div className=" w-full flex flex-col gap-2">
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
    </div>
  );
};

export default Contact;
