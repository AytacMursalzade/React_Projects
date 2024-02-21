import React, { useState } from "react";

function Calc() {
  const [value, setValue] = useState("");

  return (
    <div className="bg-[grey] h-screen ">
      
        
        <div className="w-[320px] h-[400px] relative top-[80px] left-[120px] flex justify-center items-center  bg-[#BCA178] ml-[30%]  rounded-[9px]">
          <form action="">
            <div>
              <input
                className="bg-[#84735B] rounded-[3px] mx-[5px] py-[8px] px-[8px] "
                type="text"
                value={value}
              />
            </div>
            <div className="flex flex-col gap-[8px] mt-[18px] ">
              <div className="flex gap-[5px]">
                <input
                  className="w-[48px] h-[48px] bg-[red] rounded-[6px]  "
                  type="button"
                  value="AC"
                  onClick={(e) => setValue("")}
                />
                <input
                  className="w-[48px] h-[48px] bg-[red] rounded-[8px] "
                  type="button"
                  value="DE"
                  onClick={(e) => setValue(value.slice(0, -1))}
                />
                <input
                  className="w-[48px] h-[48px] bg-[red] rounded-[8px] "
                  type="button"
                  value="."
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  className="w-[48px] h-[48px] bg-[red] rounded-[8px] "
                  type="button"
                  value="/"
                  onClick={(e) => setValue(value + e.target.value)}
                />
              </div>
              <div className="flex gap-[5px]">
                <input
                  className="w-[48px] h-[48px] bg-[red] rounded-[8px] "
                  type="button"
                  value="7"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  className="w-[48px] h-[48px] bg-[red] rounded-[8px] "
                  type="button"
                  value="8"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  className="w-[48px] h-[48px] bg-[red] rounded-[8px] "
                  type="button"
                  value="9"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  className="w-[48px] h-[48px] bg-[red] rounded-[8px] "
                  type="button"
                  value="*"
                  onClick={(e) => setValue(value + e.target.value)}
                />
              </div>
              <div className="flex gap-[5px]">
                <input
                  className="w-[48px] h-[48px] bg-[red] rounded-[8px] "
                  type="button"
                  value="4"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  className="w-[48px] h-[48px] bg-[red] rounded-[8px] "
                  type="button"
                  value="5"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  className="w-[48px] h-[48px] bg-[red] rounded-[8px] "
                  type="button"
                  value="6"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  className="w-[48px] h-[48px] bg-[red] rounded-[8px] "
                  type="button"
                  value="+"
                  onClick={(e) => setValue(value + e.target.value)}
                />
              </div>
              <div className="flex gap-[5px]">
                <input
                  className="w-[48px] h-[48px] bg-[red] rounded-[8px] "
                  type="button"
                  value="1"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  className="w-[48px] h-[48px] bg-[red] rounded-[8px] "
                  type="button"
                  value="2"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  className="w-[48px] h-[48px] bg-[red] rounded-[8px] "
                  type="button"
                  value="3"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  className="w-[48px] h-[48px] bg-[red] rounded-[8px] "
                  type="button"
                  value="-"
                  onClick={(e) => setValue(value + e.target.value)}
                />
              </div>
              <div className="flex gap-[5px]">
                <input
                  className="w-[48px] h-[48px] bg-[red] rounded-[8px] "
                  type="button"
                  value="00"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  className="w-[48px] h-[48px] bg-[red] rounded-[8px] "
                  type="button"
                  value="0"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  className="w-[48px] h-[48px] bg-[red] rounded-[8px] "
                  type="button"
                  value="="
                  onClick={(e) => setValue(eval(value))}
                />
              </div>
            </div>
          </form>
        </div>
     
    </div>
  );
}

export default Calc;
