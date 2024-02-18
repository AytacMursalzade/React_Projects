import React, { useState } from "react";
import Question from "./Question";
import data from "./data";

function AccordionMenu() {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="Place h-screen bg-[#c0b1b9] flex flex-col gap-[50px] justify-center items-center">
      <div className="PlaceH  ">
        <h1>Accordion Menu</h1>
      </div>
      <div>
        <section className="PlaceList ">
          {questions.map((item) => {
            return <Question key={item.id} {...item} />;
          })}
        </section>
      </div>
    </div>
  );
}

export default AccordionMenu;
