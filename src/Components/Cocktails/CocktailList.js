import React from 'react'
import { useGlobalContext } from './context';
import Loading from './Loading';
import Cocktail from './Cocktail';
import "./style.css";

export default function CocktailList() {

    const { cocktails, loading } = useGlobalContext();

    if(loading){
        return <Loading />
    };

    if(cocktails.lenght < 1){
        return(
            <h2 className='section-title'>no cocktails matched your search criteria</h2>    
        )
    }


  return (
    <section className='section'>
      <h2 className='section-title'>Cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map((item) => {
            return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}


