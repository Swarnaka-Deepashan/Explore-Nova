import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
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
  const [showBudgetPopup, setShowBudgetPopup] = useState(false);
  const [budgetRange, setBudgetRange] = useState({ min: 100, max: 1000 });
  // const [showGuestPopup, setShowGuestPopup] = useState(false);
  // const [guestCount, setGuestCount] = useState(1);

  useEffect(() => {
    setBudgetRange({ min: 100, max: 1000 });
  }, []);

  const toggleDatePicker = () => {
    setShowDatePicker((prev) => !prev);
  };

  // const toggleBudgetPopup = () => {
  //   setShowBudgetPopup((prev) => !prev);
  // };

  // const toggleGuestPopup = () => {
  //   setShowGuestPopup((prev) => !prev);
  // };

  const handleBudgetChange = (type, value) => {
    setBudgetRange((prev) => ({
      ...prev,
      [type]: Number(value),
    }));
  };

  // const handleGuestCountChange = (e) => {
  //   setGuestCount(Number(e.target.value));
  // };

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
            <span className="text-lg">
              {selectedDate ? selectedDate.toLocaleDateString() : "Date"}
            </span>
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
          <button
            className="flex items-center justify-between w-full text-white transition duration-300 ease-in-out sm:w-auto hover:text-slate-400"
          >
            <img src={budget} alt="Budget" className="w-4 h-4 mr-2 sm:ml-2" />
            <span className="text-lg">
              {budgetRange.min === 100 && budgetRange.max === 1000
                ? "Budget"
                : `$${budgetRange.min} - $${budgetRange.max}`}
            </span>
            <img src={chevronDown} alt="Chevron" className="w-4 h-4 mx-2" />
          </button>

          {showBudgetPopup && (
            <div className="absolute left-0 z-50 max-w-full p-3 mt-2 shadow-lg top-full bg-white/90 rounded-xl w-72 sm:w-80">
              <h3 className="mb-3 text-sm font-medium text-gray-700 sm:text-lg">
                Select Budget Range
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between text-sm text-gray-700 sm:text-base">
                  <span>${budgetRange.min}</span>
                  <span>${budgetRange.max}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  value={budgetRange.min}
                  onChange={(e) => handleBudgetChange("min", e.target.value)}
                  className="w-full accent-gray-600"
                />
                <input
                  type="range"
                  min="100"
                  max="5000"
                  value={budgetRange.max}
                  onChange={(e) => handleBudgetChange("max", e.target.value)}
                  className="w-full accent-gray-600"
                />
                <button
                  className="px-4 py-2 text-sm text-white bg-gray-700 rounded-lg hover:bg-gray-800 sm:text-base"
                  onClick={() => setShowBudgetPopup(false)}
                >
                  Confirm
                </button>
              </div>
            </div>
          )}

          <img
            src={verticalDivider}
            alt="Divider"
            className="hidden w-6 h-6 mx-2 sm:block"
          />
        </div>

        {/* Guest Section */}
        <div className="relative flex items-center sm:w-auto">
          <button
            className="flex items-center justify-between w-full text-white transition duration-300 ease-in-out sm:w-auto hover:text-slate-400"
          >
            <img src={guest} alt="Guest" className="w-4 h-4 mr-2 sm:ml-2" />
            <span className="text-lg">Guest</span>
            <img src={chevronDown} alt="Chevron" className="w-4 h-4 mx-2" />
          </button>

          {/* {showGuestPopup && (
            <div className="absolute left-0 z-50 max-w-full p-3 mt-2 shadow-lg top-full bg-white/90 rounded-xl w-72 sm:w-80">
              <h3 className="mb-3 text-sm font-medium text-gray-700 sm:text-lg">
                Select Guest Count
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between text-sm text-gray-700 sm:text-base"> */}
                  {/* <span>
                    {guestCount} Guest{guestCount > 1 ? "s" : ""}
                  </span> */}
                {/* </div>
                <input
                  type="number"
                  min="1"
                  value={guestCount}
                  onChange={handleGuestCountChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
                <button
                  className="px-4 py-2 text-sm text-white bg-gray-700 rounded-lg hover:bg-gray-800 sm:text-base"
                >
                  Confirm
                </button>
              </div>
            </div>
          )} */}

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
