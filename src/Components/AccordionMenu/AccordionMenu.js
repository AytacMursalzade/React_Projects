import React, { useState } from "react";
import Question from "./Question";
import data from "./data";

function AccordionMenu() {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="bg-[#c0b1b9] h-screen">
      
      <div className="Place flex flex-col gap-[10px] justify-center items-center">
        <div className="PlaceH pt-[80px] ">
          <h1>Accordion Menu</h1>
        </div>
        <div className="pt-[10%]">
          <section className="PlaceList ">
            {questions.map((item) => {
              return <Question key={item.id} {...item} />;
            })}
          </section>
        </div>
      </div>
    </div>
  );
}

export default AccordionMenu;
