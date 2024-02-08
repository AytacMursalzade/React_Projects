import React from "react";

function Shopping({ product, basket, setBasket }) {
  function addBasket(product) {
    const addFind = basket.find((item) => item.id === product.id);
    console.log(addFind);
    if (addFind) {
      addFind.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        {
          id: product.id,
          name: product.name,
          img: product.img,
          price: product.price,
          amount: addFind.amount,
        },
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          name: product.name,
          img: product.img,
          price: product.price,
          amount: 1,
        },
      ]);
    }
  }

  function removeBasket(product) {
    if (basket.length === 0) {
      return;
    }
    const removeFind = basket.find((item) => item.id === product.id);
    removeFind.amount -= 1;

    if (removeFind.amount === 0) {
      setBasket([...basket.filter((item) => item.id !== product.id)]);
    } else {
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        {
          id: product.id,
          name: product.name,
          img: product.img,
          price: product.price,
          amount: removeFind.amount,
        },
      ]);
    }
  }

  return (
    <div className=" w-[250px] pl-[80px]  ">
      <div>
        <div className="bg-[#A39583] flex flex-col gap-[5px] justify-center items-center ">
          <img
            className="w-[150px] h-[150px] flex justify-center"
            src={product.img}
            alt="product"
          />
          <div className="bg-[#A39583] flex flex-col items-center pb-[12px] gap-[8px]">
            <p>{product.name}</p>
            <p>{product.price} AZN </p>
          </div>
         
        </div>
        <div className="flex justify-around h-[28px] bg-[#ad9d8a] ">
            <button
              className="w-[50px]  bg-[#AC9C88]  "
              onClick={() => addBasket(product)}
            >
              <b> +</b>
            </button>
            {product.amount}

            <button
              className="w-[50px]  bg-[#AC9C88]  "
              onClick={() => removeBasket(product)}
            >
              <b>-</b>
            </button>
          </div>
      </div>
    </div>
  );
}

export default Shopping;
