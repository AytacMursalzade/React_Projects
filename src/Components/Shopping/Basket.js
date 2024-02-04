import React from "react";

function Basket({ basket, cost }) {
  return (
    <div className="bg-[#654943] flex flex-col gap-[12px] justify-around text-[#A39583] items-center text-center w-[300px] h-[300px] overflow-auto mt-[55px] mx-[15px] ">
      <b><h1>Basket</h1></b>
      {(basket.length === 0 && <b><p>Not found product</p></b>) || null}
      {basket.map((item) => (
        <div>
          <img width={150} src={item.img} alt="image" />
          <p>{item.name} * {item.amount}</p>
          <p>{item.price * item.amount}AZN</p>
          
        </div>
      ))}

      {cost && <p>Total : AZN + {cost}</p> || null}
    </div>
  );
}

export default Basket;
