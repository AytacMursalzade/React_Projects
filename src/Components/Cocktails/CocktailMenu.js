import React from "react";
import { Link } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About";
import OneCoctails from "./pages/OneCoctails";
import Error from "./pages/Error";

function CocktailMenu() {
  return (
    <div>
      <Link path="/" element={<Home />} />
      <Link path="about" element={<About />} />
      <Link path="cocktail/:id" element={<OneCoctails />} />
      <Link path="*" element={<Error />} />
    </div>
  );
}

export default CocktailMenu;
