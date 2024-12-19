import { useState } from "react";
import DatePicker from "react-datepicker";
import { Popover, Slider, InputNumber } from "antd";
import "react-datepicker/dist/react-datepicker.css";

import {
  date,
  budget,
  guest,
  chevronDown,
  verticalDivider,
} from "../assets/icons";

const SearchBar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleDatePicker = () => {
    setShowDatePicker((prev) => !prev);
  };

  // Budget
  const [openBudget, setOpenBudget] = useState(false);
  // const hide = () => {
  //   setOpen(false);
  // };
  const handleOpenChange = (newOpen) => {
    setOpenBudget(newOpen);
  };

  // Guest
  const [openGuest, setOpenGuest] = useState(false);
  const handleOpenGuestChange = (newOpen) => {
    setOpenGuest(newOpen);
  };

  return (
    <div>
      <div className="flex gap-4 p-2 shadow-2xl max-sm:flex-col backdrop-blur-lg bg-white/20 rounded-xl sm:rounded-full">
        {/* Date Section */}
        <div className="relative flex items-center max-sm:justify-between sm:w-auto">
          <button
            onClick={toggleDatePicker}
            className="flex items-center justify-between w-full text-white transition duration-300 ease-in-out sm:w-auto hover:text-slate-400"
          >
            <img src={date} alt="Date" className="w-4 h-4 mr-2 sm:ml-4" />
            <span className="text-lg">{"Date"}</span>
            <img src={chevronDown} alt="Chevron" className="w-4 h-4 mx-2" />
          </button>

          {showDatePicker && (
            <div className="absolute left-0 z-50 mt-2 top-full">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date);
                  setShowDatePicker(false);
                }}
                inline
              />
            </div>
          )}

          <img
            src={verticalDivider}
            alt="Divider"
            className="hidden w-6 h-6 mx-2 sm:block"
          />
        </div>

        {/* Budget Section */}
        <div className="relative flex items-center sm:w-auto">
          <Popover
            content={
              <Slider
                range
                max={25000}
                min={500}
                defaultValue={[5000, 15000]}
                tipFormatter={(value) => `$${value}`}
              />
            }
            title="Budget"
            trigger="click"
            open={openBudget}
            onOpenChange={handleOpenChange}
            placement={"bottom"}
          >
            <button className="flex items-center justify-between w-full text-white transition duration-300 ease-in-out sm:w-auto hover:text-slate-400">
              <img src={budget} alt="Budget" className="w-4 h-4 mr-2 sm:ml-2" />
              <span className="text-lg">Budget</span>
              <img src={chevronDown} alt="Chevron" className="w-4 h-4 mx-2" />
            </button>
          </Popover>

          <img
            src={verticalDivider}
            alt="Divider"
            className="hidden w-6 h-6 mx-2 sm:block"
          />
        </div>

        {/* Guest Section */}
        <div className="relative flex items-center sm:w-auto">
          <Popover
            content={<InputNumber min={1} max={10} defaultValue={3} />}
            title="Guest Count"
            trigger="click"
            open={openGuest}
            onOpenChange={handleOpenGuestChange}
            placement={"bottom"}
          >
            <button className="flex items-center justify-between w-full text-white transition duration-300 ease-in-out sm:w-auto hover:text-slate-400">
              <img src={guest} alt="Guest" className="w-4 h-4 mr-2 sm:ml-2" />
              <span className="text-lg">Guests</span>
              <img src={chevronDown} alt="Chevron" className="w-4 h-4 mx-2" />
            </button>
          </Popover>

          <img
            src={verticalDivider}
            alt="Divider"
            className="hidden w-6 h-6 mx-2 sm:block"
          />
        </div>

        {/* Search Button */}
        <div className="flex justify-center w-full sm:w-auto sm:justify-end">
          <button className="px-8 py-2 text-lg text-black bg-white rounded-full hover:bg-gray-200">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
