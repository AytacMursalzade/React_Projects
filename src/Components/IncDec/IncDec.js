import React, {useState} from "react";

function IncDec() {
  const [count, setCount] = useState(0);

  function IncrementFn(){
    setCount(prevCount  => prevCount + 1)
  }
  function DecrementFn(){
    setCount(prevCount  => prevCount - 1)
  }

  return (
    <div className="Place h-screen flex flex-col justify-center items-center bg-[#a99163] ">
      <div className="text-[30px]  "><h1>Increment Decrement App</h1></div>
      <div className="CountText w-[500px] h-[200px] bg-[#F6FDC3] flex justify-center items-center">
        <p>{count}</p>
      </div>
      <div className="Btn flex w-[500px] h-[50px] bg-[#FFCC70] justify-around ">
        <button onClick={IncrementFn} className="w-[90px] bg-[#FFCF96]">Increment</button>
        <p className="flex items-center" >{count}</p>
        <button onClick={DecrementFn} className="w-[90px] bg-[#FFCF96]">Decrement</button>
      </div>
    </div>
  );
}

export default IncDec;
