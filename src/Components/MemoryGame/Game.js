import React, { useState } from "react";
import ImageCard from "./ImageCard";
import "./game.css";
import "../../index.css"
import image1 from "../../assets/css.png";
import image2 from "../../assets/html.png";
import image3 from "../../assets/js.png";
import image4 from "../../assets/php.png";
import image5 from "../../assets/python.png";
import image6 from "../../assets/reactjs.png";
import image7 from "../../assets/reduxjs.png";
import image8 from "../../assets/sql.png";

function Game() {
  const [image, setImage] = useState(
    [
      { id: 1, img: image1, stat: "" },
      { id: 1, img: image1, stat: "" },
      { id: 2, img: image2, stat: "" },
      { id: 2, img: image2, stat: "" },
      { id: 3, img: image3, stat: "" },
      { id: 3, img: image3, stat: "" },
      { id: 4, img: image4, stat: "" },
      { id: 4, img: image4, stat: "" },
      { id: 5, img: image5, stat: "" },
      { id: 5, img: image5, stat: "" },
      { id: 6, img: image6, stat: "" },
      { id: 6, img: image6, stat: "" },
      { id: 7, img: image7, stat: "" },
      { id: 7, img: image7, stat: "" },
      { id: 8, img: image8, stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [lang, setLang] = useState(-1);

  function check(current) {
    if (image[current].id === image[lang].id) {
      const updatedImage = [...image];
      updatedImage[current].stat = "correct";
      updatedImage[lang].stat = "correct";
      setImage(updatedImage);
      setLang(-1);
    } else {
      const updatedImage = [...image];
      updatedImage[current].stat = "incorrect";
      updatedImage[lang].stat = "incorrect";
      setImage(updatedImage);

      setTimeout(() => {
        updatedImage[current].stat = "";
        updatedImage[lang].stat = "";
        setImage(updatedImage);
        setLang(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (lang === -1) {
      const updatedImage = [...image];
      updatedImage[id].stat = "active";
      setImage(updatedImage);
      setLang(id);
    } else {
      check(id);
    }
  }

  return (
    <>
      <div className="Memo">
        <h1 className="ml-[45%] mt-[80px] pb-[90px] ">Memory Game</h1>
        <div className="containerin">
          {image.map((item, index) => (
            <ImageCard
              key={index}
              id={index}
              handleClick={handleClick}
              item={item}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Game;
