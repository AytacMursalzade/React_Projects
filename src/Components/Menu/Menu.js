import React, { useState } from "react";
import Cardapp from "./Cardapp";
import Todo from './../ToDoList/Todo';
import AccordionMenu from "../AccordionMenu/AccordionMenu";
import IncDec from "../IncDec/IncDec";
import Quote from "../Quote/Quote";
import RandomProfile from "../RandomProfileGenerator/RandomProfile";

function Menu() {
  const [openTodo, setOpenToDo] = useState(0);
  const clickFn = (cardNumber)=>{
    setOpenToDo(cardNumber);
  }
  // const cardapps = Array.from({ length: 10 }, (_,index) => {
  //   <Cardapp key={index} onclick={() => clickFn(index)} />;
  // });

  const allTodo = [
    <AccordionMenu key={0} cardNumber={0} />,
    <IncDec key={1} cardNumber={1} />,
    <Quote key={2} cardNumber={2} />,
    <RandomProfile key={3} cardNumber={3} />,
    <Todo key={4} cardNumber={4} />
  ]

  const selectedTodo = allTodo[openTodo]

  return (
    <div className="bg-[#887A82]  h-[150px] w-[100%] flex  overflow-x-scroll px-[20px]   ">
      {selectedTodo}
      <div className="flex items-center gap-[20px] ">
        <Cardapp onClick={()=>(clickFn(0))} />
        <Cardapp onClick={()=>(clickFn(1))} />
        <Cardapp onClick={()=>(clickFn(2))} />
        <Cardapp onClick={()=>(clickFn(3))} />
        <Cardapp onClick={()=>(clickFn(4))} />
      </div>
      
    </div>
  );
}

export default Menu;
