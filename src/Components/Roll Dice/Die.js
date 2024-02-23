import React from "react";
import "./style.css";
import { FaDiceTwo } from "react-icons/fa6";

function Die({ face, rolling }) {
  return (
    <>
      
      <FaDiceTwo className={`die ${face} ${rolling && "shaking"}`} />
    </>
  );
}

export default Die;
