import { useEffect, useState, useRef, useCallback } from "react";
import {
  date,
  budget,
  guest,
  chevronDown,
  verticalDivider,
} from "../assets/icons";

const throttle = (func, delay) => {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    func(...args);
  };
};

const SearchBarTour = () => {
  const [isFlexCol, setIsFlexCol] = useState(false);
  const parentRef = useRef(null);

  const updateFlexDirection = useCallback(
    throttle(() => {
      const screenWidth = window.innerWidth;
      const parentWidth =
        parentRef.current?.offsetWidth || screenWidth;

      const shouldFlexCol = parentWidth < 500;

      if (isFlexCol !== shouldFlexCol) {
        setIsFlexCol(shouldFlexCol);
      }
    }, 200),
    [isFlexCol]
  );

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      updateFlexDirection();
    });

    const currentRef = parentRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    window.addEventListener("resize", updateFlexDirection);

    updateFlexDirection();

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
      window.removeEventListener("resize", updateFlexDirection);
    };
  }, [updateFlexDirection]);

  return (
    <div ref={parentRef}>
      <div
        className={`flex gap-4 p-2 backdrop-blur-lg bg-white/20 shadow-2xl w-fit ${
          isFlexCol ? "flex-col rounded-xl" : "rounded-full"
        }`}
      >
        {/* Date Section */}
        <div className={`flex items-center ${isFlexCol ? "justify-between" : "w-auto"}`}>
          <button className={`flex items-center justify-between w-full text-white ${isFlexCol ? "" : "w-auto"}`}>
            <img src={date} alt="Date" className={`w-4 h-4 mr-2 ${isFlexCol ? "" : "ml-4"}`} />
            <span className="text-base">Date</span>
            <img src={chevronDown} alt="Chevron" className="w-4 h-4 mx-2" />
            <img src={verticalDivider} alt="Divider" className={`w-6 h-6 ${isFlexCol ? "hidden" : ""}`} />
          </button>
        </div>

        {/* Budget Section */}
        <div className={`flex items-center ${isFlexCol ? "justify-between" : "w-auto"}`}>
          <button className={`flex items-center justify-between w-full text-white ${isFlexCol ? "" : "w-auto"}`}>
            <img src={budget} alt="Budget" className={`w-4 h-4 mr-2 ${isFlexCol ? "" : "ml-2 "}`} />
            <span className="text-base">Budget</span>
            <img src={chevronDown} alt="Chevron" className="w-4 h-4 mx-2" />
          </button>
        </div>

        {/* Guest Section */}
        <div className={`flex items-center ${isFlexCol ? "justify-between" : "w-auto"}`}>
          <button className={`flex items-center justify-between w-full text-white ${isFlexCol ? "" : "w-auto"}`}>
            <img src={guest} alt="Guest" className={`w-4 h-4 mr-2 ${isFlexCol ? "" : "ml-2 "}`} />
            <span className="text-base">Guest</span>
            <img src={chevronDown} alt="Chevron" className="w-4 h-4 mx-2" />
          </button>
        </div>

        {/* Search Button */}
        <div className={`w-full sm:w-auto flex ${isFlexCol ? "justify-center" : "justify-end"}`}>
          <button className="text-black bg-white hover:bg-gray-200 rounded-full px-5 py-1 text-base">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBarTour;
