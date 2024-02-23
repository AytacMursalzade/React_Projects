import React, { useState } from "react";
import Die from "./Die";

function RollDice({ sides }) {
  const [state, setState] = useState({
    die1: "one",
    die2: "two",
    rolling: false,
    totalScore: 3,
  });

  const { die1, die2, totalScore, rolling } = state;
  

  const roll = () => {
    const newDie1 = sides[Math.floor(Math.random() * sides.length)];
    const newDie2 = sides[Math.floor(Math.random() * sides.length)];
    const score1 = Object.values(newDie1)[0];
    const score2 = Object.values(newDie2)[0];

    setState({
        die1: Object.keys(newDie1)[0],
        die2: Object.keys(newDie2)[0],
        rolling : true,
        totalScore: score1 + score2
    });

    setTimeout(()=>{
        setState((prevState) => ({...prevState, rolling:false}))
    },1000);
  };

  return (
    <div>
      <div>
        <Die face={String(die1)} rolling={rolling}/>
        <Die face={String(die2)} rolling={rolling}/>
      </div>
      <button className="ml-[29%] mt-[30px] w-[150px] h-[50px] bg-[navy] text-white " onClick={roll} disabled={rolling}>
        {rolling ? "Rolling..." : "Roll Dice"}
      </button>
      <h2 className="ml-[28%] mt-[30px] w-[180px] text-center  py-[12px] h-[50px] bg-[navy] text-white ">Total Score: {totalScore}</h2>
    </div>
  );
}

RollDice.defaultProps = {
  sides: [
    { one: 1 },
    { two: 2 },
    { three: 3 },
    { four: 4 },
    { five: 5 },
    { six: 6 },
  ],
};

export default RollDice;
