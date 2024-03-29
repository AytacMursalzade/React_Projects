import React from "react";
import { NavLink } from "react-router-dom";
import Cardapp from "./Cardapp";
import { GrReactjs } from "react-icons/gr";

function Menu() {
  const links = [
    { to: "/todo", name: "ToDo", icon: <GrReactjs /> },
    { to: "/incdec", name: "Increment Or Decrement", icon: <GrReactjs /> },
    { to: "/randomprofile", name: "Random Profile", icon: <GrReactjs /> },
    { to: "/accordionmenu", name: "Accordion Menu", icon: <GrReactjs /> },
    { to: "/quote", name: "Quote", icon: <GrReactjs /> },
    { to: "/shopping", name: "Shopping Day", icon: <GrReactjs /> },
    { to: "/modelapp", name: "Redux App", icon: <GrReactjs /> },
    { to: "/reverseapp", name: "Word Reverse App", icon: <GrReactjs /> },
    { to: "/calculator", name: "Calculator App", icon: <GrReactjs /> },
    { to: "/rolldice", name: "Roll Dice ", icon: <GrReactjs /> },
    { to: "/notepad", name: "NotePad ", icon: <GrReactjs /> },
    { to: "/stopwatch", name: "Stopwatch", icon: <GrReactjs /> },
    { to: "/drapdrop", name: "DrapDrop", icon: <GrReactjs /> },
    { to: "/memory", name: "Memory Game", icon: <GrReactjs /> },
    { to: "/tictac", name: "XO Game", icon: <GrReactjs /> },

  ];

  return (
    <div>
      <div className="MenuMain flex flex-wrap gap-[50px]  ">
        {links.map((link) => (
          <NavLink className="w-[150px] h-[150px] " key={link.to} to={link.to}>
            <Cardapp name={link.name} icon={link.icon}/>           
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Menu;
