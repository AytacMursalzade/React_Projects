import React, { useState } from "react";
import ImageCard from './ImageCard';

function Game() {
  const [image, setImage] = useState(
    [
      { id: 1, img: "../../assets/html.png", stat: "" },
      { id: 1, img: "../../assets/html.png", stat: "" },
      { id: 2, img: "../../assets/css.png", stat: "" },
      { id: 2, img: "../../assets/css.png", stat: "" },
      { id: 3, img: "../../assets/php.png", stat: "" },
      { id: 3, img: "../../assets/php.png", stat: "" },
      { id: 4, img: "../../assets/js.png", stat: "" },
      { id: 4, img: "../../assets/js.png", stat: "" },
      { id: 5, img: "../../assets/reactjs.png", stat: "" },
      { id: 5, img: "../../assets/reactjs.png", stat: "" },
      { id: 6, img: "../../assets/redux.png", stat: "" },
      { id: 6, img: "../../assets/redux.png", stat: "" },
      { id: 7, img: "../../assets/sql.png", stat: "" },
      { id: 7, img: "../../assets/sql.png", stat: "" },
      { id: 8, img: "../../assets/python.png", stat: "" },
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
      <h1 className="ml-[45%] mt-[80px] ">Memory Game</h1>
      <div className="container">
        {image.map((item, index) => (
          <ImageCard
            key={index}
            id={index}
            handleClick={handleClick}
            item={item}
          />
        ))}
      </div>
    </>
  );
}

export default Game;
