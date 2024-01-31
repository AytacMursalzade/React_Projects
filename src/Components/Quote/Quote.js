import React, { useState } from "react";

function Quote() {

  
  const quote = [
    {
      title: `"Life is 10% what happens to us and 90% how we react to it."`,
      author: "Charles R. Swindoll",
    },
    {
      title: `"The only way to do great work is to love what you do."`,
      author: "Steve Jobs",
    },
    {
      title: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
      author: "Winston Churchill",
    },
    {
      title: `"Your time is limited, don't waste it living someone else's life"`,
      author: "Steve Jobs",
    },
    {
      title: `"The only limit to our realization of tomorrow will be our doubts of today."`,
      author: " Franklin D. Roosevelt",
    },
    {
      title: `"In the middle of difficulty lies opportunity"`,
      author: "Albert Einstein",
    },
  ];
  const [text, setText] = useState({title:quote[0].title, author:quote[0].author});


  function checkFn() {
    const randomIndex = Math.floor(Math.random() * (quote.length - 1));

    setText(quote[randomIndex]);
  }

  return (
    <div className="Place h-screen bg-[#7E6363] flex flex-col justify-center items-center gap-[8px] ">
      <div className="placeTitle font-bold text-[35px] mb-[5px] ">
        <h1>Quote of the day</h1>
      </div>
      <div className="placeText w-[35%] h-[40%] bg-[#BBAB8C] flex flex-col justify-center font-bold gap-[10px] ">
      <p className="title text-center">{text.title}</p>
        <p className="author text-end mr-[50px] ">{text.author}</p>
        
      </div>
      <div className="placeBtn w-[35%] h-[4%] bg-[#BBAB8C] text-center font-extrabold ">
        <button onClick={checkFn}>Check Please</button>
      </div>
    </div>
  );
}

export default Quote;
