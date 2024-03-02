import React, { useState,useEffect } from "react";

function Stopwatch() {
  
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() =>{
    let interval;
    if(!running){
      interval= setInterval(()=>{
        setTime((prevTime) => prevTime +10);
      },10);
    }else if(!running){
      clearInterval(interval);
    }
    return() =>clearInterval(interval);
  },[running])


  return (
    <>
      <div>
        <h1>Stopwatch</h1>
        <span>{("0" + Math.floor(( time / 60000) % 60)).slice(-2)} : </span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)} : </span>
        <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        <button onClick={()=>{setRunning(true)}}>Start</button>
        <button onClick={()=>{setRunning(false)}}>Stop</button>
        <button onClick={()=>{setTime(0)}}>Reset</button>
      </div>
    </>
  );
}

export default Stopwatch;
