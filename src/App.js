import React from "react";
import Todo from "./Components/ToDoList/Todo.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RandomProfile from "./Components/RandomProfileGenerator/RandomProfile.js";
import AccordionMenu from "./Components/AccordionMenu/AccordionMenu.js";
import IncDec from "./Components/IncDec/IncDec.js";
import Quote from "./Components/Quote/Quote";
import Menu from "./Components/Menu/Menu";
import Shopping from "./Components/Shopping/MainDev.js";
import NewModelApp from "./Components/NewModelApp/RedInc.js";
import Word from "./Components/WordReverseApp/Word.js";
import Calc from "./Components/Calculator/Calc.js";
import RollMenu from "./Components/Roll Dice/RollMenu.js";
import Notemenu from "./Components/Notepad/Notemenu.js";
import "./index.css";
import DarkLight from "./Components/DarkLight.js";
import Stopwatch from "./Components/StopWatch/Stopwatch.js";
import DrapDrop from "./Components/DrapDrop/DrapDrop.js";
import MainGame from "./Components/MemoryGame/MainGame.js";
import Tictac from './Components/TicTacGame/Tictac';

function App() {
  return (
    <>
      <div>
        <div className=" w-[100%]">
        <DarkLight />
          
          {/* <Menu /> */}
          <BrowserRouter>
            <Routes>

              <Route index element={<Menu />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/rolldice" element={<RollMenu />} />
              <Route path="/incdec" element={<IncDec />} />
              <Route path="/randomprofile" element={<RandomProfile />} />
              <Route path="/accordionmenu" element={<AccordionMenu />} />
              <Route path="/quote" element={<Quote />} />
              <Route path="/shopping" element={<Shopping />} />
              <Route path="/modelapp" element={<NewModelApp />} />
              <Route path="/reverseapp" element={<Word />} />
              <Route path="/calculator" element={<Calc />} />
              <Route path="/notepad" element={<Notemenu />} />
              <Route path="/stopwatch" element={<Stopwatch />} />
              <Route path="/drapdrop" element={<DrapDrop />} />
              <Route path="/memory" element={<MainGame />} />
              <Route path="/tictac" element={<Tictac />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
