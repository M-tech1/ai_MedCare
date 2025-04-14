import React from "react";
import LatestNews from "./LatestNews.tsx";
// import DatePicker from "./datePicker.tsx";
import { Calendar } from "@/components/ui/calendar";

export default function DashboardRightSide() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  console.log(date);
  return (
    <>
      <aside className=" inset-y-0 right-0 w-[35rem] h-100vh  hidden sm:block">
        <div className="flex flex-col gap-5 h-full">
          <div className="w-full h-84 flex justify-center  ">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>
          <div className="">
            <LatestNews />
          </div>
        </div>
      </aside>
    </>
  );
}
