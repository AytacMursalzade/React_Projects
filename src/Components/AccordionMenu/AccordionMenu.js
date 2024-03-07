import React, { useState } from "react";
import Question from "./Question";
import data from "./data";

function AccordionMenu() {
  const [questions, setQuestions] = useState(data);

  return (
    <div>
      
      <div className="Place flex flex-col gap-[10px] justify-center items-center">
        <div className="PlaceH pt-[60px] ">
          <h1>Accordion Menu</h1>
        </div>
        <div className="pt-[5%]">
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
