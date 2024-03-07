import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../Redux/counterSlice.js";
import image from '../../assets/redux.png';

export default function RedInc() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div className="flex flex-col items-center pt-[150px] gap-[30px] ">
      <div className="w-[150px]"><img src={image} alt="redux" /></div>
      <h1>Your count: {count}</h1>
      <div className="flex gap-[10px] text-center">
        <button
          className="w-[75px] h-[30px] hover:bg-[#787772] bg-[#B4B4B8] "
          onClick={handleIncrement}
        >
          +
        </button>
        {count}
        <button
          className="w-[75px] h-[30px] hover:bg-[#787772] bg-[#B4B4B8] "
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
    </div>
  );
}
