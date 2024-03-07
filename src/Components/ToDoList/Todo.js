import React, { useState } from "react";
import "./style.css"

function Todo() {
  const [addWork, setAddWork] = useState("");
  const [trip, setTrip] = useState([]);

  const addWorkFn = () => {
    const item = () => ({
      id: Math.floor(Math.random() * 1000),
      name: addWork,
    });
    setTrip((olditem) => [...olditem, item()]);
    setAddWork("");
  };

  const deleteFn = (itemId) => {
    setTrip((olditem) => olditem.filter((item) => item.id !== itemId));
  };

  return (
    <div className="Place flex flex-col gap-[40px] mt-[50px] justify-center items-center  ">
      <div>
        <h1 className="font-bold text-[25px] flex  w-[100%] text-[#23112D]  ">
          Todo List
        </h1>
      </div>
      <div className="PlaceTodo w-[30%] h-[400px] bg-[#2A1035] gap-[40px] flex flex-col items-center overflow-auto ">
        <div className="flex gap-[5px]">
          <input
            className="PlaceInput text-[#AC7792] text-bold rounded-[2px] w-[80%] bg-[#5E2E63] px-[8px] py-[3px] mt-[40px] "
            onChange={(e) => setAddWork(e.target.value)}
            value={addWork}
            type="text"
            placeholder="Written changed"
          />
          <button
            className="PlaceBtn rounded-[2px] h-[30px] w-auto bg-[#4C2453] text-[white] mt-[40px]  px-[8px] py-[3px]"
            onClick={addWorkFn}
          >
            Add
          </button>
        </div>
        <div>
          <ul className="flex flex-col gap-[3px]">
            {trip.map((item) => {
              return (
                <>
                  
                  <li
                    className="text-[#9F9D9D] w-[230px] h-[28px] px-[5px] rounded-[3px] bg-[#C3C2C2] gap-[8px]"
                    key={item.id}
                  >
                    {item.name}
                  </li>
                  <button
                    onClick={() => deleteFn(item.id)}
                    className="text-[white] px-[8px] py-[3px] rounded-[3px] text-bold bg-[#4C2453] "
                  >
                    Delete
                  </button>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
