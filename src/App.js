import React, {useState , useEffect} from "react";
import Todo from "./Components/ToDoList/Todo.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RandomProfile from "./Components/RandomProfileGenerator/RandomProfile.js";
import AccordionMenu from "./Components/AccordionMenu/AccordionMenu.js";
import IncDec from "./Components/IncDec/IncDec.js";
import Quote from "./Components/Quote/Quote";
import Menu from './Components/Menu/Menu';
import Shopping from './Components/Shopping/MainDev.js';
import NewModelApp from './Components/NewModelApp/RedInc.js';
import Word from './Components/WordReverseApp/Word.js';
import { PiMoonStarsLight } from "react-icons/pi";
import Calc from "./Components/Calculator/Calc.js";
import CocktailMenu from "./Components/Cocktails/CocktailMenu.js";

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')){
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function App() {

  const [theme, setTheme] = useState(getStorageTheme());

  const toggletheme = () => {
    if(theme === 'light-theme'){
      setTheme('dark-theme');
    }else{
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="bg-[#ABAAA6] ">

      
        
        <button className="text-[30px] ml-[1480px] pt-[12px] " onClick={toggletheme}><PiMoonStarsLight /></button>
      
      {/* <Menu /> */}
      <BrowserRouter>
        <Routes>
          <Route  index element={<Menu />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/incdec" element={<IncDec />} />
          <Route path="/randomprofile" element={<RandomProfile />} />
          <Route path="/accordionmenu" element={<AccordionMenu />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/modelapp" element={<NewModelApp />} />
          <Route path="/reverseapp" element={<Word />} />
          <Route path="/reverseapp" element={<Word />} />
          <Route path="/calculator" element={<Calc />} />
          <Route path="/cocktails" element={<CocktailMenu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
