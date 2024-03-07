import React from "react";
import { useState } from "react";

function Word() {
  const [change, setChange] = useState("");
  const [reverse, setReverse] = useState("");

  const handleInputChange = (e) => {
    setChange(e.target.value);
  };

  const handleInputReverse = () => {
    const reverse = change.toString().split("").reverse().join("");
    setReverse(reverse);
  };

  return (
    <div className=" flex flex-col items-center gap-[50px] w-auto   pl-[5%] pt-[15%] ">
      <div className="mt-[-120px] mb-[100px] "><h1>Word Reverse App</h1></div>
      <div className="flex gap-[12px] ">
        <input className="bg-[red] rounded-[8px] px-[8px] "
          type="text"
          value={change}
          placeholder="Please word written"
          onChange={handleInputChange}
        />
        <button className="bg-[yellow] w-[120px] py-[8px]  border-[8px] border-radius-[9px] " onClick={handleInputReverse}>Submit</button>
      </div>
      
      {reverse && <p>Finally: {reverse}</p>}
    </div>
  );
}

export default Word;
