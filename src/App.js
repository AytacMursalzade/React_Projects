import React from "react";
import Todo from "./Components/ToDoList/Todo.js";
import {BrowserRouter , Routes,Route} from "react-router-dom";
import RandomProfile from "./Components/RandomProfileGenerator/RandomProfile.js";
import AccordionMenu from "./Components/AccordionMenu/AccordionMenu.js";
import IncDec from './Components/IncDec/IncDec.js';
import Quote from './Components/Quote/Quote';

function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/incdec" element={<IncDec />} />
        <Route path="/randomprofile" element={<RandomProfile />} />
        <Route path="/accordionmenu" element={<AccordionMenu />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>  
  )
}

export default App;
