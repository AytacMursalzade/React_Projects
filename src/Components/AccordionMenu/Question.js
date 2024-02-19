import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Question({ header, text }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="flex gap-[50px]">
      <div className="w-[380px] ">
        <h1>{text}</h1>
      </div>
      <div>
        <button onClick={() => setShowDetail(!showDetail)}>
          {showDetail ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showDetail && <p>{header}</p>}
    </div>
  );
}

export default Question;
