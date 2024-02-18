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
  ];

  return (
    <div className="bg-[#ABAAA6]  h-screen w-[100%]  px-[20px]   ">
      <div className="flex items-center gap-[20px] ">
        {links.map((link) => (
          <NavLink className="w-[150px] h-[150px]" key={link.to} to={link.to}>
            <Cardapp name={link.name} icon={link.icon}/>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Menu;
