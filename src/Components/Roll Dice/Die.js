import React, { useState, useEffect } from "react";
import "./style.css";
import image1 from "../../assets/1.png";
import image2 from "../../assets/die-face-2.png";
import image3 from "../../assets/die-face-3.png";
import image4 from "../../assets/die-face-4.png";
import image5 from "../../assets/5.png";
import image6 from "../../assets/die-face-6.png";

function Die({ rolling }) {
  const faces = ["one", "two", "three", "four", "five", "six"];
  const [face, setFace] = useState(faces[0]);

  useEffect(() => {
    if (rolling) {
      const randomFace = faces[Math.floor(Math.random() * faces.length)];
      setFace(randomFace);
    }
  }, [rolling, faces]);

  const getImageSource = (face) => {
   
    switch (face) {
      case "one":
        return image1 ;
      case "two":
        return image2;
      case "three":
        return  image3 ;
      case "four":
        return  image4 ;
      case "five":
        return image5;
      case "six":
        return image6;
     
      default:
        return "";
    }
  };

  return (
    <>
      <img
        src={getImageSource(face)}
        alt={`${face}`}
        className={`die ${rolling && "shaking"}` }
      />
    </>
  );
}

export default Die;