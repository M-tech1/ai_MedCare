import React, { useState } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-72">
      <h2 className="text-lg font-semibold mb-3">Select a Date</h2>
      <DatePicker
      // selected={selectedDate}
      // onChange={(date) => setSelectedDate(date)}
      // dateFormat="MMMM d, yyyy"
      // className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default DatePicker;
