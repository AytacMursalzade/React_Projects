import React, { useRef, useState } from "react";
import "./boxes.css";
import circle from "../../assets/o.png";
import cross from "../../assets/x.png";



const data = ["", "", "", "", "", "", "", "", ""];

function Tictac() {
  const [count, setCount] = useState(0);
  const [board, setBoard] = useState(false);
  const titleRef = useRef(null);

  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);

  const boxArray = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

  function Handletoggle(e, num) {
    if (board) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src=${circle}>`;
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src=${cross}>`;
      data[num] = "o";
      setCount(++count);
    }
    CheckWin();
  }
  function CheckWin() {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      Won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      Won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      Won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      Won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      Won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      Won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      Won(data[8]);
    } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      Won(data[2]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      Won(data[6]);
    }
  }
  function Won(winner) {
    setBoard(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations you won : <img src=${
        cross
      }>`;
    } else {
      titleRef.current.innerHTML = `Congratulations you won : <img src=${
         circle
      }>`;
    }
  }

  function reset() {
    setBoard(false);
    const data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = "Tic Tac Toe Game";
    boxArray.map((e) => {
        e.current.innerHTML = "";
    })
  }
  return (
    <div className="squareMain">
      <h1 ref={titleRef}>Tic Tac Game</h1>
      <div className="square">
        <div className="rightOne">
          <div
            className="boxes" ref={box1}
            onClick={(e) => {
              Handletoggle(e, 0);
            }}
          ></div>
          <div
            className="boxes"  ref={box2}
            onClick={(e) => {
              Handletoggle(e, 1);
            }}
          ></div>
          <div
            className="boxes" ref={box3}
            onClick={(e) => {
              Handletoggle(e, 2);
            }}
          ></div>
        </div>
        <div className="rightTwo">
          <div
            className="boxes" ref={box4}
            onClick={(e) => {
              Handletoggle(e, 3);
            }}
          ></div>
          <div
            className="boxes" ref={box5}
            onClick={(e) => {
              Handletoggle(e, 4);
            }}
          ></div>
          <div
            className="boxes" ref={box6}
            onClick={(e) => {
              Handletoggle(e, 5);
            }}
          ></div>
        </div>
        <div className="rightThree">
          <div
            className="boxes" ref={box7}
            onClick={(e) => {
              Handletoggle(e, 6);
            }}
          ></div>
          <div
            className="boxes" ref={box8}
            onClick={(e) => {
              Handletoggle(e, 7);
            }}
          ></div>
          <div
            className="boxes" ref={box9}
            onClick={(e) => {
              Handletoggle(e, 8);
            }}
          ></div>
        </div>
      </div>
     
        <button onClick={reset}>Reset</button>
      
    </div>
  );
}

export default Tictac;
