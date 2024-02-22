import React, {useEffect, useRef} from "react";
import { useGlobalContext } from './context';


export default function Search() {


  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

    useEffect(()=>{
      searchValue.current.focus();
    },[]);

    const searchCocktail = ()=>{
        setSearchTerm(searchValue.current.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </div>
  );
}
