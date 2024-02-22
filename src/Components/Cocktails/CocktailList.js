import React from 'react'
import { useGlobalContext } from './context';
import Loading from './Loading';
import Cocktail from './Cocktail';

export default function CocktailList() {

    const { cocktails, loading } = useGlobalContext();

    if(loading){
        return <Loading />
    };

    if(cocktails.lenght < 1){
        return(
            <h2>no cocktails matched your search criteria</h2>    
        )
    }


  return (
    <div>
      <h2>Cocktails</h2>
      <div>
        {cocktails.map((item) => {
            return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </div>
  )
}


