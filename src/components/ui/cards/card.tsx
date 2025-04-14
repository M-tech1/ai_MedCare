import { ReactNode } from "react";
export interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode | any;
  color?: string;
}

const Card = ({ title, description, icon, color }: CardProps) => {
  return (
    <div
      style={{ background: color }}
      className={` h-[5rem] rounded-lg shadow-md p-4 border border-gray-200  w-full flex flex-row items-center gap-5 hover:cursor-pointer transform transition-transform duration-200 hover:scale-105 } `}
    >
      <div className="">{icon}</div>
      <div className="">
        <h2 className=" text-l font-semibold text-primary">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
