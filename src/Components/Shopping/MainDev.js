import React, { useState } from "react";
import Product from "./Product";
import products from "./product.json";
import Basket from "./Basket";

function MainDev() {
  const [basket, setBasket] = useState([]);
  const [cost, setCost] = useState("");
  return (
    <div className="w-[100%] ">
      <b>
        <h1 className="text-center font-extrabold my-[25px] text-[32px] text-[#6C4C47] ">
          Shopping Day
        </h1>
      </b>
      <div className="flex ">
        <div className="flex flex-wrap gap-[12px]  px-[2px]">
          {products.map((product) => (
            <Product
              key={products.id}
              basket={basket}
              product={product}
              setBasket={setBasket}
            />
          ))}
        </div>
        <Basket  cost={cost} basket={basket} />
      </div>
    </div>
  );
}

export default MainDev;
