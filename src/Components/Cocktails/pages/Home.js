import React from 'react'
import CocktailList from '../CocktailList'
import Search from '../Search'
import "../style.css";


export default function Home() {
  return (
    <main>
      <Search />
      <CocktailList />
    </main>
  )
}
