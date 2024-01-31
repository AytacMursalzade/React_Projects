import React, { useEffect, useState } from "react";

function Galery() {
  const [randomImg, setRandomImg] = useState("");
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [allMemeImg, setAllMemeImg] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((response) => {
        const { memes } = response.data;
        console.log(memes);
        setAllMemeImg(memes);
      });
  });

  function handleTopChange(e) {
    setTopText(e);
  }
  function handleBottomChange(e) {
    setBottomText(e);
  }
  function CheckRandom() {
    const randomNumber = Math.floor(Math.random() * 100);
    setRandomImg(allMemeImg[randomNumber]);
  }
  return (
    <div className="place h-screen bg-[#94AF9F] flex flex-col justify-center  items-center gap-[12px]  ">
      <div className="title rounded-[8px]">
        <h1></h1>
      </div>
      <div className="inputCheck w-[250px]  rounded-[8px] flex flex-col  items-center  gap-[15px] bg-[#B0D9B1] h-[80px] py-[5px]  ">
        <input
          className="w-[150px] h-[18px]"
          onChange={(e) => handleTopChange(e.target.value)}
          value={topText}
          type="text"
        />
        <input
          className="w-[150px] h-[18px]"
          onChange={(e) => handleBottomChange(e.target.value)}
          value={bottomText}
          type="text"
        />
        <div className="Btnimg w-[250px] h-[250px] text-[white] font-extrabold flex flex-col justify-center items-center rounded-[8px] bg-[#B0D9B1]  relative">
          <div>
            <h1 className="absolute top-[9px] ">{topText}</h1>
            <h1 className="absolute bottom-[50px] ">{bottomText}</h1>
          </div>
          <img
            className="w-[250px] h-[250px] "
            src={randomImg.url}
            alt="image"
          />
          <div className="w-[250px] h-[20px] bg-[#B2A59B] cursor-pointer">
            <button onClick={CheckRandom}>Check Random</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Galery;
