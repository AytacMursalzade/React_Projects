import React, { useState } from "react";
import { PiMoonStarsLight } from "react-icons/pi";


function DarkLight() {
  const [IsColor, setIsColor] = useState(false);

  const handleClick = () => {
    setIsColor(!IsColor);
  };
  return (
    <div className={`main ${IsColor ? "dark-mode" : "white-mode"}`}>
      <button
        className="text-[30px] ml-[1480px] pt-[12px] "
        onClick={handleClick}
      >
        <PiMoonStarsLight />
      </button>
    </div>
  );
}

export default DarkLight;
