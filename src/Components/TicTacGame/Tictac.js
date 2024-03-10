import React, { useRef, useState , useEffect} from "react";
import "./boxes.css";
import image1 from "../../assets/crospng.png";
import image2 from "../../assets/circletransparant.png";

function Tictac() {
  const [count, setCount] = useState(0);
  const [board, setBoard] = useState(false);
  const titleRef = useRef(null);
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [winner, setWinner] = useState(null);

  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);

  const boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  function Handletoggle(e, num) {
    if (board) {
      return 0;
    }
    const imgElement = document.createElement("img");
    imgElement.src = count % 2 === 0 ? image1 : image2;
    e.target.innerHTML = "";
    e.target.appendChild(imgElement);
    data[num] = count % 2 === 0 ? "x" : "o";
    setCount((prevCount) => prevCount + 1);
    CheckWin();
  }

  function CheckWin() {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (data[a] && data[a] === data[b] && data[b] === data[c]) {
        setWinner(data[a]);
        return;
      }
    }

    if (count === 9) {
      setBoard(true);
      setWinner("draw");
      titleRef.current.innerHTML = "It's a draw!";
    }
  }

  useEffect(() => {
    if (winner) {
      Won();
    }
  }, [winner]);

  function Won() {
    setBoard(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations you won : <img class="winner-image" src="${image1}" alt="X" />`;
    } else if (winner === "o") {
      titleRef.current.innerHTML = `Congratulations you won : <img class="winner-image" src="${image2}" alt="O" />`;
    } else if (winner === "draw") {
      titleRef.current.innerHTML = "It's a draw!";
    }
  }
  

  function reset() {
    setBoard(false);
    setData(["", "", "", "", "", "", "", "", ""]);
    titleRef.current.innerText = "Tic Tac Toe Game";
    boxArray.forEach((boxRef) => {
      boxRef.current.innerHTML = "";
    });
    setCount(0);
    setWinner(null);
  }

  return (
    <div className="squareMain">
      <h1 ref={titleRef}>Tic Tac Game</h1>
      <div className="square">
        <div className="rightOne">
          <div
            className="boxes"
            ref={box1}
            onClick={(e) => {
              Handletoggle(e, 0);
            }}
          ></div>
          <div
            className="boxes"
            ref={box2}
            onClick={(e) => {
              Handletoggle(e, 1);
            }}
          ></div>
          <div
            className="boxes"
            ref={box3}
            onClick={(e) => {
              Handletoggle(e, 2);
            }}
          ></div>
        </div>
        <div className="rightTwo">
          <div
            className="boxes"
            ref={box4}
            onClick={(e) => {
              Handletoggle(e, 3);
            }}
          ></div>
          <div
            className="boxes"
            ref={box5}
            onClick={(e) => {
              Handletoggle(e, 4);
            }}
          ></div>
          <div
            className="boxes"
            ref={box6}
            onClick={(e) => {
              Handletoggle(e, 5);
            }}
          ></div>
        </div>
        <div className="rightThree">
          <div
            className="boxes"
            ref={box7}
            onClick={(e) => {
              Handletoggle(e, 6);
            }}
          ></div>
          <div
            className="boxes"
            ref={box8}
            onClick={(e) => {
              Handletoggle(e, 7);
            }}
          ></div>
          <div
            className="boxes"
            ref={box9}
            onClick={(e) => {
              Handletoggle(e, 8);
            }}
          ></div>
        </div>
      </div>

      <button
        className="w-[90px] h-[40px] bg-[grey] border rounded-[6px] px-[8px] py-[5px] text-center hover:bg-[#8e6464] animate-bounce"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
}

export default Tictac;
