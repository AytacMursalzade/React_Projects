import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (!running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <>
      <div className="flex flex-col items-center mt-[150px] ">
        <div>
          <h1>Stopwatch</h1>
          <div className="ml-[60px] mt-[80px] ">
            <span className="text-[#35374B] font-semibold ">
              {("0" + Math.floor((time / 60000) % 60)).slice(-2)} :{" "}
            </span>
            <span className="text-[#35374B] font-semibold ">
              {("0" + Math.floor((time / 60000) % 60)).slice(-2)} :{" "}
            </span>
            <span className="text-[#35374B] font-semibold ">
              {("0" + Math.floor((time / 10) % 100)).slice(-2)}
            </span>
          </div>
        </div>
        <div className="flex gap-[16px] mt-[20px] ">
          <button
            className="bg-green w-[50px] h-[35px] text-[#35374B] font-semibold border rounded-[5px]  "
            onClick={() => {
              setRunning(false);
            }}
          >
            Start
          </button>
          <button
            className="bg-green w-[50px] h-[35px] text-[#35374B] font-semibold border rounded-[5px] "
            onClick={() => {
              setRunning(true);
            }}
          >
            Stop
          </button>
          <button
            className="bg-green w-[50px] h-[35px] text-[#35374B] font-semibold border rounded-[5px] "
            onClick={() => {
              setTime(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Stopwatch;
