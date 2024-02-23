import React from "react";
import { Link } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About";
import OneCocktails from "./pages/OneCocktails.js";
import Error from "./pages/Error";
import Cocktail from "./Cocktail.js";
import CocktailList from "./CocktailList.js";
import "./style.css";

function CocktailMenu() {
  return (
    <>
      <Link path="/" element={<Home />} />
      <Link path="/about" element={<About />} />
      <Link path="/cocktail/:id" element={<OneCocktails />} />
      <Link path="*" element={<Error />} />
      <Link path="/coctaillist" element={<CocktailList />} />

      <Cocktail/>
      
    </>
  );
}

export default CocktailMenu;
