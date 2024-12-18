import { useState } from "react";
import classNames from "classnames";

const ToggleSwitch = () => {
  const [isSelected, setIsSelected] = useState(false); // Initial state is not selected

  return (
    <div
      onClick={() => setIsSelected(!isSelected)}
      className="relative flex w-20 h-12 bg-white/30 backdrop-blur-md rounded-full transition-all duration-500 items-center px-1 cursor-pointer"
    >
      {/* Toggle Circle */}
      <span
        className={classNames(
          "absolute h-10 w-10 bg-white rounded-full transition-transform duration-500 shadow-lg",
          {
            "translate-x-0": !isSelected, // Default position
            "translate-x-8": isSelected, // Move right when selected
          }
        )}
      ></span>

      {/* Labels */}
      <span
        className={classNames(
          "text-black text-sm font-normal transition-opacity duration-500 absolute left-3.5",
        )}
      >
        De
      </span>
      
      {/* <div className="flex-grow"></div> Spacer to separate labels */}

      <span
        className={classNames(
          "text-black text-sm font-normal transition-opacity duration-500 absolute left-12",
        )}
      >
        En
      </span>
    </div>
  );
};

export default ToggleSwitch;
